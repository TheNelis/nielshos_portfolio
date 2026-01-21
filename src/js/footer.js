(() => {
    const container = document.querySelector('.footer__buttoncontainer');
    if (!container) return;

    const button = container.querySelector('.footer__buttoncontainer__button');
    if (!button) return;

    let containerRect;
    let buttonRect;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerpAmount = 0.08;

    const updateRects = () => {
        containerRect = container.getBoundingClientRect();
        buttonRect = button.getBoundingClientRect();
    };

    updateRects();
    window.addEventListener('resize', updateRects);
    window.addEventListener('scroll', updateRects);

    container.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        let x = mouseX - buttonRect.width / 2;
        let y = mouseY - buttonRect.height / 2;

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        targetX = Math.max(0, Math.min(maxX, x));
        targetY = Math.max(0, Math.min(maxY, y));
    });

    container.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });

    const render = () => {
        currentX += (targetX - currentX) * lerpAmount;
        currentY += (targetY - currentY) * lerpAmount;

        if (Math.abs(targetX - currentX) < 0.05) currentX = targetX;
        if (Math.abs(targetY - currentY) < 0.05) currentY = targetY;

        button.style.transform =
            `translate3d(${currentX}px, ${currentY}px, 0)`;

        requestAnimationFrame(render);
    };

    render();
})();



// Footer year
let yearElement = document.getElementById("footer-year");
let currentYear = new Date().getFullYear();

if (yearElement) {
    yearElement.textContent = currentYear;
}