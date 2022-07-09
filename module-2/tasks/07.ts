// Подсчитать средний возраст группы
function avgAge(group: Record<string, number>): number {
  let sumAge = 0;
  for (const userName in group) {
    sumAge += group[userName];
  }
  return sumAge / Object.keys(group).length;
}

const group = {
  Jek: 18,
  Peeter: 20,
  Anna: 27,
};
console.log(avgAge(group)); //21.666666
