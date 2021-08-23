document.getElementById("startButton").addEventListener("click", start);

function start() {
    let button = document.getElementById("startButton");
    let tiles = document.getElementsByClassName("tile");

    document.getElementById("consoleData").innerHTML += "---PROGRESS START---<br>";

    for (let i = 0; i < tiles.length; i++) {
        setTimeout(function () {
            document.getElementById("consoleData").innerHTML += `CELL ${i + 1} Animation START<br>`;
            tiles[i].style.transform = "rotateX(180deg)";
            tiles[i].style.transition = "ease-in 1s";

        }, i / 4 * 1000);
        setTimeout(() => document.getElementById("consoleData").innerHTML += `CELL ${i + 1} Animation END<br>`, i / 4 * 1000 + 1000);
    }

    button.style.width = "130px";
    button.innerHTML = "in progress";

    setTimeout(() => {
        alert("success");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].style.transform = "none";
            tiles[i].style.transition = "initial";
        }
        button.style.width = "100px";
        button.innerHTML = "start";
        document.getElementById("consoleData").innerHTML += "---PROGRESS END---";
    }, (tiles.length - 1) / 4 * 1000 + 1000);

}
