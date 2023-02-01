var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;
var welcomebg = new Image();
welcomebg.src = "images/welcomebg.jpg"; //开场背景图
var date = new Date; //获取系统时间
var pig = new Image(); //小猪佩奇左朝向
pig.src = "images/pig.png";
var flag;
var arcX, arcY;

function init() { //初始化
    flag = 0;
    context.drawImage(welcomebg, 0, 0, W, H);
    walkPig();
    drawTitle("小猪佩奇上学记", date);
}

function drawTitle(title, date) { //开场标题
    context.beginPath();
    context.font = '60px shangshoutongnian';
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillStyle = "#F5C1D8";
    context.fillText(title, 175, 40, );
    context.font = '20px shangshoutongnian';
    context.fillStyle = "#006699";
    context.fillText(date.getFullYear() + ' 年 ' + (date.getMonth() + 1) + ' 月 ' + date.getDate() + ' 日', 100, 110, ); //获取时间并绘制
    context.stroke();
}

function drawStartTips() { //开场点击佩奇的提示
    var tips = setInterval(function () {
        context.beginPath();
        context.font = "20px shangshoutongnian";
        var r, g, b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256); //随机颜色
        context.fillStyle = "rgba(" + r + "," + g + "," + b + ")";
        context.fillText("点击佩奇开始！", 585, 560);
        context.closePath();
        context.stroke();
        canvas.addEventListener("click", function __handler__(evt) {
            arcX = evt.clientX;
            arcY = evt.clientY;
            let rect = canvas.getBoundingClientRect();
            arcX -= rect.left;
            arcY -= rect.top;
            console.log(arcX, arcY); // (arcX, arcY) 就是鼠标在 canvas 单击时的坐标
            if (flag == 0 && arcX <= 650 && arcX >= 500 && arcY <= 550 && arcY >= 400) {
                clearInterval(tips);
                drawTransitionIn1();
                flag++;
                console.log(flag);
            }
        });
    }, 100)
}

function drawBackground() { //开始背景图
    context.drawImage(welcomebg, 0, 0, W, H);
    var date = new Date;
    drawTitle("小猪佩奇上学记", date);
}

function walkPig() {
    let count = 1;
    let walker = setInterval(function () {
        context.clearRect(0, 0, W, H);
        drawBackground();
        context.drawImage(pig, 900 - count, 400, 150, 150);
        count++;
        if (count == 400) {
            clearInterval(walker);
            let i = 0;
            let welSubtitle = new Array("新的一天开始啦", "又到了上学的日子", "让我们赶紧进去吧"); //开场的字幕
            let cnt = setInterval(function () {
                if (i < welSubtitle.length) {
                    drawBackground();
                    context.drawImage(pig, 501, 400, 150, 150);
                    context.beginPath();
                    context.font = '20px shangshoutongnian';
                    context.fillStyle = "white";
                    context.fillText(welSubtitle[i], W / 2, 560, );
                    context.stroke();
                } else {
                    clearInterval(cnt);
                    drawStartTips();
                }
                i++;
            }, 2000) //每条字幕显示两秒钟
        }
    }, 1)
}
init();

//当flag为0的时候是用来在开场动画的点击佩奇开始，当flag为1的时候是用来进行选座，当flag为2的时候是用来点击手机，当flag为3的时候是用来结束