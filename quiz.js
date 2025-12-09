function startQuiz() {
    const questions = [
        "What is the capital of India?",
        "What does HTML stand for?",
        "How many days are there in a week?",
        "What is 10 + 5?",
        "JavaScript runs mainly on browser or server?"
    ];

    const answers = [
        "new delhi",
        "hypertext markup language",
        "7",
        "15",
        "browser"
    ];

    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let userInput = prompt(questions[i]);

        if (userInput === null) {
            alert("Quiz cancelled.");
            return;
        }

        userInput = userInput.trim().toLowerCase();

        if (userInput === answers[i]) {
            alert("Correct! ");
            score++;
        } else {
            alert("Wrong! Correct answer: " + answers[i]);
        }
    }

    alert("Quiz finished! Your score is " + score + "/" + questions.length);
}

startQuiz();
