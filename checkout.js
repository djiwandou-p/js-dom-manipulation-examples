// index.js

// 1. Storage: Array of Objects representing shopping items [3]
const cart = [
    { name: "Krabby Patty", price: 25000 },
    { name: "Kelp Shake", price: 15000 }
];

// Initial wallet balance [5]
var walletBalance = 50000; 

// 2. Function to update the DOM Tree [6, 7]
function renderCart() {
    const list = document.getElementById("product-list");
    const totalDisplay = document.getElementById("total");
    const balanceDisplay = document.getElementById("balance");
    
    let currentTotal = 0;
    list.innerHTML = ""; // Clear list before rendering [2]

    // 3. Showing the wallet balance in the HTML page
    balanceDisplay.innerHTML = walletBalance;

    // 4. Using a 'for' loop to iterate and change currency symbols [8]
    for (let i = 0; i < cart.length; i++) {
        // Engineering the display to show Rp instead of $
        list.innerHTML += `<p>${cart[i].name} - Rp ${cart[i].price}</p>`;
        currentTotal += cart[i].price;
    }

    totalDisplay.innerHTML = currentTotal;
    return currentTotal;
}

// Initializing the display
const finalPrice = renderCart();

// 5. Handling Checkout with Error Handling [9]
document.getElementById("checkoutBtn").onclick = function() {
    const status = document.getElementById("status");
    
    try {
        // Logic Branching to check if funds are sufficient [10, 11]
        if (finalPrice > walletBalance) {
            // Manually triggering a custom error [9]
            throw new Error("Insufficient IDR Balance!"); 
        }

        // Processing Success
        walletBalance -= finalPrice;
        document.getElementById("balance").innerHTML = walletBalance;
        status.innerHTML = "Payment Successful! Enjoy your meal.";
        status.style.color = "green"; // Changing CSS style [12]

    } catch (err) {
        // Catching the error to show a reasonable message [13]
        status.innerHTML = "Error: " + err.message;
        status.style.color = "red";
    }
};