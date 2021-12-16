'use strict'

class Node {
    constructor(value){
        [this.value] = value
    }
}

class Edge {
    constructor(vertex,weight){
        this.Vertex = vertex,
        this.weight = weight
    }
}

class Graph {
    constructor(){
        this.list = new Map([]),
        this.size = 0
    }

    addNode(node){
        
        this.list.set(node,[])
        this.size += 1
        return node
    }
   
    addEdge(startNode,endNode,weghit = 0){
        if (!this.list.has(startNode || !this.list.has(endNode))) {            
            return 'invalid input'
        }
        const newEdge = new Edge(endNode, weghit)
        const start = this.list.get(startNode)
        start.push(newEdge)
    }

    size(){
        return this.size
    }




}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

const myGraph = new Graph

myGraph.addNode(nodeA)
myGraph.addNode(nodeB)
myGraph.addNode(nodeC)
myGraph.addNode(nodeD)
myGraph.addNode(nodeE)
// myGraph.addEdge()
console.log(myGraph.list);