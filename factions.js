import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyApRi3KOcuCyN_RH9gNl2g17f03_D5t_l0",
    authDomain: "rootvn-3eeca.firebaseapp.com",
    projectId: "rootvn-3eeca",
    storageBucket: "rootvn-3eeca.firebasestorage.app",
    messagingSenderId: "92355209659",
    appId: "1:92355209659:web:0ed0e8a38118e86ea63c9e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Đưa mảng ra toàn cục
window.danhSachPhe = [];

window.hienThiPhe = function(tagCanLoc = 'tat-ca') {
    const container = document.getElementById('product-grid');
    if (!container) return;

    const danhSachDaLoc = tagCanLoc === 'tat-ca' 
        ? window.danhSachPhe 
        : window.danhSachPhe.filter(phe => phe.tags && phe.tags.includes(tagCanLoc));

    if (danhSachDaLoc.length === 0) {
        container.innerHTML = "<p style='text-align:center; width:100%;'>Chưa có phe phái nào trong danh mục này.</p>";
        return;
    }

    let htmlContent = "";
    danhSachDaLoc.forEach((phe) => {
        let isGoc = phe.tags && phe.tags.includes("Goc");
        let tagClass = isGoc ? "real" : "fake";
        let displayTagName = isGoc ? "Gốc" : "Fanmade";

        htmlContent += `
            <div class="product-card">
                <img src="${phe.anh}" alt="${phe.ten}" onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')" 
                     onerror="this.src='https://placehold.co/400x300?text=No+Image'" style="cursor:pointer">
                <div class="product-info">
                    <div class="tag-container">
                        <span class="price-label ${tagClass}">${displayTagName}</span>
                    </div>
                    <h3 onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')" style="cursor:pointer; margin: 10px 0;">${phe.ten}</h3>
                    
                    <div style="font-size: 13px; color: #666; margin-bottom: 5px;">
                        <i class="fas fa-hammer"></i> <strong>Tạo bởi:</strong> ${phe.taoBoi || 'Đang cập nhật'}
                    </div>
                    <div style="font-size: 13px; color: #666; margin-bottom: 15px;">
                        <i class="fas fa-paint-brush"></i> <strong>Minh họa:</strong> ${phe.minhHoa || 'Đang cập nhật'}
                    </div>

                    <button class="btn-buy" style="background-color: #4a6741; border:none; color:white; width:100%; padding:10px; border-radius:8px; cursor:pointer;" 
                            onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')">
                        Xem chi tiết phe
                    </button>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
};

window.xemChiTietPhe = function(tenPhe) {
    window.location.href = `phe-chi-tiet.html?name=${encodeURIComponent(tenPhe)}`;
};

window.locPhe = function(tag) { 
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (tag === 'tat-ca' && btn.innerText.includes('Tất cả')) btn.classList.add('active');
        if (tag === 'Goc' && btn.innerText.includes('Gốc')) btn.classList.add('active');
        if (tag === 'Fanmade' && btn.innerText.includes('Fanmade')) btn.classList.add('active');
    });
    window.hienThiPhe(tag);
};

window.timKiemPhe = function() {
    const input = document.getElementById('faction-search-input').value.toLowerCase();
    const container = document.getElementById('product-grid');
    if (!container) return;

    const filtered = window.danhSachPhe.filter(phe => 
        (phe.ten && phe.ten.toLowerCase().includes(input)) || 
        (phe.moTa && phe.moTa.toLowerCase().includes(input))
    );
    
    if (filtered.length === 0) {
        container.innerHTML = "<p style='text-align:center; width:100%;'>Không tìm thấy phe nào phù hợp.</p>";
        return;
    }

    let htmlContent = "";
    filtered.forEach((phe) => {
        let isGoc = phe.tags && phe.tags.includes("Goc");
        let tagClass = isGoc ? "real" : "fake";
        htmlContent += `
            <div class="product-card">
                <img src="${phe.anh}" alt="${phe.ten}" onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')" style="cursor:pointer">
                <div class="product-info">
                    <span class="price-label ${tagClass}">${isGoc ? 'Gốc' : 'Fanmade'}</span>
                    <h3 onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')" style="cursor:pointer; margin-top:10px;">${phe.ten}</h3>
                    <div style="font-size: 12px; color:#666;"><i class="fas fa-hammer"></i> ${phe.taoBoi || 'Đang cập nhật'}</div>
                    <button class="btn-buy" style="margin-top: 15px; background:#4a6741; color:white; border:none; padding:8px; border-radius:5px; width:100%;" onclick="xemChiTietPhe('${phe.replace(/'/g, "\\'")}')">Xem chi tiết</button>
                </div>
            </div>`;
    });
    container.innerHTML = htmlContent;
};

// Tự động tải dữ liệu khi trang web được mở
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-grid');
    if (container) {
        container.innerHTML = "<div style='text-align:center; width:100%; padding:20px;'><i class='fas fa-spinner fa-spin' style='font-size: 24px; color: #4a6741;'></i> Đang tải dữ liệu từ máy chủ...</div>";
        try {
            const querySnapshot = await getDocs(collection(db, "phe-phai"));
            window.danhSachPhe = [];
            querySnapshot.forEach((doc) => {
                window.danhSachPhe.push({ id: doc.id, ...doc.data() });
            });

            // LOGIC SẮP XẾP CHUẨN XÁC: Ép kiểu dữ liệu về số nguyên
            window.danhSachPhe.sort((a, b) => {
                let orderA = parseInt(a.thuTu);
                if (isNaN(orderA)) orderA = 1000; // Nếu chưa điền thứ tự, đẩy xuống cuối cùng
                
                let orderB = parseInt(b.thuTu);
                if (isNaN(orderB)) orderB = 1000;

                // Ưu tiên xếp theo số thứ tự
                if (orderA !== orderB) return orderA - orderB;
                
                // Nếu cùng số thứ tự, xếp theo bảng chữ cái
                return (a.ten || '').localeCompare(b.ten || '');
            });

            window.hienThiPhe('tat-ca');
        } catch (error) {
            console.error("Lỗi lấy dữ liệu:", error);
            container.innerHTML = "<p style='text-align:center; width:100%; color:red;'>Lỗi tải dữ liệu. Vui lòng kiểm tra kết nối mạng.</p>";
        }
    }
});