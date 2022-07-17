class AuthPage {
  constructor(private browser: WebdriverIO.Browser) {}

  async open() {
    await this.browser.url('https://testspace.orange.local.learn.ispringdev.com/');
  }

  get loginField() {
    return this.browser.$("//input[@id='loginField']");
  }

  get passwordFiled() {
    return this.browser.$("//input[@id='passwordField']");
  }

  get submitButton() {
    return this.browser.$("//input[@type='submit']");
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
    await this.submitButton.click();
  }
}

export { AuthPage };
