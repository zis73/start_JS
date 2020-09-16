'use strict';

function DomElement(selector, height, width, bg, fontSize){
  this.selector = document.selector;
  this.height = document.height;
  this.width = document.width;
  this.bg = document.bg;
  this.fontSize = document.fontSize;
  const checkSelector = function(selector){
    if(selector.value[0] === '.'){
      selector.value.substr(1) = document.createElement('div');
    }else if(selector === '#'){
      document.createElement('p').id = 'test';
    }
  };
}

const domElement = new DomElement();
console.log(domElement);