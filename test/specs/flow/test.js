const assert = require('assert');

describe('Amazon Search', () => {
    describe('Find and print first 15 tablet names which cost less than 70$', () => {

        it('Search Tablet', () => {
            browser.url("/");
            const searchtab_xpath = '//*[@id="twotabsearchtextbox"]';
            const searchbutton_xpath = '/html/body/div[1]/header/div/div[1]/div[3]/div/form/div[2]/div/input';
            browser.waitForExist(searchtab_xpath, 100000);
            browser.setValue(searchtab_xpath, 'tablet');
            browser.element(searchbutton_xpath).click();
        }) 

    })
})