# PYTHON FOR SIX SIGMA - COMPLETE GUIDE (BILINGUAL)
## English Headers + Technical Terms | Vietnamese Detailed Guides
## Phiên Bản 2026 | For Beginners

---

# INTRODUCTION
## Giới Thiệu

**What This Guide Does:**
Hướng dẫn này dạy bạn cách dùng Python để phân tích dữ liệu Six Sigma từ cơ bản đến nâng cao.

**Who Should Use:**
- Người mới bắt đầu (không biết code)
- Người muốn học Python cho Six Sigma
- Người muốn tự động hóa phân tích

**What You'll Learn:**
- ✅ Cài đặt Python & Jupyter
- ✅ Tính toán chỉ số Six Sigma (DPU, DPMO, Cpk)
- ✅ Kiểm định thống kê (t-test, ANOVA, Chi-Square)
- ✅ Vẽ biểu đồ kiểm soát (Control Chart)
- ✅ Tối ưu hóa quá trình (DOE)
- ✅ Vẽ biểu đồ chuyên nghiệp (Visualization)

**Time Required:**
- Tuần 1: Cài đặt + Dữ liệu
- Tuần 2-3: Chỉ số Six Sigma + Kiểm định
- Tuần 4-5: Control Chart + Tối ưu hóa
- Tuần 6+: Nâng cao + Tự động hóa

---

---

## SECTION 1: SETUP & INSTALLATION
### Phần 1: Chuẩn Bị Và Cài Đặt

#### 1.1 What is Python?

**Python** là một ngôn ngữ lập trình (programming language) rất phổ biến cho phân tích dữ liệu. Máy tính sẽ đọc code Python từ trên xuống dưới, từng dòng một, và thực hiện các lệnh mà bạn viết.

**Tại sao chọn Python?**
- **Free** = Miễn phí, không tốn tiền
- **Easy to learn** = Dễ học so với các ngôn ngữ khác
- **Fast processing** = Xử lý nhanh, thậm chí triệu dữ liệu
- **Automation** = Tự động hóa công việc lặp lại
- **Popular for data analysis** = Phổ biến, có nhiều thư viện

**So sánh Python vs Excel:**

| Tiêu chí | Python | Excel |
|----------|--------|-------|
| Tốc độ | Cực nhanh (triệu dòng) | Chậm (>10K dòng gặp vấn đề) |
| Độ chính xác | Rất cao | Dễ sai (điều chỉnh tay) |
| Tự động hóa | Hoàn toàn | Khó (macro phức tạp) |
| Vẽ biểu đồ | Chuyên nghiệp | Cơ bản |
| Dễ học | Vừa phải | Rất dễ |

---

#### 1.2 What are Libraries?

**Libraries** (thư viện) là những đoạn code sẵn được viết bởi người khác. Bạn có thể dùng lại mà không cần viết từ đầu.

**Ví dụ:**
- Thay vì tự viết cách tính trung bình, bạn gọi hàm `mean()` có sẵn
- Thay vì tự viết cách vẽ biểu đồ, bạn dùng `matplotlib.pyplot.plot()`
- Thay vì tự viết kiểm định t-test, bạn dùng `scipy.stats.ttest_ind()`

**Key Libraries for Six Sigma:**

| Library | Purpose | Dùng Để Làm Gì |
|---------|---------|---|
| **NumPy** | Numerical computing | Tính toán số học (trung bình, độ lệch chuẩn, v.v...) |
| **Pandas** | Data manipulation | Xử lý dữ liệu (đọc CSV, làm sạch, lọc) |
| **SciPy** | Statistical tests | Kiểm định thống kê (t-test, ANOVA) |
| **Matplotlib** | Data visualization | Vẽ biểu đồ (cột, đường, histogram) |
| **Seaborn** | Statistical plots | Vẽ biểu đồ thống kê (heatmap, phân phối) |
| **Statsmodels** | Advanced statistics | Thống kê nâng cao (hồi quy, ANOVA) |
| **Scikit-learn** | Machine learning | Học máy, dự đoán |

---

#### 1.3 Installation Step-by-Step
##### Hướng Dẫn Cài Đặt Từng Bước

**BƯỚC 1: Download Python**

