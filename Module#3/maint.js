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
    }
    add(value, node) {
        this.node = node || this.root;
        let unit = new Unit(value);
        if (this.node === null) {
            this.node = unit;
        }
        if (this.node.value < value) {
            if (this.node.right != null) {
                this.add(value, this.node.right);
            }
            this.root.right = unit;
        }
        if (this.node.value > value) {
            if (this.node.left != null) {
                this.add(value, this.node.left);
            }
            this.root.left = unit;
        }
    }
}
