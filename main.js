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
makeGrid(16, 16);
