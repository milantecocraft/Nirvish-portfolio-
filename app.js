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
    id: 'vidboard', title: 'vidBoard.ai - AI Video Platform', cats: ['saas'],
    tags: ['SaaS', 'AI', 'Web'], desc: 'An AI video platform that turns docs, links, or prompts into avatar-led videos.',
    overview: 'A SaaS platform where users generate studio-quality, avatar-led videos with voices and captions from a doc, link, or prompt - no camera or filming required.',
    challenge: 'A powerful AI pipeline had to feel effortless, so non-editors could go from prompt to finished video in minutes.',
    role: 'UX/UI Designer - marketing site, product flows, and design system.',
    process: [['Research', 'Mapped creator + marketer workflows'], ['Wireframes', 'Prompt-to-video flow'], ['UI Design', 'Confident, modern SaaS system'], ['Prototype', 'Interactive editor concepts']],
    results: [['Faster', 'Video creation'], ['Clearer', 'AI onboarding'], ['Higher', 'Trial sign-ups']],
    tools: 'Figma', link: 'https://www.vidboard.ai/', linkType: 'Website'
  },
  {
    id: 'mionio', title: 'Mionio Outdoor - Website', cats: ['saas'],
    tags: ['Web', 'Outdoor', 'Brand'], desc: 'A product showcase site for a maker of bioclimatic pergolas and canopies.',
    overview: 'A clean, image-led website for an outdoor-structures brand - showcasing bioclimatic pergolas, carports, and canopies for residential and commercial projects, with a quote-request flow.',
    challenge: 'A technical product line needed to feel premium and easy to browse, guiding visitors toward a quote rather than a cart.',
    role: 'UX/UI Designer - IA, product-category pages, and lead flow.',
    process: [['Discovery', 'Mapped product categories'], ['Wireframes', 'Visual, project-led layouts'], ['UI Design', 'Minimalist, premium system'], ['Prototype', 'Quote-request flow']],
    results: [['Premium', 'Brand feel'], ['Clearer', 'Product browsing'], ['More', 'Quote requests']],
    tools: 'Figma', link: 'https://mionioutdoor.com/', linkType: 'Website'
  },
  {
    id: 'thexmedia', title: 'TheXMedia - Agency Website', cats: ['saas'],
    tags: ['Agency', 'Marketing', 'Web'], desc: 'A results-led site for a personal-branding and content agency.',
    overview: 'A bold website for a personal-branding agency that produces viral short-form content and lead generation for professionals - built around social proof and client success stories.',
    challenge: 'The site had to sell trust fast, foregrounding real results (views, followers, clients) without feeling cluttered.',
    role: 'UX/UI Designer - site design, case-study layouts, and CTAs.',
    process: [['Research', 'Studied the target professional'], ['Wireframes', 'Proof-first page structure'], ['UI Design', 'Bold, contemporary system'], ['Prototype', 'Lead-capture flow']],
    results: [['Trust-first', 'Social proof'], ['Stronger', 'Conversion path'], ['Cohesive', 'Brand story']],
    tools: 'Figma', link: 'https://www.thexmedia.com/', linkType: 'Website'
  },
  {
    id: 'neuvera', title: 'Neuvera Life - Wellness Store', cats: ['ecommerce', 'healthcare'],
    tags: ['E-commerce', 'Wellness', 'Shopify'], desc: 'A clinical-yet-clean store for dissolving daily wellness strips.',
    overview: 'A Shopify wellness brand selling oral dissolving strips as a needle-free alternative to peptide injectables. The storefront lets users build custom routines and manage subscriptions.',
    challenge: 'A science-forward product needed to feel both clinically credible and effortless to shop.',
    role: 'UX/UI Designer - storefront, routine builder, and subscription flow.',
    process: [['Research', 'Mapped the wellness shopper'], ['Wireframes', 'Routine-builder flow'], ['UI Design', 'Minimal, clinical system'], ['Hand-off', 'Shopify-ready design']],
    results: [['Credible', 'Clinical feel'], ['Guided', 'Routine builder'], ['Recurring', 'Subscriptions']],
    tools: 'Figma, Shopify', link: 'https://neuveralife.com/', linkType: 'Website'
  },
  {
    id: 'engravables', title: 'Engravables - Custom Gifts Store', cats: ['ecommerce'],
    tags: ['E-commerce', 'Custom Gifts', 'Shopify'], desc: 'A premium personalized-gift store organized by occasion and recipient.',
    overview: 'A Shopify store for a 45-year-old engraving house - custom-engraved pens, jewellery, flasks, and awards, organised by occasion and recipient for easy gifting.',
    challenge: 'A huge, personalizable catalogue had to feel simple to shop and trustworthy for gifting.',
    role: 'UX/UI Designer - IA, collection pages, and personalization UI.',
    process: [['Research', 'Mapped gifting journeys'], ['Wireframes', 'Occasion + recipient nav'], ['UI Design', 'Premium, trustworthy system'], ['Hand-off', 'Shopify theme design']],
    results: [['Simpler', 'Gift discovery'], ['Clearer', 'Personalization'], ['Premium', 'Brand feel']],
    tools: 'Figma, Shopify', link: 'http://engravables.ca/', linkType: 'Website'
  },
  {
    id: 'elevenfarms', title: '11 Farms - Fresh Produce Brand', cats: ['ecommerce'],
    tags: ['E-commerce', 'Agri-tech', 'Brand'], desc: 'A modern brand and store for pesticide-free, vertically farmed produce.',
    overview: 'A health-conscious brand and store for a vertical farm delivering pesticide-free, year-round fresh produce via subscription and direct sales.',
    challenge: 'The brand had to feel premium and fresh, making subscriptions the obvious way to buy.',
    role: 'UX/UI Designer - brand-led site, product pages, and subscription flow.',
    process: [['Discovery', 'Defined the fresh, clean brand'], ['Wireframes', 'Subscription-first layout'], ['UI Design', 'Bright, health-forward system'], ['Prototype', 'Subscription flow']],
    results: [['Premium', 'Produce brand'], ['Clear', 'Subscription value'], ['Fresh', 'Visual identity']],
    tools: 'Figma', link: 'https://11farms.co/', linkType: 'Website'
  },
  {
    id: 'bit', title: 'Bit.com - Crypto Exchange', cats: ['fintech', 'saas'],
    tags: ['Fintech', 'Crypto', 'Web'], desc: 'A regulated exchange for crypto, US stocks, and real-world assets.',
    overview: 'A regulated trading platform where users trade crypto, invest in US stocks, and access real-world assets from one account - backed by billions in custody across multiple licenses.',
    challenge: 'A dense, high-stakes financial product had to feel trustworthy and approachable for new and pro traders alike.',
    role: 'UX/UI Designer - marketing site, sign-up flow, and trust UI.',
    process: [['Research', 'Segmented novice vs. pro traders'], ['Wireframes', 'Clear onboarding flow'], ['UI Design', 'Confident, secure system'], ['Prototype', 'Sign-up + trust flows']],
    results: [['Trusted', 'Regulated feel'], ['Clearer', 'Onboarding'], ['Higher', 'Sign-up intent']],
    tools: 'Figma', link: 'https://www.bit.com/', linkType: 'Website'
  },
  {
    id: 'legalspace', title: 'Legalspace - AI Legal Platform', cats: ['saas'],
    tags: ['SaaS', 'Legal', 'AI'], desc: 'An all-in-one AI platform for lawyers to research, draft, and manage.',
    overview: 'An AI legal-software platform built for Indian lawyers, law firms, and corporate legal teams - research, drafting, matter management, and an AI legal library in one place.',
    challenge: 'A feature-rich legal tool had to feel reliable and simple enough for busy legal professionals to trust daily.',
    role: 'UX/UI Designer - marketing site, product IA, and dashboards.',
    process: [['Research', 'Mapped legal workflows'], ['Wireframes', 'Unified workspace IA'], ['UI Design', 'Reliable, professional system'], ['Prototype', 'Research + drafting flows']],
    results: [['Trusted', 'By 3,500+ pros'], ['Unified', 'Legal workspace'], ['Faster', 'Drafting']],
    tools: 'Figma', link: 'https://legalspace.ai/', linkType: 'Website'
  },
  {
    id: 'memusic', title: 'MeMusic - Music Platform', cats: ['saas'],
    tags: ['Music', 'Web3', 'Web'], desc: 'A blockchain-based music platform blending crypto with a familiar model.',
    overview: 'A "music for everyone" platform - a blockchain-based music service pairing cryptocurrency with a traditional business model, built to onboard mainstream listeners.',
    challenge: 'Web3 concepts had to disappear behind a warm, familiar music experience anyone could use.',
    role: 'UX/UI Designer - brand site, product concepts, and design system.',
    process: [['Discovery', 'Defined the approachable brand'], ['Wireframes', 'Familiar music flows'], ['UI Design', 'Soft, friendly system'], ['Prototype', 'Onboarding + player concepts']],
    results: [['Approachable', 'Web3 UX'], ['Warm', 'Brand identity'], ['Clear', 'Value story']],
    tools: 'Figma', link: 'https://www.memusic.io/', linkType: 'Website'
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
  vidboard:    'assets/projects/vidboard.png',
  mionio:      'assets/projects/mionio.png',
  thexmedia:   'assets/projects/thexmedia.png',
  neuvera:     'assets/projects/neuvera.webp',
  engravables: 'assets/projects/engravables.webp',
  elevenfarms: 'assets/projects/elevenfarms.webp',
  bit:         'assets/projects/bit.png',
  legalspace:  'assets/projects/legalspace.webp',
  memusic:     'assets/projects/memusic.png'
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

/* ============================================================
   HERO PIPELINE — cursor parallax tilt
   ============================================================ */
(function () {
  var scene = document.getElementById('pipeline');
  var stack = document.getElementById('pipelineStack');
  if (!scene || !stack) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  var raf = 0, rx = 0, ry = 0;
  function apply() {
    raf = 0;
    stack.style.setProperty('--rx', rx.toFixed(2) + 'deg');
    stack.style.setProperty('--ry', ry.toFixed(2) + 'deg');
  }
  scene.addEventListener('mousemove', function (e) {
    var r = scene.getBoundingClientRect();
    rx = (0.5 - (e.clientY - r.top) / r.height) * 12;
    ry = ((e.clientX - r.left) / r.width - 0.5) * 14;
    if (!raf) raf = requestAnimationFrame(apply);
  });
  scene.addEventListener('mouseleave', function () {
    rx = 0; ry = 0;
    if (!raf) raf = requestAnimationFrame(apply);
  });
})();

/* ============================================================
   MAGNETIC HERO BUTTONS — lean toward the cursor
   (keeps the -3px hover lift baked into the transform)
   ============================================================ */
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.hero__cta .btn').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - (r.left + r.width / 2)) * 0.28;
      var y = (e.clientY - (r.top + r.height / 2)) * 0.28;
      btn.style.transform = 'translate(' + x.toFixed(1) + 'px,' + (y - 3).toFixed(1) + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = '';
    });
  });
})();
