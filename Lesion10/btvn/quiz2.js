// bài 1
// Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.


function hehe(name){
    console.log("hello world, " + name);
}

hehe("hồng minh");

//bài 2
// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .

function pheptinh(a,b){
    console.log( (a + b)**2);
}

pheptinh(3,4);


// bài 3
// 3. Khai báo 1 function để nhập vào a từ bàn phím, 
// tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.

    let input;

    do {
        input = prompt("Vui lòng nhập một số lớn hơn 0:");
    } while (input < 0);
    
    console.log("Cảm ơn bạn! Số bạn đã nhập là: " + input);







