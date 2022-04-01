class Heap {
  constructor (cmp) {
    this.heap = []
    this.cmp = cmp ? cmp : (a,b)=>a<b
  }
  getParentIndex (index) {
    return (index - 1) >> 1
  }
  getLeftIndex (index) {
    return index * 2 + 1
  }
  getRightIndex (index) {
    return index * 2 + 2
  }
  swap (index1, index2) {
    const tmp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = tmp
  }
  shiftUp (index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.cmp(this.heap[index], this.heap[parentIndex])) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown (index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    let nextIndex = index
    if (this.cmp(this.heap[leftIndex],this.heap[nextIndex])) nextIndex = leftIndex
    if (this.cmp(this.heap[rightIndex],this.heap[nextIndex])) nextIndex = rightIndex   
    if (index !== nextIndex) {
      this.swap(index, nextIndex)
      this.shiftDown(nextIndex)
    }
  }
  insert (val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
  }
  pop () {
    const res = this.heap[0]
    if (this.heap.length === 1) {
      this.heap.pop()
      return res
    }
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return res
  }
  size () {
    return this.heap.length
  }
  peek () {
    return this.heap[0]
  }
}


let a = new Heap()
a.insert(2)
a.insert(5)
a.insert(-2)
a.insert(-1)
console.log(a.peek())