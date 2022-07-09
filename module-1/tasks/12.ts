// Вывести сообщение, исходя из температуры
// до -10 - Очень Холодно
// от -10 - +10 - Холодно
// от +10 - +18 - Прохладно
// от +18 - +25 - Тепло
// от +25 и выше - Жарко

let temperature = 18;
if (temperature < -10) console.log("Очень Холодно");
else if (temperature >= -10 && temperature < 10) console.log("Холодно");
else if (temperature >= 10 && temperature < 18) console.log("Прохладно");
else if (temperature >= 18 && temperature < 25) console.log("Тепло");
else if (temperature >= 25) console.log("Жарко");
