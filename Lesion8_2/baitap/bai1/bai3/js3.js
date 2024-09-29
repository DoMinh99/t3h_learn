//Tính tổng các số chẵn trong đoạn [-30, 50].
// ý tưởng: lặp các số chẵn từ  -30 tới 50
// sau đó tính tổng các số chẵn

// Khởi tạo biến sum để lưu tổng.
// Sử dụng vòng lặp for để duyệt qua tất cả các số từ -30 đến 50.
// Kiểm tra nếu số đó là chẵn (i % 2 === 0).
// Nếu số đó chẵn, thêm nó vào sum.
// Cuối cùng, in ra tổng các số chẵn.

let sum = 0;
for(i = -30; i <= 50; i++)
{
    if(i % 2 ==0){
        sum += i;
    }
    
}
console.log(sum);