// Input:
let inputNumber = parseFloat(prompt("nhập số: "))
function printPrimeNumber(n) {
    // Xử lý và in ra kết quả
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    let number = 2;
    const primes = [];
    while (count < n) {
        if (isPrime(number)) {
            primes.push(number);
            count++;
        }
        number++;
    }
    
    document.body.innerHTML += `<p> các số nguyên tố : ${primes.join(" ")}</p>`
}

// Output:
printPrimeNumber(inputNumber); // 2 3 5 7 11 13 17 19 23 29