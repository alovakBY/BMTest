'use strict'
const cells = document.querySelector('.cells')
const continueBtn = document.querySelector('.button')
const container = document.querySelector('.container')
const params = new URLSearchParams(document.location.search.substring(1))
const language = ['en','es','fr','ja','nl','ru','zh']

// Языковые настройки системы
let userLang = navigator.language || navigator.userLanguage
userLang = userLang.slice(0,2).toLowerCase()

// Функция которая меняет ссылку на кнопке в зависимости от выбранной ячейки. При загрузке страницы первая ячейка активная по дефолту.  
function getLink() {
	[...cells.children].forEach(cell => {
		if (cell.classList.contains('activ')) {
			continueBtn.href = cell.dataset.link
		}
	})
}

getLink()

// Функция, которая смотрит есть ли язык который требуется у нас в папке Localizations. Если нет, то берется английский.
function findLanguage(lang) {
	if (language.indexOf(lang) !== -1) {
		const langIndex = language.indexOf(lang)
		document.documentElement.lang = lang
		fetch(`./Localizations/${language[langIndex]}.json`)
			.then(response => response.json())
			.then(data => getContainer(data))
			.catch(err => console.log(err))
	} else {
		document.documentElement.lang = `en`
		fetch(`./Localizations/en.json`)
			.then(response => response.json())
			.then(data => getContainer(data))
			.catch(err => console.log(err))
	}
}

// Функция, которая поставит нужный нам язык 
function getContainer(language) {
	const restore = document.querySelector('.restore a')
	restore.innerHTML = language['Restore']
	const title = document.querySelector('.title')
	title.classList.add(`${document.documentElement.lang}`)
	title.innerHTML = language['Unlimited Access<br>to All Features']
	const subtitleText = document.querySelector('.unlimited')
	subtitleText.innerHTML = language['Unlimited documents']
	const countMode = document.querySelector('.countMode')
	countMode.innerHTML = language['Count mode']
	const textRecognition = document.querySelector('.textRecognition')
	textRecognition.innerHTML = language['Text recognition (OCR)']

	const firstCellTitle = document.querySelector('.firstCell > .cell__title')
	firstCellTitle.innerHTML = language['Monthly']
	const firstCellPriceTop = document.querySelector('.firstCell > .cell__priceTop')
	firstCellPriceTop.innerHTML = language['<strong>$9.99</strong><br>per month']
	const firstCellLabel = document.querySelector('.firstCell > .cell__label')
	firstCellLabel.innerHTML = language['3 DAYS FREE']
	const firstCellPriceBottom = document.querySelector('.firstCell > .cell__priceBottom')
	firstCellPriceBottom.innerHTML = language['$9.99/month']

	const secondCellSale = document.querySelector('.secondCell > .sale')
	secondCellSale.innerHTML = language['-83%']
	const secondCellTitle = document.querySelector('.secondCell > .cell__title')
	secondCellTitle.innerHTML = language['Annually']
	const secondCellPriceTop  = document.querySelector('.secondCell > .cell__priceTop')
	secondCellPriceTop.innerHTML = language['<strong>$19.99</strong><br>per year']
	const secondCellLabel = document.querySelector('.secondCell > .cell__label')
	secondCellLabel.innerHTML = language['MOST POPULAR']
	const secondCellPriceBottom = document.querySelector('.secondCell > .cell__priceBottom')
	secondCellPriceBottom.innerHTML = language['$1.66/month']

	const button = document.querySelector('.button')
	button.innerHTML = language['Continue']

	const footerText = document.querySelector('.footer__text')
	footerText.innerHTML = language['Auto-renewable. Cancel anytime.']
	
	const firstFooterLink = document.querySelector('.firstFooterLink a')
	firstFooterLink.innerHTML = language['Terms of Use']
	
	const secondFooterLink = document.querySelector('.secondFooterLink a')
	secondFooterLink.innerHTML = language['Privacy Policy']
}

// Клик по ячейке. Меняем класс ячейки, по которой кликнули на активную, второй ячейке убираем класс activ. Меняем ссылку на кнопке.
cells.addEventListener('click', (e) => {
	if (e.target.className === 'cells') return
	[...e.currentTarget.children].forEach(cell => {
		cell.classList.remove('activ')
	})
	e.target.closest('.cell').classList.add('activ')
	getLink()
}) 

// Если в строке запроса нету параметра lang, то берется язык из системы
if (!params.get('lang')) {
	findLanguage(userLang)
} else {
  const langParam = params.get('lang')
  findLanguage(langParam)
}


