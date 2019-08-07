// base page configuration
let Page = require('./basePage');

// Selector Values
const locator = require('../utils/locator');

// Define Input Variables
const dropdwn = locator.dropdwn;
const dropdownid = locator.dropdownid;
const option1 = locator.option1;


let dropdownitem,selectoption1;

Page.prototype.dropdownpage = async function () {
    dropdownitem = await this.dropdown(dropdwn);
    await dropdownitem.click();

    const pageSource = await this.driver.getPageSource();

    return await this.driver.wait(async function () {
        return pageSource.includes(dropdownid);
    }, 50000);
};

Page.prototype.SelectOption1 = async function() {
    selectoption1 = await this.dropoption1(option1);
    await selectoption1.click();

    const pageSource = await this.driver.getPageSource();

    return await this.driver.wait(async function () {
        return pageSource.includes(option1);
    }, 50000);
}


module.exports = Page;