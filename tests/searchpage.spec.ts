import { test, expect } from "../src/fixtures/pagefixtures";

test.beforeEach('before each test', async ({ loginpage }) => {

    loginpage.gotoLoginPage();
    loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);

})

test('Search product test', async ({ homepage, searchrespage }) => {

    expect(await homepage.logoutIsVisible()).toBeTruthy();
    //await expect(await homepage.logoutIsVisible()).toBeVisible();
    //await expect(homepage.logout).toBeVisible();
    homepage.searchProduct('macbook');
    expect(await searchrespage.getSearchResPageHeader()).toBe(true);

    expect(await searchrespage.searchResListCount()).toEqual(3);
})


