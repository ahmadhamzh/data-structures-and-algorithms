'use strict'

const Node = require('./Node')
const Karraytree = require('./k-ary-tree')
const Queues = require("../../Stacks-and-Queues/lib/queues")


let kTree = new Karraytree(4, new Node(15))

kTree.add(new Node(3))
kTree.add(new Node(9))
kTree.add(new Node(10))
kTree.add(new Node(12))
kTree.add(new Node(20))
kTree.add(new Node(30))
kTree.add(new Node(25))
kTree.add(new Node(22))
kTree.add(new Node(62))
kTree.add(new Node(5))

function fizzBuzzTree(tree) {
    if (!tree.root.value) { return 'the tree is empty' }
    else {
        let newTree = new Karraytree(tree.k, tree.value)
        const queue = new Queues()
        queue.enqueue(tree.root)
        while (!queue.isEmpty()) {
            if ((queue.front.value.value % 3 == 0) && (queue.front.value.value % 5 == 0)) { newTree.add(new Node('FizzBuzz')) }
            else if (queue.front.value.value % 3 === 0) { newTree.add(new Node('Fizz')) }
            else if (queue.front.value.value % 5 === 0) { newTree.add(new Node('Buzz')) }
            else {newTree.add(new Node(`${queue.front.value.value}`))}
            if (queue.front.value.children.length) {
                for (let i = 0; i < queue.front.value.children.length; i++) {
                    queue.enqueue(queue.front.value.children[i])
                }
            }
            queue.dequeue()
        }
        return newTree
    }
}
console.log(fizzBuzzTree(kTree).breadth());
console.log(kTree.breadth());
