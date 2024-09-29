// Trò chơi đoán số: 
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. 
// Người dùng nhập vào 1 số answer. 
// Nếu answer bằng correct → in ra “Đoán đúng”. 
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer. 
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

let randomNumber = Math.random();
randomNumber = randomNumber * 10 * 2 + 1;
randomNumber = Math.floor(randomNumber);

for(let i = 1; i<=5; i++){
    let answer = Number(prompt('Nhập số của bạn: '));
    if(answer === randomNumber){
        alert('Đoán đúng');
        break;
    } else {
        alert('Đoán sai');
    }

    if(i === 5){
        alert('Bạn đã thua cuộc');
    }
}