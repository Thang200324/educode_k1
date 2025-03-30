function taxiBill() {
    let km = parseFloat(prompt("Nhập số km: "))

    if (isNaN(km) || km < 0) {
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

    document.body.innerHTML = `<p>Số tiền cần trả: ${cost}đ</p>`;
}


taxiBill();
