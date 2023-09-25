const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('score');
const thename = localStorage.getItem('username');
const again = document.getElementById("aggain");
const out = document.getElementById("logout");
const usernameee=document.getElementById("usernamee");

out.addEventListener("click",log);

function log(){
    localStorage.removeItem("username");
}

again.addEventListener("click",reset);
let count = 0;

function reset(){

    localStorage.removeItem("score");
}

finalScore.innerText = mostRecentScore;
usernameee.innerText = thename;

