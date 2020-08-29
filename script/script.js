'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
    start = function(){
  do{
    money = prompt('Ваш месячный доход?');
  }
  while(!isNumber(money));
};

start();
let appData = {
  mission: 2000000,
  income: 'Фриланс',  
  addExpenses: prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit: confirm('Есть ли у вас депозит в банке?'),
  period: 10,
  budget: money,
  budgetDay: 0,
  expenses: {},
  budgetMonth: 0, 
  expensesMonth: 0,
  accumulatedMonth: 0,
  sum: 0,
  amount: 0,
  getBudget : function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth : function() {
    appData.result = Math.ceil(appData.mission / appData.budgetMonth);
    if(appData.result > 0){
      return console.log('Цель будет достигнута за ' + appData.result + ' месяцев');
    }else{
      console.log('Цель достигнута не будет');
    }
  },
  getStatusIncome: function() {
    if(appData.budgetDay >= 1200){
      return('У вас высокий уровень дохода');
    } else if (600 <= appData.budgetDay < 1200){
      return('У вас средний уровень дохода');
    } else if (0 <= appData.budgetDay < 600){
      return('К сожалению у вас уровень дохода ниже среднего');
    } else{
      return('Что-то пошло не так');
    }
  },
  asking: function(){
    for(let i = 0; i < 2; i++){
      let expens;
      expens = prompt('Введите обязательную статью расходов?');
  
      appData.amount = prompt('Во сколько это обойдется?'); 
      while(!isNumber(appData.amount)){
        appData.amount = prompt('Во сколько это обойдется?'); 
      }
      appData.expenses[expens] = +appData.amount;
    }
    for(let key in appData.expenses){
      appData.expensesMonth += appData.expenses[key];
    }
  }
};
appData.asking();
appData.getBudget();

console.log('Расходы за месяц ', appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
for(let key in appData) {
  console.log(`Наша программа включает в себя данные: ключ ${key} и его значение`, appData[key]);
}