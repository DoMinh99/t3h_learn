// const NUMBER_RANDOM = Math.floor(Math.random() * 10 * 2 + 1);
// let count = 5;
// let numberInput;
// for (let i = 1; i <= count; i++) {
//   numberInput = Number(prompt("Số bạn dự đoán là: "));
//   if (numberInput === NUMBER_RANDOM) {
//     alert("Đoán đúng");
//     break;
//   } else {
//     alert("Đoán sai");
//   }
// }








function findMin(arr) {
    let min = arr[0]; // Bước 1: Giả định phần tử đầu tiên là nhỏ nhất.
    for (let i = 1; i < arr.length; i++) { // Bước 2: Duyệt qua mảng
        if (arr[i] < min) { // Bước 3: So sánh từng phần tử với min
            min = arr[i]; // Cập nhật min nếu tìm thấy phần tử nhỏ hơn
        }
    }
    return min; // Bước 4: Trả về giá trị nhỏ nhất
}

const arr = [10, 4, -7, 9, 100, 3, -21, 0, 33];
console.log(findMin(arr)); // Output: 1

