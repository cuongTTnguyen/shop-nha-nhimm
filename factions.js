// 1. Danh sách dữ liệu các phe phái
const danhSachPhe = [
    {
        ten: "Nữ Bá Tước Mèo",
        tags: ["Goc"],
        anh: "images/factionImage/nu-ba-tuoc-meo.png",
        taoBoi: "Cole Wehrle",
        minhHoa: "Kyle Ferrin"
    },
    {
        ten: "Vương Triều Tổ Chim",
        tags: ["Goc"],
        anh: "images/factionImage/vuong-trieu-to-chim.png",
        taoBoi: "Cole Wehrle",
        minhHoa: "Kyle Ferrin"
    },
    {
        ten: "Liên Minh Khu Rừng",
        tags: ["Goc"],
        anh: "images/factionImage/lien-minh-khu-rung.png",
        taoBoi: "Cole Wehrle",
        minhHoa: "Kyle Ferrin"
    },
    {
        ten: "Vagabond",
        tags: ["Goc"],
        anh: "images/factionImage/vagabond.png",
        taoBoi: "Cole Wehrle",
        minhHoa: "Kyle Ferrin"
    },
    {
        ten: "Đấu Trường Chân Lý",
        tags: ["Fanmade"],
        anh: "images/factionImage/dau-truong-chan-ly.png",
        taoBoi: "Cường Nguyễn",
        minhHoa: "Shop Nhà Nhimm"
    },
    {
        ten: "Nam Tước Cá Sấu",
        tags: ["Fanmade"],
        anh: "images/factionImage/nam-tuoc-ca-sau.png",
        taoBoi: "Cường Nguyễn",
        minhHoa: "Shop Nhà Nhimm"
    },
    {
        ten: "Tiên Tri Gật Gù",
        tags: ["Fanmade"],
        anh: "images/factionImage/tien-tri-gat-gu.png",
        taoBoi: "Cường Nguyễn",
        minhHoa: "Shop Nhà Nhimm"
    },
    {
        ten: "Đảng Phái Nhím Bờm",
        tags: ["Fanmade"],
        anh: "images/factionImage/dang-phai-nhim-bom.png",
        taoBoi: "Cường Nguyễn",
        minhHoa: "Shop Nhà Nhimm"
    }
    
];

function xoaDauTiengViet(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")          
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-"); 
}

window.xemChiTietPhe = function(tenPhe) {
   
    const slug = xoaDauTiengViet(tenPhe);
    
    window.location.href = `faction/${slug}.html`;
};

window.hienThiPhe = function(tagCanLoc = 'tat-ca') {
    const container = document.getElementById('product-grid');
    if (!container) return;

    const danhSachDaLoc = tagCanLoc === 'tat-ca' 
        ? danhSachPhe 
        : danhSachPhe.filter(phe => phe.tags.includes(tagCanLoc));

    let htmlContent = "";

    danhSachDaLoc.forEach((phe) => {
        let tagClass = phe.tags.includes("Goc") ? "real" : "fake";
        let displayTagName = phe.tags.includes("Goc") ? "Gốc" : "Fanmade";

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
                        <i class="fas fa-hammer"></i> <strong>Tạo bởi:</strong> ${phe.taoBoi}
                    </div>
                    <div style="font-size: 13px; color: #666; margin-bottom: 15px;">
                        <i class="fas fa-paint-brush"></i> <strong>Minh họa:</strong> ${phe.minhHoa}
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

window.locSanPham = function(tag) {
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
    const filtered = danhSachPhe.filter(phe => 
        phe.ten.toLowerCase().includes(input) || 
        phe.moTa.toLowerCase().includes(input)
    );
    
    const container = document.getElementById('product-grid');
    if (!container) return;

    let htmlContent = "";
    filtered.forEach((phe) => {
        let tagClass = phe.tags.includes("Goc") ? "real" : "fake";
        htmlContent += `
            <div class="product-card">
                <img src="${phe.anh}" alt="${phe.ten}" onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')" style="cursor:pointer">
                <div class="product-info">
                    <span class="price-label ${tagClass}">${phe.tags[0] === 'Goc' ? 'Gốc' : 'Fanmade'}</span>
                    <h3 onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')" style="cursor:pointer; margin-top:10px;">${phe.ten}</h3>
                    <div style="font-size: 12px; color:#666;"><i class="fas fa-hammer"></i> ${phe.taoBoi}</div>
                    <button class="btn-buy" style="margin-top: 15px; background:#4a6741; color:white; border:none; padding:8px; border-radius:5px; width:100%;" onclick="xemChiTietPhe('${phe.ten.replace(/'/g, "\\'")}')">Xem chi tiết</button>
                </div>
            </div>`;
    });
    container.innerHTML = htmlContent;
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-grid')) {
        window.hienThiPhe('tat-ca');
    }
});