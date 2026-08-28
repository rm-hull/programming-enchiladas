import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default function (eleventyConfig) {
  // ── Data ─────────────────────────────────────────────────────────────────
  eleventyConfig.addGlobalData('demos', () => {
    const raw = readFileSync(join(__dirname, '../gists.yaml'), 'utf-8');
    const data = yaml.load(raw);
    return data.demos;
  });

  // ── Collections ──────────────────────────────────────────────────────────

  // All demos (latest first by gist_id, which is chronological)
  eleventyConfig.addCollection('demosLatest', (collectionApi) => {
    const demos = yaml.load(readFileSync(join(__dirname, '../gists.yaml'), 'utf-8')).demos;
    return [...demos].sort((a, b) => Number(b.gist_id) - Number(a.gist_id));
  });

  // Demos grouped by tag (returns sorted array of {tag, demos})
  eleventyConfig.addCollection('demosByTag', (collectionApi) => {
    const demos = yaml.load(readFileSync(join(__dirname, '../gists.yaml'), 'utf-8')).demos;
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
  eleventyConfig.addPassthroughCopy({ 'public/favicon.png': 'favicon.png' });

  // Don't copy compiled JS yet (Phase 4 handles that)

// ── Global Data ──────────────────────────────────────────────────────────────
  eleventyConfig.addGlobalData('currentYear', () => new Date().getFullYear());
  // eleventyConfig.addPassthroughCopy({ 'public/js': 'js' });

  // ── Config ────────────────────────────────────────────────────────────────
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
