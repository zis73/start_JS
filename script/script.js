let money = 50000,
income = 'Фриланс', 
addExpenses = 'ЖКХ, питание, бензин ', 
deposit = true,
mission = 2000000,
period = 10,
budgetDay = money/30;

console.log('type of money: ' + typeof(money));
console.log('type of income: ' + typeof(income));
console.log('type of deposit: ' + typeof(deposit));
console.log('length of addExpenses: '+ addExpenses.length);
console.log("Период равен " + period + " месяцям" + "\n"+ "Цель заработать " + mission + " рублей/долларов/гривен/юаней");
console.log(addExpenses.toLowerCase().split(", "));
console.log('budgetDay: ' + budgetDay);