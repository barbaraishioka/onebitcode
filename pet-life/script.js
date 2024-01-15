let duvidas = document.querySelectorAll("main #duvidas h3");

duvidas.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    let resposta = duvida.nextElementSibling;
    resposta.classList.toggle("ativa");
    resposta.style;
  });
});
