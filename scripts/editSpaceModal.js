
class EditSpaceModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    //FIXME: get the svg to show this modal 
    async connectedCallback() {
        await customElements.whenDefined("top-bar");

        const modal = this.shadowRoot.getElementById("edit-space-modal")
        const topBar = document.querySelector("top-bar");
        const editButton = topBar.shadowRoot.getElementById("edit-button");

        editButton.addEventListener("click", () => {
            modal.showModal();
        });

    }

    get template() {
        return /*html*/`
            ${this.style}
            
            <dialog id="edit-space-modal">
                EDIT SPACE MODAL
            </dialog>
        `;
    }
    get style() {
        return /*html*/`
            <style>
                
            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("edit-space-modal", EditSpaceModal);