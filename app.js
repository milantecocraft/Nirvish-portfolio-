/* =========================================================
   Nirvisha portfolio - interactions
   ========================================================= */

/* ---------- Project data (also powers case-study modals) ---------- */
const PROJECTS = [
  {
    id: 'prega', title: 'Prega Center - Web', cats: ['healthcare', 'saas'],
    tags: ['Healthcare', 'Web'], desc: 'A reassuring maternity and pregnancy-care web platform for expecting parents.',
    overview: 'A warm, trustworthy website for a maternity and pregnancy-care center - appointments, expert guidance, and resources for parents-to-be.',
    challenge: 'Expecting parents needed calm, clear access to care information and bookings without feeling overwhelmed.',
    role: 'UX/UI Designer - research, information architecture, UI, and prototyping.',
    process: [['Research', 'Mapped parent needs across trimesters'], ['Wireframes', 'Simple, low-anxiety flows'], ['UI Design', 'Soft, caring visual system'], ['Prototype', 'Clickable Figma prototype']],
    results: [['Clearer', 'Care journey'], ['Faster', 'Appointment booking'], ['Warm', 'Brand feel']],
    tools: 'Figma', link: 'https://bit.ly/4jLbWme', linkType: 'Figma'
  },
  {
    id: 'salon', title: 'Salon Booking - PWA', cats: ['mobile', 'ecommerce'],
    tags: ['PWA', 'Booking', 'Mobile'], desc: 'A progressive web app to discover salons and book services in a few taps.',
    overview: 'A salon booking PWA spanning web and app - browse services, choose a stylist, and reserve a slot effortlessly.',
    challenge: 'Booking a salon appointment was clunky and inconsistent across devices.',
    role: 'UX/UI Designer - end-to-end product design for web and app.',
    process: [['Research', 'Studied salon booking habits'], ['Wireframes', 'Streamlined booking flow'], ['UI Design', 'Fresh, modern salon aesthetic'], ['Prototype', 'Web + app Figma design']],
    results: [['2-tap', 'Booking flow'], ['Cross-device', 'Consistent UX'], ['Higher', 'Conversion']],
    tools: 'Figma', link: 'https://bit.ly/4bnAtc1', linkType: 'Figma'
  },
  {
    id: 'proxe', title: 'Prox-E - Mobile App', cats: ['mobile', 'saas'],
    tags: ['Mobile', 'App'], desc: 'A clean mobile app experience with smooth onboarding and effortless flows.',
    overview: 'A modern mobile app concept focused on effortless onboarding and clear, friction-free everyday interactions.',
    challenge: 'The product needed an intuitive flow that new users could grasp instantly.',
    role: 'UX/UI Designer - flows, UI, and interactive prototype.',
    process: [['Research', 'Defined core user tasks'], ['Wireframes', 'Progressive, simple flows'], ['UI Design', 'Clean, confident interface'], ['Prototype', 'Interactive Figma prototype']],
    results: [['Faster', 'Onboarding'], ['Cleaner', 'Interface'], ['Smooth', 'Interactions']],
    tools: 'Figma', link: 'https://bit.ly/3UsLS3I', linkType: 'Figma'
  },
  {
    id: 'ldn', title: 'LDN Collective - Website', cats: ['saas'],
    tags: ['Web', 'Branding'], desc: 'A bold website for a London creative collective and its members.',
    overview: 'A distinctive website for a London-based creative collective - showcasing members, projects, and a strong brand voice.',
    challenge: 'A diverse collective needed one cohesive, striking online identity.',
    role: 'UX/UI Designer - web design and prototyping in Adobe XD.',
    process: [['Discovery', 'Defined the brand direction'], ['Wireframes', 'Editorial, content-led layout'], ['UI Design', 'Bold typographic system'], ['Prototype', 'Adobe XD prototype']],
    results: [['Cohesive', 'Brand identity'], ['Showcased', 'Members and work'], ['Memorable', 'Web presence']],
    tools: 'Adobe XD', link: 'https://adobe.ly/3FoGSFu', linkType: 'Adobe XD'
  },
  {
    id: 'firmpet', title: 'Firm Pet - Mobile App', cats: ['mobile', 'ecommerce'],
    tags: ['Mobile', 'Pet Care'], desc: 'A friendly pet-care app for profiles, reminders, and services.',
    overview: 'A warm, friendly pet-care app concept - manage pet profiles, set care reminders, and access services for pet parents.',
    challenge: 'Pet parents juggle care tasks across apps and notes with no single home.',
    role: 'UX/UI Designer - product design and prototyping in Adobe XD.',
    process: [['Research', 'Mapped pet-parent routines'], ['Wireframes', 'Task-focused flows'], ['UI Design', 'Playful, friendly visuals'], ['Prototype', 'Adobe XD prototype']],
    results: [['One home', 'For pet care'], ['Timely', 'Reminders'], ['Friendly', 'Experience']],
    tools: 'Adobe XD', link: 'https://adobe.ly/3Git8Os', linkType: 'Adobe XD'
  },
  {
    id: 'byjimmy', title: 'By Jimmy - Personalized Skincare', cats: ['ecommerce'],
    tags: ['E-commerce', 'Beauty', 'Shopify'], desc: 'A made-to-order skincare and haircare store built around a personalization quiz.',
    overview: 'A direct-to-consumer beauty brand where every serum, cleanser, and shampoo is compounded fresh to order. The storefront is built around a short Skin ID / Hair ID quiz that turns a complex lab process into a simple, guided flow.',
    challenge: 'Custom compounding is science-heavy. Shoppers had to trust the lab and the formulator without being buried in chemistry.',
    role: 'UX/UI Designer - storefront design, personalization quiz flow, and product page system.',
    process: [['Research', 'Mapped the personalization journey'], ['Wireframes', 'Guided Skin ID quiz flow'], ['UI Design', 'Clinical yet premium visual system'], ['Hand-off', 'Shopify-ready design system']],
    results: [['Guided', 'Personalization quiz'], ['Clear', 'Ingredient transparency'], ['Premium', 'Brand feel']],
    tools: 'Figma, Shopify', link: 'https://www.byjimmy.io/', linkType: 'Website'
  },
  {
    id: 'aurave', title: 'Auravé - Luxury Skincare', cats: ['ecommerce'],
    tags: ['E-commerce', 'Beauty', 'Shopify'], desc: 'A luxury botanical skincare store blending Ayurvedic ritual with modern science.',
    overview: 'A premium skincare brand rooted in Ayurvedic and Chinese botanical traditions. The storefront pairs warm, editorial imagery with ritual guides that teach customers how and when to use each product.',
    challenge: 'The brand needed to feel luxurious and ancestral without falling into the generic "clean beauty" visual cliché.',
    role: 'UX/UI Designer - brand-led storefront, product pages, and editorial content layouts.',
    process: [['Discovery', 'Defined the ritual-led brand direction'], ['Wireframes', 'Editorial, content-rich layouts'], ['UI Design', 'Warm, earthy system with serif type'], ['Hand-off', 'Shopify theme design']],
    results: [['Elevated', 'Luxury positioning'], ['Ritual-led', 'Customer education'], ['Cohesive', 'Brand story']],
    tools: 'Figma, Shopify', link: 'https://auraveskin.com/', linkType: 'Website'
  },
  {
    id: 'shaunzander', title: 'Shaun Zander Beauty - Cosmetics', cats: ['ecommerce'],
    tags: ['E-commerce', 'Cosmetics', 'Shopify'], desc: 'A long-wear cosmetics store for mature skin, with bilingual EN/TH support.',
    overview: 'A "Beauty Over 30" cosmetics brand focused on long-wear makeup for mature skin. The store serves a Thailand-based audience with full English/Thai support, local payment methods, and a risk-free trial offer.',
    challenge: 'An underserved demographic needed a store that felt modern and premium while staying reassuring - and it had to read well in two languages.',
    role: 'UX/UI Designer - storefront, product pages, and bilingual layout system.',
    process: [['Research', 'Studied the over-30 beauty shopper'], ['Wireframes', 'Trust-first product pages'], ['UI Design', 'Clean, confident cosmetics aesthetic'], ['Localization', 'Bilingual EN + TH layouts']],
    results: [['Bilingual', 'EN + TH storefront'], ['Risk-free', 'Trial framing'], ['Higher', 'Purchase confidence']],
    tools: 'Figma, Shopify', link: 'https://www.shaunzanderbeauty.com/', linkType: 'Website'
  },
  {
    id: 'twentytimestwo', title: 'Twenty Times Two - Eyewear Store', cats: ['ecommerce', 'healthcare'],
    tags: ['E-commerce', 'Eyewear', 'Healthcare'], desc: 'An independent optometry store selling eyewear alongside bookable eye care.',
    overview: 'An independent Melbourne optometry practice with a full e-commerce storefront - prescription glasses, contact lenses, and eye-care products sitting alongside bookable clinical services.',
    challenge: 'The site had to do two jobs at once: sell eyewear online and book clinical appointments, without either journey getting lost in the other.',
    role: 'UX/UI Designer - information architecture, storefront, and appointment booking flow.',
    process: [['Research', 'Separated shoppers from patients'], ['IA', 'Split retail and clinical journeys'], ['UI Design', 'Professional, trustworthy system'], ['Prototype', 'Booking + checkout flows']],
    results: [['Dual', 'Retail + clinical paths'], ['Simpler', 'Lens selection'], ['Trusted', 'Local eye care']],
    tools: 'Figma, Shopify', link: 'https://www.twentytimestwo.com.au/', linkType: 'Website'
  },
  {
    id: 'lumen', title: 'Lumen - Banking Dashboard', thumb: 'thumb-1', cats: ['fintech', 'mobile'],
    tags: ['Fintech', 'Mobile-first'], desc: 'A consumer banking app rebuilt around clarity and trust.',
    overview: 'A complete redesign of a consumer fintech app, focused on making everyday banking feel calm and effortless.',
    challenge: 'Users were dropping off during onboarding and struggled to find core actions in a cluttered interface.',
    role: 'Lead Product Designer - research, IA, UI, prototyping, and design-system foundations.',
    process: [['Research', 'Interviews + funnel analysis to find drop-off points'], ['Wireframes', 'Restructured IA and simplified key flows'], ['UI Design', 'Calm, trustworthy visual system'], ['Testing', 'Usability tests on prototypes before build']],
    results: [['+38%', 'Activation'], ['-22%', 'Support tickets'], ['4.8★', 'App rating']],
    tools: 'Figma, Maze, Spline, AI research tools',
    link: 'https://www.behance.net/search/projects?search=banking+dashboard+ux', linkType: 'Behance'
  },
  {
    id: 'atlas', title: 'Atlas - Analytics Platform', thumb: 'thumb-2', cats: ['saas'],
    tags: ['SaaS', 'Web App', 'Data Viz'], desc: 'A dense B2B analytics dashboard made genuinely legible.',
    overview: 'A B2B analytics platform redesign introducing a flexible data-visualization system used across 30+ screens.',
    challenge: 'Powerful but overwhelming - teams couldn’t extract insights quickly from a data-heavy UI.',
    role: 'Product Designer - design system, data-viz patterns, and core dashboard UI.',
    process: [['Audit', 'Heuristic review of existing screens'], ['Patterns', 'Reusable chart + table components'], ['System', 'Tokens and a scalable component library'], ['Validation', 'Stakeholder + user testing rounds']],
    results: [['3×', 'Faster shipping'], ['+30%', 'Feature adoption'], ['30+', 'Screens unified']],
    tools: 'Figma, Storybook hand-off, AI tools',
    link: 'https://www.behance.net/search/projects?search=analytics+dashboard+saas', linkType: 'Behance'
  },
  {
    id: 'bloom', title: 'Bloom - Wellness App', thumb: 'thumb-3', cats: ['mobile', 'healthcare'],
    tags: ['Health', 'Mobile', 'Branding'], desc: 'A calming habit-tracker with expressive motion.',
    overview: 'A wellness companion app with a warm brand, custom illustration, and an expressive interaction language.',
    challenge: 'Habit apps feel like chores. The product needed to feel supportive and rewarding, not punishing.',
    role: 'End-to-end Designer - brand, illustration direction, UI, and motion.',
    process: [['Discovery', 'Defined emotional goals + brand'], ['Wireframes', 'Low-friction daily flows'], ['Design', 'Soft visual system + micro-animations'], ['Testing', 'Beta cohort feedback loops']],
    results: [['+30%', 'Engagement'], ['+25%', 'Day-30 retention'], ['4.9★', 'App rating']],
    tools: 'Figma, Spline, Lottie, AI tools',
    link: 'https://www.behance.net/search/projects?search=wellness+health+app+design', linkType: 'Behance'
  },
  {
    id: 'forge', title: 'Forge - Developer Platform', thumb: 'thumb-4', cats: ['saas'],
    tags: ['Dev Tools', 'SaaS', 'Systems'], desc: 'IA and UI for a cloud tooling suite, plus its design system.',
    overview: 'End-to-end information architecture and UI for a developer cloud platform, plus the component library that scaled the team.',
    challenge: 'A deeply technical product was hard for new users to approach and slow for the team to build.',
    role: 'Senior Product Designer - IA, UI, and design-system ownership.',
    process: [['Research', 'Developer interviews + task analysis'], ['IA', 'Restructured navigation + mental models'], ['System', 'Component library + documentation'], ['Hand-off', 'Dev-ready specs and tokens']],
    results: [['-25%', 'Support load'], ['2×', 'Onboarding speed'], ['100+', 'Components']],
    tools: 'Figma, Storybook, AI tools',
    link: 'https://www.behance.net/search/projects?search=developer+platform+ui+design', linkType: 'Behance'
  },
  {
    id: 'tradeline', title: 'Tradeline - Trading App', thumb: 'thumb-5', cats: ['fintech', 'mobile'],
    tags: ['Fintech', 'Mobile'], desc: 'A retail trading experience that balances power and calm.',
    overview: 'A mobile-first retail trading app designed to make complex markets approachable without dumbing them down.',
    challenge: 'Trading UIs intimidate new investors while pros demand density. We needed both audiences served.',
    role: 'Product Designer - flows, UI, and prototyping.',
    process: [['Research', 'Segmented novice vs. pro needs'], ['Wireframes', 'Progressive disclosure flows'], ['UI', 'Clear hierarchy + confident defaults'], ['Testing', 'Prototype tests with both segments']],
    results: [['+45%', 'Sign-up conversion'], ['2 wks', 'Saved in sign-off'], ['4.7★', 'App rating']],
    tools: 'Figma, Maze, Spline',
    link: 'https://www.behance.net/search/projects?search=trading+fintech+app+ux', linkType: 'Behance'
  },
  {
    id: 'shopwave', title: 'ShopWave - E-commerce', thumb: 'thumb-6', cats: ['ecommerce', 'mobile'],
    tags: ['E-commerce', 'Mobile'], desc: 'A conversion-focused storefront and checkout redesign.',
    overview: 'A storefront and checkout redesign for a growing e-commerce brand, optimized for mobile conversion.',
    challenge: 'A leaky checkout funnel and inconsistent product pages were costing the brand real revenue.',
    role: 'UX/UI Designer - checkout flow, product pages, and design system.',
    process: [['Audit', 'Funnel + analytics review'], ['Wireframes', 'Streamlined 2-step checkout'], ['UI', 'Polished, trustworthy storefront'], ['Testing', 'A/B validated key changes']],
    results: [['+45%', 'Conversions'], ['-30%', 'Cart abandonment'], ['+18%', 'AOV']],
    tools: 'Figma, Hotjar, AI tools',
    link: 'https://shopwave.com/', linkType: 'Website'
  },
  {
    id: 'medix', title: 'Medix - Patient Portal', thumb: 'thumb-7', cats: ['healthcare', 'saas'],
    tags: ['Healthcare', 'SaaS'], desc: 'An accessible patient portal for booking and records.',
    overview: 'A patient portal redesign for booking, records, and messaging - with accessibility as a first-class requirement.',
    challenge: 'A wide range of users (including older patients) struggled with an inaccessible, confusing legacy portal.',
    role: 'Product Designer - accessibility, IA, and UI.',
    process: [['Research', 'Inclusive research across ages/abilities'], ['IA', 'Simplified core tasks'], ['Design', 'WCAG-AA compliant UI'], ['Testing', 'Assistive-tech validation']],
    results: [['AA', 'WCAG compliant'], ['+40%', 'Self-service bookings'], ['-35%', 'Call volume']],
    tools: 'Figma, axe, AI tools',
    link: 'https://www.behance.net/search/projects?search=healthcare+patient+portal+ux', linkType: 'Behance'
  },
  {
    id: 'questly', title: 'Questly - Gamified Learning', thumb: 'thumb-8', cats: ['saas', 'mobile'],
    tags: ['SaaS', 'Gamified'], desc: 'A gamified learning interface with playful progression.',
    overview: 'A gamified learning app with streaks, rewards, and playful progression that keeps learners coming back.',
    challenge: 'Course completion was low - learners lost motivation without feedback and momentum.',
    role: 'Lead Designer - gamification system, UI, and motion.',
    process: [['Discovery', 'Motivation + behavior research'], ['System', 'Points, streaks, and rewards model'], ['Design', 'Playful, rewarding UI'], ['Testing', 'Cohort retention experiments']],
    results: [['2.4×', 'Course completion'], ['+60%', 'Daily active use'], ['4.8★', 'App rating']],
    tools: 'Figma, Spline, Lottie',
    link: 'https://www.behance.net/search/projects?search=gamification+learning+app+design', linkType: 'Behance'
  },
  {
    id: 'nestpay', title: 'NestPay - Payments SaaS', thumb: 'thumb-9', cats: ['fintech', 'saas'],
    tags: ['Fintech', 'SaaS'], desc: 'A payments dashboard for merchants and finance teams.',
    overview: 'A payments and reconciliation dashboard for merchants, designed to make money movement transparent and fast.',
    challenge: 'Finance teams wrestled with opaque transaction data spread across disconnected views.',
    role: 'Product Designer - IA, dashboards, and design system.',
    process: [['Research', 'Finance-team workflow mapping'], ['Wireframes', 'Unified transaction views'], ['UI', 'Scannable data + clear states'], ['System', 'Reusable dashboard components']],
    results: [['-40%', 'Reconciliation time'], ['+33%', 'Task success'], ['NPS +28', 'Customer NPS']],
    tools: 'Figma, AI tools, Storybook',
    link: 'https://www.behance.net/search/projects?search=payments+fintech+dashboard+design', linkType: 'Behance'
  }
];

