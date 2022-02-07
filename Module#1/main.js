'use strict';
// 1) Написать функцию которая проверяет являются две строки анаграммой или нет

 // Создаю свой метод для  разбития строки на массив

String.prototype.mySplit = function(separator) {
    const sym = Symbol('string');
    let selfString = {
        [sym]: this,
    };

    let result = [];
    let item = '';

    for(let i of selfString[sym]){
        item += i;

        if (separator === '') {
            result = [...selfString[sym]];
        }

        if (i === separator) {

            let itemWithoutSeparator = '';

            for(let j = 0; j < item.length - 1; j++){
                itemWithoutSeparator += item[j];
            };

            result.push(itemWithoutSeparator)
            item = '';    
        };
    };

    return result;
};

// Создаю свой метод для  сортировки массива

Array.prototype.mySort = function(callback) {
    const sym = Symbol('array');
    let selfArray = {
        [sym]: this
    };

    for(let i = 0; i <= selfArray[sym].length; i++){
        for(let j = i+1; j <= selfArray[sym].length; j++){

            if (callback(selfArray[sym][i], selfArray[sym][j])) {
                [selfArray[sym][i], selfArray[sym][j]] = [selfArray[sym][j], selfArray[sym][i]] 
            };
        };
    };

    return selfArray[sym];    
}


// Создаю свой метод для обьеденение элементов массива в строку

Array.prototype.myJoin = function(separator) {
    const sym = Symbol('array');
    let selfArray ={
        [sym]: this,
    };

    let word = '';
    let result = '';

    for(let i of selfArray[sym]){
        word += (`${i}${separator}`);
        
    };

    for(let i = 0; i< word.length -1; i++ ){
        result += word[i];
    };
    return separator === '' ? word : result;
};



const checkIsAnagram = (firstString, secondString) => {

    if ((typeof firstString !== 'string' || typeof secontString !== 'string')) {
        return false;
    };

    if ( (firstString.length != secondString.length)) {
        return false;
    };

    let sortFirstString = firstString.toLowerCase().mySplit('').mySort((a,b) => a > b).myJoin('');
    let sortSecondString = secondString.toLowerCase().mySplit('').mySort((a,b) => a > b).myJoin('');
  
    return sortFirstString === sortSecondString;
};

// 3 Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.
// *** РЕКУРСИЯ

const getAmountDigitRec = (number, amount) => {
    amount = amount || 1;
    if (number <= amount) {
        return amount;
    }
    ;
    return getAmountDigit(number / 10, ++amount);
};

// *** НЕ РЕКУРСИЯ
const getAmountDigit = (number) => {
    let stringCopyNumber = new String(number);
    let lengthNumber = stringCopyNumber.length;
    return lengthNumber;
};


// 4) Реализовать функцию которая проверяет, является ли строка палиндромом 

// создаю свой метод для развертывания строки

String.prototype.myReverse = function(){
    const sym = Symbol('string');
    let selfString = {
        [sym] : this
    }
    let result = '';

    for(let i = selfString[sym].length - 1; i >= 0; i--){
        result += selfString[sym][i];
    };

    return result;
};

const checkIsPolindrome = (string) => {
    let lowerCaseString = string.toLowerCase();
    let reverseString = lowerCaseString.myReverse();
    return reverseString === lowerCaseString;
};

