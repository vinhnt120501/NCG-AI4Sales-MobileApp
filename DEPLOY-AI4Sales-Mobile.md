# Deploy AI SalesMate Mobile (iPhone/iPad) lên GitHub + GitHub Pages — Free

Mục tiêu: có một **link công khai** dạng `https://vinhnt120501.github.io/NCG-AI4Sales-WebAPP/AI4Sales-Mobile/` để Sale mở trên **iPhone/iPad** là chạy ngay (hoặc "Thêm vào Màn hình chính" để dùng như app).

> **Vì sao GitHub Pages?** Bản mobile (`AI4Sales-Mobile/`) là **web tĩnh thuần** (HTML + CSS + JS), **dữ liệu nhúng sẵn** trong `data.js` (`window.DB`): không backend, **không API key**, không fetch JSON, bản đồ vẽ bằng CSS/SVG → **chạy offline 100%**. Hosting **0đ**, không "ngủ", không cần cấu hình server.
> Repo đích: **https://github.com/vinhnt120501/NCG-AI4Sales-WebAPP** (bản mobile nằm ở thư mục `AI4Sales-Mobile/`)

---

## 0. Đã chuẩn bị sẵn trong dự án (không cần tạo lại)

| File | Vai trò |
|---|---|
| `index.html` | Khung 4 màn hình + điều hướng; có script nhận diện thiết bị cảm ứng (`pointer: coarse`) để chạy full-screen trên iPhone/iPad |
| `styles.css` | Bộ nhận diện Anova + responsive: iPhone full-screen · iPad dọc 2 cột · iPad ngang nav rail · desktop khung iPhone 17 |
| `app.js` | Toàn bộ logic & engine sinh câu trả lời từ `window.DB` |
| `data.js` | **Dữ liệu nhúng** — sinh từ `AI4Sales/data` (14 bệnh · 19 SP · 4 NPP · 22 cảnh báo · 58 tỉnh · 4 KM). Vì không fetch nên **không cần `.nojekyll`** cho bản mobile |
| `assets/` | Logo Anova |

> ✅ **Đã kiểm thử render** (Chrome headless) ở 4 cấu hình: iPhone full-screen · iPad dọc (2 cột) · iPad ngang (nav rail trái) · desktop (khung iPhone 17). Chẩn đoán ASF, Push-sale, bản đồ heat-map, lưu tín hiệu thị trường — chạy đủ, **0 lỗi**.
> ✅ **Không key/không backend** → không tốn quota, không rủi ro rò rỉ key.

---

## 1. Yêu cầu (1 lần)
- Cài **git**: kiểm tra bằng `git --version`.
- Tài khoản **GitHub** + repo **NCG-AI4Sales-WebAPP** (dùng chung với web app desktop).
- Đăng nhập git lần đầu (nếu chưa):
  ```bash
  git config --global user.name  "Vinh NT"
  git config --global user.email "ban@email.com"
  ```

## 2. Đẩy code lên GitHub

Bản mobile nằm trong thư mục `AI4Sales-Mobile/` của repo, nên `git add .` từ thư mục gốc là đẩy lên cùng lúc với web app:

```bash
cd "/Users/vinhnt120501/Documents/fpd_fdx/8. NCG - AI4Sales"

git init                      # (có thể đã init sẵn — không sao)
git add .

# 🔒 KIỂM TRA AN TOÀN: lệnh dưới phải KHÔNG in ra dòng nào.
git status --short | grep -iE '\.env$'

git commit -m "Deploy AI SalesMate Mobile"
git branch -M main
git remote add origin https://github.com/vinhnt120501/NCG-AI4Sales-WebAPP.git
git push -u origin main
```

> Nếu push báo *"remote origin already exists"* → chạy `git remote set-url origin https://github.com/vinhnt120501/NCG-AI4Sales-WebAPP.git` rồi push lại.
> Nếu GitHub hỏi mật khẩu → dùng **Personal Access Token** (Settings → Developer settings → Tokens) thay cho mật khẩu, hoặc đăng nhập bằng `gh auth login`.

