// 1. Finding HTML elements by ID
const submitBtn = document.getElementById("submitBtn");
const userPhotoInput = document.getElementById("userPhoto");

// 2. Handle Image Selection using the onchange Event
userPhotoInput.onchange = function() {
    // FIX: Get the FIRST file from FileList using index [0]
    const selectedFile = userPhotoInput.files[0];  // ← This was the issue!

    // Logic Branching: Ensure a file was actually selected
    if (selectedFile) {  // ← Check single file, not FileList
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Find the image element in the DOM Tree
            const previewImage = document.getElementById("viewImg");
            // Change the attribute value to show the preview
            previewImage.src = e.target.result; 
        };
        
        // Now passes single File object (not FileList)
        reader.readAsDataURL(selectedFile);
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
