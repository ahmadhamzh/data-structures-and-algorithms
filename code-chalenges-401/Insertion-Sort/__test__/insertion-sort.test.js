function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let temp = arr[i]
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j]
            j = j - 1
            arr[j + 1] = temp
        }
    }
    return arr
}

describe('check for indesx.js', () => {

    test('Reverse-sorted ', () => {
        let arr = [20,18,12,8,5,-2]      
        expect(InsertionSort(arr)).toEqual([-2,5,8,12,18,20])

    })
    
    test('Few uniques ', () => {
        let arr = [5,12,7,5,5,7]        
        expect(InsertionSort(arr)).toEqual([5,5,5,7,7,12])

    })
    
    test('Nearly-sorted ', () => {
        let arr = [2,3,5,7,13,11]        
        expect(InsertionSort(arr)).toEqual([2,3,5,7,11,13])

    })

})