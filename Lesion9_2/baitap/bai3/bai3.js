// Khai báo 1 mảng gồm các số bất kỳ. 
let arr = [2,6,3,9];
// -Hãy in ra các số chẵn trong mảng đó. 
for(let i = 0; i <arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
}
// -Hãy tính tổng các phần tử trong mảng. 
let sum = 0;
for(i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);
// -Hãy tìm phần tử nhỏ nhất trong mảng.

let min = arr[0]; // gán biến vào một mảng rỗng
for(i = 1; i < arr.length; i++){ //duyệt mảng
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(min);