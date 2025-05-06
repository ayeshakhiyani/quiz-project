const quizQuestions = [
    {
        question: 'Which language runs in a web browser?',
        opt1: 'Java',
        opt2: 'C',
        opt3: 'Python',
        opt4: 'JavaScript',
        correct: 'JavaScript',
    },
    {
        question: 'What does CSS stand for?',
        opt1: 'Central Style Sheets',
        opt2: 'Cascading Style Sheets',
        opt3: 'Cascading Simple Sheets',
        opt4: 'Cars SUVs Sailboats',
        correct: 'Cascading Style Sheets',
    },
    {
        question: 'What does HTML stand for?',
        opt1: 'Hypertext Markup Language',
        opt2: 'Hypertext Markdown Language',
        opt3: 'Hyperloop Machine Language',
        opt4: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'Hypertext Markup Language',
    },
    {
        question: 'What year was JavaScript launched?',
        opt1: '1996',
        opt2: '1995',
        opt3: '1994',
        opt4: 'none of the above',
        correct: '1995',
    },
];

let quizContainer = document.getElementById('quizContainer');
let index = 0;
let nextBtn = document.getElementById('next');
let startBtn = document.getElementById('start');
let score = 0;

document.getElementById('start').addEventListener('click', function () {
    Swal.fire({
        title: '🚀 Ready to begin?',
        text: 'This quiz will test your web development knowledge!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Let\'s Start!',
        cancelButtonText: 'Not Now',
        background: '#1e1e1e',
        color: '#ffffff',
        confirmButtonColor: '#2196F3',
        cancelButtonColor: '#f44336'
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('start').style.display = 'none';
            document.getElementById('quizContainer').style.display = 'block';
            document.getElementById('next').style.display = 'block';
            showQuestion();
        }
    });
});


function showQuestion() {
    if (index === quizQuestions.length) {
        quizContainer.style.display = 'none';
        nextBtn.style.display = 'none';
    
        Swal.fire({
            title: '🎉 Quiz Completed!',
            text: `You scored ${score} out of ${quizQuestions.length}`,
            icon: 'success',
            confirmButtonText: 'Awesome!',
            background: '#1e1e1e',
            color: '#ffffff',
            confirmButtonColor: '#4CAF50'
        });
    }
    else {
        nextBtn.disabled = true;
        let q = quizQuestions[index];
        quizContainer.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <p>${q.question}</p>
            <label><input type="radio" name="options" value="${q.opt1}"> ${q.opt1}</label>
            <label><input type="radio" name="options" value="${q.opt2}"> ${q.opt2}</label>
            <label><input type="radio" name="options" value="${q.opt3}"> ${q.opt3}</label>
            <label><input type="radio" name="options" value="${q.opt4}"> ${q.opt4}</label>
        `;

        document.querySelectorAll('input[name="options"]').forEach(option => {
            option.addEventListener('change', () => {
                nextBtn.disabled = false;
            });
        });
    }
}

nextBtn.addEventListener('click', () => {
    let selected = document.querySelector('input[name="options"]:checked');
    if (selected && selected.value === quizQuestions[index].correct) {
        score++;
    }
    index++;
    showQuestion();
});

