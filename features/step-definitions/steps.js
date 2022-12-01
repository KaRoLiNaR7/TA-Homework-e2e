const { Given, When, Then } = require('@wdio/cucumber-framework');
Given("I am on the home page", async () => {
    await browser.url(`https://www.newegg.com`);
});
Then("I am closing the promo banner if it appears", async () => {
        if($('.modal-Website-img').toBeExisting){
        await browser.refresh();
    }
})
When('Entry the word "Windows" in the search bar', async () => {
    const input = await $('input[type="search"]');
    input.setValue('Windows');
})
Then('Click the search', async () => {
    const serch = await $('.header2021-search-button')
    await serch.click();
})
Then('I check that at least one item appears', async () => {
    const elem = $('.item-cell');
    await elem.isExisting();
})
When(`Open "Today's Best Deals" tab`, async () => {
    const select = await $('#trendingBanner_720202');
    await select.click();
})
Then ('Click on the Internet shop logo', async () => {
    const logo = await $('.header2021-logo-img');
    await logo.click();
})
Then('I check that the main page opened', async () => {
    const page = await browser.getUrl();
    await expect(page).toEqual('https://www.newegg.com/')
})