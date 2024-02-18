
class WorkSpace extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
        this.getTasks();
    }


    getTasks() {
        const list = this.shadowRoot.querySelector("#task-list");
        const task = document.createElement("task-element")
        list.appendChild(task);
    }

    get template() {
        return /*html*/`
            ${this.style}
            
            <h2>Tasks:</h2>
            <ul id="task-list">
            </ul>
        `;
    }

    get style() {
        return /*html*/`
            <style>
                :host{
                    padding: 20px;
                }
            </style>
        `;
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("work-space", WorkSpace);