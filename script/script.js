'use strict';

const start = document.getElementById('start'),
  cancel = document.getElementById('cancel'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  depositCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  budgetMonthValue = document.getElementsByClassName('result-total')[0],
  budgetDayValue = document.getElementsByClassName('result-total')[1],
  expensesMonthValue = document.getElementsByClassName('result-total')[2],
  expensesTitle = document.querySelector('input.expenses-title'),
  additionalIncomeValue = document.getElementsByClassName('result-total')[3],
  additionalExpensesValue = document.getElementsByClassName('result-total')[4],
  incomePeriodValue = document.getElementsByClassName('result-total')[5],
  targetMonthValue = document.getElementsByClassName('result-total')[6],
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('input.income-title'),
  range = document.querySelector('[type="range"]'),
  additionalExpenses = document.querySelector('.additional_expenses'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  targetAmount = document.querySelector('.target-amount');

let expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItems = document.querySelectorAll('.income-items');
  start.style.pointerEvents = 'none';

const isNumber = function(n) {
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
  let str = arr.map(function(upper) {
    return upper.charAt(0).toUpperCase(arr) + upper.substring(1);
  });
  console.log(str.join(', '));
},
blockInput = () => {
  const blockData = document.querySelector('.data'),
    inputs = blockData.querySelectorAll('[type="text"]');
  inputs.forEach((item) => {
    item.disabled = true;
  });

},
unBlockInput = () => {
  const blockData = document.querySelector('.data'),
    inputs = blockData.querySelectorAll('[type="text"]');
  inputs.forEach((item) => {
    item.disabled = false;
    item.value = '';
  });
};

const appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0, 
  income: {},  
  incomeMonth: 0,
  addIncome: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  addExpenses: [],
  expenses: {},
  expensesMonth: 0,
  start: function() {
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();

    blockInput();

    incomePlus.disabled = true;
    expensesPlus.disabled = true;
    depositCheck.disabled = true;

    start.style.display = 'none';
    cancel.style.display = 'block';

  },
  reset: function() {
    let resultTotal = document.querySelectorAll('.result-total');

    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;

    unBlockInput();
    resultTotal.forEach((item) => {
      item.value = '';
    });
    expensesItems.forEach(function (item, i) {
      if (i !== 0) {
          item.remove();
      }
    });

    incomeItems.forEach(function (item, i) {
      if (i !== 0) {
          item.remove();
      }
  });

    expensesPlus.style.display = '';
    incomePlus.style.display = '';
    incomePlus.disabled = false;
    expensesPlus.disabled = false;
    depositCheck.checked = false;
    depositCheck.disabled = false;
    start.style.display = 'block';
    cancel.style.display = 'none';
    start.style.pointerEvents = 'none';

  },
  showResult: function() { 
    const _this = this;
    budgetDayValue.value = this.budgetDay;
    budgetMonthValue.value = this.budgetMonth;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = _this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('input', this.showResult);
  },
  addExpensesBlock: function() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    }
  },
  addIncomeBlock: function() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
    }
  },
  getExpenses: function() {
    const _this = this;
    expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector('.expenses-title').value,
        cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses.trim() !== '' && cashExpenses.trim() !== '') {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    });
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
  },
  getIncome: function() {
    incomeItems.forEach((item) =>{
      const itemIncome = item.querySelector('.income-title').value,
        cashIncome = item.querySelector('.income-amount').value;
      if(itemIncome.trim() !== '' && cashIncome.trim() !== '') {
        this.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += this.income[key];
    }
  },
  getAddExpenses: function() {
    const  addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if(item !== '') {
        this.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function() {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if(itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  },
  getBudget: function() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  getTargetMonth: function() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  },
  getStatusIncome: function() {
    if(this.budgetDay >= 1200) {
      return('У вас высокий уровень дохода');
    } else if (600 <= this.budgetDay < 1200) {
      return('У вас средний уровень дохода');
    } else if (0 <= this.budgetDay < 600) {
      return('К сожалению у вас уровень дохода ниже среднего');
    } else{
      return('Что-то пошло не так');
    }
  },
  getExpensesMonth: function() {
    for(let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  },
  getInfoDeposit: function() {
  },
  calcPeriod: function() {
    return this.budgetMonth * periodSelect.value;
  }
};
salaryAmount.addEventListener('input', function() {
  if (isNumber(salaryAmount.value.trim()) && salaryAmount.value !== '') {
    start.style.pointerEvents = '';
  } else {
    start.style.pointerEvents = 'none';
  }
});

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', function() {
  periodAmount.textContent = periodSelect.value;
});

