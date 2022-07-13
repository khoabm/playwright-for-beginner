const { firefox } = require('playwright');
(async () => {
  const browser = await firefox.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://fap.fpt.edu.vn/
  await page.goto('https://fap.fpt.edu.vn/');
  // Select 4
  await page.locator('select[name="ctl00\\$mainContent\\$ddlCampus"]').selectOption('4');
  await page.waitForURL('https://fap.fpt.edu.vn/');
  // Click #loginform div:has-text("Sign inSigned in") >> nth=4
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#loginform div:has-text("Sign inSigned in")').nth(4).click()
  ]);
  // Click [aria-label="Email hoặc số điện thoại"]
  await page1.locator('[aria-label="Email hoặc số điện thoại"]').click();
  // Fill [aria-label="Email hoặc số điện thoại"]
  await page1.locator('[aria-label="Email hoặc số điện thoại"]').fill('anhttse150289@fpt.edu.vn');
  // Press Enter
  await page1.locator('[aria-label="Email hoặc số điện thoại"]').press('Enter');
  await page1.waitForURL('https://accounts.google.com/signin/v2/challenge/pwd?redirect_uri=storagerelay%3A%2F%2Fhttps%2Ffap.fpt.edu.vn%3Fid%3Dauth264307&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=183063314780-0j6vj5ddfm7j3lsledglk2egnk18up7f.apps.googleusercontent.com&ss_domain=https%3A%2F%2Ffap.fpt.edu.vn&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow&cid=1&navigationDirection=forward&TL=AKqFyY_Ylfbe2kshx9MqI3U_X5LiFtg2Ku2z0LW_oHEa7JViqD_row6Sm733hQNe');
  // Fill [aria-label="Nhập mật khẩu của bạn"]
  await page1.locator('[aria-label="Nhập mật khẩu của bạn"]').fill('Tuanh123456789');
  // Click button:has-text("Tiếp theo")
  await page1.locator('button:has-text("Tiếp theo")').click();
  await page1.waitForURL('https://accounts.google.com/signin/oauth/consent?authuser=0&part=AJi8hAOw9kfGIwWJdzl8GVHZdElIY0wCT1WuRcNMOvZa126grIi3PLqsYxeCGmItnT1JMQE_LaofEWqlb1Uvtmw0O86IGlW0Zrwe3FcsaEj7CstapaK2ISMkcWqPVokeJLkKBAo0q0xaTJbeKf0YUy70zTKwdyNuzzgXxUkJFvPS8UL80pD92b440KbS7mswcEpvB9XcXmsZ2laQWmLSGNMGCRBj9tS5sJBwo3gc_CGnUn_P6m_aHfGU2zutPI5P-07TsubNVRzSYFzFoaxNVRQwihZVBw2LSQESi64C7Jlr79RhfrF_i6Uy9_2EXAdUHrCshvZ8kHZvDueHYP7abHBm5eheM_kwoxWW-1NeaeI981C05QyAQic_0rj5EQ5qKMeJXRLR-hPf-FpoM1ZAkepv2ApLBph6jluQxbsV7kSH9cIg8wLElAbup09UdXuU_ZJ4awUYgvSft4wFjAwiW2wqjpsupOZvAg&as=S-116756834%3A1657438841164139&client_id=183063314780-0j6vj5ddfm7j3lsledglk2egnk18up7f.apps.googleusercontent.com&rapt=AEjHL4N7AxUBMkjFAXo-MLQVS3TOHRwwUr96Fr8Ae1-20E1gmb3xtqAjk_T9XsePeDc_fpZsKiu_vpyiG4Eca3x_eOJp7QkC6g#');
  
  // Close page
  await page1.close();
  // Go to https://fap.fpt.edu.vn/Student.aspx
  await page.goto('https://fap.fpt.edu.vn/Student.aspx');
  // Click text=Weekly timetable
  await page.locator('text=Weekly timetable').click();
  await page.waitForURL('https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx');
  // ---------------------
  await context.close();
  await browser.close();
})();