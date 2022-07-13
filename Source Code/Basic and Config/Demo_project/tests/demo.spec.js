const {expect, test} = require('@playwright/test')
test('test UI',async({page})=>{
    await page.goto('/')
    await page.fill('#lbsInput','123')
    await page.fill('//input[@id="cmInput"]','123')
    await page.click('//button[text()="Calculate"]')
})


//async 1 2 3 > 1//2//3
//sync  1 2 3 > 1 > 2 > 3