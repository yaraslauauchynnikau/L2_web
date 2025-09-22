class CubeSum {
    static getTwoCubicPairs(number) {
        if (typeof number !== "number" || !Number.isInteger(number)) {
            throw new TypeError("Passed argument must be an integer number");
        }

        let cubic_pairs = [];

        const limit = Math.floor(Math.cbrt(number));

        for (let a = 1; a <= limit; a++) {
            for (let b = a; b <= limit; b++) {
                const sum = a ** 3 + b ** 3;
                if (sum === number) {
                    cubic_pairs.push([a, b]);
                    if (cubic_pairs.length === 2) return cubic_pairs; 
                }
            }
        }

        return cubic_pairs;
    }
    
    static checkForCubicPairs(number) {
        if (typeof number !== "number" || !Number.isInteger(number)) {
            throw new TypeError("Passed argument must be an integer number");
        }

        let cubic_pairs = [];

        const limit = Math.floor(Math.cbrt(number));

        for (let a = 1; a <= limit; a++) {
            for (let b = a; b <= limit; b++) {
                const sum = a ** 3 + b ** 3;
                if (sum === number) {
                    cubic_pairs.push([a, b]);
                    if (cubic_pairs.length === 2) return true; 
                }
            }
        }

        return false;
    }
    
    //Попытался сделать что-то через разбиение на простые множители, но такая версия не проходит через все возможные комбинации простых множителей, о чем я забыл. 
    //Неэффективен, если переписать метод getFactorPair() для всех комбинаций.
    static getTwoCubicPairsRedundant(number) { 
        if (typeof(number) != "number" || !Number.isInteger(number)) {
            throw new TypeError("Passed argument must be an integer number");
        }

        let prime_factors = this.getPrimeFactors(number);
        let cubic_pairs = [[null, null], [null, null]];

        for (let i = 1; i < prime_factors.size - 1; i += 1) {
            let [N, S] = this.getFactorPair(prime_factors, i);

            let D = Math.pow(N, 4) - 2 * N*N * S + S*S + 36 * N;

            if (D < 0) {
                continue;
            }
            else {
                let sqrtD = Math.sqrt(D);
                if (N % 3 === 0 && Number.isInteger(sqrtD) && sqrtD % 3 === 0) {
                    let b1 = (N + sqrtD) / 3;
                    let b2 = (N - sqrtD) / 3;

                    let a1 = N - b1;
                    let a2 = N - b2;

                    if (a1 > 0) {
                        let pair1 = [b1, a1];
                        this.assignPair(cubic_pairs, pair1);
                    }

                    if (b2 > 0) {
                        let pair2 = [b2, a2];
                        this.assignPair(cubic_pairs, pair2);
                    }
                }
            }

            if (cubic_pairs[0][0] != null && cubic_pairs[1][0] != null) {
                break;
            }
        }
        return cubic_pairs;
    }

    static getPrimeFactors(number) {
        if (typeof number !== "number" || !Number.isInteger(number)) {
            throw new TypeError("Passed argument must be an integer number");
        }

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

    static getFactorPair(primeFactors, n) { 
        let pair = [1, 1];

        for (const [prime, power] of primeFactors) {
            let power_copy = power;
            while (power_copy > 0) {
                if (n > 0) {
                    pair[0] *= prime;
                    n -= 1;
                }
                else {
                    pair[1] *= prime;
                }
                power_copy -= 1;
            }
            
        }

        return pair;
    }

    static assignPair(array, pair) {
        if (array[0][0] === null) {
            array[0] = pair;
        }
        else {
            array[1] = pair;
        }
    }
}

let m = CubeSum.getPrimeFactors(1729);

console.log(m);
console.log(CubeSum.getFactorPair(m, 1));
console.log(CubeSum.getFactorPair(m, 2));

console.log(CubeSum.getTwoCubicPairs(1729));