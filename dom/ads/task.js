const rotator = document.querySelectorAll('.rotator__case');
let count = 0;

for (let text of Array.from(rotator)) {
	function rotate() {
		if (count == rotator.length - 1) {
			rotator.item(count).classList.toggle('rotator__case_active');
			count = 0;
			rotator.item(count).classList.toggle('rotator__case_active');
		} else {
			rotator.item(count).classList.toggle('rotator__case_active');
			count++;
			rotator.item(count).classList.toggle('rotator__case_active');
		}
	}
}

setInterval(rotate, 1000);

















/*Цикл for in - перебор ключей массива*/ 

/*let browsers = ['Chrome', 'Opera', 'Yandex', 'Firefox'];
 
for (let browser in browsers) {
	console.log(browser);
}*/


/*получение значения массива через цикл for in*/

/*for (let index in browsers) {
	console.log(browsers[index]);
}*/



/*Цикл for of - перебор значений массива*/

/*for (let browser of browsers) {
	console.log(browser);
}*/


// вывод массива
// console.log(browsers);

