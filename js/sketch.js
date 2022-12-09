let img;
let cnv;
function preload() {
    img = loadImage('Sunset.jpg')
}

function setup() {
    cnv = createCanvas(img.width,img.height);
    // let newCanvasX = (windowWidth - img.width)/2
    // let newCanvasY = (windowHeight - img.height)/2
    // cnv.position(newCanvasX, newCanvasY)
  
    // noLoop();


}


function draw() {
    background (220);
    image (img, 0, 0);
   
}

