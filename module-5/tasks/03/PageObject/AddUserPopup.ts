enum UserPermissions {
    Author,
    Reviewer
}

class AddUserPopup {
    constructor(private browser: WebdriverIO.Browser) {  }

    get emailFiled() {
        return this.browser.$('//input[contains(@data-at,"id=email-input")]');
    }

    get authorRadioButton() {
        return this.browser.$('//input[contains(@data-at,"id=radio-role-author")]');
    }

    get reviewerRadioButton() {
        return this.browser.$('//input[contains(@data-at,"id=radio-role-reviewer")]');
    }

    get sendButton() {
        return this.browser.$('//button[contains(@data-at,"id=send-button")]');
    }

    async sendInviteNewUser(email: string, userPermission: UserPermissions) {
        await this.emailFiled.click();
        await this.browser.keys(email);

        if (userPermission === UserPermissions.Author)
        {
            await this.authorRadioButton.click();
        }
        else
        {
            await this.reviewerRadioButton.click();
        }

        await this.sendButton.click();
    }
}

export {
    AddUserPopup,
    UserPermissions
};