// Доработать таблицы истинности. Сделать вывод через for. Не использовать массивы!!!

console.log(`a\tb\ta&&b\ta||b\t!a`);
for (let i = 0; i != 4; i++) {
  const a = i === 2 || i === 3;
  const b = i === 1 || i === 3;
  console.log(`${a}\t${b}\t${a && b}\t${a || b}\t${!a}`);
}
