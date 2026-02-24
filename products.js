// Danh sách sản phẩm (Mảng các đối tượng)
const danhSachSanPham = [
    {
        ten: "Root base",
        loai: "Board Game",
        bienTheGia: [
            { nhan: "Real", soTien: "2.000.000đ" },
            { nhan: "Fake", soTien: "850.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "350.000đ" }
        ],
        GioiThieu: "Bộ cơ bản, bắt buộc phải mua nếu bạn chưa có bộ ROOT nào cả.",
        ThanhPhan: "Gồm 4 phe: Nữ Bá Tước Mèo, Vương Triều Tổ Chim, Liên Minh Khu Rừng, Vagabond.",
        anh: "https://ledergames.com/cdn/shop/products/1-RootGameBox-Edit-Web.png?height=1024&v=1595294735"
    },
    {
        ten: "Root: Riverfolk Expansion",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "1.800.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "350.000đ" }
        ],
        GioiThieu: "<br><strong>Số người chơi:</strong> Tốt nhất cho nhóm đông (5-6 người). <br><strong> Đặc điểm:</strong> Bổ sung 2 phe Insurgents (ít chiếm đóng), giúp ván đấu nhẹ nhàng, ít va chạm trực tiếp. <br><strong>Điểm cộng:</strong> Thêm bảng Vagabond và 3 nhân vật mới (dễ chơi, ít luật mới). Có thêm chế độ đấu với máy (Mèo Máy).",
        ThanhPhan: "Gồm 2 phe mới - Thương Hội Hải Ly, Giáo Phái Thằn Lằn. Bổ sung 1 Vagabond và Mèo máy 1.",
        anh: "https://ledergames.com/cdn/shop/products/20-RootRiverfolkBox-Edit-Web.png?v=1595306138" 
    },
    {
        ten: "Root: Underworld Expansion",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "2.000.000đ" },
            { nhan: "Fake", soTien: "850.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "300.000đ" }
        ],
        GioiThieu: "Một trò chơi về quyền lực và công lý trong rừng rậm Woodland.",
        ThanhPhan: "Mỗi phe phái có cách chơi riêng biệt (Asymmetric). Mèo xây dựng, Chim chiếm đóng...",
        anh: "https://ledergames.com/cdn/shop/products/10-RootUnderworldBox-Edit-Web.png?height=1024&v=1595310452"
    },
    {
        ten: "Root: Marauder Expansion",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "2.000.000đ" },
            { nhan: "Fake", soTien: "850.000đ" },
            { nhan: "DIY", soTien: "100.000đ" }
        ],
        GioiThieu: "Một trò chơi về quyền lực và công lý trong rừng rậm Woodland.",
        ThanhPhan: "Mỗi phe phái có cách chơi riêng biệt (Asymmetric). Mèo xây dựng, Chim chiếm đóng...",
        anh: "https://ledergames.com/cdn/shop/files/RootMarauderExp-GameBox.png?v=1744138999"
    }
    ,
    {
        ten: "Root: Homeland Expansion",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "2.000.000đ" },
            { nhan: "Fake", soTien: "850.000đ" },
            { nhan: "DIY", soTien: "100.000đ" }
        ],
        GioiThieu: "Một trò chơi về quyền lực và công lý trong rừng rậm Woodland.",
        ThanhPhan: "Mỗi phe phái có cách chơi riêng biệt (Asymmetric). Mèo xây dựng, Chim chiếm đóng...",
        anh: "https://ledergames.com/cdn/shop/files/RootMarauderExp-GameBox.png?v=1744138999"
    }
];
// Hàm hiển thị sản phẩm chính (có thêm tham số 'loaiCanLoc')
function hienThiTheoLoai(loaiCanLoc = 'tat-ca') {
    const container = document.getElementById('product-grid');
    let htmlContent = "";

    // Lọc danh sách dựa trên loại
    const danhSachDaLoc = loaiCanLoc === 'tat-ca' 
        ? danhSachSanPham 
        : danhSachSanPham.filter(sp => sp.loai === loaiCanLoc);

    danhSachDaLoc.forEach((sp, index) => {
        let giaHTML = "";
        sp.bienTheGia.forEach(g => {
            let colorClass = g.nhan.toLowerCase();
            giaHTML += `
                <div class="price-row">
                    <span class="price-label ${colorClass}">${g.nhan}</span>
                    <span class="price-value">${g.soTien}</span>
                </div>
            `;
        });

        htmlContent += `
            <div class="product-card">
                <img src="${sp.anh}" alt="${sp.ten}">
                <div class="product-info">
                    <span class="category">${sp.loai}</span>
                    <h3>${sp.ten}</h3>
                    <div class="price-container">${giaHTML}</div>
                    <button class="btn-buy" onclick="openModal('${sp.ten}')">Chi tiết</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// Hàm xử lý khi nhấn nút lọc
function locSanPham(loai) {
    // 1. Cập nhật giao diện nút bấm (active)
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === loai || (loai === 'tat-ca' && btn.innerText === 'Tất cả')) {
            btn.classList.add('active');
        }
    });

    // 2. Gọi hàm hiển thị lại với loại đã chọn
    hienThiTheoLoai(loai);
}
function openModal(tenSp) {
    const sp = danhSachSanPham.find(item => item.ten === tenSp);
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');

    // Cấu trúc mới: Chia làm 2 phần left và right
    body.innerHTML = `
        <div class="modal-flex-container">
            <div class="modal-left">
                <img src="${sp.anh}" alt="${sp.ten}">
            </div>
            <div class="modal-right">
                <h2>${sp.ten}</h2>
                <div class="modal-info-scroll">
                    <p><strong>Giới thiệu:</strong> ${sp.GioiThieu}</p>
                    <p><strong>Thành phần:</strong> ${sp.ThanhPhan}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = "block";
}
function closeModal() {
    document.getElementById('product-modal').style.display = "none";
}

// Đóng khi click ra ngoài khung
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onload = () => hienThiTheoLoai('tat-ca');