export function home () {
    const home = document.querySelector(".content");

    let heroHeader = document.createElement("h1");
    heroHeader.textContent = "Long Pizza";

    home.appendChild(heroHeader);
}
