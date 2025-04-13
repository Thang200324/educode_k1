let a = parseFloat(prompt("Nhập số thứ nhất: "));
let b = parseFloat(prompt("Nhập số thứ hai: "));
let c = parseFloat(prompt("Nhập số thứ ba: "));

function isTriangle(a, b, c) {
    // Viết logic trả về true hoặc false ở đâyđây
    return a + b > c && a + c > b && b + c > a;
  }
  
  // Test cases:
  console.log(isTriangle(a, b, c)); // true
