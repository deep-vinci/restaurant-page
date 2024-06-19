import "./style.css";

import { home } from "../components/home.js";
import { menu } from "../components/menu.js";
import { about } from "../components/about.js";

const content = document.querySelector(".content");

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button"); 
const buttons = document.querySelectorAll("header nav button") 

window.addEventListener("load", () => {
    homeButton.click();
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        content.childNodes.forEach(elem => {
            elem.remove();
        })    
    })
})

const addClickListener = (button, handler) => {
    button.addEventListener("click", handler);
}

addClickListener(homeButton, home);
addClickListener(menuButton, menu);
addClickListener(aboutButton, about);
