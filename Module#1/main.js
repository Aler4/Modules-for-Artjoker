'use strict';

// 1) Написать функцию которая проверяет являются две строки анаграммой или нет

const checkIsAnagram = (firstString, secondString) => {

     if (typeof firstString !== 'string' || typeof secondString !== 'string') {
         throw new Error('Wrong data type entries');
     }

     if ( (firstString.length != secondString.length)) {
         return false;
     }

    let copySecondString = secondString.toLowerCase();
    let copyFirstString = firstString.toLowerCase();

    for(let i = 0; i <= copyFirstString.length;i++){

        for(let j = 0; j <= copySecondString.length;j++){

            if (copyFirstString[i] === copySecondString[j]) {
                copySecondString = copySecondString.replace(copyFirstString[i],'');
            }
        }
    }

    return copySecondString.length === 0;
};

// 3 Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.
// *** РЕКУРСИЯ

const amountDigitRec = (number, amount) => {

    if (typeof number !== 'number') {
        throw new Error('Wrong data type entries');
    }

    amount = amount || 1;

    if (number <= amount) {
        return amount;
    }

    return amountDigitRec(number / 10, ++amount);
};

// *** НЕ РЕКУРСИЯ

const amountDigit = (number) => {

    if (typeof number !== 'number') {
        throw new Error('Wrong data type entries');
    }

   let count = 1;

   while(Math.ceil(number) > count){
        ++count;
        number = number / 10; 
   }

   return count;
};


// 4) Реализовать функцию которая проверяет, является ли строка палиндромом 


// создаю свой метод для развертывания строки

String.prototype.myReverse = function(){

    const sym = Symbol('string');
    let selfString = {
        [sym] : this,
    };

    let result = '';

    for(let i = selfString[sym].length - 1; i >= 0; i--){
        result += selfString[sym][i];
    }

    return result;
};

const checkIsPolindrome = (string) => {
    if (typeof string !== 'string') {
        throw new Error('Wrong data type');
    }

    return string.toLowerCase().myReverse() === string.toLowerCase();
};

// 5 Написать функцию которая вычисляет подсчет уникальных слов в  // Создаю свой метод для  разбития строки на массив


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
            }

            result.push(itemWithoutSeparator)
            item = '';    
        }
    }

    return result;
};
 

const amountUniqWords = (sentence) => {

    if (typeof sentence !== 'string' || (sentence.length <= 1)) {
        throw new Error('Wrong data type');
    }

    const senteceWithoutSymbols = sentence.replace(/[.,!?:;]/gi, '');

    let words = senteceWithoutSymbols.mySplit(' ');
    let uniqWords = [];

    for (let i = 0; i <= words.length - 1; i++) {
        let checksWords = [];

        for (let j = 0; j <= words.length - 1; j++) {

            if (words[i] == words[j]){
                checksWords.push(words[j]);
            }
        }

        if (checksWords.length <= 1) {
            uniqWords.push(words[i]);
        }

        checksWords = [];
    }

    return uniqWords.length;
};

// 6 Написать функцию которая вычисляет вхождение каждого слова в предложение;

const amountWords = (sentence) => {

    if (typeof sentence !== 'string') {
        throw new Error('Wrong data type');
    }

    const senteceWithoutSymbols = sentence.replace(/[.,!?:;]/gi, '');

    let words = senteceWithoutSymbols.mySplit(' ');

    let amountWords = {};

    for (let i = 0; i <= words.length - 1; i++) {
        let checksWords = [];

        for (let j = 0; j <= words.length - 1; j++) {

            if (words[i] == words[j]){
                checksWords.push(words[j]);
            }

        }

        amountWords[words[i]] = checksWords.length;
        checksWords = [];
    }

    return amountWords;
};


const checkIStriangleSides = (sideA,sideB,sideC) => {
    let isCorrect = false;

    if ((sideA > 0) && (sideB > 0)
    && (sideC > 0) && ((sideA + sideB > sideC)
    && (sideB + sideC > sideA) && (sideA + sideC > sideB))){
        isCorrect = true;
    }

    return isCorrect;
};

const TriangleFunc = function (sideA, sideB, sideC) {

    if ( !(checkISTriangleSides(sideA,sideB,sideC)) ){
         throw new Error('Wrong value');
    } 

    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    this.area = () => {
        let halfPerimetr = (this.sideA + this.sideB + this.sideC) * 0.5;
        let square = Math.floor(Math.sqrt(halfPerimetr * ((halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC))));
        return square;
    };

    this.perimeter = () => {
        return this.sideA + this.sideB + this.sideC;
    };
};


