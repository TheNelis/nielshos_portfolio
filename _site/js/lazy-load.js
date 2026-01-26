// WORK BLOCK ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    const lazyBlocks = document.querySelectorAll('.lazy-load');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const block = entry.target;
            block.classList.add('loaded');

            const img = block.querySelector('img.lazy-load');
            if (img && img.dataset.src) {
                img.src = img.dataset.src;
                img.addEventListener('load', () => img.classList.add('loaded')); // animatie afbeelding
            }

            observer.unobserve(block);
        });
    }, { threshold: 0.1 });

    lazyBlocks.forEach(block => observer.observe(block));
});