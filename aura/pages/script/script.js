const menuOpenButton=document.querySelector("#menu-open-button");
menuOpenButton.addEventListener('click',()=>{
  document.body.classList.add("show-mobile-menu");
});

const menuCloseButton=document.querySelector("#menu-close-button");
menuCloseButton.addEventListener('click',()=>{
  document.body.classList.remove("show-mobile-menu");
})



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
  current = (current + 1) % slides.length; // loops back to 0
}

setInterval(changeSlide, 4000); // changes every 4 seconds
