
import Home from './pages/home.js';
import About from './pages/about.js';
import { contactUs } from './pages/contact_us.js';
import NotFound from './pages/notfound.js';

// Routes Map
const routes = {
  '/': Home,
  '/about': About,
  '/contactUs': contactUs
};

// Routing function to display the appropriate page
function router() {
  const path = window.location.pathname;
  const page = routes[path] || NotFound;
  document.getElementById('app').innerHTML = page();
}

// Navigation function without page reload
function navigateTo(url) {
  window.history.pushState(null, null, url);
  router();
}

// Intercepting clicks on links to dynamically change the path
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  // Navigation when using the browser's forward and back buttons
  window.addEventListener('popstate', router);

  // Turn on the router when the website first loads
  router();
});