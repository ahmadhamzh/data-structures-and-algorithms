
const Linkedlist = require('../Singly-Linked-Lists/lib/Linkedlist')

class Hashtable {

    constructor(size) {
        this.size = size,
        this.arr = new Array(size)
    }

    hash(key) {

        // const hashedKey = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
        const indexValue = ((key * 525) % this.size)
        return indexValue

    }

    add(key, value) {

        const payLoad =  value ;
        const hashedKey = this.hash(key)
        if (!this.arr[hashedKey]) {
            this.arr[hashedKey] = new Linkedlist()
        }
        this.arr[hashedKey].append(payLoad)
    }

    contains(key) {
        const hashedKey = this.hash(key)
        if (this.arr[hashedKey]) {
            return this.arr[hashedKey].includingObject(key)
        }
        return false
    }

    get(key) {
        const hashedKey = this.hash(key)
        if (this.arr[hashedKey]) {
            return this.arr[hashedKey].head
        }

    }


}

module.exports = Hashtable


