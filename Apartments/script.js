let stpbl1 = document.getElementById("stepbl1")
let stpbrdr1 = document.getElementById("stpbrdr1")

let stpbl2 = document.getElementById("stepbl2")
let stpbrdr2 = document.getElementById("stpbrdr2")


let stpbl3 = document.getElementById("stepbl3")
let stpbrdr3 = document.getElementById("stpbrdr3")

stepbl1.onmouseover = function () {
  stepbrdr1.style.borderBottom = "3px solid white";
}
stepbl1.onmouseout = function () {
  stepbrdr1.style.borderBottom = "3px solid black";
}

stepbl2.onmouseover = function () {
  stepbrdr2.style.borderBottom = "3px solid white";
}
stepbl2.onmouseout = function () {
  stepbrdr2.style.borderBottom = "3px solid black";
}

stepbl3.onmouseover = function () {
  stepbrdr3.style.borderBottom = "3px solid white";
}
stepbl3.onmouseout = function () {
  stepbrdr3.style.borderBottom = "3px solid black";
}