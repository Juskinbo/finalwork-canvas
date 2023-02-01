//题目与答案
var mathQuestions = new Array("1 + 1 = ?", "当x -> 0时，tan x -sin x 与x^n 为同阶无穷小量，则n = ?", "已知y = cos x，则y^(8) = ?", "若抛物线y = ax^2与y = ln x相切，则a = ?");
var mathAnswers = new Array("2", "3", "cos x", "1/(2e)");
var chineseQuestions = new Array("与杨万里、尤袤、范成大合称中兴四大诗人的是？", "程颢是哪个朝代的人？", "《岳阳楼记》中能体现岳阳楼长联上“范希文两字关情”的句子是？。（两句）", "我国第一部白话长篇小说是？");
var chineseAnswers = new Array("陆游", "北宋", "先天下之忧而忧，后天下之乐而乐", "水浒传");
var englishQuestions = new Array("____（旅游业） is a big business for small countries like Singapore.", "We measured the ____（长度） and width of the living room.", "I cautiously ____（走近） the house only to find that nobody was there.", "It was ____（体贴的） of you not to play the piano while I was asleep.");
var englishAnswers = new Array("Tourism", "length", "approached", "considerate");
var btn1 = document.getElementById("btn1"); //检查
var btn2 = document.getElementById("btn2"); //下一题
var ans = document.getElementById("ans"); //输入框
var paper = new Image();
paper.src = "images/paper.jpg";
var p = 0; //防止字幕没放完点击按钮出错
function drawTransitionOut1() { //过渡动画Out出来
    var r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        drawClassroom();
        context.beginPath();
        context.fillStyle = "black";
        context.strokeStyle = "black";
        context.arc(W / 2, H / 2, r, 0, Math.PI * 2, false);
        context.fill();
        context.stroke();
        r -= 10;
        if (r < 0) {
            clearInterval(transition);
            drawLineArrow(550, 420);
            drawLineArrow(180, 420);
            drawLineArrow(460, 370);
            context.drawImage(pig, 260, 380, 100, 100);
            context.beginPath();
            context.font = '20px shangshoutongnian';
            context.fillStyle = "white";
            context.fillText("让我们选择一个座位吧", W / 2, 560, );
            context.stroke();
            canvas.addEventListener("click", function __handler__(evt) {
                arcX = evt.clientX;
                arcY = evt.clientY;
                let rect = canvas.getBoundingClientRect();
                arcX -= rect.left;
                arcY -= rect.top;
                console.log(arcX, arcY);
                if (flag == 1) {
                    if (arcX >= 540 && arcX <= 580 && arcY >= 420 && arcY <= 490) {
                        //数学
                        let n = 0;
                        let walk = setInterval(function () {
                            context.clearRect(0, 0, W, H);
                            drawClassroom();
                            context.drawImage(pig, 260 + n, 380 + 0.2 * n, 100 + 0.1 * n, 100 + 0.1 * n);
                            n++;
                            if (260 + n >= 490) {
                                clearInterval(walk);
                                drawTransitionIn2(mathQuestions, mathAnswers);
                            }
                        }, 1)
                        flag++;
                    }
                    if (arcX >= 170 && arcX <= 210 && arcY >= 420 && arcY <= 490) {
                        //语文
                        let n = 0;
                        let walk = setInterval(function () {
                            context.clearRect(0, 0, W, H);
                            drawClassroom();
                            context.drawImage(pig, 260 - 0.5 * n, 380 + 0.08 * n, 100 + 0.1 * n, 100 + 0.1 * n);
                            n++;
                            if (260 - 0.5 * n <= 110) {
                                clearInterval(walk);
                                drawTransitionIn2(chineseQuestions, chineseAnswers);
                            }
                        }, 1)
                        flag++;
                    }
                    if (arcX >= 450 && arcX <= 490 && arcY >= 370 && arcY <= 440) {
                        //英语
                        let n = 0;
                        let walk = setInterval(function () {
                            context.clearRect(0, 0, W, H);
                            drawClassroom();
                            context.drawImage(pig, 260 + 0.5 * n, 380 - 0.05 * n, 100 + 0.05 * n, 100 + 0.05 * n);
                            n++;
                            if (260 + 0.5 * n >= 430) {
                                clearInterval(walk);
                                drawTransitionIn2(englishQuestions, englishAnswers);
                            }
                        }, 1)
                        flag++;
                    }
                }
                console.log(arcX, arcY);
            });
        }
    }, 1)
}

function drawTransitionIn1() { //过渡动画In进入
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
            drawTransitionOut1();
        }
    }, 1)
}

