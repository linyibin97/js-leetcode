/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    const unfold = function(s) {
        let i = 0;
        let result = '';
        while (i<s.length) {
            if (s[i]>='0' && s[i]<='9') {
                let num = '';
                while (s[i]!=='['){
                    num = num + s[i];
                    i++;
                }
                let count = parseInt(num);
                i++;
                let frs = '';
                let k = 1;
                while (k>0) {
                    if (s[i]==='[') k++;
                    if (s[i]===']') k--;
                    if (k>0) {
                        frs = frs + s[i];
                        i++;
                    }
                }
                let rs = unfold(frs);
                for (let j=0;j<count;j++) result = result + rs;
            }
            else result = result + s[i];
            i++;
        }
        return result;
    }
    return unfold(s);
};

var decodeString = function(s) {
    const unfold = function(i) {
        let num = 0;
        let result = '';
        while (i<s.length) {
            if (s[i]>='0' && s[i]<='9') {
                num = num*10 + parseInt(s[i]);
            } else if (s[i]==='[') {
                let [t, j] = unfold(i+1);
                i = j;
                for (let k=0;k<num;k++) result = result + t;
                num = 0;
            } else if (s[i]===']') {
                return [result,i];
            } else result = result + s[i];
            i++;
        }
        return result;
    }
    return unfold(0);
}



var decodeString = function(s) {
    let ret = ""
    let i = 0
    while (i<s.length) {
        if ('0'<=s[i] && s[i]<='9') {
            let num = ""
            while ('0'<=s[i] && s[i]<='9') {
                num = num + s[i]
                i++
            }
            num = parseInt(num)
            let j = i + 1
            let k = 1
            while (j<s.length && k>0) {
                k += s[j]==='['
                k -= s[j]===']'
                j++
            }
            ret += decodeString(s.slice(i+1,j-1)).repeat(num)
            i = j
        } else {
            ret += s[i]
            i++
        }
    }
    return ret
};