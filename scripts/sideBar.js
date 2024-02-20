
class SideBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        const createButton = this.shadowRoot.querySelector("button");
        const modalObject = document.getElementById("make-space");
        const modal = modalObject.shadowRoot.querySelector("dialog")

        createButton.addEventListener("click", () => {
            modal.showModal();
        });
    }

    get template() {
        return /*html*/`
            ${this.style}
            
            <h2>Your Spaces</h2>
            <slot name="space-list"></slot>
            <button id="create-space-button">Create Space</button>
            `;
    }

    get style() {
        return /*html*/`
                <style>
                    :host{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        grid-row: span 2;
                        padding: 1rem 0;
                        background-color: #DEE2E6;
                    }
                    
                    #create-space-button{
                        background-color: #212529;
                        color: #F8F9FA;
                        font-size: 100%;
                        padding: 10px 0;
                        width: 90%;
                        border: none;
                        border-radius: 10px;
                    }
                    
                    ::slotted([slot="space-list"]){
                        padding: 0 1rem;
                        width: -webkit-fill-available;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                        margin-bottom: auto;
                    }
                </style>
            `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("side-bar", SideBar);