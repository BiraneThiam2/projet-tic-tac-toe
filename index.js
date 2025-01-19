let boxes = document.querySelectorAll(".box-align");

let turn = "X";
let isGameOver = false;

// Réinitialiser toutes les cases
boxes.forEach((e) => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            checkWin(); // Vérifie si quelqu'un a gagné
            if (!isGameOver) checkDraw(); // Vérifie si le match est nul
            changeTurn(); // Change le tour
        }
    });
});

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    } else {
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function checkWin() {
    let WinCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < WinCondition.length; i++) {
        let v0 = boxes[WinCondition[i][0]].innerHTML;
        let v1 = boxes[WinCondition[i][1]].innerHTML;
        let v2 = boxes[WinCondition[i][2]].innerHTML;

        if (v0 !== "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " wins!";
            document.querySelector("#play-again").style.display = "inline";
            return; 
        }
    }
}

function checkDraw() {
    let isDraw = true;
    boxes.forEach((e) => {
        if (e.innerHTML === "") {
            isDraw = false;
        }
    });

    if (isDraw && !isGameOver) {
        document.querySelector("#results").innerHTML = "It's a draw!";
        document.querySelector("#play-again").style.display = "inline";
        isGameOver = true; // Empêche de continuer après une égalité
    }
}


document.querySelector("#play-again").addEventListener("click", () => {
    boxes.forEach((e) => (e.innerHTML = ""));
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
});
