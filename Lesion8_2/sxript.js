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

const score = 7.0;
if(score >= 8){
    console.log('học giỏi')
}else if ( 6.5 <= score && score < 8){
    console.log('học khá')
}else if( score >= 5.0 && score < 6.5){
    console.log('học trung bình')
}else{
    console.log('học yếu')
}