const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const hamburgerMenu = document.querySelector(".hamburgerBtn");
const navigationBar = document.querySelector("nav");
const navItem = document.querySelectorAll(".item");
const mq = window.matchMedia("(min-width: 768px)");
const templeContainer = document.querySelector("#temple-container");
const templeCards = document.querySelectorAll(".temple-card");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        "templeName": "Davao Philippines",
        "location": "Davao City, Davao del Sur, Philippines",
        "dedicated": "2026, May, 3",
        "area": 18450,
        "imageUrl": "../images/davao-temple.webp"
    },
    {
        "templeName": "Manila Philippines",
        "location": "Quezon City, Metro Manila, Philippines",
        "dedicated": "1984, September, 25",
        "area": 26683,
        "imageUrl": "../images/manila-temple.webp"
    },
    {
        "templeName": "Cebu City Philippines",
        "location": "Cebu City, Cebu, Philippines",
        "dedicated": "2010, June, 13",
        "area": 29556,
        "imageUrl": "../images/cebu-temple.webp"
    },

];


const today = new Date();


currentyear.innerHTML = today.getFullYear();

lastModified.textContent = document.lastModified;

hamburgerMenu.addEventListener("click", function () {
    navItem.forEach(item => {
        if (item.classList.contains("open")) {
            item.classList.replace("open", "close");
        } else {
            item.classList.replace("close", "open");
        }
    })

    if (hamburgerMenu.textContent.includes("☰")) {
        hamburgerMenu.textContent = "✕";
    } else {
        hamburgerMenu.textContent = "☰";
    }

})

function createTempleCard(name, location, date, size, imgUrl) {
    // create elements
    const card = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardLocation = document.createElement("p");
    const cardDedication = document.createElement("p");
    const cardArea = document.createElement("p");
    const cardImg = document.createElement("img");


    //adding class
    card.classList.add("temple-card");
    cardTitle.classList.add("temple-name");
    cardLocation.classList.add("temple-location");
    cardDedication.classList.add("temple-dedicated");
    cardArea.classList.add("temple-size");
    cardImg.setAttribute("alt", `${name} temple image`);


    //adding values
    cardTitle.textContent = name;
    cardLocation.textContent = location;
    cardDedication.textContent = date;
    cardArea.textContent = size;
    cardImg.setAttribute("src", imgUrl);
    cardImg.setAttribute("loading", "lazy");
    cardImg.setAttribute("width", "277");
    cardImg.setAttribute("height", "174");


    //appending to card
    card.appendChild(cardTitle);
    card.appendChild(cardLocation);
    card.appendChild(cardDedication);
    card.appendChild(cardArea);
    card.appendChild(cardImg);

    //appending card to container
    templeContainer.appendChild(card);
}

temples.map((temple) => createTempleCard(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl));

navItem.forEach(item => {
    item.addEventListener("click", function (event) {
        if (item.textContent === "Old") {
            templeContainer.replaceChildren();
            let filtered = temples.filter(function (temple) {
                let strDate = temple.dedicated.split(",");
                let year = parseInt(strDate[0]);
                if (year < 1900) {
                    return true;
                }
            })

            filtered.map((temple) => createTempleCard(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl))
        }

        if (item.textContent === "New") {
            templeContainer.replaceChildren();
            let filtered = temples.filter(function (temple) {
                let strDate = temple.dedicated.split(",");
                let year = parseInt(strDate[0]);
                if (year > 2000) {
                    return true;
                }
            })
            filtered.map((temple) => createTempleCard(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl))
        }

        if (item.textContent === "Large") {
            templeContainer.replaceChildren();
            let filtered = temples.filter(function (temple) {
                let area = temple.area;
                if (area > 90000) {
                    return true;
                }
            })
            filtered.map((temple) => createTempleCard(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl))
        }

        if (item.textContent === "Small") {
            templeContainer.replaceChildren();
            let filtered = temples.filter(function (temple) {
                let area = temple.area;
                if (area < 10000) {
                    return true;
                }
            })
            filtered.map((temple) => createTempleCard(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl))
        }

        if (item.textContent === "Home") {
            temples.map((temple) => createTempleCard(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl));
        }
    })
})




