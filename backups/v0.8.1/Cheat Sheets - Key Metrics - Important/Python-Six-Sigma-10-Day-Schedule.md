# PYTHON FOR SIX SIGMA - OPTIMIZED 10-DAY LEARNING SCHEDULE
## Complete Learning Path with References & Daily Objectives
## Optimized for Beginners with Python Focus | Lộ Trình 10 Ngày

---

## 📋 OVERVIEW / TỔNG QUAN

**Total Duration:** 10 days (intensive)
**Daily Time Commitment:** 4-6 hours
**Learning Approach:** Theory + NotebookLM Q&A + Python Hands-on
**Target:** From beginner to practical Six Sigma analyst

**Lộ Trình Tổng Quát:**
- **Giai Đoạn 1 (Ngày 1-3):** DEFINE & LEAN (Tư duy & Nền tảng)
- **Giai Đoạn 2 (Ngày 4-6):** MEASURE (Đo lường sự thật)
- **Giai Đoạn 3 (Ngày 7-8):** ANALYZE (Phân tích & Nguyên nhân)
- **Giai Đoạn 4 (Ngày 9-10):** IMPROVE & CONTROL (Cải tiến & Kiểm soát)

---

---

# GIAI ĐOẠN 1: DEFINE & LEAN (TƯ DUY & NỀN TẢNG)
## Ngày 1-3: Thiết lập tư duy Six Sigma

---

## NGÀY 1: Tổng Quan Six Sigma & Tư Duy Lean
### Day 1: Six Sigma Overview & Lean Mindset

**Duration:** 5-6 hours
**Objective:** Hiểu DMAIC, biết 8 loại lãng phí, nắm vai trò Belt

---

### PART 1A: Lý Thuyết (2 hours)

**Topics:**

#### 1. Six Sigma Definition & History
- **Definition:** Data-driven methodology để cải tiến quy trình (3.4 DPMO = 99.99966% tốt)
- **History:** Motorola (1980s) → General Electric (1990s) → Toàn cầu
- **Statistically:** 6 sigma từ trung bình = 1 lỗi / 1 triệu

**Reference:**
```
📘 ASQ Black Belt Body of Knowledge (BBBOK)
   Section: Introduction to Six Sigma
📘 ISCCA Six Sigma Training Materials
   Chapter: Foundations of Six Sigma
```

#### 2. DMAIC Roadmap (Sơ Đồ 5 Bước)
```
DEFINE        MEASURE       ANALYZE       IMPROVE       CONTROL
│             │             │             │             │
Problem       Data          Root          Solutions     Sustain
Charter       Quality       Cause         Implement     Monitor
│             │             │             │             │
Week 1        Week 2        Week 3        Week 4        Week 5+
```

**Chi tiết mỗi bước:**
- **D (Define):** Project Charter, VOC → CTQ, SIPOC
- **M (Measure):** Data Collection Plan, MSA, Capability Analysis
- **A (Analyze):** Hypothesis Tests, Root Cause (Fishbone, 5 Whys)
- **I (Improve):** DOE, Solution Selection, Pilot Test
- **C (Control):** SPC, Control Plan, Documentation

#### 3. Belt Roles (Vai Trò)
| Belt Level | Role | Certification |
|-----------|------|---|
| **White** | Understand basics | ~1 week |
| **Yellow** | Support projects, apply tools | ~20 hours |
| **Green** | Lead improvement projects (part-time) | ~20 days |
| **Black** | Lead strategic projects (full-time) | ~20 days |
| **Master Black** | Train & coach Black Belts | 5+ years experience |

#### 4. The 8 Wastes of Lean (8 Loại Lãng Phí - DOWNTIME)
```
D = Defects (Lỗi sản phẩm)
O = Overproduction (Sản xuất thừa)
W = Waiting (Chờ đợi)
N = Non-utilized Talent (Lãng phí nhân tài)
T = Transportation (Vận chuyển không cần thiết)
I = Inventory (Hàng tồn kho)
M = Motion (Chuyển động không cần thiết)
E = Extra Processing (Xử lý thêm không cần)
```

**Ví Dụ Thực Tế (Trong Software Engineering):**
| Waste | Manufacturing | Software |
|-------|---|---|
| Defects | Lỗi sản xuất | Bug, lỗi code |
| Overproduction | Sản xuất quá mức | Build/deploy không cần |
| Waiting | Chờ tài nguyên | Chờ review, merge PR |
| Non-utilized | Lãng phí kỹ năng | Dev không tự quyết định |
| Transportation | Vận chuyển | Chuyển tiếp giữa team |
| Inventory | Hàng tồn | Code chưa deploy |
| Motion | Chuyển động không cần | Thao tác UI lặp lại |
| Extra Processing | Xử lý thêm | Code redundant, comments thừa |

---

### PART 1B: NotebookLM Q&A (1.5 hours)

**Prompt 1:** 
```
Dựa trên file Cheat Sheet về Six Sigma, hãy đóng vai giám khảo:
- Hỏi tôi về 8 loại lãng phí (DOWNTIME)
- Nếu tôi sai, giải thích lại
- Đưa ra ví dụ thực tế từ ngành phần mềm hoặc sản xuất
- Yêu cầu tôi xác định đó là loại lãng phí nào

Ví dụ: "Một team dev phải chờ 2 tuần để có môi trường test. 
Đây là lãng phí gì?" → Tôi trả lời → Bạn chấm điểm
```

**Expected Outcome:**
- Bạn nhớ được tất cả 8 loại lãng phí
- Có thể nhận diện lãng phí trong công việc hàng ngày

---

### PART 1C: Python (Không có)
**Lý do:** Ngày 1 tập trung tư duy, không cần code

---

### PART 1D: Summary Checklist
- [ ] Hiểu DMAIC là gì
- [ ] Nhớ 8 loại lãng phí (DOWNTIME)
- [ ] Biết điểm khác giữa các Belt level
- [ ] Có thể cho ví dụ lãng phí trong công việc của bạn

**References Used:**
```
📘 FILE 1 [170] - Python-For-Six-Sigma-Complete-Bilingual.md
   SECTION 1: Introduction to Six Sigma
📘 ASQ BBBOK - Chapter 1: Overview & Methodology
📘 ISCCA Materials - Introduction to Lean Six Sigma
```

---

---

## NGÀY 2: Công Cụ Lean & Thống Kê Cơ Bản
### Day 2: Lean Tools & Basic Statistics

**Duration:** 5-6 hours
**Objective:** Biết 5S, Kaizen, Poka-Yoke, thống kê mô tả, vẽ histogram

---

### PART 2A: Lý Thuyết (2 hours)

#### 1. Lean Tools (Công Cụ Lean)

**5S Method (Sắp xếp, Sạch sẽ, Sắp hàng, Sơ đồ hóa, Sự kỷ luật)**
```
S1: SEIRI (Sort - Sắp xếp)
    → Xóa những gì không cần
    → Ví dụ: Xóa code dead, unused variables
    
S2: SEITON (Set - Sắp hàng)
    → Sắp xếp để dễ tìm
    → Ví dụ: Tổ chức folder project logic, naming convention
    
S3: SEISO (Shine - Sạch sẽ)
    → Làm sạch/maintain
    → Ví dụ: Code review, refactor, clean up logs
    
S4: SEIKETSU (Standardize - Sơ đồ hóa)
    → Tạo quy trình chuẩn
    → Ví dụ: Development standards, code style guide
    
S5: SHITSUKE (Sustain - Sự kỷ luật)
    → Duy trì liên tục
    → Ví dụ: Daily standup, code quality checks
```

**Kaizen (Continuous Improvement - Cải tiến Liên Tục)**
- **Triết lý:** Nhỏ, đơn giản, liên tục là tốt hơn lớn, phức tạp, một lần
- **Method:** Plan-Do-Check-Act (PDCA)
- **Ví dụ:** Mỗi sprint, team cải tiến một quy trình nhỏ

**Poka-Yoke (Mistake-Proofing - Chống Lỗi)**
- **Ý tưởng:** Thiết kế để không thể sai
- **Ví dụ trong Software:**
  - Type checking (TypeScript thay vì JavaScript)
  - Input validation (không cho nhập số âm nếu không hợp lệ)
  - Code review checklist
  - Automated tests trước khi merge

**Visual Management (Quản Lý Hình Ảnh)**
- **Ý tưởng:** Mọi người nhìn vào là hiểu tình trạng
- **Ví dụ:**
  - Dashboard hiển thị build status
  - Kanban board (To Do, Doing, Done)
  - Burndown chart (Sprint progress)

**Reference:**
```
📘 ASQ BBBOK - Section: Lean Principles
📘 ISCCA Materials - Chapter: Lean Tools & Techniques
```

#### 2. Descriptive Statistics (Thống Kê Mô Tả)

**Key Metrics:**
```
Mean (μ)           = Trung bình số học
Median             = Giá trị ở giữa (50%)
Mode               = Giá trị xuất hiện nhiều nhất
Standard Dev (σ)   = Độ phân tán (mặc định để test chuẩn hóa)
Variance (σ²)      = Bình phương độ phân tán
Range              = Max - Min (Khoảng)
IQR                = Q3 - Q1 (Tứ phân vị)
Skewness           = Độ xiên (âm = lệch trái, dương = lệch phải)
Kurtosis           = Độ nhọn (peak hoặc flat)
```

**Phân Phối Chuẩn (Normal Distribution - Gaussian)**
```
       Bell curve / Đường chuông
           ↑
      68% |    ###
           |   #####
      95% |  #######
           | #########
      99% |###########
           |____________
        -3σ -2σ -1σ  0  +1σ +2σ +3σ
        
Ngoài ±3σ = Outliers (bất thường)
Ngoài ±6σ = Lỗi hoặc dữ liệu sai
```

---

### PART 2B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Hãy giải thích cho tôi:
1. Poka-Yoke là gì? Cho ví dụ áp dụng trong lập trình Python.
2. Sự khác biệt giữa Mean, Median, Mode là gì?
3. Khi nào nên dùng Mean? Khi nào nên dùng Median?

Ví dụ: "Lương của 10 nhân viên: $40k, $45k, $50k, $50k, $55k, 
$60k, $65k, $70k, $75k, $1M"
Hãy tính Mean, Median, Mode. Cái nào phản ánh thực tế hơn?
```

**Expected Outcome:**
- Hiểu thế nào là "lỗi proof" design
- Biết Mean có thể bị ảnh hưởng bởi outlier
- Median là cân bằng hơn khi có extreme values

---

### PART 2C: Python Hands-on (1.5 hours)

**Task 1: Create a Dataset**
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Simulate: Code build time (in minutes) for 100 builds
np.random.seed(42)
build_times = np.random.normal(loc=5, scale=1.2, size=100)
build_times = np.abs(build_times)  # Ensure positive

df = pd.DataFrame({
    'build_number': range(1, 101),
    'build_time_minutes': build_times
})

print(df.head())
print(f"Total builds: {len(df)}")
```

**Task 2: Descriptive Statistics**
```python
# Calculate all statistics
stats = df['build_time_minutes'].describe()
print(stats)

# Custom statistics
print(f"Mean: {df['build_time_minutes'].mean():.2f} min")
print(f"Median: {df['build_time_minutes'].median():.2f} min")
print(f"Mode: {df['build_time_minutes'].mode().values[0]:.2f} min")
print(f"Std Dev: {df['build_time_minutes'].std():.2f} min")
print(f"Variance: {df['build_time_minutes'].var():.2f}")
print(f"Range: {df['build_time_minutes'].max() - df['build_time_minutes'].min():.2f} min")
print(f"IQR: {df['build_time_minutes'].quantile(0.75) - df['build_time_minutes'].quantile(0.25):.2f} min")
```

**Task 3: Visualization**
```python
# Histogram + Normal Distribution
plt.figure(figsize=(12, 6))

# Histogram
plt.hist(df['build_time_minutes'], bins=30, edgecolor='black', alpha=0.7, label='Build times')

# Overlay normal distribution
from scipy.stats import norm
mu = df['build_time_minutes'].mean()
sigma = df['build_time_minutes'].std()
x = np.linspace(df['build_time_minutes'].min(), df['build_time_minutes'].max(), 100)
plt.plot(x, norm.pdf(x, mu, sigma) * len(df) * (df['build_time_minutes'].max() - df['build_time_minutes'].min()) / 30, 
         'r-', linewidth=2, label='Normal Distribution')

plt.xlabel('Build Time (minutes)')
plt.ylabel('Frequency')
plt.title('Distribution of Build Times')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# Statistical summary
print(f"\n=== DISTRIBUTION ANALYSIS ===")
print(f"Distribution is roughly normal? {abs(df['build_time_minutes'].skew()) < 0.5}")
```

**Task 4: Outlier Detection (5S - Identify what to remove)**
```python
# Find outliers using 3-sigma rule
lower_bound = mu - 3*sigma
upper_bound = mu + 3*sigma

outliers = df[(df['build_time_minutes'] < lower_bound) | (df['build_time_minutes'] > upper_bound)]
print(f"Outliers (>3σ): {len(outliers)} builds")
print(outliers)

# Interpretation: These are "Special Causes" - investigate why these builds took so long
```

**File References:**
```
📘 FILE 1 [170] - SECTION 4: Basic Statistics
📘 FILE 2 [171] - DATA LOADING & BASIC OPERATIONS
📘 FILE 3 [172] - EXAMPLE 2: Descriptive Statistics
```

---

### PART 2D: Summary Checklist
- [ ] Hiểu 5S là gì và cách áp dụng
- [ ] Biết sự khác biệt Mean vs Median vs Mode
- [ ] Chạy được pandas describe() trên dataset
- [ ] Vẽ được histogram với distribution overlay
- [ ] Phát hiện được outlier bằng 3-sigma rule

---

---

## NGÀY 3: DEFINE - Xác Định Dự Án & Khách Hàng
### Day 3: DEFINE - Project Charter, VOC to CTQ, SIPOC

**Duration:** 5-6 hours
**Objective:** Viết Project Charter, biến VOC thành CTQ, vẽ SIPOC

---

### PART 3A: Lý Thuyết (2 hours)

#### 1. Project Charter (Hiến Chương Dự Án)

**Components:**

**A. Business Case (Lý Do Kinh Doanh)**
- Tại sao dự án này lại cần thiết?
- ROI (Return on Investment) kỳ vọng?
- Ví dụ: "Giảm bug từ 10% xuống 2% = Tiết kiệm $50k/năm"

**B. Problem Statement (Phát Biểu Vấn Đề)**
- Vấn đề cụ thể là gì?
- Dữ liệu hiện trạng?
- Scope (Phạm vi)?

**Ví dụ tốt:**
```
❌ BAD: "Chất lượng code không tốt"
✅ GOOD: "Module authentication có 15% lỗi per sprint, 
        cao hơn 2% của module khác. Nguyên nhân: 
        thiếu unit test (5%), code review không kỹ (7%), 
        kiến trúc cũ (3%)"
```

**C. Goal Statement (Mục Tiêu)**
- SMART: Specific, Measurable, Achievable, Relevant, Time-bound
- Baseline vs Target

**Ví dụ:**
```
Baseline: 15% defect rate
Target:   < 5% defect rate
Timeline: 3 months (by end of Q2)
Success: Tất cả module đều < 5%
```

