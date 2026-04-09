// Finding the element by ID [3]
const btn = document.getElementById("toggleBtn");

// Using an anonymous function as an onclick event handler [4]
btn.onclick = function() {
    document.getElementById("header").innerHTML = "Hello, Software Engineer!"; // [2]
};