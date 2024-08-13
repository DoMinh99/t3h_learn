// let point = 9.0;
// if(point >=8.0){
//     console.log("đạt thành tích học sinh giỏi")
// }


let point = 7.0;
if(point >= 8.0){
    console.log('Học sinh giỏi');
}else if(point < 8.0 && point >= 6.5){
    console.log('Học sinh khá');
}else if(point >= 5.0 && point < 6.5){
    console.log('HỌc sinh trung bình');
}else{
    console.log('Học sinh trung bình');
}


// dùng swicth case

let number =19;

switch(number){
    case 2: 
    console.log('thứ hai');
    break;
    case 3: 
    console.log('thứ ba');
    break;
    case 4: 
    console.log('thứ tư');
    break;
    case 5: 
    console.log('thứ năm');
    break;
    case 6: 
    console.log('thứ sáu');
    break;
    case 7: 
    console.log('thứ bảy');
    break;
    case 8: 
    console.log('chủ nhật');
    break;
    default:
    console.log('thứ không hợp lệ ');
}