'use strict';
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BinaryTree_instances, _BinaryTree_parent, _BinaryTree_findSmaller;
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
        _BinaryTree_instances.add(this);
        _BinaryTree_parent.set(this, void 0);
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
    find(value, node) {
        node = node || this.root;
        if (value === node.value) {
            return node;
        }
        if (value > node.value && node.right !== null) {
            if (node.right.value === value) {
                __classPrivateFieldSet(this, _BinaryTree_parent, node, "f");
            }
            return this.find(value, node.right);
        }
        if (value < node.value && node.left !== null) {
            if (node.left.value === value) {
                __classPrivateFieldSet(this, _BinaryTree_parent, node, "f");
            }
            return this.find(value, node.left);
        }
        return null;
    }
    delete(value, node, path) {
        path = path || this.root;
        node = this.find(value, path);
        if (node.right === null && node.left === null) {
            if (this.root.value === value) {
                return this.root = null;
            }
            for (let i in __classPrivateFieldGet(this, _BinaryTree_parent, "f")) {
                if (__classPrivateFieldGet(this, _BinaryTree_parent, "f")[i] !== null && __classPrivateFieldGet(this, _BinaryTree_parent, "f")[i].value === value) {
                    return __classPrivateFieldGet(this, _BinaryTree_parent, "f")[i] = null;
                }
            }
        }
        if (node.right === null && (node.left !== null && node.left !== undefined)) {
            __classPrivateFieldGet(this, _BinaryTree_parent, "f").left = node.left;
        }
        if (node.right !== null) {
            let exchange = __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_findSmaller).call(this, node.right);
            console.log(exchange);
            this.delete(exchange.value, node.right);
            return node.value = exchange.value;
        }
    }
}
_BinaryTree_parent = new WeakMap(), _BinaryTree_instances = new WeakSet(), _BinaryTree_findSmaller = function _BinaryTree_findSmaller(node) {
    while (node.left !== null) {
        return __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_findSmaller).call(this, node.left);
    }
    if (node.left === null) {
        return node;
    }
};
