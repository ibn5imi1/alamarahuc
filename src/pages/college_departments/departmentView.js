import { getDepartmentHeadImage } from './departmentsData.js';
import { applyDeptLanguage } from '../../department_translate.js';

export function departmentView(deptId) {
  const headImageSrc = getDepartmentHeadImage(deptId);

  requestAnimationFrame(() => {
    applyDeptLanguage();
  });

  return `
    <div class="department-page">
      <div class="dept-container">
        
        <!-- 1. عنوان القسم الرئيسي -->
        <header class="dept-header">
          <h1 class="dept-title" data-i18n="dept.${deptId}.name">اسم القسم</h1>
        </header>

        <!-- 2. كارت رئيس القسم -->
        <section class="head-section">
          <div class="head-card">
            <div class="head-image-wrapper">
              <img src="${headImageSrc}" alt="Head of Department" class="head-image" onerror="this.src='/src/assets/images/teachers/default_head.jpg';" />
            </div>
            <div class="head-details">
              <h3 class="head-title-label" data-i18n="dept.c_title">كلمة السيد رئيس القسم</h3>
              <h4 class="head-name" data-i18n="dept.${deptId}.head_name"></h4>
              <p class="head-speech" data-i18n="dept.${deptId}.head_speech">نص كلمة رئيس القسم قيد الإضافة...</p>
            </div>
          </div>
        </section>

        <!-- 3. الرؤية والرسالة والأهداف (رأسياً واحدة تلو الأخرى) -->
        <section class="vmg-section">
          <h2 class="section-main-title" data-i18n="dept.vmg_title">الرؤية والرسالة والأهداف</h2>
          
          <div class="vmg-vertical-list">
            
            <div class="vmg-item vision-item">
              <h3 class="vmg-item-title" data-i18n="dept.vision_label">الرؤية</h3>
              <p class="vmg-item-text" data-i18n="dept.${deptId}.vision">رؤية القسم قيد الإضافة...</p>
            </div>

            <div class="vmg-item mission-item">
              <h3 class="vmg-item-title" data-i18n="dept.mission_label">الرسالة</h3>
              <p class="vmg-item-text" data-i18n="dept.${deptId}.mission">رسالة القسم قيد الإضافة...</p>
            </div>

            <div class="vmg-item goals-item">
              <h3 class="vmg-item-title" data-i18n="dept.goals_label">الأهداف</h3>
              <p class="vmg-item-text" data-i18n="dept.${deptId}.goals">أهداف القسم قيد الإضافة...</p>
            </div>

          </div>
        </section>

        <!-- 4. حول القسم -->
        <section class="about-dept-section">
          <h2 class="section-main-title" data-i18n="dept.about_label">حول القسم</h2>
          <div class="about-content">
            <p data-i18n="dept.${deptId}.about">نبذة عن القسم قيد الإضافة...</p>
          </div>
        </section>

      </div>
    </div>
  `;
}