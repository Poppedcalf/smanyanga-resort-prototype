/* Samanyanga Resort site refinement
   Add this file to the repository root, then include:
   <script src="./samanyanga-upgrade.js"></script>
   immediately before </body> in the existing index.html.
   The original embedded photos are never replaced or re-encoded. */
(() => {
  'use strict';

  const style = document.createElement('style');
  style.id = 'samanyanga-refinement';
  style.textContent = `
    :root{--night:#081a40;--lake:#17478a;--shallows:#80bbb8;--mist:#edf2f8;--gold:#e7b65b;--gold-d:#a96e1f;--white:#fffefa;--ink:#152321}
    html{scroll-padding-top:96px}
    body{line-height:1.65;letter-spacing:.005em}
    .wrap{width:min(1160px,calc(100% - 40px))}
    section{padding:clamp(68px,8vw,104px) 0}
    h1,h2,h3{letter-spacing:-.025em}
    h2{font-size:clamp(2.15rem,4vw,3.5rem);max-width:19ch;margin-bottom:20px}
    p{line-height:1.75}
    a,button,input,select{transition:background-color .2s ease,border-color .2s ease,color .2s ease,transform .2s ease,box-shadow .2s ease}
    :focus-visible{outline:3px solid var(--gold);outline-offset:4px}
    .bar{position:fixed;inset:0 0 auto;z-index:50;padding:12px 0;background:linear-gradient(180deg,rgba(5,19,49,.78),rgba(5,19,49,.12));transition:background .25s ease,box-shadow .25s ease,padding .25s ease}
    .bar.scrolled,.bar.nav-open{padding:9px 0;background:rgba(5,19,49,.96);box-shadow:0 8px 30px rgba(4,18,42,.18);backdrop-filter:blur(14px)}
    .bar .wrap{min-height:58px;gap:24px}
    .mark{width:45px;height:45px;border:1px solid rgba(231,182,91,.8);box-shadow:0 3px 14px rgba(0,0,0,.12)}
    .logo{font-size:1.22rem;font-weight:500;letter-spacing:.005em}
    .bar nav{display:flex;align-items:center;gap:clamp(16px,2.6vw,32px);font-size:.88rem}
    .bar nav a{position:relative;text-decoration:none;padding:8px 0;opacity:.92}
    .bar nav a:not(.btn)::after{content:"";position:absolute;left:0;right:100%;bottom:2px;height:1px;background:var(--gold);transition:right .2s}
    .bar nav a:not(.btn):hover::after{right:0}
    .bar nav a:not(.btn):hover{text-decoration:none}
    .bar nav a:last-child{padding:11px 18px;border-radius:999px;background:var(--gold);color:var(--night);opacity:1}
    .nav-toggle{display:none;align-items:center;justify-content:center;width:45px;height:45px;border:1px solid rgba(255,255,255,.55);border-radius:50%;background:rgba(255,255,255,.08);color:#fff;font-size:1.4rem;cursor:pointer}
    .hero{min-height:max(680px,100svh)}
    .hero .wrap{padding:0 0 clamp(65px,9vh,105px)}
    .hero h1{max-width:10.5ch;font-size:clamp(3.1rem,8.4vw,7rem);line-height:1.01;letter-spacing:-.055em;margin-bottom:22px;text-shadow:0 2px 24px rgba(13,42,48,.5);text-wrap:balance}
    .hero p{max-width:48ch;font-size:clamp(1.02rem,1.6vw,1.24rem);color:#f8f6ef;line-height:1.72;margin-bottom:30px}
    .hero-kicker{display:flex;align-items:center;gap:11px;font-size:.76rem!important;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:#f2c66f!important;margin-bottom:18px!important}
    .hero-kicker::before{content:"";width:30px;height:1px;background:var(--gold)}
    .btn{min-height:52px;padding:0 24px;border-radius:999px;font-size:.93rem;box-shadow:none}
    .btn:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(3,17,43,.16)}
    .btn.gold{background:var(--gold);color:#13264b;border-color:var(--gold)}
    .btn.gold:hover{background:#f5c977}
    .btn.ghost{background:rgba(255,255,255,.06);backdrop-filter:blur(5px)}
    .amen{padding:28px 0;background:#edf2f8;border-bottom:1px solid #dbe4ef}
    .amen li{gap:10px;font-size:.82rem;letter-spacing:.01em;color:#293a50}
    .amen svg{width:30px;height:30px}
    #rooms{background:#fffefa}
    .tabs{gap:10px;margin:25px 0 30px}
    .tabs button{max-width:none;min-width:105px;border:1px solid #c8d5e6;border-radius:999px;background:#f7f9fc;color:var(--lake);font-size:.92rem}
    .tabs button[aria-selected=true]{background:var(--lake);border-color:var(--lake);box-shadow:0 7px 18px rgba(18,63,140,.18)}
    .room{gap:clamp(24px,5vw,60px);align-items:center}
    .room .pic{aspect-ratio:1.08;border-radius:10px;background:#e4eaf2;box-shadow:0 22px 48px rgba(8,26,64,.12)}
    .room .pic img{object-position:center 58%}
    .badge{background:#f5dfac;color:#624116;border-radius:999px;font-size:.73rem;padding:6px 12px;letter-spacing:.04em;text-transform:uppercase}
    .room h3{font-size:clamp(1.7rem,3vw,2.25rem);margin:4px 0 12px}
    .room p{color:#586775;max-width:50ch}
    .room ul{padding-left:0;list-style:none;margin:18px 0 24px;color:#3c4c5d}
    .room li{position:relative;margin:9px 0;padding-left:27px}
    .room li::before{content:"✓";position:absolute;left:0;top:0;color:#a96e1f;font-weight:700}
    .rate{display:inline-block;margin:0 0 20px;padding:8px 13px;background:#f4f6fa;border-radius:6px;color:#59687b;font-size:.85rem;font-weight:600}
    .btn.dark{background:var(--night);border-color:var(--night);border-radius:999px}
    .btn.dark:hover{background:var(--lake)}
    .lake{position:relative;isolation:isolate;background:linear-gradient(120deg,#071838,#123d76 75%,#16548a);overflow:hidden}
    .lake::before{content:"";position:absolute;inset:0;z-index:-1;opacity:.13;background:radial-gradient(ellipse at 85% 10%,#82bebb,transparent 45%),linear-gradient(135deg,transparent 45%,#fff 45.2%,transparent 45.5%)}
    .lake h2{max-width:18ch;color:#fff}
    .lake>.wrap>p{max-width:68ch;color:#d8e3f0}
    .facts{gap:0;margin-top:42px;border-top:1px solid rgba(255,255,255,.2)}
    .facts>div{padding:27px 22px 0 0}
    .facts h3{font-size:1.3rem;color:#f0c36d;margin-bottom:10px}
    .facts p{font-size:.92rem;color:#d4dfed}
    .grid{gap:13px}
    .grid button{border-radius:8px;aspect-ratio:1.1;box-shadow:0 9px 24px rgba(8,26,64,.08)}
    .grid button:nth-child(1){aspect-ratio:2/1.05}
    .grid button:nth-child(6),.grid button:nth-child(7),.grid button:nth-child(8){aspect-ratio:2/1.05}
    .grid img{filter:saturate(.92);transition:transform .6s cubic-bezier(.2,.7,.2,1),filter .3s}
    .grid button:hover img{transform:scale(1.06);filter:saturate(1.06)}
    .grid .cap{border-radius:4px;background:rgba(7,24,56,.88);color:#fff;backdrop-filter:blur(6px);font-size:.74rem;padding:7px 11px}
    .note{font-size:.85rem;color:#718091;margin-top:18px}
    dialog{border-radius:10px;box-shadow:0 25px 90px rgba(0,0,0,.3)}
    dialog form{padding:14px 18px}
    .rev{background:#f0f4f8}
    .quotes{gap:17px}
    .quotes blockquote,.quotes article{border:1px solid #dce4ed;border-left:3px solid var(--gold);border-radius:6px;padding:25px;background:#fff;box-shadow:0 10px 30px rgba(8,26,64,.035)}
    .quotes h3{font-size:1.25rem;margin-bottom:10px;color:var(--night)}
    .quotes p{font-size:.9rem;color:#687786}
    details{max-width:none;padding:21px 0;border-color:#dbe2e9}
    summary{font-size:1rem}
    summary::after{flex:none}
    details p{max-width:65ch;color:#5e6d7e}
    .location{background:#fffefa}
    .location-wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,6vw,80px);align-items:center}
    .location-kicker{display:block;margin-bottom:14px;color:#a96e1f;font-size:.75rem;font-weight:700;letter-spacing:.17em;text-transform:uppercase}
    .location-wrap h2{max-width:14ch}
    .location-wrap>div:first-child>p{color:#637285;max-width:44ch}
    .location-card{display:flex;align-items:flex-start;gap:20px;padding:clamp(24px,4vw,38px);border:1px solid #dce4ed;border-radius:10px;background:#f5f7fa;box-shadow:0 18px 45px rgba(8,26,64,.06)}
    .location-pin{width:47px;height:47px;display:grid;place-items:center;flex:none;border-radius:50%;background:#e4ebf5;color:var(--lake);font-size:1.7rem}
    .location-card strong{font-family:var(--serif);font-weight:400;font-size:1.35rem;color:var(--night)}
    .location-card p{margin:7px 0 18px;color:#637285;font-size:.92rem}
    .location-card .btn{font-size:.85rem}
    .book{background:radial-gradient(circle at 85% 0%,rgba(127,180,176,.23),transparent 38%),linear-gradient(135deg,#123f8c,#081a40);padding-block:clamp(70px,8vw,100px)}
    form.enq{max-width:560px;margin-top:24px;padding:28px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.2);border-radius:10px;backdrop-filter:blur(8px)}
    form.enq label{font-size:.84rem;gap:7px;color:#f0f4fa}
    form.enq input,form.enq select{min-height:50px;border-radius:6px;border:1px solid #d5dce5;padding:0 13px;background:#fff}
    form.enq input:focus,form.enq select:focus{outline:3px solid rgba(231,182,91,.35);border-color:var(--gold)}
    form.enq .btn{width:100%;margin-top:5px}
    .alt{color:#d7e3ef;font-size:.88rem;margin-top:23px}
    .alt a{color:#fff;text-underline-offset:4px}
    footer{padding:48px 0 110px;background:#06132f;color:#aab9ce;font-size:.86rem}
    footer .logo{color:#fff}
    footer p{line-height:1.9}
    footer a{text-underline-offset:4px}
    .wa{right:20px;bottom:20px;gap:9px}
    .wa a{min-height:54px;padding:0 19px;box-shadow:0 10px 30px rgba(0,0,0,.25)}
    .wa a.call{width:54px}
    .reveal-item{opacity:0;transform:translateY(13px);transition:opacity .55s ease,transform .55s ease}
    .reveal-item.in-view{opacity:1;transform:none}
    @media(min-width:760px){.quotes{grid-template-columns:repeat(3,1fr)}.grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
    @media(max-width:759px){
      .wrap{width:calc(100% - 32px)}
      .bar{padding:8px 0;background:rgba(5,19,49,.93);backdrop-filter:blur(12px)}
      .bar .wrap{min-height:54px;gap:12px}
      .logo{font-size:1.04rem;gap:9px}
      .mark{width:39px;height:39px}
      .nav-toggle{display:flex;margin-left:auto;flex:none}
      .bar nav{display:none;position:fixed;top:70px;left:16px;right:16px;padding:12px 18px 18px;gap:0;align-items:stretch;flex-direction:column;background:rgba(5,19,49,.98);border:1px solid rgba(255,255,255,.15);border-radius:12px;box-shadow:0 18px 50px rgba(0,0,0,.25);backdrop-filter:blur(18px)}
      .bar.nav-open nav{display:flex}
      .bar nav a{padding:13px 5px;border-bottom:1px solid rgba(255,255,255,.12);font-size:.93rem}
      .bar nav a:last-child{margin-top:13px;padding:13px 16px;text-align:center;justify-content:center;border:0}
      .hero{min-height:max(670px,100svh)}
      .scene{object-position:50% 25%}
      .hero .wrap{padding-bottom:78px}
      .hero h1{font-size:clamp(3rem,12vw,5.2rem);max-width:10ch}
      .hero p{font-size:1.02rem;max-width:37ch}
      .amen{padding:25px 0}
      .amen ul{gap:25px 10px}
      .amen li{font-size:.78rem}
      .room.on{grid-template-columns:1fr;gap:23px}
      .room .pic{aspect-ratio:1.12}
      .room>div:last-child{padding-bottom:6px}
      .facts{grid-template-columns:1fr;gap:0;margin-top:25px}
      .facts>div{padding:21px 0;border-bottom:1px solid rgba(255,255,255,.16)}
      .facts>div:last-child{border:0}
      .facts h3{margin-bottom:5px}
      .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
      .grid button,.grid button:nth-child(1),.grid button:nth-child(6),.grid button:nth-child(7),.grid button:nth-child(8){grid-column:auto;aspect-ratio:1}
      .grid button:nth-child(1){grid-column:span 2;aspect-ratio:1.55}
      .grid button:nth-child(6) img{object-position:center 72%}
      .location-wrap{grid-template-columns:1fr;gap:24px}
      .location-card{padding:22px 18px}
      form.enq{padding:21px 16px}
      .two{gap:9px}
      .wa{right:12px;bottom:12px;gap:7px}
      .wa a{min-height:49px;padding:0 14px;font-size:.85rem}
      .wa a.call{width:49px}
    }
    @media(max-width:380px){.logo{font-size:.94rem}.hero h1{font-size:2.8rem}.btns .btn{padding-inline:17px}.two{grid-template-columns:1fr}.amen ul{grid-template-columns:repeat(2,1fr)}}
    @media(prefers-reduced-motion:no-preference){
      .hero h1,.hero-kicker,.hero .wrap>p,.hero .btns{animation:riseIn .75s both}
      .hero .wrap>p{animation-delay:.1s}
      .hero .btns{animation-delay:.18s}
      @keyframes riseIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
      .room .pic img{transition:transform .55s ease}
      .room .pic:hover img{transform:scale(1.025)}
    }
    @media(prefers-reduced-motion:reduce){.reveal-item{opacity:1;transform:none;transition:none}}
  `;
  document.head.appendChild(style);

  const title = 'Samanyanga Resort | Lake Kariba, Zimbabwe';
  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'Explore Samanyanga Resort in Kariba, Zimbabwe. Compare two-, three- and four-bedroom stays, discover Lake Kariba experiences, and enquire directly on WhatsApp.';
  document.head.appendChild(metaDescription);

  const bar = document.querySelector('.bar');
  const nav = bar && bar.querySelector('nav');
  if (bar && nav) {
    nav.id = 'mainNav';
    nav.setAttribute('aria-label', 'Main navigation');
    const links = [...nav.querySelectorAll('a')];
    const faqLink = links.find(a => a.getAttribute('href') === '#faq');
    if (faqLink && !links.some(a => a.getAttribute('href') === '#location')) {
      const locationLink = document.createElement('a');
      locationLink.href = '#location';
      locationLink.textContent = 'Location';
      faqLink.insertAdjacentElement('afterend', locationLink);
    }
    const bookLink = nav.querySelector('a[href="#book"]');
    if (bookLink) bookLink.textContent = 'Enquire';

    let toggle = document.getElementById('navToggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'nav-toggle';
      toggle.id = 'navToggle';
      toggle.type = 'button';
      toggle.textContent = '☰';
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', 'mainNav');
      nav.parentNode.insertBefore(toggle, nav);
    }

    const closeNav = () => {
      bar.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.textContent = '☰';
    };
    toggle.addEventListener('click', () => {
      const open = bar.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 760) closeNav(); });
  }

  const refreshHeader = () => {
    if (bar) bar.classList.toggle('scrolled', window.scrollY > 35);
  };
  window.addEventListener('scroll', refreshHeader, { passive: true });
  refreshHeader();

  const heroContent = document.querySelector('.hero > .wrap');
  const heroHeading = heroContent && heroContent.querySelector('h1');
  if (heroContent && heroHeading && !heroContent.querySelector('.hero-kicker')) {
    const kicker = document.createElement('p');
    kicker.className = 'hero-kicker';
    kicker.textContent = 'Lake Kariba · Zimbabwe';
    heroHeading.insertAdjacentElement('beforebegin', kicker);
  }

  document.querySelectorAll('.rate').forEach(el => {
    el.textContent = 'Rates confirmed on enquiry';
  });

  const lakeHeading = document.querySelector('#lake h2');
  if (lakeHeading) lakeHeading.textContent = 'Meet the magic of Lake Kariba';
  const lakeIntro = document.querySelector('#lake .wrap > p');
  if (lakeIntro) {
    lakeIntro.textContent = 'Open water, warm sunsets and a remarkable natural setting make the Kariba area a memorable place to slow down. Ask the team about experiences available during your dates.';
  }
  const galleryNote = document.querySelector('#gallery .note');
  if (galleryNote) {
    galleryNote.textContent = 'Explore the resort through the photo gallery. Confirm current facilities and views directly when planning your stay.';
  }

  const reviewWrap = document.querySelector('.rev .wrap');
  if (reviewWrap) {
    reviewWrap.innerHTML = `
      <h2>Plan your stay with confidence</h2>
      <p class="section-lead" style="max-width:680px;color:#657487;margin-bottom:25px">A few useful details can make the journey from browsing to booking easier. Contact the resort to confirm what matters for your dates.</p>
      <div class="quotes">
        <article><h3>Find the right space</h3><p>Compare two-, three- and four-bedroom options, then ask about current occupancy and room arrangements.</p></article>
        <article><h3>Confirm the essentials</h3><p>Check rates, check-in times and which amenities are available in your selected accommodation.</p></article>
        <article><h3>Make it a Kariba trip</h3><p>Ask about local fishing, cruises and other experiences that may be available while you are visiting.</p></article>
      </div>`;
  }

  document.querySelectorAll('#faq details').forEach(detail => {
    const summary = detail.querySelector('summary');
    const answer = detail.querySelector('p');
    if (!summary || !answer) return;
    const q = summary.textContent.toLowerCase();
    if (q.includes('check-in') || q.includes('check in')) {
      answer.textContent = 'Contact the resort to confirm current check-in and check-out times before travelling.';
    }
    if (q.includes('fishing') || q.includes('boat')) {
      answer.textContent = 'Ask the team about current recommendations and arrangements for fishing, cruises or other Lake Kariba experiences. Availability and costs should be confirmed directly.';
    }
  });

  const bookSection = document.querySelector('section.book');
  if (bookSection && !document.getElementById('location')) {
    bookSection.insertAdjacentHTML('beforebegin', `
      <section id="location" class="location">
        <div class="wrap location-wrap">
          <div>
            <span class="location-kicker">Find your way</span>
            <h2>Easy to find in Kariba.</h2>
            <p>Use the map search to plan your route, then contact the resort to confirm directions and arrival arrangements before setting off.</p>
          </div>
          <div class="location-card">
            <span class="location-pin" aria-hidden="true">⌖</span>
            <div><strong>Samanyanga Resort</strong><p>1139 Baobab Ridge, Kariba, Zimbabwe</p>
              <a class="btn gold" href="https://www.google.com/maps/search/?api=1&query=Samanyanga+Resort+1139+Baobab+Ridge+Kariba+Zimbabwe" target="_blank" rel="noopener noreferrer">Open map search ↗</a>
            </div>
          </div>
        </div>
      </section>`);
  }

  const altContact = document.querySelector('.book .alt');
  if (altContact) {
    altContact.innerHTML = 'Prefer to talk? <a href="https://wa.me/263714724575" target="_blank" rel="noopener noreferrer">WhatsApp +263 71 472 4575</a> or email <a href="mailto:reservations@samanyangaresort.com">reservations@samanyangaresort.com</a>';
  }
  document.querySelectorAll('a[href="mailto:reservation@samanyangaresort.com"]').forEach(a => {
    a.href = 'mailto:reservations@samanyangaresort.com';
    a.textContent = 'reservations@samanyangaresort.com';
  });
  const footerTagline = document.querySelector('footer .wrap > p');
  if (footerTagline) footerTagline.textContent = 'Room to unwind. Space to reconnect.';
  const callControl = document.querySelector('.wa a.call');
  if (callControl) {
    callControl.href = 'https://wa.me/263714724575';
    callControl.setAttribute('aria-label', 'Open WhatsApp contact');
  }

  const arrival = document.getElementById('in');
  const departure = document.getElementById('out');
  const localToday = () => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  };
  if (arrival && departure) {
    arrival.min = localToday();
    departure.min = localToday();
    arrival.addEventListener('change', () => {
      departure.min = arrival.value || localToday();
      if (departure.value && departure.value <= arrival.value) {
        const d = new Date(arrival.value + 'T12:00:00');
        d.setDate(d.getDate() + 1);
        departure.value = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      }
    });
  }

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('#rooms .room,.facts>div,.grid button,.quotes article,#faq details,.location-card').forEach(el => {
      el.classList.add('reveal-item');
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('#rooms .room,.facts>div,.grid button,.quotes article,#faq details,.location-card').forEach(el => el.classList.add('in-view'));
  }
})();
