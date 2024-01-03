const musicas = [
  {
    titulo: "Sweet Child O' Mine",
    artista: "Guns n' Roses",
    src: 'assets/sweet.mp3',
    img: 'assets/sweet.jpeg',
  },
  {
    titulo: 'Smells Like Teen Spirit',
    artista: 'Nirvana',
    src: 'asset/smells.mp3',
    img: 'asset/nirvana.png',
  },
];

const playControl = document.querySelector('.controls .play');
const pauseControl = document.querySelector('.controls .pause');
const prevControl = document.querySelector('.controls .prev-control');
const nextControl = document.querySelector('.controls .next-control');

const imagem = document.querySelector('img');
const tituloMusica = document.querySelector('.descricao h1');
const nomeArtista = document.querySelector('.descricao p');

const progress = document.querySelector('progress');
const audio = document.querySelector('audio');
const tempoTotal = document.querySelector('.tempo-total');
const tempoParaAcabar = document.querySelector('.tempo-para-acabar');

function tocarMusica() {
  audio.play();
  pauseControl.style.display = 'block';
  playControl.style.display = 'none';
}

function pausarMusica() {
  audio.pause();
  pauseControl.style.display = 'none';
  playControl.style.display = 'block';
}

function atualizarBarra() {
  progress.style.width =
    Math.floor((audio.currentTime / audio.duration) * 100) + '%';
}

playControl.addEventListener('click', tocarMusica);
pauseControl.addEventListener('click', pausarMusica);
audio.addEventListener('timeupdate', atualizarBarra);