1. Truy cập: https://www.python.org
2. Nhấn nút **"Download"** (góc phải trên cùng)
3. Chọn phiên bản mới nhất (hiện tại là 3.12 hoặc cao hơn)
4. Chọn file phù hợp với máy của bạn:
   - **Windows**: `Windows installer (64-bit)` (phải là 64-bit)
   - **Mac**: `macOS 64-bit universal2 installer`
   - **Linux**: `GZipped source tarball`

**BƯỚC 2: Chạy Installer**

1. Mở file vừa tải về (ví dụ: `python-3.12.0-amd64.exe` trên Windows)
2. **RẤT QUAN TRỌNG**: Bật tích vào ô **"Add Python to PATH"** 
   - Nếu không bật, máy tính sẽ không biết Python ở đâu
3. Nhấn **"Install Now"**
4. Chờ cài đặt xong (khoảng 1-2 phút)
5. Khởi động lại máy tính (để đảm bảo cài đặt hoàn toàn)

**BƯỚC 3: Kiểm Tra Python Đã Cài Thành Công**

Mở **Command Prompt** (hoặc Terminal):
- **Windows**: Nhấn `Win+R`, gõ `cmd`, nhấn Enter
- **Mac**: Mở ứng dụng **Terminal** (từ Applications > Utilities)
- **Linux**: Mở Terminal

Gõ lệnh này:
```bash
python --version
```

**Nếu thấy:**
```
Python 3.12.0
```
→ **Tuyệt vời!** Python đã cài thành công ✓

**Nếu thấy lỗi:**
```
'python' is not recognized as an internal or external command
```
→ Bạn chưa bật tích "Add Python to PATH". Gỡ cài và cài lại.

---

**BƯỚC 4: Cài Các Thư Viện Cần Thiết**

Vẫn trong Command Prompt/Terminal, gõ **từng dòng lệnh** dưới đây (mỗi dòng nhấn Enter):

```bash
pip install numpy
pip install pandas
pip install scipy
pip install matplotlib
pip install seaborn
pip install statsmodels
pip install scikit-learn
```

Sau mỗi lệnh, chờ dòng chữ này hiện lên:
```
Successfully installed [tên thư viện]
```

**Nếu gặp lỗi "pip is not recognized"**, thay vào đó gõ:
```bash
python -m pip install numpy
python -m pip install pandas
```

**BƯỚC 5: Cài Jupyter Notebook (Công Cụ Viết Code)**

Jupyter là một "sổ tay điện tử" cho phép bạn viết code, chạy nó, và xem kết quả ngay trong một interface.

Gõ:
```bash
pip install jupyter
```

Để **chạy** Jupyter Notebook, gõ:
```bash
jupyter notebook
```

Trình duyệt của bạn sẽ tự động mở ra một giao diện. Bạn đã sẵn sàng để viết code!

---

#### 1.4 Verify Installation
##### Kiểm Tra Cài Đặt Hoàn Toàn

Mở Jupyter Notebook và chạy đoạn code này:

```python
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt

print("✓ All libraries imported successfully!")
print(f"NumPy version: {np.__version__}")
print(f"Pandas version: {pd.__version__}")
```

Nếu không có lỗi → **Tuyệt vời!** Bạn đã cài đặt thành công ✓

---

---

## SECTION 2: BASIC SYNTAX & LIBRARIES
### Phần 2: Cú Pháp Cơ Bản & Các Thư Viện

#### 2.1 Importing Libraries
##### Nhập Các Thư Viện

Mỗi khi bạn bắt đầu một file Python mới, bạn cần nhập (import) các thư viện cần dùng. Đây thường là những dòng đầu tiên của code:

```python
import numpy as np                    # Nhập NumPy, đặt tên viết tắt là np
import pandas as pd                   # Nhập Pandas, đặt tên viết tắt là pd
import matplotlib.pyplot as plt       # Nhập Matplotlib, đặt tên viết tắt là plt
from scipy import stats               # Chỉ nhập stats từ SciPy (không cần toàn bộ)
```

**Giải thích:**
- `import` = "Lấy thư viện vào trong code"
- `as np` = "Đặt tên viết tắt là np" (để sau này gõ `np.mean()` thay vì `numpy.mean()`)
- `from scipy import stats` = "Chỉ lấy phần stats từ SciPy" (nhẹ và nhanh hơn)

