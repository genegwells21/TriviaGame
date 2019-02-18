$(document).ready(function()    {
$("#startButton").on("click", gameManager.startTimer);

});

var gameManager =   {
    timeLeft: 99,

    startTimer: function()  {
        $("timer").text("timeLeft: " + gameManager.timeLeft);
        setInterval(gameManager.countdown, 1000);
        $("#initialize").hide();
        game.displayQuestions();
    },

    countdown: function()   {
    gameManager.timeLeft--;
    $("#timer").text("timeLeft: " + gameManager.timeLeft);
    if  (gameManager.timeLeft === 0)    {
        gameManager.stopTimer();
        $("#timer").empty();
    }
    },

    stopTimer: function()    {
        clearInterval();
        game.checkAnswers();
    },

    showEndPage: function (correctAnswers, incorrectAnswers, blank)    {
    $("#gameOver").show();
    $("#questionsSection").empty();
    $("#timer").empty();
    $("#timer").hide();
    $("#right").text("Correct Answers Today : " + correctAnswers);
    $("#wrong").text("Happy Mistakes Today : " + incorrectAnswers);
    $("#leftBlank").text("Just Answer This Next Time: " + blank);
    }
}
 var game = {
    
    displayQuestions: function()  {
    var divContainer = $("#questionsSection");
    var answerGroup = $(".form-check");
    divContainer.append("<h3> Begin! </h2>");


    for (var i= 0; i < questionList.length; i++)    {
       
        divContainer.append('<div id="question">' + questionList[i].question + '</div');
        var answer1 = questionList[i].answers[0];
        var answer2 = questionList[i].answers[1];
        var answer3 = questionList[i].answers[2];

        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');

    }

    var finishButton = '<button class="btn btn-primary" id="finish-button" type="submit"> Finish</button>';
    divContainer.append(finishButton);
    $("#finish-button").on("click", gameManager.stopTimer);
    },

    checkAnswers: function()   {
        var correctChoice;
        var userChoice;
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var blank = 0;

        for (var i = 0; i < questionList.length; i++)   {
            correctChoice = questionList[i].correct;
            userChoice = $('input[id=radio'+i+']:checked + label').text()

            if (userChoice === correctChoice)   {
                correctAnswers++;
            }   else if (userChoice === "") {
                blank++;
            }   else if (userChoice !== correctChoice)  {
                {
                    incorrectAnswers++;
                }
            }
 }

    gameManager.showEndPage (correctAnswers, incorrectAnswers, blank);
    },
 }

 var questionList =

[
    {
        question: "What is in the hour of power?",
        answers: ["60 minutes of reading and sandwich", "A six pack of beer", "20 minutes of reading, 20 minutes of reading, 20 minutes of meditation"],
        correct: "20 minutes of reading, 20 minutes of reading, 20 minutes of meditation"
    },
    {
        question: "What are daily declarations that contribute to a positive and abundant future?",
        answers: ["Declarations", "Movie Lines", "Positive affirmations"],
        correct: "Positive affirmations"
    },
    {
        question: "Who is the author of Chicken Soup For The Soul?",
        answers: ["Jack Canfield", "Brian Tracy", "John Maxwell"],
        correct: "Jack Canfield"
    },
    {
        question: "For which amount of time do most millionaire read a day?",
        answers: ["20 Minutes", "8 Hours", "1 Hour"],
        correct: "1 Hour"
    },
    {
        question: "How many goals should one have?",
        answers: ["One Big Goal", "A Plethora Of Mental Goals", "101 Written Goals"],
        correct: "101 Written Goals"
    },
    {
        question: "What is visualization?",
        answers: ["Seeing In Your Mind What You Want To Achieve In Life", "A Cardboard Craft Activity", "A Computer Program"],
        correct: "Seeing In Your Mind What You Want To Achieve In Life"
    },
   
]