const loader = document.getElementById('loader');
const loaderFirst = document.getElementById('loader-first');
const loaderSecond = document.getElementById('loader-second');
const smallLoader = document.getElementById('small-loader');
const smallLoaderColor = document.getElementById('small-loader-color');

if (window.location.pathname == '/') {
    window.addEventListener('load', function() {
        setTimeout(function() {
            loaderFirst.style.display = 'none';
            loaderSecond.style.display = 'flex';

            setTimeout(function() {
                loader.style.animation = 'loaderLeave 0.6s ease-out forwards';

                setTimeout(function() {
                    loader.style.display = 'none';
                }, 600);
            }, 1500);
        }, 2400);
    });

    smallLoader.style.display = 'none';
} else {
    loader.style.display = 'none';
    let color = '#F54C52';

    if (window.location.pathname.includes('work')) {
        color = '#00BF72';
    } else if (window.location.pathname.includes('projects')) {
        color = '#00BF72';
    } else if (window.location.pathname.includes('about')) {
        color = '#0C83E0';
    }

    smallLoaderColor.style.backgroundColor = color;

    window.addEventListener('load', function() {
        smallLoader.style.animation = 'smallLoaderLeave 0.5s ease-out forwards';

        setTimeout(function() {
            smallLoader.style.display = 'none';
        }, 500);
    });
}