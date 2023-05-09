const ANIMALS_CONFIG = [
  {
    name: "Elephant",
    imageFileName: 'elephant.png'
  },
  {
    name: "fox",
    imageFileName: 'fox.png'
  },
  {
    name: "lion",
    imageFileName: 'lion.png'
  },
  {
    name: "raccoon",
    imageFileName: 'raccoon.png'
  },
  {
    name: "Owl",
    imageFileName: 'Owl.png'
  },
  {
    name: "sheep",
    imageFileName: 'sheep.png'
  },
  {
    name: "squirrel",
    imageFileName: 'squirrel.png'
  },
  {
    name: "Turtle",
    imageFileName: 'Turtle.png'
  },
];


function startGame () {
  displayAnimals();  
  addEventListenersToCard();      
}

function addEventListenersToCard() {
  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener("click", flipCard);
  });
}

function displayAnimals() {
  let animalsList = [...ANIMALS_CONFIG, ...ANIMALS_CONFIG];
  animalsList = shuffleArray(animalsList);

  let animalsHTML = '';
  animalsList.forEach(eachAnimal => {
    animalsHTML += `<div class="card-face card">
                   <img src="assets/images/${eachAnimal.imageFileName}" alt="${eachAnimal.name}">
              </div>`;
  });

  document.getElementById('game-container').innerHTML = animalsHTML;
}



function flipCard() {
  

  this.classList.toggle("flipped");
  };
  
function shuffleArray(array){
  return array.sort( () => .5 - Math.random() );
}

function cardsMatched(){
    const Cards = document.querySelectorAll('')
    let firstCard = cardsClickedId[0]
    let secondCard = cardsClickedId[1]
    
    cards[optionOneId].setAttribute('img src', images/elephant.png)
    cards[optionTwoId].setAttribute('img src', images/elephant.png )
    
    if(!match){
      
      
    }
    else{
      flipbackCard()
    }
  }

   
   // if two cards are matched 
   // increment matched value by one
   // if matched value is 8 that menans user has matched all the cards 
   // If yes, do nothing and increment score
// Store card which was clicked first
     // Wait for 2nd click
  // On 2nd click check if both card animal matches
// Else, flip back both cards


function cardUnmatched(){

}

function resetCards () {

}

function restartTime() {
   
}

function allCardsmatched(){

}

startGame();