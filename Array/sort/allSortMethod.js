// 冒泡排序，每次遍历时，两两比较，将这次最大值或最小值放到最后
function bubbleSort (array) {
    for(let i = 0; i < array.length; i++){
        for(let j = i ; j < array.length -1; j++) {
            if(array[j+1] < array[j]) {
                [array[j+1], array[j]] = [array[j], array[j+1]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([3,1,2]));


// 选择排序， 每次选择此次遍历的最大元素或最小元素放在最前面或者最后面
function selectSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let currentIndex = i;

        for(let j = i; j < arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j];
                currentIndex = j;
            }
        }
        [arr[i], arr[currentIndex]] = [arr[currentIndex], arr[i]];
    }
    return arr;
}

console.log(selectSort([3,12,2]));

//插入排序
// 左边已经是一个有序的数列，将右边无序的数列中的值放入到左边有序的数列中
function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let preIndex = i -1;
        let temp = arr[i];
        while(preIndex >= 0 && temp < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex = preIndex - 1;
        }
        arr[preIndex + 1] = temp;
    }
    return arr;
}

console.log(insertSort([12, 3, 2, 5]));

// 快速排序 每次确定一个元素的位置，
// 如果确定一个元素的位置， 从左往右到该元素的位置，都应该小于该元素，从右往左到该元素的位置都应该大于该元素
function quickSort(arr, left, right) {
    let target = arr[left];
    let i = left, j = right;
    if(i > j) return ;
    while(i !== j) {
        // 找到右边比target小的元素
        while(i < j && arr[j] >= target) {
            j--;
        }
        // 找到左边比target小的元素
        while(i < j && arr[i] <= target) {
            i++;
        }
        if(i < j ) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    arr[left] = arr[i];
    arr[i] = target;

    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
    return arr;
}

console.log(quickSort([1,4,3,2], 0, 3));

// 归并排序 先将数组不断划分，然后在合并起来
function merge(left, right) {
    let arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return arr.concat(left, sright);
}

function mergeSort(arr) {
    if(arr.length <=1) return arr;
    let n = Math.floor(arr.length / 2);
    let left = arr.slice(0, n);
    let right = arr.slice(n, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4,1,2,5,3]));