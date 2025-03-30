let a = parseFloat(prompt("Nhập số thứ nhất: "));
let b = parseFloat(prompt("Nhập số thứ hai: "));

function swapNumber(a, b) {
    // Xử lý và in ra kết quả
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b)

  }
  
  // Output:
  swapNumber(a, b);