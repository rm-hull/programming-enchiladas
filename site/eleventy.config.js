import * as yaml from 'js-yaml';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Merge gists.yaml listing with fetched demos/<slug>/meta.json state
function loadDemos() {
  const raw = readFileSync(join(__dirname, '../gists.yaml'), 'utf-8');
  const data = yaml.load(raw);
  const demosDir = join(__dirname, '../demos');
  
  return data.demos.map(demo => {
    const slug = `${demo.owner}-${demo.gist_id}`;
    const metaPath = join(demosDir, slug, 'meta.json');
    
    let fetchedMeta = {};
    if (existsSync(metaPath)) {
      fetchedMeta = JSON.parse(readFileSync(metaPath, 'utf-8'));
    }
    
    // Merge: gist.yaml entry first, then fetched meta.json overrides with runtime state
    return { ...demo, ...fetchedMeta };
  });
}

export default function (eleventyConfig) {
  // ── Data ─────────────────────────────────────────────────────────────────
  eleventyConfig.addGlobalData('demos', () => {
    return loadDemos();
  });

  // ── Collections ──────────────────────────────────────────────────────────

  // All demos (latest first by gist_id, which is chronological)
  eleventyConfig.addCollection('demosLatest', (collectionApi) => {
    return loadDemos().sort((a, b) => Number(b.gist_id) - Number(a.gist_id));
  });

  // Demos grouped by tag (returns sorted array of {tag, demos})
  eleventyConfig.addCollection('demosByTag', (collectionApi) => {
    const demos = loadDemos();
    const grouped = {};
    for (const demo of demos) {
      for (const tag of (demo.tags || [])) {
        (grouped[tag] = grouped[tag] || []).push(demo);
      }
    }
    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([tag, demos]) => ({ tag, demos }));
  });

  // ── Filters ───────────────────────────────────────────────────────────────

  // Build a stable slug from owner + gist_id
  eleventyConfig.addFilter('demoSlug', (demo) => {
    return `${demo.owner}-${demo.gist_id}`;
  });

  // Convert gist data to a meta.json-like object for templates
  eleventyConfig.addFilter('demoUrl', (demo) => {
    return `/${demo.owner}/${demo.gist_id}/`;
  });

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    if (!dateObj) return '';
    return new Date(dateObj).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  });

  // ── Passthrough Copy ─────────────────────────────────────────────────────
  eleventyConfig.addPassthroughCopy({ 'public/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'public/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'public/js': 'js' });
  eleventyConfig.addPassthroughCopy({ '../compiler/public/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'public/favicon.png': 'favicon.png' });

  

  // ── Global Data ─────────────────────────────────────────────────────────
  eleventyConfig.addGlobalData('currentYear', () => new Date().getFullYear());

  // ── Config ─�─────────────────────────────────────────────────────────────
  return {
    dir: {
      input: '.',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['njk', 'md'],
  };
}
