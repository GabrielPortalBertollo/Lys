document.addEventListener("DOMContentLoaded", () => {
  const fundoEstrelado = document.createElement("div");
  fundoEstrelado.classList.add("fundo-estrelado");
  document.body.appendChild(fundoEstrelado);

  // Estrelas
  for (let i = 0; i < 100; i++) {
    const estrela = document.createElement("div");
    estrela.classList.add("estrela");
    estrela.style.top = Math.random() * 100 + "%";
    estrela.style.left = Math.random() * 100 + "%";
    estrela.style.animationDelay = Math.random() * 5 + "s";
    fundoEstrelado.appendChild(estrela);
  }

  // Vários cometas com delays diferentes
  for (let i = 0; i < 4; i++) {
    const cometa = document.createElement("div");
    cometa.classList.add("cometa");
    cometa.style.top = `${10 + i * 20}%`;
    cometa.style.animationDelay = `${i * 8}s`;
    fundoEstrelado.appendChild(cometa);
  }
});
