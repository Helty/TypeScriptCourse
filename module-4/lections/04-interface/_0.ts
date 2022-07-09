type MonthNumber = 1|2|3|4|5|6|7|8|9|10|11|12
const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function getMonth(monthNumber: MonthNumber) {
    return month[monthNumber - 1];
}

console.log(getMonth(1))
