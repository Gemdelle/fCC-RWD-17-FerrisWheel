let friends = ["friend-01", "friend-02", "friend-03", "friend-04", "friend-05", "friend-06"];
var keycount = 0;
var questionIndex = 0;
var correctanswer = "";
var user = "";
var answered = false;

function background(event) {
    if (keycount == 0 || event.currentTarget.classList.contains("open")) {
        return
    }
    event.currentTarget.classList.add("open");
    var friendnum = Math.floor(Math.random() * (friends.length - 1));
    document.querySelector("." + friends[friendnum]).classList.add("light");
    friends.splice(friendnum, 1);
    keycount -= 1;
    document.querySelector(".key-number").innerHTML = keycount;
}

function disappear(event) {
    event.currentTarget.classList.add("no-display");
    document.querySelector(".next").classList.remove("no-display");
    keycount += 1;
    document.querySelector(".key-number").innerHTML = keycount;
}

function showNext(event) {
    if (event.currentTarget.value !== "") {
        document.querySelector(".next-container").classList.remove("disappear");
    }
}

// This function is called when the user clicks the "Next" button on the introduction section
function nextSection(event) {
    // Get the user's name from the input field with ID "myname"
    user = document.querySelector("#myname").value;

    // Hide the introduction section by adding the "no-display" class to its element
    document.querySelector(".introduction").classList.add("no-display");

    // Set the question text and answer choices for the questionnaire section
    document.querySelector(".question").innerHTML = "How many Wonders of the World are there?";
    document.querySelector(".answer-01").innerHTML = "6";
    document.querySelector(".answer-02").innerHTML = "8";
    document.querySelector(".answer-03").innerHTML = "7";

    // Set the correct answer for the question
    correctanswer = "answer-03";

    // Show the questionnaire section by removing the "no-display" class from its element
    document.querySelector(".questionnaire").classList.remove("no-display");
}


function answer(event) {

    if(answered == true) {
        return; 
    } 

    if (event.currentTarget.classList.contains(correctanswer)) {
        document.querySelector(".key").classList.remove("no-display");
    } else {
        event.currentTarget.classList.add("incorrect");
        document.querySelector(".retry").classList.remove("no-display");
    }

    answered = true;
    document.querySelector(".answer-01").classList.add("no-hover");
    document.querySelector(".answer-02").classList.add("no-hover");
    document.querySelector(".answer-03").classList.add("no-hover");
}

var questions = [
    {
        question: "How many Wonders of the World are there?",
        answer01: "6",
        answer02: "7",
        answer03: "8",
        correctanswer: "answer-02"
    },

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

    questionIndex += 1;
    var currentQuestion = questions[questionIndex];

    if(questionIndex > questions.length-1) {
        document.querySelector(".questionnaire").classList.add("no-display");
        document.querySelector(".results").classList.add("no-display");
        document.querySelector(".congratulations").classList.remove("no-display");
        document.querySelector(".congratulations-name").innerHTML = user;
    } else {
        document.querySelector(".question").innerHTML = currentQuestion.question;
        document.querySelector(".answer-01").innerHTML = currentQuestion.answer01;
        document.querySelector(".answer-02").innerHTML = currentQuestion.answer02;
        document.querySelector(".answer-03").innerHTML = currentQuestion.answer03;
    
        correctanswer = currentQuestion.correctanswer;
    
        event.currentTarget.classList.add("no-display");
    
        answered = false;
        document.querySelector(".answer-01").classList.remove("no-hover");
        document.querySelector(".answer-02").classList.remove("no-hover");
        document.querySelector(".answer-03").classList.remove("no-hover");
    }
}

function retry(event) {

    var currentQuestion = questions[questionIndex];
    var answers = [currentQuestion.answer01, currentQuestion.answer02, currentQuestion.answer03];

    correctanswer = currentQuestion.correctanswer;

    var cochinada = correctanswer.replace("-", "");

    /* Valor random para definir el index. */
    var answersindexA = Math.floor(Math.random() * (answers.length - 1));
    /* Asignar el valor de answers (según el index que haya salido) a la respuesta 01 */
    document.querySelector(".answer-01").innerHTML = answers[answersindexA];

    if (answers[answersindexA] === currentQuestion[cochinada]) {
        correctanswer = "answer-01";
    }
    answers.splice(answersindexA, 1);

    /* Valor random para definir el index. */
    var answersindexB = Math.floor(Math.random() * (answers.length - 1)); /* Tiene que estar acá porque ya sacamos una respuesta y está adaptada la length. */
    /* Asignar el valor de answers (según el index que haya salido) a la respuesta 02 */
    document.querySelector(".answer-02").innerHTML = answers[answersindexB];

    if (answers[answersindexB] === currentQuestion[cochinada]) {
        correctanswer = "answer-02";
    }
    answers.splice(answersindexB, 1);

    /* Asignar el último valor con el dato que queda en el array. */
    document.querySelector(".answer-03").innerHTML = answers[0];
    if (answers[0] === currentQuestion[cochinada]) {
        correctanswer = "answer-03";
    }

    event.currentTarget.classList.add("no-display");
    document.querySelector(".incorrect").classList.remove("incorrect");

    answered = false;
    document.querySelector(".answer-01").classList.remove("no-hover");
    document.querySelector(".answer-02").classList.remove("no-hover");
    document.querySelector(".answer-03").classList.remove("no-hover");
}