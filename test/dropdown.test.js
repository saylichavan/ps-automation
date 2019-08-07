const { describe, it, after, before } = require('mocha');
const Page = require('../lib/dropdown');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

(async function example() {
    try {
        describe('Internet Herokuapp DropDown automated testing', async function () {
            this.timeout(5000);
            let driver, page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://the-internet.herokuapp.com/dropdown');
            });

            afterEach(async () => {
                await page.quit();
            });

            it('Successfully visited the DropDown page', async () => {
                
                const drop = await page.dropdownpage();
                expect(drop).to.be.equals(true);
            });

            it('Select option 1' , async() => {
                const option1 = await page.SelectOption1();
                this.timeout(100000);
                expect(option1).to.be.equals(true);


            });



        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();