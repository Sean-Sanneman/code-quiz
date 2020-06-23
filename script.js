
// list of questions and answers object arrays

var questions = [
    //index 0
    {
        question: 'What is a "variable"?',
        answers: ["a value that changes", "a box that contains data", "a string", "a boolean"],
        correct: "a box that contains data",
    },
    //index 1 
    {
        question: 'Inside which HTML element should you put your JavaScript?',
        answers: ["<js>", "<scripting>", "<script>", "<head>"],
        correct: "<script>",
    },
    // index 2
    {
        question: 'Javascript is best described as:',
        answers: ["a css library", "overly caffeinated hyperbole", "an object-oriented scripting language", "a low-level programming language"],
        correct: "an object-oriented scripting language",
    },
    // index 3
    {
        question: 'What is Vanilla JavaScript?',
        answers: ["a form of JavaScript compiled for the Starbucks Corporation", "plain JavaScript without any additionl libraries", "JavaScript simplified for basic consumer usage", "JavaScript designed to work with grayscale CSS formats"],
        correct: "plain JavaScript without any additionl libraries",
    },
    // index 4
    {
        question: 'JavaScript is interpreted by the ___',
        answers: ["Client", "Host", "Employer", "Server"],
        correct: "Client",
    },
    // index 5
    {
        question: 'Which method adds or removes elements from an array object?',
        answers: ["cut", "reverse", "splice", "remove"],
        correct: "splice",
    },
    // index 6
    {
        question: 'What is the correct JavaScript syntax to write "Hello World!"?',
        answers: ["Hello World!", 'document.write("Hello World!")', 'response.write("Hello World!")', 'system.out.printin("Hello World!")'],
        correct: 'document.write("Hello World!")',
    },
    // index 7
    {
        question: 'When a user views a page written in JavaScript, which machine is actually executing the script?',
        answers: ["The web server", "Microsoft's mainframe", "The user's machine on it's web browser", "NASA's IBM Z9 Mainframe"],
        correct: "The user's machine on it's web browser",
    },
    // index 8
    {
        question: 'What is the client-side JavaScript object?',
        answers: ["Cursor", "Database", "FileUpLoad", "Client"],
        correct: "FileUpLoad",
    },
    // index 9
    {
        question: 'What does "this" refer to in JavaScript?',
        answers: ["the previous object", "a 'true' boolean", "the current object", "the data contained within a variable"],
        correct: "the current object",
    },
];

var score = 0;
var questionIndex = 0;

//set timer - lookup set interval and close interval
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizBox = document.querySelector("#quizBox");
var mainWrap = document.querySelector("#mainWrap");

var timeSeconds = 90;
var holdInterval = 0;
var subtract = 10;
var ulCreate = document.createElement("ul");
var scoreArray = []

//loop through questions while documenting to the DOM using ids, use query selector, set up local storage
startButton.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeSeconds--;
            timer.textContent ="Time:  " + timeSeconds;

            if (timeSeconds <= 0) {
                clearInterval(holdInterval);
                allDone();
                timer.textContent = "Time Is Up!";
            }
            }, 1000);
        }
        render(questionIndex);
        });

        //get questions and answers to page
        function render(questionIndex) {
            quizBox.innerHTML = "";
            ulCreate.innerHTML = "";
            for (var i = 0; i < questions.length; i++) {
                var quizQuestion = questions[questionIndex].question;
                var quizAnswers = questions[questionIndex].answers;
                quizBox.textContent = quizQuestion;
            }

            quizAnswers.forEach(function (newItem) {
                var listItem = document.createElement("button");
                listItem.textContent = newItem;
                quizBox.appendChild(ulCreate);
                ulCreate.appendChild(listItem);
                listItem.addEventListener("click", (compare));
            })
        }

        function compare(event) {
            var element = event.target;

            if (element.matches("button")) {


                var createDiv = document.createElement("div");
                createDiv.setAttribute("id", "createDiv");
                //correct
                if (element.textContent === questions[questionIndex].correct) {
                    score++;
                    createDiv.textContent = "GENIOUS!!!!!";
                } else {
                    timeSeconds = timeSeconds - subtract;
                    createDiv.textContent = "IDIOT!!!"
                }
            }
            //what question is the user on?
            questionIndex++;

            if (questionIndex >= questions.length) {
                allDone();
                createDiv.textContent = "Quiz Complete!  " + "" + "You Answered:  " + score + "/" + questions.length + " Correct!";
            } else { 
                render(questionIndex);
            }
            quizBox.appendChild(createDiv);
            }
            function allDone() {
                quizBox.innerHTML = "";
                timeSeconds.innerHTML = "";

                var heading = document.createElement("h1");
                heading.setAttribute("id", "heading");
                heading.textContent = "Done!"

                quizBox.appendChild(heading);

                var para = document.createElement("p");
                para.setAttribute("id", "para");

                quizBox.appendChild(para);

                if (timeSeconds >= 0) {
                    var timeLeft = timeSeconds;
                    var para2 = document.createElement("p");
                    clearInterval(holdInterval);
                    para.textContent = "Your Score Is: " + timeLeft;

                    quizBox.appendChild(para2);
                }

                var recStats = document.createElement("input");
                recStats.setAttribute("type", "text");
                recStats.setAttribute("id", "initials");
                recStats.textContent = "";

                quizBox.appendChild(recStats);

                //submit user info
                var userInfo = document.createElement("button");
                userInfo.setAttribute("type", "Submit");
                userInfo.setAttribute("id", "Submit");
                userInfo.textContent = "Submit";
                var input = document.querySelector("#initials");
                quizBox.appendChild(userInfo);

                //capture user info
                userInfo.addEventListener("click", function() {
                    var scoreArray = JSON.parse(localStorage.getItem('score')) || [];
                    console.log(scoreArray);
                    var initials = input.value;
                    
                    if (initials === null) {
                        console.log("No value entered!");
                    
                    } else {
                        var score = {
                            initials: initials,
                            score: timeLeft, 
                        };
                        console.log(score);

                        scoreArray.push(score);
                        console.log(scoreArray)



                        localStorage.setItem("score", JSON.stringify(scoreArray));

                        var highScores = localStorage.getItem(score);
                        if (highScores === null) {
                            highScores = [];
                        } else {
                            highScores = JSON.parse(highScores);
                        }
                        
                        
                        

                        //store on highscores page
                        window.location.replace("./highscores.html");
                    }

                });


            }

            //continue on highscores page

           




            

        





    

