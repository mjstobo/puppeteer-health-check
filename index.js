const robotsUtil = require('./utils/robots')
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.luminary.com/robots.txt');
    const robotTxtVal = await page.$eval('body', el => el.innerText);
    
    await robotsUtil.parseRobotsTxt(robotTxtVal);
    await browser.close();

})();

  