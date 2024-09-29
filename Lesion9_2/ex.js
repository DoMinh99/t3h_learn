//khai báo và khởi tạo mảng

// const arr = [];
// const arr2 = [1,2,3,4,5,6,];

// console.log(arr2);

//truy xuất và thay đổi giá trị 
//truy xuất
const fruits = ['apple', 'banana', 'sung'];
console.log(fruits);

console.log(fruits[0]);

//thay đổi giá trị
fruits[0] = 'táo tàu';
console.log(fruits);

//duyệt mảng
for (let index = 0; index <fruits.length; index++){
    console.log(fruits[index]);
}

console.log("duyệt mảng theo vòng lặp for of");
for(let fruit of fruits){
    console.log(fruit);
}