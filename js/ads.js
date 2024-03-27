const adsModuls = document.querySelector('.ads'),
	modulsClose = document.querySelector('.bis'),
	btnWell = document.querySelector('.ads__content-btns-well'),
	btnDeny = document.querySelector('.ads__content-btns-deny')

let times = setTimeout(function timeAds() {
	adsModuls.classList.add('ads--show')

	modulsClose.addEventListener('click', () => {
		adsModuls.classList.remove('ads--show')
		times = setTimeout(timeAds, 30000)
	})
	btnDeny.addEventListener('click', () => {
		adsModuls.classList.remove('ads--show')
		times = setTimeout(timeAds, 30000)
	})
	btnWell.addEventListener('click', () => {
		clearTimeout(times)
		adsModuls.classList.remove('ads--show')
	})
}, 1000)
