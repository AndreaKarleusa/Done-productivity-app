
class SideBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.render();
    }

    get template() {
        return /*html*/`
            ${this.style}
            
            <slot name="space-list"></slot>
            <button>
                <slot name="create-button"></slot>
            </button>
            `;
    }

    get style() {
        return /*html*/`
                <style>
                    button{
                        background-color: lightskyblue;
                    }
                </style>
            `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("side-bar", SideBar);