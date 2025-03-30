function taxSalary(salary) {
    if (typeof salary !== 'number' || salary < 0) {
        console.log("Thu nhập không hợp lệ");
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

    console.log(tax.toLocaleString('en-US', { style: 'currency', currency: 'VND' }));
}

// Test cases
taxSalary(10000000); // 0
taxSalary(15000000); // 200.000
taxSalary(30000000); // 1.200.000
taxSalary(100000000); // 17.200.000
taxSalary(-10000000); // Thu nhập không hợp lệ
taxSalary("abc"); // Thu nhập không hợp lệ