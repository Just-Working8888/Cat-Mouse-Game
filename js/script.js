const $start = document.getElementById("start");
const $game = document.getElementById("game");
const $time = document.getElementById("time");
const $timeHeader = document.getElementById("time-header");
const $result = document.getElementById("result");
const $resultHeader = document.getElementById("result-header");
const $gameTime = document.getElementById("game-time");
const imges = [
 "img/a.png",
 "img/e.png",
 "img/o.png",
 "img/r.png",
 "img/t.png",
 "img/u.png",
 "img/y.png",
 "img/q.png",
 "img/4444.png"
 
];


// console.log(
//   $start,
//   $game,
//   $time,
//   $timeHeader,
//   $result,
//   $resultHeader,
//   $gameTime
// );

let score = 0;

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBox);
$gameTime.addEventListener("input", setGameTime);

function startGame() {
  $start.classList.toggle("hide");
  $gameTime.setAttribute("disabled", true);
  $game.style.background = "url(./img/11.jpg) center/cover";
  setGameTime();
  //   $timeHeader.classList.remove("hide");
  //   $resultHeader.classList.add("hide");
  score = 0;

  let timeGame = +$time.innerText;

  let interval = setInterval(function () {
    // console.log("interval", timeGame);

    if (timeGame <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      timeGame = (timeGame - 0.1).toFixed(1);
      $time.innerText = timeGame;
    }
  }, 100);
  renderBox();
}

function endGame() {
  $start.classList.toggle("hide");
  $game.style.background = "#ccc";
  $gameTime.removeAttribute("disabled");
  $timeHeader.classList.toggle("hide");
  $game.innerHTML = "";

  setScore();
}
function renderBox() {
  $game.innerHTML = "";

  let box = document.createElement("div"); 
  let boxSize = getRandom(30, 150);
  let gameZone = $game.getBoundingClientRect();
  let maxLeft = gameZone.width - boxSize;
  let maxTop = gameZone.height - boxSize;
  let randomIndex = getRandom(0, imges.length)


box.style.hover = 



  box.style.width = box.style.height = boxSize + "px";
 
  box.style.background = `url(${imges[randomIndex]}) center/cover`;
  box.style.cursor = " cursor: url(../img/yyy.png) 2 2, pointer ";
  box.setAttribute("id", "check");
  box.style.position = "absolute";
  box.style.left = getRandom(0, maxLeft) + "px";
  box.style.top = getRandom(0, maxTop) + "px";



  $game.appendChild(box);
}

function handleBox(event) {
  if (event.target.id === "check") {
    score += 1;
    renderBox();
    console.log("clicked");
  }
}

function getRandom(min, max) {
  

  return Math.floor(Math.random() * (max - min) + min);
//   const imgHolder = document.getElementById
//   ("div");
//    let src = getRandom(imgSrc.length);
//    imgHolder.style.background = `url(${imgSrc[src]}) center/cover`;
// return Math.floor(Math.random() * n);
}

function setScore() {
  $result.innerText = score;
  $resultHeader.classList.toggle("hide");
}

function setGameTime() {

  if ($timeHeader.classList.contains("hide")) {
    $resultHeader.classList.toggle("hide");
    $timeHeader.classList.toggle("hide")
  }

  let gameTime = +$gameTime.value
  $time.innerText = gameTime.toFixed(1);
}


