function cache(func) {
    let store = new Map();

    return function(...args) {
        let key = JSON.stringify(args);
        if (store.has(key)) {
            return store.get(key);
        }
        let result = func(...args);
        store.set(key, result);
        return result;
    };
}

