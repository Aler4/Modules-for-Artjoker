'use strict'

// 1) Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: 
// Добавить новый элемент, удалить элемент, найти элемент по его значению)


class Unit {

  #parent;
  value;
  left;
  right;

  constructor(value){

  this.value = value;
  this.left = null;
  this.right = null;    

  }

  add(value, node){

    let unit = new Unit(value);
    node = node || this;

    if(node.value < value){

      if(node.right === null){
        node.right = unit;
      }
      this.add(value, node.right);
    }

    else if(node.value > value){
      if(node.left === null){

        node.left = unit;
      }

      this.add(value,node.left);
    }
  }

  find(value, node){

    node = node || this;

    if(value === node.value && node !== null){
      return node;
    }

    if(value > node.value && node.right !== null){
      if(node.right.value === value){
        this.#parent = node;
      }
      return this.find(value, node.right)
    }

    if(value < node.value && node.left !== null){

      if(node.left.value === value){
        this.#parent = node;
      }
      return this.find(value, node.left)
    }

    return null;
  }

  delete(value,path){

    path = path || this;
    let node = this.find(value, path);

    if(node.right === null && node.left === null){

      if(this.value === value){

        this.value = null;
        return this;

      }

      for(let i in this.#parent){
        if(this.#parent[i] !== null && this.#parent[i].value === value){

          this.#parent[i] = null;
          return this;

        }
      }
    }

    if(node.right === null && (node.left !== null && node.left !== undefined)){
      this.#parent.left = node.left;
    }

    if(node.right !== null){

      if (node.right.left !== null) {
      let exchange = this.#findSmaller(node.right);
      this.delete(exchange.value, node.right);

      node.value = exchange.value; 
      return this;

      }

      node.value = node.right.value;
      node.right = null;
      return this;
    }
  }


  #findSmaller(node){

    while(node.left !== null){

      return this.#findSmaller(node.left);  
    }

    if(node.left === null){
    return node;
    }
    
  }
}

// 2) Написать сортировку двумя различными методами 
// (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)


const shakerSort: = (array,callback) => {
  let begin: number = 0;
  let end: number = array.length;
  let isSort = true;

  while(isSort){

    isSort = false;

    for(let i = begin; i < end; i++){
      if(callback(array[i],array[i+1])){
        [array[i], array[i +1]] = [array[i + 1], array[i]];
        isSort = true;
      }
    }

    begin++

      if(!isSort){
      break;
    }

    for(let i = end; i > begin; i--){
      if(callback(array[i -1], array[i])){
        [array[i], array[i - 1]] = [array[i -1], array[i]];
        isSort = true;
      }
    }
    end--;
  }
    
  return array;
};


const merge = (firstArray, secondArray, callback) => {
  let result = [];
  let element;

    while(firstArray.length > 0 && secondArray.length > 0){

      if(callback(firstArray[0], secondArray[0])){
        element = secondArray.shift();
        result.push(element)
      }

      if(!callback(firstArray[0], secondArray[0])){
        element = firstArray.shift();
        result.push(element);
      }
      
    }

    return [...result,...firstArray,...secondArray];
};


const mergeSort = (array,callback) => {

  if(!Array.isArray(array)  || !array.length){
    return null;
  }

  if(array.length <= 1){
    return array;
  }

  const middle = Math.floor(array.length /2);
  const left = array.slice(0,middle);
  const right = array.slice(middle,array.length); 

  return merge(mergeSort(left,callback), mergeSort(right,callback),callback);
};