**Tip:** Luôn nhập thư viện ở đầu file, không nhập trong giữa code!

---

#### 2.2 NumPy Basics
##### NumPy - Tính Toán Số Học

**NumPy** dùng để tính toán với số (arithmetic). Nó nhanh và chính xác.

**Tạo mảng (Array):**
```python
import numpy as np

# Tạo mảng từ danh sách
data = np.array([5, 6, 4, 8, 9])
print(data)
# Output: [5 6 4 8 9]

# Tạo mảng toàn số 0
zeros = np.zeros(5)
# Output: [0. 0. 0. 0. 0.]

# Tạo mảng toàn số 1
ones = np.ones(3)
# Output: [1. 1. 1.]

# Tạo mảng từ 0 đến 10
range_array = np.arange(0, 10)
# Output: [0 1 2 3 4 5 6 7 8 9]
```

**Tính toán cơ bản:**
```python
# Trung bình (Mean)
mean = np.mean(data)
print(f"Mean: {mean}")  # Output: Mean: 6.4

# Trung vị (Median)
median = np.median(data)
print(f"Median: {median}")  # Output: Median: 6.0

# Độ lệch chuẩn (Standard Deviation)
std = np.std(data)
print(f"Std Dev: {std:.4f}")  # Output: Std Dev: 1.8708

# Tổng (Sum)
total = np.sum(data)
print(f"Total: {total}")  # Output: Total: 32

# Giá trị nhỏ nhất & lớn nhất
min_val = np.min(data)
max_val = np.max(data)
print(f"Min: {min_val}, Max: {max_val}")  # Output: Min: 4, Max: 9
```

---

#### 2.3 Pandas Basics
##### Pandas - Xử Lý Dữ Liệu

**Pandas** dùng để xử lý dữ liệu dạng bảng (như Excel).

**Tạo DataFrame (bảng dữ liệu):**
```python
import pandas as pd

# Tạo DataFrame từ dictionary
data = {
    'Day': [1, 2, 3, 4, 5],
    'Shift': ['A', 'A', 'B', 'B', 'A'],
    'Defects': [5, 6, 15, 16, 4]
}

df = pd.DataFrame(data)
print(df)
# Output:
#    Day Shift  Defects
# 0    1     A        5
# 1    2     A        6
# 2    3     B       15
# 3    4     B       16
# 4    5     A        4
```

**Xem dữ liệu:**
```python
df.head()           # Hiển thị 5 dòng đầu tiên
df.tail()           # Hiển thị 5 dòng cuối cùng
df.shape            # Số dòng & cột: (5, 3) = 5 dòng, 3 cột
df.columns          # Tên các cột
df.dtypes           # Kiểu dữ liệu
df.info()           # Thông tin chi tiết
```

**Tính toán cơ bản:**
```python
df['Defects'].mean()      # Trung bình
df['Defects'].sum()       # Tổng
df['Defects'].std()       # Độ lệch chuẩn
df['Defects'].min()       # Giá trị nhỏ nhất
df['Defects'].max()       # Giá trị lớn nhất
```

---

#### 2.4 Reading Data
##### Đọc Dữ Liệu

**Đọc file CSV:**
```python
import pandas as pd

df = pd.read_csv('production_data.csv')
print(df.head())
```

**File CSV phải ở đâu?**
- **Cùng thư mục** với file Python:
  ```python
  df = pd.read_csv('data.csv')
  ```
- **Hoặc dùng đường dẫn đầy đủ**:
  ```python
  df = pd.read_csv('C:/Users/MyName/Desktop/production_data.csv')
  ```

**Đọc file Excel:**
```python
df = pd.read_excel('production_data.xlsx', sheet_name='Sheet1')
```

**Đọc từ SQL Database:**
```python
import sqlite3

conn = sqlite3.connect('database.db')
df = pd.read_sql_query("SELECT * FROM production_table", conn)
```

---

---

## SECTION 3: DATA CLEANING
### Phần 3: Làm Sạch Dữ Liệu

#### 3.1 Checking Data Quality
##### Kiểm Tra Chất Lượng Dữ Liệu

Trước khi phân tích, bạn cần kiểm tra dữ liệu có tốt không.

