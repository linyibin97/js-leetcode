var ladderLength = function(beginWord, endWord, wordList) {
    function isConnect(s1,s2) {
        const n = s1.length
        let k = -1
        for (let i=0; i<n; i++)
            if (s1[i]!==s2[i]) {
                if (k!==-1) return false
                k = i
            }
        return true
    }
    wordList.unshift(beginWord)
    const n = wordList.length
    const map = Array.from(new Array(n), ()=>new Array())
    const visited = new Array(n).fill(false)
    const d = new Array(n).fill(Infinity)
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            if (isConnect(wordList[i],wordList[j])) {
                // console.log(wordList[i],wordList[j])
                map[i].push(j)
                map[j].push(i)
            }
        }
    }

    d[0] = 0
    for (let i=0; i<n; i++) {
        let k = -1
        // console.log(d)
        for (let j=0; j<n; j++) {
            if (visited[j]) continue
            if (k==-1 || d[k]>d[j]) k = j
        }
        for (let j of map[k]) {
            d[j] = Math.min(d[j], d[k]+1)
        }
        visited[k] = true
    }
    
    let l = wordList.indexOf(endWord)
    if (l == -1 || d[l]==Infinity) return 0
    return d[l]+1
};