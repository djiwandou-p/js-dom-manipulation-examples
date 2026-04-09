// 1. Finding HTML elements by ID [9]
const submitBtn = document.getElementById("submitBtn");
const userPhotoInput = document.getElementById("userPhoto");

// 2. Handle Image Selection using the onchange Event [10]
userPhotoInput.onchange = function() {
    // SYSTEMATIC FIX: Access index  to get the individual File object
    const selectedFile = userPhotoInput.files; 

    // Logic Branching: Ensure a file was actually selected [4]
    if (selectedFile) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Find the image element in the DOM Tree [5]
            const previewImage = document.getElementById("viewImg");
            // Change the attribute value to show the preview [6]
            previewImage.src = e.target.result; 
        };
        
        // Pass the single File object, not the entire list
        reader.readAsDataURL(selectedFile);
    }
};

// 3. Handle Form Submission using the onclick Event [12]
submitBtn.onclick = function() {
    // Creating an Object to store the data systematically [13, 14]
    const submissionData = {
        name: document.getElementById("fullName").value,
        date: document.getElementById("eventDate").value
    };

    // 4. Logic Branching: Ensure fields are not empty [15]
    if (submissionData.name === "" || submissionData.date === "") {
        alert("Please fill in all fields!");
    } else {
        // 5. Change HTML Content and Styles [4, 16]
        document.getElementById("viewName").innerHTML = submissionData.name;
        document.getElementById("viewDate").innerHTML = submissionData.date;
        
        // Changing CSS display property to show the hidden section [16]
        document.getElementById("previewSection").style.display = "block";
        document.getElementById("previewSection").style.padding = "15px";
    }
};