const checkIsRectangelSides = (height, width) => {
    let isCorrect = false;

    if(height !== width && (height > 0 && width > 0)){
        isCorrect = true;
    }

    return isCorrect;
};

const RectangleFunc = function (height, width) {

    if ( !(checkIsRectangelSides(height,width)) ){
        throw new Error('Wrong data');
    }

    this.height = height;
    this.width = width;

    this.area = () => {
        return this.height * this.width;
    };

    this.perimeter = () => {
        return 2 * (this.sideA + this.sideB);
    };
};

const CircleFunc = function (radius) {

    if ( radius <= 0 ) {
        throw new Error('Wrong data');
    }

    this.radius = radius;

    this.area = () => {

        return Math.PI * (this.radius * this.radius);

    };

    this.perimeter = () => {

        return 2 * (Math.PI * this.radius);
    
    };
};

// // // // ***Классы
// //
// // // ***Треугольника
// //

class Triangle {

    constructor(sideA, sideB, sideC) {

        if ( !(checkISTriangleSides(sideA,sideB,sideC)) ){
            throw new Error('Wrong data');
        }

        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    get perimeter() {
    
        return this.sideA + this.sideB + this.sideC;
        throw new Error('Wrong value');
    }

    get area() {
        let halfPerimetr = (this.sideA + this.sideB + this.sideC) * 0.5;
        let square = Math.floor(Math.sqrt(halfPerimetr * ((halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC))));
        return square;
    }
}

// // ***Прямоугольника
class Rectangle {

    constructor(height, width) {

        if ( !(checkIsRectangelSides(height,width) ) ){
        throw new Error('Wrong data');
        } 

        this.height = height;
        this.width = width;
    }

    get perimeter() {
        return this.width * this.height;
    }

    get area() {
        
        return 2 * (this.width * this.height);
    }
}
// //
// // // *** Круг
// //

class Circle {

    constructor(radius) {

        if ( radius <= 0 ) {
        throw new Error('Wrong data');
        }

        this.radius = radius;
    }

    get perimeter() {
        return 2 * (Math.PI * this.radius);
    }

