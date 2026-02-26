function toggleSidebarMenu() {
    const sidebar = document.getElementById('left-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Khóa cuộn trang khi mở menu
    document.body.classList.toggle('modal-open');
}

// Hàm đóng/mở Menu con (Luật chơi)
function toggleSubmenu(element) {
    const parent = element.parentElement;
    parent.classList.toggle('open');
}