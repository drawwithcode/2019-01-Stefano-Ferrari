var i=0;

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}

function draw() {

  push();

  translate(width/2, height/2);

  if(frameCount<180){

    line (cos(0)*(width+height)/12,
         0,
         cos(frameCount*2)*(width+height)/12,
         sin(frameCount*2)*(width+height)/12);

  }else if(frameCount>=180 && frameCount<(180*6)){
    if((frameCount%180)===0){
      i++;
    }

    rotate(i*60);

    stroke( lerpColor(color(0),
            color("violet"),
            frameCount/(180*6))
          );

    line (cos(0)*(width+height)/12,
         0,
         cos(frameCount*2)*(width+height)/12,
         sin(frameCount*2)*(width+height)/12);

  }else if(frameCount>=(180*6)&& frameCount<(180*12)){

    stroke( lerpColor(color("violet"),
            color(255, 105, 30),
            (frameCount-(180*6))/(180*6))
          );

    line (cos(frameCount)*(width+height)/12,
         sin(frameCount)*(width+height)/12,
         cos(frameCount*7)*(width+height)/12,
         sin(frameCount*7)*(width+height)/12);

    if(frameCount<(180*8)){
     background(lerpColor(color(255,255,255,1), color(30, 10, 120, 5), frameCount/(180*8)));
    }


  }else if (frameCount>=(180*12)){
    pop();

    stroke(color("cyan"));

    line ((width/2)+(windowWidth/20)*(frameCount-(180*12)),
          windowHeight/1.5,
         (width/2)+(windowWidth/10)*(frameCount-(180*12)),
          windowHeight);

    line ((width/2)-(windowWidth/20)*(frameCount-(180*12)),
          windowHeight/1.5,
         (width/2)-(windowWidth/10)*(frameCount-(180*12)),
          windowHeight);

    line (0,
          windowHeight/1.5+((windowHeight+(windowHeight/100)*(frameCount-(180*12)))/20)*(frameCount-(180*12)),
          windowWidth,
          windowHeight/1.5+((windowHeight+(windowHeight/100)*(frameCount-(180*12)))/20)*(frameCount-(180*12)));
  }


}
