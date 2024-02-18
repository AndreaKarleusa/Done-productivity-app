
class TopBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.render();
    }

    get template() {
        return /*html*/`
            ${this.style}
            <div id="space-settings">...</div>
            <div id="space-info">
                <slot name="current-space"></slot>
                <form id="task-input-form">
                    <input type="text">
                    <input type="submit" value="add">
                </form>
            </div>
        `;
    }
    get style() {
        return /*html*/`
            <style>
                :host{
                    position: relative;
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
            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("top-bar", TopBar);