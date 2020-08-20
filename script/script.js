'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const mission = 2000000,
  income = 'Фриланс',  
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  period = 10;
let money;
console.log(addExpenses.split(", "));


let start = function(){
    money = prompt('Ваш месячный доход?');

  while(!isNumber(money)){
    money = prompt('Ваш месячный доход?');
  }
};

start();

let expenses = [];


const getExpensesMonth = function() {
  let sum = 0,
  amount;

  for(let i = 0; i < 2; i++){
    expenses[i] = prompt('Введите обязательную статью расходов?');

    amount = prompt('Во сколько это обойдется?'); 
    while(!isNumber(amount)){
      amount = prompt('Во сколько это обойдется?'); 
    }
    sum += +amount;
  }
  console.log(expenses);
  return sum;
};
const expensesAmount = getExpensesMonth();
const getAccumulatedMonth = function() {
  return money - expensesAmount;
};
const accumulatedMonth = getAccumulatedMonth();
const budgetDay = Math.ceil(accumulatedMonth / 30);
const getTargetMonth = function() {
  let result = Math.ceil(mission / accumulatedMonth);
  if(result > 0){
    return console.log('Цель будет достигнута за ' + result + ' месяцев');
  }else{
    console.log('Цель достигнута не будет');
  }
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

let showTypeof = function(item){
  console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);
console.log('Расходы за месяц ' + expensesAmount);
console.log(getTargetMonth());
console.log("Бюджет на месяц: " + accumulatedMonth);
console.log('Бюджет на день: ' + budgetDay);
console.log(getStatusIncome());
