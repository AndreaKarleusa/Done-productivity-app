
class Space extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this._name = "";
        this._color = "";
    }

    connectedCallback() {
        this.render();

        this.addEventListener("click", () => {
            localStorage.setItem("openSpace", this.name);
        })
    }

    /*
    static get observedAttributes() {
        return ["data-name", "data-color"]
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case "name":
                this.name = newVal;
            case "color":
                this.color = newVal;


            default:
                break;
        }
    }*/

    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }

    set color(value) {
        this._color = value;
    }
    get color() {
        return this._color;
    }

    get template() {
        return /*html*/`
            ${this.style}
            
            <div class="color-bar"></div>
            <h3 class="space-title">${this._name}</h3>
        `;
    }

    // TODO: style the component
    get style() {
        return /*html*/`
            <style>
                :host{
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 10px;
                }
                .space-title{
                    padding: 0;
                    margin: 0;
                }
                .color-bar{
                    min-width: 10px;
                    height: 100%;
                    border: none;
                    border-radius: 5px;
                    background-color: ${this._color};
                }
            </style>
        `;
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("space-item", Space);