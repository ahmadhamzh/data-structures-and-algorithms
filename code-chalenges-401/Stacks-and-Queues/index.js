'use strict'

const Stack = require('./lib/stack');
const Queues = require('./lib/queues')

const newStack = new Stack
const newQueues = new Queues

newQueues.enqueue(1)
newQueues.enqueue(2)
newQueues.enqueue(3)
newQueues.enqueue(4)


console.log(newQueues);
newQueues.dequeue()
console.log(newQueues);
