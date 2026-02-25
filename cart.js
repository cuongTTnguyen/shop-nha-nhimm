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

function xoaToanBoGio() {
    if(confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
        localStorage.removeItem('cart');
        renderGioHang();
    }
}

// Hàm mở và đóng Popup thông tin
function openInfoModal() {
    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    if (gioHang.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    document.getElementById('info-modal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('info-modal').style.display = 'none';
}

// Hàm chính: Gom dữ liệu và gửi đi
function sendToMessenger() {
    const name = document.getElementById('cus-name').value;
    const phone = document.getElementById('cus-phone').value;
    const address = document.getElementById('cus-address').value;

    if (!name || !phone || !address) {
        alert("Vui lòng điền đầy đủ thông tin để Shop giao hàng nhé!");
        return;
    }

    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    let message = `Mình là: ${name}\n`;
    message += `📞 SĐT: ${phone}\n`;
    message += `📍 Địa chỉ: ${address}\n`;
    message += `Mình muốn đặt:\n`;

    let tongTien = 0;
    gioHang.forEach((item, index) => {
        const giaSo = parseInt(item.gia.replace(/\./g, '').replace('đ', '')) || 0;
        tongTien += giaSo * item.soLuong;
        message += `${index + 1}. ${item.ten} [${item.ngonNgu}]\n   Loại: ${item.loai} - SL: ${item.soLuong}\n`;
    });

    message += `\n💰 TỔNG CỘNG: ${tongTien.toLocaleString('vi-VN')}đ`;

    // Copy toàn bộ thông tin
    navigator.clipboard.writeText(message).then(() => {
        alert("Đã sao chép đơn hàng và thông tin! Bạn chỉ cần 'Dán' vào Messenger.");
        const fbUsername = "cuong.nguyen.687207";
        window.open(`https://m.me/${fbUsername}`, '_blank');
        closeInfoModal();
    });
}
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeInfoModal();
    }
}
// Chạy hàm render khi trang web load xong
window.onload = renderGioHang;