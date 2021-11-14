'use strict'

const Node = require('./Node');

class Queues {
    constructor(){
        this.front = null,
        this.rear = null,
        this.length = 0
    
    }

    enqueue(value){
        let newNode = new Node(value);
        this.length += 1 
        if (!this.rear) {
            this.rear = newNode;
            this.front = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue(){
        if (!this.front.next) {
            return 'exception'
        }
        let temp = this.front
        this.front = this.front.next
        temp.next = null
        this.length -= 1 
        return this.front.value
    }
    
    peek(){
        if (!this.front) {
            return 'exception'            
        }
        return this.front.value
    }

    isEmpty(){
        return this.front === null
    }
}

module.exports = Queues
