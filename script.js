const logoIniciar = document.querySelector(".logo-pontuacao-interna");
logoIniciar.style.display = "none";

const paginaInicial = document.querySelector(".pontuacao-partidas");
paginaInicial.style.display = "none";

const jogar = document.querySelector(".jogar");
jogar.addEventListener("click", iniciarJogo);

const somar = document.querySelector("#botao-somar-pontos");
somar.addEventListener("click", somarPontos);

let nomeJogador1, pontosJogador1, totalPontosJogador1;
let listaPontosJogador1 = document.querySelector("#lista-pontos-jogador1");
let outputTotalPontosJogador1 = document.querySelector(
  "#total-pontos-jogador1"
);
let soma1 = 0;

let nomeJogador2, pontosJogador2, totalPontosJogador2;
let listaPontosJogador2 = document.querySelector("#lista-pontos-jogador2");
let outputTotalPontosJogador2 = document.querySelector(
  "#total-pontos-jogador2"
);
let soma2 = 0;

function iniciarJogo(event) {
  // TODO

  const entradaJogadores = document.querySelector(".entradaJogadores");
  entradaJogadores.style.display = "none";

  const pontuacaoPartidas = document.querySelector(".pontuacao-partidas");
  pontuacaoPartidas.style.display = "block";

  const logoInterna = document.querySelector(".logo-pontuacao-interna");
  logoInterna.style.display = "block";

  const logoIniciar = document.querySelector(".logo-pontuacao");
  logoIniciar.style.display = "none";
  // arrumarTela()

  //
  const jogador1 = document.querySelector("#inputNovoJogador1");
  nomeJogador1 = document.getElementById("nome-jogador1");

  const nomeDoJogador1 = jogador1.value;
  nomeJogador1.innerHTML = nomeDoJogador1;

  const jogador2 = document.querySelector("#inputNovoJogador2");
  nomeJogador2 = document.getElementById("nome-jogador2");

  const nomeDoJogador2 = jogador2.value;
  nomeJogador2.innerHTML = nomeDoJogador2;
}

function somarPontos(event) {
  const inputPontosJogador1 = +document.querySelector("#input-pontos-jogador1")
    .value;

  const inputPontosJogador2 = +document.querySelector("#input-pontos-jogador2")
    .value;

  const p = document.createElement("p");

  p.appendChild(document.createTextNode(`${inputPontosJogador1}`));
  listaPontosJogador1.appendChild(p);

  const pp = document.createElement("p");
  pp.appendChild(document.createTextNode(`${inputPontosJogador2}`));
  listaPontosJogador2.appendChild(pp);

  soma1 = soma1 + inputPontosJogador1;
  outputTotalPontosJogador1.innerHTML = soma1;

  soma2 = soma2 + inputPontosJogador2;
  outputTotalPontosJogador2.innerHTML = soma2;
}

/*let nomeJogador1 = document.getElementById("nome-jogador1");
let nome-jogador1 = jogador1;
nomeJogador1.innerHTML = nome-jogador1;

/*let numeroJogadores = 0;

function adicionar() {
  numeroJogadores++;

  if (numeroJogadores <= 2) {
    let nomeJogadorAdicionado =
      document.getElementById("inputNovoJogador").value;
    console.log(numeroJogadores);

    let novoNomeAdicionado = document.getElementById("jogadorAdicionado");
    console.log(novoNomeAdicionado);

     let jogadorAdicionado = nomeJogadorAdicionado;
    if (numeroJogadores == 2) {
      jogadorAdicionado = " VS " + jogadorAdicionado;
    }

    let elementoNovoInput = jogadorAdicionado;

    novoNomeAdicionado.innerHTML =
      novoNomeAdicionado.innerHTML + elementoNovoInput;
  }
  document.getElementById("inputNovoJogador").value = "";
}*/
