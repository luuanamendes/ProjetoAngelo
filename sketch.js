//constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variaveis
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;

//criar var cannonBall


//carregar imagens/animaçoes/sons
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  //cria a tela
  canvas = createCanvas(1200, 600);

  //cria o mecanismo e o mundo
  engine = Engine.create();
  world = engine.world;
  
  //cria o chão - mecanismo diferente
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  //cria torres - mecanismo diferente
  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  //cria o canhão
  angleMode(DEGREES);
  angle = 15;
  cannon = new Cannon(180, 110, 130, 100, angle);

  //definir cannonBall

}

function draw() {
  //exibe gif do background
  image(backgroundImg, 0, 0, width, height);

  //atualiza o mecanismo
  Engine.update(engine);

  //exibe o chão
  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  //exibe a torre
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  //exibe o canhão
  cannon.display();

  //exibir cannon ball

}

//função sacar a bola
function keyReleased() {


}
