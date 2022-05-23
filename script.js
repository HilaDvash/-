for (let i = 0; i < 8; i++) {
  const chessRow = document.createElement("div");
  chessRow.setAttribute("id", "chessRow");
  document.getElementById("chessRow");
  document.body.appendChild(chessRow);
  chessRow.style.width = "800px";
  chessRow.style.height = "100px";
  chessRow.style.display = "flex";
  chessRow.style.flexDirection = "row";
  if (i % 2 == 0) {
    chessRow.style.backgroundColor = "white";
  } else {
    chessRow.style.backgroundColor = "black";
  }
  for (let j = 0; j < 8; j++) {
    console.log(j);
    const chessColumn = document.createElement("div");
    chessColumn.setAttribute("id", "chessColumn");
    document.getElementById("chessColumn");
    chessRow.appendChild(chessColumn);
    chessColumn.style.width = "800px";
    chessColumn.style.height = "100px";
    chessColumn.style.border = "1px solid black";
    if (i % 2 == 0 && j % 2 !== 0) {
      chessColumn.style.backgroundColor = "white";
    } else if (i % 2 == 0 && j % 2 == 0) {
      chessColumn.style.backgroundColor = "black";
    } else if (i % 2 !== 0 && j % 2 == 0) {
      chessColumn.style.backgroundColor = "white";
    }
  }
}
