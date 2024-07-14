class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                .app-bar {
                    background-color: #6200ea;
                    color: white;
                    padding: 1em;
                    text-align: center;
                    font-size: 1.5em;
                }
            </style>
            <div class="app-bar">Notes App</div>
        `;
  }
}
customElements.define("app-bar", AppBar);
