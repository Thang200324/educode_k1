
let n = parseFloat(prompt("nhập số ký tự để in: "))
let changcter = prompt("nhập ký tự in: ")


function printInso() {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n - i - 1; j++) { 
            line += " ";
        }
        for (let k = 0; k < 2 * i + 1; k++) { 
            line += changcter;
        }
        console.log(line);
    }
}
printInso(n, changcter);
