// type Student = {
//     name: string;
//     age: number
// }

// const student1: Student = { name: 'Student1', age: 18 };
// const student2: Student = { name: 'Student2', age: 20 };

// const students: Student[] = []

// console.log(student1);
// console.log(student2);
// console.log(students)

// let tuple1: [string, number, string] = ['Nguyễn Văn A', 19, 'boy'];
// console.log(tuple1);
// let tuple2: [string, number, string?] = ['Trần Thị B', 19, 'girl'];
// let tuple3: [string, number, string?] = ['Lê Văn C', 19];
// console.log(tuple2);
// console.log(tuple3)

// enum Color{
//     RED = 'red',
//     GREEN = 'green',
//     BLUE = 'blue',
// }
// console.log(Color.BLUE)

// enum Days{
//     Monday = 2,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday,
// }
// console.log(Days.Friday);

// let str: unknown = "Hello typescript";
// const number: number = str as number;

// console.log(number);
// console.log(typeof number);

// Bài 1: Quản lý danh sách sinh viên
// Tạo một chương trình TypeScript để quản lý danh sách sinh viên với các yêu cầu sau:
// 1. Định nghĩa một type Student với các thuộc tính:
// 	- id: number (mã sinh viên)
// 	- name: string (tên sinh viên)
// 	- age: number (tuổi)
// 	- grades: array of numbers (điểm các môn)
// 2. Tạo một mảng students kiểu Student[] và thêm một số sinh viên mẫu.
// 3. Viết hàm getAverageGrade nhận vào mã sinh viên và tính điểm trung bình cho sinh viên đó.
// 4. Viết hàm findStudentByName nhận vào tên và tìm sinh viên có tên đó trong mảng.
// 5. Viết hàm addStudent để thêm sinh viên mới vào danh sách.
// 6. Viết hàm removeStudentById để xoá sinh viên khỏi danh sách theo mã sinh viên.

// Bài 2: Quản lý sản phẩm trong cửa hàng
// Tạo một ứng dụng TypeScript để quản lý sản phẩm với các yêu cầu sau:
// 1. Định nghĩa một type Product với các thuộc tính:
// 	- id: number (mã sản phẩm)
// 	- name: string (tên sản phẩm)
// 	- price: number (giá sản phẩm)
// 	- stock: number (số lượng trong kho)
// 2. Tạo một mảng products kiểu Product[] chứa một số sản phẩm mẫu.
// 3. Viết hàm addProduct để thêm một sản phẩm mới vào danh sách.
// 4. Viết hàm findProductById để tìm sản phẩm theo mã sản phẩm.
// 5. Viết hàm updateStock nhận vào mã sản phẩm và số lượng cần thêm/xoá và cập nhật lại stock của sản phẩm.
// 6. Viết hàm calculateTotalInventoryValue để tính tổng giá trị tồn kho của tất cả sản phẩm.

// Bài 3: Quản lý sách trong thư viện
// 1. Định nghĩa một type Book với các thuộc tính:
// 	- id: number (mã sách)
// 	- title: string (tên sách)
// 	- author: string (tác giả)
// 	- isAvailable: boolean (tình trạng sách: có sẵn hay không)
// 2. Tạo một mảng library kiểu Book[] và thêm một số sách vào thư viện.
// 3. Viết hàm checkOutBook nhận vào mã sách và đánh dấu isAvailable thành false nếu sách có sẵn.
// 4. Viết hàm returnBook để đánh dấu sách trở về trạng thái có sẵn (isAvailable là true).
// 5. Viết hàm findBooksByAuthor để tìm tất cả các sách của một tác giả cụ thể.
// 6. Viết hàm listAvailableBooks để trả về danh sách các sách hiện có sẵn trong thư viện.

// Bài 4: Phân tích dữ liệu điểm thi của học sinh
// 1. Định nghĩa một type ScoreData với các thuộc tính:
// 	- studentId: number (mã sinh viên)
// 	- subject: string (tên môn học)
// 	- score: number (điểm)
// type ScoreData = {
// 	studentId: number;
// 	subject: string;
// 	score: number;
// };

