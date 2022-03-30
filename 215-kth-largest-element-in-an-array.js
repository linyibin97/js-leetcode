/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a);
    return nums[k-1];
};

var findKthLargest = function(nums, k) {
   let  heapSize = nums.length
   buildMaxHeap(nums,heapSize)
   for (let i=nums.length-1; i>=nums.length-k+1; i--) {
      [nums[0], nums[i]] = [nums[i], nums[0]]
      heapSize--
      maxHeapify(nums, 0, heapSize)
   }
   return nums[0]

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
};