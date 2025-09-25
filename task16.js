Array.prototype.square = function() {
    return this.map((m) => Math.pow(m, 2));
}

Array.prototype.cube = function() {
    return this.map((m) => Math.pow(m, 3));
}

Array.prototype.sum = function() {
    let s = 0;
    for (let i = 0; i < this.length; i++) {
        s += this[i];
    }
    return s;
}

Array.prototype.average = function() {
    return this.sum() / this.length;
}

Array.prototype.even = function() {
    return this
        .map((m) => m % 2 === 0 ? m : null)
        .filter(Boolean);
}

Array.prototype.odd = function() {
    return this
        .map((m) => m % 2 === 1 ? m : null)
        .filter(Boolean);
}
arr = [1, 2, 3, 4, 5];
//console.log(arr.square());
console.log(arr.cube());
console.log(arr.sum());
console.log(arr.average());
console.log(arr.even());
console.log(arr.odd());