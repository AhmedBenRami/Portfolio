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