document.addEventListener('DOMContentLoaded', function () {
	const $days = document.querySelector('.timer__days')
	const $hours = document.querySelector('.timer__hours')
	const $minutes = document.querySelector('.timer__minutes')
	const $day = document.querySelector('.timer__day')
	const $hour = document.querySelector('.timer__hour')
	const $minute = document.querySelector('.timer__minute')

	const deadline = new Date(2024, 3, 10)

	let timerId = null

	function declensionNum(num, words) {
		return words[
			num % 100 > 4 && num % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
		]
	}

	function countdownTimer() {
		const diff = deadline - new Date()
		if (diff <= 0) {
			clearInterval(timerId)
		}
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
		$days.textContent = days < 10 ? '0' + days : days
		$hours.textContent = hours < 10 ? '0' + hours : hours
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes
		$day.textContent = days < 10 ? '0' + days : days
		$hour.textContent = hours < 10 ? '0' + hours : hours
		$minute.textContent = minutes < 10 ? '0' + minutes : minutes
		$days.dataset.title = declensionNum(days, ['Day', 'Day', 'Days'])
		$hours.dataset.title = declensionNum(hours, ['Hour', 'Hour', 'Hours'])
		$minutes.dataset.title = declensionNum(minutes, [
			'Minute',
			'Minutes',
			'Minutes',
		])
		$day.dataset.title = declensionNum(days, ['Day', 'Day', 'Days'])
		$hour.dataset.title = declensionNum(hours, ['Hour', 'Hour', 'Hours'])
		$minute.dataset.title = declensionNum(minutes, [
			'Minute',
			'Minutes',
			'Minutes',
		])
	}

	countdownTimer()

	timerId = setInterval(countdownTimer, 100)
})
