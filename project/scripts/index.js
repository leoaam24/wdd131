const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const faqlist = document.querySelector("#faqList");
const navigationItems = document.querySelectorAll(".navItem");
const form = document.querySelector("#inquireForm");
const uname = document.querySelector("#uname");
const email = document.querySelector("#email");
const hammenu = document.querySelector("#hammenu");
const mq = window.matchMedia('(min-width: 1024px)');



const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.textContent = document.lastModified;

const faqList = [
    {
        "question":
            "What do I pay first?",
        "answer":
            "SeeYou-Debt shows you."
    },
    {
        "question":
            "How much should I pay?",
        "answer":
            "SeeYou-Debt calculates a plan."
    },
    {
        "question":
            "When will I be debt-free?",
        "answer":
            "SeeYou-Debt estimates your timeline."
    },
    {
        "question":
            "How much could I save?",
        "answer":
            "SeeYou-Debt compares your options."
    },
    {
        "question":
            "I have too many debts.",
        "answer":
            "SeeYou-Debt organizes them."
    },
    {
        "question":
            "I don't know exactly what I owe.",
        "answer":
            "Start with what you know and refine it later."
    }

]

if (faqlist) {
    faqList.map(function (item) {
        const list = document.createElement("li");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        list.appendChild(h3);
        list.appendChild(p);

        h3.innerHTML = `<em>"${item.question}"</em>`;
        p.textContent = item.answer;

        faqlist.appendChild(list);
    })
}


if (window.location.pathname === '/index.html') {
    navigationItems.forEach(function (item) {
        if (item.textContent === "Home") {
            item.classList.add("active");
        }
    })
}

if (window.location.pathname === '/aboutus.html') {
    navigationItems.forEach(function (item) {
        if (item.textContent === "About Us") {
            item.classList.add("active");
        }
    })
}

if (window.location.pathname === '/contact.html') {
    navigationItems.forEach(function (item) {
        if (item.textContent === "Contact") {
            item.classList.add("active");
        }
    })
}

if (form) {
    form.addEventListener("submit", function () {
        alert("Thank you for expressing your interest. We will get back to you shortly.");
        localStorage.setItem("uname", uname.value);
        localStorage.setItem("email", email.value);
    })
}

hammenu.addEventListener("click", function () {
    navigationItems.forEach(item => {
        if (item.classList.contains("open")) {
            item.classList.replace("open", "close");
        } else {
            item.classList.replace("close", "open");
        }
    })

    if (hammenu.textContent.includes("☰")) {
        hammenu.textContent = "X";
    } else {
        hammenu.textContent = "☰";
    }
})


mq.addEventListener("change", function () {
    if (mq.matches) {
        navigationItems.forEach(item => {
            if (item.classList.contains("close")) {
                item.classList.replace("close", "open");
            }
        })
    } else {
        navigationItems.forEach(item => {
            if (item.classList.contains("open")) {
                item.classList.replace("open", "close");
            }
        })
    }
})


if (mq.matches) {
    navigationItems.forEach(item => {
        if (item.classList.contains("close")) {
            item.classList.replace("close", "open");
        }
    })
}







