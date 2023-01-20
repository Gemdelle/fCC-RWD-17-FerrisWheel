let friends = ["friend-01", "friend-02", "friend-03", "friend-04", "friend-05", "friend-06"];
var keycount = 0;
var questionIndex = 0;

function background(event) {
    if(keycount == 0 || event.currentTarget.classList.contains("open")) {
        return 
    } 
    event.currentTarget.classList.add("open");
    var friendnum = Math.floor(Math.random() * (friends.length-1));
    document.querySelector("." + friends[friendnum]).classList.add("light");
    friends.splice(friendnum, 1);
    keycount -= 1 ;
    document.querySelector(".key-number").innerHTML = keycount;
}

function disappear(event) {
    event.currentTarget.classList.add("disappear");
    document.querySelector(".next").classList.remove("disappear");
    keycount += 1;
    document.querySelector(".key-number").innerHTML = keycount;
}

var correctanswer = "";

function nextSection(event) {
    document.querySelector(".introduction").classList.add("no-display");

    document.querySelector(".question").innerHTML = "How many Wonders of the World are there?";
    document.querySelector(".answer-01").innerHTML = "6";
    document.querySelector(".answer-02").innerHTML = "8";
    document.querySelector(".answer-03").innerHTML = "7";

    correctanswer = "answer-03";

    document.querySelector(".questionnaire").classList.remove("no-display");
}

function answer(event) {
    if(event.currentTarget.classList.contains(correctanswer)) {
        document.querySelector(".key").classList.remove("disappear");
    } else {
        event.currentTarget.classList.add("incorrect");
        document.querySelector(".retry").classList.remove("disappear");
    }
} 

var questions = [
    {
        question: "100 / 2 + 30",
        answer01: "80",
        answer02: "70",
        answer03: "75",
        correctanswer: "answer-01"
    },

    {
        question: "How many legs does a centipede have?",
        answer01: "1000",
        answer02: "100",
        answer03: "10000",
        correctanswer: "answer-02"
    },

    {
        question: "How many continents are there?",
        answer01: "7",
        answer02: "8",
        answer03: "9",
        correctanswer: "answer-01"
    },

    {
        question: "What’s the world’s highest mountain?",
        answer01: "Nuptse",
        answer02: "Mauna Loa",
        answer03: "Everest",
        correctanswer: "answer-03"
    },

    {
        question: "Edgar Allan…",
        answer01: "Pork",
        answer02: "Poe",
        answer03: "Pod",
        correctanswer: "answer-02"
    }
]

function nextQuestion(event) {

    var currentQuestion = questions[questionIndex];

    document.querySelector(".question").innerHTML = currentQuestion.question;
    document.querySelector(".answer-01").innerHTML = currentQuestion.answer01;
    document.querySelector(".answer-02").innerHTML = currentQuestion.answer02;
    document.querySelector(".answer-03").innerHTML = currentQuestion.answer03;

    correctanswer = currentQuestion.correctanswer;
    questionIndex += 1;
    
    event.currentTarget.classList.add("disappear");
}