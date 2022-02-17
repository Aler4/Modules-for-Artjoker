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

    node = node || this;

    if(this.value === null){
      this.value = value;
      return this;
    }
    

    if(node.value < value || node < value){

      if(node.right === null){
        node.right = value;
        return this;  
      }

      if (typeof node.right === 'number') {
        let temp = node.right;
        node.right = new Node(temp);
      }

      this.add(value, node.right);
    }

    else if(node.value > value || node > value){

      if(node.left === null){
       node.left = value;
       return this;
       
      }

      if (typeof node.left === 'number') {
        let temp = node.left;
        node.left = new Node(temp);
      }

      this.add(value,node.left);
    }
    return this;
  }

  find(value, node){

    node = node || this;

    if(value === node.value && node !== null){
      return node;

    }
    if(node.right === value || node.left === value){
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

    


    if(node.value === value && (node.right === null && node.left === null)){
        node.value = null;
        this.fixNode(parent,node)
    }

    if(node.left === value ){
        node.left = null;
        this.fixNode(parent,node)
    }

    if(node.right === value){
        node.right = null;
        this.fixNode(parent,node)
    }

    
    if(node.value === value && (node.left !== null && node.right !== null) ){

      if(typeof node.right === 'object' && (node.right.left !== null) ){

        if( typeof node.right.left === 'number'){
          node.value = node.right.left;
          node.right.left = null;
          this.fixNode(parent,node)
          return this;
        }

        let newValue = this.findSmaller(node.right)
        node.value = newValue;
        this.delete(newValue,node.right);
        this.fixNode(parent,node)
        return this;

      }

      if(typeof node.right === 'number'){
        node.value = node.right;
        node.right = null;
        return this;
      }
    }

    if(node.value === value && (node.left !== null && node.right === null )){

      if(typeof node.left === 'object'){
        node.value = node.left.value;
        node.right = node.left.right;
        node.left = node.left.left;
        this.fixNode(parent,node)
        return this;
      }

      if(typeof node.left === 'number'){
        node.value = node.left;
        node.left = null;
        this.fixNode(parent,node)     
        return this; 
      }
        
    }


    if(node.value === value && (node.right !== null && node.left === null) ){

      if(typeof node.right === 'object'){
        node.value = node.right.value;
        node.left = node.right.left;
        node.right = node.right.right;
        this.fixNode(parent,node) 
        return this;
      }

      if(typeof node.right === 'number'){
        node.value = node.right;
        node.right = null;
        this.fixNode(parent,node) 
        return this;
      }   
    }
      return this;
  }

  findSmaller(node){

    while((node?.left !== null || node.left !== undefined)  &&  typeof node.left !== 'number'){
      debugger
      return this.findSmaller(node.left);  
    }

    if (typeof node.left === 'number') {
      return node.left
    }

    if(node.left === null){
    return node.value;
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

  fixNode(parent,node){
  
    if(parent && (node.left === null && node.right === null)){

      if( parent.left && parent.left.value === node.value){
        parent.left = node.value;
      }
 
      if( parent.right && parent.right.value === node.value){
        parent.right = node.value;
      }

      return this;
    }
  }
}

// 2) Написать сортировку двумя различными методами 
// (Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)


Array.prototype.shakerSort = function(callback){

  // if (Array.isArray(this)) {
  //   throw new Error('Wrong data type');
  // }

  let end = this.length;
  let start = -1;
  let isSort = true;

  while(isSort){
    isSort = false;

    for(let i = start; i < end; i++){

      if(callback(this[i],this[i +1])){
        [this[i], this[i + 1]] = [this[i+1], this[i]];
        isSort = true;
      }
    }
    start++;

    if(!isSort){
      break;
    }
    end--;
    for(let i = end; i > start; i--){
       if(callback(this[i -1],this[i])){
        [this[i], this[i-1]] = [this[i-1], this[i]];
        isSort = true;
      }
    }
  }
  return this;
};


Array.prototype.mergeSort = function(callback){

  // if(!Array.isArray(this)){
  //   throw new Error('Wrong data type');
  // }

  if(this.length === 1){
    return this;
  }

  let middle = Math.floor(this.length /2);
  let leftSideOfArray = this.slice(0, middle); 
  let rightSideOfArray = this.slice(middle);

  const merge = (firstArray, secondArray, callback) => {
    let result = [];
    let element;

    while(firstArray.length > 0 && secondArray.length > 0){

      if(callback(firstArray[0], secondArray[0])){
        element = firstArray.shift();
        result.push(element);

      }

      if(!callback(firstArray[0],secondArray[0])){
        element = secondArray.shift();
        result.push(element);
      }

    }
    return [...result, ... firstArray, ...secondArray];
  }

  return merge(leftSideOfArray.mergeSort(callback), rightSideOfArray.mergeSort(callback),callback);
};
