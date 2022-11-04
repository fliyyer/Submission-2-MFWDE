/* eslint-disable linebreak-style */
class customFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
                          <p>Copyright © 2022 - Cafetaria</p>
                        </footer>`;
  }
}
customElements.define('custom-footer', customFooter);
