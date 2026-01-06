// Mengatur Intersection Observer untuk efek reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Efek Paralaks Ringan pada Profil
document.addEventListener('mousemove', (e) => {
    const img = document.querySelector('.profile-img');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    if (img) {
        img.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});