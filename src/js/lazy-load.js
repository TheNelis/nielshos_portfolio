// WORK BLOCK ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    const lazyBlocks = document.querySelectorAll('.lazy-load');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const block = entry.target;
            block.classList.add('loaded');

            const img = block.querySelector('img.lazy-load');
            if (img) {
                if (img.complete) {
                    img.classList.add('loaded');
                } else {
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                }
            }

            observer.unobserve(block);
        });
    }, { threshold: 0.1 });

    lazyBlocks.forEach(block => observer.observe(block));
});