// base page configuration
let Page = require('./basePage');

// Selector Values
const locator = require('../utils/locator');

// Define Input Variables
const tableSelectorId = locator.tableSelectorId;
const sortln = locator.sortln;

let sortTable,sortlastn;

Page.prototype.InfiniteScroll = async function () {
    sortTable = await this.scrollpage();
      
    const result = await this.driver.wait(async function () {
        const usernameInputEnableFlag = await sortTable.isEnabled();
        return {
            inputEnabled: usernameInputEnableFlag
        }
    }, 5000);
    return result;
};



module.exports = Page;