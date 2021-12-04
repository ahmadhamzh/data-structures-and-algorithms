'use strict'

const Node = require('./Node');
const { Binarytree, BinarySearchtree } = require('./Trees')

const binarytree = new Binarytree(new Node(10,new Node(15,new Node(8),new Node(6)),new Node(12,new Node(8),new Node(19))))
        

console.log(binarytree.breadthFirst());