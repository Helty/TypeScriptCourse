class RemoveUserPopup {
    constructor(private browser: WebdriverIO.Browser) {  }

    get removeButton() {
        return this.browser.$('//button[contains(@data-at,"id=team-member-delete-button")]');
    }
}

export {
    RemoveUserPopup
};