describe("Selectors ", () => {
  beforeEach(async () => {
    await browser.url("http://127.0.0.1:8080");
  });

  it("Example 1", async () => {
    const elementParagraph = await $("p").getText();
    console.log(elementParagraph);
    const elementsTitle = await $$("h2");
    for (const v of elementsTitle) {
      const text = await v.getText();
      console.log(text);
    }
  });

  it("Example 2", async () => {
    const boxed = await $(".boxed").getHTML();
    console.log(boxed);
  });

  it("Example 3", async () => {
    const buttonIncrement = await $("#buttonIncrement").getText();
    console.log(buttonIncrement);
  });

  it("Example 4", async () => {
    const links = await $$("[href]");
    for (const link of links) {
      console.log(await link.getAttribute("href"));
    }
  });

  it("Example 5", async () => {
    const links = await $$("[href]");
    for (const link of links) {
      console.log(await link.getAttribute("href"));
    }
  });

  it("Example 6", async () => {
    const p = await $("div p").getText();
    console.log(p);
  });

  it("Example 7", async () => {
    const p = await $("div > p").getText();
    console.log(p);
  });
});
