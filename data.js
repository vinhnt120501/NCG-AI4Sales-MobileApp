/* AI4Sales Mobile — dữ liệu nhúng (sinh từ AI4Sales/data, không sửa tay).
   14 bệnh · 19 sản phẩm · 4 NPP · 22 cảnh báo · 58 tỉnh · 4 chương trình KM. */
window.DB = {
  "diseases": [
    {
      "id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "ten_khoa_hoc": "African Swine Fever - virus ASFV",
      "vat_nuoi": "heo",
      "tac_nhan": "Virus ASFV (họ Asfarviridae, ADN sợi đôi, hơn 24 genotype)",
      "trieu_chung": [
        "sốt cao 40.5-42 độ",
        "bỏ ăn",
        "da tai bụng đỏ tím",
        "xuất huyết",
        "nằm chồng đống",
        "chết nhanh",
        "tỷ lệ chết cao",
        "nôn hoặc tiêu chảy có máu",
        "đi loạng choạng"
      ],
      "chan_doan": "Sốt rất cao, da đỏ tím vùng tai-bụng-đùi, heo chết nhanh hàng loạt với tỷ lệ chết gần 100% - nghi Dịch tả lợn châu Phi (ASF).",
      "chan_doan_phan_biet": "Cần phân biệt với Dịch tả heo cổ điển (CSF), Tai xanh (PRRS) và Tụ huyết trùng cấp; ba bệnh đầu đều gây sốt + xuất huyết nên chỉ PCR mới xác chẩn chắc chắn.",
      "muc_do": "nguy_hiem",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "4-19 ngày; thể cấp tính thường bộc lộ triệu chứng sau 4-7 ngày.",
      "duong_lay": "Tiếp xúc trực tiếp heo bệnh - heo khỏe; gián tiếp qua thức ăn thừa chứa virus, phương tiện - dụng cụ - quần áo người, và ve mềm Ornithodoros. Virus đề kháng rất cao, tồn tại nhiều tháng trong thịt đông lạnh và môi trường.",
      "co_che_benh_sinh": "ASFV nhân lên chủ yếu trong đại thực bào và bạch cầu đơn nhân, phá hủy hệ liên võng nội mô gây rối loạn đông máu (DIC), xuất huyết lan tỏa, giảm bạch cầu và suy đa cơ quan.",
      "benh_tich": "Lách sưng to nhồi huyết (dấu hiệu chỉ điểm), hạch lympho xuất huyết trông như cục máu đông, thận xuất huyết điểm như đầu đinh ghim, dịch fibrin trong xoang ngực - bụng.",
      "xet_nghiem": "Xác chẩn bằng Real-time PCR phát hiện ADN ASFV (mẫu máu EDTA, lách, hạch). ELISA/IFA tìm kháng thể với heo sống qua giai đoạn cấp. PCR đa mồi giúp loại trừ CSF/PRRS.",
      "ty_le_mac_chet": "Thể cấp tính độc lực cao: tỷ lệ mắc trong ô chuồng có thể tới 100%, tỷ lệ chết 90-100% trong 7-10 ngày.",
      "dich_te": "Lưu hành tại Việt Nam từ 2019; tiếp tục xuất hiện ổ dịch rải rác giai đoạn 2024-2025, tập trung ở hộ chăn nuôi nhỏ có an toàn sinh học thấp và vào thời điểm chuyển mùa, vận chuyển nhiều.",
      "chi_so_canh_bao": "Cảnh báo sớm: cụm heo bỏ ăn theo từng ô, sốt 40.5-42°C, tỷ lệ chết tăng dần theo ngày, da đỏ tím vùng tai - bụng. Khi 2-3 dấu hiệu này xuất hiện cùng lúc → lấy mẫu PCR ngay, không chờ.",
      "buoc_xu_ly": "KHÔNG có thuốc đặc trị. Cách ly ngay heo nghi bệnh và khoanh vùng ô chuồng; báo thú y - chính quyền địa phương; lấy mẫu máu/lách gửi xét nghiệm PCR; tiêu hủy theo quy định và chôn lấp đúng kỹ thuật; tổng vệ sinh - sát trùng toàn trại 1-2 lần/ngày, kiểm soát chặt người và phương tiện ra vào; rà soát và tiêm phòng vaccine ASF cho heo khỏe trong vùng theo chỉ đạo thú y; bổ sung điện giải - vitamin nâng đề kháng cho đàn khỏe.",
      "vaccine_phong": "VX01",
      "san_pham_lien_quan": [
        "VX01",
        "ST01",
        "TP05",
        "BT01"
      ],
      "thong_tin_thi_truong": "ASF vẫn diễn biến phức tạp tại Việt Nam 2025; một ổ dịch có thể xóa sổ cả đàn, đẩy giá heo hơi biến động mạnh. Việt Nam đã thương mại hóa vaccine ASF (NAVET-ASFVAC của Navetco, AVAC ASF LIVE) nhưng độ phủ tới hộ chăn nuôi còn thấp - dư địa tư vấn vaccine + bộ sát trùng an toàn sinh học còn rất lớn.",
      "can_chuyen_gia": true
    },
    {
      "id": "D02",
      "ten_benh": "Dịch tả heo cổ điển (CSF)",
      "ten_khoa_hoc": "Classical Swine Fever - virus CSFV",
      "vat_nuoi": "heo",
      "tac_nhan": "Virus CSFV (giống Pestivirus, họ Flaviviridae)",
      "trieu_chung": [
        "sốt cao",
        "bỏ ăn",
        "da xuất huyết",
        "táo bón rồi tiêu chảy",
        "tụ tập đứng run",
        "mắt có dử",
        "chết nhanh"
      ],
      "chan_doan": "Sốt cao, xuất huyết da, heo ủ rũ tụ đống, chết nhanh - nghi Dịch tả heo cổ điển (CSF).",
      "chan_doan_phan_biet": "Phân biệt với ASF (CSF đáp ứng vaccine rất tốt, diễn biến có thể chậm hơn và có thể ở thể mạn); cần PCR/ELISA để tách khỏi ASF khi chết nhanh.",
      "muc_do": "nang",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "2-14 ngày, trung bình 5-7 ngày.",
      "duong_lay": "Chủ yếu qua đường miệng - mũi do tiếp xúc heo bệnh, dịch tiết, thức ăn - nước nhiễm; có thể truyền qua nhau thai từ nái sang bào thai (thể bẩm sinh).",
      "co_che_benh_sinh": "Virus hướng nội mô mạch máu và mô lympho, gây giảm bạch cầu - tiểu cầu, viêm nội mạc và xuất huyết đa cơ quan; thể mạn gây suy giảm miễn dịch kéo dài.",
      "benh_tich": "Xuất huyết điểm ở thận (\"thận trứng gà tây\"), nhồi huyết rìa lách, loét hình cúc áo ở van hồi manh tràng, hạch xuất huyết viền.",
      "xet_nghiem": "RT-PCR phát hiện ARN CSFV, ELISA kháng nguyên/kháng thể; cần xét nghiệm phân biệt ASF khi dịch tễ chồng lấn.",
      "ty_le_mac_chet": "Thể cấp tính độc lực cao: tỷ lệ chết 80-100% ở heo chưa tiêm phòng; đàn được tiêm đầy đủ gần như không phát bệnh.",
      "dich_te": "Được kiểm soát tốt ở vùng tiêm phòng đầy đủ nhờ vaccine nhược độc giá rẻ, hiệu lực cao; nguy cơ còn lại nằm ở đàn bỏ sót lịch tiêm hoặc heo con mất miễn dịch mẹ truyền.",
      "chi_so_canh_bao": "Cảnh báo sớm: heo sốt + tụ đống run rẩy, kết mạc viêm có dử, táo bón chuyển tiêu chảy ở đàn chưa tiêm hoặc tiêm không đủ mũi.",
      "buoc_xu_ly": "Không có thuốc đặc trị virus. Cách ly, báo thú y, siết an toàn sinh học và sát trùng; phòng chủ động bằng vaccine CSF theo lịch; điều trị hỗ trợ hạ sốt và dùng kháng sinh chống nhiễm khuẩn kế phát cho heo còn khỏe; bổ sung điện giải - vitamin.",
      "vaccine_phong": "VX02",
      "san_pham_lien_quan": [
        "VX02",
        "TP05",
        "ST01",
        "BT01"
      ],
      "thong_tin_thi_truong": "CSF được kiểm soát tốt nhờ vaccine phổ biến giá rẻ; thông điệp tư vấn xoay quanh tuân thủ đủ lịch tiêm và đúng thời điểm để tránh khoảng trống miễn dịch ở heo con - cơ hội bán vaccine định kỳ ổn định.",
      "can_chuyen_gia": true
    },
    {
      "id": "D03",
      "ten_benh": "Hội chứng rối loạn hô hấp và sinh sản (Tai xanh - PRRS)",
      "ten_khoa_hoc": "Porcine Reproductive and Respiratory Syndrome",
      "vat_nuoi": "heo",
      "tac_nhan": "Virus PRRSV (giống Arterivirus, 2 type Bắc Mỹ và châu Âu)",
      "trieu_chung": [
        "sốt",
        "tai chuyển xanh tím",
        "khó thở",
        "nái sảy thai",
        "đẻ non",
        "heo con yếu",
        "bỏ ăn"
      ],
      "chan_doan": "Tai tím xanh, rối loạn hô hấp ở heo thịt và sảy thai ở nái - nghi Tai xanh (PRRS).",
      "chan_doan_phan_biet": "Phân biệt với ASF/CSF; PRRS đặc trưng bởi rối loạn sinh sản ở nái và thường mở đường cho kế phát vi khuẩn (suyễn, APP, tụ huyết trùng).",
      "muc_do": "nang",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "Hô hấp 3-7 ngày; rối loạn sinh sản có thể biểu hiện sau 1-4 tuần.",
      "duong_lay": "Qua dịch tiết hô hấp, tinh dịch (heo đực giống), tiếp xúc và khí dung trong khoảng cách gần; virus biến đổi kháng nguyên nhanh nên khó tạo miễn dịch chéo.",
      "co_che_benh_sinh": "PRRSV nhân lên trong đại thực bào phế nang, làm suy giảm miễn dịch tại phổi, mở đường cho bội nhiễm vi khuẩn; ở nái virus qua nhau thai gây chết phôi - thai.",
      "benh_tich": "Phổi viêm kẽ lan tỏa không xẹp, hạch sưng; nái sảy thai thai gỗ/thai chết lưu nhiều kích cỡ.",
      "xet_nghiem": "RT-PCR (máu, dịch miệng - oral fluid) định type; ELISA giám sát kháng thể đàn; giải trình tự ORF5 để truy vết chủng.",
      "ty_le_mac_chet": "Tỷ lệ chết heo thịt thường thấp - vừa nhưng thiệt hại nặng do giảm tăng trọng và sảy thai; bùng dịch cấp có thể chết 10-20%.",
      "dich_te": "Lưu hành rộng quanh năm, gây thiệt hại âm thầm qua giảm năng suất sinh sản và chi phí kháng sinh kế phát; là một trong các bệnh tốn kém nhất của ngành heo.",
      "chi_so_canh_bao": "Cảnh báo sớm: nái tăng tỷ lệ sảy thai/đẻ non bất thường, heo con sơ sinh yếu, heo thịt ho - khó thở cụm theo ô kèm tai tím từng đợt.",
      "buoc_xu_ly": "Không đặc trị virus. Phòng chủ động bằng vaccine PRRS phù hợp chủng lưu hành; ổn định đàn nái và kiểm soát di chuyển; dùng kháng sinh kiểm soát nhiễm khuẩn kế phát theo chỉ định; hạ sốt - bổ trợ và bổ sung điện giải; siết an toàn sinh học giảm tái nhiễm.",
      "vaccine_phong": "VX03",
      "san_pham_lien_quan": [
        "VX03",
        "TP04",
        "TP05",
        "BT01"
      ],
      "thong_tin_thi_truong": "PRRS gây thiệt hại lớn qua giảm năng suất sinh sản và bội nhiễm; nhu cầu vaccine PRRS + kháng sinh hô hấp + bổ trợ ổn định quanh năm - giỏ hàng tư vấn theo combo phòng và kiểm soát kế phát.",
      "can_chuyen_gia": true
    },
    {
      "id": "D04",
      "ten_benh": "Lở mồm long móng (FMD)",
      "ten_khoa_hoc": "Foot and Mouth Disease",
      "vat_nuoi": "heo",
      "tac_nhan": "Virus FMD (Aphthovirus, type O phổ biến ở VN; còn type A, Asia1)",
      "trieu_chung": [
        "sốt",
        "mụn nước ở miệng",
        "mụn nước ở móng",
        "chảy nhiều dãi",
        "què",
        "bỏ ăn",
        "lông dựng"
      ],
      "chan_doan": "Mụn nước ở miệng và móng, chảy dãi, què - điển hình Lở mồm long móng (FMD).",
      "chan_doan_phan_biet": "Bệnh tích mụn nước rất đặc trưng nhưng cần phân biệt với bệnh mụn nước do enterovirus; định type virus để chọn đúng vaccine.",
      "muc_do": "nang",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "2-14 ngày, thường 2-5 ngày; lây cực nhanh.",
      "duong_lay": "Lây qua khí dung (phát tán xa theo gió), tiếp xúc, dịch mụn nước, sản phẩm động vật và phương tiện; là một trong các virus động vật lây lan nhanh nhất.",
      "co_che_benh_sinh": "Virus nhân lên ở biểu mô miệng - móng - vú tạo mụn nước; ở heo con non có thể gây viêm cơ tim (\"tim vằn hổ\") dẫn đến chết đột ngột.",
      "benh_tich": "Mụn nước và vết loét vùng miệng, lưỡi, kẽ móng, vành móng; heo con có thể có tổn thương cơ tim.",
      "xet_nghiem": "RT-PCR và ELISA định type huyết thanh (O/A/Asia1) để chọn vaccine phù hợp; lấy mẫu dịch mụn nước/biểu mô.",
      "ty_le_mac_chet": "Tỷ lệ mắc rất cao (gần 100% đàn cảm nhiễm); tỷ lệ chết thấp ở heo trưởng thành nhưng cao ở heo con do viêm cơ tim.",
      "dich_te": "Bùng phát theo mùa và theo đợt vận chuyển - giết mổ; vùng biên giới và nơi giao thương gia súc có nguy cơ cao, cần tiêm phòng định kỳ đúng type lưu hành.",
      "chi_so_canh_bao": "Cảnh báo sớm: nhiều con đồng loạt chảy dãi, đứng khập khiễng, bỏ ăn và sốt trong 1-2 ngày - dấu hiệu lây lan nhanh đặc trưng của FMD.",
      "buoc_xu_ly": "Không đặc trị virus. Cách ly, báo thú y ngay (bệnh phải công bố dịch); vệ sinh - sát trùng mạnh và kiểm soát di chuyển tuyệt đối; phòng chủ động bằng vaccine FMD đúng type; chăm sóc hỗ trợ vết loét, hạ sốt, bù điện giải; chống bội nhiễm vết thương móng.",
      "vaccine_phong": "VX04",
      "san_pham_lien_quan": [
        "VX04",
        "ST01",
        "TP05",
        "BT01"
      ],
      "thong_tin_thi_truong": "FMD bùng phát theo mùa và khi vận chuyển; tiêm phòng định kỳ đúng type là nhu cầu thường trực ở vùng nguy cơ - cơ hội tư vấn lịch vaccine 2 mũi/năm + bộ sát trùng.",
      "can_chuyen_gia": true
    },
    {
      "id": "D05",
      "ten_benh": "Tiêu chảy heo con do E.coli",
      "ten_khoa_hoc": "Colibacillosis",
      "vat_nuoi": "heo",
      "tac_nhan": "Vi khuẩn E.coli sinh độc tố (ETEC) - các chủng F4 (K88), F18",
      "trieu_chung": [
        "tiêu chảy",
        "phân trắng hoặc vàng",
        "bỏ ăn",
        "mất nước",
        "heo con gầy yếu",
        "lông xù"
      ],
      "chan_doan": "Tiêu chảy phân trắng/vàng ở heo con theo mẹ hoặc sau cai sữa - do E.coli, kết hợp stress cai sữa.",
      "chan_doan_phan_biet": "Phân biệt với tiêu chảy do virus (TGE/PED - phân lỏng tóe nước, lây cả đàn rất nhanh) và cầu trùng; E.coli đáp ứng kháng sinh + điện giải tốt.",
      "muc_do": "trung_binh",
      "co_thuoc_dac_tri": true,
      "thoi_gian_u_benh": "Ngắn, vài giờ đến 1-2 ngày sau khi nhiễm/stress cai sữa.",
      "duong_lay": "Đường miệng - phân, qua chuồng nền ẩm bẩn, núm vú nái, dụng cụ; bùng mạnh khi cai sữa, đổi cám đột ngột hoặc lạnh ẩm.",
      "co_che_benh_sinh": "ETEC bám dính niêm mạc ruột non bằng fimbriae (F4/F18) và tiết độc tố ruột (LT, ST) gây tăng tiết dịch → tiêu chảy thẩm thấu, mất nước và điện giải.",
      "benh_tich": "Ruột non căng đầy dịch, sung huyết; dạ dày chứa sữa không tiêu; heo con mất nước rõ (da nhăn, mắt trũng).",
      "xet_nghiem": "Nuôi cấy phân lập E.coli, định chủng fimbriae (F4/F18) và làm KHÁNG SINH ĐỒ để chọn kháng sinh đúng - giảm điều trị mò.",
      "ty_le_mac_chet": "Tỷ lệ mắc cao trong ổ; tỷ lệ chết phụ thuộc mức mất nước - điều trị sớm + bù điện giải giảm chết rõ rệt.",
      "dich_te": "Bệnh phổ biến quanh năm ở heo con theo mẹ và sau cai sữa; gánh nặng kinh tế nằm ở chậm lớn và chi phí điều trị lặp lại.",
      "chi_so_canh_bao": "Cảnh báo sớm: phân trắng/vàng quanh hậu môn heo con, ổ heo ướt nền, heo con nằm chồng do lạnh - thường rộ vào 3-5 ngày đầu sau cai sữa.",
      "buoc_xu_ly": "Có thuốc đặc trị: chọn kháng sinh đường ruột theo kháng sinh đồ (Amox-Colis/Enrofloxacin); BÙ NƯỚC - ĐIỆN GIẢI là then chốt giảm chết; giữ ấm và khô chuồng, cho ăn nhiều bữa nhỏ, chuyển cám từ từ; cải thiện vệ sinh núm vú và nền chuồng; cân nhắc men vi sinh ổn định đường ruột.",
      "vaccine_phong": null,
      "san_pham_lien_quan": [
        "TP02",
        "TP01",
        "BT01",
        "BT02"
      ],
      "thong_tin_thi_truong": "Bệnh phổ biến quanh năm ở heo con; nhu cầu kháng sinh đường ruột + điện giải + men vi sinh đều và ổn định - giỏ hàng \"điều trị + hồi phục đường ruột\" dễ bán kèm.",
      "can_chuyen_gia": false
    },
    {
      "id": "D06",
      "ten_benh": "Suyễn heo (viêm phổi địa phương)",
      "ten_khoa_hoc": "Mycoplasma hyopneumoniae",
      "vat_nuoi": "heo",
      "tac_nhan": "Vi khuẩn Mycoplasma hyopneumoniae (không có vách tế bào)",
      "trieu_chung": [
        "ho khan",
        "thở bụng",
        "khó thở",
        "chậm lớn",
        "giảm ăn"
      ],
      "chan_doan": "Ho khan kéo dài, thở bụng, heo chậm lớn - nghi suyễn do Mycoplasma, nặng hơn khi chuồng kín bụi.",
      "chan_doan_phan_biet": "Phân biệt với APP (cấp, chết nhanh), PRRS kế phát; suyễn thường là nền cho phức hợp hô hấp (PRDC).",
      "muc_do": "trung_binh",
      "co_thuoc_dac_tri": true,
      "thoi_gian_u_benh": "10-16 ngày; bệnh tiến triển mạn tính.",
      "duong_lay": "Khí dung tầm gần và tiếp xúc; lây từ nái sang heo con và giữa các lứa nuôi gối đầu; mật độ cao - thông thoáng kém làm bệnh nặng.",
      "co_che_benh_sinh": "Mycoplasma bám và phá hủy lông chuyển biểu mô đường hô hấp, làm mất cơ chế làm sạch và mở đường cho vi khuẩn kế phát; gây viêm phổi thùy đỉnh mạn tính.",
      "benh_tich": "Phổi viêm gan hóa màu tím sẫm vùng thùy đỉnh - thùy tim (ranh giới rõ), hạch phế quản sưng.",
      "xet_nghiem": "PCR dịch hô hấp/mô phổi, ELISA huyết thanh giám sát đàn; chấm điểm bệnh tích phổi tại lò mổ để đánh giá hiệu quả kiểm soát.",
      "ty_le_mac_chet": "Tỷ lệ mắc cao, tỷ lệ chết thấp nếu đơn thuần; thiệt hại lớn do giảm tăng trọng và tăng FCR.",
      "dich_te": "Phổ biến ở mọi quy mô, đặc biệt chuồng kín nuôi gối đầu; tiêu thụ kháng sinh hô hấp tăng mạnh lúc giao mùa.",
      "chi_so_canh_bao": "Cảnh báo sớm: tiếng ho khan rộ lúc sáng sớm/khi lùa đàn, đàn chậm đồng đều, FCR xấu dần dù khẩu phần không đổi.",
      "buoc_xu_ly": "Có thuốc đặc trị: kháng sinh hô hấp đúng nhóm (Tylosin + Doxycycline, Florfenicol; tránh beta-lactam vì Mycoplasma không có vách); cải thiện thông thoáng - giảm mật độ - giảm bụi; hạ sốt - bổ trợ; cân nhắc vaccine suyễn để giảm tái phát theo lứa.",
      "vaccine_phong": null,
      "san_pham_lien_quan": [
        "TP03",
        "TP04",
        "TP05",
        "BT03"
      ],
      "thong_tin_thi_truong": "Suyễn làm giảm tăng trọng và tăng FCR - thiệt hại ẩn lớn; kháng sinh hô hấp tiêu thụ mạnh lúc giao mùa, kèm cơ hội tư vấn cải thiện môi trường và vitamin nâng đề kháng.",
      "can_chuyen_gia": false
    },
    {
      "id": "D07",
      "ten_benh": "Tụ huyết trùng heo",
      "ten_khoa_hoc": "Pasteurellosis",
      "vat_nuoi": "heo",
      "tac_nhan": "Vi khuẩn Pasteurella multocida (thường kế phát sau virus/stress)",
      "trieu_chung": [
        "sốt cao",
        "khó thở",
        "hầu sưng",
        "da tím",
        "chết nhanh",
        "bỏ ăn"
      ],
      "chan_doan": "Sốt cao, khó thở, hầu sưng, chết nhanh - nghi Tụ huyết trùng heo, thường kế phát khi sức đề kháng giảm.",
      "chan_doan_phan_biet": "Phân biệt với ASF (cần xét nghiệm nếu chết nhanh hàng loạt) và APP; tụ huyết trùng đáp ứng kháng sinh nếu điều trị sớm.",
      "muc_do": "nang",
      "co_thuoc_dac_tri": true,
      "thoi_gian_u_benh": "Ngắn, vài giờ đến 1-3 ngày; thể bại huyết diễn biến rất nhanh.",
      "duong_lay": "Vi khuẩn cư trú sẵn ở đường hô hấp trên, phát bệnh khi stress/giảm đề kháng (thời tiết, vận chuyển, bệnh nền); lây qua khí dung và tiếp xúc.",
      "co_che_benh_sinh": "Vi khuẩn vào máu gây bại huyết, nội độc tố làm sốc và phù vùng hầu họng, viêm phổi - màng phổi fibrin.",
      "benh_tich": "Phù keo vùng hầu họng, viêm phổi - màng phổi fibrin, hạch sung huyết, xuất huyết dưới da và phủ tạng.",
      "xet_nghiem": "Nuôi cấy phân lập Pasteurella + kháng sinh đồ; PCR định loài và type giáp mô để chọn vaccine phù hợp.",
      "ty_le_mac_chet": "Thể cấp/bại huyết tỷ lệ chết cao nếu chậm điều trị; điều trị sớm đáp ứng tốt.",
      "dich_te": "Hay bùng vào thời điểm giao mùa, sau dịch virus hoặc khi nhập đàn - vận chuyển; mang tính cơ hội nên gắn chặt với quản lý stress.",
      "chi_so_canh_bao": "Cảnh báo sớm: vài con đột ngột sốt cao, khó thở, sưng vùng hầu, có thể chết trong ngày sau một đợt stress thời tiết/vận chuyển.",
      "buoc_xu_ly": "Điều trị sớm bằng kháng sinh phù hợp (Florfenicol/Enrofloxacin) thường đáp ứng tốt; hạ sốt - chống sốc - bổ trợ; tách con bệnh; phòng chủ động bằng vaccine tụ huyết trùng cho đàn và quản lý giảm stress (thông thoáng, hạn chế dồn đàn).",
      "vaccine_phong": "VX05",
      "san_pham_lien_quan": [
        "TP04",
        "TP01",
        "VX05",
        "TP05"
      ],
      "thong_tin_thi_truong": "Bệnh cấp tính, điều trị sớm hiệu quả - bán kèm kháng sinh + hạ sốt; vaccine phòng cho đàn và tư vấn quản lý stress giúp giảm tái phát - tăng giá trị tư vấn dài hạn.",
      "can_chuyen_gia": true
    },
    {
      "id": "D08",
      "ten_benh": "Phó thương hàn heo",
      "ten_khoa_hoc": "Salmonellosis",
      "vat_nuoi": "heo",
      "tac_nhan": "Vi khuẩn Salmonella (S. Choleraesuis, S. Typhimurium)",
      "trieu_chung": [
        "tiêu chảy phân vàng hôi",
        "sốt",
        "da tím tai bụng",
        "bỏ ăn",
        "gầy sút"
      ],
      "chan_doan": "Tiêu chảy phân vàng tanh hôi, sốt, da tím ở heo cai sữa - nghi Phó thương hàn (Salmonella).",
      "chan_doan_phan_biet": "Phân biệt với tiêu chảy E.coli (thường không sốt) và dịch tả; Salmonella kèm sốt, bệnh tích ruột - gan đặc trưng.",
      "muc_do": "trung_binh",
      "co_thuoc_dac_tri": true,
      "thoi_gian_u_benh": "2-5 ngày; thể mạn có thể kéo dài.",
      "duong_lay": "Đường miệng - phân qua thức ăn/nước nhiễm, chuồng bẩn; heo mang trùng không triệu chứng là nguồn lây dai dẳng; có ý nghĩa an toàn thực phẩm (lây người).",
      "co_che_benh_sinh": "Salmonella xâm nhập niêm mạc ruột và hạch, gây viêm ruột - bại huyết; nội độc tố gây sốt và tổn thương mạch (da tím).",
      "benh_tich": "Loét \"nút áo\" ở ruột già, gan có nốt hoại tử nhỏ, lách sưng, hạch màng treo ruột sưng.",
      "xet_nghiem": "Nuôi cấy phân lập Salmonella + kháng sinh đồ; PCR định serovar; lưu ý theo dõi kháng kháng sinh do Salmonella thường đa kháng.",
      "ty_le_mac_chet": "Tỷ lệ mắc cao ở heo cai sữa nuôi mật độ cao; tỷ lệ chết vừa, tăng nếu bại huyết hoặc điều trị muộn.",
      "dich_te": "Hay gặp ở heo cai sữa nuôi mật độ cao, vệ sinh kém; là vấn đề an toàn thực phẩm nên kiểm soát mang tính chuỗi.",
      "chi_so_canh_bao": "Cảnh báo sớm: heo cai sữa tiêu chảy phân vàng tanh kèm sốt và da tím tai - bụng, gầy sút nhanh dù vẫn còn ăn lai rai.",
      "buoc_xu_ly": "Có thuốc đặc trị: kháng sinh theo kháng sinh đồ (Enrofloxacin/Amox-Colis) - lưu ý nguy cơ đa kháng; bù điện giải; phòng bằng vaccine phó thương hàn; vệ sinh - sát trùng chuồng và nguồn nước; cân nhắc men vi sinh phục hồi đường ruột.",
      "vaccine_phong": "VX05",
      "san_pham_lien_quan": [
        "TP01",
        "TP02",
        "VX05",
        "BT01",
        "BT02"
      ],
      "thong_tin_thi_truong": "Hay gặp ở heo cai sữa nuôi mật độ cao; kết hợp điều trị + vaccine phòng + cải thiện vệ sinh - thông điệp \"kiểm soát theo chuỗi, giảm tồn dư\" phù hợp khách quan tâm an toàn thực phẩm.",
      "can_chuyen_gia": false
    },
    {
      "id": "D09",
      "ten_benh": "Newcastle (gà rù)",
      "ten_khoa_hoc": "Newcastle Disease - virus NDV",
      "vat_nuoi": "gà",
      "tac_nhan": "Virus Newcastle (NDV, Avian paramyxovirus type 1)",
      "trieu_chung": [
        "thở khó",
        "vẹo cổ",
        "liệt chân",
        "phân xanh",
        "chết nhanh",
        "giảm đẻ đột ngột",
        "bỏ ăn",
        "ủ rũ"
      ],
      "chan_doan": "Triệu chứng thần kinh (vẹo cổ, liệt chân), phân xanh, gà chết nhanh và giảm đẻ đột ngột - nghi Newcastle (gà rù).",
      "chan_doan_phan_biet": "Phân biệt với Cúm gia cầm (chết rất nhanh, xuất huyết chân - mào) và CRD nặng; cần xét nghiệm để tách Newcastle khỏi cúm.",
      "muc_do": "nguy_hiem",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "2-15 ngày, trung bình 5-6 ngày.",
      "duong_lay": "Qua khí dung, phân, dịch tiết và dụng cụ - người; chủng độc lực cao (velogenic) lây nhanh, chim hoang dã có thể mang truyền.",
      "co_che_benh_sinh": "Virus nhân lên ở đường hô hấp - tiêu hóa rồi xâm nhập hệ thần kinh trung ương, gây triệu chứng thần kinh; thể nội tạng gây xuất huyết tiêu hóa.",
      "benh_tich": "Xuất huyết điểm ở dạ dày tuyến (tiền mề), loét hạch ruột, xuất huyết khí quản; thể thần kinh tổn thương não.",
      "xet_nghiem": "RT-PCR (dịch ngoáy hầu - ổ nhớp), phân lập virus và đánh giá chỉ số độc lực ICPI; HI giám sát kháng thể sau vaccine.",
      "ty_le_mac_chet": "Chủng độc lực cao: tỷ lệ mắc và chết có thể tới 90-100% ở đàn chưa miễn dịch.",
      "dich_te": "Bệnh truyền nhiễm phổ biến gây thiệt hại lớn cho đàn gà cả nuôi nền và nuôi lồng; rủi ro cao nhất ở đàn bỏ sót hoặc làm sai lịch/đường đưa vaccine.",
      "chi_so_canh_bao": "Cảnh báo sớm: gà giảm đẻ đột ngột + phân xanh + vài con có dấu hiệu thần kinh (vẹo cổ, quay vòng) - đặc biệt nguy hiểm nếu đàn quá lịch vaccine.",
      "buoc_xu_ly": "KHÔNG có thuốc đặc trị virus. Cách ly ngay đàn bệnh; báo thú y; siết an toàn sinh học và sát trùng toàn trại; rà soát và bổ sung lịch tiêm vaccine Newcastle cho đàn khỏe đúng đường đưa (nhỏ mắt - mũi/uống/tiêm); bổ sung điện giải - vitamin nâng đề kháng; chống bội nhiễm kế phát nếu cần.",
      "vaccine_phong": "VX06",
      "san_pham_lien_quan": [
        "VX06",
        "ST01",
        "BT01",
        "BT03"
      ],
      "thong_tin_thi_truong": "Newcastle là bệnh phổ biến gây thiệt hại lớn cho đàn gà; nhu cầu vaccine Newcastle + sát trùng ổn định quanh năm - cơ hội tư vấn lịch vaccine định kỳ và đánh giá hiệu giá kháng thể (HI) cho khách quy mô lớn.",
      "can_chuyen_gia": true
    },
    {
      "id": "D10",
      "ten_benh": "Cầu trùng gà",
      "ten_khoa_hoc": "Coccidiosis - Eimeria spp.",
      "vat_nuoi": "gà",
      "tac_nhan": "Ký sinh trùng đơn bào Eimeria (nhiều loài: E. tenella, E. acervulina, E. necatrix...)",
      "trieu_chung": [
        "phân có máu",
        "phân sáp nâu",
        "xù lông",
        "giảm ăn",
        "ủ rũ",
        "chậm lớn",
        "gầy yếu"
      ],
      "chan_doan": "Phân có máu hoặc phân sáp nâu, gà xù lông ủ rũ chậm lớn - điển hình bệnh cầu trùng, hay gặp khi nền chuồng ẩm.",
      "chan_doan_phan_biet": "Phân biệt với viêm ruột hoại tử (Clostridium, thường kế phát cầu trùng); cầu trùng đáp ứng tốt thuốc đặc trị.",
      "muc_do": "trung_binh",
      "co_thuoc_dac_tri": true,
      "thoi_gian_u_benh": "4-7 ngày (theo vòng đời noãn nang Eimeria).",
      "duong_lay": "Nuốt phải noãn nang (oocyst) có bào tử trong nền chuồng - thức ăn - nước; nền ẩm và mật độ cao làm noãn nang tích tụ, bệnh rộ mạnh.",
      "co_che_benh_sinh": "Eimeria ký sinh và phá hủy tế bào biểu mô ruột theo từng đoạn đặc hiệu loài, gây xuất huyết - kém hấp thu, mở đường cho viêm ruột hoại tử.",
      "benh_tich": "Manh tràng chứa máu (E. tenella), ruột non dày có chấm trắng/xuất huyết; thành ruột viêm dày.",
      "xet_nghiem": "Soi phân đếm noãn nang (OPG), mổ khám chấm điểm tổn thương ruột theo đoạn để định loài và mức nặng.",
      "ty_le_mac_chet": "Tỷ lệ mắc cao ở gà nuôi nền; tỷ lệ chết vừa nhưng thiệt hại lớn do giảm tăng trọng và kém đồng đều.",
      "dich_te": "Phổ biến ở gà nuôi nền, bùng khi nền ẩm và giai đoạn 3-6 tuần tuổi; thuốc đặc trị + điện giải tiêu thụ đều, dễ bán kèm.",
      "chi_so_canh_bao": "Cảnh báo sớm: xuất hiện phân sáp/phân có máu lác đác, gà tụm xù lông giảm ăn ở giai đoạn 3-6 tuần, nền chuồng ẩm sau mưa.",
      "buoc_xu_ly": "Có thuốc đặc trị: dùng thuốc trị cầu trùng (Toltrazuril/nhóm đặc hiệu) đủ liều - đủ ngày; giữ nền chuồng khô thoáng và thay chất độn ẩm; bổ sung vitamin K và điện giải hỗ trợ cầm máu - hồi phục; cân nhắc luân phiên hoạt chất để tránh kháng thuốc.",
      "vaccine_phong": null,
      "san_pham_lien_quan": [
        "TP06",
        "BT01",
        "BT03"
      ],
      "thong_tin_thi_truong": "Cầu trùng phổ biến ở gà nuôi nền, bùng khi ẩm; thuốc đặc trị + điện giải + vitamin K tiêu thụ đều - thông điệp luân phiên hoạt chất chống kháng thuốc phù hợp khách kỹ thuật.",
      "can_chuyen_gia": false
    },
    {
      "id": "D11",
      "ten_benh": "CRD - hô hấp mãn tính ở gà",
      "ten_khoa_hoc": "Chronic Respiratory Disease - Mycoplasma gallisepticum",
      "vat_nuoi": "gà",
      "tac_nhan": "Vi khuẩn Mycoplasma gallisepticum (không có vách tế bào)",
      "trieu_chung": [
        "hắt hơi",
        "chảy nước mũi",
        "khò khè",
        "khó thở",
        "giảm đẻ",
        "sưng mặt",
        "giảm ăn"
      ],
      "chan_doan": "Hắt hơi, khò khè, chảy nước mũi và giảm đẻ - nghi CRD do Mycoplasma gallisepticum, dễ bùng khi thời tiết thay đổi.",
      "chan_doan_phan_biet": "Phân biệt với Newcastle thể hô hấp, Coryza (sưng mặt, mùi hôi) và cúm; CRD diễn biến mạn tính, nặng lên khi bội nhiễm E.coli.",
      "muc_do": "trung_binh",
      "co_thuoc_dac_tri": true,
      "thoi_gian_u_benh": "6-21 ngày; tiến triển chậm, dai dẳng.",
      "duong_lay": "Truyền dọc qua trứng (từ gà mái nhiễm) và truyền ngang qua khí dung - tiếp xúc; stress và thông thoáng kém làm bệnh bộc phát.",
      "co_che_benh_sinh": "Mycoplasma bám niêm mạc hô hấp gây viêm mạn, kết hợp E.coli tạo viêm túi khí - màng bao tim/gan (\"phức hợp CRD\"), làm giảm đẻ và tăng FCR.",
      "benh_tich": "Viêm túi khí đục, viêm xoang mũi - khí quản; thể bội nhiễm có viêm màng bao tim - gan fibrin.",
      "xet_nghiem": "PCR dịch hô hấp, ELISA/HI giám sát kháng thể; kiểm tra đàn giống để kiểm soát truyền dọc qua trứng.",
      "ty_le_mac_chet": "Tỷ lệ chết thấp nếu đơn thuần nhưng thiệt hại lớn do giảm đẻ, giảm tăng trọng và tăng loại thải.",
      "dich_te": "Phổ biến quanh năm, nặng lên lúc giao mùa và ở đàn giống nhiễm truyền dọc; kháng sinh hô hấp cho gà tiêu thụ mạnh theo mùa.",
      "chi_so_canh_bao": "Cảnh báo sớm: tiếng khò khè - hắt hơi rộ về đêm, vài con sưng mặt - chảy nước mũi, đàn đẻ tụt nhẹ và FCR xấu dần khi trở trời.",
      "buoc_xu_ly": "Có thuốc đặc trị: kháng sinh đúng nhóm cho Mycoplasma (Tylosin/Doxycycline/Enrofloxacin; tránh beta-lactam); kiểm soát bội nhiễm E.coli; cải thiện thông thoáng - giảm bụi - giảm khí NH3; bổ sung vitamin - điện giải; với đàn giống cần kiểm soát truyền dọc qua trứng.",
      "vaccine_phong": null,
      "san_pham_lien_quan": [
        "TP01",
        "BT01",
        "BT03"
      ],
      "thong_tin_thi_truong": "CRD làm giảm năng suất đẻ và tăng trọng; kháng sinh hô hấp cho gà tiêu thụ mạnh lúc giao mùa - kèm cơ hội tư vấn quản lý môi trường chuồng và vitamin nâng đề kháng.",
      "can_chuyen_gia": false
    },
    {
      "id": "D12",
      "ten_benh": "Hội chứng còi cọc sau cai sữa do Circovirus (PCV2)",
      "ten_khoa_hoc": "Porcine Circovirus type 2 - PCVAD/PMWS",
      "vat_nuoi": "heo",
      "tac_nhan": "Virus PCV2 (họ Circoviridae, ADN vòng nhỏ nhất gây bệnh ở thú)",
      "trieu_chung": [
        "còi cọc chậm lớn",
        "gầy sút dù vẫn ăn",
        "hạch sưng",
        "da nhợt hoặc vàng",
        "tiêu chảy",
        "khó thở",
        "kém đồng đều"
      ],
      "chan_doan": "Heo sau cai sữa còi cọc, gầy sút, kém đồng đều, hạch bẹn sưng, đáp ứng kém với kháng sinh - nghi bệnh do Circovirus (PCV2).",
      "chan_doan_phan_biet": "Phân biệt với PRRS, phó thương hàn và suy dinh dưỡng; PCV2 đặc trưng bởi suy giảm miễn dịch và hạch lympho teo - cần mô bệnh học/PCR.",
      "muc_do": "nang",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "2-3 tuần; biểu hiện rõ ở heo 6-14 tuần tuổi.",
      "duong_lay": "Qua dịch tiết, phân, đường miệng - mũi và có thể truyền dọc; virus rất bền, lưu hành rộng trong quần thể heo.",
      "co_che_benh_sinh": "PCV2 nhân lên trong tế bào lympho và đại thực bào, làm cạn kiệt mô lympho gây suy giảm miễn dịch toàn thân, mở đường cho đồng nhiễm (PRRS, Mycoplasma) - tạo \"phức hợp PCVAD\".",
      "benh_tich": "Hạch lympho sưng rồi teo, phổi viêm kẽ chắc, thận có đốm trắng, gan vàng; mô bệnh học thấy thể vùi và mất tế bào lympho.",
      "xet_nghiem": "Real-time PCR định lượng tải lượng PCV2 (máu/mô), mô bệnh học + hóa mô miễn dịch (IHC) tại hạch để xác nhận bệnh (phân biệt nhiễm và phát bệnh).",
      "ty_le_mac_chet": "Tỷ lệ mắc thay đổi; thể phát bệnh có thể chết 4-20% và làm chậm lớn - kém đồng đều cả đàn.",
      "dich_te": "Lưu hành phổ biến; thiệt hại tập trung ở giai đoạn sau cai sữa - choai, nặng hơn khi đồng nhiễm PRRS/Mycoplasma và quản lý kém.",
      "chi_so_canh_bao": "Cảnh báo sớm: tỷ lệ heo còi - kém đồng đều tăng ở chuồng cai sữa, heo gầy dần dù vẫn ăn, đáp ứng kháng sinh kém và hạch bẹn sờ thấy to.",
      "buoc_xu_ly": "Không đặc trị virus. Phòng chủ động bằng vaccine PCV2 cho heo con là biện pháp hiệu quả nhất; kiểm soát đồng nhiễm (PRRS, suyễn) bằng vaccine/kháng sinh theo chỉ định; giảm stress - giãn mật độ - dinh dưỡng tốt; nâng đề kháng bằng vitamin và men vi sinh.",
      "vaccine_phong": "VX07",
      "san_pham_lien_quan": [
        "VX07",
        "TP04",
        "BT03",
        "BT02"
      ],
      "thong_tin_thi_truong": "Vaccine PCV2 là một trong các vaccine có hiệu quả kinh tế (ROI) rõ nhất trên heo nhờ cải thiện tăng trọng và độ đồng đều; thông điệp \"phòng PCV2 để giảm còi cọc và chi phí kháng sinh\" rất thuyết phục với khách kỹ thuật.",
      "can_chuyen_gia": true
    },
    {
      "id": "D13",
      "ten_benh": "Gumboro (viêm túi Fabricius truyền nhiễm - IBD)",
      "ten_khoa_hoc": "Infectious Bursal Disease - virus IBDV",
      "vat_nuoi": "gà",
      "tac_nhan": "Virus IBDV (họ Birnaviridae, ARN sợi đôi)",
      "trieu_chung": [
        "ủ rũ đột ngột",
        "tiêu chảy phân trắng nhớt",
        "run rẩy",
        "tự mổ lỗ huyệt",
        "mất nước",
        "chết tăng nhanh rồi giảm",
        "giảm ăn"
      ],
      "chan_doan": "Gà 3-6 tuần tuổi ủ rũ đột ngột, tiêu chảy phân trắng nhớt, chết tăng nhanh theo hình chuông rồi giảm - điển hình Gumboro (IBD).",
      "chan_doan_phan_biet": "Phân biệt với cầu trùng (phân máu), Newcastle (thần kinh) và ngộ độc; Gumboro đặc trưng tổn thương túi Fabricius và gây suy giảm miễn dịch.",
      "muc_do": "nang",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "2-4 ngày; bệnh diễn biến cấp và rất nhanh.",
      "duong_lay": "Đường miệng - phân, virus cực bền trong môi trường chuồng (tồn tại nhiều tháng), khó tiêu diệt nên dễ tái nhiễm lứa sau.",
      "co_che_benh_sinh": "IBDV phá hủy tế bào lympho B ở túi Fabricius - cơ quan tạo miễn dịch của gà non, gây suy giảm miễn dịch khiến gà đáp ứng kém với vaccine khác và dễ bội nhiễm.",
      "benh_tich": "Túi Fabricius sưng - xuất huyết rồi teo, xuất huyết cơ đùi - ngực, thận sưng nhợt chứa urat.",
      "xet_nghiem": "RT-PCR và mô bệnh học túi Fabricius; ELISA giám sát kháng thể mẹ truyền để chọn ĐÚNG THỜI ĐIỂM tiêm vaccine (công thức Deventer/Kouwenhoven).",
      "ty_le_mac_chet": "Chủng độc lực cao (vvIBDV) có thể chết 20-60% ở đàn cảm nhiễm; thiệt hại kéo dài do suy giảm miễn dịch sau khỏi.",
      "dich_te": "Phổ biến và dai dẳng do virus bền vững; rủi ro cao nhất ở giai đoạn 3-6 tuần và khi chọn sai thời điểm vaccine so với kháng thể mẹ truyền.",
      "chi_so_canh_bao": "Cảnh báo sớm: gà 3-6 tuần đột ngột chết tăng nhanh trong 2-3 ngày, phân trắng nhớt, gà tự mổ vùng lỗ huyệt - cần mổ khám kiểm tra túi Fabricius ngay.",
      "buoc_xu_ly": "Không đặc trị virus. Phòng chủ động bằng vaccine Gumboro đúng thời điểm theo kháng thể mẹ truyền (ELISA); siết an toàn sinh học và sát trùng mạnh (chọn chất sát trùng diệt được virus trần); hỗ trợ bù điện giải - vitamin, hạ nhiệt; tránh can thiệp gây stress trong giai đoạn cấp.",
      "vaccine_phong": "VX08",
      "san_pham_lien_quan": [
        "VX08",
        "ST01",
        "BT01",
        "BT03"
      ],
      "thong_tin_thi_truong": "Gumboro là bệnh nền gây suy giảm miễn dịch khiến mọi vaccine khác kém hiệu quả; tư vấn chọn đúng thời điểm vaccine theo ELISA kháng thể mẹ truyền là điểm kỹ thuật cao, tạo khác biệt với khách khoa học.",
      "can_chuyen_gia": true
    },
    {
      "id": "D14",
      "ten_benh": "Cúm gia cầm độc lực cao (HPAI)",
      "ten_khoa_hoc": "Highly Pathogenic Avian Influenza - virus H5N1/H5N6",
      "vat_nuoi": "gà",
      "tac_nhan": "Virus cúm A độc lực cao (H5N1, H5N6...) - có khả năng lây sang người (zoonosis)",
      "trieu_chung": [
        "chết đột ngột hàng loạt",
        "mào tích tím tái",
        "phù đầu",
        "xuất huyết chân",
        "khó thở",
        "chảy nước mắt mũi",
        "giảm đẻ đột ngột",
        "triệu chứng thần kinh"
      ],
      "chan_doan": "Gà chết đột ngột hàng loạt, mào - tích tím tái, xuất huyết da chân, có thể kèm thần kinh - nghi Cúm gia cầm độc lực cao (HPAI). Cảnh báo nguy cơ lây sang người.",
      "chan_doan_phan_biet": "Phân biệt với Newcastle thể nội tạng (cũng chết nhanh); chỉ xét nghiệm mới khẳng định và bắt buộc báo dịch khẩn.",
      "muc_do": "nguy_hiem",
      "co_thuoc_dac_tri": false,
      "thoi_gian_u_benh": "Vài giờ đến 7 ngày; thể độc lực cao gây chết trước khi kịp biểu hiện rõ.",
      "duong_lay": "Qua phân - dịch tiết, khí dung, chim hoang dã/thủy cầm di trú và dụng cụ - phương tiện; lây cực nhanh và có thể lây sang người tiếp xúc gần.",
      "co_che_benh_sinh": "Virus HPAI nhân lên hệ thống trong nội mô mạch và nhiều cơ quan, gây huyết khối - xuất huyết lan tỏa và suy đa cơ quan, dẫn đến chết rất nhanh.",
      "benh_tich": "Xuất huyết - phù đầu, mào tích tím, xuất huyết da chân không lông, xuất huyết cơ - phủ tạng, hoại tử tụy - lách.",
      "xet_nghiem": "Real-time RT-PCR định subtype H/N (xác chẩn khẩn), phân lập virus tại phòng thí nghiệm an toàn sinh học; bắt buộc báo cơ quan thú y ngay.",
      "ty_le_mac_chet": "Thể độc lực cao: tỷ lệ chết có thể tới 90-100% trong 24-72 giờ.",
      "dich_te": "Nguy cơ tăng vào mùa lạnh và mùa di trú của chim hoang; là bệnh phải công bố dịch và có ý nghĩa y tế công cộng - kiểm soát mang tính quốc gia.",
      "chi_so_canh_bao": "Cảnh báo sớm: chết tăng vọt bất thường trong 1-2 ngày kèm mào tích tím và xuất huyết chân - DỪNG mọi thao tác, báo thú y khẩn và bảo hộ cho người tiếp xúc.",
      "buoc_xu_ly": "KHÔNG điều trị, không bán chạy. Cách ly tuyệt đối và báo thú y - chính quyền KHẨN (bệnh phải công bố dịch); tiêu hủy theo quy định; tổng sát trùng và kiểm soát vùng dịch; tiêm phòng vaccine cúm cho đàn trong vùng theo chỉ đạo; trang bị bảo hộ cho người do nguy cơ lây sang người.",
      "vaccine_phong": "VX09",
      "san_pham_lien_quan": [
        "VX09",
        "ST01",
        "BT01"
      ],
      "thong_tin_thi_truong": "HPAI là rủi ro an toàn sinh học và y tế công cộng lớn; nhu cầu vaccine cúm theo chương trình + bộ sát trùng mạnh tăng vào mùa lạnh - thông điệp tư vấn gắn với an toàn sinh học toàn diện và trách nhiệm cộng đồng.",
      "can_chuyen_gia": true
    }
  ],
  "products": [
    {
      "ma_sp": "VX01",
      "ten": "NAVET-ASFVAC",
      "hang": "Navetco (Nova Consumer)",
      "loai": "vaccine",
      "vat_nuoi": "heo",
      "cong_dung": "Vaccine nhược độc đông khô phòng bệnh Dịch tả lợn châu Phi (ASF) - vaccine ASF thương mại đầu tiên được cấp phép tại Việt Nam.",
      "chi_dinh": "Phòng ASF chủ động cho heo thịt khỏe mạnh trong vùng có áp lực dịch, theo chỉ đạo giám sát của thú y.",
      "lieu_luong": "1 liều (2 ml)/con, tiêm bắp.",
      "duong_dung": "Tiêm bắp cổ.",
      "doi_tuong": "Heo thịt khỏe mạnh từ 4 tuần tuổi trở lên (không dùng cho nái mang thai, heo đực giống theo khuyến cáo hiện hành).",
      "thoi_gian_ngung": "Theo hướng dẫn nhà sản xuất.",
      "chong_chi_dinh": "Heo đang ốm, sốt, nái mang thai; tuân thủ giám sát thú y.",
      "co_che_tac_dong": "Virus nhược độc kích thích miễn dịch chủ động (kháng thể + miễn dịch tế bào) đặc hiệu với ASFV mà không gây bệnh.",
      "duoc_dong_hoc": "Đáp ứng miễn dịch hình thành sau ~2-4 tuần tiêm; cần heo khỏe và không dùng đồng thời thuốc ức chế miễn dịch.",
      "pho_tac_dong": "Bảo hộ với chủng ASFV genotype II đang lưu hành tại Việt Nam (theo công bố nhà sản xuất).",
      "bang_chung": "Được Cục Thú y cấp phép lưu hành sau khảo nghiệm; bảo hộ công bố trên heo thịt khỏe đúng đối tượng.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP, kiểm nghiệm xuất xưởng từng lô.",
      "tuong_tac_luu_y": "Không tiêm cho heo ốm/stress nặng; không dùng chung bơm kim với kháng sinh; tránh dùng cùng thuốc hạ sốt - kháng viêm liều cao quanh thời điểm tiêm.",
      "bao_quan": "Bảo quản 2-8°C, tránh ánh sáng; dùng hết trong thời gian khuyến cáo sau khi pha.",
      "quy_cach": "Lọ đông khô + dung môi pha",
      "gia_vnd": 34000,
      "ghi_chu": "Chỉ dùng cho heo khỏe; kết hợp an toàn sinh học. Tiêm phòng trong vùng an toàn dịch theo chỉ đạo thú y - đòn bẩy tư vấn phòng dịch mạnh nhất hiện nay."
    },
    {
      "ma_sp": "VX02",
      "ten": "Vaccine Dịch tả heo cổ điển (CSF)",
      "hang": "Vetvaco (Nova Consumer)",
      "loai": "vaccine",
      "vat_nuoi": "heo",
      "cong_dung": "Phòng bệnh Dịch tả heo cổ điển (Classical Swine Fever) - vaccine nhược độc nền tảng, hiệu lực cao, giá thấp.",
      "chi_dinh": "Phòng CSF cho heo con và heo hậu bị theo lịch tiêm.",
      "lieu_luong": "1 liều/con theo lịch (thường 1 ml sau khi pha).",
      "duong_dung": "Tiêm bắp hoặc dưới da.",
      "doi_tuong": "Heo con từ 3-4 tuần tuổi, nhắc lại theo lịch.",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Heo đang sốt/ốm.",
      "co_che_tac_dong": "Virus nhược độc tạo miễn dịch chủ động bền vững chống CSFV; miễn dịch hình thành nhanh.",
      "duoc_dong_hoc": "Bảo hộ thường đạt sau 7-14 ngày; lưu ý khoảng trống miễn dịch ở heo con khi kháng thể mẹ truyền còn cao.",
      "pho_tac_dong": "Bảo hộ chéo tốt giữa các chủng CSFV lưu hành.",
      "bang_chung": "Vaccine có lịch sử sử dụng rộng, hiệu lực cao đã được kiểm chứng nhiều thập kỷ; nền tảng thanh toán CSF ở nhiều vùng.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP, kiểm nghiệm hiệu giá từng lô.",
      "tuong_tac_luu_y": "Không tiêm cùng lúc với thuốc ức chế miễn dịch; tiêm đúng thời điểm để tránh trung hòa bởi kháng thể mẹ truyền.",
      "bao_quan": "Bảo quản 2-8°C, tránh ánh sáng; pha xong dùng ngay.",
      "quy_cach": "Lọ đông khô",
      "gia_vnd": 8000,
      "ghi_chu": "Nền tảng miễn dịch cơ bản trong đàn heo - chi phí thấp, hiệu quả cao, dễ thuyết phục tiêm đủ lịch."
    },
    {
      "ma_sp": "VX03",
      "ten": "Vaccine Tai xanh (PRRS)",
      "hang": "Anova Biotech (nhập khẩu)",
      "loai": "vaccine",
      "vat_nuoi": "heo",
      "cong_dung": "Phòng Hội chứng rối loạn hô hấp và sinh sản ở heo (PRRS), ổn định đàn nái và giảm bội nhiễm hô hấp.",
      "chi_dinh": "Phòng PRRS cho heo con và nái theo chủng lưu hành tại trại.",
      "lieu_luong": "1 liều (2 ml)/con.",
      "duong_dung": "Tiêm bắp.",
      "doi_tuong": "Heo con và nái theo lịch.",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Heo đang ốm.",
      "co_che_tac_dong": "Kích thích miễn dịch đặc hiệu với PRRSV; chọn vaccine cùng dòng (Bắc Mỹ/châu Âu) với chủng lưu hành để tối ưu bảo hộ.",
      "duoc_dong_hoc": "Miễn dịch hình thành sau 2-4 tuần; cần chiến lược tiêm đồng loạt để ổn định đàn nái.",
      "pho_tac_dong": "Bảo hộ tốt nhất khi tương đồng chủng; PRRSV biến đổi nhanh nên cần giám sát ORF5 định kỳ.",
      "bang_chung": "Giảm thiệt hại sinh sản và hô hấp khi kết hợp ổn định đàn và an toàn sinh học.",
      "tieu_chuan": "Vaccine nhập khẩu đạt tiêu chuẩn nhà sản xuất, có hồ sơ lưu hành.",
      "tuong_tac_luu_y": "Không trộn chung với vaccine khác trong một bơm; cân nhắc kế hoạch tiêm theo định hướng của thú y trại.",
      "bao_quan": "Bảo quản 2-8°C, tránh đông băng và ánh sáng.",
      "quy_cach": "Lọ 25 liều",
      "gia_vnd": 18000,
      "ghi_chu": "Giảm thiệt hại do PRRS, ổn định đàn nái - tư vấn theo chiến lược chủng và giám sát huyết thanh tạo khác biệt với khách kỹ thuật."
    },
    {
      "ma_sp": "VX04",
      "ten": "Vaccine Lở mồm long móng (FMD) type O",
      "hang": "Anova Biotech (nhập khẩu)",
      "loai": "vaccine",
      "vat_nuoi": "heo",
      "cong_dung": "Phòng bệnh Lở mồm long móng type O - vaccine vô hoạt có bổ trợ.",
      "chi_dinh": "Phòng FMD cho heo, ưu tiên vùng nguy cơ và đàn vận chuyển nhiều.",
      "lieu_luong": "1 liều (2 ml)/con, nhắc lại theo lịch (thường 2 mũi/năm).",
      "duong_dung": "Tiêm bắp.",
      "doi_tuong": "Heo từ 2 tuần tuổi trở lên.",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Heo đang ốm/sốt.",
      "co_che_tac_dong": "Kháng nguyên virus vô hoạt + chất bổ trợ kích thích kháng thể trung hòa đặc hiệu type.",
      "duoc_dong_hoc": "Cần tiêm 2 mũi cơ bản cách 3-4 tuần để đạt hiệu giá bảo hộ, sau đó nhắc lại định kỳ.",
      "pho_tac_dong": "Bảo hộ đặc hiệu theo type (cần khớp type O/A/Asia1 lưu hành); không bảo hộ chéo giữa các type.",
      "bang_chung": "Vaccine vô hoạt FMD là biện pháp kiểm soát chính trên thế giới; hiệu lực phụ thuộc khớp type và hiệu giá.",
      "tieu_chuan": "Đạt tiêu chuẩn hiệu giá kháng nguyên (PD50) theo công bố nhà sản xuất.",
      "tuong_tac_luu_y": "Chọn đúng type lưu hành; bảo quản lạnh nghiêm ngặt vì bổ trợ nhạy nhiệt; không để đông băng.",
      "bao_quan": "Bảo quản 2-8°C, TUYỆT ĐỐI không đông băng (làm hỏng nhũ bổ trợ).",
      "quy_cach": "Lọ 25 liều",
      "gia_vnd": 22000,
      "ghi_chu": "Bệnh truyền nhiễm lây nhanh, ưu tiên phòng bằng vaccine đúng type - lịch 2 mũi/năm là nhu cầu định kỳ ổn định."
    },
    {
      "ma_sp": "TP01",
      "ten": "Anova Enroflox 10%",
      "hang": "Anova Pharma",
      "loai": "khang_sinh",
      "vat_nuoi": "heo/gà",
      "cong_dung": "Kháng sinh Enrofloxacin 10% phổ rộng, điều trị nhiễm khuẩn đường ruột và hô hấp.",
      "chi_dinh": "Tiêu chảy do vi khuẩn, viêm phổi, tụ huyết trùng, CRD, nhiễm khuẩn kế phát.",
      "lieu_luong": "1 ml/20 kg thể trọng/ngày, dùng 3-5 ngày.",
      "duong_dung": "Tiêm bắp hoặc pha nước uống.",
      "doi_tuong": "Heo, gà.",
      "thoi_gian_ngung": "Heo: ngừng thuốc 10 ngày trước giết mổ; gà thịt theo khuyến cáo nhà sản xuất; không dùng cho gà đẻ lấy trứng thương phẩm.",
      "chong_chi_dinh": "Không dùng cho thú mẫn cảm fluoroquinolone; thận trọng thú non đang phát triển sụn.",
      "co_che_tac_dong": "Fluoroquinolone ức chế enzym DNA-gyrase và topoisomerase IV của vi khuẩn → diệt khuẩn (bactericidal).",
      "duoc_dong_hoc": "Hấp thu tốt, phân bố rộng vào mô (phổi, ruột); diệt khuẩn phụ thuộc nồng độ - tối ưu khi Cmax/MIC cao, nên dùng đủ liều 1 lần/ngày.",
      "pho_tac_dong": "Phổ rộng trên Gram âm (E.coli, Salmonella, Pasteurella) và Mycoplasma; yếu trên vi khuẩn kỵ khí.",
      "bang_chung": "Nhóm fluoroquinolone đáp ứng nhanh trong nhiễm khuẩn hô hấp - tiêu hóa khi dùng đúng liều/liệu trình; nên dựa trên kháng sinh đồ.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP-WHO, kiểm nghiệm hàm lượng hoạt chất từng lô.",
      "tuong_tac_luu_y": "Là kháng sinh quan trọng (CIA) - hạn chế dùng tuyến đầu, ưu tiên theo kháng sinh đồ để giảm kháng thuốc; tránh dùng chung ion kim loại (Ca, Mg, Al) làm giảm hấp thu.",
      "bao_quan": "Nơi khô mát, tránh ánh sáng; đậy kín sau khi mở.",
      "quy_cach": "Chai 100 ml",
      "gia_vnd": 95000,
      "ghi_chu": "Kê theo chỉ định thú y, ưu tiên kháng sinh đồ; không lạm dụng để tránh kháng kháng sinh và tồn dư."
    },
    {
      "ma_sp": "TP02",
      "ten": "Anova Amox-Colis",
      "hang": "Anova Pharma",
      "loai": "khang_sinh",
      "vat_nuoi": "heo",
      "cong_dung": "Kết hợp Amoxicillin + Colistin, đặc trị tiêu chảy heo con do vi khuẩn đường ruột.",
      "chi_dinh": "Tiêu chảy phân trắng/vàng do E.coli, phó thương hàn ở heo con.",
      "lieu_luong": "1 g/10 kg thể trọng/ngày, dùng 3-5 ngày.",
      "duong_dung": "Pha nước uống hoặc trộn thức ăn.",
      "doi_tuong": "Heo con, heo cai sữa.",
      "thoi_gian_ngung": "Ngừng thuốc 7 ngày trước giết mổ.",
      "chong_chi_dinh": "Thú mẫn cảm penicillin.",
      "co_che_tac_dong": "Amoxicillin (beta-lactam) ức chế tổng hợp vách tế bào; Colistin phá màng tế bào vi khuẩn Gram âm tại ruột - tác động bổ trợ.",
      "duoc_dong_hoc": "Amoxicillin hấp thu toàn thân, diệt khuẩn phụ thuộc thời gian (T>MIC) nên cần chia liều đều; Colistin ít hấp thu, tác dụng tại lòng ruột.",
      "pho_tac_dong": "Gram âm đường ruột (E.coli, Salmonella) và một số Gram dương; phối hợp tăng hiệu quả trên tiêu chảy heo con.",
      "bang_chung": "Phối hợp được dùng phổ biến trong tiêu chảy heo con; kết hợp bù điện giải tăng tỷ lệ hồi phục.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP-WHO.",
      "tuong_tac_luu_y": "Colistin là kháng sinh dự trữ quan trọng cho người - dùng có trách nhiệm, theo kháng sinh đồ, đúng liệu trình; tránh dùng kéo dài dự phòng.",
      "bao_quan": "Nơi khô mát, tránh ẩm; đóng kín gói sau khi mở.",
      "quy_cach": "Gói 100 g",
      "gia_vnd": 78000,
      "ghi_chu": "Kết hợp bù điện giải + men vi sinh để tăng hiệu quả và rút ngắn thời gian hồi phục."
    },
    {
      "ma_sp": "TP03",
      "ten": "Anova Tylo-Doxy",
      "hang": "Anova Pharma",
      "loai": "khang_sinh",
      "vat_nuoi": "heo",
      "cong_dung": "Tylosin + Doxycycline đặc trị bệnh hô hấp, đặc biệt nhóm không vách (Mycoplasma).",
      "chi_dinh": "Suyễn heo (Mycoplasma), viêm phổi - màng phổi (APP), CRD trên gà.",
      "lieu_luong": "1 g/15 kg thể trọng/ngày, dùng 5-7 ngày.",
      "duong_dung": "Pha nước uống/trộn thức ăn.",
      "doi_tuong": "Heo thịt (và gà theo khuyến cáo).",
      "thoi_gian_ngung": "Ngừng thuốc 14 ngày trước giết mổ.",
      "chong_chi_dinh": "Không dùng cùng beta-lactam (đối kháng cơ chế).",
      "co_che_tac_dong": "Tylosin (macrolide) và Doxycycline (tetracycline) đều ức chế tổng hợp protein ở ribosome vi khuẩn - kìm khuẩn, hiệp đồng tốt trên Mycoplasma.",
      "duoc_dong_hoc": "Doxycycline thân lipid, thấm tốt vào mô phổi; macrolide tích lũy cao trong mô và đại thực bào - phù hợp nhiễm khuẩn hô hấp nội bào.",
      "pho_tac_dong": "Mycoplasma, Pasteurella, một số Gram dương và vi khuẩn nội bào đường hô hấp.",
      "bang_chung": "Phối hợp macrolide + tetracycline cho hiệu quả cao với suyễn và phức hợp hô hấp mạn.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP-WHO.",
      "tuong_tac_luu_y": "Không phối hợp beta-lactam; tránh dùng chung ion Ca/Mg (giảm hấp thu doxycycline); dùng đủ liệu trình tránh tái phát.",
      "bao_quan": "Nơi khô mát, tránh ánh sáng và ẩm.",
      "quy_cach": "Gói 1 kg",
      "gia_vnd": 360000,
      "ghi_chu": "Hiệu quả cao với bệnh hô hấp mãn tính; kết hợp cải thiện thông thoáng chuồng để giảm tái phát."
    },
    {
      "ma_sp": "TP04",
      "ten": "Anova Florfen-200",
      "hang": "Anova Pharma",
      "loai": "khang_sinh",
      "vat_nuoi": "heo",
      "cong_dung": "Florfenicol 20% điều trị nhiễm khuẩn hô hấp nặng, đáp ứng nhanh.",
      "chi_dinh": "Viêm phổi, tụ huyết trùng, APP cấp, nhiễm khuẩn hô hấp kế phát PRRS/PCV2.",
      "lieu_luong": "1 ml/15 kg thể trọng, tiêm 2 mũi cách 48 giờ.",
      "duong_dung": "Tiêm bắp.",
      "doi_tuong": "Heo.",
      "thoi_gian_ngung": "Ngừng thuốc 14 ngày trước giết mổ.",
      "chong_chi_dinh": "Không dùng cho heo đực giống khai thác tinh.",
      "co_che_tac_dong": "Florfenicol (phenicol) ức chế tổng hợp protein ở ribosome 50S vi khuẩn - kìm khuẩn phổ rộng, không gây suy tủy như chloramphenicol.",
      "duoc_dong_hoc": "Hấp thu nhanh, phân bố tốt vào mô phổi; dạng tiêm tác dụng kéo dài cho phép phác đồ 2 mũi cách 48 giờ.",
      "pho_tac_dong": "Phổ rộng Gram âm và Gram dương hô hấp: Pasteurella, Actinobacillus (APP), Haemophilus, một số vi khuẩn kháng tetracycline.",
      "bang_chung": "Lựa chọn mạnh cho hô hấp cấp do vi khuẩn; đáp ứng lâm sàng nhanh khi điều trị sớm.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP-WHO.",
      "tuong_tac_luu_y": "Không dùng cho thú khai thác giống đực; tránh phối hợp đối kháng với beta-lactam/aminoglycoside; tuân thủ thời gian ngừng thuốc dài (14 ngày).",
      "bao_quan": "Nơi khô mát, tránh ánh sáng.",
      "quy_cach": "Chai 100 ml",
      "gia_vnd": 145000,
      "ghi_chu": "Dùng cho ca hô hấp nặng, đáp ứng nhanh; điều trị sớm cho hiệu quả và chi phí tốt nhất."
    },
    {
      "ma_sp": "TP05",
      "ten": "Anova Para-C",
      "hang": "Anova Pharma",
      "loai": "ho_tro",
      "vat_nuoi": "heo/gà",
      "cong_dung": "Hạ sốt, giảm đau, chống stress (Paracetamol + Vitamin C); hỗ trợ trong điều trị bệnh truyền nhiễm.",
      "chi_dinh": "Heo/gà sốt cao, stress nhiệt - vận chuyển, kết hợp phác đồ điều trị.",
      "lieu_luong": "1 g/lít nước uống, dùng 2-3 ngày.",
      "duong_dung": "Pha nước uống.",
      "doi_tuong": "Heo, gà.",
      "thoi_gian_ngung": "1 ngày.",
      "chong_chi_dinh": "Không dùng quá liều kéo dài (ảnh hưởng gan).",
      "co_che_tac_dong": "Paracetamol ức chế tổng hợp prostaglandin trung ương → hạ sốt - giảm đau; Vitamin C chống oxy hóa, hỗ trợ giảm stress.",
      "duoc_dong_hoc": "Hấp thu nhanh qua nước uống, tác dụng hạ sốt trong vài giờ; chuyển hóa qua gan.",
      "pho_tac_dong": "Không phải kháng sinh - dùng hỗ trợ triệu chứng, tăng đáp ứng ăn uống trong giai đoạn sốt.",
      "bang_chung": "Hạ sốt giúp con vật ăn lại sớm, tăng hiệu quả điều trị nền và giảm hao hụt.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP-WHO.",
      "tuong_tac_luu_y": "Không thay thế kháng sinh/vaccine; dùng đúng liều - thời gian; thận trọng khi gan thú đã tổn thương.",
      "bao_quan": "Nơi khô mát, tránh ẩm.",
      "quy_cach": "Gói 1 kg",
      "gia_vnd": 110000,
      "ghi_chu": "Bán kèm phác đồ điều trị để giảm sốt, giúp con vật ăn lại sớm và tăng đáp ứng - tăng giá trị giỏ hàng."
    },
    {
      "ma_sp": "BT01",
      "ten": "Anova Electrolyte-Plus",
      "hang": "Anova Pharma",
      "loai": "bo_tro",
      "vat_nuoi": "heo/gà",
      "cong_dung": "Bù nước - điện giải, vitamin và glucose; chống mất nước và stress.",
      "chi_dinh": "Tiêu chảy, stress nhiệt, sau điều trị, sau vận chuyển - úm.",
      "lieu_luong": "1 g/lít nước uống.",
      "duong_dung": "Pha nước uống.",
      "doi_tuong": "Heo, gà.",
      "thoi_gian_ngung": "Không.",
      "chong_chi_dinh": "Không.",
      "co_che_tac_dong": "Cung cấp Na+/K+/Cl- và glucose phục hồi cân bằng nước - điện giải và năng lượng, hỗ trợ hấp thu nước qua cơ chế đồng vận chuyển Na-glucose ở ruột.",
      "duoc_dong_hoc": "Tác dụng nhanh qua đường uống; nên cho uống tự do trong giai đoạn mất nước.",
      "pho_tac_dong": "Sản phẩm bổ trợ - dùng nền cho mọi phác đồ điều trị tiêu chảy/stress.",
      "bang_chung": "Bù điện giải làm giảm tỷ lệ chết do mất nước trong tiêu chảy - nguyên tắc điều trị cơ bản.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP.",
      "tuong_tac_luu_y": "Pha nước sạch dùng trong ngày; không pha chung kháng sinh kỵ ion nếu nhà sản xuất khuyến cáo riêng.",
      "bao_quan": "Nơi khô mát, đóng kín tránh hút ẩm.",
      "quy_cach": "Gói 1 kg",
      "gia_vnd": 90000,
      "ghi_chu": "Bán kèm khi điều trị tiêu chảy và mùa nóng để tăng tỷ lệ hồi phục - sản phẩm tiêu thụ đều, biên tốt."
    },
    {
      "ma_sp": "ST01",
      "ten": "Anova Iodine 10%",
      "hang": "Anova Pharma",
      "loai": "sat_trung",
      "vat_nuoi": "heo/gà",
      "cong_dung": "Sát trùng phổ rộng (gốc Iodine) cho chuồng trại, dụng cụ, phương tiện; cốt lõi an toàn sinh học.",
      "chi_dinh": "Phòng dịch (đặc biệt ASF, cúm gia cầm, Gumboro), vệ sinh chuồng trại định kỳ và hố sát trùng.",
      "lieu_luong": "Pha 1:200 - 1:400 phun sát trùng tùy mục đích (định kỳ vs có dịch).",
      "duong_dung": "Phun, ngâm, hố sát trùng.",
      "doi_tuong": "Chuồng trại, dụng cụ, phương tiện.",
      "thoi_gian_ngung": "Không áp dụng.",
      "chong_chi_dinh": "Không phun trực tiếp lên thú khi nồng độ cao.",
      "co_che_tac_dong": "Iốt tự do oxy hóa protein - acid nucleic của vi sinh vật, diệt phổ rộng virus (kể cả virus trần như IBDV), vi khuẩn, nấm.",
      "duoc_dong_hoc": "Tác dụng tiếp xúc tức thì; hiệu lực giảm khi có nhiều chất hữu cơ - cần làm sạch trước khi sát trùng.",
      "pho_tac_dong": "Virus có vỏ và không vỏ, vi khuẩn, nấm, bào tử ở nồng độ phù hợp.",
      "bang_chung": "Sát trùng đúng quy trình là tuyến phòng thủ then chốt cắt đường lây ASF/cúm; hiệu quả phụ thuộc làm sạch trước.",
      "tieu_chuan": "Đạt tiêu chuẩn chất sát trùng dùng trong thú y.",
      "tuong_tac_luu_y": "Làm sạch chất hữu cơ trước khi phun; không trộn với chất tẩy kiềm mạnh; luân phiên nhóm sát trùng để tránh quen thuốc.",
      "bao_quan": "Nơi mát, tránh ánh sáng; đậy kín (iốt bay hơi).",
      "quy_cach": "Can 5 lít",
      "gia_vnd": 320000,
      "ghi_chu": "Sản phẩm cốt lõi cho an toàn sinh học phòng ASF/cúm - biên lợi nhuận tốt, cross-sell mạnh, gắn với mọi kịch bản phòng dịch."
    },
    {
      "ma_sp": "VX05",
      "ten": "Vaccine Tụ huyết trùng + Phó thương hàn heo",
      "hang": "Navetco (Nova Consumer)",
      "loai": "vaccine",
      "vat_nuoi": "heo",
      "cong_dung": "Vaccine kép phòng Tụ huyết trùng và Phó thương hàn heo - phòng 2 bệnh vi khuẩn nền tảng.",
      "chi_dinh": "Phòng 2 bệnh vi khuẩn phổ biến ở heo thịt nuôi mật độ cao.",
      "lieu_luong": "1 liều (2 ml)/con, nhắc lại theo lịch.",
      "duong_dung": "Tiêm bắp.",
      "doi_tuong": "Heo con từ 3 tuần tuổi.",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Heo đang ốm.",
      "co_che_tac_dong": "Kháng nguyên vi khuẩn vô hoạt kích thích kháng thể đặc hiệu chống Pasteurella và Salmonella.",
      "duoc_dong_hoc": "Cần mũi nhắc để duy trì hiệu giá bảo hộ qua giai đoạn nguy cơ.",
      "pho_tac_dong": "Bảo hộ với các serovar/type phổ biến trong vaccine; giảm phát bệnh khi có stress.",
      "bang_chung": "Vaccine vi khuẩn nền tảng giúp giảm tần suất dùng kháng sinh trị tụ huyết trùng - phó thương hàn.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP.",
      "tuong_tac_luu_y": "Tiêm cho heo khỏe; kết hợp quản lý giảm stress để tối ưu hiệu quả; lắc đều trước khi dùng.",
      "bao_quan": "Bảo quản 2-8°C, không đông băng.",
      "quy_cach": "Lọ 20 liều",
      "gia_vnd": 7000,
      "ghi_chu": "Bộ đôi phòng bệnh vi khuẩn nền tảng - thông điệp 'phòng để giảm kháng sinh' phù hợp xu hướng dùng thuốc có trách nhiệm."
    },
    {
      "ma_sp": "VX06",
      "ten": "Vaccine Newcastle (gà rù)",
      "hang": "Navetco (Nova Consumer)",
      "loai": "vaccine",
      "vat_nuoi": "gà",
      "cong_dung": "Phòng bệnh Newcastle (gà rù) - vaccine nền tảng bắt buộc trong mọi quy trình nuôi gà.",
      "chi_dinh": "Phòng Newcastle cho gà thịt và gà đẻ theo lịch (nhược độc nhỏ mắt-mũi/uống + vô hoạt tiêm).",
      "lieu_luong": "1 liều/con; nhỏ mắt-mũi hoặc tiêm tùy chủng vaccine.",
      "duong_dung": "Nhỏ mắt/mũi, pha nước uống hoặc tiêm dưới da.",
      "doi_tuong": "Gà từ 3-5 ngày tuổi, nhắc lại theo lịch.",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Gà đang ốm/sốt.",
      "co_che_tac_dong": "Chủng nhược độc tạo miễn dịch niêm mạc - toàn thân; chủng vô hoạt (kèm bổ trợ) nâng hiệu giá kháng thể bền cho gà đẻ.",
      "duoc_dong_hoc": "Miễn dịch hình thành nhanh sau nhỏ/uống; lịch tiêm nhắc thiết kế theo kháng thể mẹ truyền và áp lực dịch vùng.",
      "pho_tac_dong": "Bảo hộ chéo tốt trong nhóm NDV; chọn chủng (Lasota, clone) theo độ tuổi và mục tiêu.",
      "bang_chung": "Tiêm đúng lịch + đúng đường đưa cho hiệu giá HI bảo hộ; đánh giá HI giúp định lượng hiệu quả.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP.",
      "tuong_tac_luu_y": "Pha vaccine nhược độc bằng nước không có chất sát trùng/clo; dùng ngay sau pha; tránh stress khi đưa vaccine.",
      "bao_quan": "Bảo quản 2-8°C, tránh ánh sáng; nhược độc đông khô giữ lạnh nghiêm ngặt.",
      "quy_cach": "Lọ 100-500 liều",
      "gia_vnd": 600,
      "ghi_chu": "Vaccine nền tảng cho đàn gà; nhắc lịch định kỳ và đo HI để chứng minh hiệu quả - mở rộng tư vấn cho khách quy mô lớn."
    },
    {
      "ma_sp": "TP06",
      "ten": "Anova Cocci-Stop",
      "hang": "Anova Pharma",
      "loai": "dac_tri",
      "vat_nuoi": "gà",
      "cong_dung": "Đặc trị bệnh cầu trùng (Coccidiosis) ở gà - hoạt chất Toltrazuril tác động mọi giai đoạn nội bào của Eimeria.",
      "chi_dinh": "Gà phân có máu/phân sáp do cầu trùng (E. tenella, E. acervulina, E. necatrix...).",
      "lieu_luong": "Pha nước uống theo liều khuyến cáo, điều trị 2 ngày liên tiếp (hoặc 3-5 ngày tùy phác đồ).",
      "duong_dung": "Pha nước uống.",
      "doi_tuong": "Gà thịt, gà hậu bị.",
      "thoi_gian_ngung": "Ngừng thuốc 5 ngày trước giết mổ.",
      "chong_chi_dinh": "Không dùng cho gà đẻ trứng thương phẩm trong thời gian khai thác (theo khuyến cáo).",
      "co_che_tac_dong": "Toltrazuril (nhóm triazinetrione) tác động lên tất cả giai đoạn phát triển nội bào của Eimeria (cả vô tính và hữu tính), diệt mầm và cắt vòng đời.",
      "duoc_dong_hoc": "Hấp thu qua nước uống, tác dụng kéo dài cho phép phác đồ ngắn 1-2 ngày; vẫn cho phép hình thành miễn dịch tự nhiên với cầu trùng.",
      "pho_tac_dong": "Đặc hiệu trên các loài Eimeria gây bệnh ở gà.",
      "bang_chung": "Toltrazuril cho hiệu quả cao và phác đồ ngắn; luân phiên hoạt chất giúp hạn chế kháng thuốc.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP-WHO.",
      "tuong_tac_luu_y": "Luân phiên với nhóm hoạt chất khác để tránh kháng; kết hợp Vitamin K cầm máu và giữ nền chuồng khô để giảm tái nhiễm.",
      "bao_quan": "Nơi khô mát, tránh ánh sáng.",
      "quy_cach": "Gói 100 g / chai 1 lít",
      "gia_vnd": 65000,
      "ghi_chu": "Bán kèm điện giải - Vitamin K để tăng hồi phục; tư vấn luân phiên hoạt chất chống kháng thuốc tạo uy tín kỹ thuật."
    },
    {
      "ma_sp": "VX07",
      "ten": "Vaccine Circovirus heo (PCV2)",
      "hang": "Anova Biotech (nhập khẩu)",
      "loai": "vaccine",
      "vat_nuoi": "heo",
      "cong_dung": "Phòng bệnh do Circovirus type 2 (PCV2) - giảm còi cọc, cải thiện tăng trọng và độ đồng đều sau cai sữa.",
      "chi_dinh": "Phòng PCVAD/PMWS cho heo con; thường tiêm quanh thời điểm cai sữa.",
      "lieu_luong": "1 liều (1-2 ml)/con theo nhà sản xuất.",
      "duong_dung": "Tiêm bắp.",
      "doi_tuong": "Heo con từ 2-3 tuần tuổi (theo khuyến cáo từng loại vaccine).",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Heo đang ốm/sốt.",
      "co_che_tac_dong": "Vaccine tiểu phần (kháng nguyên capsid ORF2) hoặc vô hoạt kích thích kháng thể trung hòa, bảo vệ mô lympho khỏi suy kiệt do PCV2.",
      "duoc_dong_hoc": "Bảo hộ hình thành sau 2-3 tuần; lựa chọn thời điểm tiêm để tránh trùng đỉnh đồng nhiễm PRRS/Mycoplasma.",
      "pho_tac_dong": "Đặc hiệu PCV2; có thể kết hợp cùng phòng Mycoplasma trong chương trình tiêm gộp.",
      "bang_chung": "Vaccine PCV2 thuộc nhóm có hiệu quả kinh tế (ROI) rõ rệt nhất trên heo nhờ cải thiện ADG và giảm chết - loại thải.",
      "tieu_chuan": "Đạt tiêu chuẩn nhà sản xuất, có hồ sơ lưu hành.",
      "tuong_tac_luu_y": "Tiêm cho heo khỏe; phối hợp kiểm soát đồng nhiễm để tối ưu hiệu quả; tuân thủ chuỗi lạnh.",
      "bao_quan": "Bảo quản 2-8°C, không đông băng, tránh ánh sáng.",
      "quy_cach": "Lọ 25-50 liều",
      "gia_vnd": 16000,
      "ghi_chu": "Một trong các vaccine có ROI thuyết phục nhất - thông điệp 'phòng PCV2 để tăng trọng đều và giảm kháng sinh' rất mạnh với khách kỹ thuật."
    },
    {
      "ma_sp": "VX08",
      "ten": "Vaccine Gumboro (IBD)",
      "hang": "Navetco (Nova Consumer)",
      "loai": "vaccine",
      "vat_nuoi": "gà",
      "cong_dung": "Phòng bệnh Gumboro (viêm túi Fabricius truyền nhiễm - IBD) - bảo vệ cơ quan miễn dịch của gà non.",
      "chi_dinh": "Phòng IBD cho gà thịt và hậu bị; chọn thời điểm theo kháng thể mẹ truyền.",
      "lieu_luong": "1 liều/con theo chủng (trung bình/trung gian-cộng).",
      "duong_dung": "Pha nước uống hoặc nhỏ mắt; vaccine phức hợp có thể tiêm tại lò ấp.",
      "doi_tuong": "Gà con; thời điểm xác định bằng công thức Deventer dựa trên ELISA kháng thể mẹ truyền.",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Gà đang ốm.",
      "co_che_tac_dong": "Chủng nhược độc tạo miễn dịch chủ động bảo vệ tế bào lympho B ở túi Fabricius; chọn độc lực chủng phù hợp để vượt kháng thể mẹ truyền mà không gây hại.",
      "duoc_dong_hoc": "Hiệu quả phụ thuộc đúng thời điểm so với kháng thể mẹ truyền - tiêm sớm bị trung hòa, tiêm muộn để hở khoảng trống miễn dịch.",
      "pho_tac_dong": "Bảo hộ với chủng IBDV lưu hành (gồm chủng độc lực cao vvIBDV tùy loại vaccine).",
      "bang_chung": "Chọn đúng thời điểm theo ELISA (Deventer) là yếu tố quyết định thành công phòng Gumboro.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP.",
      "tuong_tac_luu_y": "Pha bằng nước sạch không clo/sát trùng; cho uống khi gà khát để đảm bảo nhận đủ liều; bảo vệ vaccine khỏi nhiệt - nắng.",
      "bao_quan": "Bảo quản 2-8°C, tránh ánh sáng; dùng ngay sau pha.",
      "quy_cach": "Lọ 500-1000 liều",
      "gia_vnd": 500,
      "ghi_chu": "Điểm tư vấn cao cấp: tính thời điểm tiêm theo ELISA kháng thể mẹ truyền - dịch vụ kỹ thuật tạo khác biệt và gắn kết khách lớn."
    },
    {
      "ma_sp": "VX09",
      "ten": "Vaccine Cúm gia cầm (AI - H5N1/H5N6)",
      "hang": "Navetco (Nova Consumer)",
      "loai": "vaccine",
      "vat_nuoi": "gà",
      "cong_dung": "Phòng cúm gia cầm độc lực cao (H5) - vaccine vô hoạt nhũ dầu theo chương trình tiêm phòng quốc gia.",
      "chi_dinh": "Phòng cúm A/H5 cho gà theo chỉ đạo của cơ quan thú y, đặc biệt vùng nguy cơ và mùa lạnh - di trú.",
      "lieu_luong": "1 liều (0.3-0.5 ml)/con tùy lứa tuổi, nhắc lại theo lịch.",
      "duong_dung": "Tiêm dưới da cổ hoặc tiêm bắp.",
      "doi_tuong": "Gà theo độ tuổi quy định trong chương trình; nhắc lại định kỳ.",
      "thoi_gian_ngung": "Không áp dụng (vaccine).",
      "chong_chi_dinh": "Gà đang ốm/sốt; tuân thủ chỉ đạo chương trình tiêm.",
      "co_che_tac_dong": "Kháng nguyên virus cúm vô hoạt + nhũ dầu kích thích kháng thể trung hòa đặc hiệu kháng nguyên H, giảm phát bệnh và bài thải virus.",
      "duoc_dong_hoc": "Cần 2-3 tuần để đạt hiệu giá bảo hộ; chọn vaccine khớp clade kháng nguyên lưu hành để hiệu quả tối ưu.",
      "pho_tac_dong": "Đặc hiệu theo subtype/clade H5 trong vaccine; cần cập nhật theo giám sát virus.",
      "bang_chung": "Tiêm phòng theo chương trình giúp giảm ổ dịch và bài thải virus - công cụ kiểm soát cấp quốc gia.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP, theo chương trình giám sát quốc gia.",
      "tuong_tac_luu_y": "Tuân thủ chỉ đạo cơ quan thú y; bảo quản chuỗi lạnh nghiêm ngặt, không đông băng (hỏng nhũ dầu); bảo hộ cho người tiêm do nguy cơ zoonosis.",
      "bao_quan": "Bảo quản 2-8°C, không đông băng.",
      "quy_cach": "Lọ 250-500 liều",
      "gia_vnd": 900,
      "ghi_chu": "Gắn với an toàn sinh học và trách nhiệm cộng đồng (nguy cơ lây người) - thông điệp tư vấn có chiều sâu xã hội, phù hợp khách quy mô lớn."
    },
    {
      "ma_sp": "BT02",
      "ten": "Anova ProGut (men vi sinh)",
      "hang": "Anova Pharma",
      "loai": "bo_tro",
      "vat_nuoi": "heo/gà",
      "cong_dung": "Men vi sinh (probiotic) đa chủng + prebiotic, cân bằng hệ vi sinh đường ruột, giảm tiêu chảy và cải thiện hấp thu.",
      "chi_dinh": "Hỗ trợ giai đoạn cai sữa - úm, sau dùng kháng sinh, đổi cám; phòng tiêu chảy không do bệnh cấp.",
      "lieu_luong": "1 g/lít nước uống hoặc trộn 1 kg/tấn thức ăn (theo khuyến cáo).",
      "duong_dung": "Pha nước uống hoặc trộn thức ăn.",
      "doi_tuong": "Heo con, heo cai sữa, gà.",
      "thoi_gian_ngung": "Không.",
      "chong_chi_dinh": "Không.",
      "co_che_tac_dong": "Vi khuẩn có lợi (Bacillus, Lactobacillus) cạnh tranh loại trừ vi khuẩn gây bệnh, sinh acid hữu cơ và enzyme tiêu hóa, củng cố hàng rào niêm mạc ruột.",
      "duoc_dong_hoc": "Bào tử Bacillus bền acid dạ dày, nảy mầm tại ruột; hiệu quả tăng khi dùng liên tục và sau liệu trình kháng sinh.",
      "pho_tac_dong": "Hỗ trợ sức khỏe đường ruột - giảm áp lực dùng kháng sinh; không phải thuốc điều trị.",
      "bang_chung": "Probiotic cải thiện FCR và giảm tiêu chảy sau cai sữa, là công cụ giảm kháng sinh dự phòng.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP; đảm bảo mật độ CFU sống.",
      "tuong_tac_luu_y": "Không pha chung trực tiếp với kháng sinh hoặc nước có chất sát trùng/clo (diệt lợi khuẩn); dùng cách kháng sinh vài giờ.",
      "bao_quan": "Nơi khô mát, tránh nóng để giữ lợi khuẩn sống.",
      "quy_cach": "Gói 1 kg",
      "gia_vnd": 120000,
      "ghi_chu": "Trụ cột của chiến lược 'giảm kháng sinh' - bán kèm sau điều trị và giai đoạn cai sữa, đúng xu hướng chăn nuôi an toàn."
    },
    {
      "ma_sp": "BT03",
      "ten": "Anova Multivit-ADE + B-Complex",
      "hang": "Anova Pharma",
      "loai": "bo_tro",
      "vat_nuoi": "heo/gà",
      "cong_dung": "Bổ sung vitamin A, D3, E và nhóm B; nâng đề kháng, chống stress, hỗ trợ phục hồi sau bệnh và tăng đáp ứng vaccine.",
      "chi_dinh": "Giai đoạn úm, chuyển mùa, sau bệnh, quanh thời điểm tiêm vaccine, stress nhiệt - vận chuyển.",
      "lieu_luong": "1 ml hoặc 1 g/lít nước uống (theo dạng), dùng 3-5 ngày.",
      "duong_dung": "Pha nước uống.",
      "doi_tuong": "Heo, gà mọi lứa tuổi.",
      "thoi_gian_ngung": "Không.",
      "chong_chi_dinh": "Không (tránh quá liều vitamin tan trong dầu kéo dài).",
      "co_che_tac_dong": "Vitamin tham gia chuyển hóa, miễn dịch và toàn vẹn biểu mô; vitamin E + A hỗ trợ đáp ứng kháng thể, nhóm B hỗ trợ chuyển hóa năng lượng - phục hồi.",
      "duoc_dong_hoc": "Hấp thu nhanh qua nước uống; vitamin tan trong dầu (A,D,E) tích lũy nên dùng theo đợt.",
      "pho_tac_dong": "Bổ trợ dinh dưỡng - miễn dịch; không thay thế vaccine/kháng sinh.",
      "bang_chung": "Bổ sung vitamin quanh thời điểm vaccine và lúc stress giúp cải thiện đáp ứng miễn dịch và giảm hao hụt.",
      "tieu_chuan": "Sản xuất theo tiêu chuẩn GMP.",
      "tuong_tac_luu_y": "Không lạm dụng vitamin tan trong dầu kéo dài; pha nước sạch dùng trong ngày.",
      "bao_quan": "Nơi khô mát, tránh ánh sáng (vitamin dễ phân hủy bởi nhiệt - ánh sáng).",
      "quy_cach": "Chai 1 lít / gói 1 kg",
      "gia_vnd": 105000,
      "ghi_chu": "Bán kèm quanh lịch vaccine và giai đoạn stress để 'tăng đáp ứng miễn dịch' - gắn khoa học với combo phòng bệnh."
    }
  ],
  "distributors": [
    {
      "id": "NPP001",
      "ten": "Đại lý Minh Phát",
      "khu_vuc": "Đồng Nai",
      "loai_hinh": "Đại lý cấp 1",
      "quy_mo": "Lớn - phủ ~40 trại heo",
      "cong_no_vnd": 85000000,
      "lich_su_don": [
        {
          "thang": "2026-01",
          "ma_sp": "VX01",
          "ten_sp": "NAVET-ASFVAC",
          "so_luong": 1500,
          "gia_tri_vnd": 51000000
        },
        {
          "thang": "2026-01",
          "ma_sp": "TP01",
          "ten_sp": "Anova Enroflox 10%",
          "so_luong": 120,
          "gia_tri_vnd": 11400000
        },
        {
          "thang": "2026-02",
          "ma_sp": "VX01",
          "ten_sp": "NAVET-ASFVAC",
          "so_luong": 1600,
          "gia_tri_vnd": 54400000
        },
        {
          "thang": "2026-03",
          "ma_sp": "TP01",
          "ten_sp": "Anova Enroflox 10%",
          "so_luong": 140,
          "gia_tri_vnd": 13300000
        },
        {
          "thang": "2026-03",
          "ma_sp": "BT01",
          "ten_sp": "Anova Electrolyte-Plus",
          "so_luong": 200,
          "gia_tri_vnd": 18000000
        },
        {
          "thang": "2026-04",
          "ma_sp": "VX01",
          "ten_sp": "NAVET-ASFVAC",
          "so_luong": 1500,
          "gia_tri_vnd": 51000000
        },
        {
          "thang": "2026-05",
          "ma_sp": "TP01",
          "ten_sp": "Anova Enroflox 10%",
          "so_luong": 130,
          "gia_tri_vnd": 12350000
        }
      ],
      "ghi_chu": "Khách trung thành dòng vaccine ASF + kháng sinh; chưa từng mua sát trùng và vaccine FMD/PRRS."
    },
    {
      "id": "NPP002",
      "ten": "Trại heo Tân Hưng",
      "khu_vuc": "Long An",
      "loai_hinh": "Trang trại lớn (mua trực tiếp)",
      "quy_mo": "~5.000 heo thịt",
      "cong_no_vnd": 40000000,
      "lich_su_don": [
        {
          "thang": "2026-01",
          "ma_sp": "TP03",
          "ten_sp": "Anova Tylo-Doxy",
          "so_luong": 30,
          "gia_tri_vnd": 10800000
        },
        {
          "thang": "2026-02",
          "ma_sp": "TP04",
          "ten_sp": "Anova Florfen-200",
          "so_luong": 60,
          "gia_tri_vnd": 8700000
        },
        {
          "thang": "2026-02",
          "ma_sp": "ST01",
          "ten_sp": "Anova Iodine 10%",
          "so_luong": 40,
          "gia_tri_vnd": 12800000
        },
        {
          "thang": "2026-03",
          "ma_sp": "TP03",
          "ten_sp": "Anova Tylo-Doxy",
          "so_luong": 35,
          "gia_tri_vnd": 12600000
        },
        {
          "thang": "2026-04",
          "ma_sp": "TP04",
          "ten_sp": "Anova Florfen-200",
          "so_luong": 55,
          "gia_tri_vnd": 7975000
        },
        {
          "thang": "2026-05",
          "ma_sp": "ST01",
          "ten_sp": "Anova Iodine 10%",
          "so_luong": 45,
          "gia_tri_vnd": 14400000
        }
      ],
      "ghi_chu": "Tập trung kháng sinh hô hấp + sát trùng; chưa tiêm vaccine ASF/PRRS dù nuôi mật độ cao - rủi ro dịch."
    },
    {
      "id": "NPP003",
      "ten": "Cửa hàng thú y Hòa Bình",
      "khu_vuc": "Tiền Giang",
      "loai_hinh": "Đại lý cấp 2",
      "quy_mo": "Vừa - bán lẻ cho hộ chăn nuôi",
      "cong_no_vnd": 18000000,
      "lich_su_don": [
        {
          "thang": "2026-02",
          "ma_sp": "TP02",
          "ten_sp": "Anova Amox-Colis",
          "so_luong": 50,
          "gia_tri_vnd": 3900000
        },
        {
          "thang": "2026-02",
          "ma_sp": "BT01",
          "ten_sp": "Anova Electrolyte-Plus",
          "so_luong": 60,
          "gia_tri_vnd": 5400000
        },
        {
          "thang": "2026-03",
          "ma_sp": "VX02",
          "ten_sp": "Vaccine Dịch tả heo cổ điển (CSF)",
          "so_luong": 300,
          "gia_tri_vnd": 2400000
        },
        {
          "thang": "2026-04",
          "ma_sp": "TP02",
          "ten_sp": "Anova Amox-Colis",
          "so_luong": 45,
          "gia_tri_vnd": 3510000
        },
        {
          "thang": "2026-05",
          "ma_sp": "TP05",
          "ten_sp": "Anova Para-C",
          "so_luong": 40,
          "gia_tri_vnd": 4400000
        }
      ],
      "ghi_chu": "Danh mục đa dạng nhưng giá trị nhỏ; tiềm năng nâng cấp lên dòng vaccine và kháng sinh cao cấp."
    },
    {
      "id": "NPP004",
      "ten": "HTX Chăn nuôi Phú Cường",
      "khu_vuc": "Bình Dương",
      "loai_hinh": "Hợp tác xã (mua chung)",
      "quy_mo": "~30 hộ thành viên",
      "cong_no_vnd": 25000000,
      "lich_su_don": [
        {
          "thang": "2026-01",
          "ma_sp": "BT01",
          "ten_sp": "Anova Electrolyte-Plus",
          "so_luong": 150,
          "gia_tri_vnd": 13500000
        },
        {
          "thang": "2026-02",
          "ma_sp": "TP02",
          "ten_sp": "Anova Amox-Colis",
          "so_luong": 80,
          "gia_tri_vnd": 6240000
        },
        {
          "thang": "2026-03",
          "ma_sp": "VX01",
          "ten_sp": "NAVET-ASFVAC",
          "so_luong": 600,
          "gia_tri_vnd": 20400000
        },
        {
          "thang": "2026-04",
          "ma_sp": "BT01",
          "ten_sp": "Anova Electrolyte-Plus",
          "so_luong": 160,
          "gia_tri_vnd": 14400000
        }
      ],
      "ghi_chu": "Mua điện giải đều; mới thử vaccine ASF 1 đợt - tiềm năng tăng đơn vaccine định kỳ."
    }
  ],
  "alerts": [
    {
      "id": "MA01",
      "vat_nuoi": "Heo",
      "tinh": "Đồng Nai",
      "benh_id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "muc_do": "nang",
      "note": "Nhiều trại nhỏ báo heo chết nhanh, da tai bụng tím; nghi ASF, đang chờ PCR.",
      "ngay": "2026-06-10"
    },
    {
      "id": "MA02",
      "vat_nuoi": "Heo",
      "tinh": "Đồng Nai",
      "benh_id": "D03",
      "ten_benh": "Tai xanh (PRRS)",
      "muc_do": "trung_binh",
      "note": "Nái sảy thai rải rác ở vùng nuôi mật độ cao.",
      "ngay": "2026-06-08"
    },
    {
      "id": "MA03",
      "vat_nuoi": "Heo",
      "tinh": "Long An",
      "benh_id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "muc_do": "nang",
      "note": "Ổ nghi ASF tại trại lớn, đã cách ly và báo thú y.",
      "ngay": "2026-06-09"
    },
    {
      "id": "MA04",
      "vat_nuoi": "Heo",
      "tinh": "Tiền Giang",
      "benh_id": "D05",
      "ten_benh": "Tiêu chảy heo con do E.coli",
      "muc_do": "trung_binh",
      "note": "Heo con sau cai sữa tiêu chảy nhiều, cần kháng sinh + điện giải.",
      "ngay": "2026-06-07"
    },
    {
      "id": "MA05",
      "vat_nuoi": "Heo",
      "tinh": "Bình Dương",
      "benh_id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "muc_do": "trung_binh",
      "note": "Hộ chăn nuôi quanh KCN báo heo bỏ ăn cụm.",
      "ngay": "2026-06-06"
    },
    {
      "id": "MA06",
      "vat_nuoi": "Heo",
      "tinh": "Tây Ninh",
      "benh_id": "D04",
      "ten_benh": "Lở mồm long móng (FMD)",
      "muc_do": "trung_binh",
      "note": "Heo chảy dãi, què; vùng biên giới vận chuyển nhiều.",
      "ngay": "2026-06-05"
    },
    {
      "id": "MA07",
      "vat_nuoi": "Heo",
      "tinh": "Bến Tre",
      "benh_id": "D12",
      "ten_benh": "Còi cọc do Circovirus (PCV2)",
      "muc_do": "nhe",
      "note": "Heo cai sữa kém đồng đều, nghi PCV2.",
      "ngay": "2026-06-04"
    },
    {
      "id": "MA08",
      "vat_nuoi": "Heo",
      "tinh": "Đồng Tháp",
      "benh_id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "muc_do": "nang",
      "note": "Ổ dịch ASF lan ở hộ nhỏ ven sông.",
      "ngay": "2026-06-03"
    },
    {
      "id": "MA09",
      "vat_nuoi": "Gà",
      "tinh": "Hà Nội",
      "benh_id": "D09",
      "ten_benh": "Newcastle (gà rù)",
      "muc_do": "trung_binh",
      "note": "Đàn gà giảm đẻ đột ngột, phân xanh, vài con vẹo cổ.",
      "ngay": "2026-06-10"
    },
    {
      "id": "MA10",
      "vat_nuoi": "Gà",
      "tinh": "Bắc Giang",
      "benh_id": "D13",
      "ten_benh": "Gumboro (IBD)",
      "muc_do": "nang",
      "note": "Gà 4 tuần chết tăng nhanh, túi Fabricius sưng.",
      "ngay": "2026-06-09"
    },
    {
      "id": "MA11",
      "vat_nuoi": "Gà",
      "tinh": "Hải Dương",
      "benh_id": "D14",
      "ten_benh": "Cúm gia cầm (HPAI)",
      "muc_do": "nang",
      "note": "Gà chết đột ngột hàng loạt, mào tích tím; đã báo dịch khẩn.",
      "ngay": "2026-06-08"
    },
    {
      "id": "MA12",
      "vat_nuoi": "Gà",
      "tinh": "Hưng Yên",
      "benh_id": "D11",
      "ten_benh": "CRD hô hấp mãn tính",
      "muc_do": "nhe",
      "note": "Gà khò khè, hắt hơi khi trở trời.",
      "ngay": "2026-06-06"
    },
    {
      "id": "MA13",
      "vat_nuoi": "Gà",
      "tinh": "Thái Bình",
      "benh_id": "D10",
      "ten_benh": "Cầu trùng gà",
      "muc_do": "trung_binh",
      "note": "Gà nuôi nền phân có máu sau mưa, nền ẩm.",
      "ngay": "2026-06-05"
    },
    {
      "id": "MA14",
      "vat_nuoi": "Heo",
      "tinh": "Thanh Hóa",
      "benh_id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "muc_do": "trung_binh",
      "note": "Vài hộ báo heo chết nhanh, đang lấy mẫu.",
      "ngay": "2026-06-07"
    },
    {
      "id": "MA15",
      "vat_nuoi": "Heo",
      "tinh": "Nghệ An",
      "benh_id": "D07",
      "ten_benh": "Tụ huyết trùng heo",
      "muc_do": "trung_binh",
      "note": "Heo sốt cao, khó thở sau đợt nắng nóng - vận chuyển.",
      "ngay": "2026-06-04"
    },
    {
      "id": "MA16",
      "vat_nuoi": "Heo",
      "tinh": "Đắk Lắk",
      "benh_id": "D04",
      "ten_benh": "Lở mồm long móng (FMD)",
      "muc_do": "trung_binh",
      "note": "FMD theo mùa ở vùng chăn nuôi phân tán.",
      "ngay": "2026-06-03"
    },
    {
      "id": "MA17",
      "vat_nuoi": "Gà",
      "tinh": "Gia Lai",
      "benh_id": "D09",
      "ten_benh": "Newcastle (gà rù)",
      "muc_do": "trung_binh",
      "note": "Đàn gà thả vườn quá lịch vaccine, có dấu hiệu thần kinh.",
      "ngay": "2026-06-02"
    },
    {
      "id": "MA18",
      "vat_nuoi": "Heo",
      "tinh": "Bà Rịa - Vũng Tàu",
      "benh_id": "D06",
      "ten_benh": "Suyễn heo",
      "muc_do": "nhe",
      "note": "Ho khan kéo dài, chậm lớn ở trại chuồng kín.",
      "ngay": "2026-06-05"
    },
    {
      "id": "MA19",
      "vat_nuoi": "Heo",
      "tinh": "Vĩnh Long",
      "benh_id": "D08",
      "ten_benh": "Phó thương hàn heo",
      "muc_do": "nhe",
      "note": "Heo cai sữa tiêu chảy phân vàng tanh, có sốt.",
      "ngay": "2026-06-04"
    },
    {
      "id": "MA20",
      "vat_nuoi": "Heo",
      "tinh": "TP. Hồ Chí Minh",
      "benh_id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "muc_do": "trung_binh",
      "note": "Cảnh báo vùng ven đô có giết mổ - vận chuyển nhiều.",
      "ngay": "2026-06-06"
    },
    {
      "id": "MA21",
      "vat_nuoi": "Gà",
      "tinh": "Nam Định",
      "benh_id": "D13",
      "ten_benh": "Gumboro (IBD)",
      "muc_do": "trung_binh",
      "note": "Đàn gà thịt nghi Gumboro, đang kiểm tra ELISA.",
      "ngay": "2026-06-03"
    },
    {
      "id": "MA22",
      "vat_nuoi": "Heo",
      "tinh": "Bình Phước",
      "benh_id": "D01",
      "ten_benh": "Dịch tả lợn châu Phi (ASF)",
      "muc_do": "nang",
      "note": "Ổ ASF tại trại vùng cao su, siết an toàn sinh học.",
      "ngay": "2026-06-08"
    }
  ],
  "provinces": [
    {
      "ten": "Hà Nội",
      "vung": "Đồng bằng sông Hồng",
      "lat": 21.03,
      "lng": 105.85
    },
    {
      "ten": "Hải Phòng",
      "vung": "Đồng bằng sông Hồng",
      "lat": 20.86,
      "lng": 106.68
    },
    {
      "ten": "Bắc Ninh",
      "vung": "Đồng bằng sông Hồng",
      "lat": 21.18,
      "lng": 106.07
    },
    {
      "ten": "Bắc Giang",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 21.27,
      "lng": 106.2
    },
    {
      "ten": "Hải Dương",
      "vung": "Đồng bằng sông Hồng",
      "lat": 20.94,
      "lng": 106.33
    },
    {
      "ten": "Hưng Yên",
      "vung": "Đồng bằng sông Hồng",
      "lat": 20.65,
      "lng": 106.05
    },
    {
      "ten": "Thái Bình",
      "vung": "Đồng bằng sông Hồng",
      "lat": 20.45,
      "lng": 106.34
    },
    {
      "ten": "Nam Định",
      "vung": "Đồng bằng sông Hồng",
      "lat": 20.42,
      "lng": 106.17
    },
    {
      "ten": "Hà Nam",
      "vung": "Đồng bằng sông Hồng",
      "lat": 20.54,
      "lng": 105.92
    },
    {
      "ten": "Ninh Bình",
      "vung": "Đồng bằng sông Hồng",
      "lat": 20.25,
      "lng": 105.97
    },
    {
      "ten": "Vĩnh Phúc",
      "vung": "Đồng bằng sông Hồng",
      "lat": 21.31,
      "lng": 105.6
    },
    {
      "ten": "Thái Nguyên",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 21.59,
      "lng": 105.84
    },
    {
      "ten": "Phú Thọ",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 21.4,
      "lng": 105.23
    },
    {
      "ten": "Quảng Ninh",
      "vung": "Đồng bằng sông Hồng",
      "lat": 21.0,
      "lng": 107.29
    },
    {
      "ten": "Lạng Sơn",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 21.85,
      "lng": 106.76
    },
    {
      "ten": "Sơn La",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 21.33,
      "lng": 103.9
    },
    {
      "ten": "Hòa Bình",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 20.81,
      "lng": 105.34
    },
    {
      "ten": "Lào Cai",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 22.34,
      "lng": 103.84
    },
    {
      "ten": "Yên Bái",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 21.7,
      "lng": 104.9
    },
    {
      "ten": "Tuyên Quang",
      "vung": "Trung du miền núi phía Bắc",
      "lat": 21.82,
      "lng": 105.21
    },
    {
      "ten": "Thanh Hóa",
      "vung": "Bắc Trung Bộ",
      "lat": 19.8,
      "lng": 105.78
    },
    {
      "ten": "Nghệ An",
      "vung": "Bắc Trung Bộ",
      "lat": 18.8,
      "lng": 105.7
    },
    {
      "ten": "Hà Tĩnh",
      "vung": "Bắc Trung Bộ",
      "lat": 18.34,
      "lng": 105.9
    },
    {
      "ten": "Quảng Bình",
      "vung": "Bắc Trung Bộ",
      "lat": 17.47,
      "lng": 106.6
    },
    {
      "ten": "Quảng Trị",
      "vung": "Bắc Trung Bộ",
      "lat": 16.75,
      "lng": 107.0
    },
    {
      "ten": "Thừa Thiên Huế",
      "vung": "Bắc Trung Bộ",
      "lat": 16.46,
      "lng": 107.6
    },
    {
      "ten": "Đà Nẵng",
      "vung": "Nam Trung Bộ",
      "lat": 16.05,
      "lng": 108.2
    },
    {
      "ten": "Quảng Nam",
      "vung": "Nam Trung Bộ",
      "lat": 15.57,
      "lng": 108.47
    },
    {
      "ten": "Quảng Ngãi",
      "vung": "Nam Trung Bộ",
      "lat": 15.12,
      "lng": 108.8
    },
    {
      "ten": "Bình Định",
      "vung": "Nam Trung Bộ",
      "lat": 14.0,
      "lng": 109.0
    },
    {
      "ten": "Phú Yên",
      "vung": "Nam Trung Bộ",
      "lat": 13.1,
      "lng": 109.3
    },
    {
      "ten": "Khánh Hòa",
      "vung": "Nam Trung Bộ",
      "lat": 12.25,
      "lng": 109.05
    },
    {
      "ten": "Ninh Thuận",
      "vung": "Nam Trung Bộ",
      "lat": 11.57,
      "lng": 108.99
    },
    {
      "ten": "Bình Thuận",
      "vung": "Nam Trung Bộ",
      "lat": 11.0,
      "lng": 108.1
    },
    {
      "ten": "Kon Tum",
      "vung": "Tây Nguyên",
      "lat": 14.35,
      "lng": 108.0
    },
    {
      "ten": "Gia Lai",
      "vung": "Tây Nguyên",
      "lat": 13.98,
      "lng": 108.0
    },
    {
      "ten": "Đắk Lắk",
      "vung": "Tây Nguyên",
      "lat": 12.7,
      "lng": 108.2
    },
    {
      "ten": "Đắk Nông",
      "vung": "Tây Nguyên",
      "lat": 12.0,
      "lng": 107.69
    },
    {
      "ten": "Lâm Đồng",
      "vung": "Tây Nguyên",
      "lat": 11.95,
      "lng": 108.44
    },
    {
      "ten": "Bình Phước",
      "vung": "Đông Nam Bộ",
      "lat": 11.75,
      "lng": 106.9
    },
    {
      "ten": "Tây Ninh",
      "vung": "Đông Nam Bộ",
      "lat": 11.3,
      "lng": 106.1
    },
    {
      "ten": "Bình Dương",
      "vung": "Đông Nam Bộ",
      "lat": 11.15,
      "lng": 106.7
    },
    {
      "ten": "Đồng Nai",
      "vung": "Đông Nam Bộ",
      "lat": 10.95,
      "lng": 107.0
    },
    {
      "ten": "Bà Rịa - Vũng Tàu",
      "vung": "Đông Nam Bộ",
      "lat": 10.5,
      "lng": 107.2
    },
    {
      "ten": "TP. Hồ Chí Minh",
      "vung": "Đông Nam Bộ",
      "lat": 10.78,
      "lng": 106.7
    },
    {
      "ten": "Long An",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.55,
      "lng": 106.4
    },
    {
      "ten": "Tiền Giang",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.4,
      "lng": 106.35
    },
    {
      "ten": "Bến Tre",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.24,
      "lng": 106.38
    },
    {
      "ten": "Trà Vinh",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 9.93,
      "lng": 106.34
    },
    {
      "ten": "Vĩnh Long",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.25,
      "lng": 105.97
    },
    {
      "ten": "Đồng Tháp",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.5,
      "lng": 105.7
    },
    {
      "ten": "An Giang",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.5,
      "lng": 105.2
    },
    {
      "ten": "Kiên Giang",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.0,
      "lng": 105.08
    },
    {
      "ten": "Cần Thơ",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 10.03,
      "lng": 105.78
    },
    {
      "ten": "Hậu Giang",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 9.78,
      "lng": 105.47
    },
    {
      "ten": "Sóc Trăng",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 9.6,
      "lng": 105.97
    },
    {
      "ten": "Bạc Liêu",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 9.29,
      "lng": 105.72
    },
    {
      "ten": "Cà Mau",
      "vung": "Đồng bằng sông Cửu Long",
      "lat": 9.18,
      "lng": 105.15
    }
  ],
  "promotions": [
    {
      "id": "KM01",
      "ten": "“Mua 10 tặng 1” cám heo thịt",
      "doi_tuong": "Đại lý & trang trại mua trực tiếp",
      "san_pham": "Cám heo thịt Anova Pig Grower G2, Finisher F3",
      "uu_dai": "Mua 10 bao tặng 1 bao cùng loại",
      "dieu_kien": "Áp dụng trong quý hiện tại.",
      "tag": "Cám heo"
    },
    {
      "id": "KM02",
      "ten": "Tích lũy điểm thưởng đại lý",
      "doi_tuong": "Đại lý",
      "san_pham": "Toàn bộ dòng cám",
      "uu_dai": "Mỗi 1 tấn cám tích 10 điểm; quy đổi quà hoặc trừ công nợ cuối quý",
      "dieu_kien": "Đạt mốc 500 điểm/quý được cộng thêm 50 điểm thưởng.",
      "tag": "Tích điểm"
    },
    {
      "id": "KM03",
      "ten": "Combo chăn nuôi an toàn",
      "doi_tuong": "Trang trại áp dụng an toàn sinh học",
      "san_pham": "Cám heo con Starter S1 + men ProGut + vaccine dịch tả heo",
      "uu_dai": "Giảm 5% trên giá trị combo",
      "dieu_kien": "Khuyến khích quy trình an toàn sinh học & bán chéo sản phẩm bổ sung.",
      "tag": "Combo"
    },
    {
      "id": "KM04",
      "ten": "Hỗ trợ kỹ thuật cho khách mới",
      "doi_tuong": "Trang trại mới ký hợp đồng",
      "san_pham": "Dịch vụ tư vấn",
      "uu_dai": "1 buổi tư vấn kỹ thuật chăn nuôi miễn phí + bộ tài liệu hướng dẫn theo loại vật nuôi",
      "dieu_kien": "Áp dụng cho khách hàng trang trại mới ký hợp đồng.",
      "tag": "Khách mới"
    }
  ]
};
