'use strict'

const Node = require('./Node');
const Queue = require('../Stacks-and-Queues/lib/queues')

class Binarytree {
    constructor(root = null) {
        this.root = root
    }

    preOrder() {// read => left => right
        if (this.isEmpty()) { return 'tree is empty' };
        let arrOfNudes = []
        function _walkingThrough(node) {
            arrOfNudes.push(node.value)
            if (node.left) { _walkingThrough(node.left) }
            if (node.right) { _walkingThrough(node.right) }
        }
        _walkingThrough(this.root)
        return arrOfNudes
    }

    inOrder() {// left => read => right
        if (this.isEmpty()) { return 'tree is empty' };
        let arrOfNudes = []
        function _walkingThrough(node) {
            if (node.left) { _walkingThrough(node.left) }
            arrOfNudes.push(node.value)
            if (node.right) { _walkingThrough(node.right) }
        }
        _walkingThrough(this.root)
        return arrOfNudes
    }

    postOrder() {// left => right => read
        if (this.isEmpty()) { return 'tree is empty' };
        let arrOfNudes = []
        function _walkingThrough(node) {
            if (node.left) { _walkingThrough(node.left) }
            if (node.right) { _walkingThrough(node.right) }
            arrOfNudes.push(node.value)
        }
        _walkingThrough(this.root)
        return arrOfNudes
    }

    findMaximum() {
        if (this.isEmpty()) { return 'tree is empty' };
        let maxNum = this.root.value
        function _walkingThrough(node) {
            if (node.value > maxNum){maxNum = node.value}
            if (node.left) { _walkingThrough(node.left) }
            if (node.right) { _walkingThrough(node.right) }
        }
        _walkingThrough(this.root)
        return maxNum
    }

    breadthFirst(){
        if (!this.root){return 'its an empty tree'}
        let arr =[]
        let queue = new Queue
        queue.enqueue(this.root)
        while (!queue.isEmpty()) {
            arr.push(queue.front.value.value)
            if(queue.front.value.left){queue.enqueue(queue.front.value.left)}
            if(queue.front.value.right){queue.enqueue(queue.front.value.right)}
            queue.dequeue()
        }
        return arr
    }

    isEmpty() {
        return this.root === null
    }

}

class BinarySearchtree {
    constructor(root = null) {
        this.root = root
    }

    add(value) {

        
        if (this.isEmpty()) {
            this.root = new Node(value)
        } else if(this.contains(value)) {
            return 'value already add'
        } else  {

            function _walkingThrough(node) {

                if (node.value > value) {
                    if (!node.left) {
                        node.left = new Node(value)
                    }else {_walkingThrough(node.left)}
                    
                } else {
                    if (!node.right) {
                        node.right = new Node(value)
                        
                    }else {_walkingThrough(node.right)}
                    
                }
            }

            _walkingThrough(this.root)
        }

    }

    contains(value) {

        let contain = false;
        if (this.isEmpty()) {
            return false;
        } else {

            function _walkingThrough(node) {
                if(!node){return contain = false }

                if (node.value === value) {
                    contain = true
                } else if (node.value > value) {
                    if (!node.left) {
                        contain = false;
                    }
                    _walkingThrough(node.left)
                } else {
                    if (!node.right) {
                        contain = false;                       
                    }
                    _walkingThrough(node.right)
                }
            }

            _walkingThrough(this.root)
        }

        return contain
    }


    isEmpty() {
        return this.root === null
    }

}
module.exports = { Binarytree, BinarySearchtree }