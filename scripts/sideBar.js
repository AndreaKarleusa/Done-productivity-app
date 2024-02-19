
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
                        background-color: #DEE2E6;
                    }
                    
                    ::slotted([slot="create-button"]){
                        background-color: #212529;
                        font-size: 100%;
                        padding: 10px 0;
                        width: 90%;
                        border: none;
                        border-radius: 10px;
                        color: #F8F9FA;
                    }
                </style>
            `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("side-bar", SideBar);