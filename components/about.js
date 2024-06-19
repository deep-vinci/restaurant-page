export function about () {
    const about = document.querySelector(".content");

    let aboutDiv = document.createElement("h1");
    aboutDiv.textContent = "About page";

    about.appendChild(aboutDiv);

}