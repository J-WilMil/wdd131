const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const gallery = document.querySelector(".gallery");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Temple",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/800x500/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
    },
    {
        templeName: "Nauvoo Illinois Temple",
        location: "Nauvoo, Illinois",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756499-wallpaper.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple01.jpg"
    },
];

function createTempleCard({ templeName, location, dedicated, area, imageUrl }) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
        <img src="${imageUrl}" alt="${templeName}" loading="lazy" width="200">
        <figcaption>
            <h3>${templeName}</h3>
            <p>Location: ${location}</p>
            <p>Dedicated: ${dedicated}</p>
            <p>Area: ${area.toLocaleString()} sq ft</p>
        </figcaption>
    `;
    gallery.appendChild(figure);
}

function filterTemples(filter) {
    const year = (temple) => parseInt(temple.dedicated.split(",")[0]);

    const filters = {
        all: () => true,
        old: (temple) => year(temple) < 1900,
        new: (temple) => year(temple) > 2000,
        large: (temple) => temple.area > 90000,
        small: (temple) => temple.area < 10000,
    };

    return temples.filter(filters[filter] || filters.all);
}

function displayTemples(filter) {
    gallery.innerHTML = "";
    filterTemples(filter).forEach(createTempleCard);
}

displayTemples("all");

mainnav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const filter = e.target.textContent.toLowerCase();
        displayTemples(filter);
    }
});
