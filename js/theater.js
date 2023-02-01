var theater = new Image();
theater.src = "images/theater.jpg";
var stage = new Image();
stage.src = "images/stage.jpg";
var phone = new Image();
phone.src = "images/phone.png";
var camera = new Image();
camera.src = "images/camera.png";
var blurredstage = new Image();
blurredstage.src = "images/blurredstage.jpg";
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
phone.onclick = function () {
    drawTransitionIn7();
}
var show = document.getElementById("show");
show.currentTime = 1;

function drawTransitionIn5() { //过渡动画In进入
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
            drawTransitionOut5();
        }
    }, 1)
}

function drawTransitionOut5() { //过渡动画Out出来
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(theater, 0, 0, W, H);
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
            context.drawImage(theater, 0, 0, W, H);
            context.beginPath();
            console.log("drawTransitionOut5");
            partyPig1();
        }
    }, 1)
}

function partyPig1() {
    let count = 1;
    let walker = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(theater, 0, 0, W, H);
        // context.drawImage(teacher, 100, 325, 200, 200);
        context.drawImage(pig, 900 - count, 470, 100, 100);
        // context.drawImage(phone, 880 - count, 450, 30, 30);
        count++;
        if (count == 400) {
            clearInterval(walker);
            let i = 0;
            let welSubtitle = new Array("听说今天在剧场有演出", "让我们进去看看吧！"); //开场的字幕
            let cnt = setInterval(function () {
                if (i < welSubtitle.length) {
                    context.drawImage(theater, 0, 0, W, H);
                    // context.drawImage(teacher, 100, 325, 200, 200);
                    context.drawImage(pig, 501, 470, 100, 100);
                    // context.drawImage(phone, 880 - count, 450, 30, 30);
                    context.beginPath();
                    context.font = '20px shangshoutongnian';
                    context.fillStyle = "white";
                    context.fillText(welSubtitle[i], W / 2, 560, );
                    context.stroke();
                } else {
                    clearInterval(cnt);
                    drawTransitionIn6();
                }
                i++;
            }, 2000) //每条字幕显示两秒钟
        }
    }, 1)
}

function partyPig2() {
    let count = 1;
    let walker = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(stage, 0, 0, W, H);
        // context.drawImage(teacher, 100, 325, 200, 200);
        context.drawImage(pig, 900 - count, 470, 100, 100);
        context.drawImage(phone, 900 - count, 510, 17, 32);
        count++;
        if (count == 400) {
            clearInterval(walker);
            let i = 0;
            let welSubtitle = new Array("真精彩的演出啊", "让我们用手机记录下来吧！"); //开场的字幕
            let cnt = setInterval(function () {
                if (i < welSubtitle.length) {
                    context.drawImage(stage, 0, 0, W, H);
                    // context.drawImage(teacher, 100, 325, 200, 200);
                    context.drawImage(pig, 501, 470, 100, 100);
                    context.drawImage(phone, 501, 510, 17, 32);
                    context.beginPath();
                    context.font = '20px shangshoutongnian';
                    context.fillStyle = "white";
                    context.fillText(welSubtitle[i], W / 2, 560, );
                    context.stroke();
                } else {
                    clearInterval(cnt);
                    // drawTransitionIn6();
                    canvas.addEventListener("click", function __handler__(evt) {
                        arcX = evt.clientX;
                        arcY = evt.clientY;
                        let rect = canvas.getBoundingClientRect();
                        arcX -= rect.left;
                        arcY -= rect.top;
                        console.log(arcX, arcY); // (arcX, arcY) 就是鼠标在 canvas 单击时的坐标
                        if (flag == 2 && arcX <= 518 && arcX >= 500 && arcY <= 542 && arcY >= 510) {
                            // clearInterval(tips);
                            drawTransitionIn7();
                            flag++;
                            console.log(flag);
                        }
                    });
                }
                i++;
            }, 2000) //每条字幕显示两秒钟
        }
    }, 1)
}

function drawTransitionIn6() { //过渡动画In进入
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
            drawTransitionOut6();
        }
    }, 1)
}

function drawTransitionOut6() { //过渡动画Out出来
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(stage, 0, 0, W, H);
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
            context.drawImage(stage, 0, 0, W, H);
            context.beginPath();
            console.log("drawTransitionOut6");
            partyPig2();
        }
    }, 1)
}

function drawTransitionIn7() { //过渡动画In进入
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
            drawTransitionOut7();
        }
    }, 1)
}

function drawTransitionOut7() { //过渡动画Out出来
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(blurredstage, 0, 0, W, H);
        context.drawImage(camera, 0, 75, 816, 440);
        context.drawImage(show, 158, 134, 411, 307);
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
            context.drawImage(blurredstage, 0, 0, W, H);
            context.drawImage(camera, 0, 75, 816, 440);
            context.drawImage(show, 158, 134, 411, 307);
            console.log("drawTransitionOut7");
            btn6.style.display = "block";
        }
    }, 1)
}
let t = 0; //0表示视频没有播放，1表示视频正在播放

btn6.onclick = function () {
    if (t == 0) { //未播放
        btn6.style.backgroundColor = "rgb(182, 19, 19)";
        // console.log(btn6.style.backgroundColor);
        show.play();
        takeVideo();
        // console.log(t);
        t = 1;
        btn7.style.display = "none";
    } else if (t == 1) { //正在播放
        show.pause();
        btn6.style.backgroundColor = "white";
        // console.log(t);
        t = 0;
        btn7.style.display = "block";
    }
}

function takeVideo() {
    context.drawImage(show, 158, 134, 411, 307);
    interval = requestAnimationFrame(takeVideo);
}

btn7.onclick = function () {
    cancelAnimationFrame(interval);
    drawTransitionIn8();
}

function drawTransitionIn8() { //过渡动画In进入
    let r = 0;
    btn6.style.display = "none";
    btn7.style.display = "none";
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
            drawTransitionOut8();
        }
    }, 1)
}

function drawTransitionOut8() { //过渡动画Out出来
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        // context.drawImage(blurredstage, 0, 0, W, H);
        // context.drawImage(camera, 0, 75, 816, 440);
        context.drawImage(welcomebg, 0, 0, W, H);
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
            context.drawImage(welcomebg, 0, 0, W, H);
            console.log("drawTransitionOut8");
            walkPig1();
        }
    }, 1)
}
