let Node = function(value){
    this.val = value;
    this.son = new Map();
}

var Trie = function() {
    this.root = new Node(false);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let n = this.root;
    for (let i=0;i<word.length;i++) {
        if (n.son.has(word[i])) {
            n = n.son.get(word[i]);
        } else {
            n.son.set(word[i],new Node(false));
            n = n.son.get(word[i]);
        }
    }
    n.val = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let n = this.root;
    for (let i=0;i<word.length;i++) {
        if (!n.son.has(word[i])) return false;         
        n = n.son.get(word[i]);
    }
    return n.val;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let n = this.root;
    for (let i=0;i<prefix.length;i++) {
        if (!n.son.has(prefix[i])) return false;         
        n = n.son.get(prefix[i]);
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */