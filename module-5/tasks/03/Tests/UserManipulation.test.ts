import {UserTeamPage, AuthorCounts} from '../PageObject/UserTeam.page';
import {UserPermissions} from "../PageObject/AddUserPopup";
import {AuthPage} from "../PageObject/Auth.page";

describe("User manipulation test", () => {
    describe("Add new user", async () => {
        describe("With author role", () => {
            it("Count of users should be increased.", async () => {
                const authPage = new AuthPage(browser);
                const userTeamPage = new UserTeamPage(browser);

                await authPage.open();
                await authPage.submitForm("owner", "12345Q");
                await userTeamPage.open();

                const authorsCountCurrent = await userTeamPage.getAuthorsCounts(AuthorCounts.current);
                const reviewersCount = await userTeamPage.getReviewersCounts();
                const usersCount = await userTeamPage.getAllUserCounts();

                await userTeamPage.addNewUser("test@test.com", UserPermissions.Author);

                //авторы увеличились, ревьюеров не изменилось, общее колличество увеличилось
                expect(await userTeamPage.getReviewersCounts()).toEqual(reviewersCount);
                expect(await userTeamPage.getAllUserCounts()).toEqual((usersCount + 1));
                expect(await userTeamPage.getAuthorsCounts(AuthorCounts.current)).toEqual((authorsCountCurrent + 1));
            });

            it("User should be found in the search bar.", async () => {

            });

            it("Add more authors if their count full should be impossible.", async () => {

            });
        });

        describe("with reviewer role", async () => {
            it("Count of users should be increased.", async () => {
                //авторов не изменилось, ревьюеров увеличилось, общее колличество увеличилось
            });

            it("User should be found in the search bar.", async () => {

            });
        });
    });

    describe("Delete user", async () => {
        describe("with author role", async () => {
            it("Count of users should be decreased.", async () => {
                //авторов уменьшилось, ревьюеров не изменилось, общее колличество уменьшилось
            });

            it("User should be impossible found in the search bar.", async () => {

            });
        });

        describe("with reviewer role", async () => {
            it("Count of users should be decreased.", async () => {
                //авторов не изменилось, ревьюеров уменьшилось, общее колличество уменьшилось
            });

            it("User should be impossible found in the search bar.", async () => {

            });
        });
    });

    describe("Change user permission", async () => {
        describe("from author to reviewer role", async () => {
            it("Count of author should be decreased.", async () => {
                //авторов уменьшилось, ревьюеров увеличилось, общее колличество не изменилось.
            });
        });

        describe("from reviewer to author role", async () => {
            it("Count of reviewer should be decreased.", async () => {
                //авторов увеличилось, ревьюеров уменьшилось, общее колличество не изменилось
            });

            it("If author count full should be impossible.", async () => {

            });
        });
    });
});