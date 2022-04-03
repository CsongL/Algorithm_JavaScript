arr = [1,2,3,4,5,6,7];
function test(arr) {
let left = 0, right = arr.length - 1;
let count = 0;
while(left + 1 < right - 1) {
    console.log(left, right);
    if(arr[left] >= arr[left+1]) {
        count += arr[left] - arr[left+1] + 1;
        arr[left + 1] = arr[left] + 1;
    }
    if(arr[right] >= arr[right-1]) {
        count += arr[right] - arr[right-1] + 1;
        arr[right - 1] = arr[right] + 1;
    }
    console.log(count);
    left++;
    right--;
}

  if(arr.length %2 === 0) {
    return count;
   } else {
    let midValue = Math.max(arr[left], arr[right]);
    return count + midValue - arr[left+1] + 1;
   }
}


console.log(test(arr));

console.log('12345'.slice(0, 0));