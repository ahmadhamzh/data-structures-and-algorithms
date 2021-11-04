'use strict'

const Linkedlist = require('./lib/Linkedlist')

const ll = new Linkedlist();

ll.insert('ahmad');
ll.insert('mohammed');    
ll.insert('hamzh');    
ll.insert(6);    
ll.insert(7);    


console.log(ll);
console.log(ll.includes(6));
console.log(ll.toString());