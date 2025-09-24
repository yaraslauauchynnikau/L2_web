function nthArray(arr, n) {
    return arr
    .map((s, i) => ({ str: s, len: s.length, idx: i }))
    .sort((a, b) => {
        if (b.len != a.len) return b.len - a.len;
        return a.idx - b.idx;
    })[n - 1].str;
}

console.log(nthArray(["Hello", "World", "Codewars", "Katas"], 3));