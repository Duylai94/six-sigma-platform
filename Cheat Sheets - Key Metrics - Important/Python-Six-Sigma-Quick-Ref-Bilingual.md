# PYTHON FOR SIX SIGMA - QUICK REFERENCE (BILINGUAL)
## English Headers + Technical Terms | Vietnamese Details

---

## TABLE OF CONTENTS
1. **Installation Commands**
2. **Import Statements** 
3. **Data Loading & Basic Operations**
4. **Six Sigma Formulas**
5. **Statistical Tests Decision Tree**
6. **Common Errors & Solutions**

---

## 1. INSTALLATION COMMANDS
### Các Lệnh Cài Đặt

```bash
# Download from python.org, then:
# Tải từ python.org, rồi gõ:

python --version          # Check Python version (Kiểm tra phiên bản Python)
pip --version             # Check pip version (Kiểm tra phiên bản pip)

# Install libraries (Cài các thư viện)
pip install numpy
pip install pandas
pip install scipy
pip install matplotlib
pip install seaborn
pip install statsmodels
pip install scikit-learn
pip install jupyter

# Run Jupyter (Chạy Jupyter)
jupyter notebook
```

---

## 2. IMPORT STATEMENTS
### Các Lệnh Nhập Thư Viện

```python
# Cơ bản (Essential - Cần thiết)
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats

# Thêm (Additional - Thêm)
import seaborn as sns
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
```

---

## 3. DATA LOADING & BASIC OPERATIONS
### Tải Dữ Liệu & Các Thao Tác Cơ Bản

### Reading Data (Đọc Dữ Liệu)
```python
# CSV
df = pd.read_csv('file.csv')

# Excel
df = pd.read_excel('file.xlsx', sheet_name='Sheet1')

# SQL
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql_query("SELECT * FROM table", conn)
```

### Viewing Data (Xem Dữ Liệu)
```python
df.head()           # Hiển thị 5 dòng đầu
df.tail()           # Hiển thị 5 dòng cuối
df.shape            # Số dòng & cột
df.columns          # Tên cột
df.dtypes           # Kiểu dữ liệu
df.info()           # Thông tin chi tiết
df.describe()       # Thống kê cơ bản
```

### Checking Data Quality (Kiểm Tra Chất Lượng)
```python
df.isnull().sum()           # Đếm ô thiếu
df.duplicated().sum()       # Đếm hàng trùng
df['col'].unique()          # Giá trị duy nhất
df['col'].value_counts()    # Đếm tần số
```

### Data Cleaning (Làm Sạch Dữ Liệu)
```python
# Remove missing values (Xóa ô thiếu)
df = df.dropna()

# Remove duplicates (Xóa hàng trùng)
df = df.drop_duplicates()

# Fill missing values (Điền giá trị)
df['col'].fillna(0)                    # Điền 0
df['col'].fillna(df['col'].mean())    # Điền trung bình

# Filter data (Lọc dữ liệu)
df_filtered = df[df['col'] > 10]
df_filtered = df[(df['col1'] > 5) & (df['col2'] == 'A')]
```

### Basic Calculations (Tính Toán Cơ Bản)
```python
df['col'].mean()        # Trung bình
df['col'].median()      # Trung vị
df['col'].std()         # Độ lệch chuẩn
df['col'].min()         # Nhỏ nhất
df['col'].max()         # Lớn nhất
df['col'].sum()         # Tổng
df['col'].count()       # Số lượng (không tính NaN)
```

### Grouping Data (Nhóm Dữ Liệu)
```python
df.groupby('col')['value'].mean()      # Trung bình theo nhóm
df.groupby('col')['value'].sum()       # Tổng theo nhóm
df.groupby('col').size()               # Số dòng theo nhóm

# Multiple operations (Nhiều thao tác)
df.groupby('shift')['defects'].agg({
    'mean': 'mean',
    'sum': 'sum',
    'count': 'count'
})
```

### Creating New Columns (Tạo Cột Mới)
```python
df['new_col'] = df['col1'] / df['col2']
df['new_col'] = df['col'].apply(lambda x: x**2)
df['new_col'] = df['col'].apply(lambda x: 'Good' if x < 10 else 'Bad')
```

