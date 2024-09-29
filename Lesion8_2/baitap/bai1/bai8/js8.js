// Nhập vào số n. 
// Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// Bước 1: Nhập số n (prompt)
// Bước 2: Tạo biến đếm (count = 0)
// Bước 3: Tạo 1 vòng lặp, chạy từ 1 đến chính nó
// Bước 4: Trong vòng lặp sẽ xử lý, mỗi lần số n chia hết cho 1
// số nào đó, thì biến count tăng lên 1 đơn vị
// Bước 5: Kiểm tra, nếu count == 2 thì đó là số nguyên tố (vì 
// nó chỉ chia hết cho 1 và chính nó)
let n = prompt("Nhập n:"); // Người dùng nhập n
n = Number(n); // Chuyển đổi kiểu dữ liệu từ string => number
let count = 0; // biến đếm
for(let i = 1; i<=n; i++){
    if(n % i === 0){
        count = count + 1;
        // count++
    }
}
if(count === 2){
    console.log(n + " là số nguyên tố");
} else{
    console.log(n + " không phải là số nguyên tố");
}