**Kiểm tra giá trị thiếu (Missing Values):**
```python
import pandas as pd

df = pd.read_csv('production_data.csv')

# Đếm ô thiếu
print(df.isnull().sum())
# Output:
# Date                 0
# Shift                0
# Defects              3      ← Có 3 ô bị thiếu
# Units                0
# Production_Time      2      ← Có 2 ô bị thiếu
```

**Kiểm tra hàng bị trùng (Duplicates):**
```python
# Đếm hàng bị trùng
print(df.duplicated().sum())
# Output: 2      ← Có 2 hàng bị trùng

# Hiển thị hàng bị trùng
print(df[df.duplicated()])
```

**Kiểm tra outliers (giá trị bất thường):**
```python
import matplotlib.pyplot as plt

# Vẽ histogram để xem phân phối
plt.hist(df['Defects'], bins=30, edgecolor='black')
plt.xlabel('Number of Defects')
plt.ylabel('Frequency')
plt.show()

# Nếu thấy các giá trị rất cao/thấp một mình → Có outlier
```

---

#### 3.2 Removing Missing Values
##### Xóa Dữ Liệu Thiếu

**Cách 1: Xóa toàn bộ hàng có ô thiếu**
```python
df_clean = df.dropna()

print(f"Before: {len(df)} rows")
print(f"After: {len(df_clean)} rows")
# Before: 1000 rows
# After: 995 rows   (xóa 5 hàng)
```

**Cách 2: Điền giá trị (fillna)**
```python
# Điền 0
df['Defects'] = df['Defects'].fillna(0)

# Điền trung bình
df['Defects'] = df['Defects'].fillna(df['Defects'].mean())

# Lấy giá trị trước đó
df['Defects'] = df['Defects'].fillna(method='ffill')
```

**Nên chọn cách nào?**
- **dropna()** = Nếu chỉ thiếu ít (< 5% dữ liệu)
- **fillna()** = Nếu thiếu khá nhiều

---

#### 3.3 Removing Duplicates
##### Xóa Dữ Liệu Trùng

```python
# Xóa hàng bị trùng hoàn toàn
df_clean = df.drop_duplicates()

# Xóa hàng bị trùng dựa vào một cột
df_clean = df.drop_duplicates(subset=['ID'])

# Giữ hàng đầu tiên, xóa hàng sau
df_clean = df.drop_duplicates(keep='first')
```

---

#### 3.4 Handling Outliers
##### Xử Lý Giá Trị Bất Thường

**Phát hiện outliers bằng 3-sigma rule:**
```python
import numpy as np

mean = df['Defects'].mean()
std = df['Defects'].std()
lower_bound = mean - 3*std
upper_bound = mean + 3*std

print(f"Normal range: {lower_bound:.2f} to {upper_bound:.2f}")

# Hiển thị outliers
outliers = df[(df['Defects'] < lower_bound) | (df['Defects'] > upper_bound)]
print(f"Found {len(outliers)} outliers")
```

**Xóa outliers:**
```python
df_clean = df[(df['Defects'] >= lower_bound) & (df['Defects'] <= upper_bound)]
print(f"After removing outliers: {len(df_clean)} rows")
```

---

---

## SECTION 4: BASIC STATISTICS
### Phần 4: Thống Kê Cơ Bản

#### 4.1 Descriptive Statistics
##### Thống Kê Mô Tả

**Nhìn toàn cảnh dữ liệu:**
```python
import pandas as pd

df = pd.read_csv('production_data.csv')

# Hiển thị thống kê cơ bản
print(df.describe())
# Output:
#        Defects       Units
# count  1000.00    1000.00
# mean      8.75      510.23
# std       2.87       45.12
# min       2.00      400.00
# 25%       7.00      475.00
# 50%       8.50      510.00
# 75%      10.50      545.00
# max      25.00      600.00
```

