const { test, expect, chromium } = require('@playwright/test');

test.describe('demo test', () => {
    test.beforeAll(async ({browser}) => {

        context = await browser.newContext();
        await context.tracing.start({ screenshots: true, snapshots: true });
        page = await context.newPage();
    });

    test.afterAll(async () => {       
        await context.tracing.stop({ path: 'trace.zip' });
    });

    test('open-letcode', async({page}) => {       
      
        await page.goto('https://letcode.in/');
        await page.locator('text=Log in').click();
        await expect(page).toHaveURL('https://letcode.in/signin');
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').click();
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').fill('minhkhoa2706@gmail.com');
      
        // Press Tab
        await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').press('Tab');
      
        // Fill [placeholder="Enter password"]
        await page.locator('[placeholder="Enter password"]').fill('khoaminh2706');
      
        // Click text=LOGIN
        await page.locator('text=LOGIN').click();
        await page.locator('text=Sign out').click();
      
              

      })
})