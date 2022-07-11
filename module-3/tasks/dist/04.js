"use strict";
// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле
exports.__esModule = true;
exports.Page = void 0;
//const page = new Page("Yandex", 'https://yandex.ru')
//page.open()
var Page = /** @class */ (function () {
    function Page(name, url) {
        this.url = url;
        this.name = name;
    }
    Page.prototype.open = function () {
        console.log("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 " + this.name + ": " + this.url);
    };
    return Page;
}());
exports.Page = Page;
