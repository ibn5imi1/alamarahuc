// استخدام Vite dynamic import لصور رؤساء الأقسام
const teacherImages = import.meta.glob('/src/assets/images/teachers/*.jpg', { eager: true });

export function getDepartmentHeadImage(deptId) {
  const expectedPath = `/src/assets/images/teachers/${deptId}_head.jpg`;
  
  if (teacherImages[expectedPath]) {
    return teacherImages[expectedPath].default || teacherImages[expectedPath];
  }
  
  // صورة افتراضية في حال عدم وجود صورة لرئيس القسم
  return '/src/assets/images/teachers/default_head.jpg';
}

export const departmentsData = {
  dentistry: { id: "dentistry" },
  pharmacy: { id: "pharmacy" },
  radiology: { id: "radiology" },
  dental_industry: { id: "dental_industry" },
  cosmetic_laser: { id: "cosmetic_laser" },
  medical_lab: { id: "medical_lab" },
  petroleum_eng: { id: "petroleum_eng" },
  mechanical_eng: { id: "mechanical_eng" },
  medical_devices_eng: { id: "medical_devices_eng" },
  electrical_eng: { id: "electrical_eng" },
  chemical_eng: { id: "chemical_eng" },
  cybersecurity_eng: { id: "cybersecurity_eng" },
  ai_eng: { id: "ai_eng" },
  civil_eng: { id: "civil_eng" },
  law: { id: "law" },
  accounting: { id: "accounting" },
  english_edu: { id: "english_edu" },
  oil_gas_mgmt: { id: "oil_gas_mgmt" }
};