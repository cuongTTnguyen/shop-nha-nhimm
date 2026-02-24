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
            { nhan: "Real", soTien: "1.800.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "300.000đ" }
        ],
        GioiThieu: "<br><strong>Số người chơi:</strong>Phù hợp nhóm trung bình (4-5 người). <br><strong> Đặc điểm:</strong>Có Chuột Chũi (Militants) giúp thay thế Mèo/Chim, và Quạ tạo ra nhiều tổ hợp chiến thuật mới. <br><strong>Điểm cộng:</strong> Cực kỳ đáng tiền nhờ có thêm 2 Bản đồ mới và 2 Landmark (Phong cảnh) tạo điểm nhấn cho bàn chơi.",
        ThanhPhan: "Gồm 2 phe mới - Công Quốc Chuột Chũi, Âm Mưu của Bầy Quạ. Bổ sung 2 bản đồ mới và 2 Landmark mới (Phong cảnh).",
        anh: "https://ledergames.com/cdn/shop/products/10-RootUnderworldBox-Edit-Web.png?height=1024&v=1595310452"
    },
    {
        ten: "Root: Marauder Expansion",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "2.000.000đ" },
            { nhan: "Fake", soTien: "850.000đ" },
            { nhan: "DIY", soTien: "500.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "350.000đ" }
        ],
        GioiThieu: "<br><strong>Số người chơi:</strong>Tối ưu cho nhóm ít người (3-4 người, thậm chí 2 người). <br><strong> Đặc điểm:</strong>2 phe mới cực kỳ máu chiến, đẩy nhịp độ trận đấu lên rất cao và tăng tính va chạm. <br><strong>Điểm cộng:</strong>Có thêm cơ chế Hireling (Lính đánh thuê) giúp bàn đấu ít người vẫn nhộn nhịp. Có Advanced Setup giúp cân bằng game tốt hơn.",
        ThanhPhan: "Gồm 2 phe mới - Chúa Tể Tộc Chuột, Binh Đoàn Lửng Sắt. Bổ sung 3 Hireling (lính đánh thuê) và Advanced Setup.",
        anh: "https://ledergames.com/cdn/shop/files/RootMarauderExp-GameBox.png?v=1744138999"
    },
    {
        ten: "Root: Homeland Expansion",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "Chưa ra mắt" },
            { nhan: "Fake", soTien: "Chưa ra mắt" },
            { nhan: "DIY", soTien: "700.000đ" }
        ],
        GioiThieu: "Nên mua khi đã có 1 trong 3 bộ mở rộng",
        ThanhPhan: "Gồm có 3 phe mới - Ếch Bèo Hải Ngoại, Hội Dơi Chạng Vạng, Chồn Sọc Bất Lương. Bổ sung thêm 2 bản đồ mới.",
        anh: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWVROBPgvBljmWHKcP8J1qYpLL_AmoOTgmp7HGXoiuYIXcMA6d"
    },
    {
        ten: "Root: Clockwork 1",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "1.500.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "DIY", soTien: "300.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "300.000đ" }
        ],
        GioiThieu: "Bổ sung thêm cách chơi mới - Co-op đánh máy, Chơi solo, bổ sung thêm người chơi ảo nếu thiếu người.",
        ThanhPhan: "Gồm 4 phe máy móc dựa theo bản base.",
        anh: "https://ledergames.com/cdn/shop/products/17-RootClockworkGameBox-Edit-Web.png?crop=center&height=600&v=1595303856&width=600"
    },
    {
        ten: "Root: Clockwork 2",
        loai: "Mở rộng",
        bienTheGia: [
            { nhan: "Real", soTien: "1.500.000đ" },
            { nhan: "DIY", soTien: "300.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "300.000đ" }
        ],
        GioiThieu: "Bổ sung thêm cách chơi mới - Co-op đánh máy, Chơi solo, bổ sung thêm người chơi ảo nếu thiếu người.",
        ThanhPhan: "Gồm 4 phe máy móc dựa theo bản Riverfolk và Underworld (Yêu cầu có các bản mở rộng tương ứng để chơi).",
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUGC9Jr64Q8f1aX0EecgA3ZJL72dFFB4P8Q&s"
    },
    {
        ten: "Root: Hireling",
        loai: "Pack lẻ",
        bienTheGia: [
            { nhan: "Real", soTien: "3-4.000.000đ" },
            { nhan: "DIY", soTien: "450.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "65.000đ" }
        ],
        GioiThieu: "Bổ sung thêm Hireling (Lính đánh thuê). Giúp cho nhóm chơi từ 2-3 người trở lên thú vị hơn. Bạn sẽ thuê các chiến binh ngoại lai và họ sẽ chiến đấu, hỗ trợ bạn. Tuy nhiên thời gian thuê có hạn nên nếu hết thời hạn thuê, bạn sẽ phải đưa Hireling bạn thuê cho người khác.",
        ThanhPhan: "Bản này sẽ bao gồm có tổng cộng 4 Pack khác nhau. Mỗi Pack sẽ gồm 3 Hireling (tổng 12 Hireling).",
        anh: "https://ledergames.com/cdn/shop/products/Root_Hirelings-DeluxeBox-RetailWrap_Left_newangle.png?v=1646237750"
    },
    {
        ten: "Root: The Exiles and Partisans Deck",
        loai: "Pack lẻ",
        bienTheGia: [
            { nhan: "Real", soTien: "600.000đ" },
            { nhan: "DIY", soTien: "170.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "170.000đ" }
        ],
        GioiThieu: "Gồm 1 bộ bài thay thế hoàn toàn bộ bài chơi gốc, giúp tăng chiến thuật, cân bằng hơn và thay đổi khá nhiều lối chơi của các phe.",
        ThanhPhan: "Bao gồm 1 bộ bài mới.",
        anh: "https://ledergames.com/cdn/shop/products/26-RootExileandPartisanBox-Edit-Web.png?height=1024&v=1595307143"
    },
    {
        ten: "Đánh dấu vùng đất",
        loai: "Pack lẻ",
        bienTheGia: [
            { nhan: "Real", soTien: "700.000đ" },
            { nhan: "DIY", soTien: "150.000đ" }
        ],
        GioiThieu: "Gồm 1 bộ bài thay thế hoàn toàn bộ bài chơi gốc, giúp tăng chiến thuật, cân bằng hơn và thay đổi khá nhiều lối chơi của các phe.",
        ThanhPhan: "Bao gồm 1 bộ bài mới.",
        anh: "https://ledergames.com/cdn/shop/products/40-RootResinMarkerBox-Edit-Web.png?v=1595309176"
    },
    {
        ten: "Root: Vagabond Pack",
        loai: "Pack lẻ",
        bienTheGia: [
            { nhan: "Real", soTien: "700.000đ" },
            { nhan: "DIY", soTien: "120.000đ" }
        ],
        GioiThieu: "Bổ sung thêm các vagabond mới, những Pawns của các vagabond cũ để dễ nhìn hơn, đẹp hơn.",
        ThanhPhan: "Bao gồm 3 lá bài Vagabond mới, 7 Pawn, 3 item.",
        anh: "https://images-na.ssl-images-amazon.com/images/I/81iQAv7G86L.jpg"
    },
    {
        ten: "Root: MInibox",
        loai: "Pack lẻ",
        bienTheGia: [
            { nhan: "DIY", soTien: "15.000đ/box"}
        ],
        GioiThieu: "Có những hộp nhỏ để đựng thành phần của từng phe riêng biệt, giúp hộp game gọn gàng hơn.",
        ThanhPhan: "Giá chỉ bao gồm 1 box, chọn số lượng và loài để mua.",
        anh: "images/minibox.png"
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