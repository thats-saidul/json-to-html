const flowers = [
    {
        "id": 1,
        "name": "Rose",
        "scientific_name": "Rosa rubiginosa",
        "family": "Rosaceae",
        "origin": "Asia, Europe, North America, Northwestern Africa",
        "bloom_season": "Spring through Fall",
        "colors": ["Red", "Pink", "White", "Yellow", "Orange"],
        "description": "A woody perennial flowering plant known for its fragrant blooms, prickly stems, and cultural symbolism of love and beauty.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rosa_rubiginosa_1.jpg"
    },

    {
        "id": 2,
        "name": "Sunflower",
        "scientific_name": "Helianthus annuus",
        "family": "Asteraceae",
        "origin": "North America",
        "bloom_season": "Summer to Early Fall",
        "colors": ["Yellow", "Orange", "Red-Brown"],
        "description": "A tall annual plant featured by large daisy-like flower heads that display heliotropism, turning to follow the sun across the sky.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"
    },

    {
        "id": 3,
        "name": "Tulip",
        "scientific_name": "Tulipa gesneriana",
        "family": "Liliaceae",
        "origin": "Central Asia, Turkey",
        "bloom_season": "Spring",
        "colors": ["Red", "Purple", "Yellow", "Pink", "White"],
        "description": "A cup-shaped bulbous spring-blooming plant that comes in almost every color imaginable except true blue.",
        "image_url": "/tulip.jpg"
    },

    {
        "id": 4,
        "name": "Orchid",
        "scientific_name": "Phalaenopsis aphrodite",
        "family": "Orchidaceae",
        "origin": "Southeastern Asia, Australia",
        "bloom_season": "Winter to Spring",
        "colors": ["White", "Pink", "Purple", "Yellow"],
        "description": "Popularly known as the Moth Orchid, this epiphytic species produces long-lasting, bilateral blooms with complex petal structures.",
        "image_url": "/orchid.jpg"
    },

    {
        "id": 5,
        "name": "Lavender",
        "scientific_name": "Lavandula angustifolia",
        "family": "Lamiaceae",
        "origin": "Mediterranean",
        "bloom_season": "Late Spring to Summer",
        "colors": ["Purple", "Violet", "Blue-Grey"],
        "description": "An aromatic evergreen shrub prized for its sweet, soothing fragrance, essential oils, and dense spikes of purple blossoms.",
        "image_url": "/lavender.jpg"
    },

    {
        "id": 6,
        "name": "Lotus",
        "scientific_name": "Nelumbo nucifera",
        "family": "Nelumbonaceae",
        "origin": "Tropical Asia, Queensland",
        "bloom_season": "Summer",
        "colors": ["Pink", "White"],
        "description": "An aquatic perennial flower that roots in muddy pond bottoms while floating pristine leaves and blossoms high above the water's surface.",
        "image_url": "/lotus.jpg"
    }
];


// 1st ee test korer jonno manually likhlam .

/*console.log(flowers);

console.log(flowers[0]);

console.log(flowers[0].name);

console.log(flowers[0].scientific_name);

console.log(flowers[1].name);

console.log(flowers[0].colors);

console.log(flowers[0].colors[0]);

// for loop diye flowers array er moddhe thaka sob name print korar jonno
for (let i = 0; i < flowers.length; i++) {
    console.log(flowers[i].name);
}
    */


const container = document.getElementById("flower-container");// html er modde jei div ta nichi oi take khuje ber korlam.
const searchInput = document.getElementById("searchInput");
function displayFlowers(flowerArray) {
let flowerHTML = "";//ekta faka string variable nilam jekhane name gulo joma korbo.

//for (let i = 0; i < flowers.length; i++) {
flowers.forEach((flower) => {
    flowerHTML = flowerHTML + `
        <div class="card">
            <!--<h2>${flower.name}</h2>-->
            <!--<p><strong>Scientific Name:</strong> ${flower.scientific_name}</p>-->
            <!--<p><strong>Family:</strong> ${flower.family}</p>-->

            <!-- chobi gula dekhanur jonno img tag use korechi -->
            <img src="${flower.image_url}" alt="${flower.name}">
            
            <h2>${flower.name}</h2>
            <p><strong>Scientific Name:</strong> ${flower.scientific_name}</p>
            <p><strong>Family:</strong> ${flower.family}</p>
            
            <!-- join(", ") use kore array te jei colour gula tauhid bhai diche segulo koma diye add korechi -->
            <p><strong>Colors:</strong> ${flower.colors.join(", ")}</p>
        </div>
    `;
});
// কোনো ডাটা না পেলে একটা মেসেজ দেখাবে
    if(flowerArray.length === 0){
        container.innerHTML = "<p>No flowers found!</p>";
    } else {
        container.innerHTML = flowerHTML;
    }
}

// পেজ লোড হওয়ার পর সবগুলো ফুল দেখাবে
displayFlowers(flowers);

// সার্চ ফিল্টার লজিক
searchInput.addEventListener("input", function(event) {
    const searchedText = event.target.value.toLowerCase();
    
    const filteredData = flowers.filter((flower) => {
        return flower.name.toLowerCase().includes(searchedText);
    });

    displayFlowers(filteredData);
});
container.innerHTML = flowerHTML;//joma kora name gulo ke html er modde print korlam.