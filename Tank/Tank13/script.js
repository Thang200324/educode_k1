
let inputNumber = parseFloat(prompt("nhập số: "))

function printPrimeNumber(n) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let result = [];
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
  
    document.body.innerHTML += `<p> các số nguyên tố 2 đến n là : ${result.join(" ")}</p>`
}
  
  // Output:
  printPrimeNumber(inputNumber); // 2 3 5 7
  
