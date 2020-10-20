function setup() {
    createCanvas(420, 420)
    // test = new Ox(1, 210, 210)
    btn = document.createElement("BUTTON");
    btn.innerHTML = "Reset"
    document.body.appendChild(btn);
    btn.style.display = "none"
    reset();
}

function draw() {
    background(68, 55, 55)

    noStroke()
    fill(246, 233, 233)
    drawGrid();

    if (won == 'o') {
        posArray = {}
        textSize(30);
        text("'O' Won", 160, 370, 120, 60)
        btn.style.display = "inline-block"
    } else if (won == 'x') {
        posArray = {};
        textSize(30);
        text("'X' Won", 160, 370, 120, 60)
        btn.style.display = "inline-block"
    }

    for (let i = 0; i < onBoard.length; i++) {
        onBoard[i].show();
        
    }
}