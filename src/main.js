import { header, initMobileMenu  } from "./components/header";
import { footer  } from "./components/footer";
import { initLanguage } from './translate';
const app = document.getElementById("app");

// إدراج محتوى الهيدر داخل عنصر app
app.innerHTML = `
${header()}

${footer()}
`;

// change language
initLanguage();


initMobileMenu()
