function Node(key,val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null; 
}
function movenode(node,head) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = head.next;
    node.prev = head;
    node.next.prev = node;
    node.prev.next = node;
}
function newnode(node,head) {
    node.prev = head;
    node.next = head.next;
    node.prev.next = node;
    node.next.prev = node;
}
function deletenode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        movenode(node,this.head);
        return node.val;
    } else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        movenode(node,this.head);
        node.val = value;
    } else if (this.capacity>0) {
        this.capacity--;
        let node = new Node(key,value);
        newnode(node,this.head);
        this.map.set(key,node);
    } else {
        let lastnode=this.tail.prev; 
        this.map.delete(lastnode.key);
        deletenode(lastnode);
        let node = new Node(key,value);
        newnode(node,this.head);
        this.map.set(key,node);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */