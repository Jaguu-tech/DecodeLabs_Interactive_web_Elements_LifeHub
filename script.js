function updateDateTime() {
    const now = new Date();
    document.getElementById("current-date").textContent =
        now.toDateString();
    document.getElementById("current-time").textContent =
        now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
const themeToggle =
    document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

let time = 1500;
let timer;
const timerDisplay =
    document.getElementById("timer");
function updateTimer() {
    let minutes =
        Math.floor(time / 60);
    let seconds =
        time % 60;
    timerDisplay.textContent =
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

document.getElementById("startTimer")
    .addEventListener("click", () => {
        clearInterval(timer);
        timer = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimer();
            } else {
                clearInterval(timer);
                alert("🎉 Study Session Complete!");
            }
        }, 1000);
    });

document.getElementById("pauseTimer")
    .addEventListener("click", () => {
        clearInterval(timer);
    });

document.getElementById("resetTimer")
    .addEventListener("click", () => {
        clearInterval(timer);
        time = 1500;
        updateTimer();
    });

updateTimer();
const quotes = [
    "Success starts with consistency.",
    "Dream big. Start small. Act now.",
    "Your future is created by what you do today.",
    "Discipline beats motivation.",
    "Small progress is still progress.",
    "Focus on your goals, not obstacles.",
    "Every expert was once a beginner."
];

document.getElementById("newQuote")
    .addEventListener("click", () => {
        const random =
            Math.floor(Math.random() * quotes.length);
        document.getElementById("quote")
            .textContent = quotes[random];
    });

let subjects = [];
document.getElementById("addSubject")
    .addEventListener("click", () => {
        const subject =
            document.getElementById("subjectName").value;
        const marks =
            Number(document.getElementById("subjectMarks").value);
        if (subject === "" || marks === "") {
            alert("Please fill all fields");
            return;
        }

        subjects.push({
            subject,
            marks
        });
        renderSubjects();
    });

function renderSubjects() {
    const list =
        document.getElementById("subjectList");
    list.innerHTML = "";
    let total = 0;
    subjects.forEach(item => {
        total += item.marks;
        const li =
            document.createElement("li");
        li.textContent =
            `${item.subject} - ${item.marks}`;
        list.appendChild(li);
    });

    const percentage =
        (total / subjects.length).toFixed(2);
    document.getElementById("percentage")
        .textContent = percentage + "%";
}

document.getElementById("calculateTravel")
    .addEventListener("click", () => {

        const budget =
            Number(document.getElementById("travelBudget").value);

        const expense =
            Number(document.getElementById("travelExpense").value);

        const remaining =
            budget - expense;
        document.getElementById("remainingBudget")
            .textContent = remaining;
    });

const moodHistory =
    document.getElementById("moodHistory");
let moods =
    JSON.parse(localStorage.getItem("moods")) || [];
renderMood();

document.getElementById("saveMood")
    .addEventListener("click", () => {
        const mood =
            document.getElementById("moodSelect").value;

        const note =
            document.getElementById("moodNote").value;

        if (note === "") return;
        moods.push({
            mood,
            note
        });

        localStorage.setItem(
            "moods",
            JSON.stringify(moods)
        );
        renderMood();
        document.getElementById("moodNote").value = "";
    });

function renderMood() {
    moodHistory.innerHTML = "";
    moods.forEach(entry => {
        const div =
            document.createElement("div");
        div.classList.add("mood-entry");
        div.innerHTML =
            `<strong>${entry.mood}</strong><br>
    ${entry.note}`;
        moodHistory.appendChild(div);
    });
}

let balance = 0;
document.getElementById("addFinance")
    .addEventListener("click", () => {

        const income =
            Number(document.getElementById("income").value);

        const expense =
            Number(document.getElementById("expense").value);

        balance += income - expense;
        document.getElementById("balance")
            .textContent = balance;
        const list =
            document.getElementById("transactionList");
        const li =
            document.createElement("li");

        li.textContent =
            `Income: ₹${income} | Expense: ₹${expense}`;

        list.appendChild(li);
        document.getElementById("income").value = "";
        document.getElementById("expense").value = "";
    });

