function setupGlobalLayout() {
    // 1. CHÈN CSS LÀM ĐẸP HEADER VÀ FOOTER VÀO TOÀN HỆ THỐNG
    if (!document.getElementById('global-beautiful-styles')) {
        const style = document.createElement('style');
        style.id = 'global-beautiful-styles';
        style.innerHTML = `
            /* --- HEADER CAO CẤP (Kính mờ) --- */
            .index-header {
                background: rgba(255, 255, 255, 0.85) !important;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
                border-bottom: 1px solid rgba(255,255,255,0.3);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
            }
            .header-nav { display: flex; align-items: center; gap: 15px; }
            .header-nav .nav-item {
                position: relative;
                color: #2c3e50 !important;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                padding: 5px 0;
                text-decoration: none;
                font-size: 14px;
            }
            /* Hiệu ứng gạch chân chạy ra khi di chuột */
            .header-nav .nav-item::after {
                content: ''; position: absolute;
                width: 0; height: 3px;
                bottom: -2px; left: 0;
                background-color: #d35400;
                transition: width 0.3s ease;
                border-radius: 2px;
            }
            .header-nav .nav-item:hover::after { width: 100%; }
            .header-nav .nav-item:hover { color: #d35400 !important; }

            /* SỬA LỖI CHE CHỮ HEADER TRÊN MÀN HÌNH NHỎ */
            @media (max-width: 1050px) {
                /* Ẩn các chữ đi, khách sẽ dùng nút Menu 3 gạch */
                .header-nav .nav-item { display: none !important; }
            }

            /* --- FOOTER SANG TRỌNG (Dark Mode) --- */
            .main-footer {
                background: #1a252f !important;
                color: #ecf0f1 !important;
                padding: 60px 20px 20px 20px !important;
                margin-top: 60px;
                font-family: 'Montserrat', sans-serif;
            }
            .footer-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 40px;
                max-width: 1200px;
                margin: 0 auto;
            }
            .footer-column h3 {
                color: #f1c40f;
                font-size: 18px;
                border-bottom: 2px solid #4a6741;
                padding-bottom: 12px;
                margin-top: 0;
                margin-bottom: 20px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .footer-links { list-style: none; padding: 0; margin: 0; }
            .footer-links li { margin-bottom: 15px; }
            .footer-links a {
                color: #bdc3c7;
                text-decoration: none;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
            }
            .footer-links a i { font-size: 18px; width: 20px; text-align: center; }
            .footer-links a:hover {
                color: #f1c40f;
                transform: translateX(8px);
            }
            .footer-bottom {
                text-align: center;
                padding-top: 30px;
                margin-top: 40px;
                border-top: 1px solid #34495e;
                color: #7f8c8d;
                font-size: 13px;
            }
        `;
        document.head.appendChild(style);
    }

    // 2. TẠO HTML CHO HEADER
    const headerHtml = `
        <div class="header-left">
            <button class="menu-btn" onclick="toggleSidebarMenu()">
                <span></span><span></span><span></span>
            </button>
        </div>
        <div class="header-center">
            <a href="index.html" class="logo-link">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUasrlZDK2aoQln8Y41Occ8yWOU5hq39ciRQ&s" alt="ROOT Logo" class="root-logo">
            </a>
        </div>
        <div class="header-right">
            <nav class="header-nav">
                <a href="index.html" class="nav-item">Trang chủ</a>
                <a href="tong-hop-phe.html" class="nav-item">Tổng hợp phe</a>
                <a href="san-pham.html" class="nav-item">ShopNhaNhimm</a>
                <a href="set-keo.html" class="nav-item" style="color:#d35400;"><i class="fas fa-handshake"></i> Set Kèo</a>
                
                <!-- Icon Tìm kiếm và Giỏ hàng luôn hiển thị -->
                <button class="search-btn" onclick="toggleSearch()" style="background:none; border:none; font-size:18px; color:#4a6741; cursor:pointer;">
                    <i class="fas fa-search"></i>
                </button>
                <div class="cart-icon-container" onclick="window.location.href='gio-hang.html'" style="color: #2c3e50; font-size:18px; cursor:pointer; position:relative; margin-left:10px;">
                    <i class="fas fa-shopping-cart cart-icon"></i>
                    <span id="cart-count" style="position:absolute; top:-8px; right:-10px; background:#ff4757; color:white; font-size:10px; padding:2px 6px; border-radius:10px; font-weight:bold;">0</span>
                </div>
            </nav>
        </div>
    `;

    // 3. TẠO HTML CHO SIDEBAR
    const sidebarHtml = `
        <div class="sidebar-header">
            <span class="sidebar-title">MENU</span>
            <button class="close-sidebar" onclick="toggleSidebarMenu()">&times;</button>
        </div>
        <ul class="sidebar-nav">
            <li><a href="index.html">🏠 Trang chủ</a></li>
            <li><a href="tong-hop-phe.html">🐾 Tổng hợp phe</a></li>
            <li><a href="san-pham.html">🛒 Mua sắm</a></li>
            <li><a href="set-keo.html" style="color:#d35400; font-weight:bold;">🤝 Tìm người chơi (Set Kèo)</a></li>
            <li class="has-submenu">
                <div class="submenu-header" onclick="if(typeof toggleSubmenu === 'function') toggleSubmenu(this)">📜 Luật chơi <span class="arrow">▼</span></div>
                <ul class="submenu">
                    <li><a href="luat-choi-root.html">· Luật chơi ROOT</a></li>
                    <li><a href="luat-choi-fort.html">· Luật chơi Fort</a></li>
                    <li><a href="luat-choi-arcs.html">· Luật chơi Arcs</a></li>
                </ul>
            </li>
            <li><a href="ung-ho.html">🎁 Donate</a></li>
            <li style="margin-top:20px; border-top:1px dashed #ccc; padding-top:15px;"><a href="dang-nhap.html" id="nav-auth-btn" style="color:#4a6741; font-weight:bold;"><i class="fas fa-user-circle"></i> Đăng nhập</a></li>
        </ul>
    `;

    // 4. TẠO HTML CHO FOOTER CAO CẤP
    const footerHtml = `
        <div class="footer-container">
            <div class="footer-column">
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <ul class="footer-links">
                    <li><a href="https://www.facebook.com/cuong.nguyen.687207" target="_blank"><i class="fab fa-facebook" style="color:#3498db;"></i> Facebook: Cường Nguyễn</a></li>
                    <li><a href="https://zalo.me/0375772302" target="_blank"><i class="fas fa-comment-dots" style="color:#2ecc71;"></i> Zalo: 0375772302</a></li>
                    <li><a href="https://www.youtube.com/@Meo_Munn" target="_blank"><i class="fab fa-youtube" style="color:#e74c3c;"></i> Youtube: Bá Tước Mèo Mun</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                <ul class="footer-links">
                    <li><a href="huong-dan-mua-hang.html"><i class="fas fa-clipboard-list"></i> Hướng dẫn mua hàng</a></li>
                    <li><a href="huong-dan-thanh-toan.html"><i class="fas fa-credit-card"></i> Hướng dẫn thanh toán</a></li>
                    <li><a href="dieu-khoan-dich-vu.html"><i class="fas fa-balance-scale"></i> Điều khoản dịch vụ</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>ĐÓNG GÓP & PHÁT TRIỂN</h3>
                <ul class="footer-links">
                    <li><a href="ung-ho.html"><i class="fas fa-gift" style="color:#e67e22;"></i> Donate / Ủng hộ Admin</a></li>
                    <li><a href="dang-ky-phe.html"><i class="fas fa-upload" style="color:#9b59b6;"></i> Đăng tải Phe Fanmade</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Database ROOT Việt Nam. Nơi thỏa sức đắm chìm trong cánh rừng Woodland.</p>
        </div>
    `;

    // 5. CHÈN VÀO DOM
    const headerEl = document.getElementById('global-header');
    if (headerEl) headerEl.innerHTML = headerHtml;

    const sidebarEl = document.getElementById('left-sidebar');
    if (sidebarEl) sidebarEl.innerHTML = sidebarHtml;

    const footerEl = document.getElementById('global-footer');
    if (footerEl) footerEl.innerHTML = footerHtml;

    // 6. CẬP NHẬT GIỎ HÀNG
    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    const tongSoLuong = gioHang.reduce((total, item) => total + item.soLuong, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = tongSoLuong;
}

document.addEventListener('DOMContentLoaded', setupGlobalLayout);