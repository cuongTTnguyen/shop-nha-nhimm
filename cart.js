function renderGioHang() {
    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-list');
    const emptyMessage = document.getElementById('cart-empty-message');
    const summary = document.getElementById('cart-summary');

    if (gioHang.length === 0) {
        container.innerHTML = "";
        emptyMessage.style.display = "block";
        summary.style.display = "none";
        return;
    }

    emptyMessage.style.display = "none";
    summary.style.display = "block";

    let html = "";
    let tongTien = 0;

    gioHang.forEach((item, index) => {
        // Chuyển đổi giá từ chuỗi "850.000đ" sang số để tính toán
        const giaSo = parseInt(item.gia.replace(/\./g, '').replace('đ', '')) || 0;
        const thanhTien = giaSo * item.soLuong;
        tongTien += thanhTien;

        html += `
            <div class="cart-item">
                <img src="${item.anh}" alt="${item.ten}">
                <div class="item-info">
                    <h3>${item.ten}</h3>
                    <p>Loại: <strong>${item.loai}</strong></p>
                    <p>Ngôn ngữ: <strong>${item.ngonNgu}</strong></p> 
                    <p>Giá: ${item.gia}</p>
                    <div class="qty-control">
                        Số lượng: <strong>${item.soLuong}</strong>
                    </div>
                </div>
                <div class="item-actions">
                    <p class="subtotal">${thanhTien.toLocaleString('vi-VN')}đ</p>
                    <button class="btn-delete" onclick="xoaSanPham(${index})">Xóa</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    document.getElementById('total-amount').innerText = tongTien.toLocaleString('vi-VN') + 'đ';
}

function xoaSanPham(index) {
    let gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    gioHang.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(gioHang));
    renderGioHang();
}

function xoaToanBoGiỏ() {
    if(confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
        localStorage.removeItem('cart');
        renderGioHang();
    }
}

function sendOrderZalo() {
    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    if (gioHang.length === 0) return;

    let message = "Chào Shop Nhà Nhimm, mình muốn đặt hàng:\n";
    let tongTien = 0;

    gioHang.forEach((item, index) => {
        const giaSo = parseInt(item.gia.replace(/\./g, '').replace('đ', '')) || 0;
        tongTien += giaSo * item.soLuong;
        // Thêm ngôn ngữ vào tin nhắn gửi đi
        message += `\n${index + 1}. ${item.ten} [${item.ngonNgu}]\n   Loại: ${item.loai} - SL: ${item.soLuong}`;
    });

    message += `\n\nTổng cộng: ${tongTien.toLocaleString('vi-VN')}đ`;
    
    const phone = "0375772302"; 
    window.open(`https://zalo.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Chạy hàm render khi trang web load xong
window.onload = renderGioHang;