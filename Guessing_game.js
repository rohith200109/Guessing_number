let userText = document.getElementById("userInput");
let gameResult1 = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random()*100);

function checkGuess(){
    
    if(guessNumber>randomNumber && guessNumber<=100){
        gameResult1.textContent="Too High ! Try Again"
        gameResult1.style.backgroundColor ="#1e217c";
        gameResult1.style.fontSize="90px";
        gameResult1.style.color="#ffff55"
    }
    else if(guessNumber<randomNumber && guessNumber<=100){
        gameResult1.textContent="Too Low ! Try Again"
        gameResult1.style.backgroundColor ="#1e217c";
        gameResult1.style.fontSize="90px";
        gameResult1.style.color="#ffff55"
    }
    else if(guessNumber==randomNumber){
        gameResult1.textContent="Congratulations ! You WON"
        gameResult1.style.backgroundColor ="green";
        gameResult1.style.fontSize="130px";
        gameResult1.style.color="#ffff55"
    }
    else{
        gameResult1.textContent="Enter Valid Number"
        gameResult1.style.backgroundColor ="red";
        gameResult1.style.fontSize="100px";
        gameResult1.style.color="#ffff55"
    }
}
