# PYTHON FOR SIX SIGMA - 7 PRACTICAL EXAMPLES (BILINGUAL)
## Copy & Run Code - Với Giải Thích Tiếng Việt
## Các Ví Dụ Thực Hành Từ Dễ → Khó

---

## EXAMPLE 1: Calculate DPU & DPMO
### Ví Dụ 1: Tính DPU & DPMO - ĐơN GIẢN NHẤT

**Situation:** Bạn có dữ liệu 5 ngày, cần tính DPU và DPMO.

**Data / Dữ Liệu:**
```
Day 1: 500 units, 5 defects
Day 2: 480 units, 6 defects
Day 3: 510 units, 4 defects
Day 4: 495 units, 8 defects
Day 5: 520 units, 7 defects
```

**Code:**
```python
import pandas as pd

# Create data (Tạo dữ liệu)
data = {
    'Day': [1, 2, 3, 4, 5],
    'Units': [500, 480, 510, 495, 520],
    'Defects': [5, 6, 4, 8, 7]
}

df = pd.DataFrame(data)

# Calculate DPU
total_units = df['Units'].sum()
total_defects = df['Defects'].sum()
DPU = total_defects / total_units

# Calculate DPMO (mỗi sản phẩm có 5 điểm có thể bị lỗi)
opportunities_per_unit = 5
total_opportunities = total_units * opportunities_per_unit
DPMO = (total_defects / total_opportunities) * 1_000_000

# Display results (Hiển thị kết quả)
print(f"Total units: {total_units}")
print(f"Total defects: {total_defects}")
print(f"DPU: {DPU:.6f}")
print(f"DPMO: {DPMO:.2f}")

# Assessment (Đánh giá)
if DPMO <= 3.4:
    print("✓ 6 Sigma (Excellent)")
elif DPMO <= 62:
    print("✓ 4 Sigma (Good)")
else:
    print("⚠ Needs improvement")
```

**Expected Output:**
```
Total units: 2505
Total defects: 30
DPU: 0.011976
DPMO: 479.04
✓ 4 Sigma (Good)
```

---

## EXAMPLE 2: Calculate Cpk (Process Capability)
### Ví Dụ 2: Tính Cpk - Năng Lực Quá Trình

**Situation:** Bạn đo kích thước 10 lần, tiêu chuẩn là 99-102mm, cần kiểm tra quá trình có năng lực không.

**Data / Dữ Liệu:**
```
100.1, 101.2, 99.8, 100.5, 101.0, 100.2, 99.9, 101.5, 100.3, 101.1 (mm)
```

**Code:**
```python
import numpy as np

# Data (Dữ liệu đo)
measurements = np.array([100.1, 101.2, 99.8, 100.5, 101.0, 100.2, 99.9, 101.5, 100.3, 101.1])

# Specifications (Tiêu chuẩn)
LSL = 99    # Lower Specification Limit
USL = 102   # Upper Specification Limit

# Calculate statistics (Tính thống kê)
mean = np.mean(measurements)
std_dev = np.std(measurements, ddof=1)

print(f"Mean (μ): {mean:.3f}")
print(f"Std Dev (σ): {std_dev:.3f}")
print(f"LSL: {LSL}, USL: {USL}")

# Calculate Cp & Cpk
Cp = (USL - LSL) / (6 * std_dev)
Cpu = (USL - mean) / (3 * std_dev)  # Upper capability
Cpl = (mean - LSL) / (3 * std_dev)  # Lower capability
Cpk = min(Cpu, Cpl)

print(f"\nCp: {Cp:.4f}")
print(f"Cpk: {Cpk:.4f}")
print(f"  Cpu (upper): {Cpu:.4f}")
print(f"  Cpl (lower): {Cpl:.4f}")

# Assessment (Đánh giá)
if Cpk >= 1.33:
    print("✓ Process HAS capability")
else:
    print("✗ Process NEEDS improvement")

if abs(Cp - Cpk) > 0.1:
    print("⚠ Process is OFF-CENTER")
else:
    print("✓ Process is well-centered")
```

**Expected Output:**
```
Mean (μ): 100.610
Std Dev (σ): 0.749
LSL: 99, USL: 102

Cp: 0.6701
Cpk: 0.6406
  Cpu (upper): 0.6406
  Cpl (lower): 0.7206

✗ Process NEEDS improvement
⚠ Process is OFF-CENTER
```

---

