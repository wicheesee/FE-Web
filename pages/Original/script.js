// Navbar
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".navbar").toggleClass("active");
    });
});

// Carousel
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) {
        scrollPosition += cardWidth;
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 100);
    }
});

$(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $(".carousel-inner").animate(
            { scrollLeft: scrollPosition },
            100
        );
    }
});

var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
    //rest of the code
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}

var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
    wrap: false,
});

// I'm ded
const members = [{
    name: "Stevan Lukas Siahaan",
    nim: "535220053",
    path: "../../assets/profiles/lukas.jpg",
    task: "HTML"
}, {
    name: "Elsie",
    nim: "535220076",
    path: "../../assets/profiles/elsie.jpg",
    task: "CSS"
}, {
    name: "Richard Vincentius",
    nim: "535220077",
    path: "../../assets/profiles/richard.jpg",
    task: "JAVASCRIPT"
}, {
    name: "Michael Chan",
    nim: "535220079",
    path: "../../assets/profiles/michael.jpg",
    task: "JAVASCRIPT"
}, {
    name: "Jechenthia Maria Taso",
    nim: "535220081",
    path: "../../assets/profiles/jechey.jpg",
    task: "HTML"
}, {
    name: "Chelsia Cindeleria Herwanto",
    nim: "535220083",
    path: "../../assets/profiles/chelsia.jpg",
    task: "HTML"
}, {
    name: "Kevin Natanael",
    nim: "535220084",
    path: "../../assets/profiles/kevin.jpg",
    task: "JAVASCRIPT"
}, {
    name: "Emmanuel Garcia Sumargo",
    nim: "535220103",
    path: "../../assets/profiles/nuel.jpg",
    task: "CSS"
}, {
    name: "Gabriella Ignatia",
    nim: "535220104",
    path: "../../assets/profiles/gab.jpg",
    task: "CSS"
}, {
    name: "Widya Khaerunnisyah",
    nim: "535220262",
    path: "../../assets/profiles/widya.jpg",
    task: "CSS"
}];

function createMemberTableRow(obj) {
    return `<tr><td>${obj.name}</td><td><i>${obj.nim}</i></td></tr>`;
}
 
let table = document.querySelector('.member-table');
let content = "";
members.forEach(member => {
    content += createMemberTableRow(member);
});

table.innerHTML = content;

function createCarouselItem(obj) {
    let item = '<div class="carousel-item active">'
    + '<div class="card">'
    + '<div class="img-wrapper">'
    + `<img src=${obj.path} class="d-block w-100" alt=${obj.name} >`
    + "</div>"
    + '<div class="card-body">'
    + `<h5 class="card-title">${obj.name}</h5>`
    + '<p class="card-text">Mahasiswa FTI UNTAR Angkatan 2022. Berperan dalam pengembangan situs web di bagian '
    + `<span class="span-${obj.task.toLowerCase()}">${obj.task}</span>.`
    + '</p></div></div></div>';

    return item;
}

let crsl = document.querySelector('.carousel-inner');
let carouselContent = "";
members.forEach(member => {
    carouselContent += createCarouselItem(member);
});

crsl.innerHTML = carouselContent;