**Tính từng chỉ số:**
```python
# Trung bình (Mean)
mean = df['Defects'].mean()
print(f"Mean: {mean:.2f}")

# Trung vị (Median) - Giá trị ở giữa
median = df['Defects'].median()
print(f"Median: {median:.2f}")

# Mốt (Mode) - Giá trị xuất hiện nhiều nhất
mode = df['Defects'].mode()[0]
print(f"Mode: {mode}")

# Độ lệch chuẩn (Standard Deviation)
std = df['Defects'].std()
print(f"Std Dev: {std:.2f}")

# Phương sai (Variance)
variance = df['Defects'].var()
print(f"Variance: {variance:.2f}")

# Khoảng (Range)
range_val = df['Defects'].max() - df['Defects'].min()
print(f"Range: {range_val}")

# Tứ phân vị (Quartile Range)
Q1 = df['Defects'].quantile(0.25)
Q3 = df['Defects'].quantile(0.75)
IQR = Q3 - Q1
print(f"IQR: {IQR:.2f}")
```

---

#### 4.2 Six Sigma Metrics
##### Các Chỉ Số Six Sigma

**DPU (Defects Per Unit):**
```python
# Công thức: Tổng lỗi ÷ Tổng sản phẩm

total_defects = df['Defects'].sum()
total_units = df['Units'].sum()
DPU = total_defects / total_units

print(f"Total Defects: {total_defects}")
print(f"Total Units: {total_units}")
print(f"DPU: {DPU:.6f}")
# Output: DPU: 0.011976
# Nghĩa là: Mỗi sản phẩm có 0.012 lỗi (hoặc 100 sản phẩm có ~1.2 lỗi)
```

**DPMO (Defects Per Million Opportunities):**
```python
# Công thức: (Lỗi ÷ Cơ hội) × 1,000,000

opportunities_per_unit = 5  # Mỗi sản phẩm có 5 điểm có thể bị lỗi
total_opportunities = total_units * opportunities_per_unit
DPMO = (total_defects / total_opportunities) * 1_000_000

print(f"DPMO: {DPMO:.2f}")

# Diễn giải Sigma Level
if DPMO <= 3.4:
    print("✓ 6 Sigma (Xuất sắc - Excellent)")
elif DPMO <= 62:
    print("✓ 4 Sigma (Tốt - Good)")
elif DPMO <= 6700:
    print("⚠ 3 Sigma (Trung bình - Average)")
else:
    print("✗ < 3 Sigma (Kém - Poor)")
```

**FTY (First-Time Yield):**
```python
# Công thức: (Sản phẩm tốt ÷ Tổng sản phẩm) × 100%

defect_free_units = df[df['Defects'] == 0]['Units'].sum()
FTY = (defect_free_units / total_units) * 100

print(f"First-Time Yield: {FTY:.2f}%")
# Ý nghĩa: Bao nhiêu % sản phẩm không bị lỗi lần đầu tiên
```

**RTY (Rolled Throughput Yield):**
```python
# Công thức: FTY_Step1 × FTY_Step2 × FTY_Step3 × ...

FTY_step1 = 0.95  # 95% tốt ở bước 1
FTY_step2 = 0.97  # 97% tốt ở bước 2
FTY_step3 = 0.96  # 96% tốt ở bước 3

RTY = FTY_step1 * FTY_step2 * FTY_step3
RTY_percent = RTY * 100

print(f"RTY: {RTY_percent:.2f}%")
# Ý nghĩa: 81.45% sản phẩm qua toàn bộ 3 bước mà không bị lỗi
```

---

#### 4.3 Process Capability (Cpk)
##### Năng Lực Quá Trình

**Cpk** đo lường khả năng của quá trình là có thể sản xuất sản phẩm trong tiêu chuẩn không.

```python
import numpy as np

# Dữ liệu: Kích thước sản phẩm (mm)
measurements = np.array([100.1, 101.2, 99.8, 100.5, 101.0, 100.2, 99.9, 101.5, 100.3, 101.1])

# Tiêu chuẩn
LSL = 99    # Lower Specification Limit (Giới hạn dưới)
USL = 102   # Upper Specification Limit (Giới hạn trên)

# Tính thống kê
mean = np.mean(measurements)
std_dev = np.std(measurements, ddof=1)

print(f"Mean (μ): {mean:.3f}")
print(f"Std Dev (σ): {std_dev:.3f}")

# Tính Cp (Tiềm năng - không tính vị trí)
Cp = (USL - LSL) / (6 * std_dev)
print(f"Cp: {Cp:.4f}")

# Tính Cpk (Khả năng thực tế - tính cả vị trí)
Cpu = (USL - mean) / (3 * std_dev)  # Khả năng trên
Cpl = (mean - LSL) / (3 * std_dev)  # Khả năng dưới
Cpk = min(Cpu, Cpl)

print(f"Cpk: {Cpk:.4f}")
print(f"  Cpu (upper): {Cpu:.4f}")
print(f"  Cpl (lower): {Cpl:.4f}")

# Đánh giá
if Cpk >= 1.33:
    print("✓ Process has capability (Quá trình CÓ NĂNG LỰC)")
elif Cpk >= 1.0:
    print("⚠ Process is barely capable (Quá trình KHÓ có năng lực)")
else:
    print("✗ Process is not capable (Quá trình KHÔNG CÓ NĂNG LỰC)")

# Kiểm tra căn giữa
if abs(Cp - Cpk) > 0.1:
    print("⚠ Process is off-center (Quá trình KHÔNG CĂNG GIỮA)")
else:
    print("✓ Process is well-centered (Quá trình căng giữa tốt)")
```

