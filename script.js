class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                a {
                    text-decoration: none;
                }
                .card {
                    position: relative;
                    max-width: 700px; /* Adjust this value to your needs */
                    width: 80%;
                    margin: 0 auto;
                    overflow: hidden;
                    background-color: white;
                    border-radius: 10px;
                    padding: 20px;
                    color: black;
                    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.19), 0px 6px 6px rgba(255, 255, 255, 0.19);
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                }
                .card img {
                    position: absolute;
                    opacity: 0.9;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    transition: top 0.3s ease-in-out;
                }
                .card:hover {
                    transform: scale(1.03);
                    box-shadow: 0px 15px 50px rgba(255, 255, 255, 0.19), 0px 10px 50px rgba(255, 255, 255, 0.19);
                }
                .card:hover img {
                    top: 100%;
                }
            </style>
            <a href="${this.getAttribute('href')}">
                <div class="card">
                    <h4 class="card-title">${this.getAttribute('title')}</h4>
                    <p class="card-description">${this.getAttribute('description')}</p>
                    <img src="${this.getAttribute('img-src')}" alt="${this.getAttribute('img-alt')}">
                </div>
            </a>
        `;
    }
}

window.customElements.define('project-card', ProjectCard);