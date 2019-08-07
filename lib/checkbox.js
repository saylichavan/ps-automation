// base page configuration
let Page = require('./basePage');

// Selector Values
const locator = require('../utils/locator');

// Fake Input Data 
const fake = require('../utils/fakeData');

// Define Input Variables
const checkbox1 = locator.checkbox1;

let selectcheckbox1;

Page.prototype.selectChkbox1 = async function () {
    selectcheckbox1 = await this.cbk1(checkbox1);
selectcheckbox1.click();
selectcheckbox1.click();

//selectcheckbox1.getAttribute("checked");

    const result = await this.driver.wait(async function () {
        const Checkbox1EnableFlag = await selectcheckbox1.isEnabled();
        return {
            inputEnabled: Checkbox1EnableFlag
        }
    }, 5000);
    return result;
};



module.exports = Page;