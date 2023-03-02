
var cnv;


function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
let posX = 20;
let camvio= 0;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}
function draw(){
	//background(255, mouseY, 200);
	quad(mouseX, mouseY,mouseY, mouseX, mouseX, mouseY, mouseX, mouseY);
	//quad(mouseY, mouseX, mouseX, mouseY, mouseX, mouseY, mouseY, mouseX);



}