**Reference:**
```
📘 ASQ BBBOK - DEFINE Phase: Project Charter
📘 ISCCA Materials - Chapter: Defining the Project
📘 FILE 1 [170] - SECTION 3: DEFINE Phase
```

#### 2. VOC to CTQ (Voice of Customer → Critical to Quality)

**VOC (Tiếng Nói Khách Hàng)** = Điều khách hàng nói
- Chất lượng code tốt
- Ứng dụng load nhanh
- Dễ sử dụng

**CTQ (Yêu Cầu Kỹ Thuật Đo Được)** = Biến VOC thành con số
- Chất lượng code → Defect rate < 2% / Cyclomatic complexity < 10
- Load nhanh → Page load time < 2 seconds / API response time < 100ms
- Dễ sử dụng → User can complete task in < 3 clicks / NPS > 8

**Process:**
```
VOC (Qualitative)
    ↓
CTQ (Quantitative)
    ↓
Measurement (LSL, USL, Target)
```

**Example Table:**

| VOC | CTQ | LSL | Target | USL |
|-----|-----|-----|--------|-----|
| Code quality | Defect rate | 0% | 1% | 5% |
| Performance | API response (ms) | - | 100 | 500 |
| Usability | Clicks to complete | - | 3 | 10 |
| Reliability | Uptime | 99% | 99.9% | - |

#### 3. SIPOC Diagram (Supplier-Input-Process-Output-Customer)

```
SUPPLIER  →  INPUT  →  PROCESS  →  OUTPUT  →  CUSTOMER
   ↓           ↓         ↓          ↓           ↓
Who         What's      Main      What's      Who
provides    needed      steps      delivered  uses
input                              it

Example (Code Review Process):
─────────────────────────────────────────────────
Dev       PR Code      1. Create PR    Approved  Dev Team
Team    + Review       2. Review code  Code      + Product
          List         3. Test         + Tests   Manager
                       4. Merge
```

**Reference:**
```
📘 ASQ BBBOK - DEFINE Phase: SIPOC Analysis
📘 ISCCA Materials - Process Mapping Tools
📘 FILE 1 [170] - SECTION 3: DEFINE Phase examples
```

---

### PART 3B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Tôi muốn làm dự án: "Giảm bug trong module payment từ 8% xuống 2%"

Hãy giúp tôi:
1. Viết Project Charter với Business Case, Problem Statement, Goal Statement
2. Chuyển VOC "Payment module ổn định" thành CTQ cụ thể (với số liệu)
3. Vẽ SIPOC cho quy trình code review → merge

Bạn hãy:
- Hỏi tôi các câu hỏi chi tiết (What metrics? Why 2%? Timeline?)
- Giúp tôi làm Project Charter hoàn chỉnh
```

**Expected Outcome:**
- Có một Project Charter đúng quy chuẩn
- VOC & CTQ rõ ràng, có số liệu
- Hiểu SIPOC là gì và cách áp dụng

---

### PART 3C: Python Hands-on (1.5 hours)

**Task 1: Vẽ SIPOC Diagram bằng Graphviz**

```python
from graphviz import Digraph

# Create SIPOC diagram
dot = Digraph(comment='SIPOC - Code Review Process', format='png')
dot.attr(rankdir='LR')
dot.attr('node', shape='box', style='rounded,filled', fillcolor='lightblue')

# Add nodes
dot.node('S', 'SUPPLIER\nDeveloper', shape='ellipse')
dot.node('I', 'INPUT\n- Code\n- Checklist', shape='box')
dot.node('P', 'PROCESS\n1. Create PR\n2. Review\n3. Approve\n4. Merge', shape='box')
dot.node('O', 'OUTPUT\n- Clean code\n- Test passed', shape='box')
dot.node('C', 'CUSTOMER\nProduct Team', shape='ellipse')

# Add edges
dot.edge('S', 'I')
dot.edge('I', 'P')
dot.edge('P', 'O')
dot.edge('O', 'C')

# Render
dot.render('sipoc_diagram', cleanup=True)
print("SIPOC diagram saved as sipoc_diagram.png")
```

**Task 2: VOC to CTQ Mapping**

```python
import pandas as pd

# Create VOC to CTQ mapping
voc_ctq = pd.DataFrame({
    'VOC (Customer Need)': [
        'Code quality is high',
        'Application is fast',
        'System is reliable',
        'Easy to maintain'
    ],
    'CTQ (Measurable)': [
        'Defect rate',
        'API response time',
        'System uptime',
        'Code coverage'
    ],
    'Unit': [
        'percent (%)',
        'milliseconds (ms)',
        'percent (%)',
        'percent (%)'
    ],
    'LSL': [
        '0%',
        '0',
        '99%',
        '70%'
    ],
    'Target': [
        '1%',
        '100',
        '99.9%',
        '85%'
    ],
    'USL': [
        '5%',
        '500',
        '-',
        '-'
    ]
})

print(voc_ctq.to_string(index=False))

# Save to CSV
voc_ctq.to_csv('voc_ctq_mapping.csv', index=False)
print("\nVOC-CTQ mapping saved to voc_ctq_mapping.csv")
```

**Task 3: Project Charter Template**

```python
# Create Project Charter document
charter = """
═══════════════════════════════════════════════════════════
                   PROJECT CHARTER
═══════════════════════════════════════════════════════════

PROJECT NAME: Reduce Payment Module Defects to < 2%
PROJECT SPONSOR: VP Engineering
PROJECT LEADER: [Your Name]
START DATE: [Date]
TARGET END DATE: [+3 months]

───────────────────────────────────────────────────────────
1. BUSINESS CASE
───────────────────────────────────────────────────────────

Current State:
- Payment module has 8% defect rate
- Cost of defects: $50k/quarter in lost revenue & support
- Impact: 2% of all transactions fail on first attempt

Desired State:
- Payment module < 2% defect rate (industry standard)
- Estimated savings: $40k/quarter
- ROI: 4:1 (Investment vs Benefit)

───────────────────────────────────────────────────────────
2. PROBLEM STATEMENT
───────────────────────────────────────────────────────────

CURRENT PERFORMANCE:
- Baseline: 8% defect rate
- Benchmark: Industry average 2%
- Gap: 6% (4x worse than expected)

ROOT CAUSES (Preliminary):
- 40% from edge cases not covered in tests
- 35% from integration issues between services
- 25% from insufficient code review

SCOPE:
- Module: Payment processing (in-scope)
- Excluded: Payment UI, Admin dashboard
- Timeline: 3 months

───────────────────────────────────────────────────────────
3. GOAL STATEMENT (SMART)
───────────────────────────────────────────────────────────

By [End Date], the Payment Module will achieve:
✓ Defect Rate: 8% → < 2%
✓ Mean Time To Resolution (MTTR): 4 hours → < 1 hour
✓ Test Coverage: 65% → > 85%
✓ Code Review Cycle: 24 hours → < 8 hours

Success Criteria:
- All metrics achieved by target date
- Sustained for 2 consecutive months post-project
- Zero critical bugs in production

───────────────────────────────────────────────────────────
4. BENEFITS
───────────────────────────────────────────────────────────

Quantitative:
- $40k quarterly savings
- 98% transaction success (up from 92%)

Qualitative:
- Improved customer trust
- Better team morale
- Reduced firefighting

───────────────────────────────────────────────────────────
5. TEAM & RESOURCES
───────────────────────────────────────────────────────────

Black Belt: [Your Name]
Green Belts: 2 senior engineers
Contributors: QA team, DevOps
Budget: $15k (tools, training)

═══════════════════════════════════════════════════════════
"""

print(charter)

# Save to file
with open('project_charter.txt', 'w') as f:
    f.write(charter)
print("Project Charter saved to project_charter.txt")
```

**File References:**
```
📘 FILE 1 [170] - SECTION 3: DEFINE Phase
📘 FILE 2 [171] - Quick Reference: SIPOC, VOC-CTQ
📘 FILE 5 [174] - FAQ: Project Charter examples
```

---

### PART 3D: Summary Checklist
- [ ] Viết được Project Charter hoàn chỉnh (Business Case + Problem Statement + Goal)
- [ ] Chuyển VOC thành CTQ cụ thể
- [ ] Vẽ được SIPOC diagram
- [ ] Hiểu vai trò mỗi phần trong DEFINE

---

---

# GIAI ĐOẠN 2: MEASURE (ĐO LƯỜNG SỰ THẬT)
## Ngày 4-6: Thu Thập & Phân Tích Dữ Liệu

---

## NGÀY 4: Thu Thập Dữ Liệu & Kế Hoạch Lấy Mẫu
### Day 4: Data Collection & Sampling Plan

**Duration:** 5-6 hours
**Objective:** Hiểu Continuous vs Discrete data, tạo Data Collection Plan

---

### PART 4A: Lý Thuyết (2 hours)

#### 1. Types of Data (Loại Dữ Liệu)

**A. CONTINUOUS (Liên Tục) - Đo được giữa các điểm**
```
Ví dụ: 5.2, 5.25, 5.251, 5.2511...
- Build time: 4.5 minutes
- API response time: 123.45 ms
- Customer age: 32.7 years
- Temperature: 25.3°C

Đặc điểm: Vô hạn số thập phân (trong lý thuyết)
```

**B. DISCRETE (Rời Rạc) - Chỉ là số nguyên**
```
Ví dụ: 1, 2, 3, ... (không có 1.5 lỗi)
- Number of defects: 3 bugs
- Customer count: 150 people
- Test failures: 5 tests failed
- Delivery status: 1=on-time, 0=late

Đặc điểm: Có số ít nhất, đếm được
```

**C. CATEGORICAL (Phân Loại) - Không phải số**
```
Ví dụ:
- Environment: Dev, Staging, Prod
- Status: Pass, Fail, Pending
- Team: Backend, Frontend, DevOps
```

**Impact on Analysis:**
```
Data Type     → Test Type       → Chart Type
────────────────────────────────────────────
Continuous    → t-test, ANOVA   → Histogram, Boxplot
Discrete      → Chi-square      → Bar chart
Categorical   → Chi-square      → Frequency table
```

#### 2. Data Collection Plan (Kế Hoạch Thu Thập Dữ Liệu)

**Components:**

| Component | Example |
|-----------|---------|
| **What** | Build time, defect count, API response |
| **Where** | Production environment, staging, dev |
| **When** | Daily 9-5, all shifts, all days |
| **Who** | Automated tool (Jenkins), QA manual |
| **How** | Logs, database query, manual inspection |
| **Sample Size** | 100 builds, 500 transactions |
| **Frequency** | Real-time, hourly, daily |

**Example Plan:**
```
Project: Reduce Payment Module Defects
─────────────────────────────────────────

METRIC 1: Defect Rate
  What:       Count of defects per transaction
  Where:      Production payment API
  When:       24/7 monitoring
  How:        Error logs aggregation
  Sample:     All transactions (no sampling)
  Collection: Automated via Datadog

METRIC 2: Build Time
  What:       Duration of full CI/CD pipeline
  Where:      Jenkins CI server
  When:       Each code push (M-F 9-5 initially)
  How:        Jenkins API metrics
  Sample:     100 consecutive builds
  Collection: Automated daily export
```

#### 3. Sampling Methods (Phương Pháp Lấy Mẫu)

**When to Sample:**
- Population too large (millions of transactions)
- Measurement destructive (can't test all)
- Time/cost constraint

**Methods:**

| Method | Example | Pros | Cons |
|--------|---------|------|------|
| **Random** | Every nth item randomly | Unbiased | Can miss patterns |
| **Stratified** | 25% from each environment | Ensures coverage | More complex |
| **Systematic** | Every 10th item | Simple | Periodic bias risk |
| **Cluster** | All orders from one day | Quick | May be biased |

**Reference:**
```
📘 ASQ BBBOK - MEASURE Phase: Data Collection & Sampling
📘 ISCCA Materials - Chapter: Measurement Planning
📘 FILE 1 [170] - SECTION 4: MEASURE Phase
```

---

### PART 4B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Tôi đang quản lý dự án "Monitor API Performance".

Hãy giúp tôi:
1. Xác định dữ liệu nào là Continuous, Discrete, Categorical
   - API response time
   - HTTP status code (200, 404, 500)
   - Error message text
   - Request count per minute
   - Server location (US, EU, Asia)
   
2. Tạo Data Collection Plan cho API monitoring
   - Quy trình thu thập?
   - Tần suất?
   - Kích thước mẫu?
   
3. Khi nào nên dùng Random vs Stratified sampling?
```

**Expected Outcome:**
- Phân loại được Continuous, Discrete, Categorical
- Tạo được Data Collection Plan chi tiết
- Biết khi nào dùng sampling nào

---

### PART 4C: Python Hands-on (1.5 hours)

**Task 1: Create Data Collection Plan Checklist**

```python
import pandas as pd

# Data Collection Plan Template
collection_plan = pd.DataFrame({
    'Metric': [
        'Defect Rate',
        'Build Time',
        'API Response Time',
        'Test Coverage',
        'Code Review Cycle'
    ],
    'Data Type': [
        'Discrete (count)',
        'Continuous (time)',
        'Continuous (time)',
        'Continuous (percent)',
        'Continuous (time)'
    ],
    'Source': [
        'Error logs',
        'Jenkins',
        'APM tool',
        'Coverage report',
        'GitHub'
    ],
    'Frequency': [
        'Real-time',
        'Per build',
        'Per request',
        'Per PR',
        'Per PR'
    ],
    'Sample Method': [
        'All data',
        'All builds',
        'All requests',
        'All PRs',
        'All PRs'
    ],
    'Target Size': [
        '10,000+',
        '100+',
        '50,000+',
        '50+',
        '50+'
    ]
})

print("DATA COLLECTION PLAN")
print("=" * 100)
print(collection_plan.to_string(index=False))

# Save to CSV
collection_plan.to_csv('data_collection_plan.csv', index=False)
```

**Task 2: Random Sampling Implementation**

```python
import pandas as pd
import numpy as np

# Simulate large dataset (10,000 transactions)
np.random.seed(42)
large_dataset = pd.DataFrame({
    'transaction_id': range(1, 10001),
    'response_time_ms': np.random.normal(150, 50, 10000),
    'status_code': np.random.choice([200, 400, 500], 10000, p=[0.95, 0.03, 0.02]),
    'user_region': np.random.choice(['US', 'EU', 'Asia'], 10000)
})

print(f"Total dataset size: {len(large_dataset)}")

# Method 1: Random sampling (nhanh, đơn giản)
sample_random = large_dataset.sample(n=100, random_state=42)
print(f"\nRandom sample size: {len(sample_random)}")
print(f"Response time (sample): mean={sample_random['response_time_ms'].mean():.2f} ms")

# Method 2: Stratified sampling by region
sample_stratified = large_dataset.groupby('user_region', group_keys=False).apply(
    lambda x: x.sample(n=max(1, int(len(x) * 0.01)), random_state=42)  # 1% from each region
)
print(f"\nStratified sample size: {len(sample_stratified)}")
print(f"Sample composition:\n{sample_stratified['user_region'].value_counts()}")

# Method 3: Systematic sampling (every nth item)
n = len(large_dataset) // 100  # Get 100 samples
sample_systematic = large_dataset.iloc[::n]
print(f"\nSystematic sample size: {len(sample_systematic)}")
```

**Task 3: Data Quality Baseline**

