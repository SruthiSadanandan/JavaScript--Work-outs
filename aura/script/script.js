import { cart } from '../data/cart.js';
import { products } from '../data/products.js';

/* =========================
   MOBILE MENU
========================= */
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener('click', () => {
  document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener('click', () => {
  document.body.classList.remove("show-mobile-menu");
});

/* =========================
   HERO SLIDER (AUTO CHANGE)
========================= */
const slides = [
  {
    title: "FINE JEWELLERY ft-2020",
    quote: "Jewellery is the most transformative thing you can wear.",
    img: "images/ring-bg.png"
  },
  {
    title: "TIMELESS ELEGANCE",
    quote: "People will stare. Make it worth their while.",
    img: "images/necklace.png"
  },
  {
    title: "CRAFTED WITH LOVE",
    quote: "Jewelry has the power to make you feel unique.",
    img: "images/bangle2.png"
  }
];

let current = 0;

function changeSlide() {
  const slide = slides[current];
  document.querySelector(".title").textContent = slide.title;
  document.querySelector(".hero-details h4").textContent = slide.quote;
  document.querySelector(".img-hero img").src = slide.img;

  current = (current + 1) % slides.length;
}

setInterval(changeSlide, 4000);

/* =========================
   CART FUNCTIONS
========================= */
function addToCart(productId) {
  let existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
}

function updateCartQuantity() {
  let total = 0;

  cart.forEach(item => {
    total += item.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = total;
}

/* =========================
   RENDER PRODUCTS
========================= */
let productHTML = '';

products.forEach(product => {
  productHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-name">${product.name}</div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <button class="add-to-cart-button js-add-to-cart-btn"
        data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector(".js-product-grid").innerHTML = productHTML;

/* =========================
   ADD TO CART EVENTS
========================= */
document.querySelectorAll(".js-add-to-cart-btn").forEach(button => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
  });
});

/* =========================
   CUSTOMER SWIPER (API)
========================= */
const container = document.querySelector(".swiper-wrapper");

fetch("https://randomuser.me/api/?results=5")
  .then(res => res.json())
  .then(data => {

    let html = "";

    data.results.forEach(user => {
      html += `
        <div class="swiper-slide">
          <div class="customer-card">
            <img src="${user.picture.large}" class="user-image">
            <h3 class="name">${user.name.first}</h3>
            <p class="feedback">"Loved the jewellery"</p>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    /* ✅ INIT SWIPER AFTER DATA */
    new Swiper('.swiper', {
      loop: true,
      spaceBetween: 25,
      grabCursor: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });

  });