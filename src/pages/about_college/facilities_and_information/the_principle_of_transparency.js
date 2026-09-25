import Chart from 'chart.js/auto';

// كائن لحفظ النسخ لتفادي تكرار إنشائها وتصادم الـ Canvas
const chartInstances = {};

export function thePrincipleOfTransparencyView() {
    return `
  <div class="transparency-page">
    <!-- Hero Banner -->
    <section class="page-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="transparency.hero_title">مبدأ الشفافية</h1>
      </div>
    </section>

    <!-- Main Content Container -->
    <section class="transparency-container">

      <!-- 1. إحصائيات التدريسيين -->
      <div class="stats-group reveal">
        <h2 class="group-title" data-i18n="transparency.teaching_staff_stats">إحصائيات التدريسيين</h2>
        <div class="charts-grid">
          <div class="chart-card">
            <h3 data-i18n="transparency.academic_ranks">الألقاب العلمية</h3>
            <div class="chart-wrapper">
              <canvas id="academicRanksChart"></canvas>
            </div>
          </div>
          <div class="chart-card">
            <h3 data-i18n="transparency.teaching_staff_numbers">أعداد التدريسيين</h3>
            <div class="chart-wrapper">
              <canvas id="teachersCountChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. إحصائيات الطلبة -->
      <div class="stats-group reveal">
        <h2 class="group-title" data-i18n="transparency.students_stats">إحصائيات الطلبة</h2>
        <div class="charts-grid">
          <div class="chart-card">
            <h3 data-i18n="transparency.teacher_to_student_ratio">نسبة التدريسيين إلى الطلبة</h3>
            <div class="chart-wrapper">
              <canvas id="teachersStudentsRatioChart"></canvas>
            </div>
          </div>
          <div class="chart-card">
            <h3 data-i18n="transparency.student_numbers">أعداد الطلبة</h3>
            <div class="chart-wrapper">
              <canvas id="studentsCountChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. إحصائيات التصنيفات -->
      <div class="stats-group reveal">
        <h2 class="group-title" data-i18n="transparency.rankings_stats">إحصائيات التصنيفات</h2>
        <div class="charts-grid single">
          <div class="chart-card">
            <h3 data-i18n="transparency.rankings">التصنيفات</h3>
            <div class="chart-wrapper">
              <canvas id="rankingsChart"></canvas>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
  `;
}

// دالة تهيئة المخططات بعد تحميل الـ DOM
export function initTransparencyCharts() {
    // التأكد من استجابة الـ DOM الجاهز
    setTimeout(() => {
        const colors = {
            c1: '#0d3b66',
            c2: '#2a6f97',
            c3: '#61a5c2',
            c4: '#89c2d9',
            c5: '#333333',
            c6: '#f4a261',
            c7: '#e76f51'
        };

        function createChart(canvasId, config) {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;

            if (chartInstances[canvasId]) {
                chartInstances[canvasId].destroy();
            }

            chartInstances[canvasId] = new Chart(canvas, config);
        }

        // 1. الألقاب العلمية
        createChart('academicRanksChart', {
            type: 'bar',
            data: {
                labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026'],
                datasets: [
                    { label: 'مدرس مساعد', data: [9, 9, 31, 30, 33, 79, 90, 113], backgroundColor: colors.c1 },
                    { label: 'مدرس', data: [9, 11, 23, 27, 27, 32, 41, 47], backgroundColor: colors.c2 },
                    { label: 'أستاذ مساعد', data: [0, 0, 0, 10, 10, 14, 16, 24], backgroundColor: colors.c4 },
                    { label: 'أستاذ', data: [0, 0, 9, 0, 0, 0, 0, 14], backgroundColor: colors.c5 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { x: { stacked: true }, y: { stacked: true } }
            }
        });

        // 2. أعداد التدريسيين
        createChart('teachersCountChart', {
            type: 'bar',
            data: {
                labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026'],
                datasets: [
                    { label: 'المجموع', data: [38, 59, 95, 92, 95, 138, 159, 198], backgroundColor: colors.c1 },
                    { label: 'الذكور', data: [29, 34, 66, 72, 72, 119, 132, 162], backgroundColor: colors.c2 },
                    { label: 'الإناث', data: [3, 1, 5, 5, 8, 19, 27, 36], backgroundColor: colors.c4 },
                    { label: 'الملاك', data: [9, 35, 78, 77, 0, 0, 0, 0], backgroundColor: colors.c5 },
                    { label: 'المحاضرين', data: [0, 0, 17, 15, 0, 0, 0, 0], backgroundColor: colors.c6 },
                    { label: 'الأجانب', data: [0, 12, 0, 0, 14, 19, 18, 21], backgroundColor: colors.c7 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // 3. نسبة التدريسيين إلى الطلبة
        createChart('teachersStudentsRatioChart', {
            type: 'polarArea',
            data: {
                labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022'],
                datasets: [{
                    data: [0.06, 0.05, 0.05, 0.03],
                    backgroundColor: [colors.c1, colors.c2, colors.c4, colors.c5]
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // 4. أعداد الطلبة
        createChart('studentsCountChart', {
            type: 'bar',
            data: {
                labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022'],
                datasets: [
                    { label: 'المجموع', data: [721, 1456, 1856, 2475], backgroundColor: colors.c1 },
                    { label: 'الذكور', data: [594, 1232, 1606, 2172], backgroundColor: colors.c2 },
                    { label: 'الإناث', data: [127, 224, 250, 303], backgroundColor: colors.c4 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // 5. التصنيفات
        createChart('rankingsChart', {
            type: 'bar',
            data: {
                labels: ['RUR', 'Greenmetrics', 'webometrics'],
                datasets: [
                    { label: 'المرتبة العالمية', data: [1024, 846, 110], backgroundColor: colors.c1 },
                    { label: 'المرتبة العراقية', data: [65, 44, 0], backgroundColor: colors.c2 },
                    { label: 'المرتبة الأهلية', data: [20, 18, 0], backgroundColor: colors.c4 }
                ]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }, 100);
}