// Создать класс SearchEnginePage,
// который наследуется от Page(из предыдущей задачи)
// и реализует новый метод search(text) - который выводит "поиск по <NAME>: <text>"
import { Page } from "./04";

class SearchEnginePage extends Page {
  constructor(name: string, url: string) {
    super(name, url);
  }
  search(text: string) {
    console.log(`Поиск по ${this.name}: ${text}`);
  }
}

const page1 = new SearchEnginePage("Google", "https://google.com");
page1.open();
page1.search("car");

const page2 = new SearchEnginePage("Yandex", "https://yandex.ru");
page2.open();
page2.search("car");
