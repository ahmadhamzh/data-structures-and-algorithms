'use strict'
const Node = require('./Node')

class Linkedlist {
    constructor(value) {
        this.head = null,
            this.tail = null,
            this.length = 0
    }

    append(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
            this.length++
            return this;
        } else {
            // const newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++
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

        let currentNode = this.head
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                const newNode = new Node(newValue);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.length++
                return true
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
                this.length++

            }
            currentNode = currentNode.next
        }
    }

    kthFromEnd(k) {
        if (k >= this.length || k < 0) {
            return 'Exception'
        } else {
            let counter = (this.length - 1) - k
            let currentNode = this.head
            for (let i = 0; i <= counter; i++) {
                if (i === counter) {
                    return currentNode.value
                } else {
                    currentNode = currentNode.next
                }
            }
        }
    }

    zipLists(list1, list2) {
        if (!list1.head) {
            return list2
        }
        if (!list2.head) {
            return list1
        }
        let currentNodeOne = list1.head
        let currentNodetow = list2.head
        if (list1.length >= list2.length) {
            for (let i = 0; i < list1.length; i++) {
                this.append(currentNodeOne.value)
                currentNodeOne = currentNodeOne.next
                if (i < list2.length) {
                    this.append(currentNodetow.value)
                    currentNodetow = currentNodetow.next
                }
            }
        } else {
            for (let i = 0; i < list2.length; i++) {
                this.append(currentNodetow.value)
                currentNodetow = currentNodetow.next
                if (i < list1.length) {
                    this.append(currentNodeOne.value)
                    currentNodeOne = currentNodeOne.next
                }
            }
        }
        return this
    }
}

module.exports = Linkedlist