document.getElementById("startButton").addEventListener("click", start);

function start() {
    let button = document.getElementById("startButton");
    let tiles = document.getElementsByClassName("tile");

    console.log("---PROGRESS START---");

    for (let i = 0; i < tiles.length; i++) {
        setTimeout(function () {
            console.log(`CELL ${i + 1} Animation START`);
            tiles[i].style.transform = "rotateX(180deg)";
            tiles[i].style.transition = "ease-in 1s";

        }, i / 4 * 1000);
        setTimeout(() => console.log(`CELL ${i + 1} Animation END`), i / 4 * 1000 + 1000);
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
        console.log("---PROGRESS END---");
    }, (tiles.length - 1) / 4 * 1000 + 1000);

}

function finish() {
    let button = document.getElementById("startButton");


}