import {AddUserPopup, UserPermissions} from './AddUserPopup';
import {RemoveUserPopup} from './RemoveUserPopup';

enum AuthorCounts {
  current,
  max
}

class UserTeamPage {
  private addUserPopup: AddUserPopup;
  private removeUserPopup: RemoveUserPopup;

  constructor(private browser: WebdriverIO.Browser) {
    this.addUserPopup = new AddUserPopup(this.browser);
    this.removeUserPopup = new RemoveUserPopup(this.browser);
  }

  async open() {
    await this.browser.url(
        "https://testspace.orange.local.learn.ispringdev.com/s?s=account%2Fteam"
    );
  }

  get teamExpandButton() {
    return this.browser.$('//button[contains(@data-at,"id=team-subscription-management")]');
  }

  get inviteUserButton() {
    return this.browser.$('//button[contains(@data-at,"id=team-add-collaborators-button")]');
  }

  get userDeleteButton() {
    return this.browser.$('//button[contains(@data-at,"id=user-action-remove")]');
  }

  get searchField() {
    return this.browser.$('//input[contains(@data-at,"id=studio-settings-team-search-field")]');
  }

  get userList() {
    return this.browser.$$("//tbody[@class='x75515__part']");
  }

  get getValueOfCountUsersArray() {
    return this.browser.$("//div[@class='x5dc9b__team-statistic']").$$("//div[@class='x5dc9b__item-value']");
  }

  async openTeamExpandLink() {
    await this.teamExpandButton.click();
  }

  async usersSearch(userNeedle: string) {
    await this.searchField.setValue(userNeedle);
  }

  async addNewUser(email: string, userPermission: UserPermissions) {
    await this.inviteUserButton.click();
    await this.addUserPopup.sendInviteNewUser(email, userPermission);
  }

  async deleteUsers(usersNeedle: string) {
    await this.searchField.click();
    await this.browser.keys(usersNeedle);

    const usersFounded = await this.userList;

    for (const user of usersFounded) {
      await user.click();
      await this.userDeleteButton.click();
      await this.removeUserPopup.removeButton.click();
    }
  }

  async getAuthorsCounts(authorCountSetting: AuthorCounts) {
    return Number((await (await this.getValueOfCountUsersArray)[0].getText()).split('/')[authorCountSetting]);
  }

  async getReviewersCounts() {
    return Number(await (await this.getValueOfCountUsersArray)[1].getText());
  }

  async getAllUserCounts() {
    return Number(await (await this.getValueOfCountUsersArray)[2].getText());
  }
}

export { UserTeamPage, AuthorCounts };
