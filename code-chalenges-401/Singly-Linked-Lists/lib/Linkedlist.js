'use strict'
const Node = require('./Node')

class Linkedlist{
    constructor(value){
        this.head = null
        
    }

    insert(value){
        const newNode = new Node(value)
        
        if (!this.head) {
            this.head = newNode    
            return this;        
        }
        
        let curenteNode = this.head;
        while (curenteNode.next) {
            curenteNode = curenteNode.next
            // console.log(curenteNode);
        }
        // console.log(curenteNode);
        
        curenteNode.next = new Node(value)
        // curenteNode.next = new Tail(value)
        
        return this;
        
    }   
    
    includes(value){
        
        let boolean = false
        if (!this.head) {
            return console.error('the Linked list is empty')       
        }
        
        let curenteNode = this.head;
        while (curenteNode.next ) {           
            if (curenteNode.value === value) {
                boolean = true
            }
            curenteNode = curenteNode.next
        };
        return boolean;
    }
    
    toString(){
        
        let valuesArr = []
        if (!this.head) {
            return console.error('the Linked list is empty')          
        }
        let curenteNode = this.head;
        // console.log(curenteNode.value);
        while (curenteNode.next) {           
            // console.log(curenteNode.value);
            valuesArr.push(`{${curenteNode.value}} -> `)
            curenteNode = curenteNode.next
        };
        // console.log(curenteNode.value);
        valuesArr.push(`{${curenteNode.value}} -> {null} `)

        return valuesArr.join('')

    }
    



}


module.exports = Linkedlist