// 5 Написать функцию которая вычисляет подсчет уникальных слов в предложении
const getAmountUniqWords = (sentece) => {
    const senteceWithoutSymbols = sentece.replace(/[.,!?:;]/gi, '');
    let words = senteceWithoutSymbols.split(' ');
    let uniqWords = [];
    for (let i = 0; i <= words.length - 1; i++) {
        let checksWords = [];
        for (let j = 0; j <= words.length - 1; j++) {
            if (words[i] == words[j])
                checksWords.push(words[j]);
        }
        ;
        if (checksWords.length <= 1) {
            uniqWords.push(words[i]);
        }
        ;
        checksWords = [];
    }
    ;
    return uniqWords.length;
};
// 6 Написать функцию которая вычисляет вхождение каждого слова в предложение;
const getAmountWords = (sentence) => {
    const senteceWithoutSymbols = sentence.replace(/[.,!?:;]/gi, '');
    let words = senteceWithoutSymbols.split(' ');
    let amount = {};
    for (let i = 0; i <= words.length - 1; i++) {
        let checksWords = [];
        for (let j = 0; j <= words.length - 1; j++) {
            if (words[i] == words[j])
                checksWords.push(words[j]);
        }
        ;
        amount[words[i]] = checksWords.length;
        checksWords = [];
    }
    ;
    return amount;
};
// @ts-ignore
const TriangleFunc = function (sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.area = () => {
        if ((this.sideA > 0) && (this.sideB > 0) && (this.sideC > 0) &&
            ((this.sideA + this.sideB > this.sideC) && (this.sideB + this.sideC > this.sideA) && (this.sideA + this.sideC > this.sideB))) {
            // Вычисление площади треугольника по формуле Герона
            let halfPerimetr = (this.sideA + this.sideB + this.sideC) * 0.5;
            let square = Math.floor(Math.sqrt(halfPerimetr * ((halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC))));
            return square;
        }
        throw Error('Wrong value');
    };
    this.perimeter = () => {
        if ((this.sideA > 0) && (this.sideB > 0) && (this.sideC > 0) &&
            ((this.sideA + this.sideB > this.sideC) && (this.sideB + this.sideC > this.sideA) && (this.sideA + this.sideC > this.sideB))) {
            return this.sideA + this.sideB + this.sideC;
        }
        throw Error('Wrong value');
    };
};
;
let triangle = new TriangleFunc(1, 70, 60);
;
// @ts-ignore
const RectangleFunc = function (height, width) {
    this.height = height;
    this.width = width;
    this.area = () => {
        if (this.height !== this.width && (this.height > 0 && this.width > 0)) {
            return this.height * this.width;
        }
        ;
        throw Error('Wrong data');
    };
    this.perimeter = () => {
        if (this.sideA !== this.sideB && (this.sideA > 0 && this.sideB > 0)) {
            return 2 * (this.sideA + this.sideB);
        }
        ;
        throw Error('Wrong data');
    };
};
let rectangle = new RectangleFunc(5, 8);
;
// @ts-ignore
const CircleFunc = function (radius = 0) {
    this.radius = radius;
    this.area = () => {
        if (this.radius > 0) {
            return Math.PI * (this.radius * this.radius);
        }
        ;
        throw Error('Wrong data');
    };
    this.perimeter = () => {
        if (this.radius > 0) {
            return 2 * (Math.PI * this.radius);
        }
        ;
        throw Error('Wrong data');
    };
};
let circle = new CircleFunc(40);
// // // // ***Классы
// //
// // // ***Треугольника
// //
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    get perimeter() {
        if ((this.sideA > 0) &&
            (this.sideB > 0) &&
            (this.sideC > 0) &&
            ((this.sideA + this.sideB > this.sideC) &&
                (this.sideB + this.sideC > this.sideA) &&
                (this.sideA + this.sideC > this.sideB))) {
            return this.sideA + this.sideB + this.sideC;
        }
        ;
        throw Error('Wrong value');
    }
    get area() {
        if ((this.sideA > 0) &&
            (this.sideB > 0) &&
            (this.sideC > 0) &&
            ((this.sideA + this.sideB > this.sideC) &&
                (this.sideB + this.sideC > this.sideA) &&
                (this.sideA + this.sideC > this.sideB))) {
            let halfPerimetr = (this.sideA + this.sideB + this.sideC) * 0.5;
            let square = Math.floor(Math.sqrt(halfPerimetr * ((halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC))));
            return square;
        }
        ;
        throw Error('Wrong value');
    }
}
;
// // ***Прямоугольника
class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
    get perimeter() {
        if (this.sideA !== this.sideB && (this.sideA > 0 && this.sideB > 0)) {
            return this.sideA * this.sideB;
        }
        ;
        throw Error('Wrong data');
    }
    get area() {
        if (this.sideA !== this.sideB && (this.sideA > 0 && this.sideB > 0)) {
            return 2 * (this.sideA * this.sideB);
        }
        ;
        throw Error('Wrong data');
    }
}
;
// //
// // // *** Круг
// //
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get perimeter() {
        if (this.radius > 0) {
            return 2 * (Math.PI * this.radius);
        }
        ;
        throw Error('Wrong value');
    }
    get area() {
        if (this.radius > 0) {
            return Math.PI * (this.radius * this.radius);
        }
        ;
        throw Error('Wrong value');
    }
}
;
// 8 Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала
// *** РЕКУРСИЯ
const mountFactorial = (number) => {
    return (number != 1) ? number * mountFactorial(number - 1) : 1;
};
// *** Цыкл
const factorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    ;
    return result;
};
function memo(callback) {
    const cache = {};
    return (n) => cache[n] || (cache[n] = callback(n));
}
;
let getFact = memo(mountFactorial);
// 9 Посчитать сумму всех элементов массива, 
// только тех которые (Кратные двум, кратные трем,
// которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.
// ***РЕКУРСИЯ
const getSum = (array, callback) => {
    const mountSum = function (index, result) {
        index = index || 0;
        result = result || 0;
        let item = array[index];
        if (index >= array.length) {
            return result;
        }
        ;
        if (callback(item)) {
            result += item;
        }
        ;
        return mountSum(index += 1, result);
    };
    return mountSum(0, 0);
};
// Кратные двум
const getSumMultipleTwo = (array) => getSum(array, (item) => item % 2 === 0);
// Кратные трем,
const getSumMultipleThree = (array) => getSum(array, (item) => item % 3 === 0);
// которые только положительные и нечетные
const getSumPositiveNotEven = (array) => getSum(array, (item) => item > 0);
// *** ЦЫКЛ
const getSumCycle = (array, callback) => {
    let result = 0;
    for (let i = 0; i <= array.length; i++) {
        if (callback(array[i]) === true) {
            result += array[i];
        }
    }
    return result;
};
// Кратные двум
const getSumMultipleTwoCycle = (array) => getSumCycle(array, (item) => item % 2 === 0);
// Кратные трем,
const getSumMultipleThreeCycle = (array) => getSumCycle(array, (item) => item % 3 === 0);
// которые только положительные и нечетные
const getSumPositiveNotEvenCycle = (array) => getSumCycle(array, (item) => item > 0 && item % 2 !== 0);
// 10 Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа)
const getAmount = (array, callback) => {
    let amount = 0;
    for (let index in array) {
        if (callback(array[index]))
            amount += 1;
    }
    ;
    return amount;
};
// Нулевые
const getAmountZero = (array) => getAmount(array, (item) => item === 0);
//  Отрицательные
const getAmountNegative = (array) => getAmount(array, (item) => item < 0);
//  Положительные
const getAmountPositive = (array) => getAmount(array, (item) => item > 0);
//  Простые числа
const getAmountSimpleNumbers = (array) => getAmount(array, (item) => {
    for (let i = 2; i < item; i++) {
        if (item % i === 0)
            return false;
    }
    ;
    return item > 1;
});
// 11) Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. 
// (Достаточно написать для целых положительных чисел)
const parseInBinary = (value) => {
    let result = '';
    for (; value > 0;) {
        result += value % 2;
        value = Math.floor(value / 2);
    };

    return result.split('').reverse().join('');
};
const parseInDecimal = (value) => {
    let copyValue = value.split('').reverse();
    let result = 0;
    for (let i = copyValue.length - 1; i >= 0; i--) {
        copyValue[i] = +copyValue[i] * (Math.pow(2, i));
        result += +copyValue[i];
    }
    ;
    return result;
};
// 12) Пункты 9 и 10 выполнить для двумерных массивов.
// 12 - 9) Посчитать сумму всех элементов ДВУХМЕРНОГО массива, 
// только тех которые (Кратные двум, кратные трем,
// которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.
const getSumTwoDimensional = (array, callback) => {
    const mountSum = function (index, result) {
        index = index || 0;
        result = result || 0;
        let item = array[index];
        if (index >= array.length) {
            return result;
        }
        ;
        if (Array.isArray(item)) {
            return result += getSum(item, callback);
        }
        ;
        if (callback(item)) {
            result += item;
        }
        ;
        return mountSum(index += 1, result);
    };
    return mountSum(0, 0);
};
const getSumTwoDimensionalMultipleTwo = (array) => getSumTwoDimensional(array, (item) => item % 2 === 0);
// Кратные трем,
const getSumTwoDimensionalMultipleThree = (array) => getSumTwoDimensional(array, (item) => item % 3 === 0);
// которые только положительные и нечетные
const getSumTwoDimensionalPositiveNotEven = (array) => getSumTwoDimensional(array, (item) => item > 0);
// *** ЦЫКЛ
const getSumTwoDimensionalCycle = (array, callback) => {
    let result = 0;
    for (let i = 0; i <= array.length; i++) {
        if (Array.isArray(array[i])) {
            result += getSumTwoDimensionalCycle(array[i], callback);
        }
        if (callback(array[i]) === true) {
            result += array[i];
        }
    }
    return result;
};
// // Кратные двум
const getSumTwoDimensionalMultipleTwoCycle = (array) => getSumTwoDimensionalCycle(array, (item) => item % 2 === 0);
// Кратные трем,
const getSumTwoDimensionalMultipleThreeCycle = (array) => getSumTwoDimensionalCycle(array, (item) => item % 3 === 0);
// которые только положительные и нечетные
const getSumTwoDimensionalositiveNotEvenCycle = (array) => getSumTwoDimensionalCycle(array, (item) => item > 0 && item % 2 !== 0);
// 12-10) Посчитать количество элементов ДВУХМЕРНОГО массива которые (Нулевые, отрицательные, положительные, простые числа)
const getAmountTwoDimensional = (array, callback) => {
    let amount = 0;
    for (let index in array) {
        if (Array.isArray(array[index])) {
            getAmountTwoDimensional(array[index], callback);
        }
        ;
        if (callback(array[index]))
            amount += 1;
    }
    return amount;
};
// Нулевые
const getAmountTwoDimensionalZero = (array) => getAmount(array, (item) => item === 0);
//  Отрицательные
const getAmountTwoDimensionalNegative = (array) => getAmount(array, (item) => item < 0);
//  Положительные
const getAmountTwoDimensionalPositive = (array) => getAmount(array, (item) => item > 0);
//  Простые числа
const getAmountTwoDimensionalSimpleNumbers = (array) => getAmount(array, (item) => {
    for (let i = 2; i < item; i++) {
        if (item % i === 0)
            return false;
    }
    return item > 1;
});
// 13 Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные).
//  Нарисовать блок схему. Реализовать также с помощью рекурсии. Реализовать мемоизированную функцию.
// **** Рекурсия + мемоизация 
const getSumRange = (min, max, callback, result) => {
    min = min || 0;
    max = max || 0;
    result = result || 0;
    if (min >= max + 1) {
        return result;
    }
    ;
    if (callback(min)) {
        result += min;
    }
    ;
    return getSumRange(min += 1, max, callback, result);
};
const memoize = (callback) => {
    let memory = {};
    return (min, max) => {
        if (`${min} - ${max}` in memory) {
            return memory[`${min} - ${max}`];
        }
        ;
        return memory[`${min} - ${max}`] = callback(min, max);
    };
};
// всех
const getSumRangeAll = (min, max) => getSumRange(min, max, (item) => item);
let getSumRangeAllMemo = memoize(getSumRangeAll);
// Tолько тех которые кратны 3
const getSumRangeMultThree = (min, max) => getSumRange(min, max, (item) => item % 3 === 0);
let getSumRangeMultThreeMemo = memoize(getSumRangeMultThree);
// только положительные
const getSumRangePositive = (min, max) => getSumRange(min, max, (item) => item > 0);
let getSumRangePositiveMemo = memoize(getSumRangeMultThree);
// Цыкл
const getSumRangeCycle = (min, max, callback) => {
    let result = 0;
    for (; min < max + 1;) {
        if (callback(min)) {
            result += min;
            min++;
        }
    }
    return result;
};
// всех
const getSumRangeAllCycle = (min, max) => getSumRangeCycle(min, max, (item) => item);
// Tолько тех которые кратны 3
const getSumRangeMultThreeCycle = (min, max) => getSumRangeCycle(min, max, (item) => item % 3 === 0);
// только положительные
const getSumRangePositiveCycle = (min, max) => getSumRangeCycle(min, max, (item) => item > 0);
// 14 Найти среднее значение всех элементов одномерного/двумерного массива 
// (Среднее только тех которые четные и которые не четные).
const getMean = (array, callback) => {
    let sum = 0;
    let checksDigits = array.reduce((acc, item) => {
        if (callback(item) && typeof item == 'number') {
            acc.push(item);
        }
        ;
        if (Array.isArray(item)) {
            item.forEach(digit => {
                if (callback(digit)) {
                    acc.push(digit);
                }
            });
        }
        ;
        return acc;
    }, []);
    for (let digit of checksDigits) {
        sum += digit;
    }
    ;
    return sum / checksDigits.length;
};
// Среднее только тех которые четные
const getMeanEvent = (array) => getMean(array, (item) => item % 2 === 0);
// Среднее только тех которые не четные
const getMeanNotEvent = (array) => getMean(array, (item) => item % 2 !== 0);
// 15)Транспонировать матрицу, сложить две матрицы.
// ***Транспонирование матрицы
const transpositionMatrix = (matrix) => {
    let result = [];
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    for (let i = 0; i < colLen; i++) {
        let row = [];
        for (let j = 0; j < rowLen; j++) {
            row.push(matrix[j][i]);
            if (row.length == rowLen) {
                result.push(row);
            }
        }
        ;
    }
    ;
    return result;
};
// сложить две матрицы
const getSumMatrix = (matrix1, matrix2) => {
    if (matrix1.length === 0 || matrix2.length === 0 || (matrix1.length === 0 && matrix2.length === 0)) {
        throw Error('Wrong arguments');
    }
    ;
    let result = [];
    let rowLen = matrix1.length;
    let col = matrix1[0].length;
    for (let i = 0; i < rowLen; i++) {
        result[i] = [];
        if (!(Array.isArray(matrix1[i])) && !(Array.isArray(matrix2[i]))) {
            result[i].push(+matrix1[i] + +matrix2[i]);
        }
        for (let j = 0; j < col; j++) {
            result[i].push((matrix1[i][j] + matrix2[i][j]));
        }
    }
    return result;
};
//  16)Удалить из матрицы тот столбец который имеет хотя бы один нулевой элемент.
const removeColumnWithZero = (matrix) => {
    let clone = matrix.map(arr => arr.slice());
    let res = [];
    for (let i in clone) {
        if (clone[i].some((item) => item == 0)) {
            let pos = clone[+i].indexOf(0);
            for (let j in clone) {
                clone[j].splice(pos, 1);
                res[j] != clone[j] ? res.push(clone[j]) : null;
            }
        }
    }
    return res[0].length !== matrix[0].length ? res : matrix;
};
// 16 Удалить из матрицы  строку которая имеет хотя бы один нулевой элемент;
const removeRowZero = (matrix) => {
    let result = [];
    for (let row of matrix) {
        if (row.includes(0) === false) {
            result.push(row);
        }
        ;
    }
    ;
    return result;
};
//  17 Посчитать сумму/количество нулевых элементов/среднее значение
// элементов матрицы над и под главной диагональю и на главной диагональю.
// Посчитать сумму  над и под главной диагональю и на главной диагональю
const getSumFromMatrix = (matrix) => {
    let result = {
        'sum-above-diagonal': 0,
        'sum-under-diagonal': 0,
        'sum-diagonal': 0,
    };
    let copyMatrixAbove = matrix.map(item => item.slice());
    let copyMatrixUnder = matrix.map(item => item.slice()).reverse();
    let numbersAbove = [];
    let numbersUnder = [];
    for (let i = 0; i <= matrix.length - 1; i++) {
        result["sum-diagonal"] += matrix[i][i];
        let valueAbove = copyMatrixAbove[i].slice(i + 1);
        numbersAbove.push(...valueAbove);
        let valueUnder = copyMatrixUnder[i].reverse().slice(i + 1);
        numbersUnder.push(...valueUnder);
    }
    ;
    for (let k = 0; k <= numbersAbove.length - 1; k++) {
        result["sum-above-diagonal"] += +numbersAbove[k];
        result["sum-under-diagonal"] += +numbersUnder[k];
    }
    ;
    return result;
};
// Посчитать количество нулевых элементов
// // элементов матрицы над и под главной диагональю и на главной диагональю.
const getAmountZeroMatrix = (matrix) => {
    const result = {
        'zeros-above-diagonal': 0,
        'zeros-under-diagonal': 0,
        'zeros-diagonal': 0,
    };
    let copyMatrixAbove = matrix.map(item => item.slice());
    let copyMatrixUnder = matrix.map(item => item.slice()).reverse();
    let numbersAbove = [];
    let numbersUnder = [];
    for (let i = 0; i <= matrix.length - 1; i++) {
        if (matrix[i][i] === 0)
            result['zeros-diagonal'] += 1;
        let valueAbove = copyMatrixAbove[i].slice(i + 1);
        numbersAbove.push(...valueAbove);
        let valueUnder = copyMatrixUnder[i].reverse().slice(i + 1);
        numbersUnder.push(...valueUnder);
    }
    ;
    for (let k = 0; k <= numbersAbove.length - 1; k++) {
        if (+numbersAbove[k] === 0) {
            result["zeros-above-diagonal"] += 1;
        }
        ;
        if (+numbersUnder[k] === 0) {
            result["zeros-under-diagonal"] += 1;
        }
        ;
    }
    ;
    return result;
};
// Посчитать среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.
const getMeanMatrix = (matrix) => {
    let result = {
        'mean-above-diagonal': 0,
        'mean-under-diagonal': 0,
        'mean-diagonal': 0,
    };
    let copyMatrixAbove = matrix.map(item => item.slice());
    let copyMatrixUnder = matrix.map(item => item.slice()).reverse();
    let numbersAbove = [];
    let numbersUnder = [];
    for (let i = 0; i <= matrix.length - 1; i++) {
        result["mean-diagonal"] += matrix[i][i];
        let valueAbove = copyMatrixAbove[i].slice(i + 1);
        numbersAbove.push(...valueAbove);
        let valueUnder = copyMatrixUnder[i].reverse().slice(i + 1);
        numbersUnder.push(...valueUnder);
    };

    for (let k = 0; k <= numbersAbove.length - 1; k++) {
        result["mean-above-diagonal"] += +numbersAbove[k];
        result["mean-under-diagonal"] += +numbersUnder[k];
    };

    result["mean-diagonal"] = +((result["mean-above-diagonal"] / matrix.length).toFixed(2));
    result["mean-above-diagonal"] = +((result["mean-above-diagonal"] / numbersAbove.length).toFixed(2));
    result["mean-under-diagonal"] = +((result["mean-under-diagonal"] / numbersUnder.length).toFixed(2));


    return result;
};
;
let iterObj = {
    // @ts-ignore
    *[Symbol.iterator]() {
        let num1 = 1;
        let num2 = 1;
        let flag = true;

        while (flag) {
            let current = num2;
            num2 = num1;
            num1 = num1 + current;
            yield current;
            if (current == Infinity) {
                flag = false;
            };
        }
    },
};


