const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const hamburgerMenu = document.querySelector(".hamburgerBtn");
const navigationBar = document.querySelector("nav");
const navItem = document.querySelectorAll(".item");
const mq = window.matchMedia("(min-width: 768px)");
const productField = document.querySelector("#products");
const productReviewForm = document.querySelector("#prf");

// //formSubmittedValues
// const productPicked = document.querySelector("#products").value;
// const rating = document.querySelector("#prf").elements.rating.value;
// const installDate = document.querySelector("#installDate").value;
// const selectedFeatures = document.querySelectorAll("input[name=features]:checked");
// const writtenReview = document.querySelector("#writtenReview").value;
// const userName = document.querySelector("#userName").value;



const today = new Date();

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

currentyear.innerHTML = today.getFullYear();

lastModified.textContent = document.lastModified;

// hamburgerMenu.addEventListener("click", function () {
//     navItem.forEach(item => {
//         if (item.classList.contains("open")) {
//             item.classList.replace("open", "close");
//         } else {
//             item.classList.replace("close", "open");
//         }
//     })

//     if (hamburgerMenu.textContent.includes("☰")) {
//         hamburgerMenu.textContent = "✕";
//     } else {
//         hamburgerMenu.textContent = "☰";
//     }


// })


products.map(function (item) {
    const option = document.createElement("option");

    option.setAttribute("id", item.id);
    option.setAttribute("name", item.name);
    option.setAttribute("averagerating", item.averagerating);
    option.textContent = item.name;

    productField.appendChild(option);
})

productReviewForm.addEventListener("submit", function () {
    if ('reviewsCompleted' in localStorage) {
        let currentValue = parseInt(localStorage.getItem("reviewsCompleted"));
        currentValue += 1;
        localStorage.setItem("reviewsCompleted", currentValue);
    } else {
        localStorage.setItem("reviewsCompleted", 1);
    }

})








