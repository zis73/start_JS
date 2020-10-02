'use strict';

const start = document.getElementById('start'),
  cancel = document.getElementById('cancel'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  depositCheck = document.getElementById('deposit-check'),
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
  targetAmount = document.querySelector('.target-amount'),
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent');

let expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItems = document.querySelectorAll('.income-items');
  start.style.pointerEvents = 'none';

const validMethod = function() {
  let inputName = document.querySelectorAll('[placeholder="Наименование"]'),
  inputSum = document.querySelectorAll('[placeholder="Сумма"]'),
  persent = document.querySelector('[placeholder="Процент"]');

  const validNumber = item => {
    if (item.value === '.') {
        item.value = item.value.replace(/[^0-9]/i, '');
    }
  item.value = item.value.replace(/[^0-9.]/i, '');
  if (item.className === 'deposit-percent') {
      if (item.value === '0') {
          start.style.pointerEvents = 'none';
      } else {
          start.style.pointerEvents = '';
      }
      
      if ( +item.value >101) {
          if (+item.value.slice(0,3) !== 100) {
              item.value = item.value.slice(0,2);
          } else {
              item.value = item.value.slice(0,3);
          }
      }
  }
},
  validString = item => {
    item.value = item.value.replace(/[^А-Яа-яЁё,.!? ]/i, '');
  };

  inputName.forEach(item => {
    item.addEventListener('input', () => {
        validString(item);
    });
  });

  inputSum.forEach(item => {
    item.addEventListener('input', () => {
        validNumber(item);
    });
  });

  persent.addEventListener('input', () => {
    validNumber(persent);
  });

  additionalExpensesItem.addEventListener('input', () => {
    validString(additionalExpensesItem);
  });
},
  isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
  isString = function(n) {
      if (n !== null) {
        if(n.trim().length > 0 && !this.isNumber(n)) {
          for (let i = 0; i < n.length; i++) {
            if (this.isNumber(n[i])) {
                return false;
            } 
          }
          return true;
        }
      }
      return false;
    },
  toUpp  = function(arr) {
    let str = arr.map(function(upper) {
      return upper.charAt(0).toUpperCase(arr) + upper.substring(1);
    });
  },
  blockInput = function() {
    const blockData = document.querySelector('.data'),
      inputs = blockData.querySelectorAll('[type="text"]');
    inputs.forEach((item) => {
      item.disabled = true;
    });

  },
  unBlockInput = function() {
    const blockData = document.querySelector('.data'),
      inputs = blockData.querySelectorAll('[type="text"]');
    inputs.forEach((item) => {
      item.disabled = false;
      item.value = '';
    });
  };
class AppData{
  constructor(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0; 
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.addExpenses = [];
    this.expenses = {};
    this.expensesMonth = 0;
  }
  
  start() {
    this.budget = +salaryAmount.value;

    this.getIncome();
    this.getExpenses();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getBudget();
    this.getTargetMonth();

    this.showResult();

    blockInput();

    incomePlus.disabled = true;
    expensesPlus.disabled = true;
    depositCheck.disabled = true;

    start.style.display = 'none';
    cancel.style.display = 'block';
    
    periodSelect.addEventListener('input', this.changePeriod.bind(this));
    cancel.addEventListener('click', this.reset.bind(this));

  }
  reset() {
    let cloneAppData = new AppData();

    let resultTotal = document.querySelectorAll('.result-total');
    
    for (let key in cloneAppData) {
      this[key] = cloneAppData[key];
  }
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;

    unBlockInput();
    this.depositHandler();
    resultTotal.forEach(function (item){
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
}
  showResult() { 
    budgetDayValue.value = this.budgetDay;
    budgetMonthValue.value = this.budgetMonth;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
  }
  addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelectorAll('input').forEach(item => {
      item.value = '';
  });
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus); 
    validMethod();  
    incomeItems = document.querySelectorAll('.income-items');
    
    if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
    }
  }
  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelectorAll('input').forEach( item => {
      item.value = '';
  });
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    validMethod(); 
    if(expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    }
  }
  getExpenses() {
    expensesItems.forEach(item => {
      const itemExpenses = item.querySelector('.expenses-title').value,
        cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses.trim() !== '' && cashExpenses.trim() !== '') {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    });
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
  }
  getIncome(){
    incomeItems.forEach(item => {
      const itemIncome = item.querySelector('.income-title').value,
        cashIncome = item.querySelector('.income-amount').value;
      if(itemIncome.trim() !== '' && cashIncome.trim() !== '') {
        this.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += this.income[key];
    }
  }
  getAddExpenses() {
    const  addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item => {
      item = item.trim();
      if(item !== '') {
        this.addExpenses.push(item);
      }
    });
  }
  getAddIncome() {
    additionalIncomeItem.forEach(item => {
      const itemValue = item.value.trim();
      if(itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  }
  getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }
  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }
  getStatusIncome() {
    if(this.budgetDay >= 1200) {
      return('У вас высокий уровень дохода');
    } else if (600 <= this.budgetDay < 1200) {
      return('У вас средний уровень дохода');
    } else if (0 <= this.budgetDay < 600) {
      return('К сожалению у вас уровень дохода ниже среднего');
    } else{
      return('Что-то пошло не так');
    }
  }
  getExpensesMonth() {
    for(let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }
  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }
  changePeriod() {
    incomePeriodValue.value = this.calcPeriod();
  }
  getInfoDeposit(){
    if(this.deposit){
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }
  changePercent(){
    const valueSelect = this.value;
    if(valueSelect === 'other'){
      depositPercent.value = '';
      depositPercent.style.display = 'inline-block';
    } else{
      depositPercent.style.display = '';
      depositPercent.style.display = valueSelect;
    }
  }
  depositHandler(){
    if(depositCheck.checked){
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else{
      this.deposit = false;
      depositBank.style.display = '';
      depositAmount.style.display = '';
      depositPercent.style.display = '';
      depositBank.value = '';
      depositAmount.value = '';
      depositBank.removeEventListener('change', this.changePercent);

    }
  }
  eventListeners() {
    validMethod();
    salaryAmount.addEventListener('input', function() {
      if (isNumber(salaryAmount.value.trim()) && salaryAmount.value !== '') {
        start.style.pointerEvents = '';
      } else {
        start.style.pointerEvents = 'none';
      }
    });
    start.addEventListener('click', this.start.bind(this));
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('change', function() {
      periodAmount.textContent = periodSelect.value;
    });
    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }
}

const appData = new AppData();
appData.eventListeners();