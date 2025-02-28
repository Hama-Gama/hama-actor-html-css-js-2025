// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js'
// Подключение списка активных модулей
import { flsModules } from './modules.js'

//*======================= EMAIL JS =============*//
// contactForm.addEventListener('submit', sendEmail)
const contactForm = document.getElementById('contact-form'),
	contactMessage = document.getElementById('contact-message')

const sendEmail = e => {
	e.preventDefault()

	// serviceID - templateID - #form - publicKey
	emailjs
		.sendForm(
			'service_ok1mnvc',
			'template_jgocn84',
			'#contact-form',
			'HmXoLUR2g_LMtHyfp'
		)
		.then(
			() => {
				// Success message
				Swal.fire({
					title: 'Success!',
					text: 'Message sent successfully!',
					icon: 'success',
				})

				// Remove message after five seconds
				setTimeout(() => {
					contactMessage.textContent = ''
				}, 5000)

				// Clear input fields
				contactForm.reset()
			},
			() => {
				// Show error message
				contactMessage.textContent = 'Error, message not sent!'
			}
		)
}

contactForm.addEventListener('submit', sendEmail)

//  LANGUAGE DROPDOWN
// var languges = document.querySelector('.content')

// //using just one event listener to promote "DRY" code
// //we can target the LIs and their inner As from the UL
// languges.addEventListener('click', function (e) {
// 	var target = e.target //this is the element the event is fired on

// 	if (target.hasAttribute('hreflang')) {
// 		var lang = target.getAttribute('hreflang')
// 		target.parentElement.style.display = 'none'
// 		localStorage.setItem('lang', lang)
// 		window.location.href = '/' + lang //
// 	}
// })

// if (document.documentElement.lang === 'en') {
// 	window.location.href = 'Some_document.html.en'
// } else if (document.documentElement.lang === 'ru') {
// 	window.location.href = 'Some_document.html.ru'
// }

const activeLang = document.documentElement.lang
const langEn = document.getElementById('en')
const langRu = document.getElementById('ru')
const langKz = document.getElementById('kz')
const langTr = document.getElementById('tr')
const langKr = document.getElementById('kr')

// if (activeLang === 'en') {
// 	langEn.style.display = 'none'
// } else if (activeLang === 'ru') {
// 	langRu.style.display = 'none'
// } else if (activeLang === 'kz') {
// 	langKz.style.display = 'none'
// } else if (activeLang === 'kr') {
// 	langKr.style.display = 'none'
// } else if (activeLang === 'tr'){
// 	langTr.style.display = 'none'
// }




// SHOW MORE ======================================
