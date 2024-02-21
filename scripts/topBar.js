
class TopBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        const inputElement = this.shadowRoot.querySelector("#task-input");
        const taskList = document.getElementById("task-list");


        inputElement.addEventListener("keypress", e => {
            if (e.key !== "Enter") {
                return
            }

            // UI side
            const task = document.createElement("task-element");
            task.dataset.contents = inputElement.value;
            taskList.appendChild(task);
            // Saving tasks
            const currentSpaceStr = localStorage.getItem(localStorage.getItem("openSpace"));
            const currentSpaceObj = JSON.parse(currentSpaceStr);
            currentSpaceObj.tasks.push(inputElement.value);
            localStorage.setItem(currentSpaceObj.name, JSON.stringify(currentSpaceObj));
            console.log(currentSpaceObj)

            inputElement.value = "";
        });
    }

    get template() {
        return /*html*/`
            ${this.style}
            <button id="edit-button">
                <object id="edit-button-icon" data="../icons/more.svg"></object>
            </button>
            <div id="space-info">
                <slot name="current-space"></slot>
                <input id="task-input" type="text" placeholder="add a task">
            </div>
        `;
    }
    get style() {
        return /*html*/`
            <style>
                :host{
                    position: relative;
                }
                :host button{
                    font-family: "Rubik", sans-serif;
                }
                
                #space-info{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    position: absolute;
                    bottom: 0px;
                    box-sizing: border-box;
                    padding: 0 20px;
                }
                #space-settings{
                    position: absolute;
                    right: 0;
                }
                
                #task-input{
                    width: 20em;
                    border: none;
                    border-radius: 10px;
                    background-color: #DEE2E6;
                    color: #212529;
                    padding: 15px 15px;
                    font-size: 20px;
                    /*box-shadow: 0px 5px 5px gray;*/
                }
                ::placeholder{
                    color: black;
                    opacity: 65%;
                }
                #task-input:focus{
                    outline: none;
                }
                
                
                #edit-button{
                    width: 2.5rem;
                    height: 2.5em;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    padding: 0;
                    margin: 0;
                    background: none;
                    border: none;
                }
                #edit-button-icon{
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("top-bar", TopBar);