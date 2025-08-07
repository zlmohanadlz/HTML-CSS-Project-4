// add active class Dynamically
// in github it seems that href have repo link and github page link so will take the last part where path across

let websiteUrl = window.location.pathname;
console.log(websiteUrl);
let navLink = document.querySelectorAll("nav ul li a");

console.log(navLink[0].pathname);
navLink.forEach(function (el) {
    if (el.pathname === websiteUrl) {
        el.classList.add("active");
    } else if (websiteUrl === "/") {
        navLink[0].classList.add("active");
    } // handle the case if the last of pathname is / void
});