```python
# Establish baseline metrics from sample
sample = large_dataset.sample(n=500, random_state=42)

baseline_metrics = {
    'Response Time': {
        'mean': sample['response_time_ms'].mean(),
        'std': sample['response_time_ms'].std(),
        'p50': sample['response_time_ms'].quantile(0.50),
        'p95': sample['response_time_ms'].quantile(0.95),
        'p99': sample['response_time_ms'].quantile(0.99)
    },
    'Success Rate': {
        'total': len(sample),
        'success': (sample['status_code'] == 200).sum(),
        'success_rate': (sample['status_code'] == 200).sum() / len(sample) * 100
    }
}

print("=" * 60)
print("BASELINE METRICS (From Sample)")
print("=" * 60)
print(f"\nResponse Time Statistics:")
for key, value in baseline_metrics['Response Time'].items():
    print(f"  {key:12}: {value:.2f} ms")

print(f"\nSuccess Rate:")
for key, value in baseline_metrics['Success Rate'].items():
    if key == 'success_rate':
        print(f"  {key:12}: {value:.2f}%")
    else:
        print(f"  {key:12}: {value}")

print("\n" + "=" * 60)
print("TARGET IMPROVEMENTS")
print("=" * 60)
target_p95 = baseline_metrics['Response Time']['p95'] * 0.8  # Reduce by 20%
target_success = baseline_metrics['Success Rate']['success_rate'] + 2  # Increase by 2%

print(f"P95 Response Time: {baseline_metrics['Response Time']['p95']:.2f} ms → {target_p95:.2f} ms")
print(f"Success Rate: {baseline_metrics['Success Rate']['success_rate']:.2f}% → {target_success:.2f}%")
```

**File References:**
```
📘 FILE 1 [170] - SECTION 4: Data Collection & Sampling
📘 FILE 2 [171] - Data Loading & Data Quality Checking
📘 FILE 4 [174] - FAQ: Missing Values, Data Quality
```

---

### PART 4D: Summary Checklist
- [ ] Phân loại được Continuous vs Discrete data
- [ ] Tạo được Data Collection Plan
- [ ] Chạy được random sampling code
- [ ] Lập được baseline metrics

---

---

## NGÀY 5: MSA - Phân Tích Hệ Thống Đo Lường (MEASUREMENT SYSTEM ANALYSIS)
### Day 5: MSA - Gage R&R Analysis

**Duration:** 5-6 hours (IMPORTANT DAY)
**Objective:** Hiểu Gage R&R, kiểm chứng "cân có đúng không" trước khi phân tích

---

### PART 5A: Lý Thuyết (2 hours)

#### 1. Why MSA Matters (Tại Sao Quan Trọng)

**Scenario (Tình Huống):**
```
Bạn đo độ dài 10 sản phẩm bằng 2 thước:
  Thước A: 10.1, 10.2, 10.3, 10.1, 10.2
  Thước B: 9.8, 11.2, 10.5, 9.9, 10.8
  
Kết luận: Thước B kém chính xác!

⚠️ KHÓA BÀI HỌC: 
   Nếu hệ thống đo không chính xác,
   mọi kết luận thống kê đều sai!
```

**Analogy (Loại Từ):**
- Software testing: Unit test phải "reliable" trước khi integration test
- CI/CD: Code style check phải đúng trước khi deploy
- Hardware: Calibration trước khi production

#### 2. Accuracy vs Precision (Độ Chính Xác vs Độ Lặp Lại)

```
Accuracy (Độ Chính Xác)
= Gần với giá trị thật bao nhiêu
= Unbiased, no systematic error

Precision (Độ Lặp Lại)  
= Đo lặp lại có kết quả giống không
= Variation, repeatability

Visual:

        Accurate   Precise    Both       None
         Only      Only      ✓✓✓✗
           ✓          ✓        ✓          ✗
              ✓          ✓        ✓          ✗
            ✓✓✓✗     ✓✓✓✗    ✓✓✓✓     ✓✓✓✓
         
         Mean    Clustered  Perfect   Random
        Close    but Biased           off
```

#### 3. Gage R&R Components

**R&R = Repeatability + Reproducibility**

```
Repeatability (Tái Lập - Same Person, Same Equipment)
= Khi người A dùng thước A, dò lần 1 vs lần 2 khác nhau bao nhiêu?
= Variation trong hệ thống (equipment, environmental)

Reproducibility (Tái Tạo - Same Part, Different Operators)
= Khi người A & B cùng dùng thước A đo sản phẩm đó, khác nhau bao nhiêu?
= Variation giữa các operator
```

**Acceptance Criteria:**

```
Gage R&R % = Total Variation từ R&R / Total Allowed Variation

< 10%  → Excellent (Tốt, chấp nhận ngay)
10-30% → Acceptable (Còn được, có thể dùng)
> 30%  → Not Acceptable (Tệ, phải cải tiến hệ thống đo)
```

**Example:**
```
Spec: 10mm ± 1mm (LSL=9, USL=11)
Total Allowed Variation = USL - LSL = 2mm

Gage R&R variation = 0.15mm
Gage R&R % = (0.15 / 2) × 100 = 7.5% ✓ EXCELLENT

→ Hệ thống đo tốt, có thể dùng để phân tích quy trình
```

#### 4. Gage R&R Study Design

**Method 1: Crossed Design (Phổ Biến)**
```
3 Operators × 10 Parts × 3 Replicates = 90 measurements

Operator A
  Part 1: 10.1, 10.1, 10.2
  Part 2: 9.8, 9.9, 9.8
  ...

Operator B
  Part 1: 10.3, 10.2, 10.3
  Part 2: 10.1, 10.0, 10.1
  ...

Operator C
  Part 1: 10.0, 10.0, 10.1
  Part 2: 9.7, 9.8, 9.8
  ...
```

**Method 2: Nested Design (Khi Mẫu Bị Tiêu Thụ)**
```
Ví dụ: Chứng chỉ mẫu máu → Không thể dùng mẫu 1 lần thứ 2
```

**Reference:**
```
📘 ASQ BBBOK - MEASURE Phase: Measurement System Analysis
📘 ISCCA Materials - MSA & Gage R&R
📘 FILE 1 [170] - SECTION 4: MSA & Gage R&R
```

---

### PART 5B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Giải thích Gage R&R cho một lập trình viên:

1. "Measurement System" trong phần mềm là gì?
   (Code quality metrics, test coverage, performance benchmarks)

2. Tương tự nào giữa Gage R&R và Software Testing?
   (Repeatability = Test reliability / Reproducibility = Test across environments)

3. Nếu Test Framework bị "Gage R&R > 30%", điều gì sẽ xảy ra?
   (Test results không tin cậy → Không thể detect real issues)

4. Làm sao "calibrate" test framework giống như calibrate thước?
```

**Expected Outcome:**
- Hiểu Gage R&R không phải chỉ cho phần cứng mà cả phần mềm
- Biết khi nào data quality là vấn đề (MSA failed)

---

### PART 5C: Python Hands-on (1.5 hours) - CORE TASK

**Task 1: Simulate Gage R&R Study**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# Simulate Gage R&R Study
# 3 operators × 5 parts × 3 replicates = 45 measurements

np.random.seed(42)

# True values of parts
true_parts = np.array([10.0, 10.5, 9.5, 10.2, 9.8])

# Create measurement data
data = []
operators = ['Operator_A', 'Operator_B', 'Operator_C']
parts = ['Part_1', 'Part_2', 'Part_3', 'Part_4', 'Part_5']

for op_idx, operator in enumerate(operators):
    for part_idx, part in enumerate(parts):
        true_value = true_parts[part_idx]
        
        # Operator bias (reproducibility)
        operator_bias = np.random.normal(0, 0.1, 1)[0]
        
        for replicate in range(1, 4):
            # Measurement error (repeatability)
            measurement_error = np.random.normal(0, 0.15, 1)[0]
            measurement = true_value + operator_bias + measurement_error
            
            data.append({
                'Operator': operator,
                'Part': part,
                'Replicate': replicate,
                'Measurement': measurement
            })

df_gage = pd.DataFrame(data)
print("GAGE R&R STUDY DATA")
print("=" * 60)
print(f"Total measurements: {len(df_gage)}")
print(f"\nFirst 15 measurements:")
print(df_gage.head(15))
```

**Task 2: Calculate Gage R&R Statistics**

```python
# Calculate Gage R&R components
print("\n" + "=" * 60)
print("GAGE R&R ANALYSIS")
print("=" * 60)

# 1. Total Variation
overall_mean = df_gage['Measurement'].mean()
overall_std = df_gage['Measurement'].std()
print(f"\nOverall Mean: {overall_mean:.3f}")
print(f"Overall Std Dev: {overall_std:.3f}")

# 2. Repeatability (Within operator variation)
repeatability_data = []
for operator in operators:
    op_data = df_gage[df_gage['Operator'] == operator]
    within_op_std = op_data.groupby('Part')['Measurement'].std().mean()
    repeatability_data.append({
        'Operator': operator,
        'Within_Std': within_op_std
    })
df_repeatability = pd.DataFrame(repeatability_data)
repeatability = df_repeatability['Within_Std'].mean()
print(f"\nRepeatability (Avg Within-Operator Std): {repeatability:.4f}")

# 3. Reproducibility (Between operator variation)
operator_means = df_gage.groupby('Operator')['Measurement'].mean()
reproducibility = operator_means.std()
print(f"Reproducibility (Between-Operator Std): {reproducibility:.4f}")

# 4. Total Gage R&R
gage_rr_variation = np.sqrt(repeatability**2 + reproducibility**2)
print(f"\nTotal Gage R&R (Combined Variation): {gage_rr_variation:.4f}")

# 5. Gage R&R as % of Tolerance
# Assume tolerance = USL - LSL = 11 - 9 = 2
tolerance = 2.0
gage_rr_percent = (gage_rr_variation / tolerance) * 100
print(f"\nGage R&R % of Tolerance: {gage_rr_percent:.2f}%")

# Acceptance Decision
if gage_rr_percent < 10:
    verdict = "✓ EXCELLENT - Measurement system is adequate"
elif gage_rr_percent < 30:
    verdict = "⚠ ACCEPTABLE - Measurement system is marginal"
else:
    verdict = "✗ NOT ACCEPTABLE - Improve measurement system"

print(f"\nVERDICT: {verdict}")
```

**Task 3: Visualize Gage R&R**

```python
# Plot 1: Measurements by Operator and Part
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Plot 1a: By Operator
ax1 = axes[0]
for operator in operators:
    op_data = df_gage[df_gage['Operator'] == operator]['Measurement']
    ax1.scatter([operator] * len(op_data), op_data, alpha=0.6, s=80)
ax1.axhline(overall_mean, color='red', linestyle='--', linewidth=2, label='Overall Mean')
ax1.set_ylabel('Measurement')
ax1.set_title('Measurements by Operator (Reproducibility)')
ax1.legend()
ax1.grid(True, alpha=0.3)

# Plot 1b: By Part
ax2 = axes[1]
for part_idx, part in enumerate(parts):
    part_data = df_gage[df_gage['Part'] == part]['Measurement']
    ax2.scatter([part_idx] * len(part_data), part_data, alpha=0.6, s=80)
ax2.axhline(overall_mean, color='red', linestyle='--', linewidth=2, label='Overall Mean')
ax2.set_xticks(range(len(parts)))
ax2.set_xticklabels(parts, rotation=45)
ax2.set_ylabel('Measurement')
ax2.set_title('Measurements by Part')
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Plot 2: Interaction Plot (Reproducibility visualization)
plt.figure(figsize=(10, 6))
for operator in operators:
    op_data = df_gage[df_gage['Operator'] == operator].groupby('Part')['Measurement'].mean()
    plt.plot(parts, op_data.values, marker='o', label=operator, linewidth=2)

plt.xlabel('Part')
plt.ylabel('Average Measurement')
plt.title('Interaction Plot: Operator × Part (Reproducibility)')
plt.legend()
plt.grid(True, alpha=0.3)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
```

**Task 4: Gage R&R Report**

```python
# Create comprehensive Gage R&R report
report = f"""
╔══════════════════════════════════════════════════════════════╗
║          GAGE R&R STUDY REPORT                               ║
╚══════════════════════════════════════════════════════════════╝

MEASUREMENT SYSTEM: Part Dimension Measurement
DATE: {pd.Timestamp.now().strftime('%Y-%m-%d')}
TOLERANCE: 2.0 mm (9 mm - 11 mm)

──────────────────────────────────────────────────────────────
EXECUTIVE SUMMARY
──────────────────────────────────────────────────────────────
Gage R&R %: {gage_rr_percent:.2f}%
Status: {verdict}

──────────────────────────────────────────────────────────────
DETAILED ANALYSIS
──────────────────────────────────────────────────────────────

1. REPEATABILITY (Equipment Variation)
   Average Within-Operator Std Dev: {repeatability:.4f} mm
   Interpretation: Equipment variation when same person 
                   measures same part multiple times

2. REPRODUCIBILITY (Operator Variation)
   Between-Operator Std Dev: {reproducibility:.4f} mm
   Interpretation: Variation across different operators

3. TOTAL GAGE R&R
   Combined Variation: {gage_rr_variation:.4f} mm
   % of Tolerance: {gage_rr_percent:.2f}%

──────────────────────────────────────────────────────────────
OPERATOR ANALYSIS
──────────────────────────────────────────────────────────────
"""

for operator in operators:
    op_data = df_gage[df_gage['Operator'] == operator]['Measurement']
    report += f"\n{operator}:"
    report += f"\n  Mean: {op_data.mean():.3f} mm"
    report += f"\n  Std Dev: {op_data.std():.3f} mm"
    report += f"\n  Range: {op_data.max() - op_data.min():.3f} mm\n"

report += f"""
──────────────────────────────────────────────────────────────
RECOMMENDATIONS
──────────────────────────────────────────────────────────────
"""

if gage_rr_percent < 10:
    report += "✓ Proceed with process capability analysis\n"
    report += "✓ Measurement system is adequate for decision-making\n"
elif gage_rr_percent < 30:
    report += "⚠ Monitor measurement system performance\n"
    report += "⚠ Consider retraining operators\n"
    report += "⚠ Increase sample size for analysis\n"
else:
    report += "✗ STOP: Improve measurement system before proceeding\n"
    report += "✗ Options: Retrain operators, calibrate equipment, use better tools\n"

print(report)

# Save report
with open('gage_rr_report.txt', 'w') as f:
    f.write(report)
print("\n" + "=" * 60)
print("Report saved to 'gage_rr_report.txt'")
```

**File References:**
```
📘 FILE 1 [170] - SECTION 4: MSA & Gage R&R (Chi Tiết)
📘 FILE 2 [171] - Quick Reference: MSA Formulas
📘 FILE 3 [172] - Example (Nếu có)
📘 FILE 5 [174] - FAQ: Why MSA matters
```

---

### PART 5D: Summary Checklist ⭐ IMPORTANT
- [ ] Hiểu Accuracy vs Precision
- [ ] Hiểu Repeatability vs Reproducibility
- [ ] Chạy được Gage R&R calculation
- [ ] Diễn giải được Gage R&R %
- [ ] Biết khi nào accept/reject hệ thống đo
- [ ] Tạo được Gage R&R report

