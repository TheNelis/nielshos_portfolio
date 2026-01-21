(() => {
    const buttons = document.querySelectorAll('.magnetic-button');
    if (!buttons.length) return;

    const lerpAmt = 0.15; // snelheid van de smoothing

    buttons.forEach(button => {
        let rect = button.getBoundingClientRect();
        const textInner = button.querySelector('.magnetic-text-inner');

        // lees custom strength uit data attribute
        const strength = parseFloat(button.dataset.strength) || 0.5;
        const textStrength = strength / 4;

        let targetX = 0, targetY = 0;
        let textTargetX = 0, textTargetY = 0;

        const updateRect = () => rect = button.getBoundingClientRect();
        window.addEventListener('resize', updateRect);
        window.addEventListener('scroll', updateRect);

        button.addEventListener('mouseenter', () => {
            updateRect();
        });

        button.addEventListener('mouseleave', () => {
            targetX = targetY = textTargetX = textTargetY = 0;
        });

        button.addEventListener('mousemove', (e) => {
            const mx = e.clientX;
            const my = e.clientY;
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            targetX = (mx - cx) * strength;
            targetY = (my - cy) * strength;

            textTargetX = (mx - cx) * textStrength;
            textTargetY = (my - cy) * textStrength;
        });

        // render loop for lerp
        const render = () => {
            const cur = button._current || { x: 0, y: 0 };
            cur.x += (targetX - cur.x) * lerpAmt;
            cur.y += (targetY - cur.y) * lerpAmt;

            if (Math.abs(targetX - cur.x) < 0.000000001) cur.x = targetX;
            if (Math.abs(targetY - cur.y) < 0.000000001) cur.y = targetY;

            button.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
            button._current = cur;

            // tekst
            if (textInner) {
                const textCur = textInner._current || { x: 0, y: 0 };
                textCur.x += (textTargetX - textCur.x) * lerpAmt;
                textCur.y += (textTargetY - textCur.y) * lerpAmt;

                if (Math.abs(textTargetX - textCur.x) < 0.000000001) textCur.x = textTargetX;
                if (Math.abs(textTargetY - textCur.y) < 0.000000001) textCur.y = textTargetY;

                textInner.style.transform = `translate3d(${textCur.x}px, ${textCur.y}px, 0)`;
                textInner._current = textCur;
            }

            requestAnimationFrame(render);
        };

        render();
    });
})();
