'use strict';

function DomElement(selector = '.block', height = '200px', width = '200px', bg = 'green', fontSize = '25px'){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

const body = document.querySelector('body');

DomElement.prototype.checkSelector = function() {
  let elem;
  const select = this.selector.substr(1);
  if(this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.classList.add(select);
  } else if(this.selector[0] ==="#") {
    elem = document.createElement('p');
    elem.id = select;
  }

  elem.style.cssText = `background-color:${this.bg};
  font-size:${this.fontSize};
  width:${this.width};
  height:${this.height} `;

  elem.textContent = 'Привет Glo academy';
  body.append(elem);
};

const domElement = new DomElement('.block','400px', '300px', 'blue', '45px');

domElement.checkSelector();





















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
