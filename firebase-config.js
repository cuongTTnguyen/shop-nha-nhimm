// Import các công cụ cần thiết từ máy chủ Google (Sử dụng phiên bản Module hiện đại)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Chìa khóa Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyApRi3KOcuCyN_RH9gNl2g17f03_D5t_l0",
    authDomain: "rootvn-3eeca.firebaseapp.com",
    projectId: "rootvn-3eeca",
    storageBucket: "rootvn-3eeca.firebasestorage.app",
    messagingSenderId: "92355209659",
    appId: "1:92355209659:web:0ed0e8a38118e86ea63c9e",
    measurementId: "G-5P1GKG6TTT"
};

// Khởi chạy Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Xuất các công cụ này ra để các trang khác (Đăng nhập, Giỏ hàng) có thể gọi ra dùng
export { 
    app, auth, db, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
};