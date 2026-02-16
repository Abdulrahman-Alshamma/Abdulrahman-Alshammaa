        // --- Data & Translations ---
        const translations = {
            en: {
                nav: { home: "Home", about: "About", work: "Work", contact: "Contact" },
                hero: {
                    greeting: "Hello, I'm",
                    name: "Abdulrahman Al-Shammaa",
                    role: "Frontend Web Developer",
                    description: "Crafting digital experiences with clean code and modern design. I turn complex problems into simple, beautiful solutions.",
                    cta: "View My Work"
                },
                about: {
                    title: "About Me",
                    description: "I am a passionate frontend developer dedicated to building accessible, pixel-perfect, and performant web applications. I love turning complex problems into simple, beautiful, and intuitive designs.",
                    skills: "My Tech Stack",
                    skillc: "C++"
                },
                work: {
                    title: "Featured Projects",
                    view: "View Project",
                    project1: { title: "My personal website", desc: "A pesonal project to showcase my work clearly, professionally, and with fast loading." , link:'#hero'},
                    project2: { title: "Task Master App", desc: "An application for work productivity and task management.", link:'https://abdulrahman-alshamma.github.io/Todo-List/' },
                    project3: { title: "AlTafwoq--School website", desc: "An innovation website designed with a modern and responsive interface." , link:'https://abdulrahman-alshamma.github.io/AlTafwoq--School/'},
                    project4: { title: "Khetmah website", desc: "A website that aims to organize the completion of the Holy Quran and to save the completed readings as stored data.", link:'https://abdulrahman-alshamma.github.io/Khetmah/' },
                    project5: { title: "Quiz App", desc: "Smart and easy-to-use testing system.", link:'https://abdulrahman-alshamma.github.io/Quiz-App/'  }
                },
                contact: {
                    title: "Get In Touch",
                    subtitle: "Have a project in mind? Let's work together.",
                    name: "Your Name",
                    email: "Your Email",
                    message: "Your Message",
                    send: "Send Message",
                    success: "Message sent successfully!"
                },
                footer: { rights: "All rights reserved." }
            },
            ar:{
                nav: { home: "الرئيسية", about: "من أنا", work: "أعمالي", contact: "تواصل معي" },
                hero: {
                    greeting: "مرحباً، أنا",
                    name: "عبدالرحمن الشماع",
                    role: "مطور واجهات أمامية",
                    description: "أصنع تجارب رقمية متميزة باستخدام أكواد نظيفة وتصاميم عصرية. أحول المشكلات المعقدة إلى حلول بسيطة وجميلة.",
                    cta: "شاهد أعمالي"
                },
                about: {
                    title: "من أنا",
                    description: "أنا مطور واجهات أمامية أعمل على بناء تطبيقات ويب سريعة، متجاوبة، وسهلة الاستخدام. أسعى دائماً لتقديم أفضل تجربة مستخدم.",
                    skills: "مهاراتي التقنية",
                    skillc: "++C"
                },
                work: {
                    title: "مشاريع مختارة",
                    view: "عرض المشروع",
                    project1: { title: "موقعي الشخصي", desc: "مشروع شخصي لعرض أعمالي بشكل واضح واحترفي وسريع التحميل." , link:'#hero'},
                    project2: { title: "تطبيق إدارة المهام", desc: "تطبيق لإنتاجية العمل وحفظ المهام." , link:'https://abdulrahman-alshamma.github.io/Todo-List/' },
                    project3: { title: "موقع مدرسة التفوق", desc: "موقع تعريفي ابداعي تم تصميمه بواجهة عصرية ومتجاوبة." , link:'https://abdulrahman-alshamma.github.io/AlTafwoq--School/' },
                    project4: { title: "موقع ختمة", desc: "موقع يهدف إلى تنظيم ختم القرآن الكريم وحفظ الختم المقروءة كبيانات مخزنة." , link:'https://abdulrahman-alshamma.github.io/Khetmah/'},
                    project5: { title: "نظام اختبار", desc: "نظام اختبار ذكي وسهل الاستخدام.", link:'https://abdulrahman-alshamma.github.io/Quiz-App/' }
                },
                contact: {
                    title: "تواصل معي",
                    subtitle: "لديك مشروع في ذهنك؟ دعنا نعمل معاً.",
                    name: "الاسم",
                    email: "البريد الإلكتروني",
                    message: "الرسالة",
                    send: "إرسال الرسالة",
                    success: "تم إرسال الرسالة بنجاح!"
                },
                footer: { rights: "جميع الحقوق محفوظة." }
            }
        };

        const skills = ["HTML & CSS", "JavaScript", "UI/UX Design", "React", "c++"];
        const projects = [
            { id: 1, key: 'project1', img: 'Screenshot 2026-02-16 160000.webp' },
            { id: 2, key: 'project2', img: 'Screenshot 2026-02-16 132212.webp' },
            { id: 3, key: 'project3', img: 'Screenshot 2026-02-16 132153.webp' },
            { id: 4, key: 'project4', img: 'Screenshot 2026-02-16 132016.webp' },
            { id: 5, key: 'project5', img: 'Screenshot 2026-02-16 123932.webp' }
        ];

        // --- State ---
        let currentLang = localStorage.getItem('lang') || 'en';
        let typingInterval;

        // --- DOM Elements ---
        const htmlEl = document.documentElement;
        const langBtn = document.getElementById('lang-toggle');
        const typingTextEl = document.getElementById('typing-text');
        const skillsList = document.getElementById('skills-list');
        const projectsGrid = document.getElementById('projects-grid');
        const contactForm = document.getElementById('social-container');
        const navLinks = document.querySelector('.nav-links');
        const header = document.getElementById('header');

        // --- Initialization ---
        function init() {
            setLanguage(currentLang);
            renderSkills();
            renderProjects();
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Event Listeners
            langBtn.addEventListener('click', toggleLanguage);
            window.addEventListener('scroll', handleScroll);
            contactForm.addEventListener('submit', handleFormSubmit);
            
            // Scroll Reveal Observer
            setupScrollReveal();
        }

        // --- Language Logic ---
        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
            
            // Set Direction
            htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
            htmlEl.setAttribute('lang', lang);
            
            // Update Button Text
            langBtn.textContent = lang === 'en' ? 'ع' : 'EN';
            
            // Update Text Content
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const value = getNestedValue(translations[lang], key);
                if (value) el.textContent = value;
            });

            // Re-render dynamic parts
            renderSkills();
            renderProjects();
            startTypingEffect();
        }

        function toggleLanguage() {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        }

        function getNestedValue(obj, path) {
            return path.split('.').reduce((o, i) => o ? o[i] : null, obj);
        }

        // --- Typing Effect ---
        function startTypingEffect() {
            clearInterval(typingInterval);
            const text = translations[currentLang].hero.role;
            let i = 0;
            typingTextEl.textContent = '';
            
            typingInterval = setInterval(() => {
                if (i < text.length) {
                    typingTextEl.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 80);
        }

        // --- Scroll Logic ---
        function handleScroll() {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active');
        }

        function toggleMobileMenu() {
            navLinks.classList.toggle('active');
        }

        // --- Scroll Reveal Animation ---
        function setupScrollReveal() {
            const reveals = document.querySelectorAll('.reveal');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.2 });

            reveals.forEach(el => observer.observe(el));
        }

        // --- Rendering ---
        function renderSkills() {
            skillsList.innerHTML = skills.map(skill => 
                `<span class="skill-badge">${skill}</span>`
            ).join('');
        }

        function renderProjects() {
            const t = translations[currentLang].work;
            projectsGrid.innerHTML = projects.map((p, index) => `
                <div class="project-card reveal" style="transition-delay: ${index * 0.1}s;">
                    <div class="project-img-wrapper">
                        <img src="${p.img}" alt="${t[p.key].title}" class="project-img">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${t[p.key].title}</h3>
                        <p class="project-desc">${t[p.key].desc}</p>
                                <button class="btn btn-outline" style="width: 100%;"  onclick ="document.location='${t[p.key].link}'"> ${t.view} </button>
                    </div>
                </div>
            `).join('');
            
            // Re-attach observer to new elements
            setupScrollReveal();
        }





        // --- Form Handling ---
        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = '...';
            btn.disabled = true;

            setTimeout(() => {
                successMsg.style.display = 'block';
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;
                
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 3000);
            }, 1000);
        }

        // Run
        init();