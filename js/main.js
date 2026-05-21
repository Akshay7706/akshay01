document.addEventListener('DOMContentLoaded', function () {
  var nav       = document.getElementById('myTopnav');
  var hamburger = document.getElementById('navHamburger');
  var hero      = document.getElementById('heroSection');

  // ── 1. Set hero margin to avoid fixed-nav overlap ──
  function setHeroMargin() {
    if (nav && hero) {
      hero.style.marginTop = nav.offsetHeight + 'px';
    }
  }
  setHeroMargin();
  window.addEventListener('resize', function () { setHeroMargin(); });

  // ── 2. Mobile hamburger toggle ──
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
      setTimeout(setHeroMargin, 10);
    });
  }

  // ── 3. Close nav when a link is tapped (mobile) ──
  if (nav) {
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        setTimeout(setHeroMargin, 10);
      });
    });
  }

  // ── 4. Deepen nav shadow on page scroll ──
  window.addEventListener('scroll', function () {
    if (!nav) return;
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 14px rgba(0,0,0,0.14)'
      : '0 1px 4px rgba(0,0,0,0.08)';
  });

  // ── 5. Highlight active navigation link ──
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (nav) {
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href !== '#' && page === href) {
        a.classList.add('active');
      }
    });
  }
});
