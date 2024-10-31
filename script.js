let score = 0;
let currentQuestion = 0;

// Въпросите и отговорите
const questions = [
    {
        question: "Какво е телата?",
        answers: ["Вещества, които не можем да видим", "Предмети, които можем да видим и пипнем", "Продукти за готвене"],
        correct: 1
    },
    {
        question: "Кое от следните е твърдо вещество?",
        answers: ["Вода", "Дърво", "Газ"],
        correct: 1
    },
    {
        question: "Кое от следните е газообразно вещество?",
        answers: ["Сол", "Въздух", "Олио"],
        correct: 1
    },
    {
        question: "Кое от следните е вид течност?",
        answers: ["Вода", "Камък", "Метал"],
        correct: 0
    },
    {
        question: "Как се нарича състояние, в което веществото запазва обема си, но няма форма?",
        answers: ["Газ", "Течност", "Твърдо"],
        correct: 1
    },
    {
        question: "Кое вещество няма нито обем, нито форма?",
        answers: ["Течност", "Газ", "Твърдо"],
        correct: 1
    },
    {
        question: "Кое вещество е прозрачно и течащо?",
        answers: ["Вода", "Дърво", "Желязо"],
        correct: 0
    },
    {
        question: "Кой е основният компонент на водата?",
        answers: ["Оксид", "Кислород", "Въглерод"],
        correct: 1
    },
    {
        question: "Кое състояние на веществата може да се пипне, но не може да се разлее?",
        answers: ["Твърдо", "Газообразно", "Течно"],
        correct: 0
    },
    {
        question: "Кое състояние на веществата не може да се види?",
        answers: ["Течно", "Газообразно", "Твърдо"],
        correct: 1
    }
];

function showQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    questions[currentQuestion].answers.forEach((answer, index) => {
        const answerDiv = document.createElement("div");
        answerDiv.textContent = answer;
        answerDiv.addEventListener("click", () => checkAnswer(index));
        answersDiv.appendChild(answerDiv);
    });
}

function checkAnswer(selectedIndex) {
    const answersDiv = document.getElementById("answers").children;
    if (selectedIndex === questions[currentQuestion].correct) {
        answersDiv[selectedIndex].classList.add("correct");
        score++;
    } else {
        answersDiv[selectedIndex].classList.add("incorrect");
        answersDiv[questions[currentQuestion].correct].classList.add("correct");
    }
    document.getElementById("score").textContent = score;
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    document.getElementById("next-button").style.display = "none";
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    const endMessage = document.getElementById("end-message");
    endMessage.style.display = "block";
    document.getElementById("final-score").textContent = `Вие събрахте общо ${score} точки.`;
    let message = "";
    let emoji = score >= 5 ? "happy.png" : "sad.png";
    if (score >= 9) message = "Справихте се отлично!";
    else if (score >= 7) message = "Справихте се много добре!";
    else if (score >= 5) message = "Справихте се добре!";
    else message = "Прочети още по темата и играй отново!";
    document.getElementById("final-message").textContent = message;
    document.getElementById("emoji").src = emoji;
}

window.onload = showQuestion;
