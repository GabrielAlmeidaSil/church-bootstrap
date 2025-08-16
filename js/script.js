const botoes = document.querySelectorAll(".filtro");
  const secoes = document.querySelectorAll("section");

  botoes.forEach(botao => {
    botao.addEventListener("click", e => {
      e.preventDefault();
      const categoria = botao.dataset.categoria;

      secoes.forEach(secao => {
        if (categoria === "all") {
          secao.style.display = "block";
        } else {
          secao.style.display = secao.classList.contains(categoria) ? "block" : "none";
        }
      });
    });
  });