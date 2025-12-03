<<<<<<< HEAD
// to append the header with the footer into each page
// fetch("../../Pages/header.html")
//     .then(file => file.text())
//     .then(header => document.querySelector("header").innerHTML += header);


// fetch("../../Pages/footer.html")
//     .then(file => file.text())
//     .then(footer => document.querySelector("footer").innerHTML += footer);


function load_content() {
    const header = document.getElementById("header").content.cloneNode(true);
    const footer = document.getElementById("footer").content.cloneNode(true);

    document.querySelector("header").appendChild(header);
    document.querySelector("footer").appendChild(footer);
}
load_content();
// to expand nav menu

document.querySelector(".hamburger-button").addEventListener("click", (e) => {
    const navigation_bar = document.querySelector("nav");

    navigation_bar.className = (navigation_bar.className == "") ? "nav-open" : "";
})
=======
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
                <span class="number"><a href="tel:+610383766284">+61 (0) 383 766 284</a></span><br>
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
                    Level 13, 2 Elizabeth St,<br>
                    Melbourne, Victoria 3000, Australia
                </p>
            </div>

            <div class="social_media">
                <h4>Social Media</h4>
                <div class="wrapper">
                    <span class="facebook"><a href="#">Facebook</a></span>
                    <span class="instagram"><a href="#">Instagram</a></span>
                    <span class="pinterest"><a href="#">Pinterest</a></span>
                </div>
            </div>
        </div>

        <div class="copyright">
            <p>&copy; 2025 Portfolio By Ahmed, Amin and Adam <br> All Rights Reserved</p>
        </div>
    `;

    document.querySelector("header").innerHTML = header;
    document.querySelector("footer").innerHTML = footer;
}


// to expand nav menu
window.addEventListener("load", () => {
    document.querySelector(".hamburger-button").addEventListener("click", (e) => {
        const navigation_bar = document.querySelector("nav");

        navigation_bar.className = (navigation_bar.className == "") ? "nav-open" : "";
    });
})

>>>>>>> main
