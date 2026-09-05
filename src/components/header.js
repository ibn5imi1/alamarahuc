export function header() {
  return `
    <header class="header">
        <nav class="navbar">
            <button class="hamburger_btn" id="menu-toggle" aria-label="Toggle Navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav_list" id="nav-list">
                <li class="nav_item"><a href="/" data-i18n="nav.home">Home</a></li>
                
                <!-- About -->
                <li class="nav_item has-dropdown">
                    <a href="#" data-i18n="nav.about">About</a>
                    <ul class="dropdown_menu">
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.about_sub">About</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.about_inner">About</a></li>
                                <li><a href="#" data-i18n="nav.vision_mission">Vision, mission and goals</a></li>
                                <li><a href="#" data-i18n="nav.dean_speech">Dean Speech</a></li>
                            </ul>
                        </li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.programs_structure">Programs and Academic Structure</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.academic_program">Academic Program</a></li>
                                <li><a href="#" data-i18n="nav.college_structure">College Structure</a></li>
                                <li><a href="#" data-i18n="nav.certifications">Certifications and Ratings</a></li>
                                <li><a href="#" data-i18n="nav.strategic_plan">Strategic Plan</a></li>
                            </ul>
                        </li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.facilities">Facilities and Information</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.location">Location</a></li>
                                <li><a href="#" data-i18n="nav.activities">Activities</a></li>
                                <li><a href="#" data-i18n="nav.statistics">Statistics</a></li>
                                <li><a href="#" data-i18n="nav.transparency">Transparency</a></li>
                            </ul>
                        </li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.recruitment_policies">Recruitment and Policies</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.college_instructions">College Instructions and Policy</a></li>
                                <li><a href="#" data-i18n="nav.jobs">Jobs</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <!-- Departments -->
                <li class="nav_item has-dropdown">
                    <a href="#" data-i18n="nav.departments">Departments</a>
                    <ul class="dropdown_menu">
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.medical_departments">Medical Departments</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.dentistry">Department of Dentistry</a></li>
                                <li><a href="#" data-i18n="nav.pharmacy">Pharmacy Department</a></li>
                                <li><a href="#" data-i18n="nav.radiology">Radiology and Sonography Technologies Department</a></li>
                                <li><a href="#" data-i18n="nav.dental_industry">Dental Industry Technical Department</a></li>
                                <li><a href="#" data-i18n="nav.cosmetic_laser">Cosmetic and Laser Technology Department</a></li>
                                <li><a href="#" data-i18n="nav.medical_lab">Medical Laboratory Sciences Department</a></li>
                            </ul>
                        </li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.engineering_departments">Engineering Departments</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.petroleum_eng">Petroleum Engineering Department</a></li>
                                <li><a href="#" data-i18n="nav.mechanical_eng">Mechanical Power Technical Engineering Department</a></li>
                                <li><a href="#" data-i18n="nav.medical_devices_eng">Medical Devices Technical Engineering Department</a></li>
                                <li><a href="#" data-i18n="nav.electrical_eng">Electrical Power Technology Engineering</a></li>
                                <li><a href="#" data-i18n="nav.chemical_eng">Chemical Engineering and Petroleum Industries Department</a></li>
                                <li><a href="#" data-i18n="nav.cybersecurity_eng">Cybersecurity Technical Engineering Department</a></li>
                                <li><a href="#" data-i18n="nav.ai_eng">Artificial Intelligence Engineering Department</a></li>
                                <li><a href="#" data-i18n="nav.civil_eng">Civil Engineering Department</a></li>
                            </ul>
                        </li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.humanities_departments">Humanities Departments</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.law">Law Department</a></li>
                                <li><a href="#" data-i18n="nav.accounting">Accounting Department</a></li>
                                <li><a href="#" data-i18n="nav.english_edu">English Education Department</a></li>
                                <li><a href="#" data-i18n="nav.oil_gas_mgmt">Oil and Gas Management and Marketing Department</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <!-- Teachers -->
                <li class="nav_item has-dropdown">
                    <a href="#" data-i18n="nav.teachers">Teachers</a>
                    <ul class="dropdown_menu">
                        <li><a href="#" data-i18n="nav.teaching_staff">Teaching Staff</a></li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.publishing">Publishing</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.researches">Researches</a></li>
                                <li><a href="#" data-i18n="nav.patents">Patents</a></li>
                                <li><a href="#" data-i18n="nav.books">Books</a></li>
                            </ul>
                        </li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.research_database">Research Database</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.iraqi_virtual_library">Iraqi Virtual Library</a></li>
                                <li><a href="#" data-i18n="nav.google_scholar">Google Scholar</a></li>
                                <li><a href="#" data-i18n="nav.researchgate">ResearchGate</a></li>
                                <li><a href="#" data-i18n="nav.researcher_id">ResearcherID</a></li>
                                <li><a href="#" data-i18n="nav.scopus">Scopus</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <!-- Students -->
                <li class="nav_item has-dropdown">
                    <a href="#" data-i18n="nav.students">Students</a>
                    <ul class="dropdown_menu">
                        <li><a href="#" data-i18n="nav.academic_calendar">Academic Calendar</a></li>
                        <li><a href="#" data-i18n="nav.examination_committee">Examination Committee Numbers</a></li>
                        <li><a href="#" data-i18n="nav.top_students">Top Students</a></li>
                        <li><a href="#" data-i18n="nav.graduates">Graduates</a></li>
                    </ul>
                </li>

                <!-- E-Repository -->
                <li class="nav_item has-dropdown">
                    <a href="#" data-i18n="nav.repository">E-Repository</a>
                    <ul class="dropdown_menu">
                        <li><a href="#" data-i18n="nav.lectures">Lectures</a></li>
                        <li><a href="#" data-i18n="nav.graduate_research">Graduate Research</a></li>
                        <li><a href="#" data-i18n="nav.e_library">E-Library</a></li>
                        <li><a href="#" data-i18n="nav.library">Library</a></li>
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.media">Media</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.video_gallery">Video Gallery</a></li>
                                <li><a href="#" data-i18n="nav.photo_gallery">Photo Gallery</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <!-- Electronic Services -->
                <li class="nav_item has-dropdown">
                    <a href="#" data-i18n="nav.services">Electronic Services</a>
                    <ul class="dropdown_menu">
                        <li class="dropdown_item has-submenu">
                            <a href="#" data-i18n="nav.educational_platforms">Educational Platforms</a>
                            <ul class="submenu">
                                <li><a href="#" data-i18n="nav.google_classroom">Google Classroom</a></li>
                                <li><a href="#" data-i18n="nav.moodle">Moodle</a></li>
                            </ul>
                        </li>
                        <li><a href="#" data-i18n="nav.email">Email</a></li>
                        <li><a href="#" data-i18n="nav.related_sites">Related Sites</a></li>
                        <li><a href="#" data-i18n="nav.complaints_feedback">Complaints and Feedback</a></li>
                    </ul>
                </li>

                <li class="nav_item"><a href="/contactUs" data-i18n="nav.contact_us">Contact Us</a></li>
                <li class="nav_item"><a href="#" data-i18n="nav.en">AR</a></li>
            </ul>
        </nav>
        <div class="nav_overlay" id="nav-overlay"></div>
    </header>`;
}

export function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  const overlay = document.getElementById('nav-overlay');

  if (!toggleBtn) return;

  function toggleMenu() {
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  }

  toggleBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Using Event Delegation to control menu opening on small screens
  document.body.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      const link = e.target.closest('.has-dropdown > a, .has-submenu > a');
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        const parentLi = link.parentElement;
        parentLi.classList.toggle('open');
      }
    }
  });
}