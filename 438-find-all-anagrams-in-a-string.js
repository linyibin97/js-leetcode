/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const ls = s.length;
    const lp = p.length;
    const cmpmap = function(mapa,mapb) {
        if (mapa.size !== mapb.size) return false;
        for (let k of mapa.keys())
            if (mapa.get(k) !== mapb.get(k)) return false;
        return true;
    }
    let mapp= new Map();
    for (let i = 0; i < lp; i++) 
        mapp.set(p[i],(mapp.get(p[i]) || 0) + 1);
    let maps = new Map()
    for (let i = 0; i < lp; i++)
        maps.set(s[i],(maps.get(s[i]) || 0) + 1);
    let ret = [];
    if (cmpmap(maps,mapp)) ret.push(0);
    for (let i = lp; i < ls; i++) {
        if (maps.get(s[i-lp])===1) maps.delete(s[i-lp])
            else maps.set(s[i-lp], maps.get(s[i-lp]) - 1);
        maps.set(s[i],(maps.get(s[i]) || 0) + 1);
        if (cmpmap(maps,mapp)) ret.push(i-lp+1);
    }
    return ret;
};