const buttons = document.querySelectorAll('button');

buttons.forEach((element) => {
	element.addEventListener('click', clickHandler);
});

function clickHandler() {
	console.log('clicked');
	this.innerText = 'clicked';
	this.removeEventListener('click', clickHandler);
}
