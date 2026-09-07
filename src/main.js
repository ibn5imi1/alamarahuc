import { header, initMobileMenu  } from "./components/header";
import { footer  } from "./components/footer";
import {home, initSlider, initCounters} from "./pages/home"
import { initLanguage } from './translate';
const app = document.getElementById("app");

// إدراج محتوى الهيدر داخل عنصر app
app.innerHTML = `
${header()}
${home()}
${footer()}
`;

// change language
initLanguage();


initMobileMenu()

initSlider();

initCounters()