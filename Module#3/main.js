'use strict';
// 1) Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: 
// Добавить новый элемент, удалить элемент, найти элемент по его значению)
class Unit {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(value, node) {
        let unit = new Unit(value);
        node = node || this.root;
        if (this.root === null) {
            this.root = unit;
        }
        else if (node.value < value) {
            if (node.right === null) {
                node.right = unit;
            }
            this.add(value, node.right);
        }
        else if (node.value > value) {
            if (node.left === null) {
                node.left = unit;
            }
            this.add(value, node.left);
        }
    }
}