### Saving Data (Lưu Dữ Liệu)
```python
df.to_csv('output.csv', index=False)
df.to_excel('output.xlsx', index=False)
df.to_json('output.json')
df.to_html('output.html')
```

---

## 4. SIX SIGMA FORMULAS
### Các Công Thức Six Sigma

### DPU (Defects Per Unit)
```
Formula: Tổng Lỗi ÷ Tổng Sản Phẩm
Code:
DPU = df['Defects'].sum() / df['Units'].sum()
Ngưỡng: < 0.05 là tốt
```

### DPMO (Defects Per Million Opportunities)
```
Formula: (Defects ÷ Opportunities) × 1,000,000
Code:
DPMO = (total_defects / total_opportunities) * 1_000_000

Sigma Levels:
- ≤ 3.4 → 6 Sigma (Excellent - Xuất sắc)
- ≤ 62 → 4 Sigma (Good - Tốt)
- ≤ 6700 → 3 Sigma (Average - Trung bình)
- > 6700 → < 3 Sigma (Poor - Kém)
```

### FTY (First-Time Yield)
```
Formula: (Good Units ÷ Total Units) × 100%
Code:
FTY = (good_units / total_units) * 100
Ý nghĩa: % sản phẩm tốt lần đầu tiên
```

### RTY (Rolled Throughput Yield)
```
Formula: FTY_Step1 × FTY_Step2 × FTY_Step3 × ...
Code:
RTY = FTY1 * FTY2 * FTY3
Ý nghĩa: % sản phẩm qua toàn bộ quá trình tốt
```

### Cpk (Process Capability Index)
```
Formula: Min[(USL - μ) / (3σ), (μ - LSL) / (3σ)]
Code:
Cpu = (USL - mean) / (3 * std)
Cpl = (mean - LSL) / (3 * std)
Cpk = min(Cpu, Cpl)

Interpretation (Diễn giải):
- ≥ 1.33 → Process has capability (CÓ NĂNG LỰC)
- < 1.33 → Process needs improvement (KHÔNG CÓ)
- < 1.0 → Process is poor (RẤT KÉM)
```

### Pp & Ppk (Performance Indices - dùng cho dữ liệu hiện tại)
```
Formula: 
Pp = (USL - LSL) / (6 × σ)
Ppk = Min[(USL - μ) / (3σ), (μ - LSL) / (3σ)]

Khác với Cp/Cpk ở chỗ Pp/Ppk là chỉ số hiệu suất (không phải năng lực)
```

---

## 5. STATISTICAL TESTS DECISION TREE
### Sơ Đồ Quyết Định Kiểm Định Thống Kê

```
BẮT ĐẦU
│
├─ Step 1: Kiểm tra CHUẨN HÓA (Normality)
│  Code: stat, p = stats.shapiro(data)
│  Nếu p > 0.05 → CÓ CHUẨN
│  Nếu p ≤ 0.05 → KHÔNG CHUẨN
│
├─ Step 2: So sánh bao nhiêu NHÓM?
│  │
│  ├─ 2 NHÓM
│  │  ├─ CÓ CHUẨN → T-TEST (Parametric)
│  │  │  Code: t_stat, p = stats.ttest_ind(group1, group2)
│  │  │
│  │  └─ KHÔNG CHUẨN → MANN-WHITNEY U (Non-parametric)
│  │     Code: stat, p = stats.mannwhitneyu(group1, group2)
│  │
│  └─ 3+ NHÓM
│     ├─ CÓ CHUẨN → ANOVA (Parametric)
│     │  Code: f_stat, p = stats.f_oneway(g1, g2, g3)
│     │
│     └─ KHÔNG CHUẨN → KRUSKAL-WALLIS (Non-parametric)
│        Code: stat, p = stats.kruskal(g1, g2, g3)
│
└─ Step 3: Diễn giải
   Nếu p < 0.05 → CÓ sự khác biệt ý nghĩa ✓
   Nếu p ≥ 0.05 → KHÔNG có sự khác biệt ✗
```

### Common Tests (Các Kiểm Định Thường Dùng)

