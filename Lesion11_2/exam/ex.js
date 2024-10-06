// tìm kiếm phần tử theo ID document.getbyelemanetBy I
const  $idHeading = document.getElementById('heading');
console.log($idHeading);

//tìm kiếm các phần tử có phần tử là tag name
console.log(document.getElementsByTagName('h1'));

//tìm kiếm các phần tử dựa trên class
console.log(document.getElementsByClassName('heading'));

//trả về phần tuewr đầu tiên thoả mãn điều kiện 
console.log(document.querySelector('h1#heading'));

//trả về các phần tử thoả mãn điều kiện
console.log(document.querySelectorAll('div'));

// inerHTMl thay đổi toàn bộ nội dung trong html đó 
const $h1 = document.getElementById('heading');
// .inerhtml
$h1.innerHTML = "thẻ H1 đã được chỉnh sửa";

//innerTexxt thay đổi được nội dung htmk thôi
$h1.innerText = 'thay đổi nội dung h1';


const $a = document.getElementById('tagA');
$a.href = "google.com";
$a.setAttribute('data-id', 200)

// lấy giá trị actribule
console.log($a.href);
console.log($a.getAttribute('data-id'));

//xoá thuộc tính
$a.removeAttribute('data-id');


// thao tác với style
$a.style.color = "red";
$a.style.fontSize = "32px";

// tạo ra 1 thẻ có h2 có id = "sub -title" nội dung "xin chào thế giưới"
const $h2 = document.createAttribute('h2'); //tạo thẻ h2 tham chiếu đến viến $h2
$h2.innerText = "xin chào thế giới"; // thay đổi nội dung của thẻ h2 vìaw tạo
$h2.id = "sub - title"; //thêm id cho thẻ h2

document.body.appendChild($h2); // thêm thẻ h2 vào vị trí cuối trong thẻ body
