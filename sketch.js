// Mostrar a galeria correta
function mostrarGaleria(id) {
  // Esconde as galerias
  const galerias = document.querySelectorAll('.galeria');
  galerias.forEach(g => g.classList.add('escondida'));

  // Mostra a galeria com o ID específico
  const galeriaAtiva = document.getElementById(id);
  if (galeriaAtiva) {
    galeriaAtiva.classList.remove('escondida');
  }
}

const scrollButton = document.getElementById('scrollButton');
const contatoSection = document.getElementById('contato');

function toggleScrollButton() {
  if (window.scrollY === 0) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
}

window.addEventListener('scroll', toggleScrollButton);
toggleScrollButton();

scrollButton.addEventListener('click', () => {
  contatoSection.scrollIntoView({ behavior: 'smooth' });
});

