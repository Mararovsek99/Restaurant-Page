import "./styles.css";
import homePageLoad from './homepage.js';
import menuPageLoad from './menupage.js';
import aboutPageLoad from './aboutpage.js';


document.addEventListener('DOMContentLoaded', () => {
    homePageLoad();
});

const pageButtons = document.querySelector("nav");

    pageButtons.addEventListener("click", function(event){

        const contentDiv = document.querySelector("#content");


        if(event.target.textContent === "Home"){
            contentDiv.innerHTML = "";
            homePageLoad();
        }
        else if(event.target.textContent === "Menu"){
            contentDiv.innerHTML = "";
            menuPageLoad();
        }
        else if(event.target.textContent === "About"){
            contentDiv.innerHTML = "";
            aboutPageLoad();
        }
    });
