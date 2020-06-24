let tabs = document.querySelectorAll(".services-tab");
let activeTab = document.querySelector(".services-tab-active");

for (let tab of tabs) {
    tab.addEventListener("click", event => {
        let target = event.target;
        activeText(target);
    });
}

function activeText(tabX) {
    if (activeTab) {
        activeTab.classList.remove("services-tab-active");
        let id = activeTab.dataset.toggle;
        let elem = document.getElementById(id);
        elem.hidden = true;
    }
    activeTab = tabX;
    activeTab.classList.add("services-tab-active");
    let id = activeTab.dataset.toggle;
    let elem = document.getElementById(id);
    elem.hidden = false;
}

