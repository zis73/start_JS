'use strict';

function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

const body = document.querySelector('body');

DomElement.prototype.checkSelector = function() {
  let elem,
    select = this.selector.substr(1);
  if(this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.classList.add(select);
  } else if(this.selector[0] ==="#") {
    elem = document.createElement('p');
    elem.id = select;
  }

  elem.style.height = this.height + 'px';
  elem.style.width = this.width + 'px';
  elem.style.backgroundColor = this.bg;
  elem.style.fontSize = this.fontSize + 'px';
  elem.textContent = 'Привет Glo academy';
  body.append(elem);
};

let domElement = new DomElement('#block', 750, 500, 'red', 15);

domElement.checkSelector();
console.log(domElement);




















// DomElement.prototype.checkSelector = function(){
//   let select = this.selector.slice(1);
//   let elem;
//   switch(this.selector){
//     case this.selector[0] === '.':elem = document.createElement('div');
//       elem.classList.add(select);
//       break;
//     case this.selector[0] === '#':elem = document.createElement('p');
//       elem.id = select;
//       break;
//     default: alert('Error');
//   }
// };

// const domElement = new DomElement('.block', 100, 200, '#4285f4', 20);
// domElement.checkSelector(); 
