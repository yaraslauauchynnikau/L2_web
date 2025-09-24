function color(string) {
    let colors = [...string.slice(1)]
    .map((c, i, arr) => i % 2 === 0 ? c + arr[i + 1] : null)
    .filter(Boolean)    
    .map(x => parseInt(x, 16));

    return { r: colors[0], g : colors[1], b: colors[2] };
}

console.log(color("#FF9933"));