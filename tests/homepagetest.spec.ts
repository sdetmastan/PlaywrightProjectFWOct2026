import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";



let homepage: HomePage;

test.beforeEach(async ({ page }) => {

    let loginpage = new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
    homepage = new HomePage(page);
})



test('home page successfully login', async ({ }) => {

    expect(await homepage.logoutIsVisible()).toBeTruthy();

})

test('home headers show exactly after successfully login', async ({ }) => {

    let headers = await homepage.getpageHeaderslist();

    //     ...expect(await homepage.getpageHeaderslist()).toHaveLength(3);
    expect.soft(await homepage.getpageHeaderslist()).toHaveLength(4);
    console.log('homepage header: ', headers);
    expect(await homepage.getpageHeaderslist()).toHaveLength(4);
    expect(await homepage.getpageHeaderslist()).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ])

})