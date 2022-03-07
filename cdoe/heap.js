function buildMaxHeap(nums,heapSize) {
  for (let i=Math.floor(heapSize/2)-1; i>=0; i--) {
     maxHeapify(nums, i, heapSize)
  }
}
function maxHeapify(nums, i, heapSize) {
  let l = i * 2 + 1
  let r = i * 2 + 2
  let largest = i
  if (l<heapSize && nums[l]>nums[largest]) largest = l
  if (r<heapSize && nums[r]>nums[largest]) largest = r
  if (i !== largest) {
     [nums[i], nums[largest]] = [nums[largest], nums[i]]
     maxHeapify(nums, largest, heapSize)
  }
}

//生成数据
const n = 10;
let nums = new Array(n).fill(0);
for (let i=0;i<n;i++) {
    nums[i] = Math.round(Math.random()*100);
}
console.log(nums);


// 堆排序
let heapSize = nums.length
buildMaxHeap(nums,heapSize)
for (let i=nums.length-1; i>=0; i--) {
  [nums[0], nums[i]] = [nums[i], nums[0]]
  heapSize--
  maxHeapify(nums, 0, heapSize)
}
console.log(nums)