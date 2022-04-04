const NumArray = function(nums) {
    this.tree = new Array(nums.length + 1).fill(0);
    this.nums = nums;
    for(let i = 0; i < nums.length; i++) {
        this.add(i + 1, nums[i]);
    }
};

NumArray.prototype.update = function(index, value) {
    this.add(index + 1, val - nums[index]);
    this.nums[index] = value;
}

NumArray.prototype.sumRange = function(left, right) {
    return this.preSum(right + 1) - this.preSum(left);
}

NumArray.prototype.lowBit = function(index) {
    return index & -index;
}

NumArray.prototype.add = function(index, value) {
    while(index < this.tree.length) {
        this.tree[index] += value;
        index += this.lowBit(index);
    }
}

NumArray.prototype.preSum = function(index) {
    let sum = 0;
    while(index > 0) {
        sum += this.nums[index];
        index -= this.lowBit(index);
    }
    return sum;
}