// 2. Tạo một mảng scores kiểu ScoreData[] để chứa dữ liệu điểm của các học sinh.
// const scores: ScoreData[] = [
// 	{
// 		studentId: 1,
// 		subject: 'Math',
// 		score: 8,
// 	},
// 	{
// 		studentId: 2,
// 		subject: 'Math',
// 		score: 7,
// 	},
// 	{
// 		studentId: 3,
// 		subject: 'Math',
// 		score: 8,
// 	},
// 	{
// 		studentId: 1,
// 		subject: 'English',
// 		score: 7,
// 	},
// 	{
// 		studentId: 2,
// 		subject: 'English',
// 		score: 8.25,
// 	},
// 	{
// 		studentId: 3,
// 		subject: 'English',
// 		score: 8.75,
// 	},
// ];

// 3. Viết hàm calculateAverageScoreBySubject nhận vào tên môn học và tính điểm trung bình của môn đó.
// const calculateAverageScoreBySubject = (subject: string): number => {
//     let sum = 0;
//     let count = 0;
//     for(let data of scores){
//         if(data.subject === subject){
//             sum = sum + data.score;
//             count = count + 1;
//         }
//     }
//     const averageScore: number = sum / count;

//     return Number(averageScore.toFixed(2));
// }
// console.log(calculateAverageScoreBySubject('Math'))

// 4. Viết hàm getTopScorerBySubject nhận vào tên môn học và trả về học sinh có điểm cao nhất trong môn đó.
// const getTopScorerBySubject = (subject: string) => {
//     const studentBySubject = [];
//     for(let data of scores){
//         if(data.subject === subject){
//             studentBySubject.push(data)
//         }
//     }

//     let student = studentBySubject[0];
//     for(let data of studentBySubject){
//         if(data.score > student.score){
//             student = data;
//         }
//     }

//     return student
// }
// console.log(getTopScorerBySubject('Literature'))

// 5. Viết hàm getStudentScores nhận vào mã sinh viên và trả về toàn bộ điểm của sinh viên đó theo từng môn học.
// const getStudentScores = (studentId: number) => {
//     const result = [];
//     for(let data of scores){
//         if(data.studentId === studentId){
//             result.push(data);
//         }
//     }

//     return result;
// }

// console.log(getStudentScores(2))

// Union types
// let result: number | string | boolean;
// result = 10
// result = 'Hello'
// result = false;

// Intersection types: kiểu liên hợp
// type Subject = {
//     title: string,
//     description: string
// }

// const subject: Subject = {
//     title: 'Javascript',
//     description: 'Mô tả môn học javascript'
// }

// type Address = {
//     city: string,
// }

// const address: Address = {
//     city: 'Hà Nội'
// }

// type Student = Subject & Address;
// {
//     title: string,
//     description: string,
//     city: string,
// }
// const student: Student = {
//     city: 'Đà Nẵng',
//     title: 'NodeJS',
//     description: 'Mô tả môn học NodeJS'
// }

// let fullName: 'Nguyễn Văn A' | 'Trần Văn C';
// fullName = 'Nguyễn Văn A';
// fullName = 'Trần Văn C';
// fullName = 'Lê Văn B';
// console.log(fullName)

// let age: 10 | 18;

// let someValue: unknown = 'Hello world';
// let strLength: number = (someValue as string).length;

// type Student = {
//     id: number;
//     name: string;
//     address: string;
//     score: number;
// }

// interface Address {
//     city: string,
//     country: string
// }

// interface Student extends Address {
//     readonly id: number;
//     name: string;
//     address: string;
//     score?: number;
// }

// let student: Student = {
//     id: 1,
//     name: 'Lê Văn C',
//     address: 'Việt Nam',
//     city: 'Hà Nội',
//     country: 'Việt Nam',
// }

// console.log(student);

// Định nghĩa Class
// interface IClassroom {
//     classroom: string;
//     totalStudent: number;
//     printTotalStudent: () => void;
// }

// class Classroom implements IClassroom {
// 	classroom: string;
// 	totalStudent: number;
// 	constructor(classroom: string, totalStudent: number) {
// 		this.classroom = classroom;
// 		this.totalStudent = totalStudent;
// 	}
// 	printTotalStudent() {
// 		console.log('Số lượng học sinh trong lớp là: ', this.totalStudent);
// 	}
// }

// class Student extends Classroom {
//     id: number;
// 	private name: string;
// 	private age: number;
// 	private gender: string;
// 	constructor(
// 		classroom: string,
// 		totalStudent: number,
// 		id: number,
// 		name: string,
// 		age: number,
// 		gender: string
// 	) {
// 		super(classroom, totalStudent);
// 		this.id = id;
// 		this.name = name;
// 		this.age = age;
// 		this.gender = gender;
// 	}
// 	greeting() {
// 		console.log('Xin chào bạn');
// 	}

