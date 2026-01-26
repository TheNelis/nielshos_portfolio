const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


gsap.registerPlugin(ScrollTrigger);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

ScrollTrigger.defaults({
  scroller: lenis.scroll,
});