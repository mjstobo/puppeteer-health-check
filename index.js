const robotsUtil = require('./utils/robots')
const puppeteer = require('puppeteer');
const url = 'https://www.luminary.com';

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    const robotTxtVal = await robotsUtil.retrieveRobotTxt(page, url);

    if (robotTxtVal) {
        try {
            await robotsUtil.parseRobotsTxt(robotTxtVal);
        } catch (e) {
            console.log("Cannot be parsed " + e)
        }
    } else {
        console.log("Couldn't locate robots.txt. Please review.")
    }

    await browser.close();
})();