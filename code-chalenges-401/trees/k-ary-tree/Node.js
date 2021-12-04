'use strict'

class Node {
    constructor(value){
        this.value = value ,
        this.children = [],
        this.parent = null
    }
}

module.exports = Node