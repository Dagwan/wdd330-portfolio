const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

//initializing 
function start(quize) {
    let score = 0;

    //the game loops
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    gameOver();

    //ask question
    function ask(question) {
        return prompt(question);

    }
    //check responses and answers
    function check(response, answer) {

        if (response === answer) {
            alert("Correct!");
            score++;

        } if (response === 0) {
            alert(`please enter response ${response}!`);
            score - + response;

        } else {
            alert(`Wrong answer! The correct answer was ${answer}`);
        }
    }
    // At the end of the game, report the player's score
    function gameOver() {
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

start(quiz);

l
