
class WorkSpace extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
    }

    get template() {
        return /*html*/`
            ${this.style}
            
            <slot name="title"></slot>
            <slot name="task-list"></slot>
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