document.addEventListener('DOMContentLoaded', () => {
    // Tìm thẻ có ID là global-admin-sidebar để chèn menu vào
    const sidebarContainer = document.getElementById('global-admin-sidebar');
    
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
            <aside class="admin-sidebar">
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
                        <i class="fas fa-tasks"></i> Quản lý set kèo
                    </a>
                    <a href="admin-quay.html" class="admin-nav-item">
                        <i class="fas fa-tasks"></i> Quản lý vòng quay
                    </a>
                    <a href="index.html" class="admin-nav-item" style="margin-top: auto; border-top: 1px solid #34495e;">
                        <i class="fas fa-home"></i> Trở về Cửa hàng
                    </a>
                </nav>
            </aside>
        `;

        // Tự động nhận diện trang hiện tại để làm nổi bật (Thêm class 'active')
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