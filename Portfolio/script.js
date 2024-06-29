const flipper = document.querySelector('.flipper');
const mainImage = document.querySelector('.main-image');
const mainTitle = document.querySelector('.main-title');
const typingContainer = document.querySelector('.typing-container');
const cursor = document.querySelector('.cursor');
const container = document.querySelector('.container');
const whiteCard = document.querySelector('.white-card');
const cardDiv = document.querySelector('.cardDiv')

// Keep the event listener attached permanently
mainImage.addEventListener('click', () => {
  tour();

});

mainImage.addEventListener('mouseover', () => {
    flipper.classList.add('flipped');
  });

  mainImage.addEventListener('mouseout', () => {
    flipper.classList.remove('flipped');
  });

function tour() {
  // Don't hide the container, just add a class to hide the main content
  container.classList.add('hidden-content'); 

  // Create cards with information
  const cards = createCards();

  // Append cards to body
  // cards.forEach(card => {
  //   document.body.appendChild(card);
  // });


  // Make sure the main image is still clickable
  mainImage.addEventListener('click', (event) => {
    // Prevent the tour from being triggered again
    event.stopPropagation();
  });
}

function createCards() {
  const cards = [];

  // Example card content (replace with your information)
  const card1 = createCard('HOME');
  const card2 = createCard('ABOUT ME');
  const card3 = createCard('PROJECTS');
  const card4 = createCard('CONTACT');

  cards.push(card1, card2, card3, card4);

  card1.addEventListener("click",()=>{
    whiteCard.style.display = "none";
    cardDiv.setAttribute("id", "");
    document.querySelectorAll('.card').forEach(card => card.remove());
        container.classList.remove('hidden-content'); // Show the main content again
        // Remove the event listener added in the tour function
        mainImage.removeEventListener('click', (event) => {
          event.stopPropagation();
        });
});
card2.addEventListener("click",()=>{
  whiteCard.style.display = "block";
  cardDiv.setAttribute("id", "about");
  changeCard();
})
card3.addEventListener("click",()=>{
  whiteCard.style.display = "block";
  cardDiv.setAttribute("id", "projects");
  changeCard();

});
card4.addEventListener("click",()=>{
  whiteCard.style.display = "block";
  cardDiv.setAttribute("id", "contact");
  changeCard();

})
  return cards;
}

function createCard(title) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundColor = "#b2b2b2"; // Use the same color as the card
  card.style.margin = "10px";
  card.style.padding = "10px";

  const cardTitle = document.createElement('button');
  cardTitle.textContent = title;
  cardTitle.style.backgroundColor = "transparent";
  cardTitle.style.textDecoration = "none";
  cardTitle.style.textAlign = "center";
  cardTitle.style.borderStyle = "none";
  cardTitle.style.textDecorationColor = "none";
  cardTitle.style.fontSize="20px";
  cardTitle.style.color="#484949";
  cardTitle.style.fontWeight="bold";
  cardDiv.appendChild(card);
  card.appendChild(cardTitle);
  return card;
}

function changeCard(){
  if (cardDiv.id=== "about"){
    console.log("about")
  }else if(cardDiv.id=== "projects"){
    console.log("projects")
  }else if(cardDiv.id=== "contact"){
    console.log("contact")
  }
}