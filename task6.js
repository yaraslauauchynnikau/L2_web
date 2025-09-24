function weirdString(string) {
    result = [];
    for(let word of string.split(' ')) {
        let weird_word = ""
        for (let i = 0; i < word.length; i++) {
            weird_word += i % 2 == 0 
                ? word[i].toUpperCase() 
                : word[i].toLowerCase();
        }
        result.push(weird_word);
    }
    return result.join(" ");
}

console.log(weirdString("string"));