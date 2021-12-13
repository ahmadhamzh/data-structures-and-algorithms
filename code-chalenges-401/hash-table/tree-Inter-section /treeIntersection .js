'use strict'
const Hashtable = require('../hash-table')
const Node = require('./Node')
let myTable = new Hashtable(1000);


class BinaryTree {
    constructor() {
        this.root = null;
    }
    treeIntersection(node, node1) {
        let arr = [];
        let i = 1
        function tree(node) {
            myTable.add(i, node.value);
            i++
            if (node.left) {
                tree(node.left);
            }
            if (node.right) {
                tree(node.right);
            }
        }
        tree(node);
        i = 1
        tree(node1);
        for (let y = 1; y < i; y++) {
            if (myTable.get(y).value[y] === myTable.get(y).next.value[y]) {
                arr.push(myTable.get(y).value[y]);
            }
        }
        return arr;
    }
}
module.exports = BinaryTree


const bt1 = new BinaryTree();
const bt2 = new BinaryTree();
bt1.root = new Node(1, new Node(2, new Node(3), new Node(4)), new Node(5, new Node(6), new Node(7)));
bt2.root = new Node(1, new Node(5, new Node(3), new Node(11)), new Node(5, new Node(66), new Node(9)));
console.log(bt1.treeIntersection(bt1.root,bt2.root));