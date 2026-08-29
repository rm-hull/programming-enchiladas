const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Dynamically list files in site/public/js
const jsDir = path.join(__dirname, 'site/public/js');
const files = fs.readdirSync(jsDir).filter(file => file.endsWith('.js') && file !== 'main.js');

for (const file of files) {
  test(`Check demo: ${file}`, async ({ page }) => {
    // Navigate to a mock page that would load the JS
    // For now, let's just ensure we can load the page without console errors
    await page.goto('http://localhost:8080/');
    
    // Listen for console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.addScriptTag({ path: path.join(jsDir, file) });
    
    // Check if the script produced errors
    expect(errors.length, `Console errors found in ${file}: ${errors.join(', ')}`).toBe(0);
  });
}
