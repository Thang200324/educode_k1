function findMaxNumber(a, b, c) {
    // Xử lý và in ra kết quả
    let big = a;
    if (b > big) {
        big = b;
    }
    if (c > big) {
        big = c;
    }
    console.log(big);
}

findMaxNumber(3, 5, 2); // 5