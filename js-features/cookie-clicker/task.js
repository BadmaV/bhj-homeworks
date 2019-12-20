const cookieClick = document.getElementById('cookie');
cookieClick.onclick = function() {
	const clicker = document.getElementById('clicker__counter');
	clicker.textContent++;
	if(clicker.click) {
		cookieClick.width = 250;
	} 
}






