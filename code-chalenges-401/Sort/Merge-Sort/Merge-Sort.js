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
    } else {
        for (let l = i; l < left.length; l++) {
            arr.push(left[l])
        }
    }    
}














