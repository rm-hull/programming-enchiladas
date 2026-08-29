import * as yaml from 'js-yaml';
import MarkdownIt from 'markdown-it';
import markdownItTexmath from 'markdown-it-texmath';
import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Markdown renderer with syntax highlighting and math support ────────────
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (code, lang) => {
    if (lang === 'clojure' || lang === 'cljs') {
      const highlighted = Prism.highlight(code, Prism.languages.clojure, 'clojure');
      return '<pre class="language-clojure"><code>' + highlighted + '</code></pre>';
    }
    return null;
  }
});
// Enable TeX/LaTeX math rendering (MathJax compatible delimiters)
md.use(markdownItTexmath, {
  engine: 'mathjax',
  delimiters: ['(', ')', '$', '$', '\\[', '\\]']
});

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
    const merged = { ...demo, ...fetchedMeta, slug: `${demo.owner}-${demo.gist_id}` };
    return merged;
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
    for (const demo of demos.map(d => ({ ...d, slug: `${d.owner}-${d.gist_id}` }))) {
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

  // Read a file from a demo directory and return its contents
  eleventyConfig.addFilter('readFile', (filename, slug) => {
    const filePath = join(__dirname, '../demos', slug, filename);
    try {
      return readFileSync(filePath, 'utf-8');
    } catch (e) {
      return `[Could not read ${filename} from ${slug}/]`;
    }
  });

  // Render markdown content to HTML
  eleventyConfig.addFilter('renderMarkdown', (content) => {
    if (!content) return '';
    return md.render(content);
  });

  // Render a demo source file as HTML: markdown → rendered, .cljs → highlighted
  eleventyConfig.addFilter('renderSource', (filename, slug) => {
    const filePath = join(__dirname, '../demos', slug, filename);
    try {
      const content = readFileSync(filePath, 'utf-8');

      if (/\.md$/i.test(filename)) {
        // Render markdown with math support
        return { html: md.render(content), filename, isMarkdown: true };
      }

      if (/\.cljs$/i.test(filename)) {
        // Syntax-highlight ClojureScript
        const highlighted = Prism.highlight(content, Prism.languages.clojure, 'clojure');
        return {
          html: '<pre class="language-clojure"><code>' + highlighted + '</code></pre>',
          filename,
          isClojure: true
        };
      }

      // Plain text (e.g., .html, .txt)
      return {
        html: '<pre><code>' + content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>',
        filename,
        isText: true
      };
    } catch (e) {
      return {
        html: '<p>[Could not read ' + filename + ' from ' + slug + '/]</p>',
        filename,
        error: true
      };
    }
  });

  // ── Passthrough Copy ─────────────────────────────────────────────────────
  eleventyConfig.addPassthroughCopy({ 'public/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'public/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'public/js': 'js' });
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
