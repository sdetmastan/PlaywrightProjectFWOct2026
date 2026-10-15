import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";

let myloginpage: LoginPage;

test.beforeEach(async ({ page }) => {
    myloginpage = new LoginPage(page);
});

test('this is my login page test', async ({ }) => {

    //let myloginpage=new LoginPage(page);
    await myloginpage.gotoLoginPage();

    const pagetitle = await myloginpage.getLoginPageTitle();
    console.log('my tilte is :' + pagetitle)
    expect(pagetitle).toBe('Account Login');


})


test('this is my fogot page test', async ({ }) => {

    //let myloginpage=new LoginPage(page);
    await myloginpage.gotoLoginPage();
    expect(await myloginpage.getforgotLinkisVisible()).toBeTruthy();

})


test('this is login page test', async ({ }) => {

    //let myloginpage=new LoginPage(page);
    await myloginpage.gotoLoginPage();
    await myloginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);

})