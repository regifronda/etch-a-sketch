const newGridButton = document.getElementById("newGridButton");
const container = document.getElementById("container");

function makeGrid(input) {
    for (i = 0; i < input ** 2; i++) {
        container.style.cssText = `grid-template-columns: repeat(${input}, 1fr
        ); grid-template-rows: repeat(${input}, 1fr`;
        let squares = document.createElement("div");
        squares.classList.add("squares");
        squares.onmouseover = function() {
            squares.style.backgroundColor = "black";
            squares.style.color = "white";
        };
        container.appendChild(squares);
    };
};

function eraseGrid() {
    let squares = document.getElementsByClassName("squares");
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
        squares[i].style.color = "black";
    };
};

makeGrid(16);

newGridButton.addEventListener("click", function() {
    eraseGrid();
    input = prompt("How many squares per side?", "16")
    makeGrid(input);
});