**Giải thích Cpk:**
```
Cpk ≥ 1.33  → Quá trình CÓ NĂNG LỰC ✓ (Sigma level ≥ 4)
Cpk ≥ 1.0   → Quá trình CÓ KHẢ NĂNG TỐI THIỂU (Sigma level = 3)
Cpk < 1.0   → Quá trình XẤU ✗ (Sigma level < 3)
Cpk ≈ 0.67  → Quá trình rất tệ (có ~3% sản phẩm ngoài tiêu chuẩn)
```

---

---

## SECTION 5: HYPOTHESIS TESTING
### Phần 5: Kiểm Định Giả Thuyết

#### 5.1 When to Use Which Test
##### Khi Nào Dùng Kiểm Định Nào?

**Sơ đồ quyết định:**

```
Bước 1: Kiểm tra dữ liệu CÓ PHÂN PHỐI CHUẨN không?
        → Dùng Shapiro-Wilk test (p > 0.05 = Chuẩn)
        
        ↓
        
Bước 2: So sánh bao nhiêu nhóm?
        │
        ├─ 2 nhóm:
        │  ├─ Chuẩn? → t-test (parametric)
        │  └─ Không → Mann-Whitney U test (non-parametric)
        │
        └─ 3+ nhóm:
           ├─ Chuẩn? → ANOVA (parametric)
           └─ Không → Kruskal-Wallis test (non-parametric)
```

---

#### 5.2 Normality Test
##### Kiểm Tra Tính Chuẩn Hóa

**Shapiro-Wilk Test:**
```python
from scipy import stats
import numpy as np

data = np.array([5, 6, 4, 8, 9, 7, 6, 8, 7, 6])

# Thực hiện Shapiro-Wilk test
stat, p_value = stats.shapiro(data)

print(f"Test Statistic: {stat:.4f}")
print(f"P-value: {p_value:.4f}")

# Diễn giải
if p_value > 0.05:
    print("✓ Data IS normally distributed")
    print("✓ Dữ liệu CÓ PHÂN PHỐI CHUẨN")
else:
    print("✗ Data is NOT normally distributed")
    print("✗ Dữ liệu KHÔNG CÓ PHÂN PHỐI CHUẨN")
```

**Ý nghĩa p-value:**
- **p > 0.05** = Dữ liệu chuẩn (Normal)
- **p ≤ 0.05** = Dữ liệu không chuẩn (Not normal)

---

#### 5.3 T-Test (Compare 2 Groups)
##### T-Test - So Sánh 2 Nhóm

**Tình huống:** Bạn muốn biết lỗi ở ca sáng và ca chiều có khác nhau không.

