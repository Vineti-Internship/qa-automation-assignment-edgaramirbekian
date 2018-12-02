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

        it('Set Parameter under 70$', () =>{
            let search_tablets = [];
            browser.element('//*[@id="sort"]').selectByValue('price-asc-rank');
            browser.waitForExist('//div');
            if (browser.element('//div[@class="a-fixed-left-grid-col a-col-right"]//span[@class="sx-price-whole"]').getText() <= '70') {
                search_tablets.push(browser.element('//h2[@class="a-size-medium s-inline  s-access-title  a-text-normal"]').getText());
            }
            console.log(search_tablets);
        }) 

    })
})