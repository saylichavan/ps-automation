const { describe, it, after, before } = require('mocha');
const Page = require('../lib/login');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

(async function example() {
    try {
        describe('Internet Herokuapp automated testing', async function () {
            this.timeout(5000);
            let driver, page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://the-internet.herokuapp.com/login');
            });

            afterEach(async () => {
                await page.quit();
            });

            it('Entered username and password Successfully ', async () => {
                const userNameExists = await page.findUserName();
                const passwordExists = await page.findPassword();

                expect(userNameExists.inputEnabled).to.equal(true);
                expect(passwordExists.inputEnabled).to.equal(true);
            });

            it('Validate you have logged in Successfully ', async () => {
                const result = await page.authenticate();
                expect(result).to.be.equals(true);
            });

            it('Validate logout Successfully' , async() => {
                const logoutb = await page.logout();
                expect(logoutb).to.be.equals(true);

            });

        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();