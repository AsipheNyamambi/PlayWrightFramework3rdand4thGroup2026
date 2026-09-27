import {test} from "../fixtures/CustomFixtures";
import { validUsers } from "../testdata/TestData";


test.describe('Profile Tests', () => {

    test('User should be able to view profile', async ({ homePage, page })=> {
        
        await page.goto('/');
        await homePage.ClickMenu();
        await homePage.ClickMyProfile();
        await homePage.ClickEditProfile();
        await homePage.EditGitProfileName(validUsers.gitusername.mygitusername);
    });
});
