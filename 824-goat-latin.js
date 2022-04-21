/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const set = new Set(['a','e','i','o','u'])
    const arr = sentence.split(' ')
    for (let i=0; i<arr.length; i++) {
        let s = arr[i]
        if (set.has(s[0].toLowerCase())) {
            s += 'ma'
        } else {
            s = s.slice(1) + s[0] + 'ma'
        }
        arr[i] = s + 'a'.repeat(i+1)
    }
    return arr.join(' ')
};