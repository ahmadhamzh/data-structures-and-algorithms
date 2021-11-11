'use strict'

const Node = require('./Node');

class Stack {
    constructor(){
        this.top = null,
        this.length = 0
    }

    push(value){

        if (!this.top) {
            let newNode = new Node(value)
            this.top = newNode;  
            this.length +=1          
        }else{
            let newNode = new Node(value)
            this.length +=1          
            newNode.next = this.top
            this.top = newNode
        }
    }

    pop(){
        if (!this.top) {
            return 'exception'            
        }
        let temp = this.top
        this.top = this.top.next
        temp.next = null;
        this.length -= 1
        return this.top.value;
    }
    
    peek(){
        if (!this.top) {
            return 'exception'            
        }
        return this.top.value        
    }

    isEmpty(){
        return this.top === null;
    }
}

module.exports = Stack