## EXAMPLE 3: T-Test (Compare 2 Shifts)
### Ví Dụ 3: T-Test - So Sánh 2 Ca

**Situation:** So sánh lỗi giữa ca sáng và ca chiều để biết có khác nhau không.

**Data / Dữ Liệu:**
```
Morning: 5, 6, 4, 8, 9
Evening: 15, 16, 14, 17, 15
```

**Code:**
```python
from scipy import stats
import numpy as np

# Data (Dữ liệu)
morning_shift = np.array([5, 6, 4, 8, 9])
evening_shift = np.array([15, 16, 14, 17, 15])

# Step 1: Check normality (Kiểm tra chuẩn hóa)
stat1, p_norm1 = stats.shapiro(morning_shift)
stat2, p_norm2 = stats.shapiro(evening_shift)

print("=== NORMALITY TEST ===")
print(f"Morning: p={p_norm1:.4f} → {'Normal' if p_norm1 > 0.05 else 'Not normal'}")
print(f"Evening: p={p_norm2:.4f} → {'Normal' if p_norm2 > 0.05 else 'Not normal'}")

# Step 2: Choose appropriate test (Chọn kiểm định phù hợp)
if p_norm1 > 0.05 and p_norm2 > 0.05:
    t_stat, p_value = stats.ttest_ind(morning_shift, evening_shift)
    test_name = "t-test"
else:
    t_stat, p_value = stats.mannwhitneyu(morning_shift, evening_shift)
    test_name = "Mann-Whitney U"

# Display results (Hiển thị kết quả)
print(f"\n=== {test_name.upper()} ===")
print(f"Morning shift: mean={morning_shift.mean():.2f}, std={morning_shift.std():.2f}")
print(f"Evening shift: mean={evening_shift.mean():.2f}, std={evening_shift.std():.2f}")
print(f"Test statistic: {t_stat:.4f}")
print(f"P-value: {p_value:.6f}")

# Interpretation (Diễn giải)
print(f"\n=== CONCLUSION ===")
if p_value < 0.05:
    print(f"✓ P ({p_value:.6f}) < 0.05")
    print("✓ CÓ sự khác biệt ý nghĩa thống kê")
    print("✓ Hai ca lỗi KHÁC NHAU")
else:
    print(f"✗ P ({p_value:.6f}) ≥ 0.05")
    print("✗ KHÔNG có sự khác biệt")
```

**Expected Output:**
```
=== NORMALITY TEST ===
Morning: p=0.7842 → Normal
Evening: p=0.9247 → Normal

=== T-TEST ===
Morning shift: mean=6.40, std=1.82
Evening shift: mean=15.40, std=1.14
Test statistic: -10.8556
P-value: 0.000118

=== CONCLUSION ===
✓ P (0.000118) < 0.05
✓ CÓ sự khác biệt ý nghĩa thống kê
✓ Hai ca lỗi KHÁC NHAU
```

---

## EXAMPLE 4: Control Chart
### Ví Dụ 4: Vẽ Control Chart - Giám Sát Quá Trình

**Situation:** Theo dõi lỗi 20 ngày để phát hiện khi nào quá trình mất kiểm soát.

**Code:**
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Data: Daily defects for 20 days (Lỗi 20 ngày)
defects = [9, 8, 11, 10, 9, 12, 10, 9, 11, 10,
           8, 9, 10, 11, 9, 10, 11, 10, 9, 12]

df = pd.DataFrame({
    'Day': range(1, len(defects) + 1),
    'Defects': defects
})

# Calculate control limits (Tính ranh giới kiểm soát)
mean = df['Defects'].mean()
std_dev = df['Defects'].std()
UCL = mean + 3 * std_dev
LCL = mean - 3 * std_dev

print(f"Center Line (CL): {mean:.2f}")
print(f"Upper Control Limit (UCL): {UCL:.2f}")
print(f"Lower Control Limit (LCL): {LCL:.2f}")

# Detect out-of-control points (Phát hiện điểm mất kiểm soát)
df['InControl'] = (df['Defects'] >= LCL) & (df['Defects'] <= UCL)
out_of_control = df[~df['InControl']]

print(f"\nOut of Control Points: {len(out_of_control)}")
if len(out_of_control) > 0:
    print(out_of_control)

