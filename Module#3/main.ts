'use strict'

// 1) Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: 
// Добавить новый элемент, удалить элемент, найти элемент по его значению)


class Unit {

	value: number;
	left: Unit | null;
	right: Unit | null;

	constructor(value: number){
		this.value = value;
		this.left  = null;
		this.right = null;
	}
}

class BinaryTree {

	root: Unit | null;
	#parent: Unit | null;

	#findSmaller(node){
		while(node.left !== null){

			return this.#findSmaller(node.left);	
		}
		if(node.left === null){
		return node;
		}
	}

	constructor(){
		this.root = null;

	}

	add(value, node){

		let unit = new Unit(value);
		node = node || this.root;

		if(this.root === null){
			this.root = unit;
		}

		else if(node.value < value){

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
		node = node || this.root;
		if(value === node.value){
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

	delete(value, node,path){
		path = path || this.root;
		node = this.find(value, path);

		if(node.right === null && node.left === null){

			if(this.root.value === value){
				return this.root = null;
			}

			for(let i in this.#parent){
				if(this.#parent[i] !== null && this.#parent[i].value === value){
					return this.#parent[i] = null;
				}
			}

		}

		if(node.right === null && (node.left !== null && node.left !== undefined)){
			this.#parent.left = node.left;
		}

		if(node.right !== null){
			let exchange = this.#findSmaller(node.right);
			console.log(exchange)

			this.delete(exchange.value, node.right);
			return node.value = exchange.value;
		}
	}

}
