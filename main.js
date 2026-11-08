const images = [
  'images/general-contracting.jpeg',
  'images/construction-buildings.jpeg',
  'images/engineering-design.jpg',
  'images/restoration-renovation.webp',
  'images/engineering-supervision.jpg',
  'images/project-management.jpeg',
];
const services = [
  {
    id: 'general-contracting',
    ar: { title: 'المقاولات العامة', description: 'تنفيذ أعمال المقاولات بمراحل واضحة وعناية بكل تفصيل.', features: ['استئجار شاحنات وحاملات', 'رافعات لنقل الطوب', 'أجهزة متكاملة'] },
    en: { title: 'General contracting', description: 'Construction services delivered with clear stages and care for every detail.', features: ['Truck and carrier rentals', 'Cranes for moving bricks', 'Integrated equipment'] },
  },
  {
    id: 'construction-buildings',
    ar: { title: 'الإنشاءات والمباني', description: 'حلول عملية للمباني السكنية والتجارية من التخطيط إلى التنفيذ.', features: ['بيع وشراء عقارات والأراضي', 'تأجير مراكز ومباني تجارية'] },
    en: { title: 'Construction & buildings', description: 'Practical residential and commercial building solutions, from planning through delivery.', features: ['Buying and selling properties and land', 'Leasing commercial centers and buildings'] },
  },
  {
    id: 'engineering-design',
    ar: { title: 'التصميم الهندسي', description: 'تصاميم مدروسة تجمع بين الرؤية الواضحة ومتطلبات التنفيذ.', features: ['تصميم هندسي متكامل من برامج حديثة', 'تصاميم جاهزة للاختيار', 'أعلى المعايير والكفاءة'] },
    en: { title: 'Engineering design', description: 'Considered designs that bring together a clear vision and practical requirements.', features: ['Complete engineering design using modern software', 'Ready-made designs to choose from', 'Highest standards and efficiency'] },
  },
  {
    id: 'restoration',
    ar: { title: 'الترميم والتجديد', description: 'إعادة تأهيل وتجديد المساحات بعناية في المواد والتنفيذ.', features: ['ترميم وتجديد كافة الخدمات', 'شمولية الخدمات في الترميم ومواد تشطيب أو ترميم', 'عمال ذو خبرة عالية في التصميم'] },
    en: { title: 'Restoration & renovation', description: 'Careful refurbishment and renewal, with attention to materials and execution.', features: ['Restoration and renewal of all services', 'Comprehensive restoration services and finishing or restoration materials', 'Skilled workers with strong design experience'] },
  },
  {
    id: 'engineering-supervision',
    ar: { title: 'الإشراف الهندسي', description: 'متابعة دقيقة تضمن وضوح العمل والتزام مراحل التنفيذ بالمعايير.', features: ['مراجعة الجودة والسلامة', 'إدارة سير العمل بين المقاولين والعمال', 'متابعة دقيقة لجميع مراحل المشروع'] },
    en: { title: 'Engineering supervision', description: 'Close oversight keeps every stage clear and aligned with quality standards.', features: ['Quality and safety reviews', 'Coordinating work between contractors and crews', 'Careful tracking of every project stage'] },
  },
  {
    id: 'project-management',
    ar: { title: 'إدارة المشاريع', description: 'تنظيم العمل والموارد والتواصل بين الفرق طوال دورة المشروع.', features: ['التخطيط والتنظيم', 'إدارة الموارد والتكاليف', 'متابعة التنفيذ والتسليم', 'التنسيق بين فرق العمل'] },
    en: { title: 'Project management', description: 'Organizing work, resources, and team communication throughout a project.', features: ['Planning and organization', 'Resource and cost management', 'Execution and delivery follow-up', 'Coordination between work teams'] },
  },
];

