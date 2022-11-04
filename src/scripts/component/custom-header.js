/* eslint-disable linebreak-style */
class customHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
      <button
        id="menu"
        class="off-canvas"
        href="#"
        aria-label="Side Navigation"
      >
        ☰
      </button>
      <nav id="drawer" class="nav">
        <div id="wrapperid" class="wrapper">
          <div>
          <a href="/" class="logo">Cafetaria</a>
          </div>
          <div class="nav-menu">
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/favorite">Favorite</a></li>
              <li>
                <a href="https://www.linkedin.com/in/rahmat-hidayat29/" target="_blank"
                  >About Us</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="hero-text-box">
        <h1>Welcome To Cafetaria</h1>
        <a class="btn btn-full" href="#headline">Get Started</a>
      </div>
    </header>`;
  }
}
customElements.define('custom-header', customHeader);
