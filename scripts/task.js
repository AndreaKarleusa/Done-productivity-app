class Task extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
    }

    get template() {
        return /*html*/`
            <li class="task">New Task</li>
        `;
    }

    get style() {
        reutrn /*html*/`
            <style>
                .task{
                    background-color: grey;
                }
            </style>
        `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("task-element", Task);