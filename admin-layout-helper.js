document.addEventListener('DOMContentLoaded', () => {
    // 1. CHÈN CSS CHO HIỆU ỨNG ẨN/HIỆN SIDEBAR
    if (!document.getElementById('admin-sidebar-styles')) {
        const style = document.createElement('style');
        style.id = 'admin-sidebar-styles';
        style.innerHTML = `
            /* Chuyển động mượt mà cho sidebar và phần nội dung */
            .admin-sidebar {
                transition: transform 0.3s ease;
            }
            .admin-main {
                transition: margin-left 0.3s ease, width 0.3s ease;
            }
            /* Trạng thái khi bị ẩn */
            .admin-sidebar.is-hidden {
                transform: translateX(-100%);
            }
            .admin-main.is-expanded {
                margin-left: 0 !important;
                width: 100% !important;
            }
            /* Nút thu gọn nằm góc trên cùng bên phải của Sidebar */
            .btn-hide-sidebar {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(255,255,255,0.1);
                color: #bdc3c7;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 5px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.3s;
                z-index: 10;
            }
            .btn-hide-sidebar:hover {
                background: #e74c3c;
                color: white;
            }
            /* Nút menu nổi hiện ra khi Sidebar bị ẩn để có thể gọi lại */
            .btn-show-sidebar {
                position: fixed;
                top: 15px;
                left: 15px;
                background: #2c3e50;
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 8px;
                cursor: pointer;
                z-index: 999;
                display: none;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                font-size: 18px;
                transition: 0.3s;
            }
            .btn-show-sidebar:hover {
                background: #4a6741;
            }
            .btn-show-sidebar.is-visible {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(style);
    }

    // 2. TÌM THẺ CHỨA VÀ CHÈN GIAO DIỆN VÀO
    const sidebarContainer = document.getElementById('global-admin-sidebar');
    
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
            <!-- Nút nổi gọi lại menu khi đã bị ẩn -->
            <button id="btn-show-menu" class="btn-show-sidebar" onclick="window.toggleAdminSidebar()" title="Mở lại Menu"><i class="fas fa-bars"></i></button>

            <aside class="admin-sidebar" id="admin-sidebar-panel">
                <!-- Nút ẩn menu góc trên phải -->
                <button class="btn-hide-sidebar" onclick="window.toggleAdminSidebar()" title="Thu gọn Menu"><i class="fas fa-angle-double-left"></i></button>
                
                <div class="admin-logo">
                    <i class="fas fa-crown"></i> ADMIN NHÀ NHIMM
                </div>
                <nav class="admin-nav">
                    <a href="admin-don-hang.html" class="admin-nav-item">
                        <i class="fas fa-shopping-bag"></i> Quản lý Đơn hàng
                    </a>
                    <a href="admin-them-phe.html" class="admin-nav-item">
                        <i class="fas fa-paw"></i> Thông tin Phe Phái
                    </a>
                    <a href="admin-san-pham.html" class="admin-nav-item">
                        <i class="fas fa-box-open"></i> Thông tin Sản Phẩm
                    </a>
                    <a href="admin-thanh-phan.html" class="admin-nav-item">
                        <i class="fas fa-puzzle-piece"></i> Cấu trúc Thành phần
                    </a>
                    <a href="admin-soan-don.html" class="admin-nav-item">
                        <i class="fas fa-tasks"></i> Bảng Soạn Đơn
                    </a>
                    <a href="admin-tai-khoan.html" class="admin-nav-item">
                        <i class="fas fa-users-cog"></i> <span>Quản lý Tài Khoản</span>
                    </a>
                    <a href="admin-set-keo.html" class="admin-nav-item">
                        <i class="fas fa-handshake"></i> Quản lý set kèo
                    </a>
                    <a href="admin-quay.html" class="admin-nav-item">
                        <i class="fas fa-dharmachakra"></i> Quản lý vòng quay
                    </a>
                    <a href="index.html" class="admin-nav-item" style="margin-top: auto; border-top: 1px solid #34495e;">
                        <i class="fas fa-home"></i> Trở về Cửa hàng
                    </a>
                </nav>
            </aside>
        `;

        // 3. Tự động nhận diện trang hiện tại để làm nổi bật (Thêm class 'active')
        const currentPath = window.location.pathname.split('/').pop() || 'admin-don-hang.html';
        const navItems = sidebarContainer.querySelectorAll('.admin-nav-item');
        
        navItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});

// 4. HÀM TOÀN CỤC ĐỂ XỬ LÝ BẬT/TẮT MENU
window.toggleAdminSidebar = function() {
    const sidebar = document.getElementById('admin-sidebar-panel');
    const mainContent = document.querySelector('.admin-main');
    const showBtn = document.getElementById('btn-show-menu');
    
    if (sidebar && mainContent && showBtn) {
        // Đảo ngược trạng thái các class
        sidebar.classList.toggle('is-hidden');
        mainContent.classList.toggle('is-expanded');
        showBtn.classList.toggle('is-visible');
    }
};