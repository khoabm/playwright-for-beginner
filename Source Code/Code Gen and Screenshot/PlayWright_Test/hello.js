const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.facebook.com/
  await page.goto('https://www.facebook.com/');
  // Click [data-testid="royal_email"]
  await page.locator('[data-testid="royal_email"]').click();
  // Fill [data-testid="royal_email"]
  await page.locator('[data-testid="royal_email"]').fill('0925772567');
  // Press Tab
  await page.locator('[data-testid="royal_email"]').press('Tab');
  // Press CapsLock
  await page.locator('[data-testid="royal_pass"]').press('CapsLock');
  // Press CapsLock
  await page.locator('[data-testid="royal_pass"]').press('CapsLock');
  // Press CapsLock
  await page.locator('[data-testid="royal_pass"]').press('CapsLock');
  // Fill [data-testid="royal_pass"]
  await page.locator('[data-testid="royal_pass"]').fill('Tu02040101');
  // Press Enter
  await page.locator('[data-testid="royal_pass"]').press('Enter');
  await page.waitForURL('https://www.facebook.com/');
  // Click .du4w35lb > span > .j83agx80 > .oajrlxb2
  await page.locator('.du4w35lb > span > .j83agx80 > .oajrlxb2').click();
  // Click div[role="dialog"] >> text=Anh Tran
  await page.locator('div[role="dialog"] >> text=Anh Tran').click();
  await page.waitForURL('https://www.facebook.com/younga24/');
  // ---------------------
  await context.close();
  await browser.close();
})();