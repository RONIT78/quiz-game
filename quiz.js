// questions: "Q1. Who Score ODI 100 on His Debut?""
// a: "Sourav Ganguly"
// b: "MS Dhoni"
// c: "Kedar Jadav"
// d: "KL Rahul"

// questions: "Q2. In wihich year india won their first World Cup?",
// a:"1983",
// b:"1883",
// c:"1984",
// d:"1884",

//questions:"Q3. Which is the name of India-Australia Test Series?",
// a: "Border-Gavaskar Trophy",
// b:"Bilitarate series",
// c:"Paytm Seires",
// d: "The Ashes",

// questions:"Q4. Which indian player has hatttrick  in world cup ?",
// a: "Chetan Sharma",
// b:"Mohad. Shami",
// c:"Deppak Chahar",
//d: "Both A & B",

// questions: "Q5. Who is Known As Rawalpindi Express?",
// a:"Wasim Akram",
// b:"Sohaib Akthar",
// c:"Breet Lee",
// d: "Michael Holding",


// questions:"Q6. Which Indian Batsman Hold The Record of Most Number of 100's?",
// a:"Sourav Ganguly",
// b:"Virat Kohli",
// c:"Sachin Tendulkar",
// d:" Rahul Dravid",

// questions: "Q7. Which Team Has HOld The Highest Total Record In ODI?",
// a:"INDIA",
// b:"AUSTRALIA",
// c:"ENGLAND ",
// d:"SOUTH AFFRICA",

// questions: "Q8. Who Score 100 on His Debut?",
// a:"Sourav Ganguly",
// b:"MS Dhoni",
// c:"Kedar Jadav",
// d: "KL Rahul",

const quizDB = [{
        questions: "Q1. Who Score ODI 100 on His Debut?",
        a: "Sourav Ganguly",
        b: "MS Dhoni",
        c: "Kedar Jadav",
        d: "KL Rahul",
        ans: "ans4"

    },
    {
        questions: "Q2. In wihich year india won their first World Cup?",
        a: "1983",
        b: "1883",
        c: "1984",
        d: "1884",
        ans: "ans1"

    },
    {
        questions: "Q3. Which is the name of India-Australia Test Series?",
        a: "Border-Gavaskar Trophy",
        b: "Bilitarate series",
        c: "Paytm Seires",
        d: "The Ashes",
        ans: "ans1"

    },
    {

        questions: "Q4. Which indian player has hatttrick  in world cup ?",
        a: "Chetan Sharma",
        b: "Mohad. Shami",
        c: "Deppak Chahar",
        d: "Both A & B",
        ans: "ans4"

    },
    {

        questions: "Q5. Who is Known As Rawalpindi Express?",
        a: "Wasim Akram",
        b: "Sohaib Akthar",
        c: "Breet Lee",
        d: "Michael Holding",
        ans: "ans2"

    },
    {
        questions: "Q6. Which Indian Batsman Hold The Record of Most Number of 100's?",
        a: "Sourav Ganguly",
        b: "Virat Kohli",
        c: "Sachin Tendulkar",
        d: " Rahul Dravid",
        ans: "ans3"

    },
    {
        questions: "Q7. Which Team Has Hold The Highest Total Record In ODI?",
        a: "INDIA",
        b: "AUSTRALIA",
        c: "ENGLAND ",
        d: "SOUTH AFFRICA",
        ans: "ans3"

    },
    {
        questions: "Q8. Who Score 100 on His Debut in Lords ?",
        a: "Sourav Ganguly",
        b: "MS Dhoni",
        c: "Kedar Jadav",
        d: "KL Rahul",
        ans: "ans1"

    }

];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showarea");
const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.questions;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curElement) => {
        if (curElement.checked) {
            answer = curElement.id;

        }

    });
    return answer;
}

const deslectall = () => {
    answers.forEach((curElement) => curElement.checked = false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    deslectall();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {

        showScore.innerHTML = `

<h3> Your Score is ${score}/${quizDB.length}. Well Done 🤞  </h3>
<button class="btn" onclick="location.reload()">GO IT</button>

`;

        showScore.classList.remove('showscore');

    }
})