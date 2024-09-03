export default function homePageLoad(){
   const content = document.getElementById("content");

   const title = document.createElement("h1");
    title.textContent = "Welcome to Gourmet Delights";

    const para1 = document.createElement("p");
    para1.textContent = ("At Gourmet Delights, we believe in the art of fine dining. Our menu features a curated selection of dishes, each crafted with the freshest ingredients and a passion for culinary excellence.");
 
    const para2 = document.createElement("p");
    para2.textContent = ("Join us for an unforgettable dining experience where every meal is a celebration of flavor, creativity, and tradition. Whether you're here for a casual lunch, a romantic dinner, or a special occasion, Gourmet Delights promises to deliver an exceptional experience.");

    const para3 = document.createElement("p");
    para3.textContent = ("We look forward to welcoming you and making your dining experience truly memorable.");



    content.appendChild(title);
    content.appendChild(para1);
    content.appendChild(para2);
    content.appendChild(para3);
}