const productList = [
	{
		title: 'Spread Collar Shirt',
		img: '../img/product1.jpg',
		price: '48.99$',
		data: 1,
	},
	{
		title: 'Shine On Me Blouse',
		img: '../img/product2.jpg',
		price: '42.99$',
		data: 2,
	},
	{
		title: 'Gray Solid Padded Jacket',
		img: '../img/product3.jpg',
		price: '32.99$',
		data: 3,
	},
	{
		title: 'Printed Loose T-shirt',
		img: '../img/product4.jpg',
		price: '22.99$',
		data: 3,
	},
	{
		title: 'Summer Wind Crop Shirt',
		img: '../img/product5.jpg',
		price: '39.99$',
		data: 4,
	},
	{
		title: 'Tailored Jacket',
		img: '../img/product6.jpg',
		price: '46.00$',
		data: 5,
	},
	{
		title: 'Solid Round Neck T-shirt',
		img: '../img/product7.jpg',
		price: '36.00$',
		data: 6,
	},
	{
		title: 'Spread Collar Shirt',
		img: '../img/product1.jpg',
		price: '48.99$',
		data: 7,
	},
	{
		title: 'Shine On Me Blouse',
		img: '../img/product2.jpg',
		price: '42.99$',
		data: 8,
	},
	{
		title: 'Gray Solid Padded Jacket',
		img: '../img/product3.jpg',
		price: '32.99$',
		data: 9,
	},
	{
		title: 'Printed Loose T-shirt',
		img: '../img/product4.jpg',
		price: '22.99$',
		data: 10,
	},
	{
		title: 'Summer Wind Crop Shirt',
		img: '../img/product5.jpg',
		price: '39.99$',
		data: 11,
	},
	{
		title: 'Tailored Jacket',
		img: '../img/product6.jpg',
		price: '46.00$',
		data: 12,
	},
	{
		title: 'Solid Round Neck T-shirt',
		img: '../img/product7.jpg',
		price: '36.00$',
		data: 12,
	},
]

const products = productList.map(product => {
	const productCart = document.querySelector('.products__cart')

	productCart.innerHTML += `
  <div class="products__cart-item" data-product="${product.data}">
									<img
										src="${product.img}"
										alt=""
										class="products__cart-img"
									/>
									<h4 class="products__cart-title">${product.title}</h4>
									<p class="products__cart-price">${product.price}</p>
									<div class="products__cart-item-show">
										<button class="products__cart-btn">Buy</button>
									</div>
								</div>
  `
	return productCart
})

const basketOpenIcon = document.querySelector('.nav__list-icon-img'),
	basketClose = document.querySelector('.basketClose'),
	basketOpen = document.querySelector('.basketOpen')

function basketShowHidden(show, hidden) {
	show.addEventListener('click', () => {
		basketOpen.classList.add('basketOpen--show')
	})
	hidden.addEventListener('click', () => {
		basketOpen.classList.remove('basketOpen--show')
	})
}
basketShowHidden(basketOpenIcon, basketClose)

let buttonAll = document.querySelectorAll('.products__cart-btn')
let itemCount = document.querySelector('.elips')
let count = 1
let countQuantit = 1

function addCart() {
	itemCount.textContent = count++
}

function countQuantity() {
	const quantityElement = document.querySelector('.quantity')
	quantityElement.innerHTML = ++countQuantit
}

function addCartToBasket() {
	buttonAll.forEach(button => {
		button.addEventListener('click', () => {
			addCart()
			const productsCard = button.closest('.products__cart-item')
			const productId = productsCard.dataset.product
			const productName = productsCard.querySelector(
				'.products__cart-title'
			).innerHTML
			const productPrice = productsCard.querySelector(
				'.products__cart-price'
			).innerHTML
			const imgLink = productsCard.querySelector('.products__cart-img').src
			const existingCardItem = document.querySelector(
				`li[data-product-id="${productId}"]`
			)
			const cardItemList = document.querySelector('.basket__body-cards')

			if (existingCardItem) {
				if (countQuantit == productId) {
					countQuantity()
				}
				console.log('+++')
			} else {
				const cardItem = document.createElement('li')
				cardItem.dataset.productId = productId
				cardItem.innerHTML = `<img src="${imgLink}" class="img__basket"> <span  class="quantity">1</span> <h6 class="basket__title">${productName}</h6> <button class="remove">Прибрати</button>`

				cardItemList.appendChild(cardItem)
			}
		})
	})
}
addCartToBasket()
