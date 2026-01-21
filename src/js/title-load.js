gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".title-load", {
    interval: 0,
    once: true,
    onEnter: batch => {
        batch.forEach(container => {
            const spans = container.querySelectorAll(".textwrapper span");
            gsap.fromTo(
                spans,
                { opacity: 0, y: 100 },
                { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                stagger: 0
                }
            );
        });
    },
    start: "top 90%"
});