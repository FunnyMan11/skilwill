// =====================================
// დავალება 3: Quiz თამაში ქულებით
// =====================================

// Quiz შეკითხვები და პასუხები
const quizData = [
    {
        question: '1. რა არის JavaScript?',
        answers: [
            { text: 'პროგრამირების ენა', correct: true },
            { text: 'ოპერაციული სისტემა', correct: false },
            { text: 'მონაცემთა ბაზა', correct: false },
            { text: 'ტექსტური რედაქტორი', correct: false }
        ]
    },
    {
        question: '2. რომელი მეთოდით ვამატებთ ელემენტს DOM-ში?',
        answers: [
            { text: 'removeChild()', correct: false },
            { text: 'appendChild()', correct: true },
            { text: 'deleteElement()', correct: false },
            { text: 'addElement()', correct: false }
        ]
    },
    {
        question: '3. რა არის Array JavaScript-ში?',
        answers: [
            { text: 'მონაცემთა სტრუქტურა მრავალი მნიშვნელობის შესანახად', correct: true },
            { text: 'ფუნქცია', correct: false },
            { text: 'ცვლადის ტიპი რომელიც ინახავს მხოლოდ რიცხვებს', correct: false },
            { text: 'CSS თვისება', correct: false }
        ]
    },
    {
        question: '4. რომელი ოპერატორით ვამოწმებთ ტიპსა და მნიშვნელობას ერთდროულად?',
        answers: [
            { text: '==', correct: false },
            { text: '=', correct: false },
            { text: '===', correct: true },
            { text: '!=', correct: false }
        ]
    },
    {
        question: '5. რა არის DOM?',
        answers: [
            { text: 'Document Object Model', correct: true },
            { text: 'Data Object Management', correct: false },
            { text: 'Digital Output Module', correct: false },
            { text: 'Direct Object Method', correct: false }
        ]
    }
];

// ქულების მთვლელი
let score = 0;
const scoreDisplay = document.getElementById('scoreDisplay');

// Quiz-ის შექმნა
function createQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    
    quizData.forEach((quizItem, questionIndex) => {
        // შეკითხვის კონტეინერის შექმნა
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        // შეკითხვის ტექსტის შექმნა
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = quizItem.question;
        questionDiv.appendChild(questionTitle);
        
        // პასუხების კონტეინერის შექმნა
        const answersDiv = document.createElement('div');
        answersDiv.className = 'answers';
        
        // თითოეული პასუხის ღილაკის შექმნა
        quizItem.answers.forEach((answer, answerIndex) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-btn';
            answerBtn.textContent = answer.text;
            
            // Click ივენთის დამატება
            answerBtn.addEventListener('click', function() {
                checkAnswer(this, answer.correct, questionDiv, questionIndex);
            });
            
            answersDiv.appendChild(answerBtn);
        });
        
        questionDiv.appendChild(answersDiv);
        quizContainer.appendChild(questionDiv);
    });
    
    console.log('✅ Quiz წარმატებით შეიქმნა!');
}

// პასუხის შემოწმება
function checkAnswer(button, isCorrect, questionDiv, questionIndex) {
    // გავაუქმოთ ამ შეკითხვის ყველა ღილაკი
    const allButtons = questionDiv.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
    });
    
    if (isCorrect) {
        // სწორი პასუხი - გავხადოთ მწვანე
        button.classList.add('correct');
        score++; // ვამატებთ 1 ქულას
        updateScore();
        console.log(`✓ სწორი პასუხი! ქულა: ${score}`);
    } else {
        // არასწორი პასუხი - გავხადოთ წითელი
        button.classList.add('incorrect');
        console.log(`✗ არასწორი პასუხი. ქულა უცვლელი: ${score}`);
        
        // აჩვენოთ სწორი პასუხი მწვანედ
        const correctAnswer = quizData[questionIndex].answers.find(a => a.correct);
        allButtons.forEach(btn => {
            if (btn.textContent === correctAnswer.text) {
                btn.classList.add('correct');
            }
        });
    }
}

// ქულების განახლება
function updateScore() {
    scoreDisplay.textContent = score;
    
    // ანიმაცია ქულის შეცვლისას
    scoreDisplay.style.transform = 'scale(1.3)';
    setTimeout(() => {
        scoreDisplay.style.transform = 'scale(1)';
    }, 200);
}

// Quiz-ის გაშვება
createQuiz();

console.log('🎮 Quiz თამაში ჩატვირთულია!');
console.log('📊 სულ შეკითხვები:', quizData.length);