    get area() {
        return Math.PI * (this.radius * this.radius);
    }
}

// 8 Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала
// *** РЕКУРСИЯ

const mountFactorial = (number) => {

    if (typeof number !== 'number') {
        throw new Error('Wrong data type');
    }

    return (number != 1) ? number * mountFactorial(number - 1) : 1;
};

const memo = (callback) => {

    if (typeof callback !== 'function') {
        throw new Error('Wrong data type');
    }

    const cache = {};

    return (number) => {

        if (number in cache) { 
            return cache[number];
        }

        return cache[number] = callback(number);
    };
};

let memoizeFactorial = memo(mountFactorial);

// *** Цыкл

const factorial = (number) => {

    if (typeof number !== 'number') {
        throw new Error('Wrong data type');
    }

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
};

// 9 Посчитать сумму всех элементов массива, 
// только тех которые (Кратные двум, кратные трем,
// которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.

// ***РЕКУРСИЯ

const sumItemArray = (array, callback,index, result) => {

    if (!(Array.isArray(array)) || typeof callback !== 'function') {
        throw new Error('Wrong data type');
    }

    index = index || 0;
    result = result || 0;
    let item = array[index];

    if (index >= array.length) {
        return result;
    }

    if (callback(item)) {
        result += item;
    }

    return sumItemArray(array, callback,index++,result);
};


// *** ЦЫКЛ

const sumItemArrayCycle = (array, callback) => {

    if (typeof value !== 'number' || value < 0) {
        throw new Error('Wrong data type');
    }

    let result = 0;

    for (let i = 0; i <= array.length; i++) {

        if (callback(array[i])) {
            result += array[i];
        }
    }
    return result;
};

// 10 Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа)
const amountItemArray = (array, callback) => {

    if (!(Array.isArray(array)) || typeof callback !== 'function') {
        throw new Error('Wrong data type');
    }

    let amount = 0;

    for (let index in array) {
        if (callback(array[index])){
            ++amount;
        }
    }

    return amount;
};


// 11) Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. 
// (Достаточно написать для целых положительных чисел)

const parseInBinary = (value) => {

    if (typeof value !== 'number' || value < 0) {
        throw new Error('Wrong data type');
    }

    let result = '';

    while(value > 0) {
        result += value % 2;
        value = Math.floor(value / 2);
    }

    return result.myReverse();
};

const parseInDecimal = (value) => {

    if (typeof value !== 'string') {
        throw new Error('Wrong data type');
    }

    let copyValue = value.myReverse();
    let result = 0;

    for (let i = copyValue.length - 1; i >= 0; i--) {
        copyValue[i] = +copyValue[i] * (Math.pow(2, i));
        result += +copyValue[i];
    }

    return result;
};

// 12) Пункты 9 и 10 выполнить для двумерных массивов.
// 12 - 9) Посчитать сумму всех элементов ДВУХМЕРНОГО массива, 
// только тех которые (Кратные двум, кратные трем,
// которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.


const sumItemArrayTwoDimensional = (array, callback,index,result) => {

    if ((!Array.isArray(array)) || typeof callback !== 'function') {
        throw new Error('Wrong data type');
    }

    index = index || 0;
    result = result || 0;
    let item = array[index];
    
    if (typeof item !== 'number') {
            throw new Error('Item of array has wrong type');
    }

    if (index >= array.length) {
        return result;
    }

    if (Array.isArray(item)) {
        return result += sumItemArrayTwoDimensional(item, callback,index,result);
    }

    if (callback(item)) {
        result += item;
    }


    return sumItemArrayTwoDimensional(array, callback,index++,result);
    
};


// *** ЦЫКЛ

const sumItemArrayTwoDimensionalCycle = (array, callback) => {

    if ((!Array.isArray(array)) || typeof callback !== 'function') {
        throw new Error('Wrong data type');
    }

    let result = 0;
    for (let i = 0; i <= array.length; i++) {

        if (Array.isArray(array[i])) {
            result += sumItemArrayTwoDimensionalCycle(array[i], callback);
        }

        if (callback(array[i])) {
            result += array[i];
        }
    }
    return result;
};

// 12-10) Посчитать количество элементов ДВУХМЕРНОГО массива которые (Нулевые, отрицательные, положительные, простые числа)


const amountItemArrayTwoDimensional = (array, callback) => {

    if ((!Array.isArray(array)) || typeof callback !== 'function') {
        throw new Error('Wrong data type');
    }

    let amount = 0;
    for (let index in array) {

        if (Array.isArray(array[index])) {
            amountItemArrayTwoDimensional(array[index], callback);
        }

        if (callback(array[index])){
            amount++;
        }
    }
    return amount;
};

// 13 Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные).
//  Нарисовать блок схему. Реализовать также с помощью рекурсии. Реализовать мемоизированную функцию.
// **** Рекурсия + мемоизация 

const sumRange = (min, max, callback, result) => {

    if ((typeof min !== 'number' || typeof max !== number) || max < min) {
        throw new Error('Wrong data entries');
    }

    min = min || 0;
    max = max || 0;
    result = result || 0;

    if (min >= max + 1) {
        return result;
    }

    if (callback(min)) {
        result += min;
    }

    return sumRange(min += 1, max, callback, result);
};

const memoize = (callback) => {
    let memory = {};

    return (min, max) => {

        if (`${min} - ${max}` in memory) {
            return memory[`${min} - ${max}`];
        }

        return memory[`${min} - ${max}`] = callback(min, max);
    }
};

// Цыкл

const sumRangelCycle = (min, max, callback) => {

    if ((typeof min !== 'number' || typeof max !== number) || max < min) {
        throw new Error('Wrong data entries');
    }

    let result = 0;

    while(min < max + 1) {
        if (callback(min)) {
            result += min;
            min++;
        }
    }

    return result;
};


// 14 Найти среднее значение всех элементов одномерного/двумерного массива 
// (Среднее только тех которые четные и которые не четные).

const mean = (array, callback) => {

    if(!(Array.isArray(array)) || typeof callback !== 'function'){
        throw new Error('Wrong data entries');
    }

    let sum = 0;

    let checksDigits = array.reduce((acc, item) => {

        if (callback(item) && typeof item == 'number') {
            acc.push(item);
        }

        if (Array.isArray(item)) {

            item.forEach(digit => {
                if (callback(digit)) {
                    acc.push(digit)
                }
            });
        }

        return acc;

    },[]);

    for (let digit of checksDigits) {
        sum += digit;
    }

    return sum / checksDigits.length;
};

// 15)Транспонировать матрицу, сложить две матрицы.
// ***Транспонирование матрицы

const transpositionMatrix = (matrix) => {

    if(!Array.isArray(matrix)){
        throw new Error('Wrong data entries');
    }

    let result = matrix;

    if (matrix.length > 0) {
        result = [];
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
        }
    }
    
