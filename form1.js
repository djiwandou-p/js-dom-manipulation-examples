// validation of input fields using onchange [9]
document.getElementById("username").onchange = function() {
    // Systematic conversion to lowercase [10]
    this.value = this.value.toLowerCase();
};

document.getElementById("submitBtn").onclick = () => {
    const user = document.getElementById("username").value;
    const msg = document.getElementById("msg");

    // Logic branching to perform different actions based on conditions [8]
    if (user.length < 5) {
        msg.innerHTML = "Username too short!";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "Validation Successful!";
        msg.style.color = "green";
    }
};