carX = 10;
carY = 10;
car1X = 10;
car1Y = 80;
car_img = "racecar.png";
car1_img = "racecar1.jpg";
background_img = "race-track.jpg";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carWidth = 100;
carHeight = 50;
car1Width = 100;
car1Height = 50;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car_imgTag = new Image();
    car_imgTag.onload = uploadCar;
    car_imgTag.src = car_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag, carX, carY, carWidth, carHeight);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1X, car1Y, car1Width, car1Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
    }

    if(keyPressed == '40') {
        down();
    }

    if(keyPressed == '37') {
        left();
    }

    if(keyPressed == '39') {
        right();
    }

    if(keyPressed == '87') {
        up1();
    }

    if(keyPressed == '83') {
        down1();
    }

    if(keyPressed == '65') {
        left1();
    }

    if(keyPressed == '68') {
        right1();
    }
}