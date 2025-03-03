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
// if (document.documentElement.lang === 'ru') {
// 	window.location.href = 'index.html.ru'
// } else if (document.documentElement.lang === 'en') {
// 	window.location.href = 'index.html.en'
// }





