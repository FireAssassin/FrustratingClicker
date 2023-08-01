let chance;

function click() {
    console.log("clicked")
    const random = chance.bool()
    let highscore = parseInt(document.querySelector("span#highscore").innerHTML)
    let score = parseInt(document.querySelector("span#score").innerHTML)
    if (random) {
        score += 1;
        if (score > highscore) {highscore = score; localStorage.setItem("highscore", highscore);}
    } else {
        if (score > highscore) {highscore = score; localStorage.setItem("highscore", highscore);}
        score = 0;
    }
    document.querySelector("span#score").innerHTML = score
    document.querySelector("span#highscore").innerHTML = highscore
}

document.body.onload = function () {
    console.log("loading content")
    if (localStorage.getItem("highscore") != null) {
        document.querySelector("span#highscore").innerHTML = localStorage.getItem("highscore");
    } else {
        localStorage.setItem("highscore", 0);
    }
    console.log("Setting seed")
    chance = new Chance(Date.now());
    document.querySelector("button#ClickBTN").addEventListener("click", click)
}