const divs = document.querySelectorAll('div');
const body = document.querySelector('body');

body.addEventListener('click', bodyClickHandler);

divs.forEach((e) => {
	e.addEventListener('click', clickHandler);
});

function clickHandler(e) {
	const time = e.currentTarget.dataset.time;

	setTimeout(
		(e) => {
			e.classList.add('clicked');
		},
		time,
		e.currentTarget
	);
}

function bodyClickHandler(e) {
	if (e.target === e.currentTarget) {
		divs.forEach((e) => {
			e.classList.remove('clicked');
		});
	}
}
