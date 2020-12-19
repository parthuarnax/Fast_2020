function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  noFill();
  stroke(255, 102, 0);
  line(85, 20, 10, 10);
  line(90, 90, 15, 80);
  stroke(0, 0, 0);
  bezier(width/2 - 300, height/2, width/2-160, height/2-200, width/2+80, height/2-200, width/2 + 390, height/2);
  bezier(width/2 - 300, height/2+30, width/2-160, height/2-200+50, width/2+80, height/2-200+50, width/2 + 400, height/2+60);
  bezier(width/2 - 300, height/2+50, width/2-160, height/2+170, width/2+190, height/2+170, width/2 + 400, height/2+80);
}
