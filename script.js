import "./smoke.js"

const canvasElement = document.getElementById("canvas");
var canvasArea = 0
function resizeCanvas() {
    canvas.width = canvasElement.clientWidth;
    canvas.height = canvasElement.clientHeight;
    canvasArea = canvas.width * canvas.height / 100000;
    console.log(canvasArea)
}

var ctx = canvas.getContext('2d')
resizeCanvas();


var party = SmokeMachine(ctx, [255, 255, 255])
party.start()

setInterval(function(){
    for (var i = 0; i < canvasArea; i++)
        party.addSmoke(Math.random()*canvas.width, Math.random()*canvas.height, Math.floor(Math.random()*3));
},500);

const background = document.getElementById('main-panel')
const states = ["colorpyro", "colorhydro", "coloranemo", "colorelectro", "colordendro", "colorcyro", "colorgeo"]
var auto_state = 0;
var state = 9;

function autoColorSet() {
    const itvno = setInterval(() => {
        if (state != 9) clearInterval(itvno)
        colorSet(auto_state)
        
        auto_state = (auto_state + 1) % 8;
    }, 10000)
}
autoColorSet();

function colorSet(state) {
    states.forEach(s => {
        if (background.classList.contains(s)) background.classList.remove(s);
    });

    if (auto_state != 7) {
        background.classList.add(states[state]);
    }
}

function buttonListner(num) {
    state = num;
    if state !=
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new ResizeObserver(e => {
        resizeCanvas();
    })
    observer.observe(canvasElement)
})
