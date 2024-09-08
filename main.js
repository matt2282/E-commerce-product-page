var cartValue = 0;
const quantityBubble = document.getElementById("quantity-bubble");
const map = new Map();
map.set(1, "images/image-product-1.jpg");
map.set(2, "images/image-product-2.jpg");
map.set(3, "images/image-product-3.jpg");
map.set(4, "images/image-product-4.jpg");
var imageNum = 1;
window.addEventListener("load", function () {
  showCartEmpty();
});

function hideCartEmpty() {
  document.getElementById("cart-empty").classList.add("cart-empty-hidden");
}

function showCartEmpty() {
  document.getElementById("cart-empty").classList.remove("cart-empty-hidden");
}

function showCartFull() {
  document.getElementById("cart-full").classList.remove("cart-full-hidden");
}

function hideCartFull() {
  document.getElementById("cart-full").classList.add("cart-full-hidden");
}

function pressPlus() {
  quantity.value++;
}
const quantity = document.getElementById("quantity");
function pressMinus() {
  if (quantity.value > 0) {
    quantity.value--;
  }
}

function pressNext() {
  var image = document.querySelector(".image-slider img");
  if (imageNum < 4) {
    imageNum++;
  } else {
    imageNum = 1;
  }
  image.src = map.get(imageNum);
}
function pressPrev() {
  var image = document.querySelector(".image-slider img");
  if (imageNum > 1) {
    imageNum--;
  } else {
    imageNum = 4;
  }
  image.src = map.get(imageNum);
}
function pressAddToCart() {
  if (quantity.value > 0) {
    hideCartEmpty();
    showCartFull();
    cartValue = Number(quantity.value) + cartValue;
    quantityBubble.innerHTML = cartValue;
    const displayQuantity = document.querySelector("#cart-full div p span");
    const total = document.querySelector("#cart-full div p b");
    displayQuantity.innerHTML = cartValue;
    total.innerHTML = "$" + cartValue * 125;
  }
}
function deleteProduct() {
  hideCartFull();
  showCartEmpty();
  cartValue = 0;
  quantityBubble.innerHTML = "";
}
function closeNav() {
  document.querySelector("nav").classList.toggle("close-nav");
  document.querySelectorAll("div *").forEach((element) => {
    element.setAttribute("tabindex", "");
  });
}
function openNav() {
  document.querySelector("nav").classList.toggle("close-nav");
  document.querySelectorAll("div *").forEach((element) => {
    element.setAttribute("tabindex", "-1");
  });
}
function isNavOpen() {
  return document.querySelector(".close-nav") ==null;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && isNavOpen()) {
    closeNav();
  }
});
