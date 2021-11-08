'use strict'

const Linkedlist = require('./lib/Linkedlist')

const ll = new Linkedlist();

ll.append('ahmad');
ll.append('mohammed');    
ll.append('hamzh');    
ll.append(6);    
ll.append(7);    
ll.insertafter('mohammed','ibrahim')
// ll.insertBefore(6,4)


console.log(ll);
console.log(ll.includes(6));
console.log(ll.toString());