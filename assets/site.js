(function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 550,
            easing: 'ease-out-cubic',
            once: true
        });
    }

    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    var menuBtn = document.getElementById('menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            var expanded = !mobileMenu.classList.contains('hidden');
            menuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            var el = document.querySelector(id);
            if (!el) return;
            e.preventDefault();
            if (mobileMenu) mobileMenu.classList.add('hidden');
            el.scrollIntoView({ behavior: 'smooth' });
        });
    });
})();
