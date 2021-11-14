'use strict'
const Stack = require('../lib/stack');
const Queue = require('../lib/queues');
const pesudoQueue = require('../lib/pesudoqueue')

describe('check for indesx.js', ()=>{

    test('Can successfully push onto a stack', () => {

        const newStack = new Stack
        newStack.push('ahmad')
        expect(newStack.top.value).toEqual('ahmad')
    })
    
    test('Can successfully push multiple values onto a stack', () => {
        const newStack = new Stack
        newStack.push(1)
        newStack.push(2)
        newStack.push(3)
        expect(newStack.length).toEqual(3)
    })
    
    test('Can successfully pop off the stack', () => {
        const newStack = new Stack
        newStack.push(1)
        newStack.push(2)
        newStack.push(3)
        newStack.pop()
        expect(newStack.length).toEqual(2)
    })
    
    test('Can successfully empty a stack after multiple pops', () => {
        const newStack = new Stack
        newStack.push(1)
        newStack.push(2)
        newStack.pop()
        newStack.pop()
        expect(newStack.length).toEqual(0)
    })
    
    test('Can successfully peek the next item on the stack', () => {
        const newStack = new Stack
        newStack.push(1)
        newStack.push(2)
        expect(newStack.peek()).toEqual(2)
    })
    
    test('Can successfully instantiate an empty stack', () => {
        const newStack = new Stack
        expect(newStack.isEmpty()).toEqual(true)
    })
    
    test('Calling pop or peek on empty stack raises exception', () => {
        const newStack = new Stack
        expect(newStack.peek()).toEqual('exception')
    })
    
    test('Can successfully enqueue into a queue', () => {
        const newQueue = new Queue
        newQueue.enqueue(1)
        newQueue.enqueue(2)
        expect(newQueue.peek()).toEqual(1)
    })
    
    test('Can successfully dequeue out of a queue the expected value', () => {
        const newQueue = new Queue
        newQueue.enqueue(1)
        newQueue.enqueue(2)
        newQueue.dequeue()
        expect(newQueue.length).toEqual(1)
    })
    
    test('Can successfully peek into a queue, seeing the expected value', () => {
        const newQueue = new Queue
        newQueue.enqueue(1)
        newQueue.enqueue(2)
        expect(newQueue.peek()).toEqual(newQueue.front.value)
    })
    
    test('Can successfully instantiate an empty queue', () => {
        const newQueue = new Queue
        expect(newQueue.length).toEqual(0)
    })
    
    test('Calling dequeue or peek on empty queue raises exception', () => {
        const newQueue = new Queue
        expect(newQueue.peek()).toEqual('exception')
    })
    
    test('check to creat empty pesudo queue', () => {
        const newPesudo = new pesudoQueue
        expect(newPesudo.stack1.length).toEqual(0)
    })
    
    test('check to add multi value to pesudo queue', () => {
        const newPesudo = new pesudoQueue
        newPesudo.enqueue(1)
        newPesudo.enqueue(2)
        newPesudo.enqueue(3)
        expect(newPesudo.stack1.length).toEqual(3)
    })
    
    test('check to dequeue multi value to pesudo queue', () => {
        const newPesudo = new pesudoQueue
        newPesudo.enqueue(1)
        newPesudo.enqueue(2)
        newPesudo.enqueue(3)
        newPesudo.dequeue()
        newPesudo.dequeue()
        expect(newPesudo.stack1.length).toEqual(1)
    })
    


})