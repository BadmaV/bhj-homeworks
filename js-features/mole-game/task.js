const killedMoles = document.getElementById('dead');
const misses = document.getElementById('lost');

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {

	const hole = getHole(i);
	hole.onclick = function() {
		if (hole.className.includes('hole_has-mole')) {
			killedMoles.textContent++;
		} else {
			misses.textContent++;
		}

		if (+misses.textContent === 5) {
			alert('Вы проиграли:(');
			killedMoles.textContent = 0;
			misses.textContent = 0;
		}		 

		if (+killedMoles.textContent === 10) {
			alert('вы выиграли!');
			killedMoles.textContent = 0;
			misses.textContent = 0;
		}
	}
}