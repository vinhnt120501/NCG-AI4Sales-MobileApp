# AI SalesMate — Mobile (AI4Sales)

Phiên bản **mobile / tablet** của AI4Sales dành cho nhân viên Sale cầm đi hiện trường.
Tổng hợp dữ liệu & flow từ bản desktop `AI4Sales/`, làm lại UI mobile-first theo bộ nhận
diện **Anova** (xanh `#0070B0`, font *Be Vietnam Pro*, logo Anova).

## Chạy thử
Mở trực tiếp `index.html` bằng trình duyệt (double-click cũng được — dữ liệu nhúng sẵn
trong `data.js`, **không cần server, chạy offline**). Tối ưu cho màn hình điện thoại/tablet;
trên desktop hiển thị trong khung thiết bị.

Deep-link nhanh tới từng tab: `index.html#knowledge`, `#push`, `#market`.

## 3 tính năng chính

### 1. Trợ lý tri thức (`Tri thức`)
Chat hỏi đáp, mọi câu trả lời sinh từ thư viện dữ liệu nhúng. 4 luồng:
- **Chẩn đoán dịch bệnh** — mô tả triệu chứng → xếp hạng bệnh khả năng nhất + độ tin cậy,
  chẩn đoán phân biệt, mức rủi ro, cơ sở khoa học/dịch tễ, cảnh báo sớm, phác đồ tham khảo,
  sản phẩm theo vai trò (kèm liều & giá) và **cờ chuyển chuyên gia**.
- **Phác đồ** — chọn bệnh → các bước xử lý + vaccine phòng + nhóm sản phẩm đi kèm.
- **Tra cứu sản phẩm** — công dụng, chỉ định, liều dùng, đường dùng, giá, quy cách, lưu ý an toàn.
- **Khuyến mãi** — các chương trình đang áp dụng (đối tượng, ưu đãi, điều kiện).

Ô nhập tự động định tuyến theo ý định (tên sản phẩm / mô tả triệu chứng / "khuyến mãi"…).

### 2. Trợ lý Push-sale (`Push-sale`)
- **Lịch sử mua hàng** của khách: tổng mua, công nợ, biểu đồ theo tháng, sản phẩm chủ lực.
- **Gợi ý đẩy hàng 3 mức** gắn bối cảnh dịch vùng: *An toàn* (nhập lại theo nhịp) →
  *Đề xuất* (cross-sale nhóm chưa mua) → *Tăng trưởng* (up-sale SKU/vaccine mới).
- **Script gọi & xử lý từ chối** + danh sách khách ưu tiên hôm nay.

### 3. Bản đồ dịch bệnh (`Dịch bệnh`)
- **Heat-map** dịch bệnh gia súc – gia cầm: chấm cảnh báo được chiếu theo toạ độ thật của
  tỉnh/thành (lat/lng), tô vùng nhiệt theo mức độ, lọc theo vật nuôi / bệnh / mức nặng.
- Dashboard thống kê + danh sách **cảnh báo nổi bật** (chạm để soi trên bản đồ).
- Nút **"Thu thập thông tin thị trường"**: Sale nhập dịch bệnh / xu hướng đàn / nhu cầu thuốc…
  → lưu tín hiệu, cập nhật ngay bản đồ + dashboard; có thể "Lưu & hỏi Trợ lý tri thức phân tích".

## Cấu trúc
```
AI4Sales-Mobile/
├── index.html      # khung 4 màn hình + điều hướng
├── styles.css      # bộ nhận diện Anova, responsive phone/tablet
├── app.js          # toàn bộ logic & các engine sinh câu trả lời
├── data.js         # dữ liệu nhúng (sinh từ AI4Sales/data — không sửa tay)
└── assets/         # logo Anova
```

## Dữ liệu
Nhúng từ `AI4Sales/data`: **14 bệnh · 19 sản phẩm · 4 NPP · 22 cảnh báo · 58 tỉnh · 4 chương trình KM**.
Đây là dữ liệu mẫu để chạy luồng; khi triển khai thật chỉ cần thay catalogue/KB/CRM,
**giữ nguyên schema**. Muốn cập nhật `data.js`, sinh lại từ thư mục `AI4Sales/data`.

> Ứng dụng chỉ hỗ trợ tư vấn — **không tạo đơn, không chốt đơn, không thay thế bác sĩ thú y**.
