// Nhập vào 2 số m, n (m >= 2, n > =2). 
// Hãy in ra màn hình hình chữ nhật có chiều rộng là m và chiều cao là n. 
// VD: m = 4, n = 3

let m,n;

do{
    m = prompt("Nhập m (chiều rộng, m >= 2): ");
    m = Number(m);
} while(m < 2);

do{
    n = prompt("Nhập n (chiều cao, n >= 2): ");
    n = Number(n);
} while(n < 2);

for(let row = 1; row <= n; row++){
    let cols = '';
    for(let col = 1; col <= m; col++){
        cols += '* ';
    }
    console.log(cols);
}