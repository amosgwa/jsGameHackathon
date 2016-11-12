var canvasId = "gameCanvas";
var CANVAS = document.getElementById(canvasId);
var CURR_DEG = 0;

console.log(CANVAS)

var canvasWidth = parseInt(CANVAS.width);
var canvasHeight = parseInt(CANVAS.height);

function drawBase() {
  var baseRadius = canvasWidth*0.10; //10% of the canvas width
  var startAngle = Math.PI;
  var endAngle = 0;

  if (CANVAS.getContext){
    var ctx = CANVAS.getContext('2d');

    ctx.beginPath();
    ctx.arc(getMiddleX(), canvasHeight, baseRadius, startAngle, endAngle);
    ctx.fill();
  }
}

function drawGun(key){
  var gunStroke = 10;
  var gunHeight = canvasHeight*0.15;

  if(key === 'left'){

    if(CURR_DEG - 1 < -90){
      console.log("leftmost");
    } else {
      CURR_DEG -= 1;
    }
  }

  if(key === 'right'){
    if(CURR_DEG + 1 > 90){
      console.log("rightmost");
    } else {
      CURR_DEG += 1;
    }
  }

  var rotationPI = CURR_DEG * Math.PI/180;
  console.log(rotationPI);

  if (CANVAS.getContext){
    var ctx = CANVAS.getContext('2d');

    ctx.beginPath();
    ctx.translate(getMiddleX(), canvasHeight);
    console.log("DRAWING ")
    ctx.rotate(rotationPI);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -gunHeight);
    ctx.lineWidth = gunStroke;
    ctx.stroke();
  }
}

function updateGun(key){

}

// Add listeners
function listenCanvas(){
  console.log("listeningNow");
  CANVAS.addEventListener("keydown", keyDown, false);
}

function keyDown(e){
  // Pressed space.
  console.log("keypressed");
  if(e.keyCode === 32){
    //Shoot blocks from the gun.
    showKey('space');
    console.log('space');
  }
  if(e.keyCode === 37){
    showKey('left');
    drawGun('left');
    console.log("Left");
  }
  if(e.keyCode === 39){
    showKey('right');
    drawGun('right');
    console.log('right');
  }
}

// Utilities
function getMiddleX(){
  return canvasWidth/2;
}

function showKey(key){
  if($('#keys li').length > 10){
    //Delete the first child.
    $('#keys').find(':first-child').remove();
  }
  $('#keys').append('<li>'+key+'</li>')
}


