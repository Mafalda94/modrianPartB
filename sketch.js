function setup() {
  // 1º -> createCanvas(windowWidth, windowHeight) adaptar a largura x altura como pretendemos.
  // 5º -> Para finalizar, coloquei o canvas no centro da tela e tive de acrescentar antes de createCanvas(800, 784) a função let canvas = e posteriormente em linhas seguidas as funções, let x = (windowWidth - width) / 2; + let y = (windowHeight - height) / 2; + canvas.position(x, y);.
  let canvas = createCanvas(800, 784);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);  
  background('#e4e4e0');
  frameRate(6);
}

function draw() {
  // 4º -> Coloquei primeiro as linhas, depois os quadrados, para que as linhas fiquem por cima dos quadrados para não dar erro, tenho de seguir as regras de sobreposição.
  // 3º -> Quadrado. Exemplo: rect(x, y, largura, altura);.
  strokeWeight(0);
  fill('#ee2400');
  rect(0, 0, 367, 318);

  let corretagulo =['#222071', '#f49404'];
  let escolha1 = random(corretagulo);
  fill(escolha1);
  rect(367, 519, 243, 222);

  fill('#f4ce04');
  rect(0, 518, 78, 265);
  
  // 2º -> Linhas e expessura delas. Exemplo: strokeWeight(expessura); + line(x1, y1, x2, y2);.
  strokeWeight(14);
  line(0, 318, 800, 323);

  strokeWeight(11);
  line(367, 0, 367, 784);

  strokeWeight(17);
  line(0, 511, 800, 511);

  strokeWeight(10);
  line(78, 518, 78, 784);
  line(614, 518, 614, 784);

  strokeWeight(15);
  line(369, 747, 610, 747);

  //7º -> random - várias tentativas através da ajuda do p5.js para a parte B.
  let pontox = 30;
  let pontoy = 300;

  strokeWeight(0);  
  let cor =['#ee2400', '#222071'];
  let escolha = random(cor);
  let escolhaa = random(cor);
  let escolhaaa = random(cor);

  textSize(16)
  fill(escolha);
  pontox += random(-100, 100);
  pontoy += random(-100, 100);
  text('Acho que possivelmente o design acabou de me levar ao meu limite... No lodo. 🤯',pontox, pontoy);
  fill(escolhaa);
  pontox += random(-300, 300);
  pontoy += random(-300, 300);
  text('Acho que possivelmente o design acabou de me levar ao meu limite... No lodo. 🤯',pontox, pontoy);
  fill(escolhaaa);
  pontox += random(-500, 500);
  pontoy += random(-500, 500);
  text('Acho que possivelmente o design acabou de me levar ao meu limite... No lodo. 🤯',pontox, pontoy);

}
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
