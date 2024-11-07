const questions = [
    { question: "Which keyword is used to create an object in Java?", options: ["new", "class", "object", "this"], answer: "A" },
    { question: "Which method is used to start a thread execution?", options: ["run()", "execute()", "start()", "begin()"], answer: "C" },
    { question: "Which of the following is not a Java primitive data type?", options: ["int", "float", "String", "boolean"], answer: "C" },
    { question: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "null"], answer: "B" },
    { question: "Which of these is used to handle exceptions in Java?", options: ["try-catch", "if-else", "for loop", "while loop"], answer: "A" },
    { question: "Which of the following is a reserved keyword in Java?", options: ["const", "goto", "break", "None of these"], answer: "C" },
    { question: "What is the size of an int in Java?", options: ["4 bytes", "2 bytes", "8 bytes", "16 bytes"], answer: "A" },
    { question: "Which of the following is the correct syntax for creating an array in Java?", options: ["int[] arr = new int[5];", "int arr[] = new int(5);", "int arr(5) = new int[];", "int arr(5);"], answer: "A" },
    { question: "What is inheritance in Java?", options: ["A mechanism to create a new class using existing class", "A process of breaking code into functions", "A way to extend the memory", "A way to declare variables"], answer: "A" },
    { question: "What is the return type of the main method in Java?", options: ["int", "String", "void", "char"], answer: "C" }
];

let currentQuestion = 0;
let correct = 0;
let wrong = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementById("options").getElementsByTagName("button");
    const nextButton = document.getElementById("next-button");

    questionElement.textContent = questions[currentQuestion].question;
    options[0].textContent = "A) " + questions[currentQuestion].options[0];
    options[1].textContent = "B) " + questions[currentQuestion].options[1];
    options[2].textContent = "C) " + questions[currentQuestion].options[2];
    options[3].textContent = "D) " + questions[currentQuestion].options[3];
    
    nextButton.style.display = "none";
}

function checkAnswer(selected) {
    const answer = questions[currentQuestion].answer;
    if (selected === answer) {
        correct++;
    } else {
        wrong++;
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const result = document.getElementById("result");
    const percentage = (correct / questions.length) * 100;
    result.innerHTML = `
        <p>Total Marks: 100</p>
        <p>Your Marks: ${correct * 10}</p>
        <p>Total Questions: 10</p>
        <p>Correct Answers: ${correct}</p>
        <p>Wrong Answers: ${wrong}</p>
        <p>Your Percentage: ${percentage.toFixed(2)}%</p>
    `;
    document.getElementById("quiz-container").style.display = "none";
}

loadQuestion();
