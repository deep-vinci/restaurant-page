export const menu = () => {
    const menu = document.querySelector(".content");

    let menuDiv = document.createElement("h1");
    menuDiv.textContent = "Menu";

    menu.appendChild(menuDiv);

}