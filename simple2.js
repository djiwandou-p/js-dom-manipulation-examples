const box = document.getElementById("box");
const img = document.getElementById("statusImg");

// Detections of user interaction via Mouse Events [6]
box.onmouseover = () => {
    box.style.backgroundColor = "red"; // Changing CSS style [5]
    img.src = "https://res.cloudinary.com/ddk0iqdcz/image/upload/v1775732539/feast_072077.jpg"; // Changing an attribute value [7]
};

box.onmouseout = () => {
    box.style.backgroundColor = "blue";
    img.src = "https://res.cloudinary.com/ddk0iqdcz/image/upload/v1775732424/breakfast2_1b4c9c.jpg";
};