class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                .note-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                    margin: 1em;
                }
            </style>
            <form class="note-form">
                <input type="text" name="title" placeholder="Title" required>
                <textarea name="body" placeholder="Body" required></textarea>
                <button type="submit">Add Note</button>
            </form>
        `;

    this.shadowRoot
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const title = this.shadowRoot.querySelector(
          'input[name="title"]'
        ).value;
        const body = this.shadowRoot.querySelector(
          'textarea[name="body"]'
        ).value;
        this.dispatchEvent(
          new CustomEvent("note-added", {
            detail: { title, body },
            bubbles: true,
            composed: true,
          })
        );
        this.shadowRoot.querySelector("form").reset();
      });
  }
}
customElements.define("note-form", NoteForm);
