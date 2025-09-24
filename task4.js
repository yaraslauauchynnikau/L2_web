function findMissing(list) {
    let list_sum = 0; 
    let sum = 0;
    let step = Math.ceil((list[list.length - 1] - list[0]) / list.length);
    let element = list[0];
    for(let num of list) {
        list_sum += num;
    }
    for (let i = 0; i < list.length + 1; i++) {
        sum += element;
        element += step;
    }

    return sum - list_sum;
}
