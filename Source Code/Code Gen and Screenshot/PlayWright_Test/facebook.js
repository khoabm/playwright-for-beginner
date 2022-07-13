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
  await page.screenshot({path: 'facebook_screen.png'});

  // Click [data-testid="royal_email"]
  await page.locator('[data-testid="royal_email"]').click();

  // Fill [data-testid="royal_email"]
  await page.locator('[data-testid="royal_email"]').fill('zidarose112@gmail.com');

  // Click [data-testid="royal_pass"]
  await page.locator('[data-testid="royal_pass"]').click();

  // Fill [data-testid="royal_pass"]
  await page.locator('[data-testid="royal_pass"]').fill('Tu02040101');

  // Click [data-testid="royal_login_button"]
  await page.locator('[data-testid="royal_login_button"]').click();
  await page.waitForURL('https://www.facebook.com/');

  // Click text=Nhóm >> nth=0
  await page.locator('text=Nhóm').first().click();
  await page.waitForURL('https://www.facebook.com/groups/feed/');

  // Click [aria-label="Bản xem trước nhóm"] >> text=Bộ tộc MixiGaming >> nth=0
  await page.locator('[aria-label="Bản xem trước nhóm"] >> text=Bộ tộc MixiGaming').first().click();
  await page.waitForURL('https://www.facebook.com/groups/1212236082236816/?hoisted_section_header_type=recently_seen&multi_permalinks=5127264954067223');

  // ---------------------
  await context.close();
  await browser.close();
})();