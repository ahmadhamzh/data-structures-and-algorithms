'use strict'
const Node = require('./Node')

class Linkedlist {
    constructor(value) {
        this.head = null,
            this.tail = null

    }

    append(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
            return this;
        } else {
            const newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;

    }

    includes(value) {

        let boolean = false
        if (!this.head) {
            return console.error('the Linked list is empty')
        }

        let curenteNode = this.head;
        while (curenteNode.next) {
            if (curenteNode.value === value) {
                boolean = true
            }
            curenteNode = curenteNode.next
        };
        return boolean;
    }



    toString() {

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

    insertBefore(value, newValue) {        
        
        let currentNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.value);
            if (currentNode.value === value) {
                const newNode = new Node(newValue);
                currentNode = newNode;
                currentNode.next = currentNode;
                console.log(currentNode);
                break ;
            }
            currentNode = currentNode.next
        }
    }

    insertafter(value, newValue) {
        let currentNode = this.head
        while (currentNode.next) {
            if (currentNode.value === value) {
                const newNode = new Node(newValue);
                newNode.next = currentNode.next;
                currentNode.next = newNode;

            }
            currentNode = currentNode.next
        }
    }
}



module.exports = Linkedlist