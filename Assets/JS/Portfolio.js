
async function load_images(directory, container_selector) {

    try {

        const response = await fetch(directory);

        if (!response.ok) {
            throw new Error("An error while fetching the json file, please check the directory");
        }
        const images_infos = await response.json();

        let container = document.querySelector(container_selector);

        if (!container) {
            throw new Error("An error while selecting the container, please check the selector")
        }

        for (let info of images_infos) {
            /*the structure should be like this
            
            <div class="photos">
            <div class="photo_item">
            <img src="" alt="">
            </div>
            </div>
            */

            let wrapper = document.createElement("div");
            wrapper.className = "photo_item";
            container.appendChild(wrapper);

            let image = document.createElement("img");
            image.src = info.url;
            image.alt = info.alt;
            wrapper.appendChild(image);

        }
    } catch (error) {
        console.error(error);
        return;
    }

}

function zoom_in(image_wrapper_in_gallery, container_selector) {
    let container = document.querySelector(container_selector);

    let zoom_bg = document.createElement("div");
    zoom_bg.className = "zoom_bg";
    container.appendChild(zoom_bg);

    let wrapper = document.createElement("div");
    wrapper.className = "zoom_img";
    zoom_bg.appendChild(wrapper);

    let original_image = image_wrapper_in_gallery.querySelector("img");

    let image = document.createElement("img");
    image.src = original_image.src;
    image.alt = original_image.alt;
    wrapper.append(image);

    // image.style.display = "block";


}

load_images("/Assets/JS/JSON/Portfolio_gallery.json", "main section.gallery .photos").then(() => {

    let wrappers = document.querySelectorAll("main section.gallery .photos .photo_item");

    for (let wrapper of wrappers) {
        wrapper.querySelector("img").addEventListener("click", () => zoom_in(wrapper, "main section.gallery"));
    }
}
)
