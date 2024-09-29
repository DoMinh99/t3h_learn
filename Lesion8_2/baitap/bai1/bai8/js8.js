let n = prompt("nhập n: "); //người dùng nhập số n
n =  Number(n); // chuyển đổi kiểu dữ liệu từ string sang number
let count = 0; //biến đếm
for(let i = 1; i<= n; i++){
    if(n % i == 0){
        count = count + 1;
    }
}
