"use strict";

//Это у нас получается коллекция клеток
const cage_player = document.getElementsByClassName("cage");
const player_1_start_game = document.querySelector(".player_place_1");
const player_2_start_game = document.querySelector(".player_place_2");
const button_start = document.querySelector(".button_start_game");
const text_information = document.getElementById("text_information");
let activePlayer = 1;
let arrMain = [];

let arr_1, arr_2, arr_3, arr_4, arr_5, arr_6, arr_7, arr_8;

for (let i = 0; i < cage_player.length; i++) {
  arrMain[i] = 0;

  cage_player[i].addEventListener("click", function () {
    if (activePlayer === 1 && arrMain[i] !== 1 && arrMain[i] !== 10) {
      arrMain[i] = 1;
      player_2_start_game.classList.remove("player_place_active");
      player_1_start_game.classList.add("player_place_active");
      cage_player[i].innerHTML = `<svg>
                <line
                  class="first_line"
                  x1="2"
                  y1="2"
                  x2="48"
                  y2="48"
                  stroke-width="4"
                  stroke="red"
                  stroke-linecap="round"
                />
                <line
                  class="second_line"
                  x1="48"
                  y1="2"
                  x2="2"
                  y2="48"
                  stroke-width="4"
                  stroke="red"
                  stroke-linecap="round"
                />
              </svg>`;
      activePlayer = activePlayer + 1;
    }
    if (activePlayer === 2 && arrMain[i] !== 1 && arrMain[i] !== 10) {
      arrMain[i] = 10;
      player_1_start_game.classList.remove("player_place_active");
      player_2_start_game.classList.add("player_place_active");
      cage_player[i].innerHTML = `<svg>
                <circle
                  class="circle"
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="blue"
                  stroke-width="4"
                  fill="none"
                />
              </svg>`;
      activePlayer = activePlayer - 1;
    }

    arr_1 = arrMain[0] + arrMain[1] + arrMain[2];
    arr_2 = arrMain[3] + arrMain[4] + arrMain[5];
    arr_3 = arrMain[6] + arrMain[7] + arrMain[8];
    arr_4 = arrMain[0] + arrMain[3] + arrMain[6];
    arr_5 = arrMain[1] + arrMain[4] + arrMain[7];
    arr_6 = arrMain[2] + arrMain[5] + arrMain[8];
    arr_7 = arrMain[0] + arrMain[4] + arrMain[8];
    arr_8 = arrMain[6] + arrMain[4] + arrMain[2];

    if (
      arr_1 === 3 ||
      arr_2 === 3 ||
      arr_3 === 3 ||
      arr_4 === 3 ||
      arr_5 === 3 ||
      arr_6 === 3 ||
      arr_7 === 3 ||
      arr_8 === 3
    ) {
      text_information.textContent = "Победа Красных";
      activePlayer = 3;
    } else if (
      arr_1 === 30 ||
      arr_2 === 30 ||
      arr_3 === 30 ||
      arr_4 === 30 ||
      arr_5 === 30 ||
      arr_6 === 30 ||
      arr_7 === 30 ||
      arr_8 === 30
    ) {
      text_information.textContent = "Победа Черных";
      activePlayer = 3;
    }
  });
}
