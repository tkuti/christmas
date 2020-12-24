let $content = document.querySelector("#content");
let $pieces;
let $piecesContainer = document.querySelector("#pieces");
let $area = document.querySelector("#area");
let $openingMessage = document.querySelector("#opening-message");
let $backBtn = document.querySelector(".gift-btn");
let pieceQuantity = 20;
let pieceArray = [];



pieceMaker();
piecesDisplayer();
areaDrawer();

$backBtn.addEventListener("click", function() {
    $openingMessage.style.display = "none";
});

function pieceMaker() {
    for (let i = 1; i <= pieceQuantity; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", `img/puzzle/${i}.jpg`);
        img.setAttribute("id", i);
        img.setAttribute("draggable", "true");
        img.setAttribute("ondragstart", "drag(event)");
        pieceArray.push(img);
    }
}

function piecesDisplayer() {
    shuffle(pieceArray);
    for (let piece of pieceArray) {
        $piecesContainer.appendChild(piece);
    }
}

function areaDrawer() {
    for (let i = 1; i <= pieceQuantity; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "piece");
        div.setAttribute("id", `div${i}`);
        div.setAttribute("ondrop", "drop(event)");
        div.setAttribute("ondragover", "allowDrop(event)");
        $area.appendChild(div);
    }
    $pieces = document.querySelectorAll(".piece");
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    if (!ev.target.hasAttribute("src")) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        checking();
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function checking() {
    let allTrue = true;
    if (checkIfFull()) {
        for (let section of $area.children) {
            if (!section.id.includes(section.firstElementChild.id)) {
                allTrue = false;
            }
        }
        if (allTrue == true) {
            for (let piece of $pieces) {
                piece.style.border = "none";
                $piecesContainer.style.display = "none";
                bonusDisplay();
            }
        }
    }
}

function checkIfFull() {
    let full = true;
    for (let section of $area.children) {
        if (!section.hasChildNodes()) {
            full = false;
        }
    }
    return full;
}

function bonusDisplay () {
    setTimeout(function() {
        $openingMessage.style.display = "flex";
    }, 3000);
}