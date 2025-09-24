function split_doubles(str) {
    if (str.length % 2 !== 0) str += "_";

    return [...str]
    .map((c, i, arr) => i % 2 === 0 ? c + arr[i + 1] : null)
    .filter(Boolean);
}

console.log(split_doubles("abc"));