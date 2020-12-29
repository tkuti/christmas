let attempts = 3;
let $attemptsSpan = document.querySelector("#attempt-span");
let $openingMessage1 = document.querySelector("#opening-message-1");
let $openingMessage2 = document.querySelector("#opening-message-2");
let $openingMessage3 = document.querySelector("#opening-message-3");
let $openingMessage4 = document.querySelector("#opening-message-4");
let $italyPres = document.querySelector("#italy-pres");
let $italyBtn = document.querySelector("#italy-btn");
let $message2Btn = document.querySelector("#message-2-btn");
let $back = document.querySelector("#back-italy");
let $giftBtns = document.querySelectorAll(".gift-btn");
let $hidedDivs = document.querySelectorAll(".hide");
let $album = document.querySelector("#album");
let $displayDiv = document.querySelector(".display");
let $imgDisplay = document.querySelector("#img");
let $nextArrow = document.querySelector("#next");
let $prevArrow = document.querySelector("#prev");
let $closeArrow = document.querySelector("#close");
let $bonus = document.querySelector("#bonus");
let actualPicture;
let picture = document.createElement("img");
let italyAlbum = ['img/albumItaly/0ede5290-19fa-4e38-9295-5bbba185c401.jpg',
'img/albumItaly/1e91a701-19c0-4b00-8a47-79a920072e55.jpg',
'img/albumItaly/2ab01e56-43e9-4224-9e92-7699561ef02f.jpg',
'img/albumItaly/5f89f738-6e78-4782-b692-d88ba170b32a.jpg',
'img/albumItaly/25d49119-036c-4af9-b9b3-10f56358bd49.jpg',
'img/albumItaly/71db64df-5953-42c6-9d69-dcaa80c2ba43.jpg',
'img/albumItaly/750c8b22-f392-40c1-a6b2-e486422afa45.jpg',
'img/albumItaly/7118f1e9-03e2-46eb-9c1b-1c4347d8d5e9.jpg',
'img/albumItaly/07306a94-19e8-48ec-aa9f-708f3d1d7afb.jpg',
'img/albumItaly/BED7C98A-1D09-441D-BCCC-316BB61E008E.jpeg',
'img/albumItaly/cddf54f4-5470-417f-ab3e-b208c917d1bc.jpg',
'img/albumItaly/IMG_0307.JPEG',
'img/albumItaly/IMG_0742.JPEG',
'img/albumItaly/IMG_1457.JPEG',
'img/albumItaly/IMG_1941.JPEG',
'img/albumItaly/IMG_1950.JPEG',
'img/albumItaly/IMG_1963.JPEG',
'img/albumItaly/IMG_1968.JPEG',
'img/albumItaly/IMG_2042.JPEG',
'img/albumItaly/IMG_2145.JPEG',
'img/albumItaly/IMG_3111.JPG',
'img/albumItaly/IMG_3220.JPEG',
'img/albumItaly/IMG_4567.JPEG',
'img/albumItaly/IMG_4609.JPEG',
'img/albumItaly/IMG_6038-1.JPEG',
'img/albumItaly/IMG_6093.JPEG',
'img/albumItaly/IMG_6168.JPEG',
'img/albumItaly/IMG_6200.JPEG',
'img/albumItaly/IMG_6202.JPEG',
'img/albumItaly/IMG_6329.JPEG',
'img/albumItaly/IMG_6548.JPEG',
'img/albumItaly/IMG_7082.JPG',
'img/albumItaly/IMG_7089.JPG',
'img/albumItaly/IMG_9171.JPEG',
'img/albumItaly/IMG_9387.JPEG',
'img/albumItaly/PHOTO-2020-08-19-11-17-57 4.jpg',
'img/albumItaly/PHOTO-2020-08-19-11-27-48 2.jpg',
'img/albumItaly/7a16474d-d0ca-463e-a41e-4668edacaf7a.jpg',
];

let $boxes = document.querySelectorAll("img");

for (let box of $boxes) {
    box.addEventListener("click", function () {
        for (let div of $hidedDivs) {
            switch (attempts) {
                case 3: 
                    $openingMessage1.style.display = "flex";
                    break;
                case 2:
                    $openingMessage2.style.display = "flex";
                    break;
                case 1:
                    $openingMessage3.style.display = "flex";
                    bonusDisplay();
                    break;
                default:
                    $openingMessage4.style.display = "flex";
            }
        }
    });
}

for (let btn of $giftBtns) {
    btn.addEventListener("click", function() {
        for (let div of $hidedDivs) {
            div.style.display = "none";
        }
        if (attempts > 0) {
            attempts--;
        }
        $attemptsSpan.innerHTML = attempts;
    });
}

$italyBtn.addEventListener("click", function() {
    $italyPres.style.display = "flex";
});

$back.addEventListener("click", function() {
    $italyPres.style.display = "none";
    $message2Btn.style.display = "block";
});

$album.addEventListener("click", function() {
    $displayDiv.style.display = "flex";
    picture.setAttribute("src",italyAlbum[0]);
    actualPicture = 0;
    $imgDisplay.appendChild(picture);
});

$nextArrow.addEventListener("click", function() {
    if (actualPicture != italyAlbum.length - 1) {
        picture.setAttribute("src",italyAlbum[actualPicture + 1]);
        actualPicture++;
    } else {
        picture.setAttribute("src",italyAlbum[0]);
        actualPicture = 0;
    }
});

$prevArrow.addEventListener("click", function() {
    if (actualPicture != 0 ) {
        picture.setAttribute("src",italyAlbum[actualPicture - 1]);
        actualPicture--;
    } else {
        picture.setAttribute("src",italyAlbum[italyAlbum.length - 1]);
        actualPicture = italyAlbum.length - 1;
    }
});

$closeArrow.addEventListener("click", function() {
    $displayDiv.style.display = "none";
});

function bonusDisplay () {
    setTimeout(function() {
        $bonus.style.display = "grid";
    }, 10000);
}