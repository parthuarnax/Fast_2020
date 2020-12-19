let bezier_val = new Array();
let clickState = 1;
let input;
let button;

function setup() {
  createCanvas(1000, 1000);
  bezier_val[0] = height/2 - 60;
  bezier_val[1] = height/2 - 250;
  bezier_val[2] = height/2 - 200;
  bezier_val[3] = height/2 - 65;
  bezier_val[4] = width/2 - 250;
  bezier_val[5] = height/2 - 200;
  bezier_val[6] = width/2 + 140;
  bezier_val[7] = height/2 - 150;
  bezier_val[8] = height/2 + 70;
  bezier_val[9] = width/2 - 200;
  bezier_val[10] = height/2 + 170;
  bezier_val[11] = width/2 + 190;
  bezier_val[12] = height/2 + 170;
  bezier_val[13] = height/2 + 60;

  input = createInput();
  input.position(width/2 - 140, height*3/4 + 1.5);
  button = createButton("과제 제출");
  button.position(width/2 + 60, height*3/4);
  button.mousePressed(drawName());
}

function draw() {
  noFill();
  background(0);
  stroke(255);
  
  let clickState = 1;

  switch(clickState){
    case -1 :
      lerpChange();
      strokeWeight(8);
      bezier(width/2 - 380, bezier_val[0], width/2-200, bezier_val[1], width/2+80, bezier_val[2], width/2 + 365, bezier_val[3]);
      strokeWeight(10);
      bezier(width/2 - 400, height/2+30, bezier_val[4], bezier_val[5], bezier_val[6], bezier_val[7], width/2 + 400, height/2 + 20);
      bezier(width/2 - 400, bezier_val[8], bezier_val[9], bezier_val[10], bezier_val[11], bezier_val[12], width/2 + 400, bezier_val[13]);
      break;
    case 1 :
      lerpChange();
      strokeWeight(7);
      bezier(width/2 - 380, bezier_val[0], width/2-200, bezier_val[1], width/2+80, bezier_val[2], width/2 + 365, bezier_val[3]);
      strokeWeight(10);
      bezier(width/2 - 400, height/2+30, bezier_val[4], bezier_val[5], bezier_val[6], bezier_val[7], width/2 + 400, height/2 + 20);
      bezier(width/2 - 400, bezier_val[8], bezier_val[9], bezier_val[10], bezier_val[11], bezier_val[12], width/2 + 400, bezier_val[13]);

      break;
  }
}

let changeSpd = 0.07;

function lerpChange(){
  if(clickState == 1){
    bezier_val[0] = lerp(bezier_val[0], height/2 - 60, changeSpd);
    bezier_val[1] = lerp(bezier_val[1], height/2 - 250, changeSpd); 
    bezier_val[2] = lerp(bezier_val[2], height/2 - 200, changeSpd); 
    bezier_val[3] = lerp(bezier_val[3], height/2 - 65, changeSpd); 
    bezier_val[4] = lerp(bezier_val[4], width/2 - 250, changeSpd); 
    bezier_val[5] = lerp(bezier_val[5], height/2 - 200, changeSpd); 
    bezier_val[6] = lerp(bezier_val[6], width/2 + 140, changeSpd); 
    bezier_val[7] = lerp(bezier_val[7], height/2 - 150, changeSpd); 
    bezier_val[8] = lerp(bezier_val[8], height/2 + 60, changeSpd); 
    bezier_val[9] = lerp(bezier_val[9], width/2 - 200, changeSpd); 
    bezier_val[10] = lerp(bezier_val[10], height/2 + 170, changeSpd); 
    bezier_val[11] = lerp(bezier_val[11], width/2 + 190, changeSpd); 
    bezier_val[12] = lerp(bezier_val[12], height/2 + 170, changeSpd); 
    bezier_val[13] = lerp(bezier_val[13], height/2 + 60, changeSpd); 
  } else if(clickState == -1) {
    bezier_val[0] = lerp(bezier_val[0], height/2 - 10, changeSpd);
    bezier_val[1] = lerp(bezier_val[1], height/2 + 30, changeSpd); 
    bezier_val[2] = lerp(bezier_val[2], height/2 + 50, changeSpd); 
    bezier_val[3] = lerp(bezier_val[3], height/2 - 15, changeSpd); 
    bezier_val[4] = lerp(bezier_val[4], width/2 - 210, changeSpd); 
    bezier_val[5] = lerp(bezier_val[5], height/2 + 100, changeSpd); 
    bezier_val[6] = lerp(bezier_val[6], width/2 + 330, changeSpd); 
    bezier_val[7] = lerp(bezier_val[7], height/2 + 70, changeSpd); 
    bezier_val[8] = lerp(bezier_val[8], height/2 + 30, changeSpd); 
    bezier_val[9] = lerp(bezier_val[9], width/2 - 210, changeSpd); 
    bezier_val[10] = lerp(bezier_val[10], height/2 + 100, changeSpd); 
    bezier_val[11] = lerp(bezier_val[11], width/2 + 330, changeSpd); 
    bezier_val[12] = lerp(bezier_val[12], height/2 + 60, changeSpd); 
    bezier_val[13] = lerp(bezier_val[13], height/2 + 20, changeSpd); 
  }
}

function drawName(){
  background(100);
  textSize(30);
  let assignment = input.value;

}

function mouseReleased(){
  clickState *= -1;
}

