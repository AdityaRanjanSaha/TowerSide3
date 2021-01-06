const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var sirface1,sirface2;
var bk1,bk2,bk3,bk4,bk4,bk5,
bk6,bk7,bk8,bk8,bk9,bk11,
bk12,bk13,bk14,bk15,bk16,
bk17,bk18,bk19,bk20,bk21,
bk22,bk23,bk24,bk25,bk26;

var polygonW;
var slingShot;
var score=0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
   polygonW = new Polygon(150,230,40);

   sirface1 = new Sirface(500,329,300,15);
   sirface2 = new Sirface(900,208,300,15);
   
   slingShot = new SlingShot(polygonW.body,{x:150,y:230});

   
   bk1= new Blocks(500,180,30,40);

   bk2= new Blocks(470,220,30,40);
   bk3= new Blocks(500,220,30,40);
   bk4= new Blocks(530,220,30,40);

   bk5= new Blocks(440,260,30,40);
   bk6= new Blocks(470,260,30,40);
   bk7= new Blocks(500,260,30,40);
   bk8= new Blocks(530,260,30,40);
   bk9= new Blocks(560,260,30,40);
   
   bk11= new Blocks(410,300,30,40);
   bk12= new Blocks(440,300,30,40);
   bk13= new Blocks(470,300,30,40);
   bk14= new Blocks(500,300,30,40);
   bk15= new Blocks(530,300,30,40);
   bk16= new Blocks(560,300,30,40);
   bk17= new Blocks(590,300,30,40);

   bk18= new Blocks(900,100,30,40);
   bk19= new Blocks(870,140,30,40);
   bk20= new Blocks(900,140,30,40);
   bk21= new Blocks(930,140,30,40);
   bk22= new Blocks(840,180,30,40);
   bk23= new Blocks(870,180,30,40);
   bk24= new Blocks(900,180,30,40);
   bk25= new Blocks(930,180,30,40);
   bk26= new Blocks(960,180,30,40);
   
}

function draw(){
    background("0");
   // noStroke();
    textSize(35);
    fill("black");
    text("Score:"+score, 750,50);
    Engine.update(engine);
    sirface1.display();
    sirface2.display();
    polygonW.display();

    slingShot.display();
    bk1.display();
    bk2.display();
    bk3.display();
    bk4.display();
    bk5.display();
    bk6.display();
    bk7.display();
    bk8.display();
    bk9.display();
//bk10.display();
    bk11.display();
    bk12.display();
    bk13.display();
    bk14.display();
    bk15.display();
    bk16.display();
    bk17.display();
    bk18.display();
    bk19.display();
    bk20.display();
    bk21.display();
    bk22.display();
    bk23.display();
    bk24.display();
    bk25.display();
    bk26.display();

    bk1.score();
    bk2.score();
    bk1.score();
    bk3.score();
    bk4.score();
    bk5.score();
    bk6.score();
    bk7.score();
    bk8.score();
    bk9.score();
    bk11.score();
    bk12.score();
    bk13.score();
    bk14.score();
    bk15.score();
    bk16.score();
    bk17.score();
    bk18.score();
    bk19.score();
    bk20.score();
    bk21.score();
    bk22.score();
    bk23.score();
    bk24.score();
    bk25.score();
    bk26.score();
  
}

function mouseDragged(){
    Matter.Body.setPosition(polygonW.body,{x:mouseX, y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
    if(keyCode===32){
      slingShot.attached(polygonW.body);
    }
}
async function getBgImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var abc = await response.json();
  var datetime = abc.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06&&hour<=18){
    background("255");
  }
  else{
    background("0");
  }
  /*console.log(hour);
  backgroundImg = loadImage(bg);
*/
}





































































