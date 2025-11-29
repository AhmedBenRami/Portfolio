let image_array = [
    {
        "url": "../Assets/Images/Portfolio/jeff-w-cf9RPUGIho8-unsplash.jpg",
        "alt": "Portfolio image: jeff-w-cf9RPUGIho8-unsplash.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/flash-dantz-nwoMIuSyGl0-unsplash.jpg",
        "alt": "Portfolio image: flash-dantz-nwoMIuSyGl0-unsplash.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/carlos-rodriguez-b0GbrDtWFSs-unsplash.jpg",
        "alt": "Portfolio image: carlos-rodriguez-b0GbrDtWFSs-unsplash.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/pexels-filiamariss-9417212.jpg",
        "alt": "Portfolio image: pexels-filiamariss-9417212.jpg",
        "category": "Photo session"
    },
    {
        "url": "../Assets/Images/Portfolio/william-krause-0zERrbey8XM-unsplash.jpg",
        "alt": "Portfolio image: william-krause-0zERrbey8XM-unsplash.jpg",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/mary-anne-twimbers-sO7EEM3GO0w-unsplash.jpg",
        "alt": "Portfolio image: mary-anne-twimbers-sO7EEM3GO0w-unsplash.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/jesus-eca-c5E6rpftvl4-unsplash.jpg",
        "alt": "Portfolio image: jesus-eca-c5E6rpftvl4-unsplash.jpg",
        "category": "Product"
    },
    {
        "url": "../Assets/Images/Portfolio/pexels-nemanja-vucic-2157177226-34592502.jpg",
        "alt": "Portfolio image: pexels-nemanja-vucic-2157177226-34592502.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/ela-de-pure-2Sb9AlbC9cI-unsplash.jpg",
        "alt": "Portfolio image: ela-de-pure-2Sb9AlbC9cI-unsplash.jpg",
        "category": "Product"
    },
    {
        "url": "../Assets/Images/Portfolio/pexels-oleksandr-plakhota-1270583835-34607826.jpg",
        "alt": "Portfolio image: pexels-oleksandr-plakhota-1270583835-34607826.jpg",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/pexels-miken-34533233.jpg",
        "alt": "Portfolio image: pexels-miken-34533233.jpg",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/seungcheol-baek-4WZSlCvk8DE-unsplash.jpg",
        "alt": "Portfolio image: seungcheol-baek-4WZSlCvk8DE-unsplash.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/possumvii-iviiss-BkrmRzcB0pU-unsplash.jpg",
        "alt": "Portfolio image: possumvii-iviiss-BkrmRzcB0pU-unsplash.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/artem-ivanov-6sx7VjBN7q8-unsplash.jpg",
        "alt": "Portfolio image: artem-ivanov-6sx7VjBN7q8-unsplash.jpg",
        "category": "Nature"
    },
    {
        "url": "../Assets/Images/Portfolio/piotr-RKmMIr63kTE-unsplash.jpg",
        "alt": "Portfolio image: piotr-RKmMIr63kTE-unsplash.jpg",
        "category": "Architecture"
    },
    {
        "url": "../Assets/Images/Portfolio/laura-chouette-IpHxKyATsvk-unsplash.jpg",
        "alt": "Portfolio image: laura-chouette-IpHxKyATsvk-unsplash.jpg",
        "category": "Product"
    },
    {
        "url": "../Assets/Images/Portfolio/Mads Mikkelsen was born with these glasses on btw.jpeg",
        "alt": "Portfolio image: Mads Mikkelsen was born with these glasses on btw.jpeg",
        "category": "Photo session"
    },
    {
        "url": "../Assets/Images/Portfolio/chouaib-maiza-OARqrr4QCX8-unsplash.jpg",
        "alt": "Portfolio image: chouaib-maiza-OARqrr4QCX8-unsplash.jpg",
        "category": "Photo session"
    },
    {
        "url": "../Assets/Images/Portfolio/bora-sozuer-dGYIWKq7rxg-unsplash.jpg",
        "alt": "Portfolio image: bora-sozuer-dGYIWKq7rxg-unsplash.jpg",
        "category": "Photo session"
    }
];



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

