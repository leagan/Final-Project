var B1;
var B2;
var B3;
var B4;
var B5;
var Sz = 200;
var rSlider;
var gSlider;
var bSlider;
var analyzer;
var disney;
var danger;
var MyCircle = [];
var NumOfCirc = 12;
//var confet = [];
//var confetti;

function preload() {
//	instructionsScreenshot = loadImage("instructionsScreenshot.jpg"); 
//	confet = loadImage('confetti.jpg');
	MagicBox = loadImage('81vZaXuCQ-L__SX385_.jpg');
	disney = loadSound('Walt_Disney_Theme.mp3');
	danger = loadSound('danger.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	
	
//	B1 = createButton("Press Me First");  
	//B1.position(50,20);
	//B1.size(90,50);
	//how do I get an image to appear when you press the button?
	//until I figure out how, I'll just print the instructions:
	print ('hey there ---- I see you have found this magic box. Explore the buttons, sliders, and clicking around the page to see what the magic box can do!');

	analyzer = new p5.Amplitude();
	analyzer.setInput(disney);
	
	B2 = createButton("Bigger"); 
	B2.position(50,80);
	B2.size(90,50);
	B2.mousePressed(GrowFlag);
	
	B3 = createButton("Smaller"); 
	B3.position(50,140);
	B3.size(90,50);
	B3.mousePressed(ShrinkFlag);
	
	B4 = createButton('Disney');
	B4.position(400, 20);
	B4.size(90,50);
  B4.mousePressed(DisneyMusic);
	
	B5 = createButton('Danger');
	B5.position(400, 80);
	B5.size(90,50);
  B5.mousePressed(DangerMusic);
	
	rSlider = createSlider(0, 360, 200);
  rSlider.position(50, 250);
  rSlider.size(100,10);
  
  gSlider = createSlider(0, 100, 100);
  gSlider.position(50, 280);
  gSlider.size(90,10);
  
  bSlider = createSlider(0, 100, 70);
  bSlider.position(50, 310);
  bSlider.size(100,10);
 
}

//function mousePressed() {
	//var b = new confetti(mouseX, mouseY); 
//	confetti.push(b);
//}

function draw() {
	for (var i = 0; i<NumOfCirc; i++) {
		MyCircle[i] = new circleObject (random(width), random(height), 30 + random(30));
		MyCircle[i].display();
		MyCircle[i].X = (MyCircle.X+1)%width;
		image(MagicBox,200,200,Sz,Sz);
		filter(POSTERIZE,3); 
			
		}	
	
}
	
//		var rms = analyzer.getLevel();
//	for (var j = MagicBox.length - 1; j >= 0; j--) {
		//MagicBox[j].update();
		//MagicBox[j].display();
		
//}

function circleObject (X,Y,Size) { 
	this.X = X; 
	this.Y = Y; 
	this.Size = Size; 
	this.fill = 1;
	this.StrokCol = color(rSlider.value(),gSlider.value(),bSlider.value(), 100); 
	this.Weight = 4;
	
	
	this.display = function () {
		noFill();
		stroke(this.StrokCol);
		strokeWeight(this.Weight);
		ellipse(this.X, this.Y, this.Size, this.Size);
	}
}

function GrowFlag() {
		Sz=Sz*2;
		GrowFlag =0;
}

//function confet(x,y) {
	//this.x = x;
	//this.y = y;
	
//	this.display = function() {
	//	image(confet,this.x, this.y, 10+rms*200, 10+rms*200);
	//}
	
	this.update = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}
	

function ShrinkFlag() {
		Sz=Sz/2;
		ShrinkFlag =0;
	
}

function DangerMusic() {
  if ( danger.isPlaying() ) 
    danger.pause();
   else 
    danger.play();
}

function DisneyMusic() {
  if ( disney.isPlaying() ) 
    disney.pause();
   else 
    disney.play();
}
