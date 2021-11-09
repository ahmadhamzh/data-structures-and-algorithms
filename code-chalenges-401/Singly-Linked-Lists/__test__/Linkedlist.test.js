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
        ll.append('ahmad')
        expect(ll.head.value).toEqual('ahmad')

    })

    test('The head property will properly point to the first node in the linked list', () => {

        const ll = new Linkedlist()
        ll.append('ahmad')
        ll.append('mohammed')
        expect(ll.head.value).toEqual('ahmad')

    })

    test('Can properly insert multiple nodes into the linked list', () => {

        const ll = new Linkedlist()
        ll.append('ahmad')
        ll.append('mohammed')
        ll.append('hamzh')
        expect(ll.head.value).toEqual('ahmad')
        expect(ll.head.next.value).toEqual('mohammed')
        expect(ll.head.next.next.value).toEqual('hamzh')

    })

    test('Will return true when finding a value within the linked list that exists', () => {

        const ll = new Linkedlist()
        ll.append('ahmad')
        ll.append('mohammed')
        ll.append('hamzh')
        expect(ll.includes('mohammed')).toEqual(true)

    })

    test('Will return false when searching for a value in the linked list that does not exist', () => {

        const ll = new Linkedlist()
        ll.append('ahmad')
        ll.append('mohammed')
        ll.append('hamzh')
        expect(ll.includes('ibrahem')).toEqual(false)

    })

    test('Can properly return a collection of all the values that exist in the linked list', () => {

        const ll = new Linkedlist()
        ll.append('ahmad')
        ll.append('mohammed')
        ll.append('hamzh')
        expect(ll.toString()).toEqual('{ahmad} -> {mohammed} -> {hamzh} -> {null} ')

    })

    test('CAN ADD NODE AFTER SPECIFIC NODE', () => {

        const ll = new Linkedlist()
        ll.append('ahmad')
        ll.append('mohammed')
        ll.append('hamzh')
        ll.insertafter('mohammed', 'ibrahim')
        expect(ll.toString()).toEqual('{ahmad} -> {mohammed} -> {ibrahim} -> {hamzh} -> {null} ')

    })

    test('CAN ADD NODE befor SPECIFIC NODE', () => {

        const ll = new Linkedlist()
        ll.append('ahmad')
        ll.append('mohammed')
        ll.append('hamzh')
        ll.insertBefore('hamzh', 'ibrahim')
        expect(ll.toString()).toEqual('{ahmad} -> {mohammed} -> {ibrahim} -> {hamzh} -> {null} ')

    })

    test('Where k is greater than the length of the linked list', () => {

        const ll = new Linkedlist()
        ll.append('0')
        ll.append('1')
        ll.append('2')
        ll.append('3')

        expect(ll.kthFromEnd(6)).toEqual('Exception')

    })

    test('Where k and the length of the list are the same', () => {

        const ll = new Linkedlist()
        ll.append('0')
        ll.append('1')
        ll.append('2')
        ll.append('3')

        expect(ll.kthFromEnd(4)).toEqual('Exception')

    })

    test('Where k is not a positive integer', () => {

        const ll = new Linkedlist()
        ll.append('0')
        ll.append('1')
        ll.append('2')
        ll.append('3')

        expect(ll.kthFromEnd(-3)).toEqual('Exception')

    })

    test('Where the linked list is of a size 1', () => {

        const ll = new Linkedlist()
        ll.append('0')
        ll.append('1')
        ll.append('2')
        ll.append('3')

        expect(ll.kthFromEnd(1)).toEqual('2')

    })

    test('where k is not at the end, but somewhere in the middle of the linked list', () => {

        const ll = new Linkedlist()
        ll.append('0')
        ll.append('1')
        ll.append('2')
        ll.append('3')
        ll.append('4')

        expect(ll.kthFromEnd(2)).toEqual('2')

    })

    test('check if the tow list isnt equal', () => {

        const ll1 = new Linkedlist();
        const ll2 = new Linkedlist();
        const ZipLL1 = new Linkedlist();
        ll1.append('1')
        ll1.append('3')
        ll1.append('5')
        ll1.append('7')
        ll1.append('9')
        ll1.append('11')
        ll1.append('13')
        ll2.append('2')
        ll2.append('4')
        ll2.append('6')
        ll2.append('8')
        ZipLL1.zipLists(ll1,ll2)

        expect(ZipLL1.toString()).toEqual('{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> {7} -> {8} -> {9} -> {11} -> {13} -> {null} ')

    })

    test('check if one of the list is empty', () => {

        const ll1 = new Linkedlist();
        const ll2 = new Linkedlist();
        const ZipLL1 = new Linkedlist();
        ll1.append('1')
        ll1.append('3')
        ll1.append('5')
        ll1.append('7')               
        ZipLL1.zipLists(ll1,ll2)

        expect(ZipLL1.zipLists(ll1,ll2)).toEqual(ll1)

    })
    
    test('check if both of the list is empty', () => {

        const ll1 = new Linkedlist();
        const ll2 = new Linkedlist();
        const ZipLL1 = new Linkedlist();             
        ZipLL1.zipLists(ll1,ll2)

        expect(ZipLL1.zipLists(ll1,ll2)).toEqual(ll1)

    })

})