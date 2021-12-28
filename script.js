'use strict'

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

	 pianoDiscBtn = document.querySelector('.pianodisc_button');



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
});

pianoDiscBtn.addEventListener('click', function () {
	popupBgForm.classList.remove('hide');
});


popupClose.addEventListener('click', function() {
	popupBgForm.classList.add('hide');
});

formBtn.addEventListener('click', function () {
	popupSuccess.classList.remove('hide');
	setTimeout(function(){ 
		popupSuccess.classList.add('hide');
		}, 3000);
});

formBtnPopUp.addEventListener('click', function () {
	popupBgForm.classList.add('hide');
	popupSuccess.classList.remove('hide');
	setTimeout(function(){ 
		popupSuccess.classList.add('hide');
		}, 3000);
});

});
