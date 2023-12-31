const conteudoGeralElement = document.querySelector(".conteudo-geral");
const containerCarrousel = conteudoGeralElement.querySelector(
  ".conteudo-geral-sliderGeral"
);
const sliderGeral = conteudoGeralElement.querySelector(".sliderGeral");
const itemsDoSlider = sliderGeral.querySelectorAll(".sliderGeral-card");


let mouseEmCima = false;
let posicaoAtualDoMouse = 0;
let ultimaPosicaoDoMouse = 0;
let ultimoMovimentoDoMouse = 0;
let moverPara = 0;

const inicioSlider = () => {
  const propriedadesSlider = onResize();
  const tamanhoGeral = itemsDoSlider.length; 
  const tamanhoEmGraus = 360 / tamanhoGeral; 
  const gap = 30;
  const tz = distanciaHorizontal(propriedadesSlider.w, tamanhoGeral, gap);

  const height = calcularAltura(tz);

  conteudoGeralElement.style.width = tz * 2 + gap * tamanhoGeral + "px";
  conteudoGeralElement.style.height = height + "px";

  itemsDoSlider.forEach((item, i) => {
    const grausPorItem = tamanhoEmGraus * i + "deg";
    item.style.setProperty("--rotatey", grausPorItem);
    item.style.setProperty("--tz", tz + "px");
  });
};

const suavicaoDaAnimacao = (a, b, n) => {
  return n * (a - b) + b;
};

const distanciaHorizontal = (larguraElemento, tamanhoGeral, gap) => {
  return larguraElemento / 2 / Math.tan(Math.PI / tamanhoGeral) + gap; 
};

const calcularAltura = (z) => {
  const t = Math.atan((90 * Math.PI) / 180 / 2);
  const height = t * 2 * z;

  return height;
};

const calculCampoDeVisao = (propriedadesSlider) => {
  const perpectiva = window
    .getComputedStyle(containerCarrousel)
    .perspective.split("px")[0];

  const tamanhoGeral =
    Math.sqrt(propriedadesSlider.w * propriedadesSlider.w) +
    Math.sqrt(propriedadesSlider.h * propriedadesSlider.h);
  const fov = 2 * Math.atan(tamanhoGeral / (2 * perpectiva)) * (180 / Math.PI);
  return fov;
};

const getPosX = (x) => {
  posicaoAtualDoMouse = x;

  moverPara =
    posicaoAtualDoMouse < ultimaPosicaoDoMouse ? moverPara - 2 : moverPara + 2;

  ultimaPosicaoDoMouse = posicaoAtualDoMouse;
};

const atualizacaoGeral = () => {
  ultimoMovimentoDoMouse = suavicaoDaAnimacao(
    moverPara,
    ultimoMovimentoDoMouse,
    0.3
  );
  sliderGeral.style.setProperty("--rotatey", ultimoMovimentoDoMouse + "deg");

  requestAnimationFrame(atualizacaoGeral);
};

const onResize = () => {
  const boundingCarrousel = containerCarrousel.getBoundingClientRect();

  const propriedadesSlider = {
    w: boundingCarrousel.width,
    h: boundingCarrousel.height,
  };

  return propriedadesSlider;
};

const iniciarLogicaGeral = () => {
  sliderGeral.addEventListener("mousedown", () => {
    mouseEmCima = true;
    sliderGeral.style.cursor = "grabbing";
  });
  sliderGeral.addEventListener("mouseup", () => {
    mouseEmCima = false;
    sliderGeral.style.cursor = "grab";
  });
  conteudoGeralElement.addEventListener(
    "mouseleave",
    () => (mouseEmCima = false)
  );

  sliderGeral.addEventListener(
    "mousemove",
    (e) => mouseEmCima && getPosX(e.clientX)
  );

  sliderGeral.addEventListener("touchstart", () => {
    mouseEmCima = true;
    sliderGeral.style.cursor = "grabbing";
  });
  sliderGeral.addEventListener("touchend", () => {
    mouseEmCima = false;
    sliderGeral.style.cursor = "grab";
  });
  conteudoGeralElement.addEventListener(
    "touchmove",
    (e) => mouseEmCima && getPosX(e.touches[0].clientX)
  );

  window.addEventListener("resize", inicioSlider);

  atualizacaoGeral();
  inicioSlider();
};

iniciarLogicaGeral();