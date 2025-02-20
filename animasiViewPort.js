function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.1
})

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const textElements = section.querySelectorAll('h1, p, .penutup-list-item, .pilihan-tombol');
        textElements.forEach(element => {
            element.classList.add('fade-element');
            observer.observe(element);
        });
    });
});