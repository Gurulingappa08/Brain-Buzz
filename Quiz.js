document.addEventListener("DOMContentLoaded", function () {
  let topicName = localStorage.getItem("selectedTopic") || "Unknown Topic";

  const quizContainer = document.getElementById("quizContainer");
  const topicHeading = document.getElementById("topicName");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");
  const timerProgress = document.getElementById("timerProgress");

  topicHeading.textContent = `Topic: ${topicName}`;

  const questionsData = {
    "Science": [
      {q:"What planet is known as the Red Planet?", options:[,"Venus", "Mars","Jupiter","Saturn"], answer:"Mars"},
      {q:"Water's chemical formula?", options:[,"CO2","O2", "H2O","NaCl"], answer:"H2O"},
      {q:"Gas essential for breathing?", options:["Hydrogen","Nitrogen","Helium","Oxygen"], answer:"Oxygen"},
      {q:"Largest organ in the human body?", options:["Heart", "Skin","Liver","Brain"], answer:"Skin"},
      {q:"Force that pulls objects to Earth?", options:["Magnetism","Friction","Gravity","Pressure"], answer:"Gravity"}
    ],
    "General Knowledge": [
      {q:"Capital of Karnataka?", options:["Kalaburagi","Mandya","Bengaluru","Mysuru"], answer:"Bengaluru"},
      {q:"Who wrote 'Bhagavad Gita'?", options:["Krishna","Ved Vyas","Ram","Kuvempu"], answer:"Ved Vyas"},
      {q:"Fastest land animal?", options:["Cheetah","Lion","Tiger","Horse"], answer:"Cheetah"},
      {q:"Largest ocean?", options:["Pacific","Atlantic","Indian","Arctic"], answer:"Pacific"},
      {q:"Which country hosted 2020 Olympics?", options:["Japan","China","USA","Brazil"], answer:"Japan"}
    ],
    "Data Structure": [
      {q:"FIFO stands for?", options:["First In First Out","Fast Input Fast Output","First Index First Out","First In Final Out"], answer:"First In First Out"},
      {q:"DS for LIFO?", options:["Stack","Queue","Array","Linked List"], answer:"Stack"},
      {q:"Which is non-linear DS?", options:["Tree","Array","Queue","Stack"], answer:"Tree"},
      {q:"Binary tree max children?", options:["2","3","4","1"], answer:"2"},
      {q:"DS for priority items?", options:["Priority Queue","Stack","Queue","Graph"], answer:"Priority Queue"}
    ],
    "Operating System": [
      {q:"OS is software?", options:["True","False"], answer:"True"},
      {q:"Windows is an example of?", options:[,"Compiler", "OS","IDE","Database"], answer:"OS"},
      {q:"Process in OS?", options:[,"Data file", "Program in execution","Network","Command"], answer:"Program in execution"},
      {q:"Multitasking means?", options:["Single task","Multiple users","Single user","Multiple tasks simultaneously"], answer:"Multiple tasks simultaneously"},
      {q:"Which OS is open-source?", options:["Linux","Windows","MacOS","iOS"], answer:"Linux"}
    ],
    "Database": [
      {q:"DBMS stands for?", options:["Database Management System","Data Basic Management System","Database Machine System","Data Binary Management System"], answer:"Database Management System"},
      {q:"SQL used for?", options:["Web design","Networking", "Querying DB","Programming"], answer:"Querying DB"},
      {q:"Primary key is?", options:["Non-unique","Duplicate", "Unique identifier","Index"], answer:"Unique identifier"},
      {q:"Which is relational DB?", options:["MySQL","MongoDB","Cassandra","Neo4j"], answer:"MySQL"},
      {q:"DDL stands for?", options:["Data Direct Language","Data Definition Language","Database Design Language","Data Development Language"], answer:"Data Definition Language"}
    ]
  };

  let questions = questionsData[topicName];
  let currentIndex = 0;
  let score = 0;
  let timeLeft = 10;
  let timer;

  function startQuiz() {
    currentIndex = 0;
    score = 0;
    showQuestion();
  }

  function showQuestion() {
    if(currentIndex >= questions.length){
      showResult();
      return;
    }

    const q = questions[currentIndex];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => checkAnswer(option, q.answer, btn));
      optionsEl.appendChild(btn);
    });

    // Timer bar
    timeLeft = 10;
    timerProgress.style.width = "100%";
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      timerProgress.style.width = (timeLeft/10*100) + "%";

      if(timeLeft <= 0){
        clearInterval(timer);
        feedbackEl.textContent = `Time's up! Correct answer: ${q.answer}`;
        disableOptions();
        nextBtn.style.display = "inline-block";
      }
    }, 1000);
  }

  function checkAnswer(selected, correct, btn) {
    clearInterval(timer);
    if(selected === correct){
      feedbackEl.textContent = "Correct!";
      score++;
      btn.style.backgroundColor = "green";
    } else {
      feedbackEl.textContent = `Wrong! Correct answer: ${correct}`;
      btn.style.backgroundColor = "red";
    }
    disableOptions();
    nextBtn.style.display = "inline-block";
  }

  function disableOptions(){
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
  }

  function showResult(){
    quizContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} / ${questions.length}</p>
      <button id="restartBtn">Restart Quiz</button>
      <button id="exitBtn">Exit to Home</button>
    `;
    document.getElementById("restartBtn").addEventListener("click", startQuiz);
    document.getElementById("exitBtn").addEventListener("click", () => window.location.href="Topic.html");
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    showQuestion();
  });

  startQuiz();
});
