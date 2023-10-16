const gridWidth = 16;
const gridHeight = 16;
const squareSize = 16;

const canvas = document.createElement("div");
canvas.classList = "canvas";
document.querySelector("body").appendChild(canvas);

let totalBlocks = gridHeight * gridWidth;
for (let blockIndex = 0; blockIndex < totalBlocks; ++blockIndex) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    canvas.appendChild(newDiv);
}