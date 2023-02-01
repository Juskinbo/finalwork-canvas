var gags = document.getElementById("gags");
gags.currentTime = 1;
function drawT() {
    context.fillStyle = '#9FC2F8';
    context.fillRect(0, 0, W, H);
    context.drawImage(gags, 30, 30, W / 2, H / 2);
    context.beginPath();
    context.font = '75px shangshoutongnian'; 
    context.fillStyle = "#ffcccc";
    context.fillText("小猪佩奇上学记", 230, 425, );
    context.stroke();
}

function drawEnd() {
    var j = 0;
    setInterval(function () {
        drawT();
        context.beginPath();
        context.fillStyle = "#FFFFFF";
        context.font = '40px shangshoutongnian'; 
        context.fillText("演职员表", 600, 40 + j, );
        context.font = '30px shangshoutongnian'; 
        context.fillText("导演：蒋宇凡", 600, 120 + j, );
        context.fillText("制片：陈文婧", 600, 165 + j, );
        context.fillText("监制：李子怡", 600, 210 + j, );
        context.fillText("领衔主演：佩奇", 600, 255 + j, );
        context.fillText("特别主演：体育老师", 600, 300 + j, )
        if (120 + j == 700) {
            j = -400;
        }
        j++;
        context.stroke();
    }, 1)
    render();
}
let c = 0;

function render() {
    if (c == 0) {
        gags.play();
        c++;
    }
    context.drawImage(gags, 30, 30, W / 2, H / 2);
    requestAnimationFrame(render);
}