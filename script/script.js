'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
},
isString = function(n) {
  if (n !== null) {
    if(n.trim().length > 0 && !isNumber(n)) {
      for (let i = 0; i < n.length; i++) {
        if (isNumber(n[i])) {
            return false;
        }
      }
      return true;
    }
  }
  return false;
},
toUpp = function(arr) {
  let str = arr.map(function(upper){
    return upper.charAt(0).toUpperCase(arr) + upper.substring(1);
  });
  console.log(str);
};
let money,
    start = function() {
  do{
    money = prompt('Ваш месячный доход?', 50000);
  }
  while(!isNumber(money));
};

start();

let appData = {
  mission: 2000000,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0, 
  income: {},  
  addIncome: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  period: 10,
  addExpenses: [],
  expenses: {},
  expensesMonth: 0,
  getBudget : function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth : function() {
    return appData.mission / appData.budgetMonth;
  },
  getStatusIncome: function() {
    if(appData.budgetDay >= 1200) {
      return('У вас высокий уровень дохода');
    } else if (600 <= appData.budgetDay < 1200) {
      return('У вас средний уровень дохода');
    } else if (0 <= appData.budgetDay < 600) {
      return('К сожалению у вас уровень дохода ниже среднего');
    } else{
      return('Что-то пошло не так');
    }
  },
  asking: function() {
    if(confirm('Есть ли у вас доп источник заработка?')) {
      let itemIncome = prompt('Какой у вас доп заработок?','Таксую');
      while(!isString(itemIncome)) {
        itemIncome = prompt('Какой у вас доп заработок?','Таксую');
      }
      let cashIncome = prompt('Сколько в месяц вы на этом зарабатывете?',5000);
      while(!isNumber(cashIncome)) {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатывете?');
      }
      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','kafe,restoraunt');
    while(!isString(addExpenses)) {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    }
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for(let i = 0; i < 2; i++){
      let itemExpenses = prompt('Введите обязательную статью расходов?', 'sadik, school');
      while(!isString(itemExpenses)){
        itemExpenses = prompt('Введите обязательную статью расходов?');
      }
      let cashExpenses;
      do{
        cashExpenses = prompt('Во сколько это обойдется?', 2500); 
      }
      while(isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
      appData.expenses[itemExpenses] = cashExpenses;
    }
  },
  getExpensesMonth: function() {
    for(let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getInfoDeposit: function() {
    if(appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?','10');
      while(!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = prompt('Какой годовой процент?','10');
      }
      appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      while(!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
      }
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();
console.log('Расходы за месяц ', appData.expensesMonth);
if(appData.getTargetMonth() > 0) {
  console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + " месяца");
}else{
    console.log('Цель достигнута не будет');
}
console.log(appData.getStatusIncome());
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
for(let key in appData) {
  console.log(`Наша программа включает в себя данные: ключ ${key} и его значение`, appData[key]);
}
toUpp(appData.addExpenses.join(', ')); 