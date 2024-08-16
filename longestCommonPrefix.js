function longCommonPrefix(str) {
    if (str.length === 0) {
        return ''
    }

    let prefix = str[0]

    for (let i = 1; i < str.length; i++) {
        while (str[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1)

            if (prefix.length === 0) {
                return ''
            }
        }
        
    }
    return prefix
}

console.log(longCommonPrefix(["flower", "flow", "flight"]))