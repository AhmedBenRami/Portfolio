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


//show load animation
// load_animation();

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


