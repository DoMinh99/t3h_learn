//bài 1
// Khai báo 1 function nhận vào chuỗi slogan.
//  Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.

function printSlogan(slogan) {
    let counter = 1;

    setInterval(() => {
        console.log(`${counter}: ${slogan}`);
        counter++;
    }, 5000); // 5000ms tương đương với 5 giây
}

// Sử dụng function
printSlogan("Hãy sống trọn vẹn mỗi ngày!");

//bài 2
// Hãy sử dụng phương thức map để biến đổi 1 mảng texts bao gồm các chuỗi thành 1 mảng textsLength 
// có các phần tử là chiều dài tương ứng của từng chuỗi trong mảng texts.

const texts = ["hello", "world", "hongminh", "hocmai"];

// Sử dụng map để tạo ra mảng textsLength chứa chiều dài của từng chuỗi
const textsLength = texts.map(text => text.length);

console.log(textsLength); // Output: [5, 5, 10, 6]


