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
    let selfArr = this;
    let result = [];
    for (let i = 0; i <= selfArr.length - 1; i++) {
        result.push(callback(selfArr[i], i, selfArr));
    }
    return result;
};
// reduce
// @ts-ignore
Array.prototype.myReducer = function (callback, initial) {
    let selfArr = this;
    typeof selfArr[0] === 'string' ? initial = initial || '' : initial = initial || 0;
    let result = initial;
    for (let i = 0; i <= selfArr.length - 1; i++) {
        result += callback(result, selfArr[i], i, selfArr);
    }
    return result;
};
// filter
// @ts-ignore
Array.prototype.myFilter = function (callback) {
    const symbol = Symbol('arr');
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
// @ts-ignore
Array.prototype.myForEach = function (callback) {
    let selfArr = this;
    for (let i = 0; i < selfArr.length; i++) {
        callback(selfArr[i], i, selfArr);
    }
};
//find
// @ts-ignore 
Array.prototype.myFind = function (callback) {
    let selfArr = this;
    let result;
    for (let i = 0; i <= selfArr.length; i++) {
        let item = selfArr[i];
        if (callback(item, i, selfArr)) {
            result = item;
            break;
        }
    }
    return result;
};