let iterator = iterObj[Symbol.iterator]();

// ****Рекурсивная функция для вычисления чисел фибоначи

const getFibonacci = (value) => {
    if (value <= 1) {
        return 1;
    }
    return getFibonacci(value - 1) + getFibonacci(value - 2);
};

// ***Мемоизированная функцию для вычисления чисел фибоначчи
const memooize = (fn) => {
    const cache = {};
    return (n) => cache[n] || (cache[n] = fn(n));
};
const memoFib = memoize(getFibonacci);


// 19 Реализовать с помощью итератора и генератора светофор. 
// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.

 // Реализовать с помощью  генератора светофор. 

function* getLights(){
    let colors =['yellow','red','yellow','green'];
    for(let color of colors){
        yield color;
    }
    yield* getLights();
};

const lightsIterator = getLights(); 


 // Реализовать с помощью итератора светофор. 

 const lights = {
    colors: ['yellow','red','yellow', 'green'],  

    [Symbol.iterator](){
        return {
            colors: this.colors,
            index: 0,
            next(){

                if (this.index === this.colors.length) {
                    this.index = 0;
                };

                if (this.index <= this.colors.length) {
                    return {
                        value: this.colors[this.index++],
                        done: false
                    };
                };
            },
        };
    },    
};

// 20 Определить является ли число отрицательным или положительным
//  без сравнения на больше/меньше нуля (побитово)


const checkIsNegative = (number) => {
    return !!(number >> number);
};
 
 // 20 Написать свою реализацию для ~,

 // Способ №1

 const replaceBit = (number) => { return number ^ -1;};

  // Способ №2

  // 20 Посчитать количество битов установленных в 1

  const getAmountOne = (number) => {
    let result = 0;
    
    for(;number;) {
        result++;
        number = number & number -1;
    };
    return result;
  };
