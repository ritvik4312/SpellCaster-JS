// import { cart, addToCart } from "../data/cart.js";
// import { products } from "../data/products.js";

// function renderProducts(productsToRender) {
//   let productHTML = '';

//   productsToRender.forEach((product) => {
//     productHTML += `
//       <div class="product-container">
//         <div class="product-image-container">
//           <img class="product-image" src="${product.image}">
//         </div>

//         <div class="product-name limit-text-to-2-lines">
//           ${product.name}
//         </div>

//         <div class="product-rating-container">
//           <img class="product-rating-stars" src="${product.getStarsUrl()}">
//           <div class="product-rating-count link-primary">
//             ${product.rating.count}
//           </div>
//         </div>

//         <div class="product-price">
//           ${product.getPrice()}
//         </div>

//         ${product.extraInfoHTML()}

//         <div class="product-spacer"></div>

//         <div class="spacer">
//         </div>

//         <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
//           Add to Cart
//         </button>
//       </div>
//     `;
//   });

//   document.querySelector('.js-products-grid').innerHTML = productHTML;
// }

// function filterProducts(search) {
//   if (!search) {
//     renderProducts(products);
//     return;
//   }

//   const checkSearch = search.toLowerCase();
//   const filteredProducts = products.filter(product => {
//     return product.name.toLowerCase().includes(checkSearch);
//   });

//   renderProducts(filteredProducts);
// }

// function updateCartQuantity() {
//   let cartQuantity = 0;

//   cart.forEach((cartItem) => {
//     cartQuantity += cartItem.quantity;
//   });

//   document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   renderProducts(products);

//   const searchButton = document.querySelector('.js-search-button');
//   const searchBar = document.querySelector('.js-search-bar');

//   if (searchButton && searchBar) {
//     searchButton.addEventListener('click', () => {
//       const searchQuery = searchBar.value.trim();
//       filterProducts(searchQuery);
//     });
//     searchBar.addEventListener('keypress', (event) => {
//       if (event.key === 'Enter') {
//         const searchQuery = searchBar.value.trim();
//         filterProducts(searchQuery);
//       }
//     });
//   }

//   document.querySelectorAll('.js-add-to-cart').forEach((button) => {
//     button.addEventListener('click', () => {
//       const productId = button.dataset.productId;
//       addToCart(productId);
//       updateCartQuantity();
//     });
//   });

//   updateCartQuantity();
// });

import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";

function renderProducts(productsToRender) {
  let productHTML = '';

  productsToRender.forEach((product) => {
    productHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="spacer"></div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productHTML;
}

function filterProducts(search) {
  if (!search) {
    renderProducts(products);
    return;
  }

  const checkSearch = search.toLowerCase();
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(checkSearch);
  });

  renderProducts(filteredProducts);
}

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);

  const searchButton = document.querySelector('.js-search-button');
  const searchBar = document.querySelector('.js-search-bar');

  if (searchButton && searchBar) {
    searchButton.addEventListener('click', () => {
      const searchQuery = searchBar.value.trim();
      filterProducts(searchQuery);
    });

    searchBar.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const searchQuery = searchBar.value.trim();
        filterProducts(searchQuery);
      }
    });
  }

  document.querySelector('.js-products-grid').addEventListener('click', (event) => {
    if (event.target.classList.contains('js-add-to-cart')) {
      const productId = event.target.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    }
  });

  updateCartQuantity();
});
