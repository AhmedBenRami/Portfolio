
// async function load_images(directory, container_selector) {

//     try {

//         // const response = await fetch(directory);

//         // if (!response.ok) {
//         //     throw new Error("An error while fetching the json file, please check the directory");
//         // }
//         // const images_infos = await response.json();

//         // let container = document.querySelector(container_selector);

//         // if (!container) {
//         //     throw new Error("An error while selecting the container, please check the selector")
//         // }

//         for (let info of images_infos) {
//             /*the structure should be like this

//             <div class="photos">
//             <div class="photo_item">
//             <img src="" alt="">
//             </div>
//             </div>
//             */

//             let wrapper = document.createElement("div");
//             wrapper.className = "photo_item";
//             container.appendChild(wrapper);

//             let image = document.createElement("img");
//             image.src = info.url;
//             image.alt = info.alt;
//             wrapper.appendChild(image);

//         }
//     }
//     // catch (error) {
//     //     console.error(error);
//     //     return;
//     // }

// }

// // function zoom_in(image_wrapper_in_gallery, container_selector) {
// //     let container = document.querySelector(container_selector);

// //     let zoom_bg = document.createElement("div");
// //     zoom_bg.className = "zoom_bg";
// //     container.appendChild(zoom_bg);

// //     let wrapper = document.createElement("div");
// //     wrapper.className = "zoom_img";
// //     zoom_bg.appendChild(wrapper);

// //     let original_image = image_wrapper_in_gallery.querySelector("img");

// //     let image = document.createElement("img");
// //     image.src = original_image.src;
// //     image.alt = original_image.alt;
// //     wrapper.append(image);

// //     // image.style.display = "block";


// // }

// load_images("/Assets/JS/JSON/Portfolio_gallery.json", "main section.gallery .photos").then(() => {

//     let wrappers = document.querySelectorAll("main section.gallery .photos .photo_item");

//     for (let wrapper of wrappers) {
//         wrapper.querySelector("img").addEventListener("click", () => zoom_in(wrapper, "main section.gallery"));
//     }
// }
// )


class ImageGallery {
    constructor(image_array, container_selector, overlay_selector) {
        this.images = image_array;
        this.container = document.querySelector(container_selector);
        this.overlay = document.querySelector(overlay_selector);

        console.log(this.images);

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

    // enable_close() {
    // }
}

let image_array = [
    {
        "url": "/Assets/Images/Portfolio/_ (1).jpeg",
        "alt": "Portfolio image: _ (1).jpeg"
    },
    {
        "url": "/Assets/Images/Portfolio/exerc1_card3.jpg",
        "alt": "Portfolio image: exerc1_card3.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/pexels-filiamariss-9417212.jpg",
        "alt": "Portfolio image: pexels-filiamariss-9417212.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/exerc1_card1.jpg",
        "alt": "Portfolio image: exerc1_card1.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/exerc1_card4.jpg",
        "alt": "Portfolio image: exerc1_card4.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/pexels-nemanja-vucic-2157177226-34592502.jpg",
        "alt": "Portfolio image: pexels-nemanja-vucic-2157177226-34592502.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/land-o-lakes-inc-BvZYHz9TeCk-unsplash.jpg",
        "alt": "Portfolio image: land-o-lakes-inc-BvZYHz9TeCk-unsplash.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/kimono.jpeg",
        "alt": "Portfolio image: kimono.jpeg"
    },
    {
        "url": "/Assets/Images/Portfolio/pexels-oleksandr-plakhota-1270583835-34607826.jpg",
        "alt": "Portfolio image: pexels-oleksandr-plakhota-1270583835-34607826.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/pexels-miken-34533233.jpg",
        "alt": "Portfolio image: pexels-miken-34533233.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/_.jpeg",
        "alt": "Portfolio image: _.jpeg"
    },
    {
        "url": "/Assets/Images/Portfolio/pexels-mxmaven-2156962353-34496646.jpg",
        "alt": "Portfolio image: pexels-mxmaven-2156962353-34496646.jpg"
    },
    {
        "url": "/Assets/Images/Portfolio/face.jpeg",
        "alt": "Portfolio image: face.jpeg"
    },
    {
        "url": "/Assets/Images/Portfolio/Mads Mikkelsen was born with these glasses on btw.jpeg",
        "alt": "Portfolio image: Mads Mikkelsen was born with these glasses on btw.jpeg"
    },
    {
        "url": "/Assets/Images/Portfolio/porche.jpeg",
        "alt": "Portfolio image: porche.jpeg"
    },
    {
        "url": "/Assets/Images/Portfolio/exerc1_card2.jpg",
        "alt": "Portfolio image: exerc1_card2.jpg"
    }
];



let image_galley = new ImageGallery(image_array, "main section.gallery .photos", "main section.gallery-overlay");

image_galley.load();