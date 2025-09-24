function Expanded(number) {
    return [...String(number)].map(
        (num, i) => num != 0 ? num * Math.pow(10, String(number).length - i - 1) : null)
        .filter(Boolean)
        .join(" + ");
}

