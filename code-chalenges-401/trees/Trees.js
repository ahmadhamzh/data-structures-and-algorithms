'use strict'

const Node = require('./Node');

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