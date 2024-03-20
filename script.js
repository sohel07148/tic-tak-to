
console.log("Welcome to Tic Tac Toe");
let turn = "X";
let gameover = false

// function to change turn
function changeTurn() {
    return turn === "X" ? "O" : "X";
}


// function to win
const checkWin = () => {
    let boxtext =document.getElementsByClassName('boxtext');
    let wins = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
         (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
          (boxtext[e[0]].innerText !== ""))
          { 
        setTimeout( function ( ) { alert(boxtext[e[0]].innerText + " WINNER" ); }, 100 );
            gameover = true
        }
       
        
    })
    
} 


// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            
            if (!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})


// reset btn
reset.addEventListener('click',  ()=>{
    let boxtexts =document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X"
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Trun for " + turn;
    document.querySelector('.win').innerText = ""

})
