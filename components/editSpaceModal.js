
class EditSpaceModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    async connectedCallback() {
        await customElements.whenDefined("top-bar");

        const modal = this.shadowRoot.getElementById("edit-space-modal");
        const sideBar = document.querySelector("side-bar");
        const topBar = document.querySelector("top-bar");
        const editButton = topBar.shadowRoot.getElementById("edit-button");
        const spaceList = document.getElementById("space-list");

        const saveButton = this.shadowRoot.getElementById("save-edit-button")
        const discardButton = this.shadowRoot.getElementById("discard-edit-button")

        const nameInput = this.shadowRoot.getElementById("edit-name-input")
        const colorInput = this.shadowRoot.getElementById("edit-color-input")



        editButton.addEventListener("click", () => {
            modal.showModal();
        });

        saveButton.addEventListener("click", () => {
            const oldSpace = JSON.parse(localStorage.getItem(localStorage.getItem("openSpace")));
            localStorage.removeItem(localStorage.getItem("openSpace"));

            const space = document.createElement("space-item")
            space.name = nameInput.value;
            space.color = colorInput.value;
            spaceList.appendChild(space);

            const spaceObj = {
                name: space.name,
                color: space.color,
                tasks: oldSpace.tasks
            };

            localStorage.setItem(space.name, JSON.stringify(spaceObj));
            nameInput.value = "";
            modal.close();
        })

    }

    get template() {
        return /*html*/`
            ${this.style}
            
            <dialog id="edit-space-modal">
                <h2>Edit Current Space</h2>
                
                <div class="input-field-wrapper">
                    <label for="edit-name-input">Name:</label>
                    <input type="text" id="edit-name-input">
                </div>
                <div class="input-field-wrapper">
                    <label for="edit-color-input">Color:</label>
                    <input type="color" id="edit-color-input">
                </div>
                
                <div id="save-or-discard-buttons">
                    <button id="discard-edit-button">Discard Space</button>
                    <button id="save-edit-button">Save Space</button>
                </div>
            </dialog>
        `;
    }
    get style() {
        return /*html*/`
            <style>
                #edit-space-modal[open]{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 25px 25px;
                    background-color: #F8F9FA;
                    border: none;
                    border-radius: 10px;
                }
                #edit-space-modal[open]::backdrop{
                    background-color: black;
                    opacity: 0.5;
                }
                #save-or-discard-buttons{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 30px;
                }
                #save-or-discard-buttons > button{
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
                #edit-name-input{
                    font-size: 15px;
                    padding: 5px 10px;
                    border: none;
                    border-radius: 10px;
                    color: #212529;
                    background: #E9ECEF;
                }
                #edit-name-input:focus{
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

customElements.define("edit-space-modal", EditSpaceModal);