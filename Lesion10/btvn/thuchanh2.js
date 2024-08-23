const storage = {
    name: 'Fake Storage',
    address: 'HN',
    owner: 'Dung Tien',
    items: [
        { id: 1, name: 'Product 1', category: 'Furniture', price: 20 },
        { id: 2, name: 'Product 2', category: 'Device', price: 110 },
        { id: 3, name: 'Product 3', category: 'Cloth', price: 2 },
    ]
};

function displayStorageInfo() {
    console.log(`Kho hàng: ${storage.name}, Địa chỉ: ${storage.address}, Người sở hữu: ${storage.owner}`);
    console.log("Các mặt hàng trong kho:");
    storage.items.forEach(item => {
        console.log(`Mã: ${item.id}, Tên: ${item.name}, Loại: ${item.category}, Giá: ${item.price}`);
    });
}

function updateStorageInfo() {
    storage.name = prompt("Nhập tên kho hàng mới:");
    storage.address = prompt("Nhập địa chỉ mới:");
    storage.owner = prompt("Nhập tên người sở hữu mới:");
    console.log("Thông tin kho hàng sau khi cập nhật:");
    displayStorageInfo();
}

function addItem() {
    let id;
    do {
        id = parseInt(prompt("Nhập mã mặt hàng:"));
    } while (storage.items.some(item => item.id === id));

    const name = prompt("Nhập tên mặt hàng:");
    const category = prompt("Nhập loại mặt hàng:");
    const price = parseFloat(prompt("Nhập giá cả:"));

    storage.items.push({ id, name, category, price });
    console.log("Các mặt hàng trong kho sau khi thêm:");
    displayStorageInfo();
}

function searchItem() {
    const keyword = prompt("Nhập từ khóa tìm kiếm:");
    const results = storage.items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));

    if (results.length === 0) {
        console.log("Không tìm thấy mặt hàng nào. Danh sách toàn bộ mặt hàng:");
        displayStorageInfo();
    } else {
        console.log("Các mặt hàng tìm thấy:");
        results.forEach(item => {
            console.log(`Mã: ${item.id}, Tên: ${item.name}, Loại: ${item.category}, Giá: ${item.price}`);
        });
    }
}

function deleteItem() {
    const id = parseInt(prompt("Nhập mã mặt hàng cần xóa:"));
    const index = storage.items.findIndex(item => item.id === id);

    if (index !== -1) {
        storage.items.splice(index, 1);
        console.log(`Mặt hàng với mã ${id} đã bị xóa.`);
        console.log("Các mặt hàng còn lại trong kho:");
        displayStorageInfo();
    } else {
        console.log("Không tìm thấy mặt hàng có mã này.");
    }
}

function start() {
    while (true) {
        const action = parseInt(prompt("Nhập action (1: Sửa kho, 2: Thêm mặt hàng, 3: Tìm kiếm mặt hàng, 4: Xóa mặt hàng, 0: Thoát):"));

        switch (action) {
            case 1:
                updateStorageInfo();
                break;
            case 2:
                addItem();
                break;
            case 3:
                searchItem();
                break;
            case 4:
                deleteItem();
                break;
            case 0:
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Action không hợp lệ. Vui lòng nhập lại.");
        }
    }
}

// Bắt đầu chương trình
start();
