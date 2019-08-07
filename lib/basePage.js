// Required Packages
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// chrome instance
let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });

// setup page
var Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // wait and find a submit button
    this.findSubmitButton = async function() {
        await this.driver.wait(until.elementLocated(By.css("button[type='submit']")), 15000, 'Looking for element');
        return await this.driver.findElement(By.css("button[type='submit']"));
    };

    this.findlogoutButton = async function() {
        await this.driver.wait(until.elementLocated(By.partialLinkText('Logout')), 15000, 'Looking for element');
        return await this.driver.findElement(By.partialLinkText('Logout'));
    };

    this.clicksort = async function() {
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="table1"]/thead/tr/th[1]/span')), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath('//*[@id="table1"]/thead/tr/th[1]/span'));
    }

    this.dropdown = async function() {
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="dropdown"]')), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath('//*[@id="dropdown"]'));
    }

    this.dropoption1 = async function() {
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="dropdown"]/option[2]')), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath('//*[@id="dropdown"]/option[2]'));
    }

    this.cbk1 = async function() {
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="checkboxes"]/input[1]')), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath('//*[@id="checkboxes"]/input[1]'));
    }

    this.scrollpage = async function() {
        await this.driver.wait(util.elementLocated(By.css("div[class='jscroll-inner']")), 15000, 'Looking for element');
        return await this.driver.findElement(By.css("div[class='jscroll-inner']"));
    }



    // fill input web elements
    this.write = async function(el, txt) {
        return await el.sendKeys(txt);
    };
};

module.exports = Page;