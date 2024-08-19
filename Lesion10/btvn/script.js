const obj = {}; // tạo object rỗng
const student = {
    name : "đỗ hồng minh",
    gender : "boy", 
    Score : 9,
};
console.log(student);


const aviribile = "name";
// truy xuất dữ liệu đến key là aviribile 
// cách 1
console.log(student.name);
//cách 2 truy xuất key đang là giá trị của biến avariable trong object student 
console.log(student[aviribile]);
console.log(student["1"]);

//phương thức SET , chưa có thì thêm mới, có rồi thì update

student.level = "giỏi";
console.log(student);
student["level"] = "rất giỏi";
console.log(student);

// xoá một key 
delete student.level;
console.log(student);

//duyệt object
for(let key in student){
    console.log("key" , key);
    console.log(student[key]);
}

console.log(Object.entries(student));

//tra laij cacs key trong phaanf tuwr duowis danjg cacs phaanf tuwr trong mangr
console.log(Object.keys(student));
console.log(Object.values(student));
// kiểm tra key cso trong đói tượng không, kết quả trả về tru hoặc fale
console.log(student.hasOwnProperty('level'));

//định nghĩa hàm 
function cal(a, b){
    let number = (a+b)**2;
    return number;
}

// gọi hàm và truyền giá trị vào các tham số
console.log(cal(3,4));
console.log(cal(4, 6));
console.log(cal(100, 9));

//1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.

function greet(name) {
    console.log("Hello word, " + name);
    // return name;
}
greet("Minh"); // Output: Hello word Minh


// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0.
// Đầu ra là giá trị số vừa nhập.
// function inputNumber() {
// 	let a;
// 	do {
// 		a = prompt('Nhập a');
// 		a = Number(a);
// 	} while (a <= 0);

// 	return a;
// }
// const number = inputNumber();
// console.log(number);

// 2. Khai báo 1 function với đầu vào là 3 số a, b, c.
// Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true.
// Ngược lại, đầu ra là false.

function checkTriangle(a, b, c) {
	if (a + b > c && a + c > b && b + c > a) {
		return true;
	}

	return false;
}

console.log(checkTriangle(8, 12, 5));
