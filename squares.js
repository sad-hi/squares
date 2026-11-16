let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30; //30-50

for (let i = 0; i < squareCount; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.style.top = parseInt(Math.random() * (300 - 50)) + "px";
    square.style.left = parseInt(Math.random() * (700 - 50)) + "px";
    squareArea.append(square);
}