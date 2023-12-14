
/*class Game {
    buttons;
    winCondition;

    constructor() {
        this.buttons = new Map();
        

        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    async pressButton(button) {

    }
}


setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` + chatText.innerHTML;
  }, 5000);*/





//const playerNameEl = document.querySelector('.player-name');
//playerNameEl.textContent = this.getPlayerName();

//tutorial
  
// Event messages - added with WebSocket funtionality
const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';
var socket;
let gameStarted;

//music
const sounds = [
  { file: 'click1.wav' }
]

var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.

window.onload = function() {
    setGame();
}



function setGame() {
    board = []; //board starts out empty
    currColumns = [5, 5, 5, 5, 5, 5, 5];
    gameStarted = false;

    for (let r = 0; r < rows; r++) { //rows are numbered 0-5
        let row = [];
        for (let c = 0; c < columns; c++) { //columns are numbered 0-6
            // JS
            row.push(' ');
            // HTML
            // <div id="0-0" class="tile"></div>
            let tile = document.createElement("div"); //populate board with 42 tiles - create 24 div elements in html
            tile.id = r.toString() + "-" + c.toString(); //id="rowNumber-colNumber"
            tile.classList.add("tile"); //class called tile
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile); //append tiles to board2 in play.html
        }
        board.push(row); //adds row to javascript board
    }

}

const clickSound = loadSound('click1.wav');

//nirvana
const nirvanaQuestions = ["Who founded Nirvana?", "Where was Nirvana formed?", "What year was Kurt Cobain born?","What is the middle name of Kurt Cobain's only child?", "When was the album Bleach released?", "When was the album Nevermind released?", "When was the album In Utero released?", "What year was Nirvana's last tour?", "Which Nirvana song is featured in the Lost TV episode titled Through the Looking Glass, Part 2?",
 "Which Nirvana song's performances are ranked by its scream?", "In which country is Kurt Cobain thought to have screamed the best during the song Drain You?", "Which Nirvana song has the line 'I don't care what you think unless it is about me'?", "Which Nirvana song was originally titled The Eagle Has Landed?", "What is the longest Nirvana song title?", "Who did Kurt Cobain marry?",
"Which alternative rock band is Courtney Love, Kurt Cobain's wife, in?", "Which Fender guitar did Kurt Cobain design?", "What was the first band Nirvana toured England with?", "Which Nirvana song was featured in the 2022 film The Batman?", "What is the longest Nirvana track?", "Which Nirvana song is named after an element of the periodic table?",
"What is the most popular Nirvana song?", "Which Nirvana song was named after a brand of deodorant?", "Which member of Nirvana is now in the band Foo Fighters?", "Who is my favorite guitarist? (Hint: it's a member of Nirvana)", "Which member of Nirvana was in the movie Bill and Ted Face the Music?", "What is the coolest Nirvana song?", "Did Nirvana play Smells Like Teen Spirit at the 1993 MTV concert Live and Loud?",
"Which Nirvana song on the album Bleach is about a character Kurt Cobain drew?", "Why did Kurt Cobain's hair often look dirty and matted?", "Which member of Nirvana is left-handed?", "Which member of Nirvana was the main singer/songwriter/guitarist?", "Who was Nirvana's longest drummer?", "Who was Nirvana's bassist?", "Who was the tallest member of Nirvana?", "How tall was Kurt Cobain?", "Which Nirvana song title is on the Welcome To Aberdeen city sign?",
"Who wrote the parody song Smells Like Nirvana?"]
const nirvanaAnswers = ["Kurt Cobain and Krist Novoselic", "Aberdeen, Washington", "1967", "Bean", "1989", "1991", "1993", "1994", "Scentless Apprentice",
"Drain You", "France", "Drain You", "Tourette's", "Frances Farmer Will Have Her Revenge On Seattle", "Courtney Love", 
"Hole", "Jag-Stang" ,"L7", "Something in the Way", "Endless, Nameless", "Lithium", 
"Smells Like Teen Spirit", "Smells Like Teen Spirit", "Dave Grohl", "Dave Grohl", "Dave Grohl", "Radio Friendly Unit Shifter", "No", 
"Mr. Moustache", "He cleaned it with a bar of soap", "Kurt Cobain", "Kurt Cobain", "Dave Grohl", "Krist Novoselic", "Krist Novoselic", "5'9", "Come As You Are", 
"Weird Al Yankovic"]

function getRandomInt() {
  let min = 0;
  let max = nirvanaQuestions.length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function updateQuestion(int) {
  //let questionEl = document.getElementById("question");
  //questionEl.innerText = nirvanaQuestions[int];
  const questionEl = document.getElementById("question");
  questionEl.textContent = nirvanaQuestions[int];
}

function updateAnswer(int) {
  //let answerEl = document.getElementById("answer");
  //answerEl.innerText = nirvanaAnswers[int];
  const answerEl = document.getElementById("answer");
  answerEl.textContent = nirvanaAnswers[int];
}

//end nirvana functions/lists, called in setPiece()

let sameRandint;

function setPiece() {
    if (gameOver) {
        return;
    }
    if (!gameStarted) {
      broadcastEvent(getPlayerName(), GameStartEvent, {});
      gameStarted = true;
    }

    clickSound.play();
  

    //get coordinatess of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // figure out which row the current column should be on
    r = currColumns[c]; 

    if (r < 0) { // board[r][c] != ' '
        return;
    }

    board[r][c] = currPlayer; //update JS board
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    let randint = getRandomInt() //check this
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
        updateQuestion(randint); //check this statement //added ;
        sameRandint = randint
        const answerEl = document.getElementById("answer");
        answerEl.textContent = "--";
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
        updateAnswer(sameRandint); //check this statement // added semicolon
    }

    r -= 1; //update the row height for that column
    currColumns[c] = r; //update the array

    checkWinner();
}

function checkWinner() {
     // horizontal
     for (let r = 0; r < rows; r++) {
         for (let c = 0; c < columns - 3; c++){
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
         }
    }

    // vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // anti diagonal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // diagonal
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = "Red Wins";
        //const score = "red wins"             
    } else {
        winner.innerText = "Yellow Wins";
        //gameOver = true;
        //const score = "yellow wins"
    }
    score = winner.innerText
    updateScore(score)
    saveScore(score)
    updateScoresLocal(score)
    gameOver = true;
    //saveScore(score); //check this stuff
    //updateScores(username, score, scores); //check this stuff
}


/*setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Ahsoka</span> scored ${score}</div>` + chatText.innerHTML;
  }, 5000);*/

const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = this.getPlayerName();

configureWebSocket();




function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

  /*saveScore(score) {
    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
  }*/



function updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
  }

async function saveScore(score) {
    const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Let other players know the game has concluded
      this.broadcastEvent(userName, GameEndEvent, newScore); // added with webSocketFunctionality

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newScore);
    }
  }

  function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  // Functionality for peer communication using WebSocket - add 'function' to beginning of function declaration

  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    socket.onclose = (event) => {
      displayMsg('system', 'game', 'disconnected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        displayMsg('player', msg.from, `started a new game`);
      }
      else {
        displayMsg('player', msg.from, 'has no idea what he is doing');
      }
    }
    // Let other players know a new game has started - added with WebSocket functionality
    //broadcastEvent(this.getPlayerName(), GameStartEvent, {});
  }

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }




// Work around Safari's rule to only play sounds if given permission.
async function playClick(volume = 1.0) {
  clickSound.volume = volume;
  await new Promise((resolve) => {
    clickSound.onended = resolve;
    clickSound.play();
  });
}

function loadSound(filename) {
  return new Audio('assets/' + filename);
}



/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */

