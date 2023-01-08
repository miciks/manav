let cardToButton = document.getElementsByClassName("shop-item-button");

for (let index = 0; index < cardToButton.length; index++) {
    const button = cardToButton[index];
    button.addEventListener("click", clickToAddBox)
}

function clickToAddBox(params) {
    let itemInfo = params.target.parentElement.parentElement
    let title = itemInfo.getElementsByClassName("shop-item-title")[0].innerText
    let picture = itemInfo.getElementsByClassName("shop-item-image")[0].src
    let fiat = itemInfo.getElementsByClassName("shop-item-price")[0].innerText
    addToBox(title, picture, fiat)
}

function addToBox(title, picture, fiat) {
    let cardRow = document.createElement("div")
    cardRow.classList.add("cart-row")
    let cardItems = document.getElementsByClassName("cart-items")[0]
    let cardRowContent = `
    <div class="cart-item cart-column">
     <img class="cart-item-image" src="${picture}" width="100" height="100">
     <span class="cart-item-title">${title}</span>
    </div>
     <span class="cart-price cart-column">${fiat}</span>
    <div class="cart-quantity cart-column">
     <input class="cart-quantity-input" type="number" value="1">
     <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`

    cardRow.innerHTML = cardRowContent
    cardItems.append(cardRow)
    cardRow.getElementsByClassName("btn-danger")[0].addEventListener("click", clickToRemoveBox)
    console.log(cardItems)
}

let cardToRemove = document.querySelectorAll(".btn-danger")

for (let index = 0; index < cardToRemove.length; index++) {
    const removeButton = cardToRemove[index];
    removeButton.addEventListener("click", clickToRemoveBox)
}
function clickToRemoveBox(params) {
    let butonClick = params.target
    butonClick.parentElement.parentElement.remove()
    
}