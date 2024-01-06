const img360 = document.querySelector('.img360');
const imgX = document.querySelector('.imgX');
const imgSofa = document.querySelector('.imgSofa');
const gif = document.querySelector('.gif');

function mostrarGif() {
  imgSofa.style.display = 'none';
  img360.style.display = 'none';
  gif.style.display = 'block';
  imgX.style.display = 'block';
}

function fecharGif() {
  imgSofa.style.display = 'block';
  img360.style.display = 'block';
  gif.style.display = 'none';
  imgX.style.display = 'none';
}

img360.addEventListener('click', mostrarGif);
imgX.addEventListener('click', fecharGif);
