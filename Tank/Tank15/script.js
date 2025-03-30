let a = parseFloat(prompt("nhập số a :"))
let b = parseFloat(prompt("nhập số b :"))


function isSameSign(a, b) {
    // Kiểm tra nếu cả hai số đều dương hoặc cả hai số đều âm
    return (a >= 0 && b >= 0) || (a < 0 && b < 0);
}

// Test cases
console.log(isSameSign(a,b)); // true
