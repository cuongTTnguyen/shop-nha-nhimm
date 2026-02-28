const danhSachSanPham = [
    {
        ten: "Root base",
        tags: ["Board Game"],
        bienTheGia: [
            { nhan: "Real", soTien: "2.000.000đ" },
            { nhan: "Fake", soTien: "850.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "350.000đ" }
        ],
        GioiThieu: "Bộ cơ bản, bắt buộc phải mua nếu bạn chưa có bộ ROOT nào cả.",
        ThanhPhan: "Gồm 4 phe: Nữ Bá Tước Mèo, Vương Triều Tổ Chim, Liên Minh Khu Rừng, Vagabond.",
        anh: "https://ledergames.com/cdn/shop/products/1-RootGameBox-Edit-Web.png?height=1024&v=1595294735",
        anhChiTiet: ["https://ledergames.com/cdn/shop/products/1-RootGameBox-Edit-Web.png?height=1024&v=1595294735", "https://ledergames.com/cdn/shop/products/50-RootBaseGameBoxwGameSetup-Editv2-Web.png?height=1024&v=1617976948"]
    },
    {
        ten: "Root: Riverfolk Expansion",
        tags: ["Mở rộng"],
        bienTheGia: [
            { nhan: "Real", soTien: "1.800.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "350.000đ" }
        ],
        GioiThieu: "<br><strong>Số người chơi:</strong> Tốt nhất cho nhóm đông (5-6 người). <br><strong> Đặc điểm:</strong> Bổ sung 2 phe Insurgents (ít chiếm đóng), giúp ván đấu nhẹ nhàng, ít va chạm trực tiếp. <br><strong>Điểm cộng:</strong> Thêm bảng Vagabond và 3 nhân vật mới (dễ chơi, ít luật mới). Có thêm chế độ đấu với máy (Mèo Máy).",
        ThanhPhan: "Gồm 2 phe mới - Thương Hội Hải Ly, Giáo Phái Thằn Lằn. Bổ sung 1 Vagabond và Mèo máy 1.",
        anh: "https://ledergames.com/cdn/shop/products/20-RootRiverfolkBox-Edit-Web.png?v=1595306138" 
    },
    {
        ten: "Root: Underworld Expansion",
        tags: ["Mở rộng"],
        bienTheGia: [
            { nhan: "Real", soTien: "1.800.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "300.000đ" }
        ],
        GioiThieu: "<br><strong>Số người chơi:</strong> Phù hợp nhóm trung bình (4-5 người). <br><strong> Đặc điểm:</strong> Có Chuột Chũi (Militants) giúp thay thế Mèo/Chim, và Quạ tạo ra nhiều tổ hợp chiến thuật mới. <br><strong>Điểm cộng:</strong> Cực kỳ đáng tiền nhờ có thêm 2 Bản đồ mới và 2 Landmark (Phong cảnh) tạo điểm nhấn cho bàn chơi.",
        ThanhPhan: "Gồm 2 phe mới - Công Quốc Chuột Chũi, Âm Mưu của Bầy Quạ. Bổ sung 2 bản đồ mới và 2 Landmark mới (Phong cảnh).",
        anh: "https://ledergames.com/cdn/shop/products/10-RootUnderworldBox-Edit-Web.png?height=1024&v=1595310452"
    },
    {
        ten: "Root: Marauder Expansion",
        tags: ["Mở rộng"],
        bienTheGia: [
            { nhan: "Real", soTien: "2.000.000đ" },
            { nhan: "Fake", soTien: "1.100.000đ" },
            { nhan: "DIY", soTien: "500.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "350.000đ" }
        ],
        GioiThieu: "<br><strong>Số người chơi:</strong> Tối ưu cho nhóm ít người (3-4 người, thậm chí 2 người). <br><strong> Đặc điểm:</strong> 2 phe mới cực kỳ máu chiến, đẩy nhịp độ trận đấu lên rất cao và tăng tính va chạm. <br><strong>Điểm cộng:</strong> Có thêm cơ chế Hireling (Lính đánh thuê) giúp bàn đấu ít người vẫn nhộn nhịp. Có Advanced Setup giúp cân bằng game tốt hơn.",
        ThanhPhan: "Gồm 2 phe mới - Chúa Tể Tộc Chuột, Binh Đoàn Lửng Sắt. Bổ sung 3 Hireling (lính đánh thuê) và Advanced Setup.",
        anh: "https://ledergames.com/cdn/shop/files/RootMarauderExp-GameBox.png?v=1744138999"
    },
    {
        ten: "Root: Homeland Expansion",
        tags: ["Mở rộng"],
        bienTheGia: [
            { nhan: "Real", soTien: "Chưa ra mắt" },
            { nhan: "Fake", soTien: "Chưa ra mắt" },
            { nhan: "DIY", soTien: "700.000đ" }
        ],
        GioiThieu: "Nên mua khi đã có 1 trong 3 bộ mở rộng",
        ThanhPhan: "Gồm có 3 phe mới - Ếch Bèo Hải Ngoại, Hội Dơi Chạng Vạng, Chồn Sọc Bất Lương. Bổ sung thêm 2 bản đồ mới.",
        anh: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWVROBPgvBljmWHKcP8J1qYpLL_AmoOTgmp7HGXoiuYIXcMA6d"
    },
    {
        ten: "Root: Clockwork 1",
        tags: ["Mở rộng"],
        bienTheGia: [
            { nhan: "Real", soTien: "1.500.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "DIY", soTien: "300.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "300.000đ" }
        ],
        GioiThieu: "Bổ sung thêm cách chơi mới - Co-op đánh máy, Chơi solo, bổ sung thêm người chơi ảo nếu thiếu người.",
        ThanhPhan: "Gồm 4 phe máy móc dựa theo bản base.",
        anh: "https://ledergames.com/cdn/shop/products/17-RootClockworkGameBox-Edit-Web.png?crop=center&height=600&v=1595303856&width=600"
    },
    {
        ten: "Root: Clockwork 2",
        tags: ["Mở rộng"],
        bienTheGia: [
            { nhan: "Real", soTien: "1.500.000đ" },
            { nhan: "DIY", soTien: "300.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "300.000đ" }
        ],
        GioiThieu: "Bổ sung thêm cách chơi mới - Co-op đánh máy, Chơi solo, bổ sung thêm người chơi ảo nếu thiếu người.",
        ThanhPhan: "Gồm 4 phe máy móc dựa theo bản Riverfolk và Underworld (Yêu cầu có các bản mở rộng tương ứng để chơi).",
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUGC9Jr64Q8f1aX0EecgA3ZJL72dFFB4P8Q&s"
    },
    {
        ten: "Root: Hireling",
        tags: ["Pack lẻ"],
        bienTheGia: [
            { nhan: "Real", soTien: "3-4.000.000đ" },
            { nhan: "DIY", soTien: "450.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "65.000đ" }
        ],
        GioiThieu: "Bổ sung thêm Hireling (Lính đánh thuê). Giúp cho nhóm chơi từ 2-3 người trở lên thú vị hơn. Bạn sẽ thuê các chiến binh ngoại lai và họ sẽ chiến đấu, hỗ trợ bạn. Tuy nhiên thời gian thuê có hạn nên nếu hết thời hạn thuê, bạn sẽ phải đưa Hireling bạn thuê cho người khác.",
        ThanhPhan: "Bản này sẽ bao gồm có tổng cộng 4 Pack khác nhau. Mỗi Pack sẽ gồm 3 Hireling (tổng 12 Hireling).",
        anh: "https://ledergames.com/cdn/shop/products/Root_Hirelings-DeluxeBox-RetailWrap_Left_newangle.png?v=1646237750"
    },
    {
        ten: "Landmark (Phong cảnh)",
        tags: ["Pack lẻ"],
        bienTheGia: [
            { nhan: "Real", soTien: "500.000đ" },
            { nhan: "DIY", soTien: "100.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "25.000đ" }
        ],
        GioiThieu: "Bổ sung các mô hình tạo ra sự thay đổi trong 1 vùng đất nhất định. Ví dụ Bè giúp bạn đi trên sông,...",
        ThanhPhan: "Gồm bộ mô hình nhựa cao cấp.",
        anh: "https://cf.geekdo-images.com/VvEGNGf5DoMTjqwdH2aRpg__itemrep/img/XRU0U9crf9Ti5Fvg7sePrZokcqA=/fit-in/246x300/filters:strip_icc()/pic6818641.png"
    },
    {
        ten: "Đánh dấu vùng đất",
        tags: ["Pack lẻ"],
        bienTheGia: [
            { nhan: "Real", soTien: "700.000đ" },
            { nhan: "DIY", soTien: "150.000đ" }
        ],
        GioiThieu: "Các Resin Marker thay thế cho các địa danh trên bản đồ.",
        ThanhPhan: "Gồm bộ mô hình nhựa cao cấp.",
        anh: "https://ledergames.com/cdn/shop/products/40-RootResinMarkerBox-Edit-Web.png?v=1595309176"
    },
    {
        ten: "Root: Vagabond Pack",
        tags: ["Pack lẻ"],
        bienTheGia: [
            { nhan: "Real", soTien: "700.000đ" },
            { nhan: "DIY", soTien: "120.000đ" }
        ],
        GioiThieu: "Bổ sung thêm các vagabond mới, những Pawns của các vagabond cũ để dễ nhìn hơn, đẹp hơn.",
        ThanhPhan: "Bao gồm 3 lá bài Vagabond mới, 7 Pawn, 3 item.",
        anh: "https://images-na.ssl-images-amazon.com/images/I/81iQAv7G86L.jpg"
    },
    {
        ten: "Root: The Exiles and Partisans Deck",
        tags: ["Pack lẻ","Deck"],
        bienTheGia: [
            { nhan: "Real", soTien: "600.000đ" },
            { nhan: "DIY", soTien: "170.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "170.000đ" }
        ],
        GioiThieu: "Gồm 1 bộ bài thay thế hoàn toàn bộ bài chơi gốc, giúp tăng chiến thuật, cân bằng hơn và thay đổi khá nhiều lối chơi của các phe.",
        ThanhPhan: "Bao gồm 1 bộ bài mới.",
        anh: "https://ledergames.com/cdn/shop/products/26-RootExileandPartisanBox-Edit-Web.png?height=1024&v=1595307143"
    },
    {
        ten: "Arcs Base",
        tags: ["Board Game"],
        bienTheGia: [
            { nhan: "Real", soTien: "3.000.000đ" },
            { nhan: "Fake", soTien: "1.300.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "500.000đ" }
        ],
        GioiThieu: "Một trò chơi chiến thuật khoa học viễn tưởng lấy bối cảnh thiên hà đang sụp đổ, nơi người chơi sử dụng cơ chế lấy bài (trick-taking) độc đáo để thực hiện các hành động chiếm đóng và chiến đấu.",
        ThanhPhan: "Gồm bản đồ thiên hà, các lá bài hành động, tàu vũ trụ bằng gỗ, xúc xắc chiến đấu, bảng người chơi và các token tài nguyên.",
        anh: "https://d19y2ttatozxjp.cloudfront.net/wp-content/uploads/2024/11/26211040/Arcs-Game-Box-Right-e1732655528222.png"
    },
    {
        ten: "Arcs: The Blighted Reach Expansion",
        tags: ["Mở rộng"],
        bienTheGia: [
            { nhan: "Real", soTien: "5.000.000đ" },
            { nhan: "Fake", soTien: "2.500.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "1.500.000đ" }
        ],
        GioiThieu: "Bản mở rộng này biến Arcs thành một chiến dịch dài kỳ (campaign) với cốt truyện sâu sắc, nơi các quyết định trong mỗi ván chơi sẽ ảnh hưởng trực tiếp đến bối cảnh của các ván tiếp theo.",
        ThanhPhan: "Bổ sung thêm các cuốn sách luật chiến dịch, bảng số phận nhân vật (fate cards), các mảnh bản đồ mới và hệ thống token chuyên biệt cho chế độ chơi theo cốt truyện.",
        anh: "https://eurekapuzzles.com/cdn/shop/files/59654.png?v=1740008431"
    },
    {
        ten: "Arcs: Leaders and Lore Pack",
        tags: ["Pack lẻ"],
        bienTheGia: [
            { nhan: "Real", soTien: "700.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "250.000đ" }
        ],
        GioiThieu: "Bổ sung các lá bài Leaders và Lore mới cho Arcs giúp game hay hơn, kịch tính hơn, phù hợp cho tụ đã quen Arcs cơ bản.",
        ThanhPhan: "Gồm có các lá bài Leader và Lore mới.",
        anh: "https://static.gamesmen.com.au/media/catalog/product/cache/57ddbad6affa8d28869fa47188b75842/a/r/arcs_leaders_lore_expansion_board_game.jpg"
    },
    {
        ten: "Fort Base",
        tags: ["Board Game"],
        bienTheGia: [
            { nhan: "Real", soTien: "1.300.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "200.000đ" }
        ],
        GioiThieu: "Một trò chơi xây dựng bộ bài (deck-building) nhẹ nhàng với chủ đề trẻ con xây pháo đài, nơi bạn phải chiêu mộ bạn bè và thu thập đồ chơi, bánh pizza để trở thành đứa trẻ ngầu nhất xóm.",
        ThanhPhan: "Bao gồm bộ bài bạn bè, bảng người chơi hai lớp, các token gỗ hình bánh pizza và đồ chơi, cùng các thẻ bài mục tiêu và danh hiệu.",
        anh: "https://ledergames.com/cdn/shop/products/100-FortGameBox-Edit-Web.png?v=1595297967"
    },
    {
        ten: "Fort: Cats & Dogs",
        tags: ["Expansion"],
        bienTheGia: [
            { nhan: "Real", soTien: "1.300.000đ" },
            { nhan: "Fake", soTien: "800.000đ" },
            { nhan: "Lẻ tiếng việt", soTien: "200.000đ" }
        ],
        GioiThieu: "Bổ sung thêm các lá bài Mèo và Chó, thay đổi lối chơi và tính toán trong game.",
        ThanhPhan: "Bao gồm Lá bài Mèo và lá bài Chó mới.",
        anh: "https://ledergames.com/cdn/shop/products/Fort-CaD-Expansion-Box-1000px.png?v=1625837015"
    },
    {
        ten: "Root: Minibox",
        tags: ["Pack lẻ", "Fanmade"],
        bienTheGia: [
            { nhan: "DIY", soTien: "15.000đ/box"}
        ],
        GioiThieu: "Có những hộp nhỏ để đựng thành phần của từng phe riêng biệt, giúp hộp game gọn gàng hơn.",
        ThanhPhan: "Giá chỉ bao gồm 1 box, chọn số lượng và loài để mua.",
        anh: "images/minibox.png"
    },
    {
        ten: "Root: Deck Chính Nghĩa & Ngụy Đạo",
        tags: ["Fanmade", "Deck"],
        bienTheGia: [
            { nhan: "DIY", soTien: "150.000đ"}
        ],
        GioiThieu: "Bộ bài Fanmade nổi tiếng giúp thay đổi lối chơi.",
        ThanhPhan: "Bao gồm 1 bộ bài in chất lượng cao.",
        anh: "images/deckChinhNghiaNguyDao.png"
    },
    {
        ten: "Root: Deck Bình Minh & Hoàng Hôn",
        tags: ["Fanmade", "Deck"],
        bienTheGia: [
            { nhan: "DIY", soTien: "200.000đ"}
        ],
        GioiThieu: "Bộ bài Fanmade nổi tiếng giúp thay đổi lối chơi.",
        ThanhPhan: "Bao gồm 1 bộ bài in chất lượng cao.",
        anh: "images/deckBinhMinhHoangHon.png"
    },
    {
        ten: "Root: Deck Thuật Sư & Rừng Đen",
        tags: ["Fanmade", "Deck"],
        bienTheGia: [
            { nhan: "DIY", soTien: "170.000đ"}
        ],
        GioiThieu: "Bộ bài Fanmade nổi tiếng giúp thay đổi lối chơi.",
        ThanhPhan: "Bao gồm 1 bộ bài in chất lượng cao.",
        anh: "images/deckThuatSuRungDen.png"
    },
    {
        ten: "Root: Deck Tân Binh & Phản Bội",
        tags: ["Fanmade", "Deck"],
        bienTheGia: [
            { nhan: "DIY", soTien: "200.000đ"}
        ],
        GioiThieu: "Bộ bài Fanmade nổi tiếng giúp thay đổi lối chơi.",
        ThanhPhan: "Bao gồm 1 bộ bài in chất lượng cao.",
        anh: "images/deckUpstartsRenegades.png"
    },
    {
        ten: "Root: Dark Deck",
        tags: ["Fanmade", "Deck"],
        bienTheGia: [
            { nhan: "DIY", soTien: "500.000đ"}
        ],
        GioiThieu: "Bộ bài Fanmade nổi tiếng giúp thay đổi lối chơi.",
        ThanhPhan: "Bao gồm 1 bộ bài in chất lượng cao.",
        anh: "images/DarkDeck.png"
    },
    // Các phe Fanmade
    {
        ten: "Root FanFaction: Sứ Đồ Axololt",
        tags: ["Fanmade", "FanFaction"],
        bienTheGia: [
            { nhan: "Bản VIP", soTien: "100.000đ"},            
            { nhan: "Bản thường", soTien: "85.000đ"}

        ],
        GioiThieu: "<br>Tiết lộ lá bài bạn đã chế tạo để làm hành động. <br>Buff cho các phe khác để nhận vp. <br>KHÔNG THỂ chiến đấu.<br><strong>Thích hợp cho: </strong>Ai muốn chơi phe chill để thắng, giúp đỡ mọi người.",
        ThanhPhan: "Bao gồm thành phần và minibox phe Sứ đồ Axolotl.",
        anh: "images/axolotl.png"
    },
    {
        ten: "Root FanFaction: Nam Tước Cá Sấu",
        tags: ["Fanmade", "FanFaction"],
        bienTheGia: [
            { nhan: "Bản VIP", soTien: "200.000đ"},            
            { nhan: "Bản thường", soTien: "150.000đ"}
        ],
        GioiThieu: "<br>Tăng slot xây dựng cho vùng đất.<br>Chiếm đóng đất, đứa nào dám đặt nhà hay token zô là xác định chịu khổ sai bởi quy tắc làm việc.<br>Lên điểm dễ dàng bằng việc cuối lượt rút bao nhiêu lá thì nhận bấy nhiêu VP, nhưng bị giới hạn bởi quy tắc làm việc.<br><strong>Thích hợp cho:</strong> Ai muốn chơi phe đi xây dựng chill chill, chiếm đất mà không cần đổ máu, khiến kẻ thù ngậm ngùi chịu thiệt.",
        ThanhPhan: "Bao gồm thành phần và minibox phe Nam Tước Cá Sấu.",
        anh: "images/CaSau.png"
    },
    {
        ten: "Root FanFaction: Tiên Tri Gật Gù",
        tags: ["Fanmade", "FanFaction"],
        bienTheGia: [
            { nhan: "Bản VIP", soTien: "200.000đ"},            
            { nhan: "Bản thường", soTien: "150.000đ"}
        ],
        GioiThieu: "<br>Thay đổi cách chiến đấu theo mỗi vòng, tạo đột biến cho toàn bản đồ khi chiến đấu.<br>Phe này luôn phòng thủ (lấy xúc xắc nhỏ).<br>Chiến binh mất càng nhiều thì càng mạnh.<br><strong>Thích hợp cho:</strong> Ai muốn chơi phe ít đánh nhau, nhưng thích tạo đột biến. Phá chiến thuật cực mạnh khi thay đổi lối chiến đấu.",
        ThanhPhan: "Bao gồm thành phần và minibox phe Tiên Tri Gật Gù.",
        anh: "images/Koala.png"
    },
    {
        ten: "Root FanFaction: Đấu Trường Chân Lý (TFT)",
        tags: ["Fanmade", "FanFaction"],
        bienTheGia: [
            { nhan: "Bản VIP", soTien: "250.000đ"},            
            { nhan: "Bản thường", soTien: "200.000đ"}
        ],
        GioiThieu: "<br>Có các điểm độc đáo của thể loại game Auto chess.<br>Chiến binh chiêu mộ khắp nơi.<br>Cơ chế thăng cấp: 2 chiến binh 1 sao -> 1 chiến binh 2 sao.<br>Mỗi chiến binh 2-3 sao có skill riêng.<br>Chiến binh chết sẽ đặt lại bản đồ trong lượt sau.<br><strong>Thích hợp cho:</strong> Ai muốn chơi phe đánh nhau lẻ tẻ, gây khó chịu phe khác. Ai thích thể loại game Auto chess.",
        ThanhPhan: "Bao gồm thành phần và minibox phe Đấu Trường Chân Lý.",
        anh: "images/TFT.png"
    },
    {
        ten: "Root FanFaction: Đảng Phái Nhím Bờm",
        tags: ["Fanmade", "FanFaction"],
        bienTheGia: [
            { nhan: "Bản VIP", soTien: "250.000đ"},            
            { nhan: "Bản thường", soTien: "200.000đ"}
        ],
        GioiThieu: "<br>Điều khiển 1 lúc 2 loại chiến binh khác nhau (trắng và đen).<br>Trắng: là của tất cả phe phòng thủ, VP chạy ngược từ 30 về 0. Có các token buff cho phe phòng thủ.trừ điểm càng nhanh càng tốt.<br>Đen: Cố gắng xây nhà để lấy VP.<br>Khi VP trắng = đen: bỏ VP trắng, buff điểm cho VP đen. Từ giờ Trắng chỉ buff cho Đen, không cho mọi người.Cơ chế đặt chiến binh lên bảng chơi vào lá bài hành động nào, sau đó mới được làm hành động đó. <br>Thứ tự hành động thay đổi, vừa ép phải làm như chim nhưng có thể thay đổi thứ tự <br><strong>Thích hợp cho:</strong> Ai muốn thử phe độ phức tạp cao, cân bằng cả 2 phe 1 lúc.Ai muốn phe siêu độc đáo.",
        ThanhPhan: "Bao gồm thành phần và minibox phe Đảng Phái Nhím Bờm.",
        anh: "images/Nhim.png"
    }
];

function hienThiTheoLoai(tagCanLoc = 'tat-ca') {
    const container = document.getElementById('product-grid');
    let htmlContent = "";
    let currentProduct = null;

    const danhSachDaLoc = tagCanLoc === 'tat-ca' 
        ? danhSachSanPham 
        : danhSachSanPham.filter(sp => sp.tags.includes(tagCanLoc));

    danhSachDaLoc.forEach((sp) => {
        let giaHTML = "";
        sp.bienTheGia.forEach(g => {
            let colorClass = g.nhan.toLowerCase()
                            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Lệnh loại bỏ dấu Tiếng Việt
                            .replace(/đ/g, "d")
                            .replace(/\s+/g, '-');
            giaHTML += `
                <div class="price-row">
                    <span class="price-label ${colorClass}">${g.nhan}</span>
                    <span class="price-value">${g.soTien}</span>
                </div>
            `;
        });
        let tagsHTML = sp.tags.map(t => `<span class="category">${t}</span>`).join(' ');

        htmlContent += `
            <div class="product-card">
                <img src="${sp.anh}" alt="${sp.ten}" 
                    onclick="openModal('${sp.ten.replace(/'/g, "\\'")}')" 
                    style="cursor:pointer">
                
                <div class="product-info">
                    <div onclick="openModal('${sp.ten.replace(/'/g, "\\'")}')" style="cursor:pointer">
                        <div class="tag-container">${tagsHTML}</div>
                        <h3>${sp.ten}</h3>
                        <div class="price-container">${giaHTML}</div>
                    </div>

                    <button class="btn-buy" 
                            onclick="event.stopPropagation(); openConfigModal('${sp.ten.replace(/'/g, "\\'")}')">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

function locSanPham(tag) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === tag || (tag === 'tat-ca' && btn.innerText === 'Tất cả')) {
            btn.classList.add('active');
        }
    });

    hienThiTheoLoai(tag);
}

let currentProduct = null;
let selectedLang = "Tiếng Việt";

function openModal(tenSp) {
    const sp = danhSachSanPham.find(item => item.ten === tenSp);
    if (!sp) return;
    
    currentProduct = sp;
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');
    const dsAnh = sp.anhChiTiet || [sp.anh];

    let thumbHTML = '';
    dsAnh.forEach((imgSrc, index) => {
        thumbHTML += `
            <img src="${imgSrc}" 
                 class="thumb-img ${index === 0 ? 'active' : ''}" 
                 onclick="changeMainImage(this, '${imgSrc}')"
                 alt="thumbnail">
        `;
    });
    let variantHTML = '';
    sp.bienTheGia.forEach((bt, index) => {
        variantHTML += `
            <button class="variant-btn ${index === 0 ? 'active' : ''}" 
                    onclick="selectVariant(this, '${bt.nhan}', '${bt.soTien}')">
                ${bt.nhan}: ${bt.soTien.toLocaleString()}đ
            </button>
        `;
    });
    
    // Gán biến thể mặc định là cái đầu tiên
    currentProduct.selectedVariant = sp.bienTheGia[0];

    body.innerHTML = `
        <div class="modal-flex-container">
            <div class="modal-left">
                <div class="main-image-container">
                    <img src="${sp.anh}" alt="${sp.ten}" id="config-img" class="main-display-img" onclick="openFullscreen()">
                </div>
                <div class="thumbnail-container">
                    ${thumbHTML}
                </div>
            </div>

            <div class="modal-right">
                <h2>${sp.ten}</h2>
                <div class="modal-info-scroll">
                    <div class="info-section">
                        <p><strong>Giới thiệu:</strong> ${sp.GioiThieu}</p>
                        <p><strong>Thành phần:</strong> ${sp.ThanhPhan}</p>
                    </div>
                    
                    <hr style="border: 0; border-top: 1px dashed #ddd; margin: 15px 0;">

                    <div class="config-section">
                        <p><strong>Ngôn ngữ:</strong></p>
                        <div class="language-options">
                            <button class="lang-btn active" onclick="selectLanguage(this, 'Tiếng Việt')">Tiếng Việt</button>
                            <button class="lang-btn" onclick="selectLanguage(this, 'Tiếng Anh')">Tiếng Anh</button>
                        </div>
                    </div>

                    <div class="config-section">
                        <p><strong>Loại hàng:</strong></p>
                        <div id="config-variants" class="variant-options">
                            ${variantHTML}
                        </div>
                    </div>

                    <div class="config-section">
                        <p><strong>Số lượng:</strong></p>
                        <div class="q-btns">
                            <button class="qty-btn" onclick="changeQty(-1)">-</button>
                            <input type="number" id="config-qty" value="1" min="1" readonly 
                                   style="width: 50px; text-align: center; border:none; font-weight:bold;">
                            <button class="qty-btn" onclick="changeQty(1)">+</button>
                        </div>
                    </div>
                </div>

                <div class="modal-footer-action">
                    <button class="btn-confirm-add" onclick="confirmAddToCart()">
                        🛒 THÊM VÀO GIỎ HÀNG
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = "block";
    document.body.classList.add('modal-open');
}
function changeMainImage(el, imgSrc) {
    // Đổi link ảnh chính
    document.getElementById('config-img').src = imgSrc;
    
    // Xử lý class active cho ảnh nhỏ
    document.querySelectorAll('.thumb-img').forEach(img => img.classList.remove('active'));
    el.classList.add('active');
}

function closeModal() {
    document.getElementById('product-modal').style.display = "none";
    document.body.classList.remove('modal-open');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(); 
        closeConfigModal();
    }
}

function selectVariant(el, nhan, gia) {
    document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    currentProduct.selectedVariant = { nhan, soTien: gia };
}

function selectLanguage(el, lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
    selectedLang = lang;
}

function changeQty(num) {
    let input = document.getElementById('config-qty');
    let val = parseInt(input.value) + num;
    if (val >= 1) input.value = val;
}

function confirmAddToCart() {
    if (!currentProduct || !currentProduct.selectedVariant) return;

    const qty = parseInt(document.getElementById('config-qty').value);
    const cartItem = {
        ten: currentProduct.ten,
        loai: currentProduct.selectedVariant.nhan,
        ngonNgu: selectedLang,
        gia: currentProduct.selectedVariant.soTien,
        soLuong: qty,
        anh: currentProduct.anh
    };

    let gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = gioHang.findIndex(i => 
        i.ten === cartItem.ten && i.loai === cartItem.loai && i.ngonNgu === cartItem.ngonNgu
    );
    
    if (existingIndex > -1) {
        gioHang[existingIndex].soLuong += qty;
    } else {
        gioHang.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(gioHang));
    closeModal(); // Đóng modal gộp
    updateCartCount();

    // Hiệu ứng rung icon giỏ hàng
    const cartIcon = document.querySelector('.cart-icon-container');
    if (cartIcon) {
        cartIcon.classList.add('cart-shake');
        setTimeout(() => cartIcon.classList.remove('cart-shake'), 500);
    }
}
function openFullscreen() {
    const mainImg = document.getElementById('config-img'); // Lấy ảnh đang hiển thị ở popup
    const fullModal = document.getElementById('fullscreen-modal');
    const fullImg = document.getElementById('img-full');

    if (mainImg && fullModal && fullImg) {
        fullModal.style.display = "flex";
        fullImg.src = mainImg.src; // Lấy nguồn từ ảnh hiện tại
        document.body.style.overflow = "hidden"; // Chặn cuộn trang nền
    }
}

// Hàm đóng ảnh toàn màn hình
function closeFullscreen() {
    const fullModal = document.getElementById('fullscreen-modal');
    if (fullModal) {
        fullModal.style.display = "none";
        document.body.style.overflow = "auto"; // Mở lại cuộn trang
    }
}

function updateCartCount() {
    const gioHang = JSON.parse(localStorage.getItem('cart')) || [];
    const tongSoLuong = gioHang.reduce((total, item) => total + item.soLuong, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = tongSoLuong;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.cart-icon-container');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = 'gio-hang.html';
        });
    }
});
window.addEventListener('load', () => {
    hienThiTheoLoai('tat-ca');
    updateCartCount();
});
window.onload = () => hienThiTheoLoai('tat-ca');