function drawClassroom() {
    var classroom = new Image();
    classroom.src = "images/classroom.jpg";
    context.drawImage(classroom, 0, 0, W, H);
}

function drawLineArrow(x, y) { //画箭头
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + 40);
    context.lineTo(x - 10, y + 40);
    context.lineTo(x + 10, y + 70);
    context.lineTo(x + 30, y + 40);
    context.lineTo(x + 20, y + 40);
    context.lineTo(x + 20, y);
    context.lineTo(x, y);
    context.closePath();
    context.strokeStyle = "#FB8666";
    context.fillStyle = "rgba(255,197,179,0.5)";
    context.fill();
    context.stroke();
}

function drawTransitionIn2(questions, answers) {
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
            drawTransitionOut2(questions, answers);
        }
    }, 1)
}

function drawTransitionOut2(questions, answers) {
    let r = 600;
    transition = setInterval(function () {
        context.clearRect(0, 0, W, H);
        context.drawImage(paper, 0, 0, W, H);
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
            context.drawImage(paper, 0, 0, W, H);
            let subtitleArray = new Array("我们的卷子上有几个问题，", "让我们一起来看看吧！");
            let i = 0;
            drawAnswerInterface(questions, answers);
            let subtitle = setInterval(function () {
                context.clearRect(0, 0, W, H);
                context.drawImage(paper, 0, 0, W, H);
                context.font = '20px shangshoutongnian';
                context.fillStyle = "black";
                context.fillText(subtitleArray[i], W / 2, 560, );
                context.stroke();
                i++;
                drawAnswerInterface(questions, answers);
                if (i == 2) {
                    clearInterval(subtitle);
                    p = 1; //此时按钮点击条件生效
                }
            }, 2000)
            console.log("drawTransitionOut2");
        }
    }, 1)
}

function drawAnswerInterface(questions, answers) {
    btn1.style.display = "block";
    btn2.style.display = "block";
    ans.style.display = "block";
    context.beginPath();
    context.fillStyle = "#000000";
    context.font = '20px shangshoutongnian';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    let num = 0;
    context.fillText("问题" + (num + 1) + "：" + questions[num], W / 2, 200, );
    context.stroke();
    btn1.onclick = function () {
        if (p == 1) {
            console.log(ans.value);
            console.log(answers[num]);
            if (ans.value == answers[num]) {
                context.clearRect(0, 0, W, H);
                context.drawImage(paper, 0, 0, W, H);
                context.beginPath();
                context.fillStyle = "#000000";
                context.font = '20px shangshoutongnian';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText("问题" + (num + 1) + "：" + questions[num], W / 2, 200, );
                context.stroke();
                context.beginPath();
                context.fillStyle = "#74C76D";
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.font = '20px shangshoutongnian';
                console.log(ans.value, answers[num]);
                context.fillText("太棒啦！再接再厉呀。", W / 2 + 15, 250, );
                context.stroke();
            } else {
                context.clearRect(0, 0, W, H);
                context.drawImage(paper, 0, 0, W, H);
                context.beginPath();
                context.fillStyle = "#000000";
                context.font = '20px shangshoutongnian';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText("问题" + (num + 1) + "：" + questions[num], W / 2, 200, );
                context.stroke();
                context.beginPath();
                context.fillStyle = "#F5B9E7";
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.font = '20px shangshoutongnian';
                console.log(ans.value, answers[num]);
                context.fillText("太可惜啦，再试试吧。", W / 2 + 15, 250, );
                context.stroke();
                document.getElementById("ans").value = '';
            }
        }
    }
    btn2.onclick = function () {
        if (p == 1) {
            context.clearRect(0, 0, W, H);
            context.drawImage(paper, 0, 0, W, H);
            if (num < 3) {
                num++;
                context.beginPath();
                context.fillStyle = "#000000";
                context.font = '20px shangshoutongnian';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText("问题" + (num + 1) + "：" + questions[num], W / 2, 200, );
                context.stroke();
                document.getElementById("ans").value = '';
            } else {
                btn1.style.display = "none"; //按钮的隐藏
                btn2.style.display = "none";
                ans.style.display = "none";
                context.beginPath();
                context.fillStyle = "#000000";
                context.font = '30px shangshoutongnian';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText("我们终于把所有问题都解决啦！", W / 2, 300, );
                context.fillText("让我们去放松一下吧！", W / 2, 380, );
                context.stroke();
                console.log("答题已完成");
                let n = 0;
                let tmp = setInterval(function () {
                    n++;
                    if (n == 2) {
                        clearInterval(tmp);
                        drawTransitionIn3();
                    }
                }, 1500)
            }
        }
    }
}