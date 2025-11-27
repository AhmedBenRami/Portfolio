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
});


// //to resize the images after clicking on them
// function image_resize() {
//     var images = document.querySelectorAll("img");

//     var overlay = document.querySelector("main section.gallery-overlay");

//     for (let image of images) {
//         image.onclick = () => {
//             overlay.style.display = "flex";
//             overlay.querySelector(".viewer img").src = image.src;
//         }
//     }

//     var cancel_button = overlay.querySelector(".viewer .controls button");
//     cancel_button.onclick = () => {
//         overlay.style.display = "none";
//     }
// }

// image_resize();
