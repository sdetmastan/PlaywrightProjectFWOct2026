import { expect, test } from "../src/fixtures/pagefixtures";
import testdata from "../src/data/logindata1.json" with { type: "json" };



test.beforeEach(async ({ loginpage }) => {
    await loginpage.gotoLoginPage();

});


//with JSON file 2
//let data=jsonHelper.jsonreader('src/data/logindata.json');
for (let row of testdata.users) {

    test(`@regression invalid test data json: ${row.username}`, async ({ loginpage }) => {

        await loginpage.doLogin(row.username, row.password);
        await loginpage.verifyinvalidLoginerror();


    })
}





