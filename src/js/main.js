function expandFull() {
	const btn = document.querySelectorAll('.more-button');
	const btn_icon = document.querySelectorAll('.more-button .more-button__icon');
	const btn_text = document.querySelectorAll('.more-button .more-button__text');
	
	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function(event) {
			let val = btn_text[i].textContent;
			let container = btn[i].parentElement.previousSibling.previousSibling;
			
			if (i == 0) {
				container.classList.toggle('article-block-body__text--overflow');
				if (val == 'Скрыть') {
					val = 'Читать далее';
				} else {
					val = 'Скрыть';
				};
			} else {
				container.classList.toggle('section-content-body--overflow');
				if (val == 'Скрыть') {
					val = 'Показать все';
				} else {
					val = 'Скрыть';
				};
			};

			btn_text[i].textContent = val;
			btn_icon[i].classList.toggle('more-button__icon--opened');

			event.preventDefault();
		});
	};
};

function initSidebar() {
	const burger = document.querySelector('.icon.icon-list');
	const close = document.querySelector('.icon.icon-close');
	const sidebar = document.querySelector('.aside');

	function toggleSidebar(event) {
		sidebar.classList.toggle('aside--active');
		event.preventDefault();
	};

	burger.addEventListener('click', toggleSidebar);
	close.addEventListener('click', toggleSidebar);
};

function initSwiperMobile() {
	const mobile_screen = window.matchMedia('(max-width: 640px)');
	const swiper_selectors = document.querySelectorAll('.swiper');
	const swiper_params = {
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		slidesPerView: 1.25,
		keyboard: true,
		breakpoints: {
			320: {
				slidesPerView: 1.1
			},
			480: {
				slidesPerView: 1.7
			},
			560: {
				slidesPerView: 2.0
			},
			640: {
				slidesPerView: 2.2
			}
		}
	};

	if (mobile_screen.matches == true) {
		for (let i = 0; i < swiper_selectors.length; i++) {
			const swiper = new Swiper(swiper_selectors[i], swiper_params);
		};
	}
};

expandFull();
initSidebar();
initSwiperMobile();

window.addEventListener('resize', initSwiperMobile);