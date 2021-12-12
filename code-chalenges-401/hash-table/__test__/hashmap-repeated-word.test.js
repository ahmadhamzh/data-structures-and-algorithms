const repeatedWord = require('../hashmap-repeated-word')

describe('hash-table repeated word checking', () => {

    test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
       const string = 'Once upon a time, there was a brave princess who...'

        expect(repeatedWord(string)).toEqual('a')        
    })

    test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
       const string = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York at summer ..."
    
        expect(repeatedWord(string)).toEqual('summer')        
    })

    test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
       const string = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch it of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing it before us, we were all going direct to Heaven, we were all going direct the other it way – in short, the period was so it far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
    
        expect(repeatedWord(string)).toEqual('it')        
    })

})