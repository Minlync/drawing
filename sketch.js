var points; // points is an array of point

function preload() {
  // points = loadJSON("drawings.json", function(){
  // println("loading json successful");
  // }, function(){
  // println("loading json failed");
  // }); 
}

function setup() { 
  createCanvas(windowWidth, 500);
  stroke(255, 255, 255);
  strokeWeight(1);
  noFill();
  
  // declare the points as an array
  points = [];
} 

// redraw the drawing
function draw() { 
  // clear the background
  background(0, 0, 0);
  
  // draw all the points
  beginShape();
  for (var i = 0; i < points.length; i++) {
    var one_point = points[i];
    // if point is null, end the current shape and start a new one
    if (one_point === null) {
      endShape();
      beginShape();
    } else {
      curveVertex(one_point.x, one_point.y);
    }
  }
  endShape();
}

// save the drawing 
function mouseDragged() {
  // create an object as empty point
  var one_point = {};
  one_point.x = mouseX;
  one_point.y = mouseY;
  
  // add the point to the array
  points.push(one_point);
}

function mouseReleased() {
  // Add null to stop the line when the mouse is released
  points.push(null);
}


