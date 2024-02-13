


document.getElementById("start-button").addEventListener("click", function () {
    checktopicValue();
    show();
    loadQuestion();
    
});



let quizData;


function checktopicValue() {
    
    const selectedTopic = document.getElementById("topic").value;

    if (selectedTopic === "general") {
        quizData = [
            {
                question: "What is the capital city of France?",
                a: "Berlin",
                b: "Madrid",
                c: "Paris",
                d: "Rome",
                correct: "c",
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                a: "Venus",
                b: "Mars",
                c: "Jupiter",
                d: "Saturn",
                correct: "b",
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                a: "Charles Dickens",
                b: "William Shakespeare",
                c: "Jane Austen",
                d: "Mark Twain",
                correct: "b",
            },
            {
                question: "What is the largest ocean on Earth?",
                a: "Atlantic Ocean",
                b: "Indian Ocean",
                c: "Arctic Ocean",
                d: "Pacific Ocean",
                correct: "d",
            },
            {
                question: "In which year did the Titanic sink?",
                a: "1912",
                b: "1905",
                c: "1925",
                d: "1931",
                correct: "a",
            },
        ];
    } else if (selectedTopic === "movies") {
        quizData = [
            {
                question: "Which film won the Academy Award for Best Animated Feature in 2021?",
                a: "Coco",
                b: "Soul",
                c: "Zootopia",
                d: "Toy Story 4",
                correct: "b",
            },
            {
                question: "In the movie 'The Matrix,' what is Neo's real name?",
                a: "John Wick",
                b: "Thomas Anderson",
                c: "Trinity",
                d: "Morpheus",
                correct: "b",
            },
            {
                question: "Who directed the 1994 film 'Pulp Fiction'?",
                a: "Christopher Nolan",
                b: "Quentin Tarantino",
                c: "Martin Scorsese",
                d: "Steven Spielberg",
                correct: "b",
            },
            {
                question: "Which actress won the Academy Award for Best Actress for her role in 'La La Land'?",
                a: "Emma Watson",
                b: "Emma Stone",
                c: "Jennifer Lawrence",
                d: "Natalie Portman",
                correct: "b",
            },
            {
                question: "In the movie 'The Godfather,' what is the name of Vito Corleone's youngest son?",
                a: "Michael",
                b: "Fredo",
                c: "Sonny",
                d: "Tom",
                correct: "b",
            },
        ];
    
    } else if (selectedTopic === "music") {
        quizData = [
            {
                question: "Who is known as the 'King of Pop'?",
                a: "Elvis Presley",
                b: "Michael Jackson",
                c: "Prince",
                d: "David Bowie",
                correct: "b",
            },
            {
                question: "Which band performed the hit song 'Bohemian Rhapsody'?",
                a: "The Beatles",
                b: "Queen",
                c: "Led Zeppelin",
                d: "The Rolling Stones",
                correct: "b",
            },
            {
                question: "In what year did The Beatles release their iconic album 'Sgt. Pepper's Lonely Hearts Club Band'?",
                a: "1965",
                b: "1967",
                c: "1969",
                d: "1971",
                correct: "b",
            },
            {
                question: "Who is the lead vocalist of the band U2?",
                a: "Bono",
                b: "Chris Martin",
                c: "Mick Jagger",
                d: "Freddie Mercury",
                correct: "a",
            },
            {
                question: "What instrument did legendary jazz musician Miles Davis play?",
                a: "Saxophone",
                b: "Trumpet",
                c: "Piano",
                d: "Guitar",
                correct: "b",
            },
        ];
    }
}




let index = 0;
let correct = 0,
    incorrect = 0,
    total = 0; 
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");




function loadQuestion() {
    total = quizData.length; 
    if (total === 0) {
        questionBox.innerHTML = "No questions available for the selected topic.";
        return;
    }

    if (total === index) {
        return quizEnd();
    }

    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
}




function getAnswer() {
    let ans;
    allInputs.forEach((inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    });
    return ans;
}




document.querySelector("#submit").addEventListener("click", function () {
    const data = quizData[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion();
});



function reset() {
    allInputs.forEach((inputEl) => {
        inputEl.checked = false;
    });
}

function quizEnd() {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h1 class="last-text"> You're score is ${correct} / ${total}</h1>
            ${givePraise(correct)}
            <button id="restart" onclick="locationReload()">Restart</button>
        </div>
    `;
    
   
}


let praiseString = "";

function givePraise(correct){
    if(correct == total){
        praiseString ="<h1 >Well done! You got all right.<h1/>"
        return praiseString;
    }
    else if(correct >= 3){
        praiseString ="<h1 >Your close! You got almost all right.<h1/>"
        return praiseString;
    }
    else{
        praiseString ="<h1>Better luck next time.<h1/>"
        return praiseString;
    }

}

function locationReload(){
    location.reload(true);
}

function show() {
    const submit = document.getElementById("submit");
    submit.style.display = "inline-block";

    const colboxes = document.getElementsByClassName("colbox");
    for (let i = 0; i < colboxes.length; i++) {
        colboxes[i].style.display = "block";
    }
}