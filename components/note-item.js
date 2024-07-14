class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set noteData(data) {
    this.shadowRoot.innerHTML = `
            <style>
                .note-item {
                    border: 1px solid #ccc;
                    padding: 1em;
                    margin: 0.5em;
                    border-radius: 5px;
                }
                .note-title {
                    font-weight: bold;
                }
            </style>
            <div class="note-item">
                <div class="note-title">${data.title}</div>
                <div class="note-body">${data.body}</div>
            </div>
        `;
  }
}
customElements.define("note-item", NoteItem);
