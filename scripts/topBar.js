
class TopBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.render();
    }

    get template() {
        return /*html*/`
            ${this.style}
            <object id="more-space-options" data="../icons/more.svg"></object>
            <div id="space-info">
                <slot name="current-space"></slot>
                <input id="task-input" type="text" placeholder="add a task">
            </div>
        `;
    }
    get style() {
        return /*html*/`
            <style>
                :host{
                    position: relative;
                }
                :host button{
                    font-family: "Rubik", sans-serif;
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
                
                #task-input{
                    height: 3.5em;
                    width: 24em;
                    padding: 0;
                    border: none;
                    border-radius: 10px;
                    background-color: grey;
                    color: black;
                    padding: 0 10px;
                    /*box-shadow: 0px 5px 5px gray;*/
                }
                ::placeholder{
                    color: black;
                    opacity: 70%;
                }
                #task-input:focus{
                    outline: none;
                }
                
                
                #more-space-options{
                    width: 2.5em;
                    height: 2.5em;
                    position: absolute;
                    right: 20px;
                    top: 5px;
                }
                
            </style>
        `;
    }
    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("top-bar", TopBar);
