'use strict';


//Это у нас получается коллекция клеток
const cage_player = document.getElementsByClassName('cage');
const player_1_start_game = document.querySelector('.player_place_1');
const player_2_start_game = document.querySelector('.player_place_2');
const button_start = document.querySelector(".button_start_game");
let activePlayer = 1;
let arrMain = [];

let arr_1,arr_2,arr_3,arr_4,arr_5,arr_6,arr_7,arr_8;





for(let i=0; i<cage_player.length;i++){
arrMain[i]=2;


cage_player[i].addEventListener("click", function(){

if(activePlayer === 1&&arrMain[i]!==1&&arrMain[i]!==0){
arrMain[i]=1;
player_2_start_game.classList.remove('player_place_active'); 
player_1_start_game.classList.add('player_place_active');
cage_player[i].style.backgroundColor = "red";
activePlayer = activePlayer + 1;
}
if( activePlayer === 2&&arrMain[i]!==1&&arrMain[i]!==0) {
arrMain[i]=0;  
player_1_start_game.classList.remove('player_place_active');   
player_2_start_game.classList.add('player_place_active');
cage_player[i].style.backgroundColor = "black";
activePlayer = activePlayer - 1;
}
});



}

button_start.addEventListener('click', function(){

arr_1=arrMain[0] + arrMain[1] + arrMain[2];
arr_2=arrMain[3] + arrMain[4] + arrMain[5];
arr_3=arrMain[6] + arrMain[7] + arrMain[8];
arr_4=arrMain[0] + arrMain[3] + arrMain[6];
arr_5=arrMain[1] + arrMain[4] + arrMain[7];
arr_6=arrMain[2] + arrMain[5] + arrMain[8];
arr_7=arrMain[0] + arrMain[4] + arrMain[8];
arr_8=arrMain[6] + arrMain[4] + arrMain[2];  
    console.log(arrMain);
    console.log(arr_1);
    console.log(arr_1===3);
    console.log(arrMain[0] + arrMain[1] + arrMain[2]); 

})