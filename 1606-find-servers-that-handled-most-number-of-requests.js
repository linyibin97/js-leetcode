/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
 var busiestServers = function(k, arrival, load) {
    class Heap {
        constructor (cmp) {
            this.heap = []
            this.cmp = cmp
        }
        swap (index1, index2) {
            const tmp = this.heap[index1]
            this.heap[index1] = this.heap[index2]
            this.heap[index2] = tmp
        }
        shiftUp (index) {
            if (index === 0) return
            const parentIndex = (index - 1) >> 1
            if (this.cmp(this.heap[index], this.heap[parentIndex])) {
            this.swap(index, parentIndex)
            this.shiftUp(parentIndex)
            }
        }
        shiftDown (index) {
            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2
            let minIndex
            if(this.heap[leftIndex]) minIndex = this.cmp(this.heap[leftIndex], this.heap[index]) ? leftIndex : index
            if(this.heap[rightIndex]) minIndex = this.cmp(this.heap[rightIndex], this.heap[minIndex]) ? rightIndex : minIndex
            if (!minIndex) return
            if (index !== minIndex) {
                this.swap(index, minIndex)
                this.shiftDown(minIndex)
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

    function Server(id, end) {
        this.id = id
        this.end = end
    }
    let times = new Array(k).fill(0)
    let busy = new Heap((a,b)=>a.end<b.end)
    let free = new Heap((a,b)=>a.id<b.id)
    for (let i=0; i<k; i++) {
        free.insert(new Server(i, 0))
    }
    for (let i=0; i<arrival.length; i++) {
        while (busy.size()>0 && busy.peek().end<=arrival[i]) {
            let t = busy.pop()
            t.id = i + ((t.id - i) % k + k) % k
            free.insert(t)
        }
        if (free.size()>0) {
            let t = free.pop()
            t.id = t.id % k
            t.end = arrival[i] + load[i]
            times[t.id]++
            busy.insert(t)
        }
        // console.log('i:',i)
        // console.log('busy:',busy.heap)
        // console.log('free:',free.heap)
        // console.log('times:',times)
    }
    
    let maxtimes = Math.max(...times)
    // console.log(times)
    let ret = []
    for (let i=0; i<times.length; i++) {
        if (times[i]==maxtimes) ret.push(i)
    }
    return ret
};