**⚠️ KEY POINT:** Nếu Gage R&R > 30%, hãy STOP và cải tiến hệ thống đo. Không phải tiếp tục phân tích!

---

---

## NGÀY 6: Process Capability (Năng Lực Quá Trình)
### Day 6: Cp, Cpk, Pp, Ppk - "Quy Trình Có Đáp Ứng Spec Không?"

**Duration:** 5-6 hours
**Objective:** Tính & giải thích Cpk, vẽ biểu đồ phân phối chuẩn

---

### PART 6A: Lý Thuyết (2 hours)

#### 1. Normal Distribution & Capability

**Setup:**
```
LSL (Lower Spec Limit) = 9mm
Target = 10mm
USL (Upper Spec Limit) = 11mm
Total Tolerance = 2mm

μ (Mean) = ?
σ (Std Dev) = ?

Câu hỏi: Quy trình có sản xuất được theo spec không?
```

**Key Metrics:**

| Metric | Formula | Ý Nghĩa |
|--------|---------|---------|
| **Cp** | (USL - LSL) / (6σ) | Tiềm năng (nếu centered) |
| **Cpk** | Min[(USL - μ)/(3σ), (μ - LSL)/(3σ)] | Khả năng thực tế |
| **Pp** | (USL - LSL) / (6σ) * [Long-term] | Performance (tương tự Cp nhưng dùng dữ liệu thực) |
| **Ppk** | Min[(USL - μ)/(3σ), (μ - LSL)/(3σ)] * [Long-term] | Performance thực tế |

**Differences:**
```
Cp/Cpk = Dùng short-term data (1-2 tuần, cùng operator, cùng machine)
         → Xem quá trình "có thể" làm tốt bao nhiêu

Pp/Ppk = Dùng long-term data (1-3 tháng, toàn bộ operator, toàn bộ shift)
         → Xem quá trình "thực tế" đang làm tốt bao nhiêu

→ Ppk < Cpk = Quá trình có vấn đề (operator, shift, time-of-day effect)
```

#### 2. Interpreting Cpk

```
Cpk ≥ 1.67  → Excellent (6 Sigma)
Cpk ≥ 1.33  → Acceptable (4 Sigma) ← Industry Standard
Cpk ≥ 1.0   → Minimum capability (3 Sigma)
Cpk < 1.0   → Not capable ← Need improvement

Example:
Cpk = 0.67  → 4.5% defect rate (Very bad)
Cpk = 1.0   → 0.3% defect rate (Acceptable)
Cpk = 1.33  → 0.006% defect rate (Good)
Cpk = 2.0   → < 0.001% defect rate (Excellent)
```

#### 3. Six Sigma Shift Rule

```
⚠️ IMPORTANT CONCEPT:

Long-term capability shifts 1.5 sigma from short-term
→ Ppk ≈ Cpk - 0.5

Example:
Short-term: Cpk = 1.67 (6 Sigma short-term)
Long-term: Ppk = 1.17 (5 Sigma long-term due to 1.5σ shift)

This 1.5σ shift accounts for:
- Centering drift over time
- Machine wear
- Environmental changes
- Multiple operators
```

**Reference:**
```
📘 ASQ BBBOK - MEASURE Phase: Process Capability
📘 ISCCA Materials - Capability Analysis
📘 FILE 1 [170] - SECTION 4: Capability Metrics
```

---

### PART 6B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Tôi có data từ quy trình sản xuất API response time:
- 200 measurements (long-term data)
- Mean = 105 ms
- Std Dev = 8 ms
- LSL = 80 ms (minimum acceptable)
- USL = 120 ms (maximum acceptable)

Hỏi:
1. Tính Ppk (long-term capability index)
2. Quy trình này có "qualified" không? (standard: Ppk ≥ 1.33)
3. Nếu không qualified, điều gì sẽ xảy ra?
4. Làm sao để improve từ Ppk = ? lên Ppk = 1.33?
```

**Expected Outcome:**
- Tính được Cpk/Ppk
- Biết cách giải thích kết quả
- Hiểu hành động cần thiết

---

### PART 6C: Python Hands-on (1.5 hours)

**Task 1: Calculate and Visualize Capability**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

# Generate process data
np.random.seed(42)
data = np.random.normal(loc=105, scale=8, size=200)  # 200 measurements

# Specifications
LSL = 80
Target = 100
USL = 120

# Calculate statistics
n = len(data)
mean = np.mean(data)
std_dev = np.std(data, ddof=1)  # Sample std dev

print("=" * 60)
print("PROCESS CAPABILITY ANALYSIS")
print("=" * 60)
print(f"\nData Summary:")
print(f"  Sample size: {n}")
print(f"  Mean (μ): {mean:.2f}")
print(f"  Std Dev (σ): {std_dev:.2f}")
print(f"  Min: {data.min():.2f}")
print(f"  Max: {data.max():.2f}")

# Calculate capability indices
Pp = (USL - LSL) / (6 * std_dev)
Ppu = (USL - mean) / (3 * std_dev)  # Upper
Ppl = (mean - LSL) / (3 * std_dev)  # Lower
Ppk = min(Ppu, Ppl)

print(f"\nCapability Indices (Pp, Ppk):")
print(f"  Pp (Potential): {Pp:.4f}")
print(f"  Ppu (Upper): {Ppu:.4f}")
print(f"  Ppl (Lower): {Ppl:.4f}")
print(f"  Ppk (Actual): {Ppk:.4f}")

# Assessment
print(f"\nAssessment:")
if Ppk >= 1.67:
    assessment = "✓✓ EXCELLENT (6 Sigma)"
elif Ppk >= 1.33:
    assessment = "✓ ACCEPTABLE (4 Sigma)"
elif Ppk >= 1.0:
    assessment = "⚠ MARGINAL (3 Sigma)"
else:
    assessment = "✗ NOT CAPABLE"

print(f"  {assessment}")

# Calculate defect rate
defect_rate = 2 * (1 - norm.cdf(USL, mean, std_dev))  # % above USL
defect_rate += 2 * norm.cdf(LSL, mean, std_dev)  # % below LSL
print(f"  Expected defect rate: {defect_rate:.4f}%")

# Plot capability visualization
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Plot 1: Histogram with normal curve
ax1 = axes[0]
ax1.hist(data, bins=30, edgecolor='black', alpha=0.7, density=True, label='Data')

# Overlay normal distribution
x = np.linspace(data.min(), data.max(), 100)
ax1.plot(x, norm.pdf(x, mean, std_dev), 'r-', linewidth=2, label='Normal Distribution')

# Add specification limits
ax1.axvline(LSL, color='red', linestyle='--', linewidth=2, label=f'LSL ({LSL})')
ax1.axvline(USL, color='green', linestyle='--', linewidth=2, label=f'USL ({USL})')
ax1.axvline(Target, color='orange', linestyle=':', linewidth=2, label=f'Target ({Target})')
ax1.axvline(mean, color='blue', linestyle='-', linewidth=2, label=f'Mean ({mean:.2f})')

ax1.set_xlabel('Measurement Value')
ax1.set_ylabel('Density')
ax1.set_title('Process Capability: Histogram + Normal Distribution')
ax1.legend(loc='upper right')
ax1.grid(True, alpha=0.3)

# Plot 2: Capability summary (visual)
ax2 = axes[1]

# Create a visual representation
indices = ['Pp', 'Ppk', 'Target']
values = [Pp, Ppk, 1.33]
colors = ['blue', 'green' if Ppk >= 1.33 else 'red', 'orange']

bars = ax2.barh(indices, values, color=colors, alpha=0.7)
ax2.axvline(1.33, color='red', linestyle='--', linewidth=2, label='Acceptable (1.33)')
ax2.axvline(1.67, color='green', linestyle='--', linewidth=2, label='Excellent (1.67)')
ax2.set_xlabel('Capability Index')
ax2.set_title('Capability Index Comparison')
ax2.legend()
ax2.grid(True, alpha=0.3, axis='x')

# Add value labels on bars
for bar, value in zip(bars, values):
    ax2.text(value, bar.get_y() + bar.get_height()/2, f' {value:.2f}',
            va='center', fontweight='bold')

plt.tight_layout()
plt.show()
```

**Task 2: Simulation - Impact of Centering**

```python
# Show impact of centering on Cpk
print("\n" + "=" * 60)
print("IMPACT OF CENTERING ON CAPABILITY")
print("=" * 60)

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

scenarios = [
    {'name': 'Well Centered', 'mean': 100, 'std': 8},
    {'name': 'Shifted High', 'mean': 110, 'std': 8},
    {'name': 'Shifted Low', 'mean': 90, 'std': 8},
    {'name': 'High Variation', 'mean': 100, 'std': 12}
]

for idx, (ax, scenario) in enumerate(zip(axes.flat, scenarios)):
    mu = scenario['mean']
    sigma = scenario['std']
    
    # Calculate Ppk
    Ppu = (USL - mu) / (3 * sigma)
    Ppl = (mu - LSL) / (3 * sigma)
    Ppk = min(Ppu, Ppl)
    
    # Plot
    x = np.linspace(60, 140, 200)
    ax.plot(x, norm.pdf(x, mu, sigma) * 0.5, 'b-', linewidth=2)
    ax.fill_between(x, norm.pdf(x, mu, sigma) * 0.5, alpha=0.3)
    
    # Spec limits
    ax.axvline(LSL, color='red', linestyle='--', linewidth=2)
    ax.axvline(USL, color='green', linestyle='--', linewidth=2)
    ax.axvline(mu, color='blue', linestyle='-', linewidth=2)
    
    ax.set_title(f"{scenario['name']}\nPpk = {Ppk:.2f}")
    ax.set_xlabel('Measurement')
    ax.set_ylabel('Frequency')
    ax.grid(True, alpha=0.3)
    ax.set_xlim(60, 140)

plt.suptitle('Impact of Mean Shift & Variation on Ppk', fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()
```

**Task 3: Improvement Plan**

```python
# Create improvement targets
print("\n" + "=" * 60)
print("IMPROVEMENT PLAN TO ACHIEVE Ppk ≥ 1.33")
print("=" * 60)

current_ppk = Ppk
target_ppk = 1.33

print(f"\nCurrent State: Ppk = {current_ppk:.2f}")
print(f"Target State: Ppk = {target_ppk:.2f}")

if current_ppk < target_ppk:
    print("\n⚠️ Process NOT CAPABLE")
    
    # Option 1: Reduce variation
    target_std = (USL - LSL) / (6 * target_ppk)
    reduction = ((std_dev - target_std) / std_dev) * 100
    
    print(f"\nOption 1: Reduce Variation (Keep mean at {mean:.2f})")
    print(f"  Current Std Dev: {std_dev:.2f}")
    print(f"  Target Std Dev: {target_std:.2f}")
    print(f"  Required reduction: {reduction:.1f}%")
    print(f"  How: Better equipment, training, material control")
    
    # Option 2: Shift mean to center
    target_mean = (LSL + USL) / 2
    print(f"\nOption 2: Recenter Process (Keep Std Dev at {std_dev:.2f})")
    print(f"  Current Mean: {mean:.2f}")
    print(f"  Target Mean: {target_mean:.2f}")
    print(f"  Required shift: {abs(mean - target_mean):.2f}")
    print(f"  How: Adjust machine setpoint, calibration")
    
    # Option 3: Combined
    combined_std = 6.5
    combined_mean = 100
    combined_ppk = min(
        (USL - combined_mean) / (3 * combined_std),
        (combined_mean - LSL) / (3 * combined_std)
    )
    print(f"\nOption 3: Combined Approach")
    print(f"  Reduce Std Dev to: {combined_std:.2f} ({((std_dev - combined_std)/std_dev)*100:.1f}% reduction)")
    print(f"  Shift mean to: {combined_mean:.2f}")
    print(f"  Resulting Ppk: {combined_ppk:.2f} ✓")

else:
    print(f"\n✓ Process IS CAPABLE (Ppk = {current_ppk:.2f} ≥ {target_ppk:.2f})")
```

**File References:**
```
📘 FILE 1 [170] - SECTION 4: Capability Metrics
📘 FILE 2 [171] - Six Sigma Formulas & Thresholds
📘 FILE 3 [172] - Example: Capability Calculation
📘 FILE 5 [174] - FAQ: Interpreting Cpk & Ppk
```

---

### PART 6D: Summary Checklist
- [ ] Tính được Cp, Cpk, Pp, Ppk
- [ ] Biết sự khác biệt giữa Cp vs Cpk, Pp vs Ppk
- [ ] Vẽ được histogram với spec limits
- [ ] Diễn giải được kết quả Ppk
- [ ] Lập được improvement plan từ Ppk

**⭐ Kiến Thức Quan Trọng:**
```
Cpk = 1.33 là "passing grade" cho hầu hết ngành
Nếu Cpk < 1.33 → Không nên bắt đầu ANALYZE phase
Phải improve hệ thống measure/quy trình trước
```

---

---

# GIAI ĐOẠN 3: ANALYZE (PHÂN TÍCH & TÌM NGUYÊN NHÂN)
## Ngày 7-8: Kiểm Định Thống Kê & Root Cause

---

## NGÀY 7: Hypothesis Testing - Phần 1
### Day 7: t-test, ANOVA - "Có Sự Khác Biệt Thật Không?"

**Duration:** 5-6 hours
**Objective:** Hiểu p-value, chạy t-test & ANOVA, giải thích kết quả

---

### PART 7A: Lý Thuyết (2 hours)

#### 1. Hypothesis Testing Basics

**Tình Huống:**
```
Claim: "Ca chiều lỗi nhiều hơn ca sáng"

Data:
  Morning: 5, 6, 4, 8, 9        (mean = 6.4)
  Evening: 15, 16, 14, 17, 15   (mean = 15.4)

Câu hỏi: Sự khác biệt 6.4 vs 15.4 là thật hay chỉ do may rủi?
```

**Hypothesis Formulation:**

```
H0 (Null): Không có sự khác biệt (mean_morning = mean_evening)
H1 (Alternative): Có sự khác biệt (mean_morning ≠ mean_evening)

Tư duy:
- Giả sử H0 đúng (không có khác biệt)
- Nếu data mà chúng ta thấy quá bất thường → Bác bỏ H0
- Ngưỡng "bất thường" = p-value < 0.05 (5% risk)
```

#### 2. P-Value Explained (Không Phải Xác Suất)

```
❌ WRONG: "P-value = 0.03 = 3% khả năng H0 đúng"
✅ RIGHT: "P-value = 0.03 = Nếu H0 đúng, xác suất thấy 
           dữ liệu bất thường như vậy chỉ 3%"

Analogy: Bạn tung đồng xu 10 lần, được 9 mặt ngửa
  H0: Đồng xu công bằng (p = 0.5)
  P-value = 0.002 = Nếu công bằng, xác suất 9+ ngửa chỉ 0.2%
  Kết luận: Đồng xu không công bằng → Bác bỏ H0
```

**Decision Rule:**
```
p-value < 0.05  → Bác bỏ H0 (Có sự khác biệt ý nghĩa) ✓
p-value ≥ 0.05  → Không bác bỏ H0 (Không đủ bằng chứng) ✗
```

#### 3. Choosing the Right Test

