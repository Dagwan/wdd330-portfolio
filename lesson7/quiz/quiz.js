//JSON data and how to use it
const url = "http://spbooks.github.io/questions.json";

//fetching the url
fetch(url)
.then(res => res.json())
.then(quiz => {
    view.start.addEventListener("click", () => 
    game.start(quiz.questions), false);
    view.response.addEventListener("click", (event) =>
    game.check(event), false);
 
});
const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];

function random(a, b =1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a, b] = [b, a];
    }
    return Math.floor((b - a + 1) * Math.random()) + a;
}

function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i) - 1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}
/*const quize = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];*/
// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    response: document.querySelector('#response'),
    setu() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, "");
        this.render(this.info, "");
        this.resetForm();
    },

    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },

    resetForm() {
        this.response.answer.value = "";
        this.response.answer.focus();
    },

    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

const game = {
    start(quiz) {
        this.score = 0;
        this.questions = [...quiz];
      
        this.ask()

    },

    ask(name) {
        console.log("ask() invoked");
        if (this.questions.length > 0) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);

        }
        else {
            this.gameOver()
        }
    },

    // ask() {
    //     const question = `What is ${this.question.name}'s real name?`;
    //     view.render(view.question, question);
    //     const response = prompt(question);
    //     this.check(response);
    // },

    check(event) {
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', { 'class': 'correct' });
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
        }
        view.resetForm()
        this.ask();
    },

    gameOver() {
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}

//initializing 
function start(quiz) {
    let score = 0;

    //the game loops
    for (const [question, answer] of quize) {
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

game.start(quiz);

console.log('start() invoked');
console.log('ask() invoked');
console.log('check(event) invoked');
console.log('gameOver() invoked');

view.response.addEventListener("submit", (event) => game.check(event), false);
view.hide(view.response);


