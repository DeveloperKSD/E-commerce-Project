// Function to Display Cart Items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        document.getElementById("empty-cart").style.display = "block";
        subtotalElement.innerText = "₹0";
        totalElement.innerText = "₹0";
        return;
    } else {
        document.getElementById("empty-cart").style.display = "none";
    }

    let subtotal = 0;

    cart.forEach((product, index) => {
        subtotal += product.price * product.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${product.img}" alt="${product.name}">
                <div class="cart-item-details">
                    <h4>${product.name}</h4>
                    <p>₹${product.price} x ${product.quantity}</p>
                    <input type="number" min="1" value="${product.quantity}" onchange="updateQuantity(${index}, this.value)">
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    subtotalElement.innerText = `₹${subtotal}`;
    totalElement.innerText = `₹${subtotal}`;

    updateCartBadge();
}

// Function to Update Quantity
function updateQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = parseInt(newQuantity);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

// Function to Remove Item from Cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to Empty Cart
function emptyCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// Load Cart on Page Load
window.onload = displayCart;
