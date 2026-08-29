const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Dynamically list files in site/public/js
const jsDir = path.join(__dirname, 'site/public/js');
const files = fs.readdirSync(jsDir).filter(file => file.endsWith('.js') && file !== 'main.js');

for (const file of files) {
  test(`Check demo: ${file}`, async ({ page }) => {
    // Derive the demo page URL from the JS filename
    // e.g., rm-hull-8776719.js -> /rm-hull/8776719/
    const slug = file.replace('.js', '');
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
    expect(errors.length, `Console errors found in ${file}: ${errors.join(', ')}`).toBe(0);
  });
}