const copy = {
  ar: {
    nav: ['الرئيسية', 'من نحن', 'خدماتنا', 'آراء العملاء', 'تواصل معنا'],
    contact: 'تواصل معنا', heroKicker: 'نبني اليوم من أجل مستقبل أفضل', heroTitle: 'نصنع المستقبل', heroAccent: 'مشروعًا بعد مشروع',
    heroDescription: 'نقدم حلولًا متكاملة في مجال المقاولات والإنشاءات، مع الالتزام بأعلى معايير الجودة والدقة في جميع مراحل العمل.',
    explore: 'اكتشف خدماتنا', aboutCta: 'تواصل معنا', aboutKicker: 'من نحن', aboutTitle: 'نبني مشاريع تجمع بين', aboutAccent: 'الجودة والابتكار',
    aboutOne: 'نحن شركة متخصصة في أعمال المقاولات والإنشاءات، نضع احتياجات عملائنا والجودة والدقة في مقدمة أولوياتنا.',
    aboutTwo: 'نسعى إلى تقديم حلول هندسية ومقاولات إنشائية متكاملة. ونؤمن بأن كل مشروع ناجح يبدأ بتخطيط ممتاز، ويُبنى على الالتزام والعمل الاحترافي.',
    serviceKicker: 'خدماتنا', serviceTitle: 'حلول متكاملة لجميع', serviceAccent: 'مشاريع البناء', serviceDescription: 'نقدم مجموعة متكاملة من الخدمات الهندسية والإنشائية لمساعدتك على تحويل فكرتك إلى مشروع ناجح على أرض الواقع.',
    featureTitles: ['جودة عالية', 'فريق متخصص', 'التزام بالمواعيد', 'مصلحة العميل أولاً'],
    featureDescriptions: ['أفضل المعايير في التنفيذ.', 'مهندسون وخبراء محترفون.', 'تسليم المشاريع في الوقت المحدد.', 'رضا العميل أولوية قصوى.'],
    whyKicker: 'لماذا نحن؟', whyTitle: 'شريك موثوق لكل', whyAccent: 'مشروع بناء',
    whyDescription: 'نعمل بمعايير تنفيذ عالية، ونسعى لتقديم حلول عملية تجمع بين الجودة والسرعة والتكلفة المناسبة، مع متابعة دقيقة من البداية حتى التسليم.',
    whyPoints: ['خبرة واسعة في المشاريع السكنية والتجارية', 'التزام بالمواعيد وتقديم تقارير واضحة', 'فريق فني مدرب ومواد عالية الجودة'],
    whyValues: ['رضا العملاء', 'مراجعة فنية'],
    whyStats: ['أولوية قصوى', 'عناية بالتفاصيل', 'دعم فني'],
    processKicker: 'خطوات العمل', processTitle: 'كيف ننجز', processAccent: 'مشروعك',
    steps: [
      ['الاستشارة', 'نفهم احتياجك وهدفك والميزانية المتاحة قبل البدء.'],
      ['التخطيط', 'نضع الخطة التنفيذية والجدول الزمني ومتطلبات المشروع بدقة.'],
      ['التنفيذ', 'ننفذ بجودة عالية باستخدام فريق متخصص ومتابعة مستمرة.'],
      ['التسليم', 'نستعرض النتيجة النهائية ونتأكد من جودة الإنجاز والتجهيز.'],
    ],
    testimonialsKicker: 'آراء العملاء', testimonialsTitle: 'ما يقوله عملاؤنا عن', testimonialsAccent: 'تجربتهم',
    testimonials: [
      ['مهنية عالية، تنفيذ ممتاز، واهتمام كبير بالتفاصيل. المشروع تم تسليمه في الوقت المحدد. نشكر مدير التنفيذ محمد بلفقية على حسن عمله.', 'الدكتور عوض بلفقية', 'مالك مشروع تجاري'],
      ['فريق محترف جدًا، وقدموا حلولًا عملية وواضحة خلال جميع مراحل التنفيذ والإنشاء.', 'رغد بلفقية', 'مستثمرة عقارية'],
      ['من أفضل التجارب في التعامل مع المقاولات، جودة متقدمة، سرعة، واهتمام بالجوانب الأمنية.', 'عبد الله بلفقية', 'مدير مشروع سكني'],
    ],
    contactKicker: 'تواصل معنا', contactTitle: 'لنبدأ بناء', contactAccent: 'مشروعك القادم',
    contactDescription: 'لديك مشروع أو فكرة؟ تواصل معنا وسنكون سعداء بمساعدتك وتحويل فكرتك إلى واقع.',
    location: 'الموقع', name: 'الاسم الكامل', emailLabel: 'البريد الإلكتروني', phoneLabel: 'رقم الهاتف',
    suggestion: 'تفضل بمقترحك', send: 'إرسال الرسالة', sent: 'شكرًا لتواصلك معنا! سيتم الرد عليك في أقرب وقت.',
    quickLinks: 'روابط سريعة', footerServices: 'خدماتنا', copyright: '© 2026 Balfaqıh Construction — جميع الحقوق محفوظة',
    backServices: 'العودة إلى الخدمات', detailHeading: 'ما نقدمه', menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة', toTop: 'العودة إلى الأعلى',
  },
  en: {
    nav: ['Home', 'About', 'Services', 'Testimonials', 'Contact'],
    contact: 'Contact us', heroKicker: 'Building today for a better tomorrow', heroTitle: 'We shape the future', heroAccent: 'one project at a time',
    heroDescription: 'We provide integrated construction and contracting solutions, guided by high standards of quality and precision at every stage.',
    explore: 'Explore our services', aboutCta: 'Contact us', aboutKicker: 'About us', aboutTitle: 'Building projects that bring together', aboutAccent: 'quality and innovation',
    aboutOne: 'We specialize in construction and contracting, keeping client needs, quality, and precision at the center.',
    aboutTwo: 'We aim to deliver integrated engineering solutions and construction contracting. We believe every successful project begins with careful planning and is built on commitment and professional work.',
    serviceKicker: 'Our services', serviceTitle: 'Complete solutions', serviceAccent: 'for every building project', serviceDescription: 'A full range of engineering and construction services to turn your idea into a successful reality.',
    featureTitles: ['High quality', 'Specialist team', 'On-time delivery', 'Client comes first'],
    featureDescriptions: ['High standards at every stage.', 'Experienced engineers and specialists.', 'Projects delivered on schedule.', 'Client satisfaction is our top priority.'],
    whyKicker: 'Why us?', whyTitle: 'A trusted partner for every', whyAccent: 'building project',
    whyDescription: 'We work to high execution standards and offer practical solutions that balance quality, speed, and cost, with close follow-through from start to delivery.',
    whyPoints: ['Broad experience in residential and commercial work', 'Reliable schedules and clear reporting', 'Trained technical teams and quality materials'],
    whyValues: ['Client first', 'Technical review'],
    whyStats: ['Top priority', 'Attention to detail', 'Technical support'],
    processKicker: 'Our process', processTitle: 'How we deliver', processAccent: 'your project',
    steps: [
      ['Consultation', 'We understand your needs, goals, and budget before we begin.'],
      ['Planning', 'We set a precise execution plan, schedule, and project requirements.'],
      ['Execution', 'Our specialist team delivers with quality and consistent oversight.'],
      ['Handover', 'We review the finished work and confirm its quality and readiness.'],
    ],
    testimonialsKicker: 'Client voices', testimonialsTitle: 'What our clients say about', testimonialsAccent: 'their experience',
    testimonials: [
      ['Professional service, excellent execution, and great attention to detail. The project was delivered on time. We thank execution manager Mohammed Balfaqıh for his excellent work.', 'Dr. Awad Balfaqıh', 'Commercial project owner'],
      ['A highly professional team that offered clear, practical solutions throughout every stage of construction.', 'Raghad Balfaqıh', 'Real estate investor'],
      ['One of my best experiences with a contractor: high standards, efficiency, and careful attention to safety.', 'Abdullah Balfaqıh', 'Residential project manager'],
    ],
    contactKicker: 'Contact us', contactTitle: 'Let’s build', contactAccent: 'your next project',
    contactDescription: 'Have a project or an idea? Get in touch. We would be glad to help turn it into reality.',
    location: 'Location', name: 'Full name', emailLabel: 'Email address', phoneLabel: 'Phone number',
    suggestion: 'Share your suggestion', send: 'Send message', sent: 'Thank you for getting in touch. We will reply as soon as possible.',
    quickLinks: 'Quick links', footerServices: 'Services', copyright: '© 2026 Balfaqıh Construction — All rights reserved',
    backServices: 'Back to services', detailHeading: 'What we provide', menuOpen: 'Open menu', menuClose: 'Close menu', toTop: 'Back to top',
  },
};