**Decision Tree:**
```
Data Normal?
├─ YES → Parametric Test (t-test, ANOVA)
│        (Giả sử data tuân theo normal distribution)
│
└─ NO  → Non-parametric Test (Mann-Whitney U, Kruskal-Wallis)
         (Không giả sử gì về distribution)

Compare how many groups?
├─ 2 groups
│  ├─ Normal   → Independent t-test (hoặc Paired t-test)
│  └─ Not normal → Mann-Whitney U test
│
└─ 3+ groups
   ├─ Normal   → ANOVA (Analysis of Variance)
   └─ Not normal → Kruskal-Wallis test
```

#### 4. T-Test Types

**A. Independent (Two-Sample) t-test**
```
Purpose: So sánh mean của 2 độc lập nhóm
Ví dụ: Morning shift vs Evening shift
H0: μ_morning = μ_evening
```

**B. Paired t-test**
```
Purpose: So sánh cặp data (trước-sau)
Ví dụ: Developer's speed trước vs sau training
H0: μ_before = μ_after
```

**C. One-Sample t-test**
```
Purpose: So sánh với một giá trị (target)
Ví dụ: API response time vs SLA target (100ms)
H0: μ = 100
```

#### 5. ANOVA (Analysis of Variance)

**Purpose:** So sánh mean của 3+ nhóm

```
ANOVA: F-test
H0: μ1 = μ2 = μ3 = ... (all equal)
H1: At least one μ different

Output: F-statistic & p-value

Nếu p < 0.05: Có ít nhất một nhóm khác → Cần post-hoc test
(Ví dụ: pairwise t-test để tìm cặp nào khác)
```

**Reference:**
```
📘 ASQ BBBOK - ANALYZE Phase: Hypothesis Testing
📘 ISCCA Materials - Statistical Tests
📘 FILE 1 [170] - SECTION 5: Hypothesis Testing
📘 FILE 2 [171] - Statistical Tests Decision Tree
```

---

### PART 7B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Bạn là Data Analyst cho một e-commerce company.

Tình huống: "Trang checkout mới có conversion rate cao hơn trang cũ"

Data (2 tuần):
  Old page: 150 visitors → 12 purchases (8% conversion)
  New page: 148 visitors → 18 purchases (12.2% conversion)

Hỏi:
1. P-value là gì? Không phải xác suất phải không?
2. Nên dùng kiểm định nào? (t-test hay Chi-square)
3. Nếu p-value = 0.08, bạn kết luận gì?
4. Nếu p-value = 0.02, bạn kết luận gì?

Bạn giải thích:
- H0 & H1
- Decision rule
- Practical implication
```

**Expected Outcome:**
- Hiểu p-value không phải xác suất mà là "bất thường measure"
- Biết chọn kiểm định phù hợp
- Diễn giải kết quả đúng

---

### PART 7C: Python Hands-on (1.5 hours)

**Task 1: Check Normality First**

```python
from scipy import stats
import numpy as np
import pandas as pd

# Data
morning_shift = np.array([5, 6, 4, 8, 9])
evening_shift = np.array([15, 16, 14, 17, 15])

print("=" * 60)
print("STEP 1: CHECK NORMALITY (Shapiro-Wilk Test)")
print("=" * 60)

# Shapiro-Wilk test
stat_morning, p_norm_morning = stats.shapiro(morning_shift)
stat_evening, p_norm_evening = stats.shapiro(evening_shift)

print(f"\nMorning Shift:")
print(f"  Test Statistic: {stat_morning:.4f}")
print(f"  P-value: {p_norm_morning:.4f}")
print(f"  Normal? {'YES ✓' if p_norm_morning > 0.05 else 'NO ✗'}")

print(f"\nEvening Shift:")
print(f"  Test Statistic: {stat_evening:.4f}")
print(f"  P-value: {p_norm_evening:.4f}")
print(f"  Normal? {'YES ✓' if p_norm_evening > 0.05 else 'NO ✗'}")

# Decision
both_normal = (p_norm_morning > 0.05) and (p_norm_evening > 0.05)
print(f"\n→ Use parametric test (t-test)? {both_normal}")
if not both_normal:
    print(f"→ Use non-parametric test (Mann-Whitney U)? {not both_normal}")
```

**Task 2: Independent T-Test**

```python
print("\n" + "=" * 60)
print("STEP 2: INDEPENDENT T-TEST (or Mann-Whitney U)")
print("=" * 60)

if both_normal:
    # Use t-test
    t_stat, p_value = stats.ttest_ind(morning_shift, evening_shift)
    test_name = "Independent t-test"
else:
    # Use Mann-Whitney U
    t_stat, p_value = stats.mannwhitneyu(morning_shift, evening_shift)
    test_name = "Mann-Whitney U test"

print(f"\nTest: {test_name}")
print(f"Morning mean: {morning_shift.mean():.2f}")
print(f"Evening mean: {evening_shift.mean():.2f}")
print(f"Difference: {evening_shift.mean() - morning_shift.mean():.2f}")

print(f"\nTest Results:")
print(f"  Test Statistic: {t_stat:.4f}")
print(f"  P-value: {p_value:.6f}")

# Decision
alpha = 0.05
print(f"\n  H0 (Null Hypothesis): mean_morning = mean_evening")
print(f"  H1 (Alternative): mean_morning ≠ mean_evening")
print(f"  Significance level (α): {alpha}")

if p_value < alpha:
    print(f"\n  ✓ P-value ({p_value:.6f}) < α ({alpha})")
    print(f"  → REJECT H0")
    print(f"  → CONCLUSION: There IS a significant difference")
    print(f"  → Evening shift has significantly MORE defects")
else:
    print(f"\n  ✗ P-value ({p_value:.6f}) ≥ α ({alpha})")
    print(f"  → FAIL TO REJECT H0")
    print(f"  → CONCLUSION: No significant difference found")
    print(f"  → Difference might be due to chance")
```

**Task 3: ANOVA (3+ Groups)**

```python
print("\n" + "=" * 60)
print("STEP 3: ANOVA (3+ Groups)")
print("=" * 60)

# Add night shift
night_shift = np.array([12, 13, 11, 14, 12])

# ANOVA
f_stat, p_anova = stats.f_oneway(morning_shift, evening_shift, night_shift)

print(f"\nComparing 3 Shifts:")
print(f"  Morning mean: {morning_shift.mean():.2f}")
print(f"  Evening mean: {evening_shift.mean():.2f}")
print(f"  Night mean: {night_shift.mean():.2f}")

print(f"\nANOVA Results:")
print(f"  F-Statistic: {f_stat:.4f}")
print(f"  P-value: {p_anova:.6f}")

if p_anova < 0.05:
    print(f"\n  ✓ REJECT H0 (p = {p_anova:.6f} < 0.05)")
    print(f"  → At least ONE shift has significantly different defect rate")
    
    # Post-hoc: pairwise comparisons
    print(f"\n  POST-HOC: Pairwise t-tests")
    
    pairs = [
        ("Morning", "Evening", morning_shift, evening_shift),
        ("Morning", "Night", morning_shift, night_shift),
        ("Evening", "Night", evening_shift, night_shift)
    ]
    
    for name1, name2, data1, data2 in pairs:
        t_stat_pair, p_pair = stats.ttest_ind(data1, data2)
        sig = "✓" if p_pair < 0.05 else "✗"
        print(f"    {sig} {name1} vs {name2}: p = {p_pair:.4f}")

else:
    print(f"\n  ✗ FAIL TO REJECT H0 (p = {p_anova:.6f} ≥ 0.05)")
    print(f"  → No significant difference among shifts")
```

**Task 4: Visualization**

```python
import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Plot 1: Box plot
ax1 = axes[0]
data_for_plot = [morning_shift, evening_shift, night_shift]
ax1.boxplot(data_for_plot, labels=['Morning', 'Evening', 'Night'])
ax1.set_ylabel('Number of Defects')
ax1.set_title('Distribution of Defects by Shift')
ax1.grid(True, alpha=0.3)

# Plot 2: Comparison with error bars
ax2 = axes[1]
shifts = ['Morning', 'Evening', 'Night']
means = [morning_shift.mean(), evening_shift.mean(), night_shift.mean()]
stds = [morning_shift.std(), evening_shift.std(), night_shift.std()]

x_pos = np.arange(len(shifts))
ax2.bar(x_pos, means, yerr=stds, capsize=5, alpha=0.7)
ax2.set_xticks(x_pos)
ax2.set_xticklabels(shifts)
ax2.set_ylabel('Average Defects')
ax2.set_title('Mean ± Std Dev by Shift')
ax2.grid(True, alpha=0.3, axis='y')

# Add value labels
for i, (mean, std) in enumerate(zip(means, stds)):
    ax2.text(i, mean + std + 0.5, f'{mean:.1f}', ha='center', fontweight='bold')

plt.tight_layout()
plt.show()
```

**File References:**
```
📘 FILE 1 [170] - SECTION 5: Hypothesis Testing (Chi Tiết)
📘 FILE 2 [171] - Statistical Tests Decision Tree
📘 FILE 3 [172] - Example 3: T-Test & ANOVA
📘 FILE 5 [174] - FAQ: Understanding P-value
```

---

### PART 7D: Summary Checklist
- [ ] Hiểu p-value là gì (không phải xác suất H0 đúng)
- [ ] Kiểm tra Normality bằng Shapiro-Wilk
- [ ] Chạy được t-test & ANOVA
- [ ] Diễn giải kết quả (p-value < 0.05 = reject H0)
- [ ] Thực hiện post-hoc test (pairwise) khi cần

---

---

## NGÀY 8: Correlation, Regression & Root Cause Analysis
### Day 8: Mối Quan Hệ Giữa X & Y, Fishbone, 5 Whys

**Duration:** 5-6 hours
**Objective:** Tìm biến X ảnh hưởng, vẽ Fishbone, dùng 5 Whys

---

### PART 8A: Lý Thuyết (2 hours)

#### 1. Correlation (Tương Quan)

**Concept:**
```
X (Independent) → Y (Dependent)
Ví dụ: Temperature → Defect rate

Correlation (r):
  -1 ≤ r ≤ +1

  r = +1: Perfect positive (nếu X ↑ thì Y ↑)
  r = +0.8: Strong positive
  r = +0.5: Moderate positive
  r = 0: No correlation
  r = -0.8: Strong negative (nếu X ↑ thì Y ↓)

Ví dụ:
  Temperature ↑ → Defect rate ↑ (r = +0.7) → Strong positive
  Code review time ↑ → Bug count ↓ (r = -0.6) → Moderate negative
```

**Important:** Correlation ≠ Causation
```
❌ "Ice cream sales & drowning deaths have high correlation"
   → Không có causation!
   
✅ Root cause: Both driven by warm weather
```

#### 2. Linear Regression

```
Y = a + b*X

a = intercept (Y khi X = 0)
b = slope (Y tăng bao nhiêu khi X tăng 1 đơn vị)

Example:
Defect_rate = 5 + 0.2 * Temperature

Interpretation:
  - When Temp = 0°C → Defect rate = 5%
  - For each 1°C increase → Defect rate increases by 0.2%
  - When Temp = 20°C → Defect rate = 5 + 0.2*20 = 9%

R² (Coefficient of Determination):
  = % of variation in Y explained by X
  Example: R² = 0.64 → 64% of variation explained
           → 36% explained by other factors
```

#### 3. Root Cause Analysis - Fishbone Diagram

**Purpose:** Tìm tất cả nguyên nhân tiềm tàng

**Structure (5M + 1E - Manufacturing):**
```
                        Problem
                          ↑
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
     People          Equipment          Materials
     (人)              (物)                (材)
        │                 │                 │
     Training          Age/            Quality/
     Experience         Maintenance    Properties
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                     Methods
                    (Method)
                     Procedures
                      Training
```

**For Software:**
```
                        High Bug Rate
                          ↑
        ┌─────────────────┼─────────────────┐
        │                 │                 │
      People            Tools             Code
      (Developer)    (IDE, Framework)   (Quality)
        │                 │                 │
     Skill           Configuration      Design
     Experience      Performance        Architecture
     Motivation      Compatibility      Standards
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                      Process
                    (Development)
                   Code Review
                   Testing
```

#### 4. 5 Whys Technique

```
Problem: "API Response Time > 500ms"

Why 1? "Database query is slow"
Why 2? "No index on frequently queried column"
Why 3? "Developer didn't follow design guidelines"
Why 4? "New dev didn't receive performance training"
Why 5? "No formal onboarding process"

Root Cause: Lack of onboarding process
Action: Create developer onboarding checklist including performance best practices
```

**Reference:**
```
📘 ASQ BBBOK - ANALYZE Phase: Root Cause Analysis
📘 ISCCA Materials - Correlation, Regression, Root Cause
📘 FILE 1 [170] - SECTION 5: Analyze & Root Cause
```

---

### PART 8B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Vấn đề: "Tỷ lệ lỗi bug cao nhất vào thứ Năm & thứ Sáu"

Dữ liệu: Bug rate by day của week
  Mon: 2%, Tue: 2.5%, Wed: 3%, Thu: 5%, Fri: 6%, Sat: 1%, Sun: 1%

Hỏi:
1. Vẽ Fishbone diagram (5 Why) để tìm nguyên nhân
2. Các biến X tiềm tàng nào?
   - Fatigue effect (developers mệt vào cuối tuần)?
   - Deployment schedule (deploy vào cuối tuần)?
   - Code review capacity (reviewer bận)?
   - Etc.

3. Làm sao kiểm chứng nguyên nhân nào là thật?

Bạn hãy giúp tôi lập root cause analysis từ A-Z.
```

**Expected Outcome:**
- Vẽ được Fishbone diagram
- Áp dụng 5 Whys
- Xác định X variables để test

---

### PART 8C: Python Hands-on (1.5 hours)

**Task 1: Correlation Analysis**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import pearsonr

# Generate synthetic data: Temperature vs Defect Rate
np.random.seed(42)
temperature = np.array([20, 22, 25, 28, 30, 32, 35, 28, 25, 22])
defect_rate = np.array([1.2, 1.5, 2.1, 3.5, 4.2, 5.1, 6.0, 3.8, 2.2, 1.6])

data = pd.DataFrame({
    'Temperature': temperature,
    'Defect_Rate': defect_rate
})

print("=" * 60)
print("CORRELATION ANALYSIS")
print("=" * 60)

# Calculate correlation
correlation, p_value = pearsonr(temperature, defect_rate)

print(f"\nData:")
print(data.to_string(index=False))

print(f"\nCorrelation Results:")
print(f"  Correlation coefficient (r): {correlation:.4f}")
print(f"  P-value: {p_value:.6f}")

# Interpretation
if abs(correlation) > 0.8:
    strength = "STRONG"
elif abs(correlation) > 0.5:
    strength = "MODERATE"
else:
    strength = "WEAK"

direction = "POSITIVE" if correlation > 0 else "NEGATIVE"

print(f"  Strength: {strength} {direction} correlation")

if p_value < 0.05:
    print(f"  Statistical significance: YES (p = {p_value:.4f} < 0.05)")
else:
    print(f"  Statistical significance: NO (p = {p_value:.4f} ≥ 0.05)")

