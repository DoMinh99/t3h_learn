//Nhập vào số n. Tính giai thừa của số n.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Nhập vào số n
let n = prompt("Nhập vào số n:");
n = parseInt(n);

console.log(`Giai thừa của ${n} là: ${factorial(n)}`);