let goals =
JSON.parse(localStorage.getItem("goals")) || [];
const goalList =
document.getElementById("goalList");
function renderGoals(){
goalList.innerHTML="";
goals.forEach((goal,index)=>{

    const li =
    document.createElement("li");
    li.innerHTML=`${goal}
    <button onclick="completeGoal(${index})">✅</button>
    <button onclick="deleteGoal(${index})">❌</button>
    `;
    goalList.appendChild(li);
});

}

document.getElementById("addGoal")
.addEventListener("click",()=>{
const goalInput =
document.getElementById("goalInput");
if(goalInput.value==="") return;
goals.push(goalInput.value);
localStorage.setItem(
    "goals",
    JSON.stringify(goals)
);
goalInput.value="";
renderGoals();
});

function deleteGoal(index){
goals.splice(index,1);
localStorage.setItem(
    "goals",
    JSON.stringify(goals)
);
renderGoals();
}

function completeGoal(index){
const achievements =
document.getElementById("achievementList");
const badge =
document.createElement("li");
badge.textContent =
"🏅 Goal Completed";
achievements.appendChild(badge);
deleteGoal(index);
}
renderGoals();

document.getElementById("calculateCgpa")
.addEventListener("click",()=>{
const sgpa1 =
Number(document.getElementById("sgpa1").value);
const sgpa2 =
Number(document.getElementById("sgpa2").value);
const sgpa3 =
Number(document.getElementById("sgpa3").value);
const cgpa =
((sgpa1+sgpa2+sgpa3)/3)
.toFixed(2);
document.getElementById("cgpaResult")
.textContent=cgpa;

});

const notesArea =
document.getElementById("notesArea");
notesArea.value =
localStorage.getItem("notes") || "";
document.getElementById("saveNotes")
.addEventListener("click",()=>{
localStorage.setItem(
    "notes",
    notesArea.value
);
alert("Notes Saved!");

});

let water =
Number(localStorage.getItem("water")) || 0;
const waterCount =
document.getElementById("waterCount");
waterCount.textContent=water;
document.getElementById("addWater")
.addEventListener("click",()=>{
if(water<8){

    water++;

    waterCount.textContent=water;

    localStorage.setItem(
        "water",
        water
    );
}

if(water===8){

    const badge =
    document.createElement("li");

    badge.textContent =
    "💧 Hydration Master";

    document.getElementById(
        "achievementList"
    ).appendChild(badge);
}
});

let progress = 0;
document.getElementById("resetTimer")
.addEventListener("click",()=>{
if(progress<100){
    progress += 10;
    document.getElementById(
        "studyProgress"
    ).style.width =
    progress + "%";

    document.getElementById(
        "progressText"
    ).textContent =
    "Study Progress: " +
    progress + "%";
}

});

let totalIncome = 0;
let totalExpense = 0;
document.getElementById("addFinance")
.addEventListener("click",()=>{
const income =
Number(document.getElementById("income").value);

const expense =
Number(document.getElementById("expense").value);

totalIncome += income;
totalExpense += expense;

document.getElementById(
    "totalIncome"
).textContent =
totalIncome;

document.getElementById(
    "totalExpense"
).textContent =
totalExpense;
});

document.getElementById("weatherBtn")
.addEventListener("click",()=>{

const city =
document.getElementById("cityInput").value;

const weatherResult =
document.getElementById("weatherResult");

if(city===""){
    weatherResult.textContent =
    "Enter a city";
    return;
}

const weather = [
    "☀️ Sunny 32°C",
    "🌧 Rainy 25°C",
    "⛅ Cloudy 28°C",
    "🌩 Stormy 24°C"
];

const random =
Math.floor(
    Math.random()*weather.length
);

weatherResult.textContent =
city + " - " +
weather[random];
});