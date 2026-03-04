/* ============================================
   MazeRiders Pitch Deck — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initProgressBar();
    initNavScroll();
    initNavToggle();
    initScrollAnimations();
    initParticles();
    initMazePreview();
    initStatusBarAnimations();
    initActiveNav();
    initContactEmailCopy();
});

// --- Progress Bar ---
function initProgressBar() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    }, { passive: true });
}

// --- Nav scroll effect ---
function initNavScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });
}

// --- Mobile nav toggle ---
function initNavToggle() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    // Close on link click
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
        });
    });
}

// --- Scroll Animations (Intersection Observer) ---
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.card, .card-glow, .pillar-card, .system-card, .tech-item, .loop-node, ' +
        '.team-card, .timeline-item, .art-placeholder, .profile-card, .comparison-table-wrapper, ' +
        '.highlight-box, .phase-callout, .tech-highlights, .contact-card, .status-section'
    );

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animations from same parent
                const siblings = entry.target.parentElement.querySelectorAll('.fade-in');
                let delay = 0;
                siblings.forEach((sib) => {
                    if (sib === entry.target) return;
                });

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// --- Hero Particles ---
function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const count = 30;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = (50 + Math.random() * 50) + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 6) + 's';

        container.appendChild(particle);
    }
}

// --- Mini Maze Preview ---
function initMazePreview() {
    const preview = document.getElementById('maze-preview');
    if (!preview) return;

    const cols = 7;
    const rows = 4;
    const maze = [
        [1, 1, 0, 0, 0, 1, 1],
        [1, 0, 0, 2, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 1],
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('maze-cell');

            if (maze[r][c] === 1) {
                cell.classList.add('wall');
            } else if (maze[r][c] === 2) {
                cell.classList.add('player');
            } else {
                cell.classList.add('path');
            }

            preview.appendChild(cell);
        }
    }

    // Animate player movement
    let playerPos = { r: 1, c: 3 };
    setInterval(() => {
        const cells = preview.querySelectorAll('.maze-cell');

        // Clear old player
        cells.forEach(c => c.classList.remove('player'));

        // Move randomly
        const dirs = [
            { r: 0, c: 1 }, { r: 0, c: -1 },
            { r: 1, c: 0 }, { r: -1, c: 0 }
        ];
        const validMoves = dirs.filter(d => {
            const nr = playerPos.r + d.r;
            const nc = playerPos.c + d.c;
            return nr >= 0 && nr < rows && nc >= 0 && nc < cols && maze[nr][nc] !== 1;
        });

        if (validMoves.length > 0) {
            const move = validMoves[Math.floor(Math.random() * validMoves.length)];
            playerPos.r += move.r;
            playerPos.c += move.c;
        }

        const idx = playerPos.r * cols + playerPos.c;
        if (cells[idx]) cells[idx].classList.add('player');

    }, 600);
}

// --- Status Bar Animations ---
function initStatusBarAnimations() {
    const bars = document.querySelectorAll('.sbar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Bars animate via CSS --progress variable, 
                // but need initial width:0 → target
                entry.target.style.width = '0%';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        entry.target.style.width = entry.target.style.getPropertyValue('--progress');
                    });
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    bars.forEach(bar => observer.observe(bar));
}

// --- Active Nav Tracking ---
function initActiveNav() {
    const sections = document.querySelectorAll('.slide[id]');
    const links = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// --- Contact email copy ---
function initContactEmailCopy() {
    const grid = document.querySelector('.contact-grid');
    if (!grid) return;

    const items = grid.querySelectorAll('.contact-item');
    if (items.length === 1) {
        grid.classList.add('single-item');
    }

    const copyButtons = grid.querySelectorAll('.copy-email-btn[data-copy-text]');
    copyButtons.forEach((button) => {
        button.addEventListener('click', async () => {
            const email = button.dataset.copyText;
            if (!email) return;

            const originalLabel = button.textContent;
            const copied = await copyTextToClipboard(email);

            if (copied) {
                button.classList.add('copied');
                button.textContent = 'Copied';
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.textContent = originalLabel;
                }, 1200);
            }
        });
    });
}

async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (_) {
            // Fallback below.
        }
    }

    const fallback = document.createElement('textarea');
    fallback.value = text;
    fallback.setAttribute('readonly', '');
    fallback.style.position = 'fixed';
    fallback.style.top = '-9999px';
    document.body.appendChild(fallback);
    fallback.select();

    let copied = false;
    try {
        copied = document.execCommand('copy');
    } catch (_) {
        copied = false;
    }

    document.body.removeChild(fallback);
    return copied;
}
