var pixelCanvas = document.getElementById("pixelCanvas");

function makeGrid(event) {

  var gridHeight = document.getElementById("inputHeight").value;
  var gridWidth = document.getElementById("inputWidth").value;

  pixelCanvas.innerHTML = ""; // clears grid

  for (var row = 0; row < gridHeight; row++) {
    var newRow = document.createElement("tr");
    pixelCanvas.appendChild(newRow);



    for (var cell = 0; cell < gridWidth; cell++) {
      var newCell = document.createElement("td");
      newRow.appendChild(newCell);
    }
  }
}

// Listens for "submit" then calls makeGrid() to set up grid
document.querySelector("#sizePicker").addEventListener("submit", (event) => {
         event.preventDefault(); // prevents default submit action
         makeGrid();
}, false);



// Listens for clicks on the grid cells and changes BG color
pixelCanvas.addEventListener("click", (event) => {
  var cellColor = document.getElementById("colorPicker").value;
  if (event.target.nodeName === "TD") {
    event.target.style.backgroundColor = cellColor;
  }
});