//     getName(){
//         console.log(this.name)
//     }

//     setName(newName: string){
//         this.name = newName
//     }
// }

// const student1 = new Student('7E', 39, 1, 'Trần Văn A',
//     18,
//     'boy'
// );
// console.log(student1.id);
// student1.printTotalStudent();

// interface CustomType<T, U>{
//     first: T,
//     second: U,
// }

// let value1: CustomType<string, number> = {
//     first: 'Hello',
//     second: 10
// }

// let value2: CustomType<number, number> = {
//     first: 10,
//     second: 10,
// }

// let value3: CustomType<string, string> = {
//     first: 'Hello 1',
//     second: 'Hello 2'
// }

// interface User{
//     id: number;
//     name: string;
//     age: number;
// }

// const user1: User = {
//     id: 1,
//     name: 'user 1',
//     age: 18
// }

// // const user2: User = {}

// const user3: Partial<User>  = {};
// // Partial<User> <=> { id?: number; name?: string; age?: number;}

// const user4: Readonly<User> = {
//     id: 4,
//     name: 'user 4',
//     age: 20
// }
// // Readonly<User> <=> {readonly id: number; readonly name: string; readonly age: number;}

// const user5: Pick<User, 'id' | 'name'> = {
//     id: 5,
//     name: 'user 5',
// }
// // Pick<User, 'id' | 'name'> <=> { id: number; name: string}

// const user6: Omit<User, 'id' | 'name'> = {
//     age: 20,
// }
// // Omit<User, 'id' | 'name'> <=> {age: number;}

// const user7: Record<string, string | number> = {
//     name: 'Lê Văn C',
//     age: 18
// }

// Bài tập 1: Quản lý tài khoản ngân hàng
// * Mô tả: Tạo một hệ thống quản lý tài khoản ngân hàng với các yêu cầu sau:
// 1. Class BankAccount:
// 	- Thuộc tính:
// 		+ accountNumber: số tài khoản (kiểu số).
// 		+ accountHolder: tên chủ tài khoản (kiểu chuỗi).
// 		+ balance: số dư tài khoản (kiểu số, mặc định là 0).
class BankAccount {
	accountNumber: number;
	accountHolder: string;
	balance: number;
	constructor(
		accountNumber: number,
		accountHolder: string,
		balance: number = 0
	) {
		this.accountNumber = accountNumber;
		this.accountHolder = accountHolder;
		this.balance = balance;
	}
}

// 2. Interface IBankAccountManager
// 	- Phương thức:
// 		+ createAccount(account: BankAccount): void: Tạo một tài khoản mới và thêm vào danh sách tài khoản.
// 		+ closeAccount(accountNumber: number): void: Đóng một tài khoản bằng cách xóa tài khoản khỏi danh sách.
// 		+ getAccountByNumber(accountNumber: number): BankAccount | undefined: Lấy thông tin tài khoản dựa trên số tài khoản.
// 		+ listAllAccounts(): BankAccount[]: Liệt kê tất cả các tài khoản hiện có.
// 		+ deposit(accountNumber: number, amount: number): void: Nạp tiền vào tài khoản dựa trên số tài khoản và số tiền.
// 		+ withdraw(accountNumber: number, amount: number): void: Rút tiền từ tài khoản dựa trên số tài khoản và số tiền.
interface IBankAccountManager {
	createAccount(account: BankAccount): void;
	closeAccount(accountNumber: number): void;
	getAccountByNumber(accountNumber: number): BankAccount | undefined;
	listAllAccounts(): BankAccount[];
	deposit(accountNumber: number, amount: number): void;
	withdraw(accountNumber: number, amount: number): void;
	getAccountHolderAndBalance(
		accountNumber: number
	): Pick<BankAccount, 'accountHolder' | 'balance'> | undefined;
	getAccountWithoutBalance(
		accountNumber: number
	): Omit<BankAccount, 'balance'> | undefined;
	updateAccount(accountNumber: number, updatedInfo: Partial<BankAccount>): void;
}

// 3. Class BankAccountManager
// 	- Implement interface IBankAccountManager để quản lý danh sách tài khoản ngân hàng.
// 	- Các phương thức phải thực hiện đầy đủ các chức năng như mô tả trong IBankAccountManager.
class BankAccountManager implements IBankAccountManager {
	private accounts: BankAccount[] = [];

