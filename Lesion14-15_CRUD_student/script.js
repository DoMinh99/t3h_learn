const listStudent = [
	{
		id: 1,
		name: 'Trần Văn A',
		birthday: '1/1/1998',
		gender: 'boy',
		math_score: 9,
		english_score: 5,
		literature_score: 7,
	},
	{
		id: 2,
		name: 'Lung Thị Linh',
		birthday: '05/09/1995',
		gender: 'girl',
		math_score: 10,
		english_score: 10,
		literature_score: 5,
	},
];

// Các biến dom
const $tbody = document.getElementById('tbody');
// input
const $id = document.getElementById('id');
const $name = document.getElementById('name');
const $birthday = document.getElementById('birthday');
const $gender = document.getElementById('gender');
const $mathScore = document.getElementById('math_score');
const $englishScore = document.getElementById('english_score');
const $literatureScore = document.getElementById('literature_score');

const $keyword = document.getElementById('keyword');

const $sort = document.getElementById('sort');
// button
const $btnCreateStudent = document.getElementById('create_student');
const $btnSearch = document.getElementById('search');

// Bước 1: Tạo ra 1 hàm renderInfoStudent
function renderInfoStudent(data) {
	if (data === undefined) {
		data = listStudent;
	}
	// Bước 2: Tạo ra 1 chuỗi rỗng đại diện cho các câu lệnh html in lên màn hình
	let htmlStudent = '';
	// Bước 3: Duyệt mảng listStudent
	for (let i = 0; i < data.length; i++) {
		// 	=> Lấy ra thông tin từng học sinh
		const studentCurrent = data[i];
		console.log(studentCurrent.name);
		// 	=> Tạo ra đoạn html tương ứng để hiển thị thông tin học sinh đó
		htmlStudent += `
                        <tr>
							<th scope="row">${studentCurrent.id}</th>
							<td>${studentCurrent.name}</td>
							<td>${studentCurrent.birthday}</td>
							<td>${studentCurrent.gender === 'boy' ? 'Nam' : 'Nữ'}</td>
							<td>${studentCurrent.math_score}</td>
							<td>${studentCurrent.english_score}</td>
							<td>${studentCurrent.literature_score}</td>
							<td>
								<button class="btn btn-success" style="margin-right: 4px">
									Cập nhật
								</button>
								<button onclick="deleteStudent(${
									studentCurrent.id
								})" class="btn btn-danger" style="margin-left: 4px">
									Xóa
								</button>
							</td>
						</tr>
        `;
	}

	// Bước 4: Selector đến thẻ tbody và thay thế toàn bộ nội dung trong thẻ là đoạn html vừa được tạo ra
	$tbody.innerHTML = htmlStudent;
}

function resetInputs() {
	$id.value = '';
	$name.value = '';
	$birthday.value = '';
	$gender.value = 'default';
	$mathScore.value = '';
	$englishScore.value = '';
	$literatureScore.value = '';
}

//C => Create => Tạo mới thông tin học sinh
// Bước 1: Tạo hàm createStudent
function createStudent() {
	// Bước 2: Lấy các thông tin người dùng vừa nhập
	const id = $id.value;
	const name = $name.value;
	const birthday = $birthday.value;
	const gender = $gender.value;
	const mathScore = $mathScore.value;
	const englishScore = $englishScore.value;
	const literatureScore = $literatureScore.value;
	// Bước 3: Tạo 1 đối tượng học sinh mới
	const newStudent = {
		id: id,
		name: name,
		birthday: birthday,
		gender: gender,
		math_score: mathScore,
		english_score: englishScore,
		literature_score: literatureScore,
	};
	// Bước 4: Thêm đối tượng học sinh mới vừa tạo vào danh sách
	listStudent.push(newStudent);
	// Bước 5: Reset các input vừa nhập dữ liệu
	resetInputs();
	// Bước 6: Gọi lại hàm renderInfoStudent để in ra giao diện theo dữ liệu mới nhất
	renderInfoStudent();
}
// Bước 7: Gán hàm createStudent cho sự kiện onclick button "Tạo mới học sinh"
$btnCreateStudent.onclick = createStudent;

//D => Delete => Xóa học sinh
// Bước 1: Tạo hàm deleteStudent
function deleteStudent(id) {
	let index = -1;
	for (let i = 0; i < listStudent.length; i++) {
		if (listStudent[i].id == id) {
			index = i;
		}
	}
	// Bước 2: Gán function deleteStudent cho button tương ứng và truyền index của học sinh muốn xóa
	// Bước 3: Dùng splice để xóa học sinh ra khỏi danh sách
	listStudent.splice(index, 1);
	// Bước 4: Gọi lại hàm renderInfoStudent để in ra giao diện theo dữ liệu mới nhất
	renderInfoStudent();
}

//S => Search => Tìm kiếm học sinh
// Bước 1: Tạo function searchStudent
function searchStudent() {
	// Bước 2: Lấy giá trị keyword người dùng vừa nhập
	const keyword = $keyword.value;
	// Bước 3: Sử dụng vòng lặp for để tìm kiếm
	const result = [];
	for (let student of listStudent) {
		// 		=> Tên => sử dụng includes để tìm kiếm xem tên học sinh có chứa keyword không
		// 		=> Id => sử dụng === để tìm kiếm xem id của học sinh có bằng giá trị người dùng nhập không
		if (
			student.name.toLowerCase().includes(keyword.toLowerCase()) ||
			student.id == keyword
		) {
			result.push(student);
		}
	}
	console.log(result);
	// Bước 4: Gọi lại hàm renderInfoStudent và truyền giá trị của biến result vào
	renderInfoStudent(result);
}
// Bước 5: Gán function searchStudent
// Cách 1: Gán function searchStudent cho button "Tìm kiếm"
$btnSearch.onclick = searchStudent;
// Cách 2: Gán function searchStudent cho input keyword
// $keyword.oninput = searchStudent;

// Sắp xếp theo điểm toán
function sortMathScore() {
	const sort = $sort.value;
	listStudent.sort((a, b) => {
		if (sort === 'math_asc') {
			return a.math_score - b.math_score;
		} else {
			return b.math_score - a.math_score;
		}
	});

	renderInfoStudent();
}

$sort.onchange = sortMathScore;

renderInfoStudent();
