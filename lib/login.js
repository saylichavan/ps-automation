// base page configuration
let Page = require('./basePage');

// Selector Values
const locator = require('../utils/locator');

// Fake Input Data 
const fake = require('../utils/fakeData');

// Define Input Variables
const usernameInputSelectorId = locator.usernameInputSelectorId;
const passwordInputSelectorId = locator.passwordInputSelectorId;
const resultText = locator.resultText;

// Define fake input data
const fakeUserNameKeyword = fake.username;
const fakePasswordKeyword = fake.password;

let usernameInput, passwordInput, loginButton, resultStat;

Page.prototype.findUserName = async function () {
    usernameInput = await this.findById(usernameInputSelectorId);

    const result = await this.driver.wait(async function () {
        const usernameInputEnableFlag = await usernameInput.isEnabled();
        return {
            inputEnabled: usernameInputEnableFlag
        }
    }, 5000);
    return result;
};

Page.prototype.findPassword = async function () {
    passwordInput = await this.findById(passwordInputSelectorId);


    const result = await this.driver.wait(async function () {
        const passwordInputEnableFlag = await passwordInput.isEnabled();

        return {
            inputEnabled: passwordInputEnableFlag
        }
    }, 5000);
    return result;
};

Page.prototype.authenticate = async function () {
    // get input fields
    usernameInput = await this.findById(usernameInputSelectorId);
    passwordInput = await this.findById(passwordInputSelectorId);

    // fill input fields
    await this.write(usernameInput, fakeUserNameKeyword);
    await this.write(passwordInput, fakePasswordKeyword);

    // get login button
    loginButton = await this.findSubmitButton();

    await loginButton.click();

    const pageSource = await this.driver.getPageSource();

    return await this.driver.wait(async function () {
        return pageSource.includes(resultText);
    }, 5000);
};

module.exports = Page;