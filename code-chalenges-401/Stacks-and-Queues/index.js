'use strict'

const Stack = require('./lib/stack');
const Queues = require('./lib/queues')
const PesudoQueue = require('./lib/pesudoqueue')

const newStack = new Stack
const newQueues = new Queues
const pesudoQueue = new PesudoQueue


pesudoQueue.enqueue(1)
pesudoQueue.enqueue(2)
pesudoQueue.enqueue(3)
pesudoQueue.dequeue()


console.log(pesudoQueue.stack1);
console.log(newQueues.peek());

