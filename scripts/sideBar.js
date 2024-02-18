
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
            <slot name="create-button"></slot>
            `;
    }

    get style() {
        return /*html*/`
                <style>
                    :host{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        grid-row: span 2;
                        padding: 1rem 0;
                        background-color: grey;
                    }
                    
                    ::slotted([slot="create-button"]){
                        background-color: lightskyblue;
                        font-size: 100%;
                        padding: 10px 40px;
                        border: none;
                        border-radius: 10px
                    }
                </style>
            `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("side-bar", SideBar);