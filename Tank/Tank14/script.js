let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
let c = parseFloat(prompt("Nhập số c:"));

function findMaxNumber(a, b, c) {
    // Xử lý và in ra kết quả
    let big = a;
    if (b > big) {
        big = b;
    }
    if (c > big) {
        big = c;
    }
    // document.write("Số lớn nhất là: " + big);
    document.body.innerHTML += `<p>Số lớn nhất là : ${big}</p>`
}

findMaxNumber(a, b, c);