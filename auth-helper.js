import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyApRi3KOcuCyN_RH9gNl2g17f03_D5t_l0",
    authDomain: "rootvn-3eeca.firebaseapp.com",
    projectId: "rootvn-3eeca",
    storageBucket: "rootvn-3eeca.firebasestorage.app",
    messagingSenderId: "92355209659",
    appId: "1:92355209659:web:0ed0e8a38118e86ea63c9e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Chạy tự động kiểm tra đăng nhập trên mọi trang có nhúng file này
document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, (user) => {
        // Nút ở trên Header ngang
        const authBtn = document.getElementById('nav-auth-btn');
        // Nút ở trong Menu dọc (Sidebar)
        const sidebarAuthBtn = document.getElementById('sidebar-auth-btn');

        if (user) {
            // Đã đăng nhập: Hiện "Tài khoản của tôi" và dẫn link về trang cá nhân
            if (authBtn) {
                authBtn.innerHTML = '<i class="fas fa-user-circle"></i> Tài khoản của tôi';
                authBtn.href = "tai-khoan.html";
            }
            if (sidebarAuthBtn) {
                sidebarAuthBtn.innerHTML = '<i class="fas fa-user-circle"></i> Tài khoản của tôi';
                sidebarAuthBtn.href = "tai-khoan.html";
            }
        } else {
            // Chưa đăng nhập: Hiện "Đăng nhập" và dẫn link về trang đăng nhập
            if (authBtn) {
                authBtn.innerHTML = '<i class="fas fa-user-circle"></i> Đăng nhập';
                authBtn.href = "dang-nhap.html";
            }
            if (sidebarAuthBtn) {
                sidebarAuthBtn.innerHTML = '<i class="fas fa-user-circle"></i> Đăng nhập / Đăng ký';
                sidebarAuthBtn.href = "dang-nhap.html";
            }
        }
    });
});