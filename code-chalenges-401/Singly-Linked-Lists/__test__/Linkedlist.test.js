'use strict'


const { expect } = require('@jest/globals');
const Linkedlist = require('../lib/Linkedlist');

describe('linkedlist checking', () => {

    test('Can successfully instantiate an empty linked list', () => {

        const ll = new Linkedlist()
        expect(ll.head).toBeNull()
    })

    test('Can properly insert into the linked list', () => {

        const ll = new Linkedlist()
        ll.insert('ahmad')
        expect(ll.head.value).toEqual('ahmad')

    })

    test('The head property will properly point to the first node in the linked list', () => {

        const ll = new Linkedlist()
        ll.insert('ahmad')
        ll.insert('mohammed')
        expect(ll.head.value).toEqual('ahmad')

    })

    test('Can properly insert multiple nodes into the linked list', () => {

        const ll = new Linkedlist()
        ll.insert('ahmad')
        ll.insert('mohammed')
        ll.insert('hamzh')
        expect(ll.head.value).toEqual('ahmad')
        expect(ll.head.next.value).toEqual('mohammed')
        expect(ll.head.next.next.value).toEqual('hamzh')

    })

    test('Will return true when finding a value within the linked list that exists', () => {

        const ll = new Linkedlist()
        ll.insert('ahmad')
        ll.insert('mohammed')
        ll.insert('hamzh')
        expect(ll.includes('mohammed')).toEqual(true)

    })
    
    test('Will return false when searching for a value in the linked list that does not exist', () => {

        const ll = new Linkedlist()
        ll.insert('ahmad')
        ll.insert('mohammed')
        ll.insert('hamzh')
        expect(ll.includes('ibrahem')).toEqual(false)

    })
    
    test('Can properly return a collection of all the values that exist in the linked list', () => {

        const ll = new Linkedlist()
        ll.insert('ahmad')
        ll.insert('mohammed')
        ll.insert('hamzh')
        expect(ll.toString()).toEqual('{ahmad} -> {mohammed} -> {hamzh} -> {null} ')

    })


})