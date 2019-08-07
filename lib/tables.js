// base page configuration
let Page = require('./basePage');

// Selector Values
const locator = require('../utils/locator');

// Fake Input Data 
const fake = require('../utils/fakeData');

// Define Input Variables
const tableSelectorId = locator.tableSelectorId;
const sortln = locator.sortln;

let sortTable, sortlastn;

Page.prototype.findTable = async function() {
    sortTable = await this.findById(tableSelectorId);

    const result = await this.driver.wait(async function() {
        const usernameInputEnableFlag = await sortTable.isEnabled();
        return {
            inputEnabled: usernameInputEnableFlag
        }
    }, 5000);
    return result;
};

Page.prototype.sortlastname = async function() {
    sortlastn = await this.clicksort(sortln);
    await sortlastn.click();

    const pageSource = await this.driver.getPageSource();

    return await this.driver.wait(async function() {
        return pageSource.includes(tableSelectorId);
    }, 5000);
};


module.exports = Page;