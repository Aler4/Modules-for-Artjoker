'use strict'

// 1) Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: 
// Добавить новый элемент, удалить элемент, найти элемент по его значению)


class Node {

  value;
  left;
  right;


  constructor(value){

  this.value = value;
  this.left = null;
  this.right = null;    

  } 

  add(value, node){
    if(this.value === null){
      this.value = value;
      return this;
    }
    let child = new Node(value);
    node = node || this;

    if(node.value < value){

      if(node.right === null){
        node.right = child;
      }
      this.add(value, node.right);
    }

    else if(node.value > value){
      if(node.left === null){

        node.left = child;
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
    
      return this.find(value, node.right)
    }

    if(value < node.value && node.left !== null){

      
      return this.find(value, node.left)
    }

    return null;
  }

  delete(value,path){

    path = path || this;

    let node = this.find(value, path);
    let parent = this.findParent(value);

    if( node?.left === null && node?.right === null ){

      if(parent === null){
        this.value = null;
      }

     if (parent !== null) {
        ( parent.left === node) ? parent.left = null : parent.right = null;
      }
      return this;
    }

    if(node.right === null && (node.left !== null && node.left !== undefined)){
      if (parent === null) {
        this.right = this.left.right || null;
        this.value = this.left.value;
        this.left = this.left.left || null;

      }

      if (parent !== null) {
        ( parent.left === node) ? parent.left = node.left : parent.right = node.left;
      }
      return this;
    }

    if(node.right !== null){

      if (node.right.left !== null) {
      let exchange = this.findSmaller(node.right);
      this.delete(exchange.value, node.right);

      node.value = exchange.value; 
      return this;

      }

      node.value = node.right.value;
      node.right = null;
      return this;
    }
    
  }


  findSmaller(node){

    while(node.left !== null){
      return this.findSmaller(node.left);  
    }

    if(node.left === null){
    return node;
    }
  }

  findParent(value,node){
    node = node || this;

    if(this.find(value) === node.right){
      return node;
    }

    else if (this.find(value) === node.left) {
      return node;
    }
  
    if(value > node.value && node.right !== null){
    
      return this.findParent(value, node.right)
    }

    if(value < node.value && node.left !== null){
      
      return this.findParent(value, node.left)
    }

    return null;
  }
}

// 2) Написать сортировку двумя различными методами 
// (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)


const shakerSort = (array,callback) => {

  if (Array.isArray(array)) {
    throw new Error('Wrong data type')
  }

  let end = array.length -1;
  let start = 0;
  let isSort = true;

  while(isSort){
    isSort = false;

    for(let i = start; i < end; i++){

      if(callback(array[i],array[i +1])){
        [array[i], array[i + 1]] = [array[i+1], array[i]];
        isSort = true;
      }
    }
    start++;

    if(!isSort){
      break;
    }
    end--;
    for(let i = end; i > start; i--){
       if(callback(array[i -1],array[i])){
        [array[i], array[i-1]] = [array[i-1], array[i]];
        isSort = true;
      }
    }
  }
  return array;
};



const mergeSort = (array,callback) => {

  if(!Array.isArray(array)){
    throw new Error('Wrong data type');
  }

  if(array.length === 1){
    return array;
  }

  let middle = Math.floor(array.length /2);
  let leftSideOfArray = array.slice(0, middle); 
  let rightSideOfArray = array.slice(middle);

  const merge = (firstArray, secondArray, callback) => {
    let result = [];
    let element;

    while(firstArray.length > 0 && secondArray.length > 0){

      if(callback(firstArray[0], secondArray[0])){
        element = firstArray.shift();
      result.push(element)

      }

      if(!callback(firstArray[0],secondArray[0])){
        element = secondArray.shift();
      result.push(element)
        
      }

    }
    return [...result, ... firstArray, ...secondArray];
  }


  return merge(mergeSort(leftSideOfArray,callback),mergeSort(rightSideOfArray,callback),callback);
};