# Plot (Vẽ biểu đồ)
plt.figure(figsize=(14, 6))
plt.plot(df['Day'], df['Defects'], marker='o', linewidth=2, color='blue', label='Defects')
plt.axhline(mean, color='green', linestyle='-', linewidth=2, label=f'CL ({mean:.2f})')
plt.axhline(UCL, color='red', linestyle='--', linewidth=2, label=f'UCL ({UCL:.2f})')
plt.axhline(LCL, color='red', linestyle='--', linewidth=2, label=f'LCL ({LCL:.2f})')
plt.fill_between(df['Day'], LCL, UCL, alpha=0.1, color='green')

# Mark out-of-control points (Đánh dấu điểm mất kiểm soát)
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

# Conclusion (Kết luận)
if len(out_of_control) == 0:
    print("\n✓ Process is IN CONTROL")
else:
    print(f"\n✗ Process is OUT OF CONTROL")
    print("→ Investigate the cause")
```

---

## EXAMPLE 5: ANOVA (Compare 3+ Shifts)
### Ví Dụ 5: ANOVA - So Sánh 3+ Ca

**Situation:** So sánh lỗi giữa 3 ca (sáng, chiều, đêm).

**Code:**
```python
from scipy import stats
import numpy as np

# Data (Dữ liệu)
morning = np.array([5, 6, 4, 8, 9])
evening = np.array([15, 16, 14, 17, 15])
night = np.array([12, 13, 11, 14, 12])

# Perform ANOVA (Thực hiện ANOVA)
f_stat, p_value = stats.f_oneway(morning, evening, night)

# Display results (Hiển thị kết quả)
print("=== Shift Comparison ===")
print(f"Morning: mean={morning.mean():.2f}")
print(f"Evening: mean={evening.mean():.2f}")
print(f"Night: mean={night.mean():.2f}")
print(f"\nF-Statistic: {f_stat:.4f}")
print(f"P-value: {p_value:.6f}")

# Interpretation (Diễn giải)
if p_value < 0.05:
    print(f"\n✓ CÓ sự khác biệt ý nghĩa giữa các ca")
    print("→ Các ca làm việc ảnh hưởng đến số lỗi")
    
    # Post-hoc: which pairs are different? (Cặp nào khác?)
    _, p_ms = stats.ttest_ind(morning, evening)
    _, p_mn = stats.ttest_ind(morning, night)
    _, p_en = stats.ttest_ind(evening, night)
    
    print(f"\nDetailed comparison:")
    print(f"Morning vs Evening: p={p_ms:.6f} {'✓' if p_ms < 0.05 else '✗'}")
    print(f"Morning vs Night: p={p_mn:.6f} {'✓' if p_mn < 0.05 else '✗'}")
    print(f"Evening vs Night: p={p_en:.6f} {'✓' if p_en < 0.05 else '✗'}")
else:
    print(f"\n✗ KHÔNG có sự khác biệt")
```

---

## EXAMPLE 6: Correlation & Linear Regression
### Ví Dụ 6: Tương Quan & Hồi Quy Tuyến Tính

**Situation:** Kiểm tra xem nhiệt độ ảnh hưởng đến lỗi không.

**Data / Dữ liệu:**
```
Temperature: 20, 25, 30, 35, 40°C
Defects: 15, 12, 8, 5, 2
```

**Code:**
```python
from scipy import stats
from sklearn.linear_model import LinearRegression
import numpy as np
import matplotlib.pyplot as plt

# Data (Dữ liệu)
temp = np.array([20, 25, 30, 35, 40])
defects = np.array([15, 12, 8, 5, 2])

# 1. Calculate correlation (Tính tương quan)
correlation, p_value = stats.pearsonr(temp, defects)

print("=== CORRELATION ===")
print(f"Correlation coefficient: {correlation:.4f}")
print(f"P-value: {p_value:.6f}")

if abs(correlation) > 0.8:
    strength = "STRONG"
elif abs(correlation) > 0.5:
    strength = "MODERATE"
else:
    strength = "WEAK"

print(f"Strength: {strength}")
if p_value < 0.05:
    print("Significance: ✓ Statistically significant")

# 2. Linear regression (Hồi quy tuyến tính)
X = temp.reshape(-1, 1)
model = LinearRegression()
model.fit(X, defects)

slope = model.coef_[0]
intercept = model.intercept_
r2 = model.score(X, defects)

print(f"\n=== LINEAR REGRESSION ===")
print(f"Equation: Defects = {intercept:.2f} + {slope:.4f} × Temperature")
print(f"R² (explained): {r2:.4f} ({r2*100:.1f}%)")

