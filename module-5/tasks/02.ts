// Выполнить xpath
// 1 - выбрать элемент формы по классу form
// 2 - выбрать элемент с id равным loginField внутри формы
// 3 - выбрать элемент с id равным passwordField внутри формы

async function main() {
  await browser.url(
    "https://testspace.orange.local.learn.ispringdev.com/login"
  );

  const form = await $('//*[@class="form"]');
  console.log(form);
  const loginField = await form.$('//*[@id="loginField"]');
  console.log(loginField);
  const passwordField = await form.$('//*[@id="passwordField"]');
  console.log(passwordField);
}

main();
