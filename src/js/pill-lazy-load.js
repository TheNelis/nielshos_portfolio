// PILL ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const containers = document.querySelectorAll(".pillcontainer");

    containers.forEach(container => {
        const pills = container.querySelectorAll(".pill-lazy-load");

        ScrollTrigger.batch(pills, {
            interval: 0,
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.1,
                    stagger: 0.08,
                });
            },
            start: "top 100%"
        });
    });
});