const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.google.com/?gws_rd=ssl
  await page.goto('https://www.google.com/?gws_rd=ssl');
  // Click [aria-label="Tìm kiếm"]
  await page.locator('[aria-label="Tìm kiếm"]').click();
  // Fill [aria-label="Tìm kiếm"]
  await page.locator('[aria-label="Tìm kiếm"]').fill('yotube');
  // Press Enter
  await page.locator('[aria-label="Tìm kiếm"]').press('Enter');
  await page.waitForURL('https://www.google.com/search?q=yotube&source=hp&ei=uYfHYrSDDpfn2roPxLCMgAk&iflsig=AJiK0e8AAAAAYseVyT80ogYwQuDL_B-9qEJ-j1tXzN4J&ved=0ahUKEwj0w-i1kej4AhWXs1YBHUQYA5AQ4dUDCAc&uact=5&oq=yotube&gs_lcp=Cgdnd3Mtd2l6EAMyEwguELEDEIMBELEDEMcBENEDEAoyBwgAELEDEAoyBAgAEAoyCggAELEDEIMBEAoyBwgAELEDEAoyCAgAELEDEIMBMgoIABCxAxCDARAKMgcIABCxAxAKMgoIABCxAxCDARAKMggIABCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOgQIABADOggIABCABBCxAzoFCAAQgAQ6DgguEIAEELEDEIMBENQCOggILhCxAxCDAToFCC4QgAQ6GQguELEDEIMBELEDELEDEMcBENEDENQCEAo6BwgAEIAEEAo6CwguEIAEEMcBEK8BUMobWJcmYJAqaAFwAHgAgAFliAG7BJIBAzUuMZgBAKABAbABAA&sclient=gws-wiz');
  // Click text=YouTubehttps://www.youtube.com › ...https://www.youtube.com › ...Tương tự >> h3
  await page.locator('text=YouTubehttps://www.youtube.com › ...https://www.youtube.com › ...Tương tự >> h3').click();
  await page.waitForURL('https://www.youtube.com/');
 
  // ---------------------
  await context.close();
  await browser.close();
})();