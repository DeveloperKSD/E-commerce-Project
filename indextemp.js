const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

let index = 0; 
    const track = document.querySelector('.carousel-track'); 
    function updateCarousel() { 
        track.style.transform = `translateX(-${index * 100}%)`; } 
        function prevSlide() { 
            index = (index > 0) ? index - 1 : track.children.length - 1; 
            updateCarousel(); }
        function nextSlide() { 
            index = (index < track.children.length - 1) ? index + 1 : 0; 
            updateCarousel(); } 


const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');
const debounceTime = 300; 
let debounceTimer;


const products = [
  "Sofa",
  "Dining Table",
  "Queen Sized Bed",
  "King Sized Bed",
  "Bunk Beds",
  "Chairs",
  "Coffee Table",
  "Tea Table",
  "Dressing Table",
  "Single Wardrobe",
  "Double Wardrobe",
  "Godrej Interio",
  "Urban Ladder",
  "Nilkamal",
  "Wakefit",
];

function searchProducts(query) {
  if (!query.trim()) {
    suggestionsBox.style.display = 'none';
    return;
  }

  const results = products.filter(product =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  displaySuggestions(results);
}

function displaySuggestions(results) {
  suggestionsBox.innerHTML = '';
  if (results.length === 0) {
    suggestionsBox.innerHTML = '<div class="no-results">No results found.</div>';
  } else {
    results.forEach(result => {
      const div = document.createElement('div');
      div.classList.add('suggestion-item');
      div.textContent = result;
      div.onclick = () => {
        searchInput.value = result;
        suggestionsBox.style.display = 'none';
      };
      suggestionsBox.appendChild(div);
    });
  }
  suggestionsBox.style.display = 'block';
}

searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchProducts(searchInput.value);
  }, debounceTime);
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box')) {
    suggestionsBox.style.display = 'none';
  }
});

/*SIDEBAR MENU*/
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }