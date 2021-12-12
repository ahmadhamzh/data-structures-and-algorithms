'use strict'
const Hashtable = require('./hash-table.js')

function repeatedWord(string) {
    let myTable = new Hashtable(1024);
    let WithoutComma = string.split(',')
    let WithoutCommaSring = WithoutComma.join('')
    let WithoutSpace = WithoutCommaSring.split(' ')
    for (let i = 0; i < WithoutSpace.length; i++) {
        myTable.add(WithoutSpace[i].toLowerCase(), WithoutSpace[i].toLowerCase())
    }
    let counter = { counter: 0, value: '' }
    for (let i = 0; i < myTable.arr.length; i++) {
        if (myTable.arr[i]) {
            if (myTable.arr[i].length > counter.counter) {
                counter = { counter: myTable.arr[i].length, value: myTable.arr[i].head.value }
            }
        }
    }
    return counter.value
}

module.exports = repeatedWord

let x = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

console.log(repeatedWord(x));

