function quickSort(arr, left, right) {
    if (left < right) {
        let position = partition(arr, left, right)
        quickSort(arr, left, position - 1)
        quickSort(arr, position + 1, right)
    }
    return arr
}
function partition(arr, left, right) {
    let pivot = arr[right]
    let low = left - 1
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            low += 1
            swap(arr, i, low)
        }
    }
    swap(arr, right, low + 1)
    return low + 1
}
function swap(arr, i, low) {
    let temp
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp   
}

describe('check for quick sort', () => {

    test('Reverse-sorted ', () => {
        let arr = [20,18,12,8,5,-2]      
        expect(quickSort(arr,0,arr.length-1)).toEqual([-2,5,8,12,18,20])
    })    
    test('Few uniques ', () => {
        let arr = [5,12,7,5,5,7]        
        expect(quickSort(arr,0,arr.length-1)).toEqual([5,5,5,7,7,12])
    })    
    test('Nearly-sorted ', () => {
        let arr = [2,3,5,7,13,11]        
        expect(quickSort(arr,0,arr.length-1)).toEqual([2,3,5,7,11,13])
    })

})

