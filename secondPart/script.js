'use strict';

class First{
  hello(){
    console.log('Привет я метод родителя');
  }
}

class Second extends First{
  hello(){
    super.hello();
    console.log('А я наследуемый метод!');
  }
}

const check1 = new First();
const check2 = new Second();

check1.hello();
check2.hello();
