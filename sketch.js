var man,man_running;

var backgroundImg;

var groundImage;


function preload() {

man_running = loadAnimation("man1.jpg", "man2.jpg","man3.jpg","man4.jpg","man5.jpg","man6.jpg"); 
 
groundImage = loadImage("ground.png");

backgroundImg = loadImage("backgroundImg.png")


}











function setup() {
    createCanvas(windowWidth, windowHeight);

    man = createSprite(200,200,2,5);
    man.addAnimation("running", man_running);
    man.scale = 0.5
    man_running.scale = 0.5


}

function draw() {
    background(180)


    drawSprites();
 
}