print(f"\nInterpretation:")
print(f"  As temperature increases by 1°C,")
print(f"  defect rate increases by approximately {correlation/10:.3f}% (rough estimate)")
```

**Task 2: Linear Regression**

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

print("\n" + "=" * 60)
print("LINEAR REGRESSION ANALYSIS")
print("=" * 60)

# Prepare data
X = temperature.reshape(-1, 1)  # Independent variable
y = defect_rate  # Dependent variable

# Fit linear regression
model = LinearRegression()
model.fit(X, y)

# Get parameters
slope = model.coef_[0]
intercept = model.intercept_

# Calculate R²
y_pred = model.predict(X)
r2 = r2_score(y, y_pred)

print(f"\nLinear Regression Equation:")
print(f"  Y = {intercept:.4f} + {slope:.4f} * X")
print(f"  Defect_Rate = {intercept:.4f} + {slope:.4f} * Temperature")

print(f"\nModel Quality:")
print(f"  R² (Coefficient of Determination): {r2:.4f}")
print(f"  Interpretation: {r2*100:.1f}% of variation in defect rate")
print(f"                 is explained by temperature")
print(f"                 {(1-r2)*100:.1f}% by other factors")

print(f"\nPredictions:")
test_temps = [20, 25, 30, 35]
for temp in test_temps:
    pred_rate = intercept + slope * temp
    print(f"  At {temp}°C → Predicted defect rate: {pred_rate:.2f}%")

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Plot 1: Scatter + Regression line
ax1 = axes[0]
ax1.scatter(temperature, defect_rate, s=100, alpha=0.6, label='Actual data')
ax1.plot(temperature, y_pred, 'r-', linewidth=2, label='Regression line')
ax1.set_xlabel('Temperature (°C)')
ax1.set_ylabel('Defect Rate (%)')
ax1.set_title(f'Linear Regression (R² = {r2:.3f})')
ax1.legend()
ax1.grid(True, alpha=0.3)

# Plot 2: Residuals
ax2 = axes[1]
residuals = y - y_pred
ax2.scatter(y_pred, residuals, s=100, alpha=0.6)
ax2.axhline(0, color='r', linestyle='--', linewidth=2)
ax2.set_xlabel('Fitted Values')
ax2.set_ylabel('Residuals')
ax2.set_title('Residual Plot (Check for patterns)')
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
```

**Task 3: Fishbone Diagram (Text Representation)**

```python
# Create Fishbone Diagram (Text Format)
fishbone_diagram = """
╔════════════════════════════════════════════════════════════════╗
║           FISHBONE DIAGRAM: High Bug Rate Analysis              ║
╚════════════════════════════════════════════════════════════════╝

                              High Bug Rate
                              (Problem)
                                   ↑
                                   │
            ┌──────────┬───────────┼───────────┬──────────┐
            │          │           │           │          │
         People      Process      Tools     Code      Environment
          (人)        (過程)       (物)       (材)      (環境)
            │          │           │           │          │
       1. Skill       1. Code      1. IDE     1. Design   1. Network
          Level         Review       Issues     Issues      Latency
       2. Experience   2. Testing  2. Framework 2. Legacy   2. Server
       3. Knowledge     Procedures  Config     3. No Code  Load
       4. Motivation   3. CI/CD     3. Version  Standards
                         Issues     Control
            │          │           │           │          │
            └──────────┴───────────┼───────────┴──────────┘
                                   │
                                   ↑
                              (Major categories)

════════════════════════════════════════════════════════════════

PRIMARY CAUSES (Likely):
  ✓ Inadequate code review (Process)
  ✓ Developers lack testing experience (People)
  ✓ No code standards enforcement (Code)
  ✓ Poor IDE/tool setup (Tools)

SECONDARY FACTORS:
  • High server load (Environment)
  • Outdated framework (Tools)
  • Fatigue effect (People - end of week)

════════════════════════════════════════════════════════════════
"""

print(fishbone_diagram)

# Create 5 Whys analysis
five_whys = """
╔════════════════════════════════════════════════════════════════╗
║              5 WHYS ANALYSIS: High Bug Rate                    ║
╚════════════════════════════════════════════════════════════════╝

Problem: Bug rate is 5% (target: < 1%)

Why 1: Bugs are not caught before merge?
  → Insufficient code review

Why 2: Why code review is insufficient?
  → Reviewers too busy, limited bandwidth

Why 3: Why limited review bandwidth?
  → New team members review slowly
  → Senior devs overwhelmed with other tasks

Why 4: Why new team members review slowly?
  → Lack of training on code standards
  → No peer review checklist

Why 5: Why no training & checklist?
  → No formal onboarding process
  → Team growth too fast

═══════════════════════════════════════════════════════════════════

ROOT CAUSE: Lack of structured onboarding & review process

CORRECTIVE ACTIONS:
  ✓ Create developer onboarding checklist
  ✓ Establish code review standards & checklist
  ✓ Pair junior devs with mentors
  ✓ Use automated linting tools

EXPECTED OUTCOME:
  → Bug rate from 5% → < 1% within 4 weeks

════════════════════════════════════════════════════════════════
"""

print(five_whys)
```

**Task 4: Saving Root Cause Analysis**

```python
# Save analysis to file
analysis_report = f"""
ROOT CAUSE ANALYSIS REPORT
Generated: {pd.Timestamp.now()}

PROBLEM STATEMENT:
  Defect rate increases with temperature
  Correlation: {correlation:.4f} (Strong positive)
  
EVIDENCE:
  • Correlation coefficient: {correlation:.4f}
  • P-value: {p_value:.6f} (Significant)
  • R²: {r2:.4f} ({r2*100:.1f}% of variation explained)

REGRESSION MODEL:
  Defect_Rate = {intercept:.4f} + {slope:.4f} × Temperature
  
ROOT CAUSES (from Fishbone & 5 Whys):
  1. High temperature → Equipment performance degrades
  2. Thermal stress → Increased error rates
  3. Inadequate cooling → Control limits exceeded
  4. Maintenance schedule not aligned with climate
  5. No preventive action triggered

RECOMMENDATIONS:
  1. Improve cooling system (Equipment)
  2. Adjust process parameters for high temp (Process)
  3. Increase monitoring frequency (People)
  4. Implement temperature controls (Environment)
  
NEXT STEPS:
  → Implement improvement actions
  → Monitor defect rate weekly
  → Re-analyze correlation after improvements
"""

with open('root_cause_analysis.txt', 'w') as f:
    f.write(analysis_report)

print("Root Cause Analysis Report saved!")
```

**File References:**
```
📘 FILE 1 [170] - SECTION 5: Analyze, Correlation, Regression
📘 FILE 2 [171] - Quick Reference: Root Cause Tools
📘 FILE 3 [172] - Example 6: Correlation & Regression
📘 FILE 5 [174] - FAQ: Correlation vs Causation
```

---

### PART 8D: Summary Checklist
- [ ] Tính được correlation coefficient
- [ ] Hiểu correlation ≠ causation
- [ ] Chạy được linear regression
- [ ] Vẽ được Fishbone diagram
- [ ] Áp dụng 5 Whys
- [ ] Xác định root cause & corrective actions

---

---

# GIAI ĐOẠN 4: IMPROVE & CONTROL (CẢI TIẾN & KIỂM SOÁT)
## Ngày 9-10: DOE, Lựa Chọn Giải Pháp, Control Charts

---

## NGÀY 9: Design of Experiments (DOE) & Solution Selection
### Day 9: DOE - Tìm Cấu Hình Tối Ưu

**Duration:** 5-6 hours
**Objective:** Hiểu DOE, chạy interaction analysis, Pugh Matrix

---

### PART 9A: Lý Thuyết (2 hours)

#### 1. DOE Basics

**Purpose:** Tìm cấu hình X tối ưu để maximize/minimize Y

```
Traditional approach (Trial & Error):
  Test Config 1 → Result 1
  Test Config 2 → Result 2
  Test Config 3 → Result 3
  ... (takes forever)

DOE approach (Factorial Design):
  Test multiple factors simultaneously
  Find interactions
  Identify optimal settings

Example: API Optimization
  Factor A: Connection pooling (Yes/No)
  Factor B: Caching (Yes/No)
  Factor C: Compression (Yes/No)
  
  2³ = 8 experiments needed (full factorial)
  Compare to 3×3×3 = 27 trials (traditional)
```

#### 2. Main Effect vs Interaction Effect

```
Main Effect:
  "Caching reduces response time by 50ms"
  
Interaction Effect:
  "Caching reduces response time by 50ms ONLY when compression is OFF"
  "With compression ON, caching has no effect"
  
→ This is an INTERACTION!

Why it matters:
  Can't just pick "best" factor independently
  Must consider factor combinations
```

#### 3. Pugh Matrix - Solution Selection

```
Compare multiple solution options against criteria

Criteria weights (importance):
  Cost: 30%
  Performance: 40%
  Ease of Implementation: 20%
  Maintainability: 10%

Rate solutions:
  -2: Much worse than baseline
  -1: Worse
   0: Same
  +1: Better
  +2: Much better
  
Calculate weighted scores → Pick highest
```

**Reference:**
```
📘 ASQ BBBOK - IMPROVE Phase: DOE
📘 ISCCA Materials - Design of Experiments
📘 FILE 1 [170] - SECTION 6: Improve & DOE
```

---

### PART 9B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Tôi muốn optimize database query performance.

Potential improvements:
  A) Add database index
  B) Implement query caching
  C) Optimize table structure
  D) Upgrade hardware

Hỏi:
1. Nếu chỉ test một factor tại lần (A→B→C→D), mất bao lâu?
2. DOE approach sẽ như thế nào?
3. Có possible interactions không?
   - Index + Caching (synergy?)
   - Structure + Hardware (independent?)
4. Dùng Pugh Matrix so sánh 4 options, cân nhắc:
   - Cost
   - Performance improvement
   - Implementation time
   - Risk of issues
   
Hãy giúp tôi design experiment & select best solution.
```

**Expected Outcome:**
- Hiểu DOE advantages vs trial-and-error
- Nhận biết interaction effects
- Dùng Pugh Matrix để quyết định

---

### PART 9C: Python Hands-on (1.5 hours)

**Task 1: Factorial Design & Interaction Plot**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from itertools import product

print("=" * 60)
print("2³ FACTORIAL DESIGN: API Optimization")
print("=" * 60)

# Factors
# A: Connection Pooling (0 = No, 1 = Yes)
# B: Caching (0 = No, 1 = Yes)
# C: Compression (0 = No, 1 = Yes)

# Response: Response Time (ms) - lower is better

# Simulated experimental results
results = {
    (0, 0, 0): 450,  # No optimization
    (1, 0, 0): 380,  # Pooling only → 70ms improvement
    (0, 1, 0): 280,  # Caching only → 170ms improvement
    (1, 1, 0): 150,  # Pooling + Caching → 300ms improvement (synergy!)
    (0, 0, 1): 420,  # Compression only → 30ms improvement
    (1, 0, 1): 340,  # Pooling + Compression → 110ms improvement
    (0, 1, 1): 200,  # Caching + Compression → 250ms improvement
    (1, 1, 1): 80,   # All three → 370ms improvement (BEST!)
}

# Create DOE table
experiments = []
for (A, B, C), response in results.items():
    experiments.append({
        'Pooling': 'Yes' if A else 'No',
        'Caching': 'Yes' if B else 'No',
        'Compression': 'Yes' if C else 'No',
        'Response_Time_ms': response
    })

df_doe = pd.DataFrame(experiments)

print(f"\nFull Factorial Design (2³ = 8 experiments):")
print(df_doe.to_string(index=False))

# Calculate main effects
print("\n" + "=" * 60)
print("MAIN EFFECTS ANALYSIS")
print("=" * 60)

for factor in ['Pooling', 'Caching', 'Compression']:
    level_0 = df_doe[df_doe[factor] == 'No']['Response_Time_ms'].mean()
    level_1 = df_doe[df_doe[factor] == 'Yes']['Response_Time_ms'].mean()
    effect = level_0 - level_1
    
    print(f"\n{factor}:")
    print(f"  Without: {level_0:.1f} ms (avg)")
    print(f"  With: {level_1:.1f} ms (avg)")
    print(f"  Main Effect: {effect:.1f} ms improvement")

# Interaction effects
print("\n" + "=" * 60)
print("INTERACTION EFFECTS ANALYSIS")
print("=" * 60)

# Pooling × Caching
print("\nPooling × Caching Interaction:")
print("  Without Pooling:")
print(f"    No Caching: {results[(0,0,0)]:.0f} ms")
print(f"    With Caching: {results[(0,1,0)]:.0f} ms")
print(f"    Caching effect: {results[(0,0,0)] - results[(0,1,0)]:.0f} ms")

print("  With Pooling:")
print(f"    No Caching: {results[(1,0,0)]:.0f} ms")
print(f"    With Caching: {results[(1,1,0)]:.0f} ms")
print(f"    Caching effect: {results[(1,0,0)] - results[(1,1,0)]:.0f} ms")

print("\n  → INTERACTION DETECTED!")
print("  → Caching effect is LARGER when Pooling is used")
print("  → This is SYNERGY (positive interaction)")
```

**Task 2: Interaction Plot**

```python
# Create interaction plot
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# Plot 1: Pooling × Caching (for each Compression level)
for compression in [0, 1]:
    comp_name = "Compression ON" if compression else "Compression OFF"
    no_pooling = []
    yes_pooling = []
    
    for caching in [0, 1]:
        no_pooling.append(results[(0, caching, compression)])
        yes_pooling.append(results[(1, caching, compression)])
    
    ax = axes[0]
    ax.plot(['No Caching', 'With Caching'], no_pooling, marker='o', 
            label=f'{comp_name} (No Pooling)', linewidth=2)
    ax.plot(['No Caching', 'With Caching'], yes_pooling, marker='s', 
            label=f'{comp_name} (With Pooling)', linewidth=2)

axes[0].set_ylabel('Response Time (ms)')
axes[0].set_title('Interaction: Pooling × Caching')
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# Plot 2: Main effects
ax = axes[1]
factors = ['Pooling', 'Caching', 'Compression']
effects = []

for factor in factors:
    level_0 = df_doe[df_doe[factor] == 'No']['Response_Time_ms'].mean()
    level_1 = df_doe[df_doe[factor] == 'Yes']['Response_Time_ms'].mean()
    effects.append(level_0 - level_1)

bars = ax.bar(factors, effects, color=['blue', 'green', 'orange'], alpha=0.7)
ax.set_ylabel('Effect on Response Time Reduction (ms)')
ax.set_title('Main Effects Plot')
ax.grid(True, alpha=0.3, axis='y')

# Add value labels
for bar, effect in zip(bars, effects):
    height = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2., height,
            f'{height:.0f}ms', ha='center', va='bottom', fontweight='bold')

# Plot 3: Pareto of results
ax = axes[2]
sorted_results = sorted(results.items(), key=lambda x: x[1])
configs = [f"{''.join(str(x) for x in k)}" for k, v in sorted_results]
times = [v for k, v in sorted_results]

colors_bar = ['red' if t > 200 else 'yellow' if t > 100 else 'green' for t in times]
ax.barh(range(len(configs)), times, color=colors_bar, alpha=0.7)
ax.set_yticks(range(len(configs)))
ax.set_yticklabels(configs)
ax.set_xlabel('Response Time (ms)')
ax.set_title('Pareto: Ranked Solutions (Green = Best)')
ax.grid(True, alpha=0.3, axis='x')

# Add value labels
for i, t in enumerate(times):
    ax.text(t + 5, i, f'{t}ms', va='center', fontweight='bold')

plt.tight_layout()
plt.show()

# Summary
print("\n" + "=" * 60)
print("OPTIMAL CONFIGURATION")
print("=" * 60)
best_config = min(results.items(), key=lambda x: x[1])
print(f"Best: Pooling={best_config[0][0]}, Caching={best_config[0][1]}, Compression={best_config[0][2]}")
print(f"Response Time: {best_config[1]} ms")
print(f"Improvement vs baseline: {results[(0,0,0)] - best_config[1]} ms ({((results[(0,0,0)] - best_config[1])/results[(0,0,0)]*100):.1f}%)")
```