	createAccount(account: BankAccount): void {
		this.accounts.push(account);
	}

	closeAccount(accountNumber: number): void {
		this.accounts = this.accounts.filter(
			(account: BankAccount) => account.accountNumber !== accountNumber
		);
	}

	getAccountByNumber(accountNumber: number): BankAccount | undefined {
		return this.accounts.find(
			(account: BankAccount) => account.accountNumber === accountNumber
		);
	}

	listAllAccounts(): BankAccount[] {
		return this.accounts;
	}

	deposit(accountNumber: number, amount: number): void {
		{
			const account = this.getAccountByNumber(accountNumber);
			if (account) {
				account.balance = account.balance + amount;
			} else {
				throw new Error(`Account with number ${accountNumber} not found`);
			}
		}
	}

	withdraw(accountNumber: number, amount: number): void {
		const account = this.getAccountByNumber(accountNumber);
		if (account) {
			if (account.balance >= amount) {
				account.balance -= amount;
			} else {
				throw new Error('Insufficient balance');
			}
		} else {
			throw new Error(`Account with number ${accountNumber} not found`);
		}
	}

	// 4. Yêu cầu mở rộng
	// 	- Sử dụng Utility Types
	// 		+ Tạo phương thức getAccountHolderAndBalance(accountNumber: number): Pick<BankAccount, 'accountHolder' | 'balance'> | undefined để chỉ lấy tên chủ tài khoản và số dư của tài khoản.
	// 		+ Tạo phương thức getAccountWithoutBalance(accountNumber: number): Omit<BankAccount, 'balance'> | undefined để lấy thông tin tài khoản mà không bao gồm số dư.
	// 	- Cập nhật thông tin tài khoản
	// 		+ Tạo phương thức updateAccount(accountNumber: number, updatedInfo: Partial<BankAccount>): void để cập nhật thông tin tài khoản, cho phép cập nhật một phần thông tin.
	getAccountHolderAndBalance(
		accountNumber: number
	): Pick<BankAccount, 'accountHolder' | 'balance'> | undefined {
		const account = this.getAccountByNumber(accountNumber);
		if (account) {
			return {
				accountHolder: account.accountHolder,
				balance: account.balance,
			};
		}
		return undefined;
	}

	getAccountWithoutBalance(
		accountNumber: number
	): Omit<BankAccount, 'balance'> | undefined {
		const account = this.getAccountByNumber(accountNumber);
		if (account) {
			return {
				accountNumber: account.accountNumber,
				accountHolder: account.accountHolder,
			};
		} else {
			return undefined;
		}
	}

	updateAccount(
		accountNumber: number,
		updatedInfo: Partial<BankAccount>
	): void {
		const account = this.getAccountByNumber(accountNumber);

		if (account) {
			const index = this.accounts.findIndex(
				(acc) => acc.accountNumber === accountNumber
			);
			this.accounts[index] = { ...account, ...updatedInfo };
		} else {
			throw new Error(`Account with number ${accountNumber} not found`);
		}
	}
}

// * Lưu ý:
// 	- Đảm bảo các phương thức nạp tiền và rút tiền kiểm tra số dư tài khoản để tránh tình trạng rút quá số dư.
// 	- Viết các phương thức xử lý lỗi khi tài khoản không tồn tại hoặc số tiền rút lớn hơn số dư.
// 	- Các phương thức và thuộc tính cần được định nghĩa rõ ràng, có chú thích và giải thích các tham số, giá trị trả về.
// * Ví dụ sử dụng:
// 	- Tạo một đối tượng BankAccountManager.
const manager = new BankAccountManager();
console.log(manager);
// 	- Tạo một vài tài khoản và thêm chúng vào BankAccountManager.
const account1 = new BankAccount(1, 'Lê Văn A', 500);
const account2 = new BankAccount(2, 'Lung Thị Linh', 300);
manager.createAccount(account1);
manager.createAccount(account2);
console.log(manager);
// 	- Thực hiện nạp tiền, rút tiền, cập nhật thông tin tài khoản.
manager.deposit(1, 500);
manager.deposit(2, 200);
console.log(manager);

manager.withdraw(1, 700);
// manager.withdraw(2, 600);
console.log(manager);
// 	- Liệt kê tất cả các tài khoản và hiển thị thông tin chi tiết.
const allAccounts = manager.listAllAccounts();
console.log(manager);
