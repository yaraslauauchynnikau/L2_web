function number(arr) {
    str = arr.join('');
    parenthess = str.slice(0,3);
    triplet = str.slice(3, 6);
    tail = str.slice(6);
    return "(" + parenthess + ")" + " " + triplet + "-" + tail;
}

console.log(number([1,2,3,4,5,6,7,8,9,0]));