// Input:
let a = parseFloat(prompt("Nhập số thứ nhất: "));
let b = parseFloat(prompt("Nhập số thứ hai: "));
let c = parseFloat(prompt("Nhập số thứ ba: "));
function sortNumber(a, b, c) {
    // Xử lý và in ra kết quả
    if(a> b ){
        a = a + b;
        b = a - b;
        a = a - b;
    }
    if(a> c){
        a = a + c;
        c = a - c;
        a = a - c;
      }
    if(b>c ){
        b = b + c;
        c = b - c;
        b = b - c;
    }
    console.log(a, b, c)

  }
 
  
  // Output:
  sortNumber(a, b, c); // 1 2 3