status= "";
inputval= "";

function setup() {
    canvas= createCanvas(370, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function starty() {
    objdect= ml5.objectDetector("cocossd", modlod);
    document.getElementById("stat").innerHTML= "Status- Detecting Object";
    inputval= document.getElementById("yeet");
}

function modlod() {
    console.log("mod loded!");
    status= true;
}

function draw() {
    image(video, 0, 0, 370, 300);
}