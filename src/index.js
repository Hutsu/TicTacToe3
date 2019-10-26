import "./styles.css";

var count = 0;
var barCount = 0;
var timeout;
var interval;
var width = 0;

var clock = document.getElementById("clockdiv");
var elem = document.querySelector(".determinate");

const col = document.querySelectorAll(".col");

function move() {
  clearBar();
  clearInterval(id);
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearBar();
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

if ((count = 0)) {
  interval = setInterval(newTime, 1000);
}

function clearBar() {
  width = 0;
  elem.style.width = width + "%";
}

function newTime() {
  clock.innerHTML = 10 - barCount + " secounds left";
  barCount++;
}

for (var i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function() {
    tableText(this, col[i]);
  });
}

function tableText(cell) {
  if (count % 2 === 0) {
    if (cell.innerHTML === "") {
      cell.innerHTML = "X";
      cell.style.backgroundColor = "rgb(124, 252, 0)";
      cell.style.fontFamily = "Helvetica";
      cell.style.fontSize = "30px";
      ClearTimeout(this);
      takeTurn(this);
      move();
      checkWin();
      checkDraw();
      count++;
    } else {
      alert("Pick other cell, it's already populated:(");
    }
  } else {
    if (cell.innerHTML === "") {
      cell.innerHTML = "O";
      cell.style.backgroundColor = "rgb(250, 128, 114)";
      cell.style.fontFamily = "Helvetica";
      cell.style.fontSize = "30px";
      ClearTimeout(this);
      takeTurn(this);
      move();
      checkWin();
      checkDraw();
      count++;
    } else {
      alert("Pick other cell, it's already populated:(");
    }
  }
}

function takeTurn() {
  barCount = 0;
  clearInterval(interval);
  interval = setInterval(newTime, 1000);
  timeout = setTimeout(alertTimeout, 10000);
  newTime();
}

function alertTimeout() {
  count++;
  alert("Timeout!");
  takeTurn();
  move();
}

function ClearTimeout() {
  clearTimeout(timeout);
}

function checkWin(table) {
  var xory = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var row1 = 0;
    var row2 = 0;
    var row3 = 0;
    var row4 = 0;
    var row5 = 0;
    var col1 = 0;
    var col2 = 0;
    var col3 = 0;
    var col4 = 0;
    var col5 = 0;
    var diag1 = 0;
    var diag2 = 0;

    var round = 0;

    for (var j = 0; j < 5; j++) {
      round++;
      if (col[j].innerHTML === xory[i]) {
        row1++;
        if (round === 1) {
          col1++;
          diag1++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
          diag2++;
        }
      }
      if (col[j + 5].innerHTML === xory[i]) {
        row2++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
          diag1++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
          diag2++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (col[j + 10].innerHTML === xory[i]) {
        row3++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
          diag1++;
          diag2++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (col[j + 15].innerHTML === xory[i]) {
        row4++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
          diag2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
          diag1++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (col[j + 20].innerHTML === xory[i]) {
        row5++;
        if (round === 1) {
          col1++;
          diag2++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
          diag1++;
        }
      }
    }

    if (
      row1 === 5 ||
      row2 === 5 ||
      row3 === 5 ||
      row4 === 5 ||
      row5 === 5 ||
      col1 === 5 ||
      col2 === 5 ||
      col3 === 5 ||
      col4 === 5 ||
      col5 === 5 ||
      diag1 === 5 ||
      diag2 === 5
    ) {
      if (xory[i] === "X") {
        alert("Player 1 won!");
        //alert("Player 1 vs. Player 2: " + victories1 + " - " + victories2);
        clearTable();
        count = 1;
        ClearTimeout();
        clearBar();
        row1 = 0;
        row2 = 0;
        row3 = 0;
        row4 = 0;
        row5 = 0;
        col1 = 0;
        col2 = 0;
        col3 = 0;
        col4 = 0;
        col5 = 0;
        diag1 = 0;
        diag2 = 0;
        break;
      }

      if (xory[i] === "O") {
        alert("Player 2 won!");
        //alert("Player 1 vs. Player 2: " + victories1 + " - " + victories2);
        clearTable();
        count = 1;
        ClearTimeout();
        clearBar();
        row1 = 0;
        row2 = 0;
        row3 = 0;
        row4 = 0;
        row5 = 0;
        col1 = 0;
        col2 = 0;
        col3 = 0;
        col4 = 0;
        col5 = 0;
        diag1 = 0;
        diag2 = 0;
        break;
      }
    }
  }
}

function checkDraw() {
  var count = 0;
  for (var i = 0; i < col.length; i++) {
    if (col[i].innerHTML === "X" || col[i].innerHTML === "O") {
      count++;
    }
  }
  if (count === 25) {
    alert("It's draw!");
    clearTable();
    count = 0;
    ClearTimeout();
    clearBar();
  }
}

function clearTable() {
  for (var i = 0; i < 25; i++) {
    col[i].innerHTML = "";
    col[i].style.backgroundColor = "rgb(255,255,255)";
    col[i].style.fontFamily = "Helvetica";
    col[i].style.fontSize = "10px";
  }
}
