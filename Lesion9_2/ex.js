//khai báo và khởi tạo mảng

// const arr = [];
// const arr2 = [1,2,3,4,5,6,];

// console.log(arr2);

//truy xuất và thay đổi giá trị 
//truy xuất
// const fruits = ['apple', 'banana', 'sung'];
// console.log(fruits);

// console.log(fruits[0]);

// //thay đổi giá trị
// fruits[0] = 'táo tàu';
// console.log(fruits);

// //duyệt mảng
// for (let index = 0; index <fruits.length; index++){
//     console.log(fruits[index]);
// }

// console.log("duyệt mảng theo vòng lặp for of");
// for(let fruit of fruits){
//     console.log(fruit);
// }

// khai báo 1 mảng có 4 phần tử khác nhau
const arr4 = ['một','hai','ba','bốn'];
// - in ra phần tử có chỉ số 0 và 3
console.log(arr4[0],arr4[3]);
// - thực hiện cộng phần tử 1 và 2
let sum5 = arr4[1] + arr4[2];
console.log(sum);

// -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
let temp = arr4[1];
arr4[1] = arr4[3];
arr4[3] = temp;
console.log(arr4);


// BT2: Khai báo 1 mảng gồm các 5 số bất kỳ. 
const numbers2 = [5,10,15,20,25];
// -Hãy in ra các số chẵn trong mảng đó. 
for(let number of numbers2){
    if(number % 2 === 0){
        console.log(number);
    }
}
// -Hãy tính tổng các phần tử trong mảng. 
let sum2 = 0;
for(let number of numbers2){
    sum2 = sum2+number;
}
// -Hãy tìm phần tử nhỏ nhất trong mảng
let min3 = numbers2[0];
for(let number of numbers2){
    if(number < min3){
        min3 = number;
    }
}
console.log(min3);



const numbers = [10,20,30,40];
console.log(numbers);
// numbers.push(50,60,70);
// console.log(numbers);
// numbers.unshift(-20, -10, 0);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// Dùng splice để xóa phần tử
// numbers.splice(2, 1);
// console.log(numbers);
// Dùng splice để thêm phần tử
// numbers.splice(2, 0, 25,26,27,28,29);
// console.log(numbers);

// Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
const numbers3 = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
let min = numbers3[0], max = numbers3[0];
// Tính tổng các phần tử trong mảng.
let sum = 0;
for(let number of numbers3){
    if(number < min){
        min = number;
    }
    if(number > max){
        max = number;
    }
    sum +=number;
}
console.log('min: ', min);
console.log('max: ', max);
console.log('sum: ', sum);
// Tính trung bình cộng các phần tử trong mảng.
const avg = sum / numbers3.length;
console.log('avg: ', avg);
