const para = document.querySelector('.sand > p');
const fv = document.querySelector('.sand > h2');

para.addEventListener('click', updateName);
fv.addEventListener('click', foobar);

function updateName() {
  let name = prompt('名前を入力して下さい');
  para.textContent = 'Player 1: ' + name;
}

function foobar(){
	fv.textContent = 'bar'
}