class Task extends HTMLElement {

    contents = "";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        const btn = this.shadowRoot.querySelector("button");
        const taskText = this.shadowRoot.querySelector(".task")

        btn.addEventListener("click", e => {

            // get the current space from local storage
            // remove this task from the array
            // put the object back in memory


            const currentSpaceStr = localStorage.getItem(localStorage.getItem("openSpace"));
            const currentSpaceObj = JSON.parse(currentSpaceStr);
            const tasks = currentSpaceObj.tasks;
            const taskIndex = tasks.indexOf(this.contents);

            if (taskIndex == -1) return;

            tasks.splice(1, taskIndex);

            localStorage.setItem(currentSpaceObj.name, JSON.stringify(currentSpaceObj));
            console.log(currentSpaceObj);

            this.remove(this);
        });

        this.addEventListener("click", () => {
            taskText.classList.toggle("line-over");
        })


    }
    static get observedAttributes() {
        return ["data-contents"];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if (name == "data-contents") {
            this.contents = newVal;
        }
        this.render()
    }

    get template() {
        return /*html*/`
            ${this.style}
            <li class="task" data-contents="">${this.contents}</li>
            <button class="remove-button">
                <object class="x-mark-icon" data="../icons/x-mark.svg" ></object>
            </button>
            
        `;
    }

    get style() {
        return /*html*/`
            <style>
                :host{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 80%;
                    max-width: 45rem;
                }
            
                .task {
                    font-size: 20px;
                    margin: 5px 0;
                }
                .remove-button{
                    background: none;
                    border: none;
                }
                .x-mark-icon{
                    width: 20px;
                    height: 20px;
                    pointer-events: none;
                }
                
                .line-over {
                    text-decoration: line-through;
                }
            </style>
        `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("task-element", Task);