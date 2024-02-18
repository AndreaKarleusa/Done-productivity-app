
class WorkSpace extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
    }



    get template() {
        return /*html*/`
            ${this.style}
            
            <h2>Tasks:</h2>
            <slot name="task-list">
            </slot>
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