const para = document.querySelector('.a > p');
const fv = document.querySelector('.a > h2');

para.addEventListener('click', updateName);
fv.addEventListener('click', foover);

function updateName() {
  let name = prompt('名前を入力して下さい');
  para.textContent = 'Player 1: ' + name;
}

function foover(){
	fv.textContent = 'ver'
}