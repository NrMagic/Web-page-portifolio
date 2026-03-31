export function setupBackgroundChange() {
  document.querySelectorAll('.btnCard, .imgCard').forEach(el => {
    el.addEventListener('click', () => {
      document.body.style.backgroundImage = 'url("/src/assets/Captura de tela de 2026-03-31 10-47-40.png")';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
    });
  });
}
