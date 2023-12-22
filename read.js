document.addEventListener('DOMContentLoaded', function() {
    // Animasi sederhana saat halaman dimuat
    animateOnLoad();

    // Fungsi animasi sederhana
    function animateOnLoad() {
        const menuItems = document.querySelectorAll('ul li');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.animation = `fadeIn 0.5s ease ${index / 5}s forwards`;
        });
    }
});
