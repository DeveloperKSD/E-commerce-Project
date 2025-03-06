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


/*
const productContainer = document.querySelector(".bento-container");

function displayProducts() {
    productContainer.innerHTML = ""; // Clear existing content
    products.forEach(product => {
        const productHTML = `
            <div class="bento-item"> 
                <img src="${product.img}" alt="${product.name}"> 
                <h3>${product.name}</h3> 
                <p>₹${product.price}</p> 
                <div class="product-buttons"> 
                    <button class="buy">Buy</button> 
                    <button class="rent">Rent</button>
                </div>
            </div> 
        `;
        productContainer.innerHTML += productHTML;
    });
}

displayProducts();
*/





const productContainer = document.querySelector(".bento-container");
const categoryItems = document.querySelectorAll(".category-item");
let activeCategory = "All"; // Keeps track of the currently selected category

// Function to display products
function displayProducts(filteredProducts) {
    productContainer.innerHTML = ""; // Clear existing content
    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="bento-item"> 
                <img src="${product.img}" alt="${product.name}"> 
                <h3>${product.name}</h3> 
                <p>₹${product.price}</p> 
                <div class="product-buttons"> 
                    <button class="buy">Buy</button> 
                    <button class="rent">Rent</button>
                </div>
            </div> 
        `;
        productContainer.innerHTML += productHTML;
    });
}

// Function to filter products by category
function filterProducts(category) {
    if (category === activeCategory) {
        // If the same category is clicked again, show all products
        activeCategory = "All";
        displayProducts(products);
        categoryItems.forEach(section => section.classList.remove("active-category"));
    } else {
        // Show only the selected category
        activeCategory = category;
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);

        // Highlight the active category
        categoryItems.forEach(section => section.classList.remove("active-category"));
        document.querySelector(`[data-category="${category}"]`).classList.add("active-category");
    }
}

// Add event listeners to category sections
categoryItems.forEach(item => {
    item.addEventListener("click", () => {
        const selectedCategory = item.getAttribute("data-category");
        filterProducts(selectedCategory);
    });
});

// Show all products by default
displayProducts(products);


//Price Filter
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const applyPriceFilterBtn = document.getElementById("apply-price-filter");
const resetFiltersBtn = document.getElementById("reset-filters");
const filterToggleBtn = document.getElementById("filter-toggle");
const priceFilterContainer = document.getElementById("price-filter-container");
const noProductsMessage = document.getElementById("no-products-message");

// Toggle price filter visibility
filterToggleBtn.addEventListener("click", () => {
    priceFilterContainer.style.display = 
        priceFilterContainer.style.display === "none" ? "flex" : "none";
});

// Function to filter products by price
function filterByPrice() {
    let minPrice = parseInt(minPriceInput.value) || 0;
    let maxPrice = parseInt(maxPriceInput.value) || Infinity;

    let filteredProducts = products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );

    // If a category is selected, filter within that category
    if (activeCategory !== "All") {
        filteredProducts = filteredProducts.filter(product => product.category === activeCategory);
    }

    // Show "No Products Found" message if nothing matches
    if (filteredProducts.length === 0) {
        noProductsMessage.style.display = "block";
    } else {
        noProductsMessage.style.display = "none";
    }

    displayProducts(filteredProducts);
}

// Function to reset all filters
function resetFilters() {
    minPriceInput.value = "";
    maxPriceInput.value = "";
    activeCategory = "All";
    displayProducts(products);
    categoryItems.forEach(section => section.classList.remove("active-category"));
    noProductsMessage.style.display = "none";
}

// Event listeners
applyPriceFilterBtn.addEventListener("click", filterByPrice);
resetFiltersBtn.addEventListener("click", resetFilters);

// Show all products by default
displayProducts(products);



//High to Low/ Low to High
const sortLowHighBtn = document.getElementById("sort-low-high");
const sortHighLowBtn = document.getElementById("sort-high-low");

let currentSort = "default"; // Track current sorting method

// Function to apply sorting or reset if clicked again
function sortProducts(sortType) {
    let sortedProducts = [...products]; // Copy array to avoid modifying original

    // If a category is active, filter products in that category first
    if (activeCategory !== "All") {
        sortedProducts = sortedProducts.filter(product => product.category === activeCategory);
    }

    // Toggle sorting if the same button is clicked again
    if (currentSort === sortType) {
        // Reset to default order
        currentSort = "default";
        displayProducts(sortedProducts);
        sortLowHighBtn.classList.remove("active-sort");
        sortHighLowBtn.classList.remove("active-sort");
    } else {
        // Apply sorting
        if (sortType === "low-to-high") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortType === "high-to-low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        currentSort = sortType;
        displayProducts(sortedProducts);

        // Update active button styles
        sortLowHighBtn.classList.toggle("active-sort", sortType === "low-to-high");
        sortHighLowBtn.classList.toggle("active-sort", sortType === "high-to-low");
    }
}

// Event listeners for sorting
sortLowHighBtn.addEventListener("click", () => sortProducts("low-to-high"));
sortHighLowBtn.addEventListener("click", () => sortProducts("high-to-low"));
