const Hashtable = require('../hash-table')

let hash = new Hashtable(2)


// describe('hash-table checking', () => {

    // test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    //     hash.add('ahmad', 50)
    //     hash.add('mohammed', 20)
    //     hash.add('ramzi', 30)
    //     hash.add('ali', 10)
    //     expect(hash.contains('ramzi')).toEqual(true)        
    // })
    
    // test('Retrieving based on a key returns the value stored  ', () => {
    //     hash.add('ahmad', 50)
    //     hash.add('mohammed', 20)
    //     hash.add('ramzi', 30)
    //     hash.add('ali', 10)
    //     expect(hash.get('ahmad')).toEqual(50)
    //     expect(hash.get('ali')).toEqual(10)
    // })
    // test('Successfully returns false for a key that does not exist in the hashtable ', () => {
    //     hash.add('ahmad', 50)
    //     hash.add('mohammed', 20)
    //     hash.add('ramzi', 30)
    //     hash.add('ali', 10)
    //     expect(hash.contains('khalid')).toBe(false)
    // })
    
    // test('Successfully handle a collision within the hashtable ', () => {
    //     hash.add('ahmad', 50)
    //     hash.add('mohammed', 20)
    //     hash.add('ramzi', 30)
    //     hash.add('ali', 10)
    //     expect(hash.get('ahmad')).toEqual(50)
    //     expect(hash.get('ali')).toEqual(10)
    // })
    
    // test('Successfully retrieve a value from a bucket within the hashtable that has a collision  ', () => {
    //     let testHash = new Hashtable(1)
    //     testHash.add('ahmad', 50)
    //     testHash.add('mohammed', 20)
    //     testHash.add('ramzi', 30)
    //     testHash.add('ali', 10)
    //     expect(hash.get('ahmad')).toEqual(50)
    //     expect(hash.get('ali')).toEqual(10)
    // })
    
    // test('Successfully hash a key to an in-range value ', () => {
    //     let testHash = new Hashtable(10)
    //     testHash.add('ahmad', 50)
    //     testHash.add('mohammed', 20)
    //     testHash.add('ramzi', 30)
    //     testHash.add('ali', 10)
    //     expect(hash.hash('ahmad')).toEqual(1)   

    // })
    
    

// })