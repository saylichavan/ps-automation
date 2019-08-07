const { describe, it, after, before } = require('mocha');
const Page = require('../lib/checkbox');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

(async function example() {
    try {
        describe('Internet Herokuapp Checkbox automated testing', async function () {
            this.timeout(50000);
            let driver, page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://the-internet.herokuapp.com/checkboxes');
            });

            afterEach(async () => {
                await page.quit();
            });

            it('Click both the checkboxes', async () => {
                
                const checkbox1 = await page.selectChkbox1();
                this.timeout(10000);

                expect(checkbox1.inputEnabled).to.equal(true);
            });



        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();