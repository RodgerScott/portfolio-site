$(document).ready(function() {
    var blink = document.getElementById('code-text');
    setInterval(function() {
        blink.style.display = (blink.style.display == 'none' ? '' : 'none');
    }, 1000);

});


function myMove() {
    var elem = document.getElementById("fish");
    var toppos = 30;
    var leftpos = 0;
    var id = setInterval(frame, 100);
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
    var elem = document.getElementById("fish");
    var toppos = 100;
    var leftpos = 70;
    var id = setInterval(frame, 100);
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

