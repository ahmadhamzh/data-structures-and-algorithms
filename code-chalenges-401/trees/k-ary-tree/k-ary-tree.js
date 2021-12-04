'use strict'

const Queues = require("../../Stacks-and-Queues/lib/queues")



class KarrayTree {
    constructor(k, value) {
        this.root = value,
            this.k = k
    }

    add(node) {
        if (!this.root) { this.root = node }
        else {
            const queue = new Queues()
            queue.enqueue(this.root)
            while (!queue.isEmpty()) {
                let lastDequeue = queue.front.value.children
                queue.dequeue()
                if (lastDequeue.length < this.k) {
                    lastDequeue.push(node)
                    return this
                } else {
                    for (let i = 0; i < lastDequeue.length; i++) {
                        queue.enqueue(lastDequeue[i])
                    }
                }
            }
        }
    }

    breadth() {
        if (!this.root.value) { return 'the tree is empty' }
        else {
            let newarr = []
            const queue = new Queues()
            queue.enqueue(this.root)
            while (!queue.isEmpty()) {
                newarr.push(queue.front.value.value)
                if (queue.front.value.children.length) {
                    for (let i = 0; i < queue.front.value.children.length; i++) {
                        queue.enqueue(queue.front.value.children[i])
                    }
                }

                queue.dequeue()
            }
            return newarr
        }
    }
}



module.exports = KarrayTree