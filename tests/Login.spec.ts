import { test } from "../fixtures/CustomFixtures";
import { validUsers } from "../testdata/TestData";

test.describe('Login Tests', () => {

    test('Admin user should be able to login', async ({ loginPage }) => {
        await loginPage.openNdosiPage();
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);

    });
     test('Student user should be able to login', async ({ loginPage }) => {
        await loginPage.openNdosiPage();
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.studentUser.username, validUsers.studentUser.password);

    });
});
