'use strict'
const Stack = require('./stack');
// const Node = require('./Node');

class PesudoQueue {
    constructor(value) {

        this.stack1 = new Stack,
            this.stack2 = new Stack


    }

    enqueue(value) {
        while (this.stack1.length != 0) {
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.push(value)
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop())
        }
    }

    dequeue() {
        if (this.stack1.length === 0) {
            return 'pesudo queue is empty'                        
        }

        this.stack1.pop()

    }

}

module.exports = PesudoQueue;