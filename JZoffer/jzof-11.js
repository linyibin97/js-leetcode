/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    const n = numbers.length;
    let l = 0, r = n-1;
    while (l<r) {
        let mid = l+((r-l)>>2);
        if (numbers[mid]<numbers[r]) r = mid;
        else if (numbers[mid]>numbers[r]) l = mid+1;
        else r=r-1;
    }
    return numbers[l];
};