```python
from scipy import stats
import numpy as np

# Dữ liệu
morning_shift = np.array([5, 6, 4, 8, 9])
evening_shift = np.array([15, 16, 14, 17, 15])

# Kiểm tra chuẩn hóa
_, p_norm1 = stats.shapiro(morning_shift)
_, p_norm2 = stats.shapiro(evening_shift)

print(f"Morning normality: p={p_norm1:.4f} → {'Normal' if p_norm1 > 0.05 else 'Not normal'}")
print(f"Evening normality: p={p_norm2:.4f} → {'Normal' if p_norm2 > 0.05 else 'Not normal'}")

# Nếu cả hai chuẩn → t-test. Nếu không → Mann-Whitney U
if p_norm1 > 0.05 and p_norm2 > 0.05:
    # Cả hai chuẩn → dùng t-test
    t_stat, p_value = stats.ttest_ind(morning_shift, evening_shift)
    test_name = "t-test"
else:
    # Không chuẩn → dùng Mann-Whitney U
    t_stat, p_value = stats.mannwhitneyu(morning_shift, evening_shift)
    test_name = "Mann-Whitney U"

# Hiển thị kết quả
print(f"\n=== {test_name.upper()} ===")
print(f"Morning shift: mean={morning_shift.mean():.2f}, std={morning_shift.std():.2f}")
print(f"Evening shift: mean={evening_shift.mean():.2f}, std={evening_shift.std():.2f}")
print(f"Test Statistic: {t_stat:.4f}")
print(f"P-value: {p_value:.6f}")

# Diễn giải
if p_value < 0.05:
    print(f"\n✓ P ({p_value:.6f}) < 0.05")
    print("✓ CÓ sự khác biệt ý nghĩa thống kê")
    print("✓ Ca sáng và ca chiều lỗi là KHÁC NHAU")
else:
    print(f"\n✗ P ({p_value:.6f}) ≥ 0.05")
    print("✗ KHÔNG có sự khác biệt ý nghĩa")
    print("✗ Sự khác biệt chỉ là do may rủi")
```

**P-value explained:**
- **p < 0.05** = Có sự khác biệt ý nghĩa (Statistically significant difference)
- **p ≥ 0.05** = Không có sự khác biệt ý nghĩa (Not significant)

---

#### 5.4 ANOVA (Compare 3+ Groups)
##### ANOVA - So Sánh 3+ Nhóm

**Tình huống:** Bạn muốn so sánh lỗi giữa 3 ca (sáng, chiều, đêm).

```python
from scipy import stats
import numpy as np

# Dữ liệu
morning = np.array([5, 6, 4, 8, 9])
evening = np.array([15, 16, 14, 17, 15])
night = np.array([12, 13, 11, 14, 12])

# Thực hiện ANOVA
f_stat, p_value = stats.f_oneway(morning, evening, night)

# Hiển thị kết quả
print(f"Morning: mean={morning.mean():.2f}")
print(f"Evening: mean={evening.mean():.2f}")
print(f"Night: mean={night.mean():.2f}")
print(f"\nF-Statistic: {f_stat:.4f}")
print(f"P-value: {p_value:.6f}")

# Diễn giải
if p_value < 0.05:
    print("\n✓ CÓ sự khác biệt ý nghĩa giữa các ca")
    print("→ Các ca làm việc ảnh hưởng đến số lỗi")
else:
    print("\n✗ KHÔNG có sự khác biệt")
```

---

---

## SECTION 6: CONTROL CHARTS
### Phần 6: Biểu Đồ Kiểm Soát Quá Trình

#### 6.1 What is a Control Chart?
##### Biểu Đồ Kiểm Soát Là Gì?

**Control Chart** giúp bạn giám sát quá trình theo thời gian. Nếu một điểm vượt ra ngoài ranh giới → Quá trình mất kiểm soát → Cần điều tra.

**Các thành phần:**
- **Center Line (CL)** = Trung bình quá trình
- **Upper Control Limit (UCL)** = Giới hạn kiểm soát trên (μ + 3σ)
- **Lower Control Limit (LCL)** = Giới hạn kiểm soát dưới (μ - 3σ)

---

#### 6.2 Creating a Control Chart
##### Tạo Biểu Đồ Kiểm Soát

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Dữ liệu: Số lỗi 20 ngày
defects = [9, 8, 11, 10, 9, 12, 10, 9, 11, 10,
           8, 9, 10, 11, 9, 10, 11, 10, 9, 12]

df = pd.DataFrame({
    'Day': range(1, len(defects) + 1),
    'Defects': defects
})

# Tính ranh giới kiểm soát
mean = df['Defects'].mean()
std_dev = df['Defects'].std()
UCL = mean + 3 * std_dev
LCL = mean - 3 * std_dev

print(f"Center Line (CL): {mean:.2f}")
print(f"Upper Control Limit (UCL): {UCL:.2f}")
print(f"Lower Control Limit (LCL): {LCL:.2f}")

