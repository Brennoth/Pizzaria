const cards = document.querySelectorAll('.depoimento-card');
const dots = document.getElementById('dotsContainer');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

let atual = 0;

cards.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('ativo');
  dot.addEventListener('click', () => irPara(i));
  dots.appendChild(dot);
});

function irPara(index) {
  cards[atual].classList.remove('ativo');
  document.querySelectorAll('.dot')[atual].classList.remove('ativo');

  atual = (index + cards.length) % cards.length;

  cards[atual].classList.add('ativo');
  document.querySelectorAll('.dot')[atual].classList.add('ativo');
}

btnPrev.addEventListener('click', () => irPara(atual - 1));
btnNext.addEventListener('click', () => irPara(atual + 1));

cards[0].classList.add('ativo');