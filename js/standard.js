const typing = document.getElementById("typing");
const screen = document.getElementById("screen");
const loadingMessage = document.getElementById("loading-mess");

let i = 0;
let txt = '. . .';
let speed = 250;

function typeWriter() {
    if (i < txt.length) {
        typing.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


const orderEvents = new Promise((resolve, reject) => {
    if ($(document).ready) {
        resolve();
    } else {
        reject();
    }
});

orderEvents.then(typeWriter).then( () => {
    setTimeout( () => {
        $( "#screen" ).addClass("desktop");
        loadingMessage.innerHTML = "";
        $(".skills").removeClass("hide");
        $(".about").removeClass("hide");
        $(".projects").removeClass("hide");
        $(".contact").removeClass("hide");
    }, 1500);
});

function myMove() {
    let elem = document.getElementById("fish");
    let toppos = 50;
    let leftpos = 20;
    let id = setInterval(frame, 100);
    function frame() {
        if (toppos === 120) {
            clearInterval(id);
            $(".fish-body").removeClass("reflect");
            $(".fish-eye").removeClass("reflect");
            $(".fish-tail").removeClass("reflect");
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
    let toppos = 120;
    let leftpos = 90;
    let id = setInterval(frame, 100);
    function frame() {
        if (toppos === 50) {
            clearInterval(id);
            $(".fish-body").addClass("reflect");
            $(".fish-eye").addClass("reflect");
            $(".fish-tail").addClass("reflect");
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