**Task 3: Pugh Matrix for Solution Selection**

```python
print("\n" + "=" * 60)
print("PUGH MATRIX: Solution Selection")
print("=" * 60)

# Define criteria & weights
criteria_weights = {
    'Cost': 0.25,
    'Performance': 0.40,
    'Implementation Time': 0.20,
    'Risk/Complexity': 0.15
}

# Define solutions
solutions = {
    'Solution 1: Pooling Only': {
        'Cost': 1,           # +1: Low cost
        'Performance': 1,    # +1: Good improvement
        'Implementation Time': 2,  # +2: Very quick (few hours)
        'Risk/Complexity': 2  # +2: Very low risk
    },
    'Solution 2: Caching': {
        'Cost': 0,           # 0: Medium cost
        'Performance': 2,    # +2: Excellent improvement
        'Implementation Time': 0,  # 0: Medium time
        'Risk/Complexity': 1  # +1: Low risk
    },
    'Solution 3: All Three': {
        'Cost': -1,          # -1: High cost
        'Performance': 2,    # +2: Best improvement
        'Implementation Time': -1,  # -1: Takes longer
        'Risk/Complexity': 0  # 0: Medium complexity
    },
    'Baseline': {
        'Cost': 0,
        'Performance': 0,
        'Implementation Time': 0,
        'Risk/Complexity': 0
    }
}

# Calculate weighted scores
print(f"\nCriteria Weights:")
for criterion, weight in criteria_weights.items():
    print(f"  {criterion}: {weight*100:.0f}%")

print(f"\n{'Solution':<30} | ", end='')
for criterion in criteria_weights.keys():
    print(f"{criterion:<20} | ", end='')
print("TOTAL SCORE")
print("─" * 130)

solution_scores = {}
for solution_name, scores in solutions.items():
    print(f"{solution_name:<30} | ", end='')
    
    total_score = 0
    for criterion in criteria_weights.keys():
        score = scores[criterion]
        weighted = score * criteria_weights[criterion]
        total_score += weighted
        print(f"{score:>+2d} (w:{weighted:+.3f})  | ", end='')
    
    solution_scores[solution_name] = total_score
    print(f"{total_score:+.3f}")

# Ranking
print("\n" + "=" * 60)
print("RANKING")
print("=" * 60)
ranked = sorted(solution_scores.items(), key=lambda x: x[1], reverse=True)
for rank, (solution, score) in enumerate(ranked, 1):
    symbol = "✓ RECOMMENDED" if rank == 1 else ""
    print(f"{rank}. {solution:<30} → Score: {score:+.3f} {symbol}")

print(f"\nRECOMMENDATION: {ranked[0][0]}")
print(f"Rationale: Best balance of performance improvement with quick")
print(f"          implementation and low risk/complexity.")
```

**File References:**
```
📘 FILE 1 [170] - SECTION 6: Improve & DOE
📘 FILE 2 [171] - Quick Reference: DOE Design
📘 FILE 3 [172] - Example (Nếu có)
📘 FILE 5 [174] - FAQ: Design of Experiments
```

---

### PART 9D: Summary Checklist
- [ ] Hiểu DOE is more efficient than trial-and-error
- [ ] Nhận biết main effects & interaction effects
- [ ] Vẽ được interaction plot
- [ ] Chạy được Pugh Matrix
- [ ] Chọn được optimal solution dựa trên multiple criteria

---

---

## NGÀY 10: SPC - Control Charts & Process Monitoring
### Day 10: I-MR Chart, Control Limits, Sustain

**Duration:** 5-6 hours (FINAL DAY)
**Objective:** Vẽ Control Chart, phát hiện mất kiểm soát, lập Control Plan

---

### PART 10A: Lý Thuyết (2 hours)

#### 1. Statistical Process Control (SPC)

```
Purpose: Monitor process over time to catch changes early

Common Cause Variation:
  = Random, natural variation
  = Within control limits
  = Do nothing (don't over-react)
  
Special Cause Variation:
  = Non-random, assignable cause
  = Outside control limits OR pattern detected
  = INVESTIGATE & FIX
```

#### 2. Control Limits (3-Sigma Rule)

```
UCL (Upper Control Limit) = μ + 3σ
CL (Center Line) = μ
LCL (Lower Control Limit) = μ - 3σ

Why 3σ?
  If normal distribution: 99.7% of data within ±3σ
  → Only 0.3% chance point falls outside by random chance
  → If we see point outside → Likely special cause!
```

#### 3. I-MR Chart (Individual & Moving Range)

```
Used for: Individual observations (not subgroups)

Chart 1: Individual values (I-chart)
  - Plot each measurement
  - UCL/LCL = ±3σ from mean

Chart 2: Moving Range (MR-chart)
  - Plot |x_i - x_{i-1}| (consecutive differences)
  - Detects changes in variation
  - Used to estimate σ
```

#### 4. Detection Rules (When to Investigate)

**Nelson Rules:**
```
Rule 1: One point beyond 3σ from center line
Rule 2: Nine points in a row on same side of center line
Rule 3: Six points in a row steadily increasing or decreasing
Rule 4: Fourteen points alternating up and down
Rule 5: Two out of three points beyond 2σ (same side)
Rule 6: Four out of five beyond 1σ (same side)
Rule 7: Fifteen points within 1σ (both sides combined)
Rule 8: Eight points beyond 1σ (both sides)
```

#### 5. Control Plan (Sustain)

```
Elements:
  1. What: Variable to monitor
  2. How: Measurement method
  3. Frequency: How often check
  4. Control Limits: UCL & LCL
  5. Who: Responsibility
  6. Action: If out of control
```

**Reference:**
```
📘 ASQ BBBOK - CONTROL Phase: SPC & Control Charts
📘 ISCCA Materials - Process Control & Monitoring
📘 FILE 1 [170] - SECTION 6: Control Charts
📘 FILE 2 [171] - SPC Formulas & Nelson Rules
```

---

### PART 10B: NotebookLM Q&A (1.5 hours)

**Prompt:**
```
Tôi đang monitoring API response time. 
Dữ liệu 30 ngày gần đây:
- Mean = 105ms
- Std Dev = 8ms
- Max spike = 142ms (dịp Prime Day sale)
- Min = 92ms

Hỏi:
1. Tính UCL & LCL (3-sigma)
2. Con số 142ms có phải "out of control" không?
3. Nếu có 10 ngày liên tiếp > 120ms → Điều gì xảy ra?
4. Làm Control Plan để sustain improvement
   - Monitor daily?
   - Alert threshold?
   - Who responsible?
   - Action if > UCL?
```

**Expected Outcome:**
- Tính được control limits
- Phát hiện special cause
- Lập được Control Plan

---

### PART 10C: Python Hands-on (1.5 hours) - FINAL TASK

**Task 1: Create & Analyze Control Chart**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("=" * 60)
print("SPC ANALYSIS: API Response Time Monitoring")
print("=" * 60)

# Simulate 30 days of API response time data
np.random.seed(42)
days = np.arange(1, 31)

# Generate baseline data (centered around 105ms)
baseline_data = np.random.normal(loc=105, scale=8, size=30)

# Add special cause event (Day 15-20: High load from sale event)
data = baseline_data.copy()
data[14:20] = np.random.normal(loc=130, scale=10, size=6)

df_spc = pd.DataFrame({
    'Day': days,
    'Response_Time_ms': data
})

print(f"\nData Summary:")
print(f"  Mean: {data.mean():.2f} ms")
print(f"  Std Dev: {data.std():.2f} ms")
print(f"  Min: {data.min():.2f} ms")
print(f"  Max: {data.max():.2f} ms")

# Calculate control limits (assuming normal distribution)
mean = data.mean()
std_dev = data.std()
UCL = mean + 3 * std_dev
LCL = mean - 3 * std_dev

print(f"\nControl Limits (3-Sigma):")
print(f"  Upper Control Limit (UCL): {UCL:.2f} ms")
print(f"  Center Line (CL): {mean:.2f} ms")
print(f"  Lower Control Limit (LCL): {LCL:.2f} ms")

# Identify out-of-control points
out_of_control = df_spc[(df_spc['Response_Time_ms'] > UCL) | 
                         (df_spc['Response_Time_ms'] < LCL)]

print(f"\nOut-of-Control Points (>3σ):")
if len(out_of_control) == 0:
    print("  None detected")
else:
    print(out_of_control.to_string(index=False))

# Nelson Rule 2: 9 consecutive points on same side
print(f"\nNelson Rule 2 Check (9+ points above/below center):")
above_center = (df_spc['Response_Time_ms'] > mean).values
runs = []
current_run = 1
current_side = above_center[0]

for i in range(1, len(above_center)):
    if above_center[i] == current_side:
        current_run += 1
    else:
        if current_run >= 9:
            runs.append((current_side, current_run, i - current_run))
        current_run = 1
        current_side = above_center[i]

if current_run >= 9:
    runs.append((current_side, current_run, len(above_center) - current_run))

if runs:
    print(f"  ⚠️ DETECTED!")
    for side, run_length, start_day in runs:
        side_str = "ABOVE" if side else "BELOW"
        print(f"    {run_length} points {side_str} center starting Day {start_day + 1}")
else:
    print(f"  OK: No runs of 9+ consecutive points")

# Plot control chart
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(14, 8))

# I-Chart
ax1.plot(df_spc['Day'], df_spc['Response_Time_ms'], marker='o', linewidth=2, 
         label='Response Time', color='blue')
ax1.axhline(mean, color='green', linestyle='-', linewidth=2, label=f'CL ({mean:.1f} ms)')
ax1.axhline(UCL, color='red', linestyle='--', linewidth=2, label=f'UCL ({UCL:.1f} ms)')
ax1.axhline(LCL, color='red', linestyle='--', linewidth=2, label=f'LCL ({LCL:.1f} ms)')
ax1.fill_between(df_spc['Day'], LCL, UCL, alpha=0.1, color='green', label='Control Zone')

# Mark out-of-control points
if len(out_of_control) > 0:
    ax1.scatter(out_of_control['Day'], out_of_control['Response_Time_ms'],
               color='red', s=200, marker='X', zorder=5, label='Out of Control')

# Mark special cause period
ax1.axvspan(14.5, 20.5, alpha=0.2, color='orange', label='High-Load Period (Days 15-20)')

ax1.set_ylabel('Response Time (ms)')
ax1.set_title('I-MR Control Chart: API Response Time')
ax1.legend(loc='upper left')
ax1.grid(True, alpha=0.3)
ax1.set_xlim(0.5, 30.5)

# MR-Chart (Moving Range)
mr_values = np.abs(np.diff(df_spc['Response_Time_ms']))
df_mr = pd.DataFrame({
    'Day': df_spc['Day'][1:],
    'Moving_Range': mr_values
})

mr_mean = mr_values.mean()
mr_ucl = mr_mean * 3.267  # Constant for MR chart

ax2.plot(df_mr['Day'], df_mr['Moving_Range'], marker='s', linewidth=2, 
         label='Moving Range', color='purple')
ax2.axhline(mr_mean, color='green', linestyle='-', linewidth=2, label=f'MR Avg ({mr_mean:.2f})')
ax2.axhline(mr_ucl, color='red', linestyle='--', linewidth=2, label=f'UCL ({mr_ucl:.2f})')

ax2.set_xlabel('Day')
ax2.set_ylabel('Range (ms)')
ax2.set_title('Moving Range Chart: Variation Over Time')
ax2.legend()
ax2.grid(True, alpha=0.3)
ax2.set_xlim(0.5, 30.5)

plt.tight_layout()
plt.show()
```

**Task 2: Control Plan Document**

```python
control_plan = f"""
╔══════════════════════════════════════════════════════════════╗
║              CONTROL PLAN - SPC MONITORING                   ║
╚══════════════════════════════════════════════════════════════╝

PROCESS: API Response Time Monitoring
DATE: {pd.Timestamp.now().strftime('%Y-%m-%d')}

──────────────────────────────────────────────────────────────
1. VARIABLE TO MONITOR (CTQ)
──────────────────────────────────────────────────────────────
Metric: API Response Time
Unit: milliseconds (ms)
Baseline Mean: {mean:.2f} ms
Target: < 100 ms
Specification: LSL=0, USL=500ms

──────────────────────────────────────────────────────────────
2. MEASUREMENT METHOD (HOW)
──────────────────────────────────────────────────────────────
Measurement System: Application Performance Monitoring (APM) tool
  Tool: DataDog / New Relic / Similar
  Sampling: End-to-end response time (client perspective)
  Frequency: Real-time (every request)
  
Measurement Accuracy: ±5ms (verified via Gage R&R)

──────────────────────────────────────────────────────────────
3. MONITORING FREQUENCY
──────────────────────────────────────────────────────────────
Real-Time Monitoring:
  - Dashboard updated every 1 minute
  - Alert if single measurement > UCL ({UCL:.0f} ms)
  
Daily Review:
  - Calculate daily mean & check against control limits
  - Time: 9 AM daily
  
Weekly Review:
  - Full SPC analysis
  - Time: Every Monday 10 AM
  - Document any trends or shifts

──────────────────────────────────────────────────────────────
4. CONTROL LIMITS
──────────────────────────────────────────────────────────────
For I-Chart (Individual values):
  UCL (Upper Control Limit): {UCL:.2f} ms
  CL (Center Line): {mean:.2f} ms
  LCL (Lower Control Limit): {LCL:.2f} ms

For MR-Chart (Moving Range):
  MR Average: {mr_mean:.2f} ms
  MR UCL: {mr_ucl:.2f} ms

Detection Triggers:
  ✓ One point > UCL or < LCL
  ✓ 9 consecutive points above/below CL
  ✓ 6 consecutive points increasing/decreasing
  ✓ Unusual patterns visible

──────────────────────────────────────────────────────────────
5. RESPONSIBILITY
──────────────────────────────────────────────────────────────
Daily Monitoring: DevOps Engineer (John)
Weekly Review: Engineering Lead (Sarah)
Action on Alert: On-call Engineer (Rotate)
Data Archival: Database Admin (Mike)

Contact:
  Slack: #api-performance
  Escalation: sarah@company.com

──────────────────────────────────────────────────────────────
6. ACTION PLAN (If Out of Control)
──────────────────────────────────────────────────────────────

Level 1: Single point > UCL (immediate)
  Action:
    - Check monitoring tool (false positive?)
    - Look for external cause (traffic spike, deployment?)
    - If repeats, escalate to Level 2

Level 2: Sustained elevation (3+ consecutive points near/above UCL)
  Action:
    - Review recent code deployments
    - Check infrastructure metrics (CPU, memory, DB)
    - If due to code: Rollback or hotfix
    - If due to infrastructure: Scale up
    - Document root cause

Level 3: Persistent shift (mean > {mean+15:.0f} ms for 3+ days)
  Action:
    - Call incident response meeting
    - Assign task force
    - Implement improvement project (DOE)
    - Target restoration time: 24-48 hours

──────────────────────────────────────────────────────────────
7. DOCUMENTATION & RECORDS
──────────────────────────────────────────────────────────────
Daily Logs: Excel file shared drive
  Path: /ProjectSharedDrive/API_Performance/Daily_SPC.xlsx
  Columns: Date, Mean, Std Dev, Max, Events

Incident Reports:
  Database: Jira (tag: API-SPC-XXX)
  Required: Date, Impact, Root Cause, Action Taken, Result

Control Chart Archive:
  Monthly graphs saved to:
  /ProjectSharedDrive/API_Performance/2024/SPC_Charts/

──────────────────────────────────────────────────────────────
8. SUSTAINED IMPROVEMENT ACTIONS
──────────────────────────────────────────────────────────────
To prevent regression:

✓ Weekly team standup on SPC results (5 min)
✓ Monthly review with stakeholders
✓ Training for new team members on SPC interpretation
✓ Quarterly recalibration of control limits
✓ Benchmark against competitor performance

Red Flag Indicators:
  - Control limits breached > 2x per month
  - Increasing UCL trend (variation growing)
  - Frequent special cause events
  → All trigger process improvement project

──────────────────────────────────────────────────────────────
9. APPROVAL & REVIEW
──────────────────────────────────────────────────────────────
Created by: Six Sigma Team
Approved by: Engineering Director
Review date: {(pd.Timestamp.now() + pd.DateOffset(months=3)).strftime('%Y-%m-%d')}
Next review: Quarterly (or sooner if changes)

══════════════════════════════════════════════════════════════
"""

