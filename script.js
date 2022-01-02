document.addEventListener('DOMContentLoaded', function() {

let burgerIcon = document.querySelector('.burger_menu'),
	 burgerIconSpan = burgerIcon.querySelector('span'),
	 burgerMenu = document.querySelector('.mobile_nav'),

	 almaty = document.querySelector('.almaty'),
	 astana = document.querySelector('.astana'),
	 almatyContacts = document.querySelector('.contacts_almaty'),
	 astanaContacts = document.querySelector('.contacts_astana'),
	 yandexMapAlmaty = document.querySelector('.yandex_map'),
	 yandexMapAstana = document.querySelector('.yandex_map_astana'),

	 footerBtn = document.querySelector('.contacts_button'),
	 popupBgForm = document.querySelector('.popup_bg_form'),
	 popupClose = popupBgForm.querySelector('.close_btn'),

	 formBtn = document.querySelector('.form_button'),
	 formBtnPopUp = popupBgForm.querySelector('.form_button'),
	 popupSuccess = document.querySelector('.popup_bg'),

	 pianoDiscBtn = document.querySelector('.pianodisc_button'),
	 mainForm = document.getElementById('#main-form');
	 mainPhone = mainForm[0];

/*ANIMATION*/
	let fadeItems = document.querySelectorAll('.anim-items');

	if (fadeItems.length > 0) {
		window.addEventListener('scroll', fadeOnScroll);
		function fadeOnScroll(params) {
			for (let i = 0; i < fadeItems.length; i++) {
				const fadeItem = fadeItems[i];
				const fadeItemHeight = fadeItem.offsetHeight;
				const fadeItemOffset = offset(fadeItem).top;
				const fadeStart = 4;

				let fadeItemPoint = window.innerHeight - fadeItemHeight / fadeStart;

				if (fadeItemHeight > window.innerHeight) {
					fadeItemPoint = window.innerHeight - window.innerHeight / fadeStart;
				}
				if((window.pageYOffset > fadeItemOffset - fadeItemPoint) && window.pageYOffset < (fadeItemOffset + fadeItemHeight)) {
					fadeItem.classList.add('fade-in');
				} else {
					if (!fadeItem.classList.contains('anim-no-hide')) {
					fadeItem.classList.remove('fade-in');
				}
			}
		}
	}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		setTimeout(() => {
			fadeOnScroll();
		}, 200);

	};

/*BURGER*/

burgerIcon.addEventListener('click', function() {
	if (burgerIcon.classList.contains('active') && burgerMenu.classList.contains('nav_active')) {
		burgerMenu.classList.remove('nav_active');
		burgerIcon.classList.remove('active');
	} else {
		burgerMenu.classList.add('nav_active');
		burgerIcon.classList.add('active');
	}
});

astana.addEventListener('click', function() {
	almaty.classList.remove('city_active');
	astana.classList.add('city_active');
	almatyContacts.classList.add('hide');
	astanaContacts.classList.remove('hide');
	yandexMapAlmaty.classList.add('hide');
	yandexMapAstana.classList.remove('hide');
});

almaty.addEventListener('click', function() {
	astana.classList.remove('city_active');
	almaty.classList.add('city_active');
	astanaContacts.classList.add('hide');
	almatyContacts.classList.remove('hide');
	yandexMapAstana.classList.add('hide');
	yandexMapAlmaty.classList.remove('hide');
});

footerBtn.addEventListener('click', function () {
	popupBgForm.classList.remove('hide');
	popupBgForm.classList.add('popup_animate');
});

pianoDiscBtn.addEventListener('click', function () {
	popupBgForm.classList.remove('hide');
	popupBgForm.classList.add('popup_animate');
});


popupClose.addEventListener('click', function() {
	popupBgForm.classList.add('hide');
	popupBgForm.classList.remove('popup_animate');
});

//popup for main form

/* formBtn.addEventListener('click', function () {
	popupSuccess.classList.remove('hide');
	setTimeout(function(){ 
		popupSuccess.classList.add('hide');
		}, 3000);
}); */


/*SUCCESS SUBMIT*/
/* formBtnPopUp.addEventListener('click', function () {
	popupBgForm.classList.add('hide');
	popupSuccess.classList.add('popup_animate');
	popupSuccess.classList.remove('hide');
	setTimeout(function(){ 
		popupSuccess.classList.add('hide');
		popupSuccess.classList.remove('popup_animate');
		}, 3000);
}); */

/*PHONE MASK*/
let phoneInputs = document.querySelectorAll('input[data-tel-input]');
let phoneInputsPop = popupBgForm.querySelectorAll('input[data-tel-input]');


let getInputNumbersValue = function(input) {
	return input.value.replace(/\D/g, "");
}

let onPhoneInput = function(e) {
	let input = e.target,
		 inputNumbersValue = getInputNumbersValue(input);
		 formattedInputValue = "",
		 selectionStart = input.selectionStart;

	if (!inputNumbersValue) {
		return input.value = "";
	}

	if (input.value.length != selectionStart) {
		if (e.data && /\D/g.test(e.data)) {
			input.value = inputNumbersValue;
		}

		return;
	}

	if (["7", "8"].indexOf(inputNumbersValue[0]) > -1) {
		//KZ Number
		if (inputNumbersValue[0] == "7", "8") {
			let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
			formattedInputValue = firstSymbols + " ";
			if (inputNumbersValue.length > 1) {
				formattedInputValue += "" + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue >= 5) {
				formattedInputValue += " " + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue >= 7) {
				formattedInputValue += " " + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue >= 9) {
				formattedInputValue += " " + inputNumbersValue.substring(9, 11);
			}
		}
	} else {
		//Not KZ number
		formattedInputValue = "+" + inputNumbersValue;
	}
	input.value = formattedInputValue;
}

let onPhoneKeyDown = function(e) {
	let input = e.target;
	if (e.keyCode == 8 && getInputNumbersValue(input).length > 1) {
		input.value = getInputNumbersValue(input);
	} else if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
		input.value = "";
	}
}

let onPhonePaste = function(e) {
	let pasted = e.clipboardData || window.clipboardData,
		input = e.target,
		inputNumbersValue = getInputNumbersValue(input);

		if (pasted) {
			let pastedText = pasted.getData("Text");
			if (/\D/g.test(pastedText)) {
				input.value = inputNumbersValue;
			}
		}
}


for (i = 0; i < phoneInputs.length; i++) {
	let input = phoneInputs[i];
	input.addEventListener('input', onPhoneInput);
	input.addEventListener('keydown', onPhoneKeyDown);
	input.addEventListener('paste', onPhonePaste);
}

'use strict'
/*SUBMIT*/
console.log('form');
$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");

		popupBgForm.classList.add('hide');
		popupSuccess.classList.add('popup_animate');
		popupSuccess.classList.remove('hide');
		setTimeout(function(){ 
		popupSuccess.classList.add('hide');
		popupSuccess.classList.remove('popup_animate');
		}, 3000);
		$('form').trigger('reset');
	});
	return false;
});

});
