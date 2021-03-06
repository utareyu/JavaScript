//number-guessing-game-start.htmlをコピーしたものに当てるときはいろいろ変えてね
//定数の定義
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
//sandクラスの中に表示するために取得
const sand = document.querySelector('.sand');

//変数の定義
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetButton;

//入力フィールドへフォーカス
guessField.focus();

//プレースホルダーの表示　これだけだとデバッガーから叩かないと表示されない
//function checkGuess() {
//	alert('これはプレースホルダです');
//}

function checkGuess() {
	let userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = '前回の予想: ';
	}
	guesses.textContent += userGuess + ' ';

	if (userGuess === randomNumber) {
		lastResult.textContent = '正解';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = 'ゲームオーバー';
		setGameOver();
	} else {
		lastResult.textContent = '間違い';
		lastResult.style.backgroundColor = 'red';
		if(userGuess < randomNumber) {
			lowOrHi.textContent='値が小さいです' ;
		} else if(userGuess > randomNumber) {
			lowOrHi.textContent = '値が大きいです';
		}
	}
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'にゅーげーむ';
	sand.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = '#0000';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

//イベントリスナーの設定
guessSubmit.addEventListener('click', checkGuess);