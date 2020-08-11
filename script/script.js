let money = 50000,
  deposit = true,
  mission = 2000000,
  budgetDay = money / 30;
  addExpenses = 'ЖКХ, питание, бензин ';
const  income = 'Фриланс',  
  period = 10;
  

console.log('type of money: ' + typeof(money) + "\n" + 'type of income: ' + typeof(income) + "\n" +'type of deposit: ' + typeof(deposit));
console.log('length of addExpenses: ' + addExpenses.length);
console.log("Период равен " + period + " месяцям" + "\n" + "Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(", "));
console.log('budgetDay: ' + budgetDay);

  money = +prompt('Ваш месячный доход?');
console.log(money + typeof money);
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses + typeof addExpenses);
  deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);
const expenses1 = prompt('Введите обязательную статью расходов?');
console.log(expenses1);
const amount1 = +prompt('Во сколько это обойдется?');
console.log(amount1);
const expenses2 = prompt('Введите обязательную статью расходов?');
console.log(expenses2);
const amount2 = +prompt('Во сколько это обойдется?');
console.log(amount2);
const budgetMonth = money - (amount1 + amount2);
console.log("Бюджет на месяц: " + budgetMonth);
  missionMonth = mission / budgetMonth;
console.log('Цель будет достигнута за: ' + Math.ceil(missionMonth) + ' месяцев');
  budgetDay = Math.ceil(budgetMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

if(budgetDay >= 1200){
  console.log('У вас высокий уровень дохода')
} else if (600 <= budgetDay < 1200){
  console.log('У вас средний уровень дохода')
} else if (0 <= budgetDay < 600){
  console.log('К сожалению у вас уровень дохода ниже среднего')
} else{
  console.log('Что-то пошло не так')
}

switch(budgetDay > 0){
  case budgetDay >= 1200: console.log('asd');
  break;
  case 600 <= budgetDay < 1200: console.log('bvc');
  break;
  case 0 <= budgetDay < 600: console.log('qwe');
  break;
  default: console.log('!!!');
}
