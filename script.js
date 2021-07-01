'use strict'
const cells = document.querySelector('.cells')
const continueBtn = document.querySelector('.button')
const container = document.querySelector('.container')
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

// Клик по ячейке. Меняем класс ячейки, по которой кликнули на активную, второй ячейке убираем класс activ. Меняем ссылку на кнопке.
cells.addEventListener('click', (e) => {
	if (e.target.className === 'cells') return
	[...e.currentTarget.children].forEach(cell => {
		cell.classList.remove('activ')
	})
	e.target.closest('.cell').classList.add('activ')
	getLink()
}) 


// Объект языковых настроек
const languages = {
	en : {
		"Unlimited Access<br>to All Features": "Unlimited Access<br>to All Features",
		"Unlimited documents": "Unlimited documents",
		"Count mode": "Count mode",
		"Text recognition (OCR)": "Text recognition (OCR)",
		"Monthly": "Monthly",
		"<strong>$9.99</strong><br>per month": "<strong>$9.99</strong><br>per month",
		"3 DAYS FREE": "3 DAYS FREE",
		"$9.99/month": "$9.99/month",
		"Annually": "Annually",
		"-83%": "-83%",
		"<strong>$19.99</strong><br>per year": "<strong>$19.99</strong><br>per year",
		"MOST POPULAR": "MOST POPULAR",
		"$1.66/month" : "$1.66/month",
		"Continue": "Continue",
		"Auto-renewable. Cancel anytime.": "Auto-renewable. Cancel anytime.",
		"Terms of Use": "Terms of Use",
		"Restore": "Restore",
		"Privacy Policy": "Privacy Policy"
		},
	es : {
		"Unlimited Access<br>to All Features": "Acceso ilimitado<br>a todas las funciones",
		"Unlimited documents": "Documentos ilimitados",
		"Count mode": "Modo de recuento",
		"Text recognition (OCR)": "Reconocimiento de texto (OCR)",
		"Monthly": "Mensual",
		"<strong>$9.99</strong><br>per month": "<strong>$9.99</strong><br>por mes",
		"3 DAYS FREE": "3 DÍAS GRATIS",
		"$9.99/month": "$9.99/mes",
		"Annually": "Anual",
		"-83%": "-83%",
		"<strong>$19.99</strong><br>per year": "<strong>$19.99</strong><br>por año",
		"MOST POPULAR": "LO MÁS PEDIDO",
		"$1.66/month" : "$1.66/mes",
		"Continue": "Continuar",
		"Auto-renewable. Cancel anytime.": "Renovable automáticamente. Cancela cuando quieras.",
		"Terms of Use": "Términos de uso",
		"Restore": "Restablecer",
		"Privacy Policy": "Política de privacidad"  
	 },
	fr : {
		"Unlimited Access<br>to All Features": "Accès illimité<br>à toutes les fonctionnalités",
		"Unlimited documents": "Documents illimités",
		"Count mode": "Mode décompte",
		"Text recognition (OCR)": "Reconnaissance de texte (OCR)",
		"Monthly": "Tous les mois",
		"<strong>$9.99</strong><br>per month": "<strong>$9.99</strong><br>par mois",
		"3 DAYS FREE": "3 JOURS GRATUITS",
		"$9.99/month": "$9.99/mois",
		"Annually": "Tous les ans",
		"-83%": "-83%",
		"<strong>$19.99</strong><br>per year": "<strong>$19.99</strong><br>par an",
		"MOST POPULAR": "LE PLUS POPULAIRE",
		"$1.66/month" : "$1.66/mois",
		"Continue": "Continuer",
		"Auto-renewable. Cancel anytime.": "Renouvelable automatiquement. Annulez à tout moment.",
		"Terms of Use": "Conditions d'utilisation",
		"Restore": "Restaurer",
		"Privacy Policy": "Politique de confidentialité"
	 },
	ja : {
		"Unlimited Access<br>to All Features": "全ての機能へ<br>無制限アクセス",
		"Unlimited documents": "無制限のドキュメント",
		"Count mode": "カウントモード",
		"Text recognition (OCR)": "テキスト認識 (OCR)",
		"Monthly": "月次",
		"<strong>$9.99</strong><br>per month": "<strong>$9.99</strong><br>/月",
		"3 DAYS FREE": "3日間無料",
		"$9.99/month": "$9.99/か月",
		"Annually": "年次",
		"-83%": "-83%",
		"<strong>$19.99</strong><br>per year": "<strong>$19.99</strong><br>/年",
		"MOST POPULAR": "一番人気",
		"$1.66/month" : "$1.66/か月",
		"Continue": "続行する",
		"Auto-renewable. Cancel anytime.": "自動更新可能。いつでもキャンセル可能。",
		"Terms of Use": "利用規約",
		"Restore": "復元する",
		"Privacy Policy": "プライバシーポリシー"
	 },
	nl : {
		"Unlimited Access<br>to All Features": "Onbeperkte toegang<br>tot alle functies",
		"Unlimited documents": "Onbeperkt aantal documenten",
		"Count mode": "Aantal modus",
		"Text recognition (OCR)": "Gratis tekstherkenning (OCR)",
		"Monthly": "Maandelijks",
		"<strong>$9.99</strong><br>per month": "<strong>$9.99</strong><br>per maand",
		"3 DAYS FREE": "3 DAGEN GRATIS",
		"$9.99/month": "$9.99/maand",
		"Annually": "Jaarlijks",
		"-83%": "-83%",
		"<strong>$19.99</strong><br>per year": "<strong>$19.99</strong><br>per jaar",
		"MOST POPULAR": "MEEST POPULAIR",
		"$1.66/month" : "$1.66/maand",
		"Continue": "Doorgaan",
		"Auto-renewable. Cancel anytime.": "Automatisch verlengbaar. Altijd annuleren.",
		"Terms of Use": "Gebruiksvoorwaarden",
		"Restore": "Herstellen",
		"Privacy Policy": "Privacybeleid"
	 },
	ru : {
		"Unlimited Access<br>to All Features": "Неограниченный доступ<br>ко всем функциям",
		"Unlimited documents": "Любое количество документов",
		"Count mode": "Режим «Подсчет»",
		"Text recognition (OCR)": "Распознавание текста (OCR)",
		"Monthly": "1 месяц",
		"<strong>$9.99</strong><br>per month": "<strong>$9.99</strong><br>в месяц",
		"3 DAYS FREE": "3 ДНЯ БЕСПЛАТНО",
		"$9.99/month": "$9.99/месяц",
		"Annually": "1 ГОД",
		"-83%": "-83%",
		"<strong>$19.99</strong><br>per year": "<strong>$19.99</strong><br>в год",
		"MOST POPULAR": "ПОПУЛЯРНОЕ",
		"$1.66/month" : "$1.66/месяц",
		"Continue": "Продолжить",
		"Auto-renewable. Cancel anytime.": "Автопродление. Отмена в любое время.",
		"Terms of Use": "Условия использования",
		"Restore": "Восстановить",
		"Privacy Policy": "Конфиденциальность"
	 },
	zh : {
		"Unlimited Access<br>to All Features": "无限制使用<br>所有功能",
		"Unlimited documents": "文档无限制",
		"Count mode": "计数模式",
		"Text recognition (OCR)": "文本识别（OCR）",
		"Monthly": "每月",
		"<strong>$9.99</strong><br>per month": "<strong>$9.99</strong>每月<br>",
		"3 DAYS FREE": "3日免费",
		"$9.99/month": "$9.99/月",
		"Annually": "包年",
		"-83%": "-83%",
		"<strong>$19.99</strong><br>per year": "每年<strong>$19.99</strong><br>",
		"MOST POPULAR": "最热门",
		"$1.66/month" : "$1.66/月",
		"Continue": "继续",
		"Auto-renewable. Cancel anytime.": "自动续订。可随时取消。",
		"Terms of Use": "使用条款",
		"Restore": "恢复",
		"Privacy Policy": "隐私政策"
	 },
}

// Задаем атрибут lang = языку системы
//document.documentElement.lang = userLang

// Если атрибут lang === какому-нибудь из нашего набора языков, то текст на баннере соответствует этому языку(иначе язык === english)
if (window.location.search === "") {
  if (Object.keys(languages).indexOf(userLang) !== -1) {
	  const langIndex = Object.keys(languages).indexOf(userLang)
	  getContainer(languages[Object.keys(languages)[langIndex]])
  } else {
	  getContainer(languages['en'])
  }
} else {
  const langAtrr = window.location.search.split("=")[1]
  if (Object.keys(languages).indexOf(langAtrr) !== -1) {
	const langIndex = Object.keys(languages).indexOf(langAtrr)
	getContainer(languages[Object.keys(languages)[langIndex]])
} else {
	getContainer(languages['en'])
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