/* ---------- Project cover images (loaded from the internet) ----------
   Royalty-free Unsplash photos. If a URL ever fails, it falls back to a
   stable Lorem Picsum image so a card image always shows.
   Replace these with your real case-study screenshots when ready.        */
const IMAGES = {
  prega:     'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80',
  salon:     'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
  proxe:     'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
  ldn:       'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  firmpet:   'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=80',
  byjimmy:        'assets/projects/byjimmy.png',
  aurave:         'assets/projects/aurave.png',
  shaunzander:    'assets/projects/shaunzander.png',
  twentytimestwo: 'assets/projects/twentytimestwo.png',
  lumen:     'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80',
  atlas:     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  bloom:     'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
  forge:     'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  tradeline: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
  shopwave:  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80',
  medix:     'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  questly:   'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  nestpay:   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'
};
const fallbackImg = id => `https://picsum.photos/seed/${id}/900/620`;

/* ---------- Render project cards ---------- */
const grid = document.getElementById('projects');
if (grid) {
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project reveal" data-cats="${p.cats.join(' ')}" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.title} case study">
      <div class="project__thumb">
        <img src="${IMAGES[p.id]}" alt="${p.title} - project cover" decoding="async"
             onerror="this.onerror=null;this.src='${fallbackImg(p.id)}'">
      </div>
      <div class="project__body">
        <div class="project__tags">${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project__actions">
          <span class="project__link">View case study
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          ${p.link ? `<a class="project__file" href="${p.link}" target="_blank" rel="noopener" aria-label="Open ${p.title} ${p.linkType} file">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M6 2H3v11h10V6M10 2h4v4M14 2L7 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${p.linkType}</a>` : ''}
        </div>
      </div>
    </article>`).join('');
}

/* ---------- Filters ---------- */
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project').forEach(card => {
      const show = f === 'all' || card.dataset.cats.split(' ').includes(f);
      card.classList.toggle('hide', !show);
    });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
});

/* ---------- Case-study modal ---------- */
const modal = document.getElementById('modal');
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const hero = document.getElementById('modalHero');
  hero.className = 'modal__hero';
  hero.style.backgroundColor = '#16243c';
  hero.style.backgroundImage = `url("${IMAGES[p.id]}"), url("${fallbackImg(p.id)}")`;
  hero.innerHTML = `<span>${p.title.split(' - ')[0].trim()}</span>`;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalMeta').innerHTML = p.tags.map(t => `<span class="ptag">${t}</span>`).join('');
  document.getElementById('modalOverview').textContent = p.overview;
  document.getElementById('modalChallenge').textContent = p.challenge;
  document.getElementById('modalRole').textContent = p.role;
  document.getElementById('modalProcess').innerHTML = p.process.map(s => `<div class="modal__step"><b>${s[0]}</b><span>- ${s[1]}</span></div>`).join('');
  document.getElementById('modalResults').innerHTML = p.results.map(r => `<div class="modal__result"><div class="r">${r[0]}</div><div class="l">${r[1]}</div></div>`).join('');
  document.getElementById('modalTools').textContent = p.tools;
  const linkWrap = document.getElementById('modalLinkWrap');
  const linkEl = document.getElementById('modalLink');
  if (p.link) {
    linkWrap.style.display = '';
    linkEl.href = p.link;
    linkEl.querySelector('span').textContent = p.linkType === 'Website' ? 'Visit live website' : 'Open ' + p.linkType + ' file';
  } else {
    linkWrap.style.display = 'none';
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__panel').scrollTop = 0;
}
function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) { closeModal(); return; }
  if (e.target.closest('.project__file')) return; // let the Figma/XD link open
  const card = e.target.closest('.project');
  if (card) openModal(card.dataset.id);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Enter' && document.activeElement.classList.contains('project')) openModal(document.activeElement.dataset.id);
});

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq__item').forEach(item => {
  const q = item.querySelector('.faq__q');
  const a = item.querySelector('.faq__a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(o => { o.classList.remove('open'); o.querySelector('.faq__a').style.maxHeight = null; o.querySelector('.faq__q').setAttribute('aria-expanded', 'false'); });
    if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; q.setAttribute('aria-expanded', 'true'); }
  });
});

/* ---------- Header scroll state + active link ---------- */
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav__links a');
const sections = [...document.querySelectorAll('main section[id]')];
addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 30);
  let current = '';
  sections.forEach(s => { if (scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}, { passive: true });

/* ---------- Mobile nav ---------- */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const backdrop = document.getElementById('navBackdrop');
function toggleNav(open) {
  nav.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  backdrop.classList.toggle('show', open);
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.style.overflow = open ? 'hidden' : '';
}
burger.addEventListener('click', () => toggleNav(!nav.classList.contains('open')));
backdrop.addEventListener('click', () => toggleNav(false));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleNav(false)));

/* ---------- Contact form: validate + send to inbox via Web3Forms ---------- */
const form = document.getElementById('contactForm');
if (form) {
  const setErr = (id, bad) => document.getElementById(id).classList.toggle('err', bad);
  const status = document.getElementById('formStatus');
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn ? submitBtn.innerHTML : '';

  const showStatus = (msg, isError) => {
    status.textContent = msg;
    status.classList.toggle('err-status', !!isError);
    status.classList.add('show');
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setErr('f-name', !name); setErr('f-email', !emailOk); setErr('f-message', !message);
    if (!(name && emailOk && message)) return;

    const key = form.access_key ? form.access_key.value.trim() : '';
    // If the Web3Forms key hasn't been set yet, don't silently fail.
    if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      showStatus('Almost there - add your free Web3Forms access key in index.html to start receiving emails.', true);
      console.warn('[contact form] Set your Web3Forms access key: get one free at https://web3forms.com');
      return;
    }

    status.classList.remove('show', 'err-status');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Sending…'; }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      const data = await res.json();
      if (data.success) {
        showStatus("Thanks! Your message has been sent - I'll get back to you within 24 hours.", false);
        form.reset();
      } else {
        showStatus(data.message || 'Something went wrong. Please email me directly at nirvisha.v@gmail.com.', true);
      }
    } catch (err) {
      showStatus('Network error - please email me directly at nirvisha.v@gmail.com.', true);
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = btnText; }
    }
  });

  ['name', 'email', 'message'].forEach(n => form[n].addEventListener('input', () => form[n].closest('.field').classList.remove('err')));
}

/* ---------- GSAP reveals + counters ---------- */
addEventListener('load', () => {
  // Scroll progress bar
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);

  if (typeof gsap === 'undefined') {
    document.querySelectorAll('.reveal').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // Scroll progress scrub
  gsap.to('#scroll-progress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { scrub: 0.3, start: 'top top', end: 'bottom bottom' }
  });

  // Hero entrance — staggered
  gsap.to('.hero .reveal', {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.13, delay: 0.3
  });

  // Staggered grid helper
  const staggerIn = (selector, trigger) => {
    const els = gsap.utils.toArray(selector);
    if (!els.length) return;
    ScrollTrigger.create({
      trigger, start: 'top 85%', once: true,
      onEnter: () => gsap.fromTo(els,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.1 }
      )
    });
  };
  staggerIn('.stat', '.stats');
  staggerIn('.value', '.values');
  staggerIn('.service', '.services');
  staggerIn('.tstep', '.timeline');
  staggerIn('.testi', '.testimonials');
  staggerIn('.project', '.projects');

  // Skills chips stagger
  ScrollTrigger.create({
    trigger: '.skills', start: 'top 92%', once: true,
    onEnter: () => gsap.fromTo('.skill',
      { opacity: 0, scale: 0.75, y: 8 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)', stagger: 0.05 }
    )
  });

  // Section titles slide in from left
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      }
    );
  });

  // Eyebrows fade up
  gsap.utils.toArray('.eyebrow').forEach(el => {
    if (el.closest('.hero')) return;
    gsap.fromTo(el,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      }
    );
  });

  // Philosophy quote
  const phil = document.querySelector('.philosophy');
  if (phil) {
    gsap.fromTo(phil,
      { opacity: 0, scale: 0.97, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: phil, start: 'top 88%' }
      }
    );
  }

  // Remaining individual reveals (skip groups handled above)
  const groups = ['.stats', '.values', '.services', '.timeline', '.testimonials', '.projects'];
  gsap.utils.toArray('.reveal').forEach(el => {
    if (el.closest('.hero')) return;
    if (groups.some(s => el.closest(s))) return;
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    });
  });

  // Counters with stat icon entrance
  document.querySelectorAll('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count);
    const dec = el.dataset.decimal === 'true';
    const suffix = el.dataset.suffix || '';
    const obj = { v: 0 };
    const ic = el.closest('.stat')?.querySelector('.stat__ic');
    ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true,
      onEnter: () => {
        if (ic) gsap.fromTo(ic,
          { scale: 0.6, opacity: 0, rotate: -15 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.55, ease: 'back.out(2)' }
        );
        gsap.to(obj, { v: end, duration: 1.6, ease: 'power2.out',
          onUpdate: () => { el.textContent = (dec ? obj.v.toFixed(1) : Math.round(obj.v)) + suffix; }
        });
      }
    });
  });

  ScrollTrigger.refresh();
});
