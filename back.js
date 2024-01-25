class BackButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.style.display = 'inline-block';
        container.style.cursor = 'pointer';

        const arrow = document.createElement('span');
        arrow.textContent = '←Back';
        arrow.style.transition = 'transform 0.3s';
        arrow.style.transformOrigin = 'center';
        arrow.style.display = 'inline-block';
        arrow.style.fontSize = '1.3rem';
        arrow.style.wordSpacing = '1rem';
        

        // Add hover animation
        container.addEventListener('mouseenter', () => {
            arrow.style.transform = 'scale(1.1)';
            arrow.style.wordSpacing = '1.4rem';
        });

        container.addEventListener('mouseleave', () => {
            arrow.style.transform = 'scale(1)';
            arrow.style.wordSpacing = '1rem';
        });

        // Add click event to navigate to index.html
        container.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        container.appendChild(arrow);

        this.shadowRoot.appendChild(container);
    }
}

// Define the custom element
customElements.define('back-button', BackButton);
