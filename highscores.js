var scoreList = document.querySelector("#scoreList");
var clear = document.querySelector("#clear");
var returnButton = document.querySelector("#returnButton");

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});
 
var score = localStorage.getItem("score");
Score = JSON.parse(score)

//highScores = JSON.parse(score);
if (Score !== null) {

for (var i = 0; i < score.length; i++) {    
var tagScore = document.createElement("li");
tagScore.textContent = score[i].initials+ " " + score[i].score;
scoreList.appendChild(tagScore);
}
}

returnButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});