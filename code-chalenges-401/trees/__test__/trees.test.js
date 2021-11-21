'use strict'
const Node = require('../Node');
const { Binarytree, BinarySearchtree } = require('../Trees')

describe('check for trees', () => {

    test('Can successfully instantiate an empty tree', () => {
        const binarytree = new Binarytree()
        const binarySearchtree = new BinarySearchtree()       
        expect(binarytree.isEmpty()).toEqual(true)
        expect(binarySearchtree.isEmpty()).toEqual(true)
    })

    test('Can successfully instantiate a tree with a single root node', () => {
        const binarytree = new Binarytree(new Node(10))
        const binarySearchtree = new BinarySearchtree(new Node(20))       
        expect(binarytree.root.value).toEqual(10)
        expect(binarySearchtree.root.value).toEqual(20)
    })
    
    test('Can successfully add a left child and right child to a single root node', () => {        
        const binarySearchtree = new BinarySearchtree(new Node(20))
        binarySearchtree.add(30)
        binarySearchtree.add(10)       
        expect(binarySearchtree.root.left.value).toEqual(10)
        expect(binarySearchtree.root.right.value).toEqual(30)
    })
    
    test('Can successfully return a collection from a preorder traversal', () => {        
        const binarytree = new Binarytree(new Node(10,new Node(15,new Node(8),new Node(6)),new Node(12,new Node(8),new Node(19))))
        
        expect(binarytree.preOrder()).toEqual([10,15,8,6,12,8,19])
    })
    
    test('Can successfully return a collection from a inorder traversal', () => {        
        const binarytree = new Binarytree(new Node(10,new Node(15,new Node(8),new Node(6)),new Node(12,new Node(8),new Node(19))))
        
        expect(binarytree.inOrder()).toEqual([8,15,6,10,8,12,19])
    })
    
    test('Can successfully return a collection from a postorder traversal', () => {        
        const binarytree = new Binarytree(new Node(10,new Node(15,new Node(8),new Node(6)),new Node(12,new Node(8),new Node(19))))
        
        expect(binarytree.postOrder()).toEqual([8,6,15,8,19,12,10])
    })
    
    test('check if add number already in the tree', () => {        
        const binarySearchtree = new BinarySearchtree(new Node(20))
        binarySearchtree.add(30)
        binarySearchtree.add(10) 
        expect(binarySearchtree.add(10)).toEqual('value already add')
    })
    
    test('Can successfully return a true for contains method', () => {        
        const binarySearchtree = new BinarySearchtree(new Node(20))
        binarySearchtree.add(30)
        binarySearchtree.add(10) 
        expect(binarySearchtree.contains(10)).toEqual(true)
    })

    test('Can successfully return the maximum number in the tree', () => {        
        const binarytree = new Binarytree(new Node(10,new Node(15,new Node(8),new Node(6)),new Node(12,new Node(8),new Node(19))))
        
        // expect(binarytree.postOrder()).toEqual([8,6,15,8,19,12,10])
        expect(binarytree.findMaximum()).toEqual(19)
    })
    
    test('check if tree is empty in findMaximum method', () => {        
        const binarytree = new Binarytree()
        
        // expect(binarytree.postOrder()).toEqual([8,6,15,8,19,12,10])
        expect(binarytree.findMaximum()).toEqual('tree is empty')
    })


})