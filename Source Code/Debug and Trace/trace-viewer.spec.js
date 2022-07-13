const { test, expect, chromium } = require("@playwright/test");

test("open-letcode", async ({ page, browser, context }) => {
  browser = await chromium.launch({
    headless: false,
    slowMo: 150,
  });

  context = await browser.newContext({});

  await context.tracing.start({ screenshots: true, snapshots: true });

  page = await context.newPage();

  await page.goto("https://letcode.in/");

  await expect(page).toHaveURL("https://letcode.in/");

  await expect(page.locator('text=LetCode with Koushik').first()).toBeVisible();

  await Promise.all([
    page.waitForNavigation(),
    await page.locator("text=Log in").click(),
  ]);

  await expect(page).toHaveURL("https://letcode.in/signin");

  await page.pause();

    await expect(page)
      .locator(
        'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
      )
      .click(),


  await page
    .locator(
      'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
    )
    .fill("minhkhoa2706@gmail.com");

  // Press Tab
  await page
    .locator(
      'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
    )
    .press("Tab");

  // Fill [placeholder="Enter password"]
  await page.locator('[placeholder="Enter password"]').fill("khoaminh2706");

  // Click text=LOGIN
  await page.locator("text=LOGIN").click();
  await page.locator("text=Sign out").click();

  await context.tracing.stop({ path: 'trace.zip' });

  await page.close();
  await context.close();
  await browser.close();
});
