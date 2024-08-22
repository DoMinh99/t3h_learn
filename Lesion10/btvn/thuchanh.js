//bài 1
// Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). 
// Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả 
// dưới dạng 1 mảng gồm các nghiệm của phương trình.

function solveQuadratic(a, b, c) {
    if (a === 0) {
        throw new Error("Hệ số a phải khác 0.");
    }

    const delta = b * b - 4 * a * c;
    let solutions = [];

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        solutions.push(x1, x2);
    } else if (delta === 0) {
        const x = -b / (2 * a);
        solutions.push(x);
    }

    return solutions;
}

// Ví dụ: Giải phương trình 2x^2 + 3x - 2 = 0
const solutions = solveQuadratic(2, 3, -2);
console.log(solutions); // Output: [0.5, -2]


//bài 3
// Khai báo 1 function với đầu vào là day, month, year. 
// Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.

