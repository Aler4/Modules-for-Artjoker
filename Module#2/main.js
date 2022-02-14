    'use strict';


// 1 Написать свою реализацию функций bind, call. Новая реализация должна 
// по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.

// своя реализация функции bind
Function.prototype.customBind = function (contexts) {
  const sym = Symbol('fn');
  let selfFunc = {
    ...contexts, 
    [sym]: this, 
  };
  return function (...rest) {
    return selfFunc[sym](...rest);
    };
};


// своя реализация функции call
Function.prototype.customCall = function (contexts) {
  const sym = Symbol('fn');
  let selfFunc = {
    ...contexts,
    [sym]: this,

    };

  return (function (...rest) {
    return selfFunc[sym](...rest);
  })();

};
// 2 Написать свою реализацию функций для работы с массивами, которые являются аналогами
//  следующих функций: map, filter, reduce, find, forEach. Без использования стандартных функций.
// map
Array.prototype.customMap = function (callback) {
  let selfArr = this;
  let result = [];

  for (let i = 0; i <= selfArr.length - 1; i++) {
      result.push(callback(selfArr[i], i, selfArr));
  }
  return result;
};
    // reduce
Array.prototype.customReducer = function (callback, initial) {

  let selfArr = this;
  typeof selfArr[0] === 'string' ? initial = initial || '' : initial = initial || 0;

  let result = initial;

  for (let i = 0; i <= selfArr.length - 1; i++) {
      result = callback(result, selfArr[i], i, selfArr);
  }

  return result;
};

    // filter
Array.prototype.customFilter = function (callback) {

  let selfArr = this;
  let result = [];

  for (let i = 0; i < selfArr.length; i++) {

    if (callback(selfArr[i], i, selfArr)) {
        result.push(selfArr[i]);
    }

  }
  return result;
};

// forEach
Array.prototype.customForEach = function (callback) {
  let selfArr = this;
  for (let i = 0; i < selfArr.length; i++) {
    callback(selfArr[i], i, selfArr);
  }
};

//find
Array.prototype.customFind = function (callback) {
  let selfArr = this;
  let result;
  for (let i = 0; i <= selfArr.length; i++) {

    if (callback(selfArr[i], i, selfArr)) {
        result = selfArr[i];
        break;
    }
  }
        return result;
};
