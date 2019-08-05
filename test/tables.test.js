const { describe, it, after, before } = require('mocha');
const Page = require('../lib/tables');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

(async function example() {
    try {
        describe('Internet Herokuapp Tables automated testing', async function () {
            this.timeout(5000);
            let driver, page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://the-internet.herokuapp.com/tables');
            });

            afterEach(async () => {
                await page.quit();
            });

            it('Successfully visited the Table page', async () => {
                
                const TableExists = await page.findTable();
                expect(TableExists.inputEnabled).to.equal(true);
            });

            it('Sort the last name header file', async () => {
                
                const lastnameheader = await page.sortlastname();
                expect(lastnameheader).to.be.equals(true);
            });




        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();