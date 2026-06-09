/* ============================================
   RiftHunters — Demo Showcase JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initProgressBar();
    initNavScroll();
    initNavToggle();
    initScrollAnimations();
    initParticles();
    initActiveNav();
    initEmailCopy();
    initVideoOverlay();
});

function initProgressBar() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = pct + '%';
    }, { passive: true });
}

function initNavScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

function initNavToggle() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('.nav-link').forEach(l => {
        l.addEventListener('click', () => links.classList.remove('open'));
    });
}

function initScrollAnimations() {
    const els = document.querySelectorAll(
        '.pillar-card, .gallery-item, .tech-item, .loop-node, ' +
        '.team-card, .rm-item, .cta-card, .status-col, .tech-note, .status-badge'
    );
    els.forEach(el => el.classList.add('fade-in'));

    const obs = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 40);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
}

function initParticles() {
    const c = document.getElementById('hero-particles');
    if (!c) return;
    for (let i = 0; i < 24; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const s = Math.random() * 3 + 2;
        Object.assign(p.style, {
            width: s + 'px',
            height: s + 'px',
            left: Math.random() * 100 + '%',
            top: (50 + Math.random() * 50) + '%',
            animationDelay: Math.random() * 8 + 's',
            animationDuration: (6 + Math.random() * 6) + 's'
        });
        c.appendChild(p);
    }
}

function initActiveNav() {
    const sections = document.querySelectorAll('.section[id], .hero[id]');
    const links = document.querySelectorAll('.nav-link');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });
    sections.forEach(s => obs.observe(s));
}

function initEmailCopy() {
    document.querySelectorAll('.copy-email-btn[data-copy-text]').forEach(btn => {
        btn.addEventListener('click', async () => {
            const email = btn.dataset.copyText;
            if (!email) return;
            const ok = await copyText(email);
            if (ok) {
                btn.classList.add('copied');
                const span = btn.querySelector('span');
                const orig = span ? span.textContent : btn.textContent;
                if (span) span.textContent = 'Copied!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    if (span) span.textContent = orig;
                }, 1500);
            }
        });
    });
}

async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try { await navigator.clipboard.writeText(text); return true; } catch (_) {}
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
    return ok;
}

function initVideoOverlay() {
    const playBtn = document.getElementById('video-play-btn');
    const overlay = document.getElementById('video-overlay');
    const closeBtn = document.getElementById('video-overlay-close');
    const iframe = document.getElementById('video-iframe');
    if (!playBtn || !overlay || !iframe) return;

    const src = iframe.getAttribute('data-src');

    function open() {
        iframe.setAttribute('src', src);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => iframe.setAttribute('src', ''), 400);
    }

    playBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) close();
    });
}