const app = document.querySelector('#app');
let language = localStorage.getItem('balfaqih-language') || 'ar';
let menuExpanded = false;

let route = location.hash;
let shownDetail = null;

function currentDetail() {
  const match = route.match(/^#service-([a-z-]+)$/);
  return match ? services.find((item) => item.id === match[1]) : null;
}

function header(t, isDetail) {
  const labels = t.nav;
  const sectionLinks = ['#home', '#about', '#services', '#testimonials', '#contact'];
  return `<header class="site-header" id="site-header"><div class="container navbar">
    <a class="brand" href="#home" aria-label="Balfaqıh Construction home"><span class="brand-ar">${language === 'ar' ? 'بلفقية' : 'Balfaqıh'}</span><span class="brand-en">${language === 'ar' ? 'CONSTRUCTION' : 'CONSTRUCTION'}</span></a>
    <nav class="nav-links${menuExpanded ? ' open' : ''}" aria-label="${language === 'ar' ? 'القائمة الرئيسية' : 'Main navigation'}">
      ${labels.map((label, index) => `<a href="${sectionLinks[index]}" data-nav-link>${label}</a>`).join('')}
    </nav>
    <div class="head-actions"><a class="header-contact" href="#contact">${t.contact}</a><button class="language-toggle" type="button" data-action="language" aria-label="Switch language">${language === 'ar' ? 'EN' : 'عربي'}</button></div>
    <button class="menu-toggle" type="button" data-action="menu" aria-expanded="${menuExpanded}" aria-label="${menuExpanded ? t.menuClose : t.menuOpen}">${menuExpanded ? '×' : '≡'}</button>
  </div></header>`;
}

function footer(t) {
  return `<footer class="site-footer"><div class="container footer-grid">
    <div><h2 class="footer-brand">${language === 'ar' ? 'بلفقية للمقاولات' : 'Balfaqıh Construction'}</h2><p>${language === 'ar' ? 'حلول هندسية ومقاولات إنشائية متكاملة تجمع بين الجودة والابتكار.' : 'Integrated engineering and construction contracting, grounded in quality and innovation.'}</p></div>
    <div><h3>${t.quickLinks}</h3><div class="footer-links"><a href="#home">${t.nav[0]}</a><a href="#about">${t.nav[1]}</a><a href="#services">${t.nav[2]}</a><a href="#contact">${t.nav[4]}</a></div></div>
    <div><h3>${t.footerServices}</h3><div class="footer-links">${services.slice(0, 4).map((service) => `<a href="#service-${service.id}">${service[language].title}</a>`).join('')}</div></div>
  </div><div class="container copyright">${t.copyright}</div></footer>`;
}

function renderHome(t) {
  const heroImage = images[0];
  return `${header(t, false)}
    <main>
      <section class="hero" id="home" style="background-image:linear-gradient(90deg,rgba(14,33,43,.92),rgba(14,33,43,.62) 60%,rgba(14,33,43,.38)),url('${heroImage}')">
        <div class="container hero-content"><p class="eyebrow">${t.heroKicker}</p><h1>${t.heroTitle}<span>${t.heroAccent}</span></h1>
          <p class="hero-description">${t.heroDescription}</p><div class="hero-buttons"><a class="button button-primary" href="#services">${t.explore}</a><a class="button button-outline" href="#contact">${t.aboutCta}</a></div>
        </div><span class="hero-index">BF / 01 — 06</span>
      </section>
      <section class="about" id="about"><div class="container">
        <header class="about-heading"><p class="section-kicker">${t.aboutKicker}</p></header>
        <div class="about-copy"><h2 class="section-title">${t.aboutTitle}<br><span>${t.aboutAccent}</span></h2>
          <p class="section-description">${t.aboutOne}</p><p class="section-description">${t.aboutTwo}</p>
        </div>
        <div class="feature-grid">${t.featureTitles.map((title, index) => `<article class="feature-box"><h3>${title}</h3><p>${t.featureDescriptions[index]}</p></article>`).join('')}</div>
      </div></section>
      <section class="services" id="services"><div class="container">
        <header class="section-head"><p class="section-kicker">${t.serviceKicker}</p><h2 class="section-title">${t.serviceTitle}<br><span>${t.serviceAccent}</span></h2><p class="section-description">${t.serviceDescription}</p></header>
        <div class="service-grid" id="services-list">${services.map((service) => `<a class="service-card" href="#service-${service.id}" aria-label="${service[language].title}"><div><h3>${service[language].title}</h3><p>${service[language].description}</p></div><span class="service-arrow" aria-hidden="true">${language === 'ar' ? '←' : '→'}</span></a>`).join('')}</div>
      </div></section>
      <section class="why-us"><div class="container why-grid">
        <div class="why-copy"><p class="section-kicker">${t.whyKicker}</p><h2 class="section-title">${t.whyTitle}<br><span>${t.whyAccent}</span></h2><p class="section-description">${t.whyDescription}</p>
          <div class="why-points">${t.whyPoints.map((point) => `<div class="why-point">${point}</div>`).join('')}</div>
        </div>
        <div class="why-stats"><div class="mini-stat"><strong>${t.whyValues[0]}</strong><span>${t.whyStats[0]}</span></div><div class="mini-stat"><strong>${t.whyValues[1]}</strong><span>${t.whyStats[1]}</span></div><div class="mini-stat"><strong>24/7</strong><span>${t.whyStats[2]}</span></div></div>
      </div></section>
      <section class="process"><div class="container"><header class="section-head"><p class="section-kicker">${t.processKicker}</p><h2 class="section-title">${t.processTitle}<br><span>${t.processAccent}</span></h2></header>
        <div class="process-grid">${t.steps.map((step, index) => `<article class="process-step"><span class="process-num">0${index + 1} / 04</span><h3>${step[0]}</h3><p>${step[1]}</p></article>`).join('')}</div>
      </div></section>
      <section class="testimonials" id="testimonials"><div class="container"><header class="section-head"><p class="section-kicker">${t.testimonialsKicker}</p><h2 class="section-title">${t.testimonialsTitle}<br><span>${t.testimonialsAccent}</span></h2></header>
        <div class="testimonial-grid">${t.testimonials.map((item) => `<article class="testimonial-card"><span class="quote-mark" aria-hidden="true">“</span><p>${item[0]}</p><div class="client-info"><strong>${item[1]}</strong><span>${item[2]}</span></div></article>`).join('')}</div>
      </div></section>
      <section class="contact" id="contact"><div class="container contact-grid">
        <div><p class="section-kicker">${t.contactKicker}</p><h2 class="section-title">${t.contactTitle}<br><span>${t.contactAccent}</span></h2><p class="section-description">${t.contactDescription}</p>
          <div class="contact-info"><p><span>${t.location}</span><b>${language === 'ar' ? 'تركيا' : 'Türkiye'}</b></p><a href="tel:+905346984311"><span>${t.phoneLabel}</span><b dir="ltr">+905346984311</b></a><a href="mailto:mhmdbalfagyah@gmail.com"><span>${t.emailLabel}</span><b dir="ltr">mhmdbalfagyah@gmail.com</b></a></div>
        </div>
        <form class="contact-form" data-contact-form><input name="name" type="text" placeholder="${t.name}" aria-label="${t.name}" required><input name="email" type="email" placeholder="${t.emailLabel}" aria-label="${t.emailLabel}" required><input name="phone" type="tel" placeholder="${t.phoneLabel}" aria-label="${t.phoneLabel}"><textarea name="message" placeholder="${t.suggestion}" aria-label="${t.suggestion}" required></textarea><button class="button button-primary" type="submit">${t.send}</button></form>
      </div></section>
    </main>${footer(t)}<button class="scroll-top" type="button" data-action="top" aria-label="${t.toTop}">↑</button>`;
}

function renderDetail(t, service) {
  const index = services.indexOf(service);
  const item = service[language];
  return `${header(t, true)}<main class="detail-page">
    <section class="detail-hero" style="background-image:url('${images[index]}')">
      <div class="detail-hero-content">
        <a class="detail-back" href="#services-list">${language === 'ar' ? '→' : '←'} ${t.backServices}</a>
        <h1>${item.title}</h1>
        <p class="detail-description">${item.description}</p>
        <h2 class="detail-subheading">${t.detailHeading}</h2>
        <div class="detail-features">${item.features.map((feature) => `<article class="detail-feature"><h3>${feature}</h3></article>`).join('')}</div>
      </div>
    </section>
  </main>${footer(t)}<button class="scroll-top" type="button" data-action="top" aria-label="${t.toTop}">↑</button>`;
}

function render() {
  const t = copy[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = currentDetail() ? `${currentDetail()[language].title} | Balfaqıh Construction` : 'Balfaqıh Construction | بلفقية للمقاولات';
  shownDetail = currentDetail() ? currentDetail().id : null;
  menuExpanded = false;
  app.innerHTML = currentDetail() ? renderDetail(t, currentDetail()) : renderHome(t);
  const headerEl = document.querySelector('.site-header');
  const scrollButton = document.querySelector('.scroll-top');
  const updateScroll = () => {
    headerEl?.classList.toggle('is-fixed', window.scrollY > 45);
    scrollButton?.classList.toggle('visible', window.scrollY > 480);
  };
  updateScroll();
  window.onscroll = updateScroll;
  setupReveal();
}

const revealTargets = [
  '.about-heading', '.about-copy', '.feature-box',
  '.section-head', '.service-card',
  '.why-copy', '.mini-stat',
  '.process-step', '.testimonial-card',
  '.contact-grid > div', '.contact-form',
  '.footer-grid > div', '.copyright',
  '.detail-hero-content > *', '.detail-feature',
];
let revealObserver = null;

function setupReveal() {
  if (revealObserver) revealObserver.disconnect();
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      revealObserver.unobserve(el);
      el.classList.add('in');
      // drop the helper classes afterwards so hover transitions keep working
      window.setTimeout(() => el.classList.remove('reveal', 'in'), 1300);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll(revealTargets.join(',')).forEach((el) => {
    const siblings = Array.from(el.parentElement.children).filter((child) => child.matches(revealTargets.join(',')));
    el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 90}ms`);
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

app.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'language') {
    language = language === 'ar' ? 'en' : 'ar';
    localStorage.setItem('balfaqih-language', language);
    render();
  } else if (action === 'menu') {
    menuExpanded = !menuExpanded;
    document.querySelector('.nav-links')?.classList.toggle('open', menuExpanded);
    const button = document.querySelector('.menu-toggle');
    const t = copy[language];
    button.setAttribute('aria-expanded', String(menuExpanded));
    button.setAttribute('aria-label', menuExpanded ? t.menuClose : t.menuOpen);
    button.textContent = menuExpanded ? '×' : '≡';
  } else if (action === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (event.target.closest('[data-nav-link]')) {
    menuExpanded = false;
    document.querySelector('.nav-links')?.classList.remove('open');
  }
  // In-page links are handled here directly, so navigation does not depend on the browser firing hashchange.
  const link = event.target.closest('a[href^="#"]');
  if (link && link.getAttribute('href').length > 1) {
    event.preventDefault();
    navigate(link.getAttribute('href'));
  }
});

app.addEventListener('submit', (event) => {
  if (!event.target.matches('[data-contact-form]')) return;
  event.preventDefault();
  window.alert(copy[language].sent);
  event.target.reset();
});

function navigate(hash) {
  route = hash;
  try { if (location.hash !== hash) location.hash = hash; } catch (error) { /* the page still works without the address bar */ }
  const detail = currentDetail();
  const rerender = (detail ? detail.id : null) !== shownDetail;
  if (rerender) render();
  if (detail || hash === '#home' || !hash) {
    // service pages open centered on screen, so start from the top
    window.scrollTo({ top: 0, behavior: rerender ? 'instant' : 'smooth' });
  } else if (hash === '#services-list') {
    // coming back from a service: land on the six cards, centered when they fit
    window.setTimeout(() => {
      const grid = document.querySelector('#services-list');
      if (!grid) return;
      const box = grid.getBoundingClientRect();
      let top = window.scrollY + box.top;
      top -= box.height < window.innerHeight - 140 ? (window.innerHeight - box.height) / 2 : 100;
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    }, 0);
  } else {
    window.setTimeout(() => {
      try { document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (error) { /* unknown hash */ }
    }, 0);
  }
}

// back / forward buttons
window.addEventListener('hashchange', () => {
  if (location.hash !== route) navigate(location.hash);
});
render();
