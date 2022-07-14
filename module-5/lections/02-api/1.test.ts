describe("Проверка счетчика ", () => {
  beforeEach(async () => {
    await browser.url("http://127.0.0.1:5500/module-5/index.html");
  });

  it("Проверка операции increment", async () => {
    const increment = await $("#buttonIncrement");
    const counterValue = await $("#counter");

    await increment.click();

    expect(await counterValue.getText()).toEqual("1");
  });

  it("Проверка двойного increment-a", async () => {
    const increment = await $("#buttonIncrement");
    const counterValue = await $("#counter");

    await increment.click();
    await increment.click();

    expect(await counterValue.getText()).toEqual("2");
  });

  it("Проверка операции decrement", async () => {
    const decrement = await $("#buttonDecrement");
    const counterValue = await $("#counter");

    await decrement.click();

    expect(await counterValue.getText()).toEqual("-1");
  });

  it("Проверка increment и decrement", async () => {
    const increment = await $("#buttonIncrement");
    const decrement = await $("#buttonDecrement");
    const counterValue = await $("#counter");

    await increment.click();
    await increment.click();
    await increment.click();
    await decrement.click();

    expect(await counterValue.getText()).toEqual("2");
  });
});
