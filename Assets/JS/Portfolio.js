let image_array = [
    {
        "url": "Assets/Images/Portfolio/_ (1).jpeg",
        "alt": "Portfolio image: _ (1).jpeg"
    },
    {
        "url": "Assets/Images/Portfolio/exerc1_card3.jpg",
        "alt": "Portfolio image: exerc1_card3.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/pexels-filiamariss-9417212.jpg",
        "alt": "Portfolio image: pexels-filiamariss-9417212.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/exerc1_card1.jpg",
        "alt": "Portfolio image: exerc1_card1.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/exerc1_card4.jpg",
        "alt": "Portfolio image: exerc1_card4.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/pexels-nemanja-vucic-2157177226-34592502.jpg",
        "alt": "Portfolio image: pexels-nemanja-vucic-2157177226-34592502.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/land-o-lakes-inc-BvZYHz9TeCk-unsplash.jpg",
        "alt": "Portfolio image: land-o-lakes-inc-BvZYHz9TeCk-unsplash.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/kimono.jpeg",
        "alt": "Portfolio image: kimono.jpeg"
    },
    {
        "url": "Assets/Images/Portfolio/pexels-oleksandr-plakhota-1270583835-34607826.jpg",
        "alt": "Portfolio image: pexels-oleksandr-plakhota-1270583835-34607826.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/pexels-miken-34533233.jpg",
        "alt": "Portfolio image: pexels-miken-34533233.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/_.jpeg",
        "alt": "Portfolio image: _.jpeg"
    },
    {
        "url": "Assets/Images/Portfolio/pexels-mxmaven-2156962353-34496646.jpg",
        "alt": "Portfolio image: pexels-mxmaven-2156962353-34496646.jpg"
    },
    {
        "url": "Assets/Images/Portfolio/face.jpeg",
        "alt": "Portfolio image: face.jpeg"
    },
    {
        "url": "Assets/Images/Portfolio/Mads Mikkelsen was born with these glasses on btw.jpeg",
        "alt": "Portfolio image: Mads Mikkelsen was born with these glasses on btw.jpeg"
    },
    {
        "url": "Assets/Images/Portfolio/porche.jpeg",
        "alt": "Portfolio image: porche.jpeg"
    },
    {
        "url": "Assets/Images/Portfolio/exerc1_card2.jpg",
        "alt": "Portfolio image: exerc1_card2.jpg"
    }
];



let image_galley = new ImageGallery(image_array, "main section.gallery .photos", "main section.gallery-overlay");

image_galley.load();