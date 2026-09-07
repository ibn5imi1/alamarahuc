import { departmentsData } from './departmentsData.js';
import { applyDeptLanguage } from '../../department_translate.js';

export function departmentView(deptId) {
    const dept = departmentsData[deptId];
    if (!dept) return `<h2>Department Not Found</h2>`;

    // استدعاء الترجمة بعد إضافة العناصر للـ DOM
    setTimeout(() => {
        applyDeptLanguage();
    }, 0);

    return `
        <div class="department-page">
            <h1 data-i18n="dept.${deptId}.name"></h1>
            
            <div class="head-section">
                <img src="${dept.headImage}" alt="${dept.headName}" />
                <h3 data-i18n="dept.${deptId}.head_title"></h3>
                <p data-i18n="dept.${deptId}.head_speech"></p>
            </div>

            <div class="dept-details">
                <h3 data-i18n="dept.${deptId}.vision"></h3>
                <h3 data-i18n="dept.${deptId}.mission"></h3>
                <h3 data-i18n="dept.${deptId}.goals"></h3>
                <h3 data-i18n="dept.${deptId}.about"></h3>
            </div>
        </div>
    `;
}