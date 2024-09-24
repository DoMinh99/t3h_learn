// const score = 8.5;
// if (score >= 8.5) {
//     console.log('bạn đã đạt học sinh giỏi');
// }


// const score = 8;
// if(score >= 8.5){
//     console.log('bạn học sinh giỏi')
// }else{
//     console.log('bạn học sinh khá     ')  ;
// }

//phân loaoij học sinh dựa trên điểm
// nếu điểm > = 8.0 học giỏi
// nếu điểm >= 6.5 < 8 học khá
// Nếu điểm  < 6.5 và điểm >= 5.5 học trung bình
// nếu  < 5.0 học lực yếu

// const score = 7.0;
// if(score >= 8){
//     console.log('học giỏi')
// }else if ( 6.5 <= score && score < 8){
//     console.log('học khá')
// }else if( score >= 5.0 && score < 6.5){
//     console.log('học trung bình')
// }else{
//     console.log('học yếu')
// }

// bài 2: xác định giá trị được nhập

// let day = 9;
//     switch(day){
//         case 2: console.log('thứ hai'); break;
//         case 3: console.log('thứ ba'); break;
//         case 4: console.log('thứ tư');break;
//         case 5: console.log('thứ năm');break;
//         case 6: console.log('thứ sáu');break;
//         case 7: console.log('thứ bayr');break;
//         case 8: console.log('chủ nhật');break;
//         default: console.log('ngày không hợp lệ');break;
//     }


// sử dụng toán tử 3 ngôi 
// let message = age >= 18? 'người lớn' : age < 18 && >= 15 ? 'thanh niên' : 'trẻ en'


// for (let i = 1; i <= 5 ; i=i+1){
//     console.log(i);
// }

//in ra màn hình các số chẵn từ -10 - 50
// for (let i = -10; i<= 50; i++){
//     if(i % 2 === 0 ){
//         console.log(i);
//     }
// }

// tính tôneg các số từ  -10 - 50
// let sum = 0;
// for (let i = -10; i<= 50; i++){
//     if(i % 2 === 0 ){
//         sum = sum + i;
//     }
// }
// console.log(sum);

// nhập 1 trị từ bàn phím, nếu là số chẵn thì chương trình kết thúc
// let number;
// do {
//     number = prompt('nhập số kiểm tra');
//     number = Number(number);
// } while(number % 2 ===1);
// console.log(number);
// console.log(typeof number);


// tính giai thừa của số nhập từ bàn phím

let n = prompt('nhập n');
n = Number(n);
let gt = 1;
for(let i = 1; i <= n; i++){
    gt = gt * i;
}
console.log(gt);