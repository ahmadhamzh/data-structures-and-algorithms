'use strict'

const Queue = require('../Stacks-and-Queues/lib/queues')



function DuckDuckGoose(str, int) {
    const queue = new Queue
    if (str.length === 0 || int <= 0) {
        return 'wrong input'
    }
    for (let i = 0; i < str.length; i++) {
        queue.enqueue(str[i])        
    }
    while (queue.length > 1) {
        for (let i = 1; i < int; i++) {
            queue.enqueue(queue.peek())
            queue.dequeue()            
        }
        queue.dequeue() 
    }
    return queue.front.value    
}

console.log(DuckDuckGoose('abcd',3));