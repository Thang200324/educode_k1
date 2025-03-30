

function printInso(n, changcter) {
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
printInso(5, "*");
