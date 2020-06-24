const allLinks = document.querySelector(".navbar-menu");
let activeLink = document.querySelector(".active-link");

allLinks.addEventListener("click", event => {
    let target = event.target;
    if (target.tagName !== "A") return;
    toggleLink(target)
});

function toggleLink(link)  {
    activeLink.classList.remove("active-link");
    activeLink = link;
    activeLink.classList.add("active-link");
}