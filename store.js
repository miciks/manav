let cardToButton = document.getElementsByClassName("shop-item-button");

for (let index = 0; index < cardToButton.length; index++) {
  const button = cardToButton[index];
  button.addEventListener("click", clickToAddBox);
}

function clickToAddBox(params) {
  let itemInfo = params.target.parentElement.parentElement;
  let title = itemInfo.getElementsByClassName("shop-item-title")[0].innerText;
  let picture = itemInfo.getElementsByClassName("shop-item-image")[0].src;
  let fiat = itemInfo.getElementsByClassName("shop-item-price")[0].innerText;
  addToBox(title, picture, fiat);
}

function addToBox(title, picture, fiat) {
  let cardRow = document.createElement("div");
  cardRow.classList.add("cart-row");
  let cardItems = document.getElementsByClassName("cart-items")[0];
  let cardItemsProductTitle =
    cardItems.getElementsByClassName("cart-item-title");

  for (let index = 0; index < cardItemsProductTitle.length; index++) {
    if (cardItemsProductTitle[index].innerText == title) {
      alert("bu ürün zaten sepette  var");
      return;
    }
  }

  let cardRowContent = `
    <div class="cart-item cart-column">
     <img class="cart-item-image" src="${picture}" width="100" height="100">
     <span class="cart-item-title">${title}</span>
    </div>
     <span class="cart-price cart-column">${fiat}</span>
    <div class="cart-quantity cart-column">
     <input class="cart-quantity-input" type="number" value="1">
     <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`;

  cardRow.innerHTML = cardRowContent;
  cardItems.append(cardRow);
  cardRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", clickToRemoveBox);
  cardRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", inputControl);
  totalBoxUpdate();
}

let cardToRemove = document.querySelectorAll(".btn-danger");

for (let index = 0; index < cardToRemove.length; index++) {
  const removeButton = cardToRemove[index];
  removeButton.addEventListener("click", clickToRemoveBox);
}
function clickToRemoveBox(params) {
  let butonClick = params.target;
  butonClick.parentElement.parentElement.remove();
  totalBoxUpdate();
}

function inputControl(params) {
  let inputControlP = params.target;
  if (inputControlP.value <= 0 || isNaN(inputControlP.value)) {
    inputControlP.value = 1;
  }
  totalBoxUpdate();
}

function totalBoxUpdate(params) {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let index = 0; index < cartRows.length; index++) {
    let prices = cartRows[index].getElementsByClassName("cart-price")[0];
    let quantities = cartRows[index].getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let pricesNum = parseFloat(prices.innerText.replace("$", ""));
    let quantitiesNum = quantities.value;

    total = total + pricesNum * quantitiesNum;
  }
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
