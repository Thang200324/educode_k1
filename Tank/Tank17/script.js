let salary = parseFloat(prompt("nhập số thu nhập của bạn :"))

function taxSalary(salary) {
    if (typeof salary !== 'number' || salary < 0) {
        document.body.innerHTML += `<p>Thu nhập không hợp lệ: ${salary}</p>`;
        return;
    }

    let tax = 0;

    if (salary <= 10000000) {
        tax = 0;
    } else if (salary <= 20000000) {
        tax = (salary - 10000000) * 0.02;
    } else if (salary <= 50000000) {
        tax = (10000000 * 0.02) + (salary - 20000000) * 0.04;
    } else {
        tax = (10000000 * 0.02) + (30000000 * 0.04) + (salary - 50000000) * 0.06;
    }

    document.body.innerHTML += `<p>Thu nhập hợp lệ: ${salary.toLocaleString('vi-VN')}, Thuế: ${tax.toLocaleString('vi-VN')}</p>`;
}

// Nhập số từ người dùng

taxSalary(salary);
