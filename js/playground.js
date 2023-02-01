var runningPig = new Image();
runningPig.src = "images/playingpig.png";
var music = document.getElementById("music");
class Player {
    constructor() {
        this.x = W / 3;
        this.y = H / 2 - 30;
        this.draw = function () {
            context.drawImage(runningPig, this.x, this.y, 45, 60);
        };
    }
}
var footballfield = new Image(); //足球场
footballfield.src = "images/footballfield.jpg";
var ball = new Image(); //球
ball.src = "images/ball.png";
var ballPig = new Image();
ballPig.src = "images/holdingball.png";
var playground = new Image();
playground.src = "images/playground.jpg";
var teacher = new Image();
teacher.src = "images/teacher.png";
var btn3 = document.getElementById("btn3");
var player = new Player();
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

function drawTransitionIn3() {
    let r = 0;
    transition = setInterval(function () {
        context.beginPath();
        context.fillStyle = "black";
        context.strokeStyle = "black";
        context.arc(W / 2, H / 2, r, 0, Math.PI * 2, false);
        context.fill();
        context.stroke();
        r += 10;
        if (r > 700) {
            clearInterval(transition);
            drawTransitionOut3();
        }
    }, 1)
}

function drawTransitionOut3() {
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(playground, 0, 0, W, H);
        context.drawImage(teacher, 100, 325, 200, 200);
        context.beginPath();
        context.fillStyle = "black";
        context.strokeStyle = "black";
        if (r >= 0)
            context.arc(W / 2, H / 2, r, 0, Math.PI * 2, false);
        context.fill();
        context.stroke();
        r -= 10;
        if (r < 0) {
            clearInterval(transition);
            context.clearRect(0, 0, W, H);
            context.drawImage(playground, 0, 0, W, H);
            context.drawImage(teacher, 100, 325, 200, 200);
            holdingBallPig();
            console.log("drawTransitionOut3");
        }
    }, 1)
}

function holdingBallPig() {
    let count = 1;
    let walker = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(playground, 0, 0, W, H);
        context.drawImage(teacher, 100, 325, 200, 200);
        context.drawImage(ballPig, 900 - count, 400, 150, 150);
        count++;
        if (count == 400) {
            clearInterval(walker);
            let i = 0;
            let welSubtitle = new Array("昨天体育老师给我们布置了一个任务", "是在一分钟之内将球踢进对面的框内", "让我们试试看吧");
            let cnt = setInterval(function () {
                if (i < welSubtitle.length) {
                    context.drawImage(playground, 0, 0, W, H);
                    context.drawImage(teacher, 100, 325, 200, 200);
                    context.drawImage(ballPig, 501, 400, 150, 150);
                    context.beginPath();
                    context.font = '20px shangshoutongnian';
                    context.fillStyle = "black";
                    context.fillText(welSubtitle[i], W / 2, 560, );
                    context.stroke();
                } else {
                    clearInterval(cnt);
                    drawTransitionIn4();
                }
                i++;
            }, 2000)
        }
    }, 1)
}

function drawTransitionIn4() {
    let r = 0;
    transition = setInterval(function () {
        context.beginPath();
        context.fillStyle = "black";
        context.strokeStyle = "black";
        context.arc(W / 2, H / 2, r, 0, Math.PI * 2, false);
        context.fill();
        context.stroke();
        r += 10;
        if (r > 700) {
            clearInterval(transition);
            drawTransitionOut4();
        }
    }, 1)
}

function drawTransitionOut4() {
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(footballfield, 0, 0, W, H);
        drawBasket();
        context.beginPath();
        context.fillStyle = "black";
        context.strokeStyle = "black";
        if (r >= 0)
            context.arc(W / 2, H / 2, r, 0, Math.PI * 2, false);
        context.fill();
        context.stroke();
        r -= 10;
        if (r < 0) {
            clearInterval(transition);
            context.clearRect(0, 0, W, H);
            btn3.style.display = "block";
            context.drawImage(footballfield, 0, 0, W, H);
            player.draw();
            drawBasket();
            context.beginPath();
            context.font = "15px shangshoutongnian";
            context.fillStyle = "black";
            context.fillText("通过wasd控制人物移动", W / 3 + 22.5, H / 2 - 50, );
            context.fillText("点击按钮开始", W / 2, H / 3 * 2 - 20, );
            context.stroke();
            drawBall(W / 2, H / 2);
            context.font = "25px shangshoutongnian";
            context.fillText("剩余时间：60 秒", 130, 50, );
            console.log("drawTransitionOut4");
        }
    }, 1)
}

function drawTime(time) { //提示文字显示还有几秒钟
    context.font = "25px shangshoutongnian";
    context.fillText("剩余时间：" + parseInt(time) + " 秒", 130, 50, );
}

