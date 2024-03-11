const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function userChoice(user) {
    const computer = computerChoice();
    displayChoice('user', user);
    displayChoice('computer', computer);
    displayResult(user, computer);
}

function displayChoice(player, choice) {
    const imageElement = document.getElementById(`${player}Image`);
    if (choice==='rock'){
    imageElement.innerHTML = `<img src="https://github.com/Kalvium-Program/rock-paper-scissors-boilerplate/blob/main/assets/rock-hand.png?raw=true">`;}
    if (choice==='paper'){
    imageElement.innerHTML = `<img src="https://github.com/Kalvium-Program/rock-paper-scissors-boilerplate/blob/main/assets/paper-hand.png?raw=true">`;}
    if (choice==='scissors'){
    imageElement.innerHTML = `<img src="https://github.com/Kalvium-Program/rock-paper-scissors-boilerplate/blob/main/assets/scissors-hand.png?raw=true">`;}
}
var player1score=document.getElementById('player1scores')
var player2score=document.getElementById('player2scores')
var player1scores=0
var player2scores=0
function displayResult(user, computer) {
    const resultElement = document.getElementById('result');
    if (user === computer) {
        resultElement.textContent = 'It\'s a tie!';
    } else if ((user === 'rock' && computer === 'scissors') ||
               (user === 'paper' && computer === 'rock') ||
               (user === 'scissors' && computer === 'paper')) {
        resultElement.textContent = 'You win!';
        player1scores=player1scores+1;
        player1score.textContent=player1scores;
    } else {
        resultElement.textContent = 'Computer wins!';
        player2scores=player2scores+1;
        player2score.textContent=player2scores;
    }
}


var resetButton=document.getElementById('restart')
function resetGame(){
window.location.reload()
}
resetButton.addEventListener("click",function(){
resetGame()    
})
