const container = document.querySelector(".container");
const section = document.querySelector(".main-wrapper")
const buttonsContainer = document.querySelector(".buttons");


function createGrid(col, rows) {
    for(let i = 0 ; i < (col * rows); i++){
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add("box")
    }
}

createGrid(16,16)

let currentColor = null;

function chooseColor(color) { 
    currentColor = color;
    const boxs = container.querySelectorAll(".box");
    boxs.forEach(box => box.addEventListener('mouseover', () => onMouseOver(box)))
}

function onMouseOver(box)
{
    if(currentColor == 'dark')
    {
        let rNum = Math.floor(Math.random() * 255);
        let darkScale = `rgb(${rNum},${rNum},${rNum})`
        box.style.background = darkScale;
    }
    else if(currentColor == 'rainbow')
    {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${R}, ${G}, ${B})`
    }
    else
    {
        box.style.background = currentColor;
    }
}

function reset() {
    const boxs = container.querySelectorAll(".box");
    boxs.forEach(box => {
        box.remove();
    })
}

function reSize() {
    let user = prompt("What size would you like your grid to be?")
    if(user === null || user < 1) {
        reset();
        createGrid(16,16);
    }
    else {
        reset();
        createGrid(user,user);
    }
}