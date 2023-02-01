function drawEndTips() {
    var tips = setInterval(function () {
        context.beginPath();
        context.font = "20px shangshoutongnian";
        var r, g, b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        context.fillStyle = "rgba(" + r + "," + g + "," + b + ")";
        context.fillText("点击佩奇结束！", 455, 525);
        context.closePath();
        context.stroke();
        canvas.addEventListener("click", function __handler__(evt) {
            arcX = evt.clientX;
            arcY = evt.clientY;
            let rect = canvas.getBoundingClientRect();
            arcX -= rect.left;
            arcY -= rect.top;
            console.log(arcX, arcY);
            if (flag == 3 && arcX <= 490 && arcX >= 400 && arcY <= 515 && arcY >= 395) {
                clearInterval(tips);
                drawTransitionIn9();
                flag++;
                console.log(flag);
            }
        });
    }, 100)
}

function walkPig1() {
    let count = 1;
    let walker = setInterval(function () {
        context.clearRect(0, 0, W, H);
        drawBackground();
        context.drawImage(runningPig, count - 100, 315 + (count - 100) * 0.2, 90, 120);
        count++;
        if (count == 500) {
            clearInterval(walker);
            let i = 0;
            let welSubtitle = new Array("美好的一天又结束啦", "终于可以回家休息了", "那我们下次再见吧");
            let cnt = setInterval(function () {
                if (i < welSubtitle.length) {
                    drawBackground();
                    context.drawImage(runningPig, count - 101, 315 + (count - 101) * 0.2, 90, 120);
                    context.beginPath();
                    context.font = '20px shangshoutongnian';
                    context.fillStyle = "white";
                    context.fillText(welSubtitle[i], W / 2, 560, );
                    context.stroke();
                } else {
                    clearInterval(cnt);
                    drawEndTips();
                }
                i++;
            }, 2000)
        }
    }, 1)
}

function drawTransitionIn9() {
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
            drawTransitionOut9();
        }
    }, 1)
}

function drawTransitionOut9() {
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        drawT();
        context.beginPath();
        context.fillStyle = "#FFFFFF";
        context.font = '40px shangshoutongnian';
        context.fillText("演职员表", 600, 40, );
        context.font = '30px shangshoutongnian';
        context.fillText("导演：蒋宇凡", 600, 120, );
        context.fillText("制片：陈文婧", 600, 165, );
        context.fillText("监制：李子怡", 600, 210, );
        context.fillText("领衔主演：佩奇", 600, 255, );
        context.fillText("特别主演：猪爸爸", 600, 300, )
        context.stroke();
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
            drawT();
            context.beginPath();
            context.fillStyle = "#FFFFFF";
            context.font = '40px shangshoutongnian';
            context.fillText("演职员表", 600, 40, );
            context.font = '30px shangshoutongnian';
            context.fillText("导演：蒋宇凡", 600, 120, );
            context.fillText("制片：陈文婧", 600, 165, );
            context.fillText("监制：李子怡", 600, 210, );
            context.fillText("领衔主演：佩奇", 600, 255, );
            context.fillText("特别主演：体育老师", 600, 300, )
            context.stroke();
            drawEnd();
            console.log("drawTransitionOut9");
        }
    }, 1)
}