function isSameSign(a, b) {
    // Kiểm tra nếu cả hai số đều dương hoặc cả hai số đều âm
    return (a >= 0 && b >= 0) || (a < 0 && b < 0);
}

// Test cases
console.log(isSameSign(10, 20)); // true
console.log(isSameSign(-10, -20)); // true
console.log(isSameSign(10, -20)); // false