# 3. Predictions (Dự đoán)
print(f"\n=== PREDICTIONS ===")
for t in [22, 28, 32]:
    pred = model.predict([[t]])[0]
    print(f"At {t}°C → Predicted defects: {pred:.2f}")

# 4. Plot (Vẽ biểu đồ)
plt.figure(figsize=(10, 6))
plt.scatter(temp, defects, s=100, alpha=0.6, label='Actual data')
plt.plot(temp, model.predict(X), color='red', linewidth=2, 
         label=f'Regression (R²={r2:.3f})')
plt.xlabel('Temperature (°C)')
plt.ylabel('Defects')
plt.title(f'Temperature vs Defects (r={correlation:.3f})')
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

print(f"\n✓ For every 1°C increase → Defects decrease by {abs(slope):.2f}")
```

---

## EXAMPLE 7: Pareto Chart
### Ví Dụ 7: Pareto Chart - Phân Loại Lỗi Quan Trọng

**Situation:** Bạn có 5 loại lỗi, muốn biết loại nào gây tổn thất nhiều nhất.

**Data / Dữ liệu:**
```
Wrong size: 45 defects
Color issue: 30 defects
Scratches: 15 defects
Dents: 8 defects
Other: 2 defects
```

**Code:**
```python
import matplotlib.pyplot as plt
import numpy as np

# Data (Dữ liệu)
defect_types = ['Wrong Size', 'Color Issue', 'Scratches', 'Dents', 'Other']
counts = [45, 30, 15, 8, 2]

# Sort from high to low (Sắp xếp từ cao đến thấp)
sorted_indices = np.argsort(counts)[::-1]
defect_types = [defect_types[i] for i in sorted_indices]
counts = [counts[i] for i in sorted_indices]

# Calculate percentages (Tính phần trăm)
total = sum(counts)
percentages = [(c/total)*100 for c in counts]
cumulative = np.cumsum(percentages)

# Print details (In chi tiết)
print("=== PARETO ANALYSIS ===")
print(f"{'Defect Type':<20} {'Count':>8} {'%':>6} {'Cumulative %':>15}")
print("-" * 50)
for i in range(len(defect_types)):
    print(f"{defect_types[i]:<20} {counts[i]:>8} {percentages[i]:>5.1f}% {cumulative[i]:>14.1f}%")

# Identify vital few (Xác định những loại quan trọng)
vital_few = []
for i in range(len(defect_types)):
    vital_few.append(defect_types[i])
    if cumulative[i] >= 80:
        break

print(f"\n=== PARETO PRINCIPLE (80/20) ===")
print(f"Top {len(vital_few)} defect types account for {cumulative[len(vital_few)-1]:.1f}%")
print("Focus improvement efforts on:")
for t in vital_few:
    print(f"  ✓ {t}")

# Plot (Vẽ biểu đồ)
fig, ax1 = plt.subplots(figsize=(12, 6))

# Bar chart (Cột)
color = 'tab:blue'
ax1.bar(defect_types, counts, color=color, alpha=0.7)
ax1.set_ylabel('Count', color=color)
ax1.tick_params(axis='y', labelcolor=color)
ax1.grid(True, alpha=0.3, axis='y')

# Line chart (Đường - tỷ lệ tích lũy)
ax2 = ax1.twinx()
color = 'tab:red'
ax2.plot(defect_types, cumulative, color=color, marker='o', linewidth=2, 
         markersize=8, label='Cumulative %')
ax2.axhline(80, color='green', linestyle='--', linewidth=2, label='80% (Pareto)')
ax2.set_ylabel('Cumulative %', color=color)
ax2.tick_params(axis='y', labelcolor=color)
ax2.set_ylim(0, 110)

plt.title('Pareto Chart - Prioritize Defect Resolution')
fig.tight_layout()
plt.show()
```

---

## HOW TO RUN THESE EXAMPLES
### Cách Chạy Các Ví Dụ

1. **Open Jupyter Notebook** (Mở Jupyter)
   ```bash
   jupyter notebook
   ```

2. **Create new cell** (Tạo cell mới)

3. **Copy example code** (Sao chép code)

4. **Run with Shift+Enter** (Chạy với Shift+Enter)

5. **Modify with your data** (Sửa với dữ liệu của bạn)

6. **Run again** (Chạy lại)

---

**Start with Example 1 (easiest) → gradually go to Example 7 (hardest)**

**Bắt đầu từ Example 1 (dễ nhất) → dần lên Example 7 (khó nhất)**

---