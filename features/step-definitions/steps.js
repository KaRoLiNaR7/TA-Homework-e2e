const { ANDROID_CONFIG } = require('@wdio/cli/build/constants');
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url(`https://www.newegg.com`);
});
Then("Close the promo banner if it appears", async () => {
    if ($('//*[@id="modal-Website"]/div[2]/div/div/a/img').toBeExisting) {
        await browser.refresh();
    }
})


//1st scenario
When('Entry the word "Windows" in the search bar', async () => {
    const input = await $('input[type="search"');
    input.setValue('Windows');
})

Then('Click the search', async () => {
    const serch = await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[4]/form/div/div[3]/button');
    await serch.click();
})

Then('Check that at least one item appears', async () => {
    const elem = $('.item-cell');
    await elem.isExisting();
})


//2nd scenario
When(`Open "Today's Best Deals" tab`, async () => {
    const select = await $('//*[@id="trendingBanner_720202"]/span');
    await select.click();
})

Then ('Click on the Internet shop logo', async () => {
    const logo = await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a/img');
    await logo.click();
})

Then('Check that the main page opened', async () => {
    const page = await browser.getUrl();
    try {
        page = `https://www.newegg.com`;
    } catch{
        new Error
    }
})