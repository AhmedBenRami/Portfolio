let image_array = [
    {
        "url": "../Assets/Images/Portfolio/img0.jpg",
        "alt": "Rose",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img1.jpg",
        "alt": "morning though tree",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img2.jpg",
        "alt": "beach",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img3.jpg",
        "alt": "Reading news",
        "category": "Photo session"
    },
    {
        "url": "../Assets/Images/Portfolio/img4.jpg",
        "alt": "chandelier",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/img5.jpg",
        "alt": "bird",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img6.jpg",
        "alt": "watch",
        "category": "Product"
    },
    {
        "url": "../Assets/Images/Portfolio/img7.jpg",
        "alt": "house in nature",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img8.jpg",
        "alt": "shampoo",
        "category": "Product"
    },
    {
        "url": "../Assets/Images/Portfolio/img9.jpg",
        "alt": "buildings",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/img10.jpg",
        "alt": "store",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/img11.jpg",
        "alt": "garden",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img12.jpg",
        "alt": "horse",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img13.jpg",
        "alt": "winter",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/img14.jpg",
        "alt": "roman building",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/img15.jpg",
        "alt": "book",
        "category": "Product"
    },
    {
        "url": "../Assets/Images/Portfolio/img16.webp",
        "alt": "Mads Mikkelsen",
        "category": "Photo session"
    },
    {
        "url": "../Assets/Images/Portfolio/img17.jpg",
        "alt": "prtrait in nature",
        "category": "Photo session"
    },
    {
        "url": "../Assets/Images/Portfolio/img18.jpg",
        "alt": "piano",
        "category": "Photo session"
    }
];

//class for images
class ImageGallery {
    constructor(image_array, container_selector, overlay_selector) {
        this.images = image_array;
        this.container = document.querySelector(container_selector);
        this.overlay = document.querySelector(overlay_selector);
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


let image_galley = new ImageGallery(image_array, "main section.gallery .photos", "main section.gallery-overlay");

image_galley.load();


//gallery nav handling
const gallery_nav = document.querySelectorAll("main section.gallery ul li");

for (let category of gallery_nav) {
    category.addEventListener("click", () => {
        image_galley.filter_by(category.textContent);

        gallery_nav.forEach((ele) => {
            ele.className = "";
        })
        category.className = "active";

    })
}


