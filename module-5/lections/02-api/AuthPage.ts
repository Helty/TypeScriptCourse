class AuthPage {
  constructor(public browser: WebdriverIO.Browser) {}

  get loginField() {
    return this.browser.$("#login");
  }

  get passwordFiled() {
    return this.browser.$("#password");
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
    await this.browser.url("http://127.0.0.1:5500/module-5/auth.html");
  }
}

export { AuthPage };
