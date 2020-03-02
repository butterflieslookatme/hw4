var cigars = [];
var s = 0;
var mySound;


function preload() {
  soundFormats("wav");
  mySound = loadSound("smoke.wav");
  
}

const num = 5;


function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < num; i++) {
    cigars.push([random(width), -random(height)]);
  }
  
  colorMode (RGB)
}

function renderCigar(x, y) {
  push();
  noStroke()
  fill(255)
  rect(x, y, 10, 55)
  fill(205, 14, 25)
  rect(x, y, 10, 5)
  fill(226, 158, 121)
  rect(x, y+25, 10, 30)
  
  pop();
}

function updateCigar() {
  for(var i = 0; i < num; i++) {
    cigars[i][1] = (cigars[i][1] + 1) % (height+10);  //speed of falling
    if(cigars[i][1] > height) {
      s = 2;
    }
  }
}

function renderCigars() {
  for(var i = 0; i < num; i++) {
    renderCigar(cigars[i][0], cigars[i][1]);
  }
}

function draw() {
	if(s == 0){
    starts()
  }else if(s == 1){
  	on()
  }else if(s==2){
  	ends()
  }	
}

function starts(){
		background(215, 137, 142)
		fill(255)
		textAlign(CENTER);
	text('WELCOME TO YITONG"S GAME', width / 2, height / 2)
		text('click to start :)', width / 2, height / 2 + 20);
		
}

function on(){
   background(248, 240, 223); 
  push();
    noStroke()
  //body
  fill(245, 221, 203)
  rect(25, 50, 355, 400, 20)
  rect(155,0,100,60)
  //lung
  fill (246, 200, 218)
  rect(70, 80, 120, 200, 60, 20, 20, 15);
  rect(220, 80, 120, 200, 20, 60, 15, 20); 
  pop();
  noFill();
  
 //arc
  stroke(255)
  bezier(130, 200, 140, 50, 200, 100, 200, 20)
  bezier(290, 200, 270, 50, 210, 100, 210, 20)
  
  updateCigar();
  renderCigars();
}


function mousePressed() {
  //console.log('mouse pressed');
      if(s==0){
  	s=1
  }else if(s==2){
  	s=0
  }
  
  for(var i = 0; i < num; i++) 
    if((cigars[i][0]-5<mouseX && mouseX<cigars[i][0]+15) && (cigars[i][1]-5<mouseY && mouseY<cigars[i][1]+60)) {
      cigars[i][0] = random(width);
      cigars[i][1] = -70;
      //cigra sound 
      if (mouseIsPressed) {
    mySound.play();
  }
    }

  }

function ends(){
    background(186, 64, 71)
	textAlign(CENTER);
    fill(255);
	text('GAME OVER', width / 2, height / 2)
	text('click to play again', width / 2, height / 2 + 40);
    
}
