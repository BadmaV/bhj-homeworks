const cookieClick = document.getElementById('cookie');
cookieClick.onclick = function() {
	const clicker = document.getElementById('clicker__counter');
	clicker.textContent++;
	if (clicker.textContent % 2 === 0) {
		cookieClick.width = 250;
	} else {
		cookieClick.width = 200;
	}
}






