function primeNumberString(number) {
    factors = factorize(number);
    string = "";
    for (let [key, value] of factors) {
        string += `(${key}${value > 1 ? "**" + value : ""})`;
    }
    return string;
}

function factorize(number) {
    const factors = new Map();
    let d = 2;

    while (d * d <= number) {
        while (number % d === 0) {
            factors.set(d, (factors.get(d) || 0) + 1);
            number /= d;
        }
        d += (d === 2 ? 1 : 2);
    }

    if (number > 1) {
        factors.set(number, (factors.get(number) || 0) + 1);
    }

    return factors;
}

console.log(primeNumberString(86240));