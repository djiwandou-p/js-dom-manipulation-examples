// 1. Finding HTML elements by ID
const submitBtn = document.getElementById("submitBtn");
const userPhotoInput = document.getElementById("userPhoto");

// 2. Handle Image Selection using the onchange Event
userPhotoInput.onchange = function() {
    // Check if files exist AND first file is valid
    if (userPhotoInput.files && userPhotoInput.files.length > 0) {
        const selectedFile = userPhotoInput.files[0];
        
        // Optional: Validate image type
        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("viewImg").src = e.target.result;
            };
            reader.readAsDataURL(selectedFile);
        } else {
            alert('Please select an image file!');
        }
    }
};

// 3. Handle Form Submission (unchanged)
submitBtn.onclick = function() {
    const submissionData = {
        name: document.getElementById("fullName").value,
        date: document.getElementById("eventDate").value
    };

    if (submissionData.name === "" || submissionData.date === "") {
        alert("Please fill in all fields!");
    } else {
        document.getElementById("viewName").innerHTML = submissionData.name;
        document.getElementById("viewDate").innerHTML = submissionData.date;
        
        document.getElementById("previewSection").style.display = "block";
        document.getElementById("previewSection").style.padding = "15px";
    }
};
