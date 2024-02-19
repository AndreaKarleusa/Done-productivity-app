
class CreateSpaceModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        const discardButton = this.shadowRoot.querySelector("#discard-space-button");
        const nameInput = this.shadowRoot.querySelector("#space-name-input");
        const modal = this.shadowRoot.querySelector("dialog");

        discardButton.addEventListener("click", () => {
            nameInput.value = "";
            modal.close();
        });
    }
    get template() {
        return /*html*/`
            ${this.style}
            
            <dialog id="create-space-modal">
                <h2>Create A New Space</h2>
                
                <div class="input-field-wrapper">
                    <label for="space-name-input">Name:</label>
                    <input type="text" id="space-name-input">
                </div>
                <div class="input-field-wrapper">
                    <label for="space-color-input">Color:</label>
                    <input type="color" id="space-color-input">
                </div>
                
                <div id="action-buttons">
                    <button id="discard-space-button">Discard Space</button>
                    <button id="save-space-button">Save Space</button>
                </div>
            </dialog>
        `;
    }
    get style() {
        return /*html*/`
            <style>
                #create-space-modal[open]{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 25px 25px;
                    background-color: #F8F9FA;
                    border: none;
                    border-radius: 10px;
                }
                #create-space-modal[open]::backdrop{
                    background-color: black;
                    opacity: 0.5;
                }
                #action-buttons{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 30px;
                }
                #action-buttons > button{
                    margin: 0;
                    padding: 0;
                    font-size: 17px;
                    background: none;
                    border: none;
                    color: #212529;
                    font-family: "Rubik", sans-serif;
                }
                .input-field-wrapper{
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
                #space-name-input{
                    font-size: 15px;
                    padding: 5px 10px;
                    border: none;
                    border-radius: 10px;
                    color: #212529;
                    background: #E9ECEF;
                }
                #space-name-input:focus{
                    outline: none;
                }
                label{
                    font-size: 25px;
                }
                h2{
                    margin-top: 0;
                }
            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("create-space-modal", CreateSpaceModal);