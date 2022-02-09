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
