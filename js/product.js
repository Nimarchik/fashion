const productList = [
	{
		title: 'Spread Collar Shirt',
		img: '../img/product1.jpg',
		price: '48.99$',
	},
	{
		title: 'Shine On Me Blouse',
		img: '../img/product2.jpg',
		price: '42.99$',
	},
	{
		title: 'Gray Solid Padded Jacket',
		img: '../img/product3.jpg',
		price: '32.99$',
	},
	{
		title: 'Printed Loose T-shirt',
		img: '../img/product4.jpg',
		price: '22.99$',
	},
	{
		title: 'Summer Wind Crop Shirt',
		img: '../img/product5.jpg',
		price: '39.99$',
	},
	{
		title: 'Tailored Jacket',
		img: '../img/product6.jpg',
		price: '46.00$',
	},
	{
		title: 'Solid Round Neck T-shirt',
		img: '../img/product7.jpg',
		price: '36.00$',
	},
	{
		title: 'Spread Collar Shirt',
		img: '../img/product1.jpg',
		price: '48.99$',
	},
	{
		title: 'Shine On Me Blouse',
		img: '../img/product2.jpg',
		price: '42.99$',
	},
	{
		title: 'Gray Solid Padded Jacket',
		img: '../img/product3.jpg',
		price: '32.99$',
	},
	{
		title: 'Printed Loose T-shirt',
		img: '../img/product4.jpg',
		price: '22.99$',
	},
	{
		title: 'Summer Wind Crop Shirt',
		img: '../img/product5.jpg',
		price: '39.99$',
	},
	{
		title: 'Tailored Jacket',
		img: '../img/product6.jpg',
		price: '46.00$',
	},
	{
		title: 'Solid Round Neck T-shirt',
		img: '../img/product7.jpg',
		price: '36.00$',
	},
]


const products = productList.map(product => {
	const productCart = document.querySelector('.products__cart')

	productCart.innerHTML += `
  <div class="products__cart-item">
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
