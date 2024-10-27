
function parseArray(input) {
    // Loại bỏ khoảng trắng thừa và chuyển đổi các số thành số thực
    return input.split(',').map(item => {
        item = item.trim();
        return isNaN(item) ? item : Number(item);
    });
}

function uniqueElements(A1, A2) {
    const uniqueInA1 = A1.filter(item => !A2.includes(item));
    const uniqueInA2 = A2.filter(item => !A1.includes(item));
    return [...uniqueInA1, ...uniqueInA2];
}

function findUniqueElements() {
    const array1 = document.getElementById("array1").value;
    const array2 = document.getElementById("array2").value;

    const A1 = parseArray(array1);
    const A2 = parseArray(array2);

    const result = uniqueElements(A1, A2);
    document.getElementById("result").textContent = `Kết quả: [${result.join(', ')}]`;
}
