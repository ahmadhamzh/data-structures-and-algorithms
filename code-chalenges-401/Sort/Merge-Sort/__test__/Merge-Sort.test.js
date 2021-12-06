function mergeSort(arr) {
    const n = arr.length
    if (n > 1) {
        let mid = n / 2
        let left = arr.slice(0, mid)
        let right = arr.splice(mid)
        mergeSort(left)
        mergeSort(right)
        merge(left, right, arr)
    }
    return arr
}

function merge(left, right, arr) {

    let i = 0
    let j = 0
    let k = 0
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i += 1
        } else {
            arr[k] = right[j]
            j += 1
        }
        k += 1
    }
   if (i === left.length) {
       for (let l = j; l < right.length; l++) {
           arr.push(right[l])           
       }
    }else{
       for (let l = i; l < left.length; l++) {
           arr.push(left[l])           
       }
   }
    return arr
}

describe('check for merge sort', () => {

    test('Reverse-sorted ', () => {
        let arr = [20,18,12,8,5,-2]      
        expect(mergeSort(arr)).toEqual([-2,5,8,12,18,20])

    })
    
    test('Few uniques ', () => {
        let arr = [5,12,7,5,5,7]        
        expect(mergeSort(arr)).toEqual([5,5,5,7,7,12])

    })
    
    test('Nearly-sorted ', () => {
        let arr = [2,3,5,7,13,11]        
        expect(mergeSort(arr)).toEqual([2,3,5,7,11,13])

    })

})