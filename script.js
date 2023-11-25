const add = document.querySelector("#plus");

const minus = document.querySelector("#minus");
var counter = document.querySelector("#quant").innerHTML;
document.querySelector("#count").style.display = "none";
var container = document.querySelector(".container");
var next = document.querySelector("#right");
var prev = document.querySelector("#left")

var index = 1;
var price = 125;

var finalprice = 0;
const menu = document.querySelector(".sidebar");
const close = document.querySelector(".close");
const cart = document.querySelector(".cart");
const cartfill = document.querySelector(".cartfill");

var dispCarty = false;
var cartEmpt = true;


function nextImg() {
  console.log(index);
  if (index == 4) {
    next.disable = true;
  } else {
    index++;
    container.style.background = `url(images/image-product-${parseInt(
      index
    )}.jpg)`;
    container.style.backgroundSize = "cover";

    return index;
  }
}

function prevImg() {
  if (index == 1) {
    prev.disable = true;
  } else {
    index--;
    container.style.background = `url(images/image-product-${parseInt(
      index
    )}.jpg)`;
    container.style.backgroundSize = "cover";

    return index;
  }
}

function addToCart(counter) {
  finalprice = counter * price;
  document.querySelector("#count").style.display = "block";

  return finalprice;
}
function dispCart(finalprice) {
  if (dispCarty) {
    closeCart();
  } else {
    if (cartEmpt) {
      cart.style.display = "Block";
      dispCarty = true;

      return dispCarty;
    } else {
      cartfill.style.display = "flex";
      dispCarty = true;
      document.querySelector("#quantiti").innerHTML = counter;
      document.querySelector("#final").innerHTML = `= $${counter * price}`;

      return dispCarty;
    }
    
  }
 
}

function closeCart() {
  cart.style.display = "none";
  cartfill.style.display = "none";
  dispCarty = false
}

function displayMenu() {
  menu.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
}

function deleProd() {
  document.querySelector(".cart").style.display = "Block";
  document.querySelector(".cartfill").style.display = "none";
  document.querySelector("#count").style.display = "none";

  counter = 0;
  document.querySelector("#quant").innerHTML = counter;
  finalprice = 0;

  cartEmpt = true;
}
function addQuant() {
  counter++;

  document.querySelector("#quant").innerHTML = counter;

  document.querySelector("#count").innerHTML = counter;

  cartEmpt = false;

  return counter;
}

function minusQuant() {
  if (counter == 0) {
    minus.disbled = true;
  } else {
    counter--;
    var finalprice = parseInt(
      document.querySelector("#price > span").innerHTML
    );
    document.querySelector("#quant").innerHTML = counter;
    document.querySelector("#count").innerHTML = counter;

    if (counter == 0) {
      cartEmpt = true;
    }
    return counter;
  }
}
