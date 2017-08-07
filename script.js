/*var player1= prompt("Player 1 your name is?");
document.getElementById('name-1').textContent = player1;
var player2= prompt("Player 2 your name is?");
document.getElementById('name-2').textContent = player2;*/

var scores, roundScore, activePlayer;
init();


document.querySelector('.roll-dice').addEventListener('click', function(){
    dice = Math.floor(Math.random()*6)+1;

    var diceDOM = document.querySelector('.dice-img');
    diceDOM.style.display = 'block';

    setTimeout(function(){
        diceDOM.src = 'dice-' + dice + '.png';
    },500);
    
    
    if(dice !== 1){
        roundScore+= dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
        
        
    }
});

document.querySelector('.hold-dice').addEventListener('click', function(){

    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 10){
        document.querySelector('.dice-img').style.display ='none';
        document.querySelector('.display-text').textContent = "Player " + activePlayer + " Won!";
        document.querySelector('.display-text').style.display='block';
        document.querySelector(".roll-dice").style.display = 'none';
        document.querySelector(".hold-dice").style.display = 'none';
        
    } else {
        nextPlayer();
    };
    

});

function nextPlayer() {
    activePlayer ===1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('name-1').classList.toggle('active');
    document.getElementById('name-2').classList.toggle('active');
    setTimeout(function(){
        document.querySelector('.dice-img').style.display ='none';
    },1000);
};

document.querySelector('.new-game').addEventListener('click',init);

function init(){
    scores = [0,0,0];
    roundScore = 0;
    activePlayer = 1;
    document.querySelector('.dice-img').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';
    document.querySelector(".roll-dice").disabled = false;
    document.querySelector(".hold-dice").disabled = false;
    document.querySelector('.display-text').style.display='none';
    document.querySelector(".roll-dice").style.display = 'block';
    document.querySelector(".hold-dice").style.display = 'block';
    document.getElementById('name-1').classList.remove('active');
    document.getElementById('name-2').classList.remove('active');
    document.getElementById('name-1').classList.add('active');
};