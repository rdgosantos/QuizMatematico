const problema = document.getElementById("problema");
const resposta = document.getElementById("resposta");
const verificar = document.getElementById("verificar");
const mensagem = document.getElementById("mensagem");

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarOperacaoMatematica() {
  const operacoes = ['+', '-', '*'];
  const indiceOperacao = gerarNumeroAleatorio(0, operacoes.length - 1);
  return operacoes[indiceOperacao];
}

function gerarProblemaMatematico() {
  const num1 = gerarNumeroAleatorio(1, 10);
  const num2 = gerarNumeroAleatorio(1, 10);
  const operacao = gerarOperacaoMatematica();
  const problemaMatematico = `${num1} ${operacao} ${num2}`;
  problema.textContent = problemaMatematico;
}

function validarRespostaUsuario(problemaMatematico, respostaUsuario) {
  const respostaCorreta = eval(problemaMatematico);
  return respostaUsuario === respostaCorreta.toString();
}

gerarProblemaMatematico();

soma = ++

verificar.addEventListener("click", function(event) {
  event.preventDefault();
  const respostaUsuario = resposta.value;
  if (validarRespostaUsuario(problema.textContent, respostaUsuario)) {
    mensagem.textContent = "Parabéns, você acertou! :)";
} else {
mensagem.textContent = "Ops, você errou! Tente novamente.";
}
resposta.value = "";
gerarProblemaMatematico();
});
