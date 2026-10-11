let cartCount = 0;
function addToCart(productName) {
  cartCount++;
  document.querySelector('.icon sup').textContent = cartCount;
  alert(`"${productName}" added to cart! \nTotal items: ${cartCount}`);
}
let wishlist = [];
function toggleWishlist(productName) {
  if (wishlist.includes(productName)) {
    wishlist = wishlist.filter(item => item !== productName);
    alert(`"${productName}" removed from wishlist ♡`);
  } else {
    wishlist.push(productName);
    alert(`"${productName}" added to wishlist \nYour wishlist: ${wishlist.join(', ')}`);
  }
}
document.querySelector('.search-box').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    let query = this.value.trim();
    if (query === '') {
      alert('Please enter a product name to search!');
    } else {
      alert(`Searching for: "${query}"\nShowing results...`);
    }
  }
});
document.querySelectorAll('.category-card').forEach(function(card) {
  card.addEventListener('click', function() {
    let label = this.querySelector('.category-label').textContent;
    let confirm = window.confirm(`Browse "${label}" category?\nClick OK to continue.`);
    if (confirm) {
      alert(`Loading ${label} products... `);
    }
  });
});
document.querySelectorAll('.style-card').forEach(function(card) {
  card.addEventListener('click', function() {
    let label = this.querySelector('.style-label').textContent;
    let action = prompt(`You selected: ${label}\nWhat do you want?\n1 - Add to Cart\n2 - Add to Wishlist\n3 - Cancel`);
    if (action === '1') addToCart(label);
    else if (action === '2') toggleWishlist(label);
    else if (action === '3') alert('No problem! Keep browsing ');
    else if (action !== null) alert('Invalid choice! Enter 1, 2 or 3.');
  });
});
document.querySelectorAll('.icon')[1].addEventListener('click', function() {
  if (wishlist.length === 0) {
    alert('Your wishlist is empty!\nStart adding products ♡');
  } else {
    alert(`Your Wishlist \n\n${wishlist.map((item, i) => `${i+1}. ${item}`).join('\n')}`);
  }
});
document.querySelectorAll('.icon')[3].addEventListener('click', function() {
  alert(`Cart Summary\nTotal items: ${cartCount}\n\nProceed to checkout?`);
});
window.onload = function() {
  alert(' Welcome to Footwear Store!\nExplore our latest collection.');
};