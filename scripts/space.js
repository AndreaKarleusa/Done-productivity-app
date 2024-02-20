class Space extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this._name = "";
        this._color = "";
    }

    connectedCallback() {
        this.render();
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
            <h2 class="space-title">${this._name}</h2>
        `;
    }

    // TODO: style the component
    get style() {
        return /*html*/`
            <style>
                :host{
                    display: flex;
                }
                .space-title{
                    padding: 0;
                    margin: 0;
                }
                .color-bar{
                    width: 20px;
                    height: 20px;
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