nose_x=0;
nose_y=0;

function preload(){
    rednose_fg=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas=createCanvas(450,400);
    canvas.position(400,150);
    video=createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("Nose X="+nose_x);
        console.log("Nose Y="+nose_y);
    }
}

function draw(){
    image(video,0,0,450,400);
    image(rednose_fg,nose_x-30,nose_y-20,65,50);
}

function take_snapshot(){
    save('myClownNoseFilter.png');
}