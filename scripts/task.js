class Task extends HTMLElement {

    contents = "";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
    }

    static get observedAttributes() {
        return ["data-contents"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name == "data-contents") {
            this.contents = newVal;
            console.log(name, oldVal, newVal)
        }
        this.render()
    }

    get template() {
        return /*html*/`
            <li class="task" data-contents="">${this.contents}</li>
        `;
    }

    get style() {
        reutrn /*html*/`
            <style>
            </style>
        `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("task-element", Task);