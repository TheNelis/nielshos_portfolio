const { html } = require('common-tags');

function SelectedWorkBlock({ title = "", text = "", image = "", url = "", pills = []}) {
    return html`
        <a href="${url}" class="selectedwork-block__case lazy-load">
            <div class="selectedwork-block__case__info">
                <h3>${title}</h3>
                <p class="selectedwork-block__case__info__text">
                    ${text}
                </p>
                ${pills.length ? html`
                    <div class="pillcontainer">
                        ${pills.map(pill => html`
                            <p class="pill pill-lazy-load pill--${pill.color}">
                                ${pill.label}
                            </p>
                        `)}
                    </div>
                ` : ""}
            </div>
            <div class="selectedwork-block__case__imagewrapper">
                <img data-src="${image}" alt="" class="lazy-load">
                <div class="image-overlay">
                    <div class="button button--big">View project</div>
                </div>
            </div>
        </a>
    `;
}

module.exports = SelectedWorkBlock;
