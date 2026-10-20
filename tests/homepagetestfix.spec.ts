import { test, expect } from "../src/fixtures/pagefixtures";



test.beforeEach(async ({ loginpage }) => {


   await loginpage.gotoLoginPage();
   await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);

})



test('@smoke home page successfully login', async ({ homepage }) => {

   expect(homepage.logoutIsVisible()).toBeTruthy();

})

test('@regression home headers show exactly after successfully login', async ({ homepage }) => {

   let headers = await homepage.getpageHeaderslist();

   // expect(await homepage.getpageHeaderslist()).toHaveLength(3);
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