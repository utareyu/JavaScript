const sand = document.querySelector('.sand');

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'ボタンが押されました!';
  sand.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}