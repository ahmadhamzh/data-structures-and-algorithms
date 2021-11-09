'use strict'

const Linkedlist = require('./lib/Linkedlist')

// const ll = new Linkedlist();
const ll1 = new Linkedlist();
const ll2 = new Linkedlist();
const ZipLL1 = new Linkedlist();
const ZipLL2 = new Linkedlist();


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
// ZipLL2.zipLists(ll2,ll1)

// console.log(ZipLL);
console.log(ZipLL1.toString());
// console.log(ZipLL2.toString());


// ll.append('ahmad');
// ll.append('mohammed');    
// ll.append('hamzh');    
// ll.append(6);    
// ll.append(7);    
// ll.insertafter('mohammed','ibrahim')
// ll.insertBefore(6,4)
// console.log(ll.length);


// console.log(ll);
// console.log(ll.includes(6));
// console.log(ll.toString());
// console.log(ll.kthFromEnd(3));