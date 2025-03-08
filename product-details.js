document.addEventListener("DOMContentLoaded", function () {
    loadProductDetails();
    updateCartBadge(); // Ensure badge updates on page load
});

// Sample products (Replace with dynamic data)
const products = [
    { id: 1, name: "Cozy Chair", price: 120, img: "Assets/beds/bed1.avif", category: "Chairs" },
    { id: 2, name: "Snug Sofa", price: 550, img: "Assets/chairs/chair11.jpeg", category: "Sofas" },
    { id: 3, name: "Dreamy Crib", price: 550, img: "Assets/cribs/crib5.jpeg", category: "Cribs" },
    { id: 4, name: "Tidy Drawer", price: 550, img: "Assets/storage/cupboard3.jpeg", category: "Storage" },
    { id: 5, name: "Tiny Table", price: 350, img: "Assets/tables/side4.jpeg", category: "Tables" },
    { id: 6, name: "Cloud Chair", price: 250, img: "Assets/chairs/chair11.jpeg", category: "Chairs" },
    { id: 7, name: "Hug Sofa", price: 620, img: "Assets/couch/couch14.jpeg", category: "Sofas" },
    { id: 8, name: "Baby Nest", price: 480, img: "Assets/cribs/crib5.jpeg", category: "Cribs" },
    { id: 9, name: "Neat Shelf", price: 700, img: "Assets/storage/cupboard3.jpeg", category: "Shelf" },
    { id: 10, name: "Sunny Sofa", price: 450, img: "Assets/couch/couch14.jpeg", category: "Sofas" },
    { id: 11, name: "Warm Bed", price: 180, img: "Assets/beds/bed1.avif", category: "Beds" },
    { id: 12, name: "Comfy Chair", price: 750, img: "Assets/chairs/chair11.jpeg", category: "Chairs" },
    { id: 13, name: "Sleepy Crib", price: 600, img: "Assets/cribs/crib5.jpeg", category: "Cribs" },
    { id: 14, name: "Snug Drawer", price: 520, img: "Assets/storage/cupboard3.jpeg", category: "Storage" },
    { id: 15, name: "Breezy Couch", price: 880, img: "Assets/couch/couch14.jpeg", category: "Sofas" },
    { id: 16, name: "Fuzzy Bed", price: 190, img: "Assets/beds/bed2.jpeg", category: "Beds" },
    { id: 17, name: "Cuddle Chair", price: 670, img: "Assets/chairs/chair12.jpeg", category: "Chairs" },
    { id: 18, name: "Moon Crib", price: 520, img: "Assets/cribs/crib1.jpeg", category: "Cribs" },
    { id: 19, name: "Soft Storage Box", price: 300, img: "Assets/storage/cupboard10.jpeg", category: "Storage" },
    { id: 20, name: "Peachy Table", price: 400, img: "Assets/couch/couch15.jpeg", category: "Tables" },
    { id: 21, name: "Feather Bed", price: 220, img: "Assets/beds/bed3.jpeg", category: "Beds" },
    { id: 22, name: "Fluffy Chair", price: 800, img: "Assets/chairs/chair13.jpeg", category: "Chairs" },
    { id: 23, name: "Starry Crib", price: 650, img: "Assets/cribs/crib2.jpeg", category: "Cribs" },
    { id: 24, name: "Mini Cabinet", price: 450, img: "Assets/storage/cupboard4.jpeg", category: "Storage" },
    { id: 25, name: "Mint Table", price: 500, img: "Assets/tables/side1.jpeg", category: "Tables" },
    { id: 26, name: "Twilight Bed", price: 210, img: "Assets/beds/bed4.jpeg", category: "Beds" },
    { id: 27, name: "Bubbly Sofa", price: 900, img: "Assets/couch/couch8.jpeg", category: "Sofas" },
    { id: 28, name: "Bunny Crib", price: 700, img: "Assets/cribs/crib3.jpeg", category: "Cribs" },
    { id: 29, name: "Cozy Cube", price: 370, img: "Assets/chairs/chair10.jpeg", category: "Chairs" },
    { id: 30, name: "Sky Table", price: 570, img: "Assets/tables/coffee2.jpeg", category: "Tables" },
    { id: 31, name: "Toasty Chair", price: 240, img: "Assets/chairs/chair6.avif", category: "Chairs" },
    { id: 32, name: "Lazy Lounge Sofa", price: 890, img: "Assets/couch/couch12.jpeg", category: "Sofas" },
    { id: 33, name: "Doodle Crib", price: 720, img: "Assets/cribs/crib5.jpeg", category: "Cribs" },
    { id: 34, name: "Lush Shelf", price: 490, img: "Assets/storage/shelf1.jpeg", category: "Shelf" },
    { id: 35, name: "Marshmallow Seat", price: 600, img: "Assets/chairs/chair4.avif", category: "Chairs" },
    { id: 36, name: "Bubblegum Chair", price: 260, img: "Assets/chairs/chair15.png", category: "Chairs" },
    { id: 37, name: "Puffy Sofa", price: 940, img: "Assets/couch/couch16.png", category: "Sofas" },
    { id: 38, name: "Star Crib", price: 750, img: "Assets/cribs/crib2.jpeg", category: "Cribs" },
    { id: 39, name: "Hug Me Drawer", price: 420, img: "Assets/storage/cupboard5.jpeg", category: "Storage" },
    { id: 40, name: "Cocoa Table", price: 660, img: "Assets/tables/coffee1.jpeg", category: "Tables" }
];


// Function to get product ID from URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load product details
function loadProductDetails() {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id == productId);

    if (!product) {
        document.body.innerHTML = "<h2>Product Not Found</h2>";
        return;
    }

    document.getElementById("product-img").src = product.img;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = `₹${product.price}`;
    document.getElementById("product-description").innerText = product.description;

    const addToCartBtn = document.getElementById("add-to-cart");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            addToCart(product);
        });
    }
}

// Function to Add to Cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in the cart
    let existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
        product.quantity = 1; // Set quantity to 1 for new item
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show confirmation message
    alert(`${product.name} has been added to your cart!`);

    // Update cart badge count
    updateCartBadge();
}

// Function to Update Cart Badge
function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Sum of all items
    document.getElementById("cart-badge").innerText = cartCount;
}

// Call updateCartBadge() on page load
window.onload = function () {
    loadProductDetails();
    updateCartBadge();
};


// Function to update cart badge count
function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartBadge = document.getElementById("cart-badge");
    if (cartBadge) {
        if (cart.length > 0) {
            cartBadge.style.display = "block";
            cartBadge.innerText = cart.length;
        } else {
            cartBadge.style.display = "none";
        }
    }
}

// Function to show confirmation pop-up
function showPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("cart-popup");
    popup.innerText = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => popup.remove(), 500);
    }, 2000);
}
