"use strict";

//Это у нас получается коллекция клеток
const cage_player = document.getElementsByClassName("cage");
const player_1_start_game = document.querySelector(".player_place_1");
const player_2_start_game = document.querySelector(".player_place_2");
const button_start_new = document.getElementById("again_play_new");
const button_start_continue = document.getElementById("again_play_continue");
const text_information = document.getElementById("text_information");
const text_victory_1 = document.getElementById("text_victory_1");
const text_victory_2 = document.getElementById("text_victory_2");
const svg = document.querySelectorAll(".svg_class");
/*
const first_line_min = document.querySelector("first_line_min ");
const second_line_min = document.querySelector("second_line_min ");
const first_line_max = document.querySelector("first_line_max ");
const second_line_max = document.querySelector("second_line_max ");
const first_line_max_1 = document.querySelector("first_line_max_1 ");
const second_line_max_1 = document.querySelector("second_line_max_1 ");
const first_line_max_2 = document.querySelector("first_line_max_2 ");
const second_line_max_2 = document.querySelector("second_line_max_2 ");
*/

let activePlayer = 1;
let arrMain = [];
let victoryArr = [0,0];
let arr_1, arr_2, arr_3, arr_4, arr_5, arr_6, arr_7, arr_8;


for (let i = 0; i < cage_player.length; i++) {
  arrMain[i] = 0;

  cage_player[i].addEventListener("click", function () { //баблинг
    if (activePlayer === 1 && arrMain[i] !== 1 && arrMain[i] !== 10) {
      arrMain[i] = 1;
      player_2_start_game.classList.remove("player_place_active");
      player_1_start_game.classList.add("player_place_active");
      cage_player[i].innerHTML = `<svg class = "svg_class" width="100" height="100">
                <line
                  class="first_line_max"
                  x1="5"
                  y1="5"
                  x2="95"
                  y2="95"
                  stroke-width="8"
                  stroke="red"
                  stroke-linecap="round"
                />          
                <line
                  class="second_line_max"
                  x1="95"
                  y1="5"
                  x2="5"
                  y2="95"
                  stroke-width="8"
                  stroke="red"
                  stroke-linecap="round"
                />

                                <line
                  class="first_line_max_1"
                  x1="4"
                  y1="4"
                  x2="76"
                  y2="76"
                  stroke-width="7"
                  stroke="red"
                  stroke-linecap="round"
                />          
                <line
                  class="second_line_max_1"
                  x1="76"
                  y1="4"
                  x2="4"
                  y2="76"
                  stroke-width="7"
                  stroke="red"
                  stroke-linecap="round"
                />

                                <line
                  class="first_line_max_2"
                  x1="5"
                  y1="5"
                  x2="55"
                  y2="55"
                  stroke-width="6"
                  stroke="red"
                  stroke-linecap="round"
                />          
                <line
                  class="second_line_max_2"
                  x1="55"
                  y1="5"
                  x2="5"
                  y2="55"
                  stroke-width="6"
                  stroke="red"
                  stroke-linecap="round"
                />

                      <line
                  class="first_line_min"
                  x1="2"
                  y1="2"
                  x2="48"
                  y2="48"
                  stroke-width="5"
                  stroke="red"
                  stroke-linecap="round"
                />          
                <line
                  class="second_line_min"
                  x1="48"
                  y1="2"
                  x2="2"
                  y2="48"
                  stroke-width="5"
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
      cage_player[i].innerHTML = `<svg class = "svg_class" width="100" height="100">
                <circle
                  class="circle"
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="blue"
                  stroke-width="8"
                  fill="none"
                />
                       <circle
                  class="circle_1"
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="blue"
                  stroke-width="7"
                  fill="none"
                />
                     <circle
                  class="circle_2"
                  cx="30"
                  cy="30"
                  r="27"
                  stroke="blue"
                  stroke-width="6"
                  fill="none"
                />

               <circle
                  class="circle_3"
                  cx="25"
                  cy="25"
                  r="22"
                  stroke="blue"
                  stroke-width="5"
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
      victoryArr[0]+=1;
    for(let i = 0; i < arrMain.length; i++){
      if(arrMain[i]===0||arrMain[i]===10){
        cage_player[i].classList.add("delete_cage");
      }
      text_victory_1.textContent=victoryArr[0];
    }
   

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
      victoryArr[1]+=1;
      for(let i = 0; i < arrMain.length; i++){
      if(arrMain[i]===0||arrMain[i]===1){
      cage_player[i].classList.add("delete_cage");
      }
      text_victory_2.textContent=victoryArr[1];
    }
    }

  });


}//цикл

button_start_new.addEventListener("click", function(){
 for (let i = 0; i < cage_player.length; i++) {
 cage_player[i].classList.remove("delete_cage");
 arrMain[i] = 0;
 cage_player[i].innerHTML='';
  }
  victoryArr =[0,0];
  text_victory_1.textContent=victoryArr[0];
  text_victory_2.textContent=victoryArr[1];
  activePlayer = 1;
  player_1_start_game.classList.remove("player_place_active");
  player_2_start_game.classList.remove("player_place_active");
  text_information.textContent = "Игра";
});




button_start_continue.addEventListener('click',function(){
  for (let i = 0; i < cage_player.length; i++) {
 cage_player[i].classList.remove("delete_cage");
 arrMain[i] = 0;
 cage_player[i].innerHTML='';
  }
  activePlayer = 1;
  player_1_start_game.classList.remove("player_place_active");
  player_2_start_game.classList.remove("player_place_active");
  text_information.textContent = "Игра";
})