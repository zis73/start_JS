'use strict';

  
const book = document.querySelectorAll('.book'),
body = document.querySelector('body'),
adv = document.querySelector('.adv'),
titleBook = book[4].querySelector('h2 a'),
bookUl2 = book[0].querySelector('ul'),
bookLi2 = bookUl2.querySelectorAll('li'),
bookUl5 = book[5].querySelector('ul'),
bookLi5 = bookUl5.querySelectorAll('li'),
bookUl6 = book[2].querySelector('ul'),
bookLi6 = bookUl6.querySelectorAll('li');

book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[2].before(book[5]);

adv.remove();

body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

titleBook.textContent = 'Книга 3. this и Прототипы Объектов';

bookLi2[9].after(bookLi2[2]);
bookLi2[3].after(bookLi2[6]);
bookLi2[6].after(bookLi2[8]);

bookLi5[1].after(bookLi5[9]);
bookLi5[4].after(bookLi5[2]);
bookLi5[7].after(bookLi5[5]);

const paragrahp = document.createElement('li');
paragrahp.textContent = 'Глава 8: За пределами ES6';
bookLi6[8].insertAdjacentElement('afterend', paragrahp);
// const startButton = document.getElementById('start'),
// incomeAdd = document.getElementsByTagName('button')[0],
// expensesAdd = document.getElementsByTagName('button')[1],
// depositCheck = document.querySelector('#deposit-check'),
// additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
// additionalExpensesItem = document.querySelector('.additional_expenses-item'),
// budgetMonthValue = document.getElementsByClassName('result-total')[0],
// budgetDayValue = document.getElementsByClassName('result-total')[1],
// expensesMonthValue = document.getElementsByClassName('result-total')[2],
// expensesTitle = document.querySelector('input.expenses-title'),
// expensesAmount = document.querySelector('.expenses-amount'),
// additionalIncomeValue = document.getElementsByClassName('result-total')[3],
// additionalExpensesValue = document.getElementsByClassName('result-total')[4],
// incomePeriodValue = document.getElementsByClassName('result-total')[5],
// targetMonthValue = document.getElementsByClassName('result-total')[6],
// salaryAmount = document.querySelector('.salary-amount'),
// incomeTitle = document.querySelector('input.income-title'),
// incomeAmount = document.querySelector('.income-amount'),
// range = document.querySelector('[type="range"]');

// const isNumber = function(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// },
// isString = function(n) {
//   if (n !== null) {
//     if(n.trim().length > 0 && !isNumber(n)) {
//       for (let i = 0; i < n.length; i++) {
//         if (isNumber(n[i])) {
//             return false;
//         }
//       }
//       return true;
//     }
//   }
//   return false;
// },
// toUpp = function(arr) {
//   let str = arr.map(function(upper){
//     return upper.charAt(0).toUpperCase(arr) + upper.substring(1);
//   });
//   console.log(str.join(', '));
// };
// let money,
//     start = function() {
//   do{
//     money = prompt('Ваш месячный доход?', 50000);
//   }
//   while(!isNumber(money));
// };

// start();

// const appData = {
//   mission: 2000000,
//   budget: money,
//   budgetDay: 0,
//   budgetMonth: 0, 
//   income: {},  
//   addIncome: [],
//   deposit: false,
//   percentDeposit: 0,
//   moneyDeposit: 0,
//   period: 10,
//   addExpenses: [],
//   expenses: {},
//   expensesMonth: 0,
//   getBudget : function() {
//     appData.budgetMonth = appData.budget - appData.expensesMonth;
//     appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//   },
//   getTargetMonth : function() {
//     return appData.mission / appData.budgetMonth;
//   },
//   getStatusIncome: function() {
//     if(appData.budgetDay >= 1200) {
//       return('У вас высокий уровень дохода');
//     } else if (600 <= appData.budgetDay < 1200) {
//       return('У вас средний уровень дохода');
//     } else if (0 <= appData.budgetDay < 600) {
//       return('К сожалению у вас уровень дохода ниже среднего');
//     } else{
//       return('Что-то пошло не так');
//     }
//   },
//   asking: function() {
//     if(confirm('Есть ли у вас доп источник заработка?')) {
//       let itemIncome = prompt('Какой у вас доп заработок?','Таксую');
//       while(!isString(itemIncome)) {
//         itemIncome = prompt('Какой у вас доп заработок?','Таксую');
//       }
//       let cashIncome = prompt('Сколько в месяц вы на этом зарабатывете?',5000);
//       while(!isNumber(cashIncome)) {
//         cashIncome = prompt('Сколько в месяц вы на этом зарабатывете?');
//       }
//       appData.income[itemIncome] = cashIncome;
//     }
//     let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','kafe,restoraunt');
//     while(!isString(addExpenses)) {
//       addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//     }
//     appData.addExpenses = addExpenses.trim().toLowerCase().split(',');
//     appData.deposit = confirm('Есть ли у вас депозит в банке?');
//     for(let i = 0; i < 2; i++){
//       let itemExpenses = prompt('Введите обязательную статью расходов?', 'sadik, school');
//       while(!isString(itemExpenses)){
//         itemExpenses = prompt('Введите обязательную статью расходов?');
//       }
//       let cashExpenses;
//       do{
//         cashExpenses = prompt('Во сколько это обойдется?', 2500); 
//       }
//       while(isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
//       appData.expenses[itemExpenses] = cashExpenses;
//     }
//   },
//   getExpensesMonth: function() {
//     for(let key in appData.expenses) {
//       appData.expensesMonth += +appData.expenses[key];
//     }
//   },
//   getInfoDeposit: function() {
//     if(appData.deposit) {
//       appData.percentDeposit = prompt('Какой годовой процент?','10');
//       while(!isNumber(appData.percentDeposit)) {
//         appData.percentDeposit = prompt('Какой годовой процент?','10');
//       }
//       appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
//       while(!isNumber(appData.moneyDeposit)) {
//         appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
//       }
//     }
//   },
//   calcSavedMoney: function() {
//     return appData.budgetMonth * appData.period;
//   }
// };
// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getInfoDeposit();
// console.log('Расходы за месяц ', appData.expensesMonth);
// if(appData.getTargetMonth() > 0) {
//   console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + " месяца");
// }else{
//     console.log('Цель достигнута не будет');
// }
// console.log(appData.getStatusIncome());
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
// for(let key in appData) {
//   console.log(`Наша программа включает в себя данные: ключ ${key} и его значение`, appData[key]);
// }
// toUpp(appData.addExpenses); 

