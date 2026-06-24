document.addEventListener('DOMContentLoaded', () => {
    // 1. Tạo và chèn HEADER
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <div class="header-left">
                <button class="menu-btn" onclick="toggleSidebarMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
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
                    <a href="luat-choi-root.html" class="nav-item">Luật chơi</a>
                    <a href="san-pham.html" class="nav-item">ShopNhaNhimm</a>
                    <a href="ung-ho.html" class="nav-item">Donate</a>
                    
                    <a href="dang-nhap.html" class="nav-item" id="nav-auth-btn" style="margin-left:15px;">
                        <i class="fas fa-user-circle"></i> Tài khoản
                    </a>

                    <!-- Bổ sung Nút Giỏ Hàng vào Header -->
                    <a href="gio-hang.html" class="nav-item cart-icon-container" style="position: relative; margin-left: 10px; text-decoration: none; color: #333; font-size: 18px;" title="Giỏ hàng">
                        <i class="fas fa-shopping-cart"></i>
                        <span id="cart-count" style="position: absolute; top: -10px; right: -12px; background: #ff4757; color: white; font-size: 11px; padding: 2px 6px; border-radius: 10px; font-weight: bold;">0</span>
                    </a>

                    <button class="search-btn" onclick="toggleSearch()" style="margin-left: 5px;">
                        <i class="fas fa-search"></i>
                    </button>
                </nav>
            </div>
        `;
    }

    // 2. Tạo và chèn MENU BÊN (Sidebar) đồng bộ cho mọi trang
    let sidebar = document.getElementById('left-sidebar');
    if (!sidebar) {
        sidebar = document.createElement('div');
        sidebar.id = 'left-sidebar';
        sidebar.className = 'left-sidebar';
        document.body.appendChild(sidebar);
    }
    
    let sidebarOverlay = document.getElementById('sidebar-overlay');
    if (!sidebarOverlay) {
        sidebarOverlay = document.createElement('div');
        sidebarOverlay.id = 'sidebar-overlay';
        sidebarOverlay.className = 'sidebar-overlay';
        sidebarOverlay.setAttribute('onclick', 'toggleSidebarMenu()');
        document.body.appendChild(sidebarOverlay);
    }

    // Ghi đè nội dung chuẩn vào Sidebar
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <span class="sidebar-title">MENU</span>
            <button class="close-sidebar" onclick="toggleSidebarMenu()">&times;</button>
        </div>
        <ul class="sidebar-nav">
            <li><a href="index.html">🏠 Trang chủ</a></li>
            <li><a href="tong-hop-phe.html">🐾 Tổng hợp phe</a></li>
            <li><a href="san-pham.html">🛒 Cửa hàng / Mua sắm</a></li>
            <li class="has-submenu">
                <div class="submenu-header" onclick="if(typeof toggleSubmenu === 'function') toggleSubmenu(this)">
                    📜 Luật chơi <span class="arrow">▼</span>
                </div>
                <ul class="submenu">
                    <li><a href="luat-choi-root.html">· Luật chơi ROOT</a></li>
                    <li><a href="luat-choi-fort.html">· Luật chơi Fort</a></li>
                    <li><a href="luat-choi-arcs.html">· Luật chơi Arcs</a></li>
                </ul>
            </li>
            <li><a href="thong-tin.html">ℹ️ Thông tin bổ sung</a></li>
            <li><a href="ung-ho.html">🎁 Donate / Ủng hộ</a></li>
            <li style="margin-top: 15px; border-top: 1px dashed #ccc; padding-top: 15px;">
                <a href="dang-nhap.html" id="sidebar-auth-btn" style="color: #4a6741; font-weight: bold;"><i class="fas fa-user-circle"></i> Đăng nhập / Đăng ký</a>
            </li>
        </ul>
    `;

    // 3. Tạo và chèn FOOTER
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="footer-container">
                <div class="footer-column">
                    <h3>THÔNG TIN LIÊN HỆ</h3>
                    <ul class="footer-links">
                        <li><a href="https://www.facebook.com/cuong.nguyen.687207" target="_blank">🔵 Facebook: Cường Nguyễn</a></li>
                        <li><a href="https://zalo.me/0375772302" target="_blank">🟢 Zalo: 0375772302</a></li>
                        <li><a href="https://www.youtube.com/@Meo_Munn" target="_blank">🔴 Youtube: Bá Tước Mèo Mun</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                    <ul class="footer-links">
                        <li><a href="huong-dan-mua-hang.html">📋 Hướng dẫn mua hàng</a></li>
                        <li><a href="huong-dan-thanh-toan.html">💳 Hướng dẫn thanh toán</a></li>
                        <li><a href="dieu-khoan-dich-vu.html">⚖️ Điều khoản dịch vụ</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Donate tại đây</h3>
                    <ul class="footer-links">
                        <li><a href="ung-ho.html">🎁 Tui mún ủng hộ!!!</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Shop Nhà Nhimm - Thế giới Woodland trong tay bạn.</p>
            </div>
        `;
    }

    // 4. Tự động đếm và cập nhật số lượng giỏ hàng sau khi tạo Header
    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    const tongSoLuong = gioHang.reduce((total, item) => total + item.soLuong, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = tongSoLuong;
    }
});