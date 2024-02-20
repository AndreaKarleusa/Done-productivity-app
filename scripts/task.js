class Task extends HTMLElement {

    contents = "";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        const btn = this.shadowRoot.querySelector("button");
        console.log(btn);

        btn.addEventListener("click", e => {
            this.remove(this);
        });


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
            </style>
        `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("task-element", Task);