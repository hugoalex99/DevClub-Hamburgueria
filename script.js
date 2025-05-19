const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')


function showAll(productsArray){

    myLi = ''
    productsArray.forEach(product => {
         myLi += `
    
        <li>
             <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
         </li>
    
    `
    })

    list.innerHTML = myLi
}

function mapAllItems(){
    const newPrices = menuOptions.map((product) => ({
        ...product, //Spread Operator
        price: product.price * 0.9, //10% de desconto
    }))

    showAll(newPrices)
    
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click',  mapAllItems)
