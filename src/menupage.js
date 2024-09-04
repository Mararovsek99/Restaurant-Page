export default function menuPageLoad(){
    const content = document.getElementById("content");
const title = document.createElement("h1");
title.textContent = "Our Menu";


const para1 = document.createElement("p");
para1.textContent = "Explore our exquisite menu featuring a variety of dishes meticulously prepared to delight your senses.";

const para2 = document.createElement("p");
para2.textContent = "From appetizers to desserts, each dish at Gourmet Delights is crafted using the finest ingredients, ensuring a culinary experience that exceeds expectations.";

const para3 = document.createElement("p");
para3.textContent = "Whether you're craving a hearty steak, fresh seafood, or a vegetarian delight, our menu offers something for every palate.";

content.appendChild(title);
content.appendChild(para1);
content.appendChild(para2);
content.appendChild(para3);

}