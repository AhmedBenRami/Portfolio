//load header and footer
function load_extremums(index_path, logo_path, pages_path) {

    const header = `
        <div class="logo">
            <a href="${index_path}">
                <img src="${logo_path}" alt="Logo" draggable="false">
            </a>
        </div>
        <div class="hamburger-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L20 18" stroke="white" stroke-width="2" stroke-linecap="round" />
                <path d="M4 12L20 12" stroke="white" stroke-width="2" stroke-linecap="round" />
                <path d="M4 6L20 6" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
        <nav>
            <ul>
                <li><a href="${pages_path}/portfolio.html">Portfolio</a></li>
                <li><a href="${pages_path}/offer.html">Offer</a></li>
                <li><a href="${pages_path}/about.html">About</a></li>
                <li><a href="${pages_path}/blog.html">Blog</a></li>
                <li><a href="${pages_path}/contact.html">Contact</a></li>
            </ul>
        </nav>

        <div class="nav-overlay"></div>
    `;

    const footer = `
        <div class="infos">
            <div class="phone">
                <h4>Phone number</h4>
                <span class="number"><a href="tel:+212612345678">+212 (0) 612345678</a></span><br>
                <span class="email"><a href="mailto:noreply@envato.com">noreply@envato.com</a></span>
            </div>

            <div class="open_hour">
                <h4>Opening Hours</h4>
                <p>
                    Monday - Friday:<br>
                    06:00 AM - 10:00 PM
                </p>
            </div>

            <div class="address">
                <h4>Address</h4>
                <p>
                Abdelkrim Khattabi Avenue,<br>
                Marrakesh, Marrakesh-Safi, 40000, Morocco
                </p>
            </div>

            <div class="social_media">
                <h4>Social Media</h4>
                <div class="wrapper">
                    <span class="facebook"><a href="https://www.facebook.com/">Facebook</a></span>
                    <span class="instagram"><a href="https://www.instagram.com/">Instagram</a></span>
                    <span class="pinterest"><a href="https://www.pinterest.com/">Pinterest</a></span>
                </div>
            </div>
        </div>

        <div class="copyright">
            <p>&copy; 2025 Portfolio By Ahmed, Amin and Adam <br> All Rights Reserved</p>
        </div>
    `;

    document.querySelector("header").innerHTML = header;
    document.querySelector("footer").innerHTML = footer;

    mark_current_page(document.querySelector("header"));
}


function mark_current_page(header) {
    const currentPageTitle = document.title;

    const navLinks = header.querySelectorAll("nav ul li");

    navLinks.forEach(link => {
        if (link.textContent.trim() === currentPageTitle.trim()) {
            link.classList.add("main_page");
        }
    });
}


// to expand nav menu
window.addEventListener("load", () => {
    document.querySelector(".hamburger-button").addEventListener("click", (e) => {
        const navigation_bar = document.querySelector("nav");

        navigation_bar.className = (navigation_bar.className == "") ? "nav-open" : "";
    });
})