## 3. Bật GitHub Pages
1. Mở repo trên GitHub → tab **Settings** → mục **Pages** (cột trái).
2. **Source**: chọn **Deploy from a branch**.
3. **Branch**: `main` · **Folder**: **`/ (root)`** → bấm **Save**.
4. Chờ **1–2 phút**, tải lại trang Pages sẽ hiện link.

## 4. Link công khai
```
https://vinhnt120501.github.io/NCG-AI4Sales-WebAPP/AI4Sales-Mobile/
```
Mở thử trên **Safari ở iPhone/iPad**: app vào thẳng full-screen. **Gửi link này cho Sale.**

> Mỗi lần cập nhật code, chỉ cần:
> ```bash
> git add . && git commit -m "Cập nhật" && git push
> ```
> Pages tự build lại sau ~1–2 phút.

---

## 5. Xử lý sự cố thường gặp

| Hiện tượng | Nguyên nhân & cách sửa |
|---|---|
| Link 404 ngay sau khi Save | Pages chưa build xong — đợi 1–2 phút rồi tải lại. |
| Mở app bị **trắng / vỡ giao diện** | Thiếu file cùng thư mục — đảm bảo `styles.css`, `app.js`, `data.js`, `assets/` đã push đủ cạnh `index.html`. |
| App mở nhưng **trống dữ liệu** | Thiếu `data.js` (chứa `window.DB`) — kiểm tra đã commit/push file này. |
| **Trên iPad vẫn ra khung điện thoại nhỏ** | Mở bằng **Safari/Chrome trên chính iPad** (máy cảm ứng) để vào full-screen; xem trên máy tính sẽ cố tình giữ khung iPhone mô phỏng. |
| Font nhìn khác (không phải Be Vietnam Pro) | Đang offline → tự rơi về font hệ thống. Có mạng sẽ tải đúng font từ Google Fonts. |
| Logo Anova không hiện | Thiếu `assets/anova-logo.png` — copy lại từ `AI4Sales/assets/`. |

---

## 6. Tuỳ chọn

- **"Thêm vào Màn hình chính" (dùng như app):** mở link Pages bằng **Safari** trên iPhone/iPad → nút **Chia sẻ** → **Thêm vào Màn hình chính** → mở ra chạy full-screen như app.
- **Repo riêng cho bản mobile:** đẩy nội dung thư mục `AI4Sales-Mobile/` lên một repo mới (vd `NCG-AI4Sales-Mobile`), bật Pages từ `/(root)` → link gọn `https://vinhnt120501.github.io/NCG-AI4Sales-Mobile/`.
- **Tên miền riêng:** Settings → Pages → **Custom domain** (vd `mobile.anova.vn`), trỏ DNS theo hướng dẫn GitHub.
- **Repo Private vẫn deploy Pages được** (với tài khoản hỗ trợ Pages cho private repo).

---

## Phụ lục — Tự thích ứng thiết bị & cập nhật dữ liệu

**Tự thích ứng:** script nhỏ trong `<head>` nhận diện máy cảm ứng (`pointer: coarse` / `navigator.maxTouchPoints`) → gắn class `touch` cho `<html>`. iPhone/iPad chạy full-screen; iPad ngang đổi tab bar dưới thành **thanh điều hướng dọc bên trái**; máy tính giữ khung iPhone 17 mô phỏng. Deep-link nhanh: `…/AI4Sales-Mobile/#knowledge` · `#push` · `#market`.

**Cập nhật dữ liệu:** `data.js` dưới dạng `window.DB = {...}` được **sinh từ `AI4Sales/data`** — không sửa tay. Khi catalogue/bệnh/NPP thay đổi, cập nhật JSON gốc ở `AI4Sales/data/` rồi sinh lại `data.js` (gói `diseases.json`, `vet_products.json`, `distributors.json`, `market_alerts.json`, `provinces_vn.json` + danh sách khuyến mãi vào `window.DB`), **giữ nguyên schema**. Số liệu định lượng (giá, mức độ, dịch tễ) là dữ liệu mẫu để chạy luồng; khi triển khai thật chỉ cần thay catalogue/KB/CRM, không phải viết lại logic.

> App chỉ **hỗ trợ tư vấn**: không tạo đơn, không chốt đơn, không thay thế bác sĩ thú y.
