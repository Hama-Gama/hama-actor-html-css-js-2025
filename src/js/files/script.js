// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js'
// Подключение списка активных модулей
import { flsModules } from './modules.js'

//   ====================== EMAIL JS =============
// contactForm.addEventListener('submit', sendEmail)
const contactForm = document.getElementById('contact-form'),
	contactMessage = document.getElementById('contact-message')

const sendEmail = e => {
	e.preventDefault()

	// serviceID - templateID - #form - publicKey
	emailjs
		.sendForm(
			'service_702ihz4',
			'template_jgocn84',
			'#contact-form',
			'dI8XP1k6s3A86DZKN'
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

//====================== EMAIL JS END =============



//=========== LANGUAGE AUTO DETECT USER'S BROWSER LANGUAGE NAVIGATOR ============

// LATEST VERSION 

// let languageBrowser = window.navigator.language;
// let languageIso = languageBrowser.substr(0, 2);
// console.log(languageIso);


// if (languageIso == 'ru') {
// 	window.location.href = 'https://hama-actor.com/ru/'
// } else {
// 	window.location.href = 'https://hama-actor.com'
// }




// switch(languageIso){
// 	case "ru":
// 		if (languageIso == "ru")
// 			window.location.href = '/ru.html'
// 		break;

// 	default:
// 			window.location.href = '/index.html'
// }



// switch(languageIso){
// 	case "en":
// 		if (languageIso == "en")
// 			window.location.href = 'https://hama-actor.com'
// 		break;

// 	case "ru":
// 		if (languageIso == "ru")
// 			window.location.href = 'https://hama-actor.com/ru/'
// 		break;

// 	case "ko":
// 		if (languageIso == "ko")
// 			window.location.href = 'https://hama-actor.com/ko/'
// 		break;

// 	case "tr":
// 		if (languageIso == "tr")
// 			window.location.href = 'https://hama-actor.com/tr/'
// 		break;

// 	default:
// 			window.location.href = 'https://hama-actor.com'
// }


// const langEn = window.location.href = "http://192.168.88.117:8080/";
// console.log("langRu");



// let language = window.navigator.language
// let languageFirstTwo = language.substr(0, 2)

// if (languageFirstTwo === 'ru') {
// 	window.location.href = 'https://hama-actor.com/ru/'
// } else {
// 	window.location.href = 'https://hama-actor.com'
// }



// lishniy code 

// console.log(language);
// console.log(languageFirstTwo);
// console.log(currentLocation);

// ORIGINAL VERSION

// if (languageFirstTwo === 'ru') {
// 	window.location.href = 'index.html.ru'
// } else {
// 	window.location.href = 'index.html.en'
// }

// CUSTOM VERSION

// if (languageFirstTwo === 'ru'){
// 	window.location.href = '.../src/index.html';
// } else {
// 	window.location.href = '.../src/index_en.html';
// }

