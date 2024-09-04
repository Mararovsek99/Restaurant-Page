export default function aboutPageLoad(){
   const content = document.getElementById("content");

const title = document.createElement("h1");
title.textContent = "About Us";

const para1 = document.createElement("p");
para1.textContent = "At Gourmet Delights, our passion for fine dining is rooted in a love for exceptional food and hospitality.";

const para2 = document.createElement("p");
para2.textContent = "Founded with the vision of creating a dining experience that combines elegance and comfort, we take pride in offering dishes that are as delightful to the eye as they are to the palate.";

const para3 = document.createElement("p");
para3.textContent = "Our team of talented chefs and dedicated staff work tirelessly to ensure every guest feels welcome and every meal is memorable. We believe that dining is not just about food, but about creating lasting memories.";

content.appendChild(title);
content.appendChild(para1);
content.appendChild(para2);
content.appendChild(para3);

}