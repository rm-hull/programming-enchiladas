const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Dynamically list per-demo directories in site/public/js/demos/
const demosDir = path.join(__dirname, 'site/public/js/demos');
const demoEntries = fs.readdirSync(demosDir, { withFileTypes: true });
const slugs = [];

for (const entry of demoEntries) {
  if (entry.isDirectory()) {
    const mainJs = path.join(demosDir, entry.name, 'main.js');
    if (fs.existsSync(mainJs)) {
      slugs.push(entry.name);
    }
  }
}

for (const slug of slugs) {
  test(`Check demo: ${slug}`, async ({ page }) => {
    // Derive the demo page URL from the slug
    // e.g., rm-hull-8776719 -> /rm-hull/8776719/
    const [owner, gistId] = slug.split('-');
    const demoUrl = `http://localhost:8080/${owner}/${gistId}/`;

    // Listen for console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto(demoUrl);
    
    // Wait for demo JS to load and initialize
    await page.waitForTimeout(2000);
    
    // Check if the script produced errors
    expect(errors.length, `Console errors found in ${slug}: ${errors.join(', ')}`).toBe(0);
  });
}
