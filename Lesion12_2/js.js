let testPromise = new Promise(function(resolve, reject){
    // tác vjuj bất đồng bộ
    let number = 4;
    if(number >=5){
        resolve();
    } else{
        reject();
    }
});

testPromise
    .then(function(){
        console.log('chạy Thành công');
        console.log('ket quả', result)
    })
    .catch(function()
{
    console.log('chạy thất bại');
    console.log('lỗi', error);
});

console.log(1);
console.log(2);
try {
    const PI = 3.14;
    console.log(PI);
    PI = 10;
} catch(error){
    console.log(error);
}
console.log(3);
console.log(4);