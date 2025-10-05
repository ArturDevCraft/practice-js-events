document.addEventListener('DOMContentLoaded', init);

function init() {
	const div = document.querySelector('div');
	div.addEventListener('mousemove', () => {
		console.log('Mouse move on the div');
	});

	div.addEventListener('mouseleave', () => {
		console.log('Mouse left the div!!!');
	});
}
