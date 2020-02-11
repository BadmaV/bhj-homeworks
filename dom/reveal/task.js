const reveal = Array.from(document.querySelectorAll('.reveal'));
const viewportHeight = window.innerHeight;
let revealCoordinatesTop;

function Onscroll() {
	for (let a in reveal) {
		revealCoordinates = reveal[a].getBoundingClientRect().top;
		if (viewportHeight > revealCoordinates) {
			reveal[a].className = 'reveal reveal_active';
		}
	}
};

window.addEventListener('scroll', Onscroll);