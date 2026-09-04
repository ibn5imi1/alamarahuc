import { header  } from "./components/header";
import { footer  } from "./components/footer";
import { toArabic, toEnglish } from "./translate";
const app = document.getElementById("app");

// إدراج محتوى الهيدر داخل عنصر app
app.innerHTML = `
${header()}
${footer()}
`;

// change language
window.toArabic = toArabic;
window.toEnglish = toEnglish;

