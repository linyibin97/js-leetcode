/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let strs = paragraph.split(/[ \!\?\'\,\;\.]/)
    const ban = {}
    const map = {}
    banned.forEach(str=>ban[str.toLowerCase()]=true)
    for (let str of strs) {
        str = str.toLowerCase()
        if (str=='') continue
        if (ban[str]) continue
        map[str] = (map[str] || 0) + 1
    }
    let ret = ''
    for (let key of Object.keys(map)) {
        if (ret=='' || map[key]>map[ret]) ret = key
    }
    return ret
};