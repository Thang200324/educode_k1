function taxiBill(km) {
    if (typeof km !== "number" || km < 0) {
        console.log("Số km không hợp lệ");
        return;
    }

    let cost;
    if (km <= 1) {
        cost = 10000;
    } else if (km <= 10) {
        cost = 10000 + (km - 1) * 8000;
    } else {
        cost = 10000 + 9 * 8000 + (km - 10) * 6000;
    }

    console.log(`Số tiền cần trả: ${cost}đ`);
}

// Test:
taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
taxiBill(1); // Output: Số tiền cần trả: 10000đ
taxiBill(10); // Output: Số tiền cần trả: 82000đ
taxiBill(-5); // Output: Số km không hợp lệ
taxiBill("abc"); // Output: Số km không hợp lệ