    return result;
};

// сложить две матрицы

const sumMatrixs = (matrix1, matrix2) => {

    if ( !(Array.isArray(matrix1)) || !(Array.isArray(matrix2)) ) {
        throw new Error('Wrong data entries');
    }

    let result = [];

    if( (matrix1.length > 0 && matrix2.length > 0) && (matrix1.length === matrix2.length)) {

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
    }

    return result;
};

//  16)Удалить из матрицы тот столбец который имеет хотя бы один нулевой элемент.


const removeColumnWithZero = (matrix) => {

    if (!Array.isArray(matrix)) {
        throw new Error('Wrong data entries');
    }

    let clone = matrix.map(arr => arr.slice());
    let result = [];
    for (let i in clone) {

        if (clone[i].some((item) => item == 0)) {

            let pos = clone[+i].indexOf(0);

            for (let j in clone) {
                clone[j].splice(pos, 1);
                result[j] != clone[j] ? result.push(clone[j]) : null;
            }
        }
    }

    return res[0].length !== matrix[0].length ? res : matrix;
};

// 16 Удалить из матрицы  строку которая имеет хотя бы один нулевой элемент;

const removeRowZero = (matrix) => {

    if (!Array.isArray(matrix)) {
        throw new Error('Wrong data entries');
    }

    let result = [];
    for (let row of matrix) {

        if (row.includes(0) === false) {
            result.push(row);
        }
    }

    return result;
};

//  17 Посчитать сумму/количество нулевых элементов/среднее значение
// элементов матрицы над и под главной диагональю и на главной диагональю.
// Посчитать сумму  над и под главной диагональю и на главной диагональю


const sumFromMatrix = (matrix) => {

    if (!Array.isArray(matrix)) {
        throw new Error('Wrong data entries');
    }

    let results = {
        'sum-above-diagonal': 0,
        'sum-under-diagonal': 0,
        'sum-diagonal': 0,
    };

    let copyMatrixAbove = matrix.map(item => item.slice());
    let copyMatrixReverse = matrix.map(item => item.slice()).reverse();

    let numbersAbove = [];
    let numbersUnder = [];

    for (let i = 0; i <= matrix.length - 1; i++) {

        let numberDiagonal = matrix[i][i]
        results["sum-diagonal"] += numberDiagonal;

        let valueAbove = copyMatrixAbove[i].slice(i + 1);
        numbersAbove.push(...valueAbove);

        let valueUnder = copyMatrixReverse[i].reverse().slice(i + 1);
        numbersUnder.push(...valueUnder);
    }

    for (let k = 0; k <= numbersAbove.length - 1; k++) {

        results["sum-above-diagonal"] += +numbersAbove[k];
        results["sum-under-diagonal"] += +numbersUnder[k];
    }

    return result;
};

// Посчитать количество нулевых элементов
// // элементов матрицы над и под главной диагональю и на главной диагональю.

const amountZeroMatrix = (matrix) => {

    if (!Array.isArray(matrix)) {
        throw new Error('Wrong data entries')
    }

    const results = {
        'zeros-above-diagonal': 0,
        'zeros-under-diagonal': 0,
        'zeros-diagonal': 0,
    };

    let copyMatrixAbove = matrix.map(item => item.slice());
    let copyMatrixReverse = matrix.map(item => item.slice()).reverse();

    let numbersAbove = [];
    let numbersUnder = [];

    for (let i = 0; i <= matrix.length - 1; i++) {

        if (matrix[i][i] === 0){
            results['zeros-diagonal'] += 1;
        }

        let valueAbove = copyMatrixAbove[i].slice(i + 1);
        numbersAbove.push(...valueAbove);

        let valueUnder = copyMatrixReverse[i].reverse().slice(i + 1);
        numbersUnder.push(...valueUnder);
    }

    for (let k = 0; k <= numbersAbove.length - 1; k++) {
        if (+numbersAbove[k] === 0) {
            results["zeros-above-diagonal"] += 1;
        }

        if (+numbersUnder[k] === 0) {
            results["zeros-under-diagonal"] += 1;
        }
    }

    return results;
};

// Посчитать среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.

