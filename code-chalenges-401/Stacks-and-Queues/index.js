'use strict'

// const Stack = require('./lib/stack');
const Queues = require('./lib/queues')
// const PesudoQueue = require('./lib/pesudoqueue')
// const AnimalShelter = require('./animal-shelter/animal-shelter')
// const validateBrackets = require('./stack-queue-brackets/stack-queue-brackets')

// const newStack = new Stack
const newQueues = new Queues
// const pesudoQueue = new PesudoQueue

// const animalShelter = new AnimalShelter

newQueues.enqueue(3)
newQueues.enqueue(2)
newQueues.enqueue(1)
newQueues.dequeue()
newQueues.dequeue()
newQueues.dequeue()
// newQueues.dequeue()
// animalShelter.enqueue({type : 'dog'})
// animalShelter.enqueue({type : 'dog'})
// animalShelter.enqueue({type : 'cat'})
// animalShelter.enqueue({type : 'cat'})
// animalShelter.dequeue('cat')
// pesudoQueue.enqueue(3)
// pesudoQueue.dequeue()


console.log(newQueues);


