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

//class for images
class ImageGallery {
    constructor(image_array, container_selector, overlay_selector) {
        this.images = image_array;
        this.container = document.querySelector(container_selector);
        this.overlay = document.querySelector(overlay_selector);
    }

    load() {

        for (let info of this.images) {
            const wrapper = document.createElement("div");
            wrapper.className = "photo_item";

            const img = document.createElement("img");
            img.src = info.url;
            img.alt = info.alt;

            wrapper.appendChild(img);
            this.container.appendChild(wrapper);

            // Enable zooming
            img.addEventListener("click", () => {
                this.open_overlay(img.src, img.alt);
            });
        }

    }

    open_overlay(src, alt) {
        const viewerImage = this.overlay.querySelector(".viewer img");
        viewerImage.src = src;
        viewerImage.alt = alt;

        this.overlay.style.visibility = "visible";

        this.overlay.querySelector(".viewer .controls button").onclick = () => {
            this.overlay.style.visibility = "hidden";
        }
    }
}
