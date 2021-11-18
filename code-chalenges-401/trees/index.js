'use strict'

const Node = require('./Node');
const { Binarytree, BinarySearchtree } = require('./Trees')

const binarySearchtree = new BinarySearchtree(new Node(20))
binarySearchtree.add(30)
binarySearchtree.add(10)
binarySearchtree.add(25)
binarySearchtree.add(12)
binarySearchtree.add(15)

console.log(binarySearchtree.add(15));