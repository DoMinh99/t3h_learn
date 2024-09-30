// Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. 
let arr = [2,4,6,8];
// -In ra phần tử có chỉ số 0 và 3 trong mảng. 
console.log(arr[0], arr[3]);
// -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
console.log(arr[1] + arr[2]);
// -Thực hiện hoán đổi giá trị của chần tử có chỉ số 1 và 3.
let templ = '';
templ =  arr[1];
arr[1] = arr[3];
arr[3] = templ;
console.log(arr);