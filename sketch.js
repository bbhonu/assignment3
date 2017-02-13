
// int PEN_W = 2;  
// int ERS_W = 8;



function setup() {
	frameRate(120);


		var myCanvas = createCanvas(500,400);
	myCanvas.parent('p5-sketch');
		background(200);

		var button=createButton("reset");

		button.mousePressed(resetSketch);
		button.parent('button');



}


function draw() {

			var paintColor=color(0);




			if (keyIsDown(OPTION)){
    		paintColor=(200);
    		}





	
	if (mouseIsPressed){
		stroke(paintColor);
		strokeWeight(8);
		fill(paintColor);
		line(pmouseX, pmouseY, mouseX, mouseY);







	}



  
}



function resetSketch () {

		background(200);



}