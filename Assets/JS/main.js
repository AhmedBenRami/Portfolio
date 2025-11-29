

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

        this.finish_loading = false;
    }

    load() {

        // var column_count = getComputedStyle(this.container).columnCount;
        var column_count = 4;

        var columns = [];
        for (let i = 0; i < column_count; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            this.container.appendChild(column);

            columns.push(column);
        }

        for (let index in this.images) {

            let info = this.images[index];

            const wrapper = document.createElement("div");
            wrapper.classList.add("photo_item", "not-loaded");
            wrapper.dataset.category = info.category;

            const img = document.createElement("img");
            img.src = info.url;
            img.alt = info.alt;
            img.loading = "lazy";




            wrapper.appendChild(img);
            columns[index % column_count].appendChild(wrapper);
            // this.container.appendChild(wrapper);

            img.addEventListener("load", () => {
                wrapper.classList.remove("not-loaded");
                wrapper.style.height = img.height;
            })

            img.addEventListener("click", () => {
                this.open_overlay(img.src, img.alt);
            });
        }

    }


    open_overlay(src, alt) {

        if (window.innerWidth <= 767) {
            return;
            //to not apply this feature for mobiles
        }
        const viewerImage = this.overlay.querySelector(".viewer img");
        viewerImage.src = "";

        viewerImage.src = src;
        viewerImage.alt = alt;

        this.overlay.style.visibility = "visible";

        this.overlay.querySelector(".viewer .controls button").onclick = () => {
            this.overlay.style.visibility = "hidden";
        }
    }

    async filter_by(category) {
        const items = document.querySelectorAll(".photo_item");

        for (let item of items) {

            item.style.display = (category === "All" || item.dataset.category === category) ? "block" : "none";
        }
    }
}



//loading animation
async function load_animation(time) {
    let loading_page = `<div class="loading-page">
        <div class="growing-spinner"></div>
    </div>`;

    document.body.innerHTML += loading_page;

    document.body.style.overflow = "hidden";

    await new Promise(r => setTimeout(r, time));
    document.body.style.overflow = "visible";

    document.querySelector(".loading-page").style.display = "none";
}

