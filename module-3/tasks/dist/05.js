"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Создать класс SearchEnginePage,
// который наследуется от Page(из предыдущей задачи)
// и реализует новый метод search(text) - который выводит "поиск по <NAME>: <text>"
var _04_1 = require("./04");
var SearchEnginePage = /** @class */ (function (_super) {
    __extends(SearchEnginePage, _super);
    function SearchEnginePage(name, url) {
        return _super.call(this, name, url) || this;
    }
    SearchEnginePage.prototype.search = function (text) {
        console.log("\u041F\u043E\u0438\u0441\u043A \u043F\u043E " + this.name + ": " + text);
    };
    return SearchEnginePage;
}(_04_1.Page));
var page1 = new SearchEnginePage("Google", "https://google.com");
page1.open();
page1.search("car");
var page2 = new SearchEnginePage("Yandex", "https://yandex.ru");
page2.open();
page2.search("car");
