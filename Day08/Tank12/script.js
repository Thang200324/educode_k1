// Input:
let n = parseFloat(prompt("Nhập số n: "));
function printSquareNumber(n) {
    // Xử lý và in ra kết quả
    let result = [];
    for(let i = 2; i * i <= n ; i++){
        result.push(i * i)
    }
    console.log(result.join(" "))
  }
  
  // Output:
  printSquareNumber(n); // 4 9
  