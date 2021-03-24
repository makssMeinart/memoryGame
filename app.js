let cardArray = [
  {
    name: "jclubs",
    img: "images/jclubs.png"
  },
  {
    name: "jclubs",
    img: "images/jclubs.png"
  },
  {
    name:"aspades",
    img: "images/aspades.png"
  },
  {
    name:"aspades",
    img: "images/aspades.png"
  },
  {
    name: "10hearts",
    img: "images/10hearts.png"
  },
  {
    name: "10hearts",
    img: "images/10hearts.png"
  },
  {
    name: "7clubs",
    img: "images/7clubs.png"
  },
  {
    name: "7clubs",
    img: "images/7clubs.png"
  },
  {
    name: "6dimonds",
    img: "images/6dimonds.png"
  },
  {
    name: "6dimonds",
    img: "images/6dimonds.png"
  },
  {
    name: "5clubs",
    img: "images/5clubs.png"
  },
  {
    name: "5clubs",
    img: "images/5clubs.png"
  },
]

// Randomise Array
cardArray.sort(() =>  .5 - Math.random())


// The choosen Cards
let cardChoosen = []
let cardChoosenId = []
let cardsWon = []

// On load create board
window.addEventListener("load", () => {
  const board = document.createElement("div")
  board.classList.add("board")
  document.querySelector("body").appendChild(board)

  // Fill it up with cards
  for(let i = 0; i < cardArray.length; i++) {

    let newCard = document.createElement("img")
    newCard.setAttribute("src", "images/secrete.jpg")
    newCard.classList.add("card")
    newCard.setAttribute("data-id", i)
    board.appendChild(newCard)
    newCard.addEventListener("click", flipTheCard)
  }
  
})

// Check for match
function checkForMatch() {
  let cards = document.querySelectorAll("img")
  const optionOneId = cardChoosenId[0]
  const optionTwoId = cardChoosenId[1]

  if(cardChoosen[0] === cardChoosen[1]) {
    alert("Nice, Keep going")
    cards[optionOneId].setAttribute("src", `/images/blank.png`)
    cards[optionTwoId].setAttribute("src", `/images/blank.png`)
    cardsWon.push(cardChoosen)
  }
  else {
    alert("Try again, pussio")
    cards[optionOneId].setAttribute("src", `/images/secrete.jpg`)
    cards[optionTwoId].setAttribute("src", `/images/secrete.jpg`)
  }
  cardChoosen = []
  cardChoosenId = []

  // Need to create the Score board
   const score = document.createElement("p")
   score.classList.add("score")
  // Add the score 
  if(cardsWon.length === cardArray.length / 2) {
    alert("You have won the game, Well done")
    location.reload()
  }
 
}

// Flip the card
function flipTheCard() {
  const cardId = this.getAttribute("data-id")
  cardChoosen.push(cardArray[cardId].name)
  cardChoosenId.push(cardId)
  this.setAttribute("src", `${cardArray[cardId].img}`)

  if(cardChoosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
  
}


