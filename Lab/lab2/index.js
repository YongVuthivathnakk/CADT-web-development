// Main
let start1 = document.getElementById("start1")
let output1 = document.getElementById("")
    // Exercise 1
start1.onclick = function () {
    let data = [
        { name: "Apples", price: 2.5, quantity: 3 },
        { name: "Bananas", price: 1.5, quantity: 2 },
        { name: "Oranges", price: 3, quantity: 1 },
    ]
    let shoppingCart = [];
    
}





// Function
    
    // Exercise 1
    
const calculateTotalPrice = (shoppingCart) => {
    let totalPrice = 0;
    for (let item of shoppingCart) {
        totalPrice += item.price * item.quantity;
    }
    console.log("Total price:", totalPrice);
}