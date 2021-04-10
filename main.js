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

makeGrid(16);

newGridButton.addEventListener("click", function() {
    let squaresToRemove = document.getElementsByClassName("squares");
    for (i = squaresToRemove.length-1; i >= 0; i--) {
        squaresToRemove[i].remove();
    }
    input = prompt("How many squares per side?", "16")
    makeGrid(input);
});