print(control_plan)

# Save to file
with open('control_plan.txt', 'w') as f:
    f.write(control_plan)

print("Control Plan saved to 'control_plan.txt'")
```

**Task 3: Final Summary Report**

```python
summary_report = f"""
╔══════════════════════════════════════════════════════════════╗
║        10-DAY SIX SIGMA LEARNING - COMPLETION SUMMARY        ║
╚══════════════════════════════════════════════════════════════╝

Date Range: Days 1-10
Overall Status: ✓ COMPLETE

══════════════════════════════════════════════════════════════

PHASE 1: DEFINE & LEAN (Days 1-3)
─────────────────────────────────
✓ Day 1: Six Sigma Overview, DMAIC, 8 Wastes
  → Understand methodology, identify waste sources

✓ Day 2: Lean Tools, Descriptive Statistics
  → 5S, Kaizen, Poka-Yoke mastered
  → Basic statistics calculated & visualized

✓ Day 3: Project Charter, VOC → CTQ, SIPOC
  → Project clearly defined & scoped
  → Customer requirements translated to metrics

Status: READY TO MEASURE ✓

══════════════════════════════════════════════════════════════

PHASE 2: MEASURE (Days 4-6)
──────────────────
✓ Day 4: Data Collection Plan, Sampling Strategies
  → Sampling methods understood
  → Data collection plan documented

✓ Day 5: Gage R&R Analysis (CRITICAL)
  → MSA completed, measurement system validated
  → Gage R&R < 30%: System adequate ✓

✓ Day 6: Process Capability (Cpk/Ppk)
  → Current state quantified
  → Process baseline established
  → Improvement targets identified

Status: BASELINE ESTABLISHED, READY TO ANALYZE ✓

══════════════════════════════════════════════════════════════

PHASE 3: ANALYZE (Days 7-8)
──────────────────
✓ Day 7: Hypothesis Testing (t-test, ANOVA)
  → Statistical tests mastered
  → P-value interpretation clear
  → Differences between groups identified

✓ Day 8: Correlation, Regression, Root Cause
  → X factors linked to Y output
  → Fishbone & 5 Whys applied
  → Root causes identified
  → Priority factors for improvement known

Status: ROOT CAUSE IDENTIFIED, READY TO IMPROVE ✓

══════════════════════════════════════════════════════════════

PHASE 4: IMPROVE & CONTROL (Days 9-10)
──────────────────────────────────
✓ Day 9: Design of Experiments (DOE)
  → Factorial designs understood
  → Interaction effects identified
  → Optimal solution selected (Pugh Matrix)
  → Implementation ready

✓ Day 10: Statistical Process Control (SPC)
  → Control charts created & analyzed
  → Out-of-control detection mastered
  → Control Plan documented
  → Sustain strategy in place

Status: IMPROVEMENT READY, SUSTAIN PLAN IN PLACE ✓

══════════════════════════════════════════════════════════════

KEY METRICS ACHIEVED
────────────────────

Before (Baseline):
  • Defect Rate: ~5-8%
  • Process Capability: Cpk < 1.33 (Not capable)
  • Variation: High

After (Target):
  • Defect Rate: < 2%
  • Process Capability: Cpk ≥ 1.33 (Capable)
  • Variation: Controlled & stable

Estimated Timeline: 30-60 days for full implementation

══════════════════════════════════════════════════════════════

TECHNICAL SKILLS MASTERED
──────────────────────────
Python & Data Analysis:
  ✓ Pandas: Data loading, cleaning, transformation
  ✓ NumPy: Statistical calculations
  ✓ SciPy: Hypothesis testing (t-test, ANOVA, etc.)
  ✓ Matplotlib/Seaborn: Data visualization
  ✓ Scikit-learn: Regression modeling

Six Sigma Methods:
  ✓ DMAIC methodology
  ✓ Project Charter writing
  ✓ VOC → CTQ translation
  ✓ Data collection planning
  ✓ Gage R&R analysis
  ✓ Capability analysis (Cpk/Ppk)
  ✓ Hypothesis testing
  ✓ Root cause analysis (Fishbone, 5 Whys)
  ✓ Design of Experiments (DOE)
  ✓ Control charting (SPC)

══════════════════════════════════════════════════════════════

NEXT STEPS - BEYOND 10 DAYS
───────────────────────────

Week 2-4: Implementation Phase
  • Execute improvement actions from DOE
  • Verify expected benefit realization
  • Make process adjustments as needed
  • Conduct interim capability analysis

Week 5+: Sustain Phase
  • Daily SPC monitoring
  • Weekly team reviews
  • Document lessons learned
  • Replicate success to other processes
  • Prepare Green Belt certification exam (if pursuing)

══════════════════════════════════════════════════════════════

RESOURCES COMPILED
──────────────────
Bilingual Files Created:
  ✓ FILE 1: Complete Guide (170) - Theory & Hands-on
  ✓ FILE 2: Quick Reference (171) - Formulas & Commands
  ✓ FILE 3: Examples (172) - Copy-paste code
  ✓ FILE 4: Index (173) - Learning roadmap
  ✓ FILE 5: FAQ (174) - Troubleshooting & Q&A

External References:
  ✓ ASQ BBBOK (Black Belt Body of Knowledge)
  ✓ ISCCA Six Sigma Training Materials
  ✓ Python libraries: pandas, NumPy, SciPy, matplotlib

══════════════════════════════════════════════════════════════

CERTIFICATION & RECOGNITION
─────────────────────────────
This 10-day intensive covers:
  ✓ Green Belt Level: Theory + Hands-on (80% complete)
  ✓ Black Belt Level: Preparation (40% complete)

To achieve Green Belt:
  → Pass ASQ Green Belt exam (~4 additional weeks study)
  → Complete 1-2 real projects with documented results

To achieve Black Belt:
  → Pass ASQ Black Belt exam
  → Demonstrate 2-3 projects with > $100k impact each
  → Mentor Green Belts

══════════════════════════════════════════════════════════════

FINAL NOTES
───────────
"From Zero to Six Sigma in 10 Days"

You've learned:
  1. The MINDSET: Data-driven, systematic improvement
  2. The TOOLS: DMAIC, DOE, SPC, and Python automation
  3. The PRACTICE: Real analysis with code & visualization

Success requires:
  ✓ Daily practice (at least 30 min with code)
  ✓ Apply to real problems (best learning method)
  ✓ Document & share learnings (teach others)
  ✓ Join Six Sigma community (ASQ, local meetups)

Your competitive advantage:
  → Unlike typical Six Sigma training (pure theory)
  → You have Python skills to automate analysis
  → You can tackle BIG DATA (millions of records)
  → You're 10x more efficient than spreadsheet users

══════════════════════════════════════════════════════════════
Generated: {pd.Timestamp.now()}
Status: READY FOR REAL-WORLD APPLICATION ✓✓✓
══════════════════════════════════════════════════════════════
"""

print(summary_report)

with open('six_sigma_completion_summary.txt', 'w') as f:
    f.write(summary_report)

print("\nCompletion Summary saved!")
```

**File References:**
```
📘 FILE 1 [170] - SECTION 6: Control Phase
📘 FILE 2 [171] - Quick Reference: SPC Formulas
📘 FILE 3 [172] - Example 4: Control Chart
📘 FILE 5 [174] - FAQ: Interpreting Control Charts
📘 ASQ BBBOK - CONTROL Phase
📘 ISCCA Materials - Process Control
```

---

### PART 10D: Summary Checklist ⭐ FINAL
- [ ] Tính được control limits (3-sigma)
- [ ] Vẽ được I-MR control chart
- [ ] Phát hiện được out-of-control points
- [ ] Áp dụng Nelson Rules (9-point rule, trend rule)
- [ ] Lập được Control Plan chi tiết
- [ ] Hiểu Common Cause vs Special Cause
- [ ] Biết cách sustain improvement

---

---

# TỔNG KẾT 10 NGÀY

## COMPLETION CHECKLIST

### GIAI ĐOẠN 1: DEFINE & LEAN (Days 1-3)
- [ ] Six Sigma methodology (DMAIC) fully understood
- [ ] 8 Wastes (DOWNTIME) memorized & applicable
- [ ] Lean tools (5S, Kaizen, Poka-Yoke) mastered
- [ ] Descriptive statistics (mean, median, std dev) calculated
- [ ] Histogram created with distribution overlay
- [ ] Project Charter written (Business Case + Problem + Goal)
- [ ] VOC translated to CTQ with metrics
- [ ] SIPOC diagram created & saved

### GIAI ĐOẠN 2: MEASURE (Days 4-6)
- [ ] Data Collection Plan documented
- [ ] Sampling methods understood & applied (Random, Stratified)
- [ ] **Gage R&R analysis completed** ⭐ CRITICAL
- [ ] Gage R&R % calculated & acceptable (< 30%)
- [ ] Process Capability (Cpk) calculated
- [ ] Cpk interpreted correctly (benchmark: 1.33)
- [ ] Capability improvement plan created
- [ ] Baseline metrics established & documented

### GIAI ĐOẠN 3: ANALYZE (Days 7-8)
- [ ] Normality test (Shapiro-Wilk) performed
- [ ] t-test or ANOVA executed on real data
- [ ] P-value < 0.05 correctly interpreted
- [ ] Correlation coefficient calculated
- [ ] Linear regression model built & R² interpreted
- [ ] Scatter plot with regression line visualized
- [ ] Fishbone diagram created with 5+ causes
- [ ] 5 Whys technique applied to root cause
- [ ] Vital few X factors identified (Pareto principle)

### GIAI ĐOẠN 4: IMPROVE & CONTROL (Days 9-10)
- [ ] 2³ Factorial Design OR appropriate DOE executed
- [ ] Main effects plot created & interpreted
- [ ] Interaction effects identified
- [ ] Pugh Matrix completed for solution selection
- [ ] Optimal configuration chosen with justification
- [ ] I-MR Control Chart created
- [ ] Control limits (UCL, CL, LCL) calculated
- [ ] Out-of-control points detected & marked
- [ ] Nelson Rules applied (9-point rule, trend rule)
- [ ] Control Plan document completed
- [ ] Sustain strategy defined

---

## TECHNICAL SKILLS VERIFIED

### Python Skills
- [✓] Pandas: df.read_csv(), describe(), groupby(), dropna(), etc.
- [✓] NumPy: mean(), std(), array operations, random.normal()
- [✓] SciPy: stats.shapiro(), ttest_ind(), f_oneway(), pearsonr()
- [✓] Matplotlib: plot(), scatter(), hist(), axhline(), bar()
- [✓] Scikit-learn: LinearRegression, fit(), predict()

### Six Sigma Skills
- [✓] DMAIC methodology understanding (80%+)
- [✓] Project management (charter, scope, goals)
- [✓] Statistical analysis (capability, hypothesis testing)
- [✓] Root cause analysis (fishbone, 5 whys)
- [✓] Experimental design (DOE, factorial)
- [✓] Process control (SPC, control charts)

### Business Skills
- [✓] Translating customer voice to metrics
- [✓] Data-driven decision making
- [✓] Communicating with executives (business case)
- [✓] Selecting solutions using weighted criteria
- [✓] Writing control plans for sustainability

---

## REFERENCES USED

**Primary Sources:**
```
📘 ASQ Black Belt Body of Knowledge (BBBOK)
   - Introduction to Six Sigma
   - DMAIC phases in detail
   - Statistical tests & formulas
   - Reference: https://www.asq.org/

📘 ISCCA Six Sigma Training Materials
   - Lean principles & tools
   - Hypothesis testing
   - Design of Experiments
   - Reference: ISCCA official curriculum

📘 Python for Six Sigma Files (Created)
   - FILE 1 [170]: Complete Guide
   - FILE 2 [171]: Quick Reference
   - FILE 3 [172]: Examples
   - FILE 4 [173]: Learning Roadmap
   - FILE 5 [174]: FAQ & Troubleshooting
```

**Secondary Sources:**
```
📚 Statistics Textbooks
  - Normality testing (Shapiro-Wilk)
  - Hypothesis testing (p-value interpretation)
  - Regression analysis (R², slope, intercept)

📚 Six Sigma Publications
  - Motorola Six Sigma history
  - DPMO to Sigma conversion table
  - Control chart rules (Nelson Rules)

📚 Python Documentation
  - SciPy.stats: All statistical tests
  - Pandas: Data manipulation
  - Matplotlib: Visualization
```

---

## SUCCESS CRITERIA MET?

| Criterion | Status | Evidence |
|-----------|--------|----------|
| DMAIC methodology understood | ✓ | Can explain each phase |
| Data analysis skills (Python) | ✓ | Can run all tests & visualizations |
| Statistical tests mastered | ✓ | Cp/Cpk, t-test, ANOVA all covered |
| Root cause analysis completed | ✓ | Fishbone, 5 Whys, Pareto applied |
| Control plan created | ✓ | SPC, control limits, action plan |
| Project charter written | ✓ | Business case + problem + goal |
| Ready for Green Belt exam | ≈ 70% | Need 4 more weeks for certification |
| Ready for real project | ✓ | All tools & skills learned |

---

## FINAL WORDS

**Congratulations!** You've completed a comprehensive 10-day Six Sigma intensive.

You now have:
1. ✓ Theoretical understanding of DMAIC
2. ✓ Practical Python skills for automation
3. ✓ Real-world examples & templates
4. ✓ A complete toolkit for your next project

**Next: Pick a real problem → Apply DMAIC → Achieve results → Get certified**

Good luck! 🚀

---

Generated: {pd.Timestamp.now()}
