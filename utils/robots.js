const parseRobotsTxt = (robotTxt) => {
    let robotTxtArray = robotTxt.split('\n');
    robotTxtArray = robotTxtArray.filter(el => el.length > 0);
    robotTxtArray = robotTxtArray.filter(el => !(el.charAt(0) === '#'));

    let robotTxtObj = [];

    for (let index = 0; index < robotTxtArray.length; index++) {
        const el = robotTxtArray[index];
        let splitElement = el.split(':');

        if (splitElement.length > 2) {
            ret = splitElement[0];
            result = splitElement.splice(0, 3);
            result = result.slice(1).join(':');
            robotTxtObj.push([ret, result]);
        } else {
            robotTxtObj.push(splitElement);
        }
    }

    for (let index = 0; index < robotTxtObj.length; index++) {
        const el = robotTxtObj[index];
        switch (el[0].toLowerCase()) {
            case 'user-agent':
                console.log('user agent: ' + el[1])
                break;
            case 'allow':
                console.log('allow: ' + el[1])
                break;
            case 'disallow':
                console.log('disallow: ' + el[1])
                break;

            case 'sitemap':
                console.log('sitemap: ' + el[1])
                break;

            default:
                break;
        }
    }
}

const retrieveRobotTxt = async (page, url) => {
    const robotsTxtPage = page;
    try {
        await robotsTxtPage.goto(url + '/robots.txt');
    } catch (e) {
        return false;
    }
    return textVal = await robotsTxtPage.$eval('body', el => el.innerText);
}

const validateUserAgent = (agent) => {

}

module.exports = {
    parseRobotsTxt,
    retrieveRobotTxt
}