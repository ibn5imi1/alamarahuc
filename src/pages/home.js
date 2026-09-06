import deanImg from '../assets/images/dean.jpeg';

export function home() {
    return (
        `
        <section class="hero-section">
            <div class="container">
                <h2 class="college-title" data-i18n="college_name">AL-Amarah University College</h2>
                <p class="college_description" data-i18n="college_description">
                    Al-Amarah University College was established in 2017, 
                    in connection with Cabinet Decision No. 358 of 2017, 
                    be based in Maysan Governorate / Al-Amarah City / Northern Entrance 
                    to the governorate in order to expand The Department of Higher 
                    Education in Maysan and Iraq. The establishment of the college 
                    aims to establish a scientific and civilized edifice that 
                    contributes to the preparation of a specialized scientific cadre, 
                    who takes an important and effective course in building and 
                    developing Iraq’s modern renaissance.
                </p>

                <div class="stats-wrapper">
                    <div class="stat-card">
                        <span class="stat-number">4,669</span>
                        <p class="stat-label" data-i18n="student">Students</p>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">1,711</span>
                        <span class="stat-label" data-i18n="graduate">Graduates</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">152</span>
                        <p class="stat-label" data-i18n="teachers">Teachers</p>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">18</span>
                        <p class="stat-label" data-i18n="department">Departments</p>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">89</span>
                        <p class="stat-label" data-i18n="employee">Employee</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="home-main-content">
             <div class="container">
             <section class="dean_talk_section">
                    <h2 class="section-title" data-i18n="dean_talk_title">Dean's Speech</h2>

                    <div class="dean_card">
                        <div class="dean_img_wrapper">
                            <!-- تم تغيير المسار إلى مسار مطلق لتلافي مشكلة عدم الظهور -->
                            <img src="${deanImg}" alt="Dean of Al-Amarah University College" class="dean_img"/>
                            <div class="dean_info">
                                <h3 data-i18n="dean_info">
                                Prof. Dr. Nabil Jamil Yasin <br>
                                Dean of Al-Amarah University College
                                </h3>
                            </div>
                        </div>

                        <div class="dean_text_wrapper">
                            <div class="talk" data-i18n="dean_talk">
In the name of God, the Most Gracious, the Most Merciful.
Almighty God says in His Holy Book: "It is only those who have knowledge among His servants that fear Allah."
Great is the Truth of Almighty God.
Praise be to Allah, Lord of the Worlds, and peace and blessings be upon the Messenger of Allah, the Seal of the Prophets and Messengers, his virtuous and pure Household, his noble Companions, and all who follow them until the Day of Judgment.
As we begin this new academic year, I am pleased to welcome you all to Al-Amarah University College—this distinguished scientific institution that unites us in achieving noble goals in service of knowledge and society. I look forward to working with you towards an academic year filled with dedication and success, as we continue our journey toward excellence and innovation.
To Our Esteemed Faculty and Staff,
You are the cornerstone of this college and the secret behind its success. Through your dedication, the future of our students is forged. I encourage you to continue your outstanding efforts in teaching and mentorship, as you serve as role models in both knowledge and practice. The impact of your work extends far beyond the classroom, shaping minds that will build a bright future for our nation. The college remains steadfast in providing an exceptional academic environment rooted in creativity and scientific research, fostering our students' skills and shaping their character so they may become the leaders and builders of tomorrow.
To Our Dear Students,
You are the hope and the fundamental pillar upon which we rely to advance our journey of progress and excellence. I urge you to strive with diligence and perseverance, make the most of your time in pursuit of knowledge, and uphold high moral and professional values so that you may serve as honorable representatives of your university and your nation.
In conclusion, I express my sincere gratitude and appreciation to all faculty members and staff who spare no effort in serving our students. I pray to Almighty God to grant us all guidance and success in all our endeavors.
May the peace, mercy, and blessings of Allah be upon you.
Success comes from God alone.
                            </div>
                        </div>
                    </div>
                </section>
             
             </div>
        </div>
        `
    )
}