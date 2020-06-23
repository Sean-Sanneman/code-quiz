var scoreList = document.querySelector("#scoreList");
var clear = document.querySelector("#clear");
var returnButton = document.querySelector("#returnButton");

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

var score = localStorage.getItem(score);
score = JSON.parse(score);

//highScores = JSON.parse(score);
if (Score.value !== null) {

for (var i = 0; i < score; i++) {    
var tagScore = document.createElement("li");
tagScore.textContent = score;
#scoreList.appendChild(tagScore);
}
}

returnButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});