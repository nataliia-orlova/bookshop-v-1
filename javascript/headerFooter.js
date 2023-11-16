class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            /*html*/
            ` 
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div class="container">
            <a href="index.html" class="navbar-brand">
                <span class="text-warning">PARROT</span> BOOKS</a
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a
                            href="#"
                            class="nav-link dropdown-toggle"
                            id="navbarDropdownMenu"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            books</a
                        >
                        <ul
                            class="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Detective Stories</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Spooky Stories</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Comic Books</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Fantasy & Sci-Fi</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Adventures</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Encyclopedias</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">about</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">contact</a>
                    </li>
                </ul>
                <a href="#"><i class="bi bi-basket-fill ps-3"></i></a>
            </div>
        </div>
    </nav>
`;
    }
}

customElements.define('website-header', WebsiteHeader);

class WebsiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            /*html*/
            `<footer class="bg-dark py-5 text-center text-white position-relative">
        <div class="container">
            <small>Copyright &copy; <span class="text-warning">PARROT</span> BOOKS</small>
            <a href="#" class="position-absolute bottom-0 end-0 p-5">
                <i class="bi bi-arrow-up-circle h1 text-warning"></i>
            </a>
        </div>
    </footer>`;
    }
}

customElements.define('website-footer', WebsiteFooter);
