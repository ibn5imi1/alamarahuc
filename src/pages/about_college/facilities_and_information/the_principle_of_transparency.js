import Chart from 'chart.js/auto';

// An object to store chart instances, preventing redundant creation and Canvas conflicts when navigating away from and returning to the page.
const chartInstances = {};

// ============================================
// 📊 Chart Data — Edit here only to add, remove, or modify any chart
// ============================================
// Each chart has: labels (horizontal axis labels) and datasets (one or more data sets)
// To add a new year: Add a new value to the end of each 'labels' and 'data' array, maintaining the same order
// To add a new category (dataset) to the same chart: Add a new object to the 'datasets' array
// To remove a category: Delete its object entirely from 'datasets'
const CHARTS_DATA = {
    academicRanks: {
        labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026'],
        datasets: [
            { labelKey: 'assistant_lecturer', label: 'Assistant Lecturer', data: [9, 9, 31, 30, 33, 79, 90, 113] },
            { labelKey: 'lecturer', label: 'Lecturer', data: [9, 11, 23, 27, 27, 32, 41, 47] },
            { labelKey: 'assistant_professor', label: 'Assistant Professor', data: [0, 0, 0, 10, 10, 14, 16, 24] },
            { labelKey: 'professor', label: 'Professor', data: [0, 0, 9, 0, 0, 0, 0, 14] },
        ]
    },
    teachersCount: {
        labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026'],
        datasets: [
            { labelKey: 'total', label: 'Total', data: [38, 59, 95, 92, 95, 138, 159, 198] },
            { labelKey: 'males', label: 'Males', data: [29, 34, 66, 72, 72, 119, 132, 162] },
            { labelKey: 'females', label: 'Females', data: [3, 1, 5, 5, 8, 19, 27, 36] },
            { labelKey: 'permanent_staff', label: 'Permanent Staff', data: [9, 35, 78, 77, 0, 0, 0, 0] },
            { labelKey: 'lecturers_contract', label: 'Contract Lecturers', data: [0, 0, 17, 15, 0, 0, 0, 0] },
            { labelKey: 'foreign_staff', label: 'Foreign Staff', data: [0, 12, 0, 0, 14, 19, 18, 21] },
        ]
    },
    teachersStudentsRatio: {
        labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022'],
        data: [0.06, 0.05, 0.05, 0.03]
    },
    studentsCount: {
        labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022'],
        datasets: [
            { labelKey: 'total', label: 'Total', data: [721, 1456, 1856, 2475] },
            { labelKey: 'males', label: 'Males', data: [594, 1232, 1606, 2172] },
            { labelKey: 'females', label: 'Females', data: [127, 224, 250, 303] },
        ]
    },
    rankings: {
        labels: ['RUR', 'GreenMetrics', 'Webometrics'],
        datasets: [
            { labelKey: 'global_rank', label: 'Global Rank', data: [1024, 846, 110] },
            { labelKey: 'iraqi_rank', label: 'Iraqi Rank', data: [65, 44, 0] },
            { labelKey: 'private_rank', label: 'Private Universities Rank', data: [20, 18, 0] },
        ]
    }
};

