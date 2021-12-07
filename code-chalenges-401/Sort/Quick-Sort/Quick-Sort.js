function quickSort(arr, left, right) {
    if (left < right) {
        let position = partition(arr, left, right)
        // console.log(position,'ppppppppppppppp');
        // console.log(arr,'+++++++++++');
        quickSort(arr, left, position - 1)
        // console.log(arr,'========');
        quickSort(arr, position + 1, right)
    }
    return arr
}

function partition(arr, left, right) {
    let pivot = arr[right]
    // console.log(pivot,'pivottttttttttttttt');
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
    // console.log(arr,'sssssssssssss');
    let temp
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp   
    console.log(arr,'========');
}

let arr = [8, 4, 23, 42, 16, 15]
let n = arr.length - 1
console.log(quickSort(arr, 0, n));