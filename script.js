function generateGrid(num){
    for (let i=0;i<num;i++){
        let row = document.createElement("div");
        row.className = "row-container";
        for (let j=0;j<num;j++){
            div = document.createElement("div");
            div.className = "square";
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    squares = document.querySelectorAll(".square");
    squares.forEach(addHoverColor);
}

function addHoverColor(square){
    square.addEventListener("mouseover", ()=>{
        let color = []
        for (let i=0;i<3;i++){
            color[i] = Math.floor(Math.random() * 256);
        };
        square.style.cssText = ("background-color: rgb(" + color.join() + ")");
    }, {once: true})
    square.addEventListener("mouseover", ()=>{
        console.log(square.style.backgroundColor)
        square.style.backgroundColor = darkenColor(square.style.backgroundColor)
        console.log(square.style.backgroundColor)
    })
}

function darkenColor(rgbColor){
    const color = rgbColor.slice(4, -1);
    rgb = color.split(",");
    for (let i=0; i < 3; i++){
        rgb[i] = Math.floor(+rgb[i]*0.9);
    }
    return "rgb(" + rgb + ")";
}

function newSketch(){
    gridNumber = prompt("How many squares per side? Max:100")
    if (gridNumber > 100) alert("Your input exceeded maximum number of squares.")
    else if (isNaN(+gridNumber)) alert("Input a number")
    else {
        while (container.firstChild) container.removeChild(container.firstChild)
        generateGrid(gridNumber)
    }
}

const container = document.querySelector("#flex-container");
const newSketchButton = document.querySelector("#new-grid");
newSketchButton.addEventListener("click", newSketch)

generateGrid(4);

