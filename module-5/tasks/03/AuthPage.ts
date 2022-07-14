class AuthPage {
  constructor(public browser: WebdriverIO.Browser) {}

  get loginField() {
    return this.browser.$("#loginField");
  }

  get passwordFiled() {
    return this.browser.$("#passwordFiled");
  }

  get buttonSend() {
    return this.browser.$("button");
  }

  get welcome() {
    return this.browser.$(".hello");
  }

  get error() {
    return this.browser.$(".error");
  }

  async typeLogin(login: string) {
    await this.loginField.click();
    await this.browser.keys(login);
  }

  async typePassword(password: string) {
    await this.passwordFiled.click();
    await this.browser.keys(password);
  }

  async submitForm(login: string, password: string) {
    await this.typeLogin(login);
    await this.typePassword(password);
    await this.buttonSend.click();
  }

  async open() {
    await this.browser.url(
      "https://testspace.orange.local.learn.ispringdev.com/s?s=account%2Fteam"
    );
  }
}

export { AuthPage };
