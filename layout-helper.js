function setupGlobalLayout() {
    // 1. CHÈN CSS LÀM ĐẸP HEADER, FOOTER, MÔI TRƯỜNG VÀ DARK MODE
    if (!document.getElementById('global-beautiful-styles')) {
        const style = document.createElement('style');
        style.id = 'global-beautiful-styles';
        style.innerHTML = `
            /* --- HEADER CAO CẤP (Kính mờ) --- */
            .index-header {
                position: fixed !important;
                top: 0; left: 0; width: 100%;
                z-index: 9999 !important;
                background: rgba(255, 255, 255, 0.85) !important;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
                border-bottom: 1px solid rgba(255,255,255,0.3);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                height: 70px;
                box-sizing: border-box;
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

            .menu-btn {
                background: none; border: none; cursor: pointer; padding: 10px;
                display: flex; flex-direction: column; gap: 5px; position: relative; z-index: 10000;
            }
            .menu-btn span { width: 25px; height: 3px; background: #4a6741; border-radius: 2px; transition: 0.3s; }

            @media (max-width: 1050px) {
                .header-nav .nav-item { display: none !important; }
            }

            body { padding-top: 70px; transition: background-color 0.4s ease, color 0.4s ease; }

            /* --- FOOTER SANG TRỌNG --- */
            .main-footer {
                background: #1a252f !important;
                color: #ecf0f1 !important;
                padding: 60px 20px 20px 20px !important;
                margin-top: 60px;
                font-family: 'Montserrat', sans-serif;
                position: relative; z-index: 10;
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
                color: #bdc3c7; text-decoration: none; transition: all 0.3s ease;
                display: flex; align-items: center; gap: 10px; font-size: 14px;
            }
            .footer-links a i { font-size: 18px; width: 20px; text-align: center; }
            .footer-links a:hover { color: #f1c40f; transform: translateX(8px); }
            .footer-bottom {
                text-align: center; padding-top: 30px; margin-top: 40px;
                border-top: 1px solid #34495e; color: #7f8c8d; font-size: 13px;
            }

            /* --- CHẾ ĐỘ RỪNG ĐÊM (DARK MODE) --- */
            body.dark-theme { background-color: #121b16 !important; color: #ecf0f1 !important; background-image: none !important; }
            body.dark-theme .index-header { background: rgba(18, 27, 22, 0.95) !important; border-bottom: 1px solid #2c3e50 !important; }
            body.dark-theme .header-nav .nav-item { color: #ecf0f1 !important; }
            body.dark-theme .header-nav .nav-item:hover { color: #f1c40f !important; }
            
            /* Nút bấm trên Header khi Dark Mode */
            body.dark-theme .cart-icon-container, body.dark-theme .search-btn, body.dark-theme .theme-toggle-btn { color: #ecf0f1 !important; }
            body.dark-theme .cart-icon-container:hover, body.dark-theme .search-btn:hover, body.dark-theme .theme-toggle-btn:hover { color: #f1c40f !important; }
            body.dark-theme .menu-btn span { background-color: #ecf0f1 !important; }

            /* Nền của các Form, Card, Box lớn */
            body.dark-theme .faction-frame, body.dark-theme .tasks-section, body.dark-theme .wheel-section,
            body.dark-theme .admin-container, body.dark-theme .cart-section, body.dark-theme .checkout-section,
            body.dark-theme .account-sidebar, body.dark-theme .order-history-section, body.dark-theme .filter-section,
            body.dark-theme .player-card, body.dark-theme .product-card, body.dark-theme .modal-content,
            body.dark-theme .review-card, body.dark-theme .review-form-box, body.dark-theme .stat-bar-bg,
            body.dark-theme .form-section, body.dark-theme .shipping-note-box {
                background: #1a252f !important; border-color: #2c3e50 !important; box-shadow: 0 5px 15px rgba(0,0,0,0.5) !important; color: #ecf0f1 !important;
            }
            
            /* Các Tiêu đề */
            body.dark-theme h1, body.dark-theme h2, body.dark-theme h3, body.dark-theme h4,
            body.dark-theme .main-title, body.dark-theme .section-title, body.dark-theme .p-name, 
            body.dark-theme .r-name, body.dark-theme .task-info h4, body.dark-theme .cart-item-title { color: #f1c40f !important; }
            
            /* Chữ thường */
            body.dark-theme p, body.dark-theme .sub-title, body.dark-theme .p-info, body.dark-theme .note-item,
            body.dark-theme .r-text, body.dark-theme .author-info, body.dark-theme .stat-label, body.dark-theme .breadcrumb { color: #bdc3c7 !important; }
            
            /* Box nhỏ con bên trong */
            body.dark-theme .allocation-box, body.dark-theme .task-item, body.dark-theme .voucher-box { background: #23313d !important; border-color: #34495e !important; }
            body.dark-theme .prize-alloc-row, body.dark-theme .voucher-item { background: #1a252f !important; border-color: #2c3e50 !important; }
            body.dark-theme .btn-alloc { background: #2c3e50 !important; color: #ecf0f1 !important; border-color: #34495e !important; }
            
            /* Form Input (Khung nhập liệu) */
            body.dark-theme .input-group input, body.dark-theme .form-group input, body.dark-theme .form-group textarea, 
            body.dark-theme .form-group select, body.dark-theme .search-wrapper input { background: #121b16 !important; color: #f1c40f !important; border-color: #34495e !important; }
            body.dark-theme .search-bar-hidden input { background: #1a252f !important; color: #fff !important; }
            
            /* Sidebar Dark mode */
            body.dark-theme .left-sidebar, body.dark-theme #search-bar-container { background: #1a252f !important; color: #ecf0f1 !important; border-right: 1px solid #34495e; }
            body.dark-theme .sidebar-header { background: #121b16 !important; border-bottom-color: #2c3e50 !important; }
            body.dark-theme .sidebar-nav a { color: #ecf0f1 !important; }
            body.dark-theme .sidebar-nav a:hover { background: #2c3e50 !important; }
            body.dark-theme .submenu { background: #121b16 !important; }
            
            /* Vòng Quay và Nút bấm Trang chủ */
            body.dark-theme .wheel-section { border-color: #f1c40f !important; }
            body.dark-theme .btn-more { background: #1a252f !important; border-color: #f1c40f !important; color: #f1c40f !important;}
            body.dark-theme .btn-channel { background: #2c3e50 !important; color: #ecf0f1 !important; border-color: #34495e !important;}
            body.dark-theme .btn-channel i { color: #f1c40f !important; }
            body.dark-theme .btn-channel:hover { background: #34495e !important; border-color: #f1c40f !important; }
            
            /* Tiêu điểm Trang chủ */
            body.dark-theme .hl-content h3 { color: #f1c40f !important; }
            body.dark-theme .hl-image-wrapper { background: radial-gradient(circle, #2c3e50 0%, #1a252f 100%) !important; }
            
            /* Khóa màn hình Đăng nhập */
            body.dark-theme .lock-screen { background: rgba(26, 37, 47, 0.95) !important; }
            body.dark-theme .empty-cart, body.dark-theme .no-reviews { color: #888 !important; }

            /* Nút Toggle Dark Mode */
            .theme-toggle-btn {
                background: none; border: none; cursor: pointer; font-size: 18px; color: #4a6741;
                padding: 5px 10px; display: flex; align-items: center; justify-content: center; min-width: 40px; transition: 0.3s;
            }
            .theme-toggle-btn:hover { transform: scale(1.1) rotate(15deg); color: #d35400; }

            /* --- HIỆU ỨNG LÁ RƠI MÔI TRƯỜNG --- */
            #woodland-env-container {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                pointer-events: none; z-index: 9998; overflow: hidden;
            }
            .woodland-leaf-wrapper {
                position: absolute; top: -10%; user-select: none;
                animation: leaf-fall linear infinite;
                transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .woodland-leaf {
                display: inline-block; animation: leaf-sway ease-in-out infinite alternate;
                filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.15));
            }
            @keyframes leaf-fall { 0% { top: -10%; } 100% { top: 110%; } }
            @keyframes leaf-sway { 0% { transform: translateX(-30px) rotate(-15deg); } 100% { transform: translateX(30px) rotate(45deg); } }
        `;
        document.head.appendChild(style);
    }

    // 2. TẠO HTML CHO HEADER (Bổ sung nút Mặt trăng / Mặt trời)
    const headerHtml = `
        <div class="header-left">
            <button class="menu-btn" onclick="if(window.toggleSidebarMenu) window.toggleSidebarMenu();">
                <span></span><span></span><span></span>
            </button>
        </div>
        <div class="header-center">
            <a href="index.html" class="logo-link">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUasrlZDK2aoQln8Y41Occ8yWOU5hq39ciRQ&s" alt="ROOT Logo" style="height: 40px;">
            </a>
        </div>
        <div class="header-right">
            <nav class="header-nav">
                <a href="index.html" class="nav-item">Trang chủ</a>
                <a href="tong-hop-phe.html" class="nav-item">Tổng hợp phe</a>
                <a href="san-pham.html" class="nav-item">ShopNhaNhimm</a>
                <a href="set-keo.html" class="nav-item" style="color:#d35400;"><i class="fas fa-handshake"></i> Set Kèo</a>
                
                <button class="theme-toggle-btn" onclick="window.toggleDarkMode()" title="Chuyển chế độ Sáng/Tối">
                    <i class="fas fa-moon" id="theme-icon"></i>
                </button>
                <button class="search-btn" onclick="if(window.toggleSearch) window.toggleSearch();" style="background:none; border:none; font-size:18px; color:#4a6741; cursor:pointer;">
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
            <button class="close-sidebar" onclick="if(window.toggleSidebarMenu) window.toggleSidebarMenu();">&times;</button>
        </div>
        <ul class="sidebar-nav">
            <li><a href="index.html">🏠 Trang chủ</a></li>
            <li><a href="tong-hop-phe.html">🐾 Tổng hợp phe</a></li>
            <li><a href="san-pham.html">🛒 Mua sắm</a></li>
            <li><a href="set-keo.html" style="color:#d35400; font-weight:bold;">🤝 Tìm người chơi (Set Kèo)</a></li>
            <li><a href="cong-cu.html">🎲 Công cụ Boardgame</a></li>
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

    // 4. TẠO HTML CHO FOOTER
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
    if (headerEl) {
        headerEl.innerHTML = headerHtml;
        if (!headerEl.classList.contains('index-header')) headerEl.classList.add('index-header');
    }

    const sidebarEl = document.getElementById('left-sidebar');
    if (sidebarEl) sidebarEl.innerHTML = sidebarHtml;

    const footerEl = document.getElementById('global-footer');
    if (footerEl) footerEl.innerHTML = footerHtml;

    // 6. CẬP NHẬT GIỎ HÀNG
    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    const tongSoLuong = gioHang.reduce((total, item) => total + item.soLuong, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = tongSoLuong;

    // 7. KHỞI TẠO DARK MODE (Bộ nhớ cục bộ)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    setTimeout(() => {
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            if (document.body.classList.contains('dark-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    }, 100);

    window.toggleDarkMode = function() {
        const body = document.body;
        const icon = document.getElementById('theme-icon');
        
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    // 8. KHỞI TẠO HIỆU ỨNG LÁ RƠI NÉ CHUỘT
    if (!document.getElementById('woodland-env-container')) {
        const envContainer = document.createElement('div');
        envContainer.id = 'woodland-env-container';
        document.body.appendChild(envContainer);

        const leaves = ['🍂', '🍃', '🍁'];
        const leafCount = 6; 

        for (let i = 0; i < leafCount; i++) {
            let wrapper = document.createElement('div');
            wrapper.className = 'woodland-leaf-wrapper';
            
            let leaf = document.createElement('div');
            leaf.className = 'woodland-leaf';
            leaf.innerText = leaves[Math.floor(Math.random() * leaves.length)];
            
            wrapper.appendChild(leaf);
            
            // Random hóa vị trí và thời gian rơi
            wrapper.style.left = Math.random() * 100 + 'vw';
            wrapper.style.animationDuration = (Math.random() * 10 + 15) + 's'; 
            wrapper.style.animationDelay = (Math.random() * 10) + 's';
            
            leaf.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
            leaf.style.fontSize = (Math.random() * 8 + 14) + 'px';
            leaf.style.opacity = Math.random() * 0.4 + 0.2; 
            
            envContainer.appendChild(wrapper);
        }

        // Tương tác vật lý: Lá dạt ra khi đưa chuột lại gần
        document.addEventListener('mousemove', (e) => {
            const wrappers = document.querySelectorAll('.woodland-leaf-wrapper');
            wrappers.forEach(wrapper => {
                const rect = wrapper.getBoundingClientRect();
                const leafX = rect.left + rect.width / 2;
                const leafY = rect.top + rect.height / 2;
                
                const distX = e.clientX - leafX;
                const distY = e.clientY - leafY;
                const distance = Math.sqrt(distX * distX + distY * distY);
                
                if (distance < 100) {
                    const pushForce = (100 - distance) * 0.5; 
                    const angle = Math.atan2(distY, distX);
                    const pushX = -Math.cos(angle) * pushForce;
                    const pushY = -Math.sin(angle) * pushForce;
                    wrapper.style.transform = `translate(${pushX}px, ${pushY}px)`;
                } else {
                    wrapper.style.transform = 'translate(0px, 0px)';
                }
            });
        });
    }

    // 9. Hàm dự phòng toggle menu
    if (typeof window.toggleSidebarMenu !== 'function') {
        window.toggleSidebarMenu = function() {
            const sb = document.getElementById('left-sidebar');
            const ov = document.getElementById('sidebar-overlay');
            if(sb && ov) {
                sb.classList.toggle('active');
                ov.classList.toggle('active');
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', setupGlobalLayout);