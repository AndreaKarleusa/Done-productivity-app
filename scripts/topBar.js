
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

            const task = document.createElement("task-element");
            task.dataset.contents = inputElement.value;
            taskList.appendChild(task);

            inputElement.value = "";
        });
    }

    get template() {
        return /*html*/`
            ${this.style}
            <object id="more-space-options" data="../icons/more.svg"></object>
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
                
                
                #more-space-options{
                    width: 2em;
                    height: 2em;
                    position: absolute;
                    right: 20px;
                    top: 5px;
                }
            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("top-bar", TopBar);