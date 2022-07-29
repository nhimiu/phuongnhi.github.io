const cartShopping = $(".cart-shopping");
const modal = $("#modal");
const cartBar = $("#cart-bar");
const closeBtn = $("#cart-bar .fa-xmark");

cartShopping.addEventListener("click", function () {
  modal.style.display = "block";
  cartBar.style.display = "block";
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
  cartBar.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  cartBar.style.display = "none";
});
