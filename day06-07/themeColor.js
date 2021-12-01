if (localStorage.getItem('tLStheme') === null){
	changeBlue();
} else {
	document.documentElement.setAttribute('theme', localStorage.getItem('tLStheme'));
}

console.log(localStorage.getItem('tLStheme'));

function changeLight() {
	localStorage.setItem('tLStheme','LIGHT');
  document.documentElement.setAttribute('theme', "LIGHT");
}

function changeBlue() {
	localStorage.setItem('tLStheme','BLUE');
  document.documentElement.setAttribute('theme', "BLUE");
}

function changeBlack() {
	localStorage.setItem('tLStheme','BLACK');
  document.documentElement.setAttribute('theme', "BLACK");
}