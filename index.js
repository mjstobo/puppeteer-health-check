const robotsUtil = require('./utils/robots')
const puppeteer = require('puppeteer');
const url = 'https://www.luminary.com';

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const robotTxtVal = await robotsUtil.retrieveRobotTxt(page, url);

    await robotsUtil.parseRobotsTxt(robotTxtVal);
    await browser.close();

})();

  