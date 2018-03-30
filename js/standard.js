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

orderEvents.then( () => {
    $(".skills").toggleClass("hide");
    $(".about").toggleClass("hide");
    $(".projects").toggleClass("hide");
    $(".contact").toggleClass("hide");
}).then(typeWriter).then( () => {
    setTimeout( () => {
        $( "#screen" ).addClass("desktop");
        loadingMessage.innerHTML = "";
        $(".skills").toggleClass("show");
        $(".about").toggleClass("show");
        $(".projects").toggleClass("show");
        $(".contact").toggleClass("show");
    }, 1500);
});

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

