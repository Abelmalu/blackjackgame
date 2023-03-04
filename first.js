


let hasBlackJack=false;
let cards=[];
let sum=0;
let isAlive=false;
let message='';
let display;
let player={
    name:'abel',
    chips:"$500"
}
document.getElementById('player-el').textContent=player.name+':'+player.chips;

function startGame(){
     isAlive=true;
     let firstCard,secondCard;
     firstCard=getRandom();
secondCard=getRandom();
 cards=[firstCard,secondCard];
 sum=firstCard+secondCard;
    renderGame();
    
}

function renderGame(){
    let check=true;

    document.getElementById('sum-el').textContent='sum: '+sum;
    // document.getElementById('cards-el').textContent='cards: '+cards[0]+'- '+cards[1]+'- '+cards[2]+'- '+cards[3];
    let disCards=document.getElementById('cards-el');
    
for(let i=0; i<cards.length; i++){
   disCards.textContent+="- "+cards[i];
}
if(sum<21){
  message='do you want to draw a card'
display=document.getElementById('messages-el ');
display.innerHTML='do you want to draw a card';

  
}
else if(sum===21){
message='you got blackjack';
 hasBlackJack=true;
 display=document.getElementById('messages-el ');
 display.innerHTML='you got blackjack';
 
}
else {
   message='you are out of the game'
    isAlive=false;
    display=document.getElementById('messages-el ');
    display.innerHTML='you are out of the game';
 
}
}
function newCard(){
    if(isAlive===true && hasBlackJack==false){
let newc1=getRandom();
// let newc2=getRandom();
sum=newc1+sum;
// firstCard=newc1;
// secondCard=newc2;
cards.pop();

cards.push(newc1);

console.log(cards);
renderGame();

    }
}


let sentence=["hello","my","name","is","abel"]
let temp;
let greeting=document.getElementById('greeting-el');

function getRandom(){

let ran=Math.floor(Math.random()*30);

if(ran===1){
return 11;
}
else if(ran>10 )
{
    return 10;
}
else
return ran;
}



let fruits=['🍎','🍊','🍎','🍎','🍊'];
let wow=document.getElementById('apple-shelf');
let what=document.getElementById('orange-shelf');
function arrFruit(){

for(let i=0; i<fruits.length; i++){

   if(fruits[i]==='🍎')
{
wow.textContent+=fruits[i];

}

else if(fruits[i]==='🍊'){

what.textContent+=fruits[i];

}
}


}
arrFruit();