'use strict';
// 1 Написать свою реализацию функций bind, call. Новая реализация должна 
// по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.
// своя реализация функции bind
// @ts-ignore
Function.prototype.myBind = function (contexts) {
    const sym = Symbol('fn');
    let selfFunc = Object.assign(Object.assign({}, contexts), { [sym]: this });
    return function (...rest) {
        return selfFunc[sym](...rest);
    };
};
// своя реализация функции call
// @ts-ignore
Function.prototype.myCall = function (contexts) {
    const sym = Symbol('fn');
    let selfFunc = Object.assign(Object.assign({}, contexts), { [sym]: this });
    return (function (...rest) {
        return selfFunc[sym](...rest);
    })();
};
// 2 Написать свою реализацию функций для работы с массивами, которые являются аналогами
//  следующих функций: map, filter, reduce, find, forEach. Без использования стандартных функций.
// map
// @ts-ignore
Array.prototype.myMap = function (callback) {
    const symbol = Symbol('arr');
    let selfArr = {
        [symbol]: this,
    };
    let result = [];
    for (let i = 0; i <= selfArr[symbol].length - 1; i++) {
        result.push(callback(selfArr[symbol][i], i, selfArr[symbol]));
    }
    return result;
};
// reduce
// @ts-ignore
Array.prototype.myReducer = function (callback, initial) {
    const symbol = Symbol('arr');
    let selfArr = {
        [symbol]: this
    };
    initial = initial || this[0];
    let result = initial;
    for (let i = 0; i <= selfArr[symbol].length; i++) {
        result = callback[selfArr[symbol][i], result];
    }
};
// filter
// @ts-ignore
Array.prototype.myFilter = function (callback) {
    const symbol = Symbol('arr');
    let selfArr = {
        [symbol]: this,
    };
    let result = [];
    for (let i = 0; i < selfArr[symbol].length; i++) {
        if (callback(selfArr[symbol][i], i, selfArr[symbol])) {
            result.push(selfArr[symbol][i]);
        }
    }
    return result;
};
// forEach
// @ts-ignore
Array.prototype.myForEach = function (callback) {
    const symbol = Symbol('arr');
    let selfArr = {
        [symbol]: this,
    };
    for (let i = 0; i < selfArr[symbol].length; i++) {
        callback(selfArr[symbol][i], i, selfArr[symbol]);
    }
};
