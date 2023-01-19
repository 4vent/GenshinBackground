import "./smoke.js"

class BGControler {
    constructor() {
        this.background = document.getElementById('main-panel')
        this.states = ["colorpyro", "colorhydro", "coloranemo", "colorelectro", "colordendro", "colorcyro", "colorgeo"]
        this._state = 0;
        this._current_color = 0;
    }

    randomCOlor() {
        while (true) {
            const v = Math.floor(Math.random() * 8);
            if (v != this.current_color) {
                this.current_color = v
                break;
            }
        }
    }

    autoColorSet() {
        const itvno = setInterval(() => {
            if (this.state != 8){
                clearInterval(itvno);
            } else {
                this.randomCOlor();
            }
        }, 10000)
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (this._state == value) return;
        this._state = value
        if (value == 8) {
            this.background.style.transition = '5s';
            this.randomCOlor();
            this.autoColorSet();
        } else {
            this.background.style.transition = '500ms';
            this.current_color = value;
        }
    }

    get current_color() {
        return this._current_color;
    }

    set current_color(value) {
        // console.log('set current color to', value)
        this._current_color = value

        this.states.forEach(s => {
            if (this.background.classList.contains(s))
                    this.background.classList.remove(s);
        });
        if (value != 7) {
            this.background.classList.add(this.states[value]);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvasElement = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    const party = SmokeMachine(ctx, [255, 255, 255]);
    party.start();

    var canvasArea = 0
    function resizeCanvas() {
        canvas.width = canvasElement.clientWidth;
        canvas.height = canvasElement.clientHeight;
        canvasArea = canvas.width * canvas.height / 100000;
        // console.log(canvasArea)
    }
    
    new ResizeObserver(e => resizeCanvas()).observe(canvasElement);

    setInterval(function(){
        for (var i = 0; i < canvasArea; i++)
            party.addSmoke(Math.random() * canvas.width,
                           Math.random() * canvas.height,
                           Math.floor(Math.random() * 3));
    },500);

    const bgcon = new BGControler();
    bgcon.state = 8;

    document.querySelector('button#pyro').addEventListener('click', () => bgcon.state = 0);
    document.querySelector('button#hydro').addEventListener('click', () => bgcon.state = 1);
    document.querySelector('button#anemo').addEventListener('click', () => bgcon.state = 2);
    document.querySelector('button#electro').addEventListener('click', () => bgcon.state = 3);
    document.querySelector('button#dendro').addEventListener('click', () => bgcon.state = 4);
    document.querySelector('button#cyro').addEventListener('click', () => bgcon.state = 5);
    document.querySelector('button#geo').addEventListener('click', () => bgcon.state = 6);
    document.querySelector('button#none').addEventListener('click', () => bgcon.state = 7);
    document.querySelector('button#auto').addEventListener('click', () => bgcon.state = 8);

    const rainbow_bg = document.querySelector('#rainbow-bg');
    var backgroundPosition = 0;
    setInterval(() => {
        backgroundPosition -= 30;
        rainbow_bg.style.backgroundPosition = backgroundPosition.toString() + 'px'
    }, 200)
})
