const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
};

/* tutaj umieść swój kod */
const p = document.querySelectorAll('.text');
p.forEach((pEl) => {
	pEl.addEventListener('click', (el) => {
		const className = el.target.classList;
		if (className.contains('link')) {
			el.preventDefault();
			const href = el.target.getAttribute('href');
			if (stats.links[href] !== undefined) {
				stats.links[href]++;
			} else {
				stats.links[href] = 1;
			}
		}

		if (className.contains('text')) {
			const id = el.target.dataset.id;
			if (stats.paragraphs[id] !== undefined) {
				stats.paragraphs[id]++;
			} else {
				stats.paragraphs[id] = 1;
			}
		}
	});
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
	console.log(element, '=>', name);

	const event = new CustomEvent(name, {
		bubbles: true,
	});

	element.dispatchEvent(event);
};

const renderStats = function (data, element) {
	let html = '';
	for (let elementType in data) {
		html += '<ul>';

		for (let key in data[elementType]) {
			html += '<li>';
			html += key + ' -> ' + data[elementType][key];
			html += '</li>';
		}

		html += '</ul>';
	}

	element.innerHTML = html;
};

document.addEventListener('click', function (e) {
	const tagName = e.target.tagName;
	if (tagName.includes('P') || tagName.includes('A')) {
		fireCustomEvent(statsElement, 'render');
	}
});
statsElement.addEventListener(
	'render',
	renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
	'DOMContentLoaded',
	fireCustomEvent.bind(null, statsElement, 'render')
);
