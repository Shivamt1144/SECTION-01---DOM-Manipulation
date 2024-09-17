let products = [];

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('productName').value;
  const price = parseFloat(document.getElementById('productPrice').value);
  const rating = parseFloat(document.getElementById('productRating').value);

  // Add product to the array
  products.push({ name, price, rating });

  // Clear input fields
  document.getElementById('productName').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productRating').value = '';

  updateGraphs();
});

// Function to update the graphs
function updateGraphs() {
  const priceBars = document.getElementById('priceBars');
  const ratingBars = document.getElementById('ratingBars');
  
  // Clear existing bars
  priceBars.innerHTML = '';
  ratingBars.innerHTML = '';

  // Create bars based on current product list
  products.forEach(product => {
    // Price bar
    const priceBar = document.createElement('div');
    priceBar.classList.add('bar');
    priceBar.style.width = `${product.price * 10}px`;
    priceBar.textContent = `${product.name} - $${product.price}`;
    priceBars.appendChild(priceBar);

    // Rating bar
    const ratingBar = document.createElement('div');
    ratingBar.classList.add('bar', 'bar-rating');
    ratingBar.style.width = `${product.rating * 50}px`;
    ratingBar.textContent = `${product.name} - ${product.rating}/5`;
    ratingBars.appendChild(ratingBar);
  });
}

// Sorting by price
document.getElementById('sortByPrice').addEventListener('click', function() {
  products.sort((a, b) => a.price - b.price);
  updateGraphs();
});

// Sorting by rating
document.getElementById('sortByRating').addEventListener('click', function() {
  products.sort((a, b) => a.rating - b.rating);
  updateGraphs();
});
