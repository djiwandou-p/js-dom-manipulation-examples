
// 1. Define the reusable engineering logic (Function) [2, 3]
function updateProfile() {
    // 2. Find the target objects in the DOM Tree by their ID [4, 5]
    const title = document.getElementById("profile-title");
    const bio = document.getElementById("bio");
    const image = document.getElementById("avatar");

    // 3. Execute content manipulation [6, 7]
    title.innerHTML = "Senior Software Engineer"; 
    bio.innerHTML = "I have successfully transitioned my career and am now a Tech Lead!";

    // 4. Change the value of an attribute (Image Swap) [8, 9]
    image.src = "https://res.cloudinary.com/ddk0iqdcz/image/upload/v1775730492/man-portrait2_7f75d4.jpg"; 

    // 5. Change the CSS style programmatically [10, 11]
    title.style.color = "darkgreen";
    title.style.fontWeight = "bold";
}

// 6. Assign the function as a callback for a Mouse Event [12, 13]
	document.getElementById("changeBtn").onclick = updateProfile;