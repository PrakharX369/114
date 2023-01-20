noseX =0;
noseY = 0;

function preload()
{
    hehe_boy = loadImage('https://i.postimg.cc/J0SWBsWL/m.png')
}

function setup()
{
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("posenet is intialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-26;
        console.log("nose_x = "+noseX);
        noseY = results[0].pose.nose.y;
        console.log("nose_y = "+noseY);
    }
}


function draw()
{
    image(video,0,0,350,350);
    image(hehe_boy,noseX,noseY,50,30)
}

function take_snapshot()
{
    save("hehee.png");
}