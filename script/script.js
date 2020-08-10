const money = 50000,
income = 'Фриланс', 
addExpenses = 'ЖКХ, питание, бензин ', 
deposit = true,
mission = 2000000,
period = 10,
budgetDay = money / 30;

console.log('type of money: ' + typeof(money) + "\n" + 'type of income: ' + typeof(income) + "\n" +'type of deposit: ' + typeof(deposit));
console.log('length of addExpenses: ' + addExpenses.length);
console.log("Период равен " + period + " месяцям" + "\n" + "Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(", "));
console.log('budgetDay: ' + budgetDay);