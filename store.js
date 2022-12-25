let cardToButton = document.getElementsByClassName("shop-item-button");

for (let index = 0; index < cardToButton.length; index++) {
    const button= cardToButton[index];  
    button.addEventListener("click", clickToAddBox )  
}

function clickToAddBox(params) { 
    let itemInfo = params.target.parentElement.parentElement
    let title = itemInfo.getElementsByClassName("shop-item-title")[0].innerText
    let picture = itemInfo.getElementsByClassName("shop-item-image")[0].src
    let fiat = itemInfo.getElementsByClassName("shop-item-price")[0].innerText  
    console.log(title, picture, fiat)
}