# Phát hiện điểm mất kiểm soát
df['InControl'] = (df['Defects'] >= LCL) & (df['Defects'] <= UCL)
out_of_control = df[~df['InControl']]

print(f"\nOut of Control Points: {len(out_of_control)}")
if len(out_of_control) > 0:
    print(out_of_control)

# Vẽ biểu đồ
plt.figure(figsize=(14, 6))
plt.plot(df['Day'], df['Defects'], marker='o', linewidth=2, color='blue', label='Defects')
plt.axhline(mean, color='green', linestyle='-', linewidth=2, label=f'CL ({mean:.2f})')
plt.axhline(UCL, color='red', linestyle='--', linewidth=2, label=f'UCL ({UCL:.2f})')
plt.axhline(LCL, color='red', linestyle='--', linewidth=2, label=f'LCL ({LCL:.2f})')
plt.fill_between(df['Day'], LCL, UCL, alpha=0.1, color='green')

# Đánh dấu điểm mất kiểm soát
if len(out_of_control) > 0:
    plt.scatter(out_of_control['Day'], out_of_control['Defects'],
               color='red', s=300, marker='X', label='Out of Control', zorder=5)

plt.xlabel('Day')
plt.ylabel('Number of Defects')
plt.title('I-MR Control Chart - Process Monitoring')
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

# Kết luận
if len(out_of_control) == 0:
    print("\n✓ Process is IN CONTROL")
else:
    print(f"\n✗ Process is OUT OF CONTROL")
    print("→ Investigate and take corrective action")
```

---

---

## SECTION 7: DATA VISUALIZATION
### Phần 7: Vẽ Biểu Đồ

#### 7.1 Histogram
```python
import matplotlib.pyplot as plt

# Vẽ histogram
plt.hist(df['Defects'], bins=30, edgecolor='black', color='skyblue')
plt.xlabel('Number of Defects')
plt.ylabel('Frequency')
plt.title('Distribution of Defects (Histogram)')
plt.show()
```

#### 7.2 Bar Chart
```python
shifts = ['Morning', 'Evening', 'Night']
avg_defects = [6.4, 15.4, 12.4]

plt.bar(shifts, avg_defects, color=['blue', 'orange', 'green'], alpha=0.7)
plt.ylabel('Average Defects')
plt.title('Defects by Shift')
plt.show()
```

#### 7.3 Box Plot
```python
plt.boxplot([morning_data, evening_data, night_data],
            labels=['Morning', 'Evening', 'Night'])
plt.ylabel('Defects')
plt.title('Distribution Comparison')
plt.show()
```

#### 7.4 Scatter Plot
```python
plt.scatter(df['Temperature'], df['Defects'], s=100, alpha=0.6)
plt.xlabel('Temperature (°C)')
plt.ylabel('Defects')
plt.title('Temperature vs Defects Relationship')
plt.show()
```

---

---

## QUICK REFERENCE
### Tóm Tắt Nhanh

**Six Sigma Metrics:**
```
DPU = Total Defects ÷ Total Units
DPMO = (Defects ÷ Opportunities) × 1,000,000
FTY = (Good Units ÷ Total Units) × 100%
Cpk = Min[(USL-μ)/(3σ), (μ-LSL)/(3σ)]

Sigma Levels by DPMO:
- DPMO ≤ 3.4 → 6 Sigma (Excellent)
- DPMO ≤ 62 → 4 Sigma (Good)
- DPMO ≤ 6700 → 3 Sigma (Average)

Cpk Interpretation:
- Cpk ≥ 1.33 → Process has capability (CÓ NĂNG LỰC)
- Cpk < 1.33 → Process needs improvement (KHÔNG CÓ NĂNG LỰC)
```

**Common Statistical Tests:**
```
Normality: Shapiro-Wilk (p > 0.05 = Normal)
2 Groups: t-test (if normal) or Mann-Whitney U (if not normal)
3+ Groups: ANOVA (if normal) or Kruskal-Wallis (if not normal)
P-value: p < 0.05 = Significant difference
```

---

**This is Section 1 of the Bilingual Complete Guide.**

**Để tiếp tục, bạn muốn tôi tạo các file khác (Quick Ref, Examples, FAQ) cũng với định dạng song ngữ này không?**

---