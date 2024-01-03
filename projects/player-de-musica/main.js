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
    src: 'assets/smells.mp3',
    img: 'assets/nirvana.png',
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
const tempoTotal = document.querySelector('.tempo-total');
const tempoParaAcabar = document.querySelector('.tempo-para-acabar');

const audio = document.querySelector('audio');
let indexMusica = 0;
renderizarMusica(indexMusica);

prevControl.addEventListener('click', () => {
  pausarMusica();
  progress.style.width = '0%';
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 1;
  }
  renderizarMusica(indexMusica);
});

nextControl.addEventListener('click', () => {
  pausarMusica();
  progress.style.width = '0%';
  indexMusica++;
  if (indexMusica > 1) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});

function renderizarMusica(index) {
  audio.setAttribute('src', musicas[index].src);
  audio.addEventListener('loadeddata', () => {
    tituloMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    tempoTotal.textContent = segundosParaMinutos(Math.floor(audio.duration));
    tempoParaAcabar.textContent = '00:00';
  });
}

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
  tempoParaAcabar.textContent = segundosParaMinutos(
    Math.floor(audio.duration - audio.currentTime),
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = '0' + campoSegundos;
  }

  // return campoMinutos + ':' + campoSegundos;
  return `0${campoMinutos}:${campoSegundos}`;
}

playControl.addEventListener('click', tocarMusica);
pauseControl.addEventListener('click', pausarMusica);
audio.addEventListener('timeupdate', atualizarBarra);