function drawLine(x1, y1, x2, y2) { //足球框网线
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = 'white';
    context.closePath();
    context.stroke();
}

function drawBasket() { //画足球框
    for (let i = 206; i <= 396; i += 19) {
        drawLine(0, i, 62, i);
    }
    for (let i = 206; i <= 396; i += 19) {
        drawLine(800, i, 737, i);
    }
    for (let i = 20; i < 60; i += 20) {
        drawLine(i, 396, i, 206);
    }
    for (let i = 20; i < 60; i += 20) {
        drawLine(800 - i, 396, 800 - i, 206);
    }
}
var keycode = null;
var is_keydown = false;


document.addEventListener('keydown', function (e) { //事件监听获取键盘按键
    is_keydown = true;
    e = e || window.event;
    keycode = e.keyCode || e.which || e.charCode;
});

document.addEventListener('keyup', function (e) {
    is_keydown = false;
});

function drawBall(x, y) { //画球
    context.drawImage(ball, x - 10, y - 10, 20, 20);
}

function playBall() {
    let pd = 0; //当pd为0说明没有进球，失败了，如果为1说明在规定时间内进球。
    context.strokeRect(0, 0, canvas.width, canvas.height);
    player.draw();
    var xSpeed = 1,
        ySpeed = 1;
    var x = W / 2,
        r = 10,
        y = H / 2;
    let dataObj1 = new Date();
    let time1 = dataObj1.getSeconds();
    let flag = 0;
    var runBall = setInterval(function () {
        context.clearRect(0, 0, W, H);
        if (is_keydown) {
            if (keycode == 87 && player.y >= 0) { //w上键
                player.y -= 5;
            }
            if (keycode == 68 && player.x + 45 <= 800) { //d右键
                player.x += 5;
            }
            if (keycode == 83 && player.y + 60 <= 600) { //s下键
                player.y += 5;
            }
            if (keycode == 65 && player.x >= 0) { //a左键
                player.x -= 5;
            }
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeRect(0, 0, canvas.width, canvas.height);
        context.drawImage(footballfield, 0, 0, W, H);
        drawBasket();
        let dataObj2 = new Date();
        let time2 = dataObj2.getSeconds();
        if (time2 < time1) {
            drawTime(time1 - time2);
        } else {
            drawTime(60 - (time2 - time1));
        }
        if (parseInt(time1 - time2) == 1) {
            flag = 1;
        }
        if (flag == 1 && parseInt(time1 - time2) == 0) {
            clearInterval(runBall);
            music.pause();
            result(pd);
        }
        console.log(parseInt(time1 - time2), parseInt(60 - (time2 - time1)));
        player.draw();
        //水平速度更改
        if (x - r <= 0 || x + r >= W || x <= player.x && x + r >= player.x && y + r <= player.y + 60 && y - r >= player.y || x >= player.x + 45 && x - r <= player.x + 45 && y + r <= player.y + 60 && y - r >= player.y) {
            xSpeed = -xSpeed;
        }
        //垂直速度更改
        if (x >= 737 && (y <= 206 && y + r >= 206 || y >= 396 && y - r <= 396) || x <= 62 && (y <= 206 && y + r >= 206 || y >= 396 && y - r <= 396) || y - r <= 0 || y + r >= H || y <= player.y && y + r >= player.y && x + r <= player.x + 45 && x - r >= player.x || y >= player.y + 60 && y - r <= player.y + 60 && x + r <= player.x + 45 && x - r >= player.x) {
            ySpeed = -ySpeed;
        }
        x += xSpeed;
        y += ySpeed;
        drawBall(x, y);
        //以下判断在规定时间内成功进球
        if (x > 737 && y >= 206 && y <= 376) {
            clearInterval(runBall);
            music.pause();
            pd = 1;
            console.log("进球成功");
            result(pd);
        }
    }, 1)

}
btn3.onclick = function () {
    playBall();
    btn3.style.display = "none";
    music.play();
}

function result(pd) {
    context.beginPath();
    context.font = "40px shangshoutongnian";
    context.fillStyle = "black";
    if (pd == 1) { //进球成功
        context.fillText("太棒啦，我们成功完成了任务！", W / 2, H / 2, );
    } else { //进球失败
        context.fillText("任务失败了，要不要再试一次呢？", W / 2, H / 2, );
    }
    context.stroke();
    btn4.style.display = "block";
    btn5.style.display = "block";
}

btn4.onclick = function () {
    playBall();
    music.play();
    btn4.style.display = "none";
    btn5.style.display = "none";
}
btn5.onclick = function () {
    btn4.style.display = "none";
    btn5.style.display = "none";
    drawTransitionIn5();
}