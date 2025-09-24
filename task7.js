function mexicanWave(string) {
    return [...string].map((c, i) => 
    c === " " ? null : string.slice(0, i) + c.toUpperCase() + string.slice(i + 1))
    .filter(Boolean);
}

console.log(mexicanWave("hello"));