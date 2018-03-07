$(document).ready(function() {
    const blink = document.getElementById('code-text');
    setInterval(function() {
        blink.style.display = (blink.style.display == 'none' ? '' : 'none');
    }, 1000);

});

var i = 0;
var txt = 'Welcome to my portfolio!';
var speed = 300;

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.getElementById("screen").addEventListener('click', typeWriter);




function myMove() {
    let elem = document.getElementById("fish");
    let toppos = 30;
    let leftpos = 0;
    let id = setInterval(frame, 100);
    function frame() {
        if (toppos == 100) {
            clearInterval(id);
            myMoveBack();
        } else {
            toppos++;
            leftpos++;
            elem.style.top = toppos + 'px';
            elem.style.left = leftpos + 'px';
        }
    }
}

function myMoveBack() {
    let elem = document.getElementById("fish");
    let toppos = 100;
    let leftpos = 70;
    let id = setInterval(frame, 100);
    function frame() {
        if (toppos == 30) {
            clearInterval(id);
            myMove();
        } else {
            toppos--;
            leftpos--;
            elem.style.top = toppos + 'px';
            elem.style.left = leftpos + 'px';
        }
    }
}

myMoveBack();

