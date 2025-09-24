function CircSort(arr) {
    counter = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log((i + 1) % arr.length);
        if (arr[i] > arr[(i + 1) % arr.length]) counter++;
        if (counter > 1) return false;
    }

    return true;
}
