const createGame = () => {
  const app = document.querySelector("#app");
  const range = document.createRange();

  const rulesToggle = document.querySelector("#rules-toggle");
  const rulesClose = document.querySelector("#rules-close");
  const rules = document.querySelector("#rules");

  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSORS = "Scissors";
  const LIZARD = "Lizard";
  const SPOCK = "Spock";

  const turns = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];

  const toObj = (entries) => {
    return entries.reduce((acc, entry) => {
      acc[entry] = true;
      return acc;
    }, {});
  };

  const table = {
    [ROCK]: {
      beats: toObj([LIZARD, SCISSORS]),
    },
    [PAPER]: {
      beats: toObj([SPOCK, ROCK]),
    },
    [SCISSORS]: {
      beats: toObj([PAPER, LIZARD]),
    },
    [LIZARD]: {
      beats: toObj([PAPER, SPOCK]),
    },
    [SPOCK]: {
      beats: toObj([SCISSORS, ROCK]),
    },
  };

  const win = (userTurn, houseTurn) => {
    return table[userTurn].beats[houseTurn];
  };

  const buttonTemplate = ({ userSelection, houseSelection, userWon }) => {
    const message = userWon ? "YOU WIN" : "YOU LOSE";
    let template = `<div class="flex flex-row-l flex-column justify-around items-center pa4-l w-100 h-100">
    <div class="flex flex-column items-center justify-center w-33-l tc">
    <p class="f2 white b">You Picked</p>
    <button class="game-button" id=${userSelection}></button>
    </div>
    <div class="flex flex-column-l flex-row items-center justify-center w-33-l appear-4">
        <p class="f2 white b ma2">${message}</p>
        <a class="bg-white pa4 no-underline gray br4 b tc grow" href=".">Play Again</a>
    </div>
    <div class="flex flex-column items-center justify-center w-33-l tc appear">
        <p class="f2 white b">The House Picked</p>
        <button class="game-button" id=${houseSelection}></button>
    </div>
    </div>`;
    return template;
  };

  const onPlay = (ev) => {
    const userSelection = ev.target.dataset.value;
    let houseSelection = userSelection;
    while (houseSelection === userSelection) {
      houseSelection = turns[Math.floor(Math.random() * turns.length)];
    }

    app.innerHTML = "";

    const userWon = win(userSelection, houseSelection);

    app.appendChild(
      range.createContextualFragment(
        buttonTemplate({ userSelection, houseSelection, userWon })
      )
    );
  };

  const toggleRules = () => {
    rules.classList.toggle("dn");
  };

  document
    .querySelectorAll(".game-button")
    .forEach((button) => button.addEventListener("click", onPlay));

  rulesToggle.addEventListener("click", toggleRules);
  rulesClose.addEventListener("click", toggleRules);
};

createGame();
