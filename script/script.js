'use strict';

let money,
  deposit = true,
  mission = 2000000,
  budgetDay = money / 30,
  addExpenses = 'ЖКХ, питание, бензин ';
const  income = 'Фриланс',  
  period = 10;

money = +prompt('Ваш месячный доход?');
console.log(money);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);
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

const getExpensesMonth = function(){
  return amount1 + amount2;
}
const getAccumulatedMonth = function(){
  return money - getExpensesMonth();
}
const accumulatedMonth = getAccumulatedMonth();
const getTargetMonth = function(){
  return Math.ceil(mission / accumulatedMonth);
}
const  missionMonth = mission / accumulatedMonth;
const showTypeOf = function(data){
  return data + " " + typeof(data);
}
const getStatusIncome = function(){
  if(budgetDay >= 1200){
    return('У вас высокий уровень дохода');
  } else if (600 <= budgetDay < 1200){
    return('У вас средний уровень дохода');
  } else if (0 <= budgetDay < 600){
    return('К сожалению у вас уровень дохода ниже среднего');
  } else{
    return('Что-то пошло не так')
  }
}
budgetDay = Math.ceil(accumulatedMonth / 30);
//showTypeOf()
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
//getExpensesMonth()
console.log('Расходы за месяц ' + getExpensesMonth());
console.log(addExpenses.split(", "));
//getTargetMonth()
console.log('Цель будет достигнута за: ' + getTargetMonth() + " месяцев");
console.log("Бюджет на месяц: " + accumulatedMonth);
console.log('Бюджет на день: ' + budgetDay);
console.log(getStatusIncome());

// Ветвление через switch
// switch(budgetDay > 0){
//   case budgetDay >= 1200: console.log('У вас высокий уровень дохода');
//   break;
//   case 600 <= budgetDay < 1200: console.log('У вас средний уровень дохода');
//   break;
//   case 0 <= budgetDay < 600: console.log('К сожалению у вас уровень дохода ниже среднего');
//   break;
//   default: console.log('Что-то пошло не так');
// }