export function thePrincipleOfTransparencyView() {
    return `
  <div class="transparency-page">
    <!-- Hero Banner -->
    <section class="page-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1 data-i18n="transparency.hero_title">Principle of Transparency</h1>
      </div>
    </section>

    <!-- Main Content Container -->
    <section class="transparency-container">

    <!-- 1. Faculty Statistics -->
      <div class="stats-group reveal">
        <h2 class="group-title" data-i18n="transparency.teaching_staff_stats">Teaching Staff Statistics</h2>
        <div class="charts-grid">
          <div class="chart-card">
            <h3 data-i18n="transparency.academic_ranks">Academic Ranks</h3>
            <div class="chart-wrapper">
              <canvas id="academicRanksChart"></canvas>
            </div>
          </div>
          <div class="chart-card">
            <h3 data-i18n="transparency.teaching_staff_numbers">Teaching Staff Numbers</h3>
            <div class="chart-wrapper">
              <canvas id="teachersCountChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Student Statistics -->
      <div class="stats-group reveal">
        <h2 class="group-title" data-i18n="transparency.students_stats">Student Statistics</h2>
        <div class="charts-grid">
          <div class="chart-card">
            <h3 data-i18n="transparency.teacher_to_student_ratio">Teacher-to-Student Ratio</h3>
            <div class="chart-wrapper">
              <canvas id="teachersStudentsRatioChart"></canvas>
            </div>
          </div>
          <div class="chart-card">
            <h3 data-i18n="transparency.student_numbers">Student Numbers</h3>
            <div class="chart-wrapper">
              <canvas id="studentsCountChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Category Statistics -->
      <div class="stats-group reveal">
        <h2 class="group-title" data-i18n="transparency.rankings_stats">Rankings Statistics</h2>
        <div class="charts-grid single">
          <div class="chart-card">
            <h3 data-i18n="transparency.rankings">Rankings</h3>
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

// Chart initialization function — called from router.js after content is injected into the DOM
export function initTransparencyCharts() {
    setTimeout(() => {
        // 🎨 Chart Colors — Edit the values ​​here to change the color of any category across all charts at once.
        const colors = {
            c1: '#0d3b66',
            c2: '#2a6f97',
            c3: '#61a5c2',
            c4: '#89c2d9',
            c5: '#333333',
            c6: '#f4a261',
            c7: '#e76f51'
        };
        const colorPalette = [colors.c1, colors.c2, colors.c4, colors.c5, colors.c6, colors.c7, colors.c3];

        // Helper function that creates the chart and deletes any previous instance (prevents chart accumulation upon repeated page visits)
        function createChart(canvasId, config) {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;

            if (chartInstances[canvasId]) {
                chartInstances[canvasId].destroy();
            }

            // ✅ Animation settings are enabled by default in Chart.js — we add them explicitly here to ensure they always appear.
            config.options = {
                ...config.options,
                animation: {
                    duration: 1400,
                    easing: 'easeOutQuart'
                }
            };

            chartInstances[canvasId] = new Chart(canvas, config);
        }

        // 1. Academic Titles — Stacked Bar Chart
        createChart('academicRanksChart', {
            type: 'bar',
            data: {
                labels: CHARTS_DATA.academicRanks.labels,
                datasets: CHARTS_DATA.academicRanks.datasets.map((ds, i) => ({
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: colorPalette[i % colorPalette.length]
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { x: { stacked: true }, y: { stacked: true } }
            }
        });

        // 2. Number of Teaching Staff — Grouped Bar Chart
        createChart('teachersCountChart', {
            type: 'bar',
            data: {
                labels: CHARTS_DATA.teachersCount.labels,
                datasets: CHARTS_DATA.teachersCount.datasets.map((ds, i) => ({
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: colorPalette[i % colorPalette.length]
                }))
            },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // 3. Student-to-Faculty Ratio — Polar Area Chart
        createChart('teachersStudentsRatioChart', {
            type: 'polarArea',
            data: {
                labels: CHARTS_DATA.teachersStudentsRatio.labels,
                datasets: [{
                    data: CHARTS_DATA.teachersStudentsRatio.data,
                    backgroundColor: colorPalette
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // 4. Student Numbers — Grouped Bar Chart
        createChart('studentsCountChart', {
            type: 'bar',
            data: {
                labels: CHARTS_DATA.studentsCount.labels,
                datasets: CHARTS_DATA.studentsCount.datasets.map((ds, i) => ({
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: colorPalette[i % colorPalette.length]
                }))
            },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // 5. Categories — Horizontal Bar Chart
        createChart('rankingsChart', {
            type: 'bar',
            data: {
                labels: CHARTS_DATA.rankings.labels,
                datasets: CHARTS_DATA.rankings.datasets.map((ds, i) => ({
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: colorPalette[i % colorPalette.length]
                }))
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }, 100);  // A slight delay ensures that the canvas actually exists in the DOM before creating the drawing.
}