| Test Name | Purpose | Code | Điều Kiện |
|-----------|---------|------|----------|
| **Shapiro-Wilk** | Check normality | `stats.shapiro(data)` | p > 0.05 = Normal |
| **t-test** | Compare 2 groups | `stats.ttest_ind(g1, g2)` | Both normal |
| **Mann-Whitney U** | Compare 2 groups | `stats.mannwhitneyu(g1, g2)` | Not normal |
| **ANOVA** | Compare 3+ groups | `stats.f_oneway(g1, g2, g3)` | All normal |
| **Kruskal-Wallis** | Compare 3+ groups | `stats.kruskal(g1, g2, g3)` | Not normal |
| **Chi-Square** | Compare categories | `stats.chi2_contingency(table)` | Categorical |
| **Correlation** | Relationship | `data['x'].corr(data['y'])` | Range: -1 to +1 |

---

## 6. COMMON ERRORS & SOLUTIONS
### Các Lỗi Phổ Biến & Giải Pháp

### Error: "ModuleNotFoundError: No module named 'pandas'"
**Nguyên nhân:** Thư viện chưa cài đặt

**Giải pháp:**
```bash
pip install pandas
# hoặc
python -m pip install pandas
```

---

### Error: "FileNotFoundError: No such file or directory: 'data.csv'"
**Nguyên nhân:** File CSV không ở đúng vị trí

**Giải pháp:**
```python
# Cách 1: Đặt file cùng thư mục
df = pd.read_csv('data.csv')

# Cách 2: Dùng đường dẫn đầy đủ
df = pd.read_csv('C:/Users/YourName/Desktop/data.csv')

# Cách 3: Kiểm tra đường dẫn hiện tại
import os
print(os.getcwd())  # Thư mục hiện tại
os.listdir()        # Files trong thư mục
```

---

### Error: "KeyError: 'column_name'"
**Nguyên nhân:** Tên cột không chính xác

**Giải pháp:**
```python
# Kiểm tra tên cột
print(df.columns)

# Python phân biệt hoa/thường!
# Sai: df['defects']
# Đúng: df['Defects']  (viết hoa như tên cột)
```

---

### Error: "ValueError: x and y must have same length"
**Nguyên nhân:** Hai mảy số có độ dài khác nhau

**Giải pháp:**
```python
# Kiểm tra độ dài
print(len(x))
print(len(y))

# Xóa NaN
x = x.dropna()
y = y.dropna()

# Đảm bảo từ cùng DataFrame
x = df['col1'].values
y = df['col2'].values  # Cùng số dòng
```

---

### Error: "TypeError: unsupported operand type(s) for /: 'str' and 'int'"
**Nguyên nhân:** Cố gắng tính toán với chữ (string) thay vì số

**Giải pháp:**
```python
# Kiểm tra kiểu dữ liệu
print(df.dtypes)

# Chuyển đổi sang số
df['col'] = pd.to_numeric(df['col'], errors='coerce')
df['col'] = df['col'].astype(int)
df['col'] = df['col'].astype(float)
```

---

## QUICK TIPS
### Các Mẹo Nhanh

### Printing with Formatting (In Với Định Dạng)
```python
# 2 chữ số thập phân (2 decimal places)
print(f"Value: {var:.2f}")

# Phần trăm (Percentage)
print(f"Percent: {var*100:.1f}%")

# Tiền tệ (Currency)
print(f"Price: ${var:,.2f}")

# Tách hàng nghìn (Thousand separator)
print(f"Count: {var:,}")
```

### One-Liners (Một Dòng Hữu Ích)
```python
# Thống kê nhanh
df.describe()

# Grouped statistics
df.groupby('col')['value'].agg(['mean', 'std', 'min', 'max'])

# Filter and count
len(df[df['col'] > 10])

# Create pivot table
df.pivot_table(values='value', index='col1', columns='col2', aggfunc='mean')
```

---

## JUPYTER KEYBOARD SHORTCUTS
### Phím Tắt Jupyter Notebook

| Phím | Tác Vụ |
|------|--------|
| **Shift+Enter** | Chạy cell hiện tại |
| **Ctrl+Enter** | Chạy cell, giữ vị trí |
| **Alt+Enter** | Chạy cell, tạo cell mới |
| **A** | Thêm cell phía trên |
| **B** | Thêm cell phía dưới |
| **D, D** | Xóa cell |
| **M** | Chế độ Markdown (viết chữ) |
| **Y** | Chế độ Code |
| **L** | Hiến số dòng |
| **Tab** | Auto-complete |

---

**Dùng file này để tra cứu nhanh khi đang code!**

---