const meanMatrix = (matrix) => {

    if (!Array.isArray(matrix)) {
        throw new Error('Wrong data entries')
    }

    let results = {
        'mean-above-diagonal': 0,
        'mean-under-diagonal': 0,
        'mean-diagonal': 0,
    };

    let copyMatrixAbove = matrix.map(item => item.slice());
    let numbersAbove = [];

    let copyMatrixReverse = matrix.map(item => item.slice()).reverse();
    let numbersUnder = [];


    for (let i = 0; i <= matrix.length - 1; i++) {

        let numberDiagonal = matrix[i][i]
        results["mean-diagonal"] += numberDiagonal;

        let valueAbove = copyMatrixAbove[i].slice(i + 1);
        numbersAbove.push(...valueAbove);


        let valueUnder = copyMatrixReverse[i].reverse().slice(i + 1);
        numbersUnder.push(...valueUnder);
    }

    for (let k = 0; k <= numbersAbove.length - 1; k++) {
        resulst["mean-above-diagonal"] += +numbersAbove[k];
        results["mean-under-diagonal"] += +numbersUnder[k];
    }

    results["mean-diagonal"] = +((results["mean-above-diagonal"] / matrix.length).toFixed(2));
    results["mean-above-diagonal"] = +((results["mean-above-diagonal"] / numbersAbove.length).toFixed(2));
    results["mean-under-diagonal"] = +((results["mean-under-diagonal"] / numbersUnder.length).toFixed(2));


    return results;
};

//18 Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
//  (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.


// Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи

let fibonaciObj = {
    *[Symbol.iterator]() {
        let previous = 1;
        let next = 0;
        let flag = true;

        while (flag) {
            let current = next;
            next = previous;
            previous = previous + current;
            yield current;
            if (current == Infinity) {
                flag = false;
            };
        }
    },
};


let iterator = fibonaciObj[Symbol.iterator]();

// ****Рекурсивная функция для вычисления чисел фибоначи

const amountFibonacci = (value) => {

    if (typeof value !== 'number') {
        throw new Error('Wrong data type entries')
    }

    if (value <= 1) {
        return 1;
    }

    return amountFibonacci(value - 1) + amountFibonacci(value - 2);
};

// ***Мемоизированная функцию для вычисления чисел фибоначчи

const memooize = (callback) => {

    if (typeof callback !== 'function') {
        throw new Error('Wrong data type entries');
    }

    const cache = {};

    return (number) => {

        if(number in cache) {
        return cache[number];
        }
        return cache[number] = callback(number);
    };
};

const memoFib = memoize(amountFibonacci);


// 19 Реализовать с помощью итератора и генератора светофор. 
// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.

 // Реализовать с помощью  генератора светофор. 

function* lights(){

    let colors =['yellow','red','yellow','green'];
    for(let color of colors){
        yield color;
    }
    yield* lights();
};

const lightsGenerator = lights(); 


 // Реализовать с помощью итератора светофор. 

 const lightsIterator = {
    colors: ['yellow','red','yellow', 'green'],  

    [Symbol.iterator](){
        return {
            colors: this.colors,
            index: 0,
            next(){

                if (this.index === this.colors.length) {
                    this.index = 0;
                }

                if (this.index <= this.colors.length) {
                    return {
                        value: this.colors[this.index++],
                        done: false
                    };
                }
            },
        };
    },    
};


// 20 Определить является ли число отрицательным или положительным
//  без сравнения на больше/меньше нуля (побитово)

const checkIsNegative = (number) => {

    if (typeof number !== 'number') {
        throw new Error('Wrong data type entries');
    }

    return !!(number >> number);
};
 
 // 20 Написать свою реализацию для ~,

 // Способ №1

 const convertBit = (number) => { 

    if (typeof number !== 'number') {
    throw new Error('Wrong data entries');
    }

    return number ^ -1;
};

  // Способ №2

const convert = (number) => {

    if (typeof number !== 'number') {
        throw new Error('Wrong data type entries');
    }

    if (checkIsNegative(number)) {
        return number + Math.abs(number * 2) - 1;
    }

    return number - (Math.abs(number * 2) + 1);  
};
        
  // 20 Посчитать количество битов установленных в 1

const amountBitOne = (number) => {
    if (typeof number !== 'number' || number < 0) {
        throw new Error('Wrong data type entrie');
    }

    let result = 0;

    for(;number;) {
        result++;
        number &= number -1;
    }

    return result;
};

  // 20 Посчитать количество битов установленных в 0

const amountBitZero = (number) => {

    if (typeof number !== 'number' || number < 0) {
        throw new Error('Wrong data type entries');
    }

    let bit = 1;
    let bitInOne = amountBitOne(number);
    let result = 0;

    for(let i = 0; i <= number; i++){
        result++;
        bit <<= 1;
        if (bit >= number) {
            return (result - bitInOne);
        }
    }
};