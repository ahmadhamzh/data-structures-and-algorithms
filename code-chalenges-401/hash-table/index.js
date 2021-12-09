const Hashtable = require('./hash-table.js')

let hash = new Hashtable(10)

hash.add('ahmad',50)
hash.add('mohammed',20)
hash.add('ramzi',30)
hash.add('ali',10)
hash.add('amr',40)
hash.add('3laa',70)
hash.add('husam',90)
hash.add('3amer',80)
hash.add('karem',100)

console.log(hash.get('karem'));
console.log(hash.contains('khalid'));
console.log(hash.hash('ahmad'));

// console.log(hash);