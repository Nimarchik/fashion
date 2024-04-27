let productList = [
	{
		title: 'Spread Collar Shirt',
		img: '../img/product1.jpg',
		price: '48.99$',
		data: 1,
		datacategory: 'price3',
	},
	{
		title: 'Shine On Me Blouse',
		img: '../img/product2.jpg',
		price: '42.99$',
		data: 2,
		datacategory: 'price2',
	},
	{
		title: 'Gray Solid Padded Jacket',
		img: '../img/product3.jpg',
		price: '32.99$',
		data: 3,
		datacategory: 'price2',
	},
	{
		title: 'Printed Loose T-shirt',
		img: '../img/product4.jpg',
		price: '22.99$',
		data: 4,
		datacategory: 'price1',
	},
	{
		title: 'Summer Wind Crop Shirt',
		img: '../img/product5.jpg',
		price: '39.99$',
		data: 4,
		datacategory: 'price2',
	},
	{
		title: 'Tailored Jacket',
		img: '../img/product6.jpg',
		price: '46.00$',
		data: 5,
		datacategory: 'price2',
	},
	{
		title: 'Solid Round Neck T-shirt',
		img: '../img/product7.jpg',
		price: '36.00$',
		data: 6,
		datacategory: 'price2',
	},
	{
		title: 'Spread Collar Shirt',
		img: '../img/product1.jpg',
		price: '48.99$',
		data: 7,
		datacategory: 'price3',
	},
	{
		title: 'Shine On Me Blouse',
		img: '../img/product2.jpg',
		price: '42.99$',
		data: 8,
		datacategory: 'price',
	},
	{
		title: 'Gray Solid Padded Jacket',
		img: '../img/product3.jpg',
		price: '32.99$',
		data: 9,
		datacategory: 'price2',
	},
	{
		title: 'Printed Loose T-shirt',
		img: '../img/product4.jpg',
		price: '22.99$',
		data: 10,
		datacategory: 'price1',
	},
	{
		title: 'Summer Wind Crop Shirt',
		img: '../img/product5.jpg',
		price: '39.99$',
		data: 11,
		datacategory: 'price2',
	},
	{
		title: 'Tailored Jacket',
		img: '../img/product6.jpg',
		price: '46.00$',
		data: 12,
		datacategory: 'price2',
	},
	{
		title: 'Solid Round Neck T-shirt',
		img: '../img/product7.jpg',
		price: '36.00$',
		data: 12,
		datacategory: 'price2',
	},
]

let products = productList.map(product => {
	let productCart = document.querySelector('.products__cart')

	productCart.innerHTML += `
  <div class="products__cart-item" data-product="${product.data}" data-category="${product.datacategory}">
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

const filter = document.querySelector('.products-list')
filter.addEventListener('change', function () {
	document.querySelectorAll('.products__cart-item').forEach(
		function (n) {
			n.classList.toggle(
				'hidden',
				this.length && !this.includes(n.dataset.category)
			)
		},
		Array.from(this.querySelectorAll(':checked'), n => n.dataset.id)
	)
})

filter.dispatchEvent(new Event('change'))

let basketOpenIcon = document.querySelector('.nav__list-icon-img'),
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
let count = 0
let countQuantit = 0

function addCart() {
	count++
	itemCount.textContent = count
}

let removeItem = function () {
	count = Math.max(0, count - 1)
	itemCount.textContent = count
}

let quantityElement = document.querySelector('.quantity')
let click = false
function addCartToBasket() {
	buttonAll.forEach(button => {
		button.addEventListener('click', () => {
			click = true
			if ((click = true && click < 2)) {
				addCart()
			}
			let productsCard = button.closest('.products__cart-item')
			let productId = productsCard.dataset.product
			let productName = productsCard.querySelector(
				'.products__cart-title'
			).innerHTML
			let productPrice = productsCard.querySelector(
				'.products__cart-price'
			).innerHTML
			let imgLink = productsCard.querySelector('.products__cart-img').src
			let cardItemList = document.querySelector('.basket__body-cards')
			let existingCardItem = document.querySelector(
				`li[data-productid="${productId}"]`
			)

			if (existingCardItem) {
				// let quantityElement = document.querySelector('.quantity')
				// quantityElement.innerHTML = parseInt(quantityElement.innerHTML) + 1
			} else {
				let cardItem = document.createElement('li')
				cardItem.dataset.productid = productId
				cardItem.innerHTML = `<img src="${imgLink}" class="img__basket"><h6 class="basket__title">${productName}</h6>
				<p class="basket__price">${productPrice}</p>
				<button class="remove">Прибрати</button>`

				cardItemList.appendChild(cardItem)

				let btnRemove = document.querySelectorAll('.remove')
				btnRemove.forEach(button => {
					button.addEventListener('click', () => {
						let cardItem = button.closest('li')
						cardItemList.removeChild(cardItem)
						removeItem()
						if (cardItemList.parentElement(null)) {
							count = 0
						}
					})
				})
			}
		})
	})
}
addCartToBasket()
