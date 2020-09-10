const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var division_array = [];
var divisionHeight = 300;

var plinkos = [];
var particles = [];

function preload() {
  bg = loadImage("bg.jpg")
}

function setup() {
  var canvas = createCanvas(600, 800)
  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <= innerWidth; k = k + 100) {
    division_array.push(new divisions(k, 650, 10, divisionHeight))
  }

  ground1 = new Ground(300, 790, innerWidth, 20)

  for (var k = 50; k <= 550; k = k + 50) {
    plinkos.push(new Plinko(k, 130, 20, 20))
  }
  for (var k = 50; k <= 550; k = k + 50) {
    plinkos.push(new Plinko(k, 230, 20, 20))
  }
  for (var k = 50; k <= 550; k = k + 50) {
    plinkos.push(new Plinko(k, 330, 20, 20))
  }
  for (var k = 50; k <= 550; k = k + 50) {
    plinkos.push(new Plinko(k, 430, 20, 20))
  }
  for (var k = 50; k <= 550; k = k + 50) {
    plinkos.push(new Plinko(k, 50, 20, 20))
  }

}

function draw() {
  background(bg);

  Engine.update(engine);

  division_array[0].display();
  division_array[1].display();
  division_array[2].display();
  division_array[3].display();
  division_array[4].display();
  division_array[5].display();
  division_array[6].display();

  plinkos[0].display();
  plinkos[1].display();
  plinkos[2].display();
  plinkos[3].display();
  plinkos[4].display();
  plinkos[5].display();
  plinkos[6].display();
  plinkos[7].display();
  plinkos[8].display();
  plinkos[9].display();
  plinkos[10].display();
  // plinkos[11].display();
  plinkos[12].display();
  plinkos[13].display();
  plinkos[14].display();
  plinkos[15].display();
  plinkos[16].display();
  plinkos[17].display();
  plinkos[18].display();
  plinkos[19].display();
  plinkos[20].display();
  // plinkos[21].display();
  plinkos[22].display();
  plinkos[23].display();
  plinkos[24].display();
  plinkos[25].display();
  plinkos[26].display();
  plinkos[27].display();
  plinkos[28].display();
  plinkos[29].display();
  plinkos[30].display();
  plinkos[31].display();
  plinkos[32].display();
  // plinkos[33].display();
  plinkos[34].display();
  plinkos[35].display();
  plinkos[36].display();
  plinkos[37].display();
  plinkos[38].display();
  plinkos[39].display();
  plinkos[40].display();
  plinkos[41].display();
  plinkos[42].display();
  // plinkos[43].display();
  // plinkos[44].display();
  plinkos[45].display();
  plinkos[46].display();
  plinkos[47].display();
  plinkos[48].display();
  plinkos[49].display();
  plinkos[50].display();
  plinkos[51].display();
  plinkos[52].display();
  plinkos[53].display();
  // plinkos[54].display();



  if (frameCount % 60 === 0) {
    newParticle();
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }


  ground1.display();

}

function newParticle(){
  var x = random(250, 350);
  var newParticle= new Particle(x, 0, 15, 15);
  particles.push(newParticle)
  return newParticle;
}