/*const { describe, it, after, before } = require('mocha');
=======
const { describe, it, after, before } = require('mocha');
>>>>>>> ffa6ddafac4bbe5d5001147ec2a79a5c5bc003b6
const Page = require('../lib/InfiniteScroll');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe('Internet Herokuapp Infinite Scrolling automated testing', async function() {
            this.timeout(5000);
            let driver, page;

            beforeEach(async() => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://the-internet.herokuapp.com/infinite_scroll');
            });

            afterEach(async() => {
                await page.quit();
            });

            it('Successfully visited the InfiniteScrolling page', async() => {
            });

        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})(); */