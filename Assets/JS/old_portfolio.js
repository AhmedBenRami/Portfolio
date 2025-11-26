fetch("Assets/JS/JSON/Portfolio_gallery.json")
    .then(response => {
        return response.json();
    })
    .then(images_data => {
        let container = document.querySelector("main section.gallery .photos");

        for (let i = 0; i < images_data.length; i++) {

            let new_img = new Img(images_data[i], container);
        }
    });

// let images_json = fetch("Assets/JS/JSON/Portfolio_gallery.json").then(
//     response => { return response.json(); }
// );

// let images_array = [];

// for (let i = 0; i < images_json.length; i++) {

//     let image_infos = images_json[i];

//     images_array.push(new Img(image_infos));
// }


class Img {
    constructor(image, container) {
        this.url = image["url"];
        this.alt = image["alt"];
        this.container = container;
        this.create();
    }
    create() {
        let item = document.createElement("div");
        item.className = "item";
        let img_tag = document.createElement("img");
        img_tag.src = this.url;
        img_tag.alt = this.alt;
        item.appendChild(img_tag);
        this.container.appendChild(item);


        img_tag.addEventListener('click', this.scale.bind(this));

    }

    scale() {

        let dark_bg = document.querySelector("main section.gallery div.photos div.zoom_bg");
        let image_container = document.querySelector("main section.gallery div.photos div.zoom_img");
        let image = document.querySelector("main section.gallery div.photos div.zoom_img img");

        image.src = this.url;

        dark_bg.style.display = "block";
        image_container.style.display = "flex";
        image.style.display = "block";
        ['click', 'keydown'].forEach(e => {
            dark_bg.addEventListener(e, listener => {

                dark_bg.style.display = "none";
                image_container.style.display = "none";
                image.style.display = "none";
                image.src = "";
            });
        });
    }
}