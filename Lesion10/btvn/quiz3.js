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
