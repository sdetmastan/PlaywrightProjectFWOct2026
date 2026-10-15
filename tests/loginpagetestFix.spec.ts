import { expect, test } from "../src/fixtures/pagefixtures";
import { csvHelper } from "../src/utils/csvHelper";
import { jsonHelper } from "../src/utils/jsonHelper";



test.beforeEach(async ({ loginpage }) => {
    await loginpage.gotoLoginPage();

});

test('this is my login page test', async ({ loginpage }) => {

    //let myloginpage=new LoginPage(page);
    //await myloginpage.gotoLoginPage();

    const pagetitle = await loginpage.getLoginPageTitle();
    console.log('my tilte is :' + pagetitle)

    //expect(pagetitle).toBe('Account Login');


})


test('this is my fogot page test', async ({ loginpage }) => {

    //let myloginpage=new LoginPage(page);
    //await myloginpage.gotoLoginPage();
    expect(await loginpage.getforgotLinkisVisible()).toBeTruthy();

})


test('this is login page test', async ({ loginpage }) => {

    //let myloginpage=new LoginPage(page);
    //await loginpage.gotoLoginPage();
    //await loginpage.doLogin('srr@hotmail.com','srr123');
    await loginpage.doLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);

})


//with fixtures test data read - if it has multiple rows , it will consider 1 test case, e2e we need to read multiple testdata file if need
test(`Test login with invalid data`, async ({ loginpage, testdata }) => {

    for (let row of testdata) {
        console.log(row.username);
        await loginpage.doLogin(row.username, row.password);
        await loginpage.verifyinvalidLoginerror();
    }


})


//without fixtures testdata read csv
let testdata = csvHelper.readCsv(`src/data/logindata.csv`)
for (let row of testdata) {
    test(`invaid test data with :${row.username} and pass:${row.password}`, async ({ loginpage }) => {
        await loginpage.doLogin(row.username, row.password);
        await loginpage.verifyinvalidLoginerror();
    })

}

//with JSON file 1
let data = jsonHelper.jsonreader('src/data/logindata.json');
for (let row of data) {

    test(`invalid test data: ${row.username}`, async ({ loginpage }) => {

        await loginpage.doLogin(row.username, row.password);
        await loginpage.verifyinvalidLoginerror();


    })
}






