// main.js
import { header, initMobileMenu } from "./components/header.js";
import { footer } from "./components/footer.js";
import { initLanguage } from './main_translate.js';
import { initRouter } from './router.js';
import { initScrollReveal } from './scrollReveal.js';

const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
    ${header()}
    <main id="main-content"></main>
    ${footer()}
  `;

  if (typeof initMobileMenu === 'function') initMobileMenu();
  if (typeof initLanguage === 'function') initLanguage();

  initRouter();
}