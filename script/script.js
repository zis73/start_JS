'use strict';

const mission = 2000000,
  income = 'Фриланс',  
  period = 10;

const money = +prompt('Ваш месячный доход?');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?');


const getExpensesMonth = function() {
  return amount1 + amount2;
};
const getAccumulatedMonth = function() {
  return money - getExpensesMonth();
};
const accumulatedMonth = getAccumulatedMonth();
const budgetDay = Math.ceil(accumulatedMonth / 30);
const getTargetMonth = function() {
  return Math.ceil(mission / accumulatedMonth);
};
const missionMonth = mission / accumulatedMonth;
const showTypeOf = function(data) {
  return data + " " + typeof(data);
};
const getStatusIncome = function() {
  if(budgetDay >= 1200){
    return('У вас высокий уровень дохода');
  } else if (600 <= budgetDay < 1200){
    return('У вас средний уровень дохода');
  } else if (0 <= budgetDay < 600){
    return('К сожалению у вас уровень дохода ниже среднего');
  } else{
    return('Что-то пошло не так');
  }
};
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
console.log('Расходы за месяц ' + getExpensesMonth());
console.log(addExpenses.split(", "));
console.log('Цель будет достигнута за: ' + getTargetMonth() + " месяцев");
console.log("Бюджет на месяц: " + accumulatedMonth);
console.log('Бюджет на день: ' + budgetDay);
console.log(getStatusIncome());
