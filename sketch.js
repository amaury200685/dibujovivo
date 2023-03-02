
let posX = 20;
let camvio= 0;
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(255, camvio, 200);
}
function draw(){
	//background(255, camvio, 200);
	quad(posX, 31, 86, 20, 69, camvio, 30, camvio);
describe('irregular white quadrilateral with black outline');
posX = posX + 1;

if (posX == windowWidth ) {
	camvio = camvio + 50;
	posX = 20;
}
}