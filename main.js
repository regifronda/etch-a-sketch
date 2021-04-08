const newGridButton = document.getElementById("newGridButton");

const container = document.getElementById("container");
function makeGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let square = document.createElement("div");
        square.onmouseover = function() {
            square.style.backgroundColor = "black";
            square.style.color = "white";
        };
        container.appendChild(square).className = "grid-item";
    };
};

function clearGrid () {
    let square = document.getElementsByClassName("grid-item");
    for (i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = "white";
        square[i].style.color = "black";
    };
};

makeGrid(16, 16);

newGridButton.addEventListener("click", function() {
    clearGrid();
});
