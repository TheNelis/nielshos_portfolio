const { html } = require('common-tags');

function MagneticButton({ href = "", label = "See more", color = "red", classes = "", strength = 0.5, target, amount }) {
    return html`
        <a href="${href}" target="${target ? "_blank" : "_self"}" class="magnetic-button ${classes}" data-strength="${strength}">
            <span class="magnetic-filler magnetic-filler--${color}"></span>
            <span class="magnetic-text">
                <span class="magnetic-text-inner">
                    <span>${label}</span>
                    ${amount ? html`<span class="magnetic-text-inner__small">${amount}</span>` : ""}
                </span>
            </span>
        </a>
    `;
}

module.exports = MagneticButton;
