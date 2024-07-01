const flipper = document.querySelector('.flipper');
const mainImage = document.querySelector('.main-image');
const mainTitle = document.querySelector('.main-title');
const typingContainer = document.querySelector('.typing-container');
const cursor = document.querySelector('.cursor');
const container = document.querySelector('.container');
const whiteCard = document.querySelector('.white-card');
const cardDiv = document.querySelector('.cardDiv');
let imageScreen = document.querySelector('.loading-screen');
let play = document.querySelector('.play');
let leftAboutBTN = document.querySelector('.leftAB');
let rightAboutBTN = document.querySelector('.rightAB');
let leftProjectsBTN = document.querySelector('.leftPR');
let rightProjectsBTN = document.querySelector('.rightPR');
let head = document.querySelector('.head');
let desc = document.querySelector('.desc');
let smIMG = document.querySelector('.smallIMG')
let aboutClass = 'about1';
let projectsClass = 'projects1';
// Keep the event listener attached permanently
mainImage.addEventListener('click', () => {
  tour();

});
play.addEventListener('click',()=>{
  imageScreen.style.display='none';
});

mainImage.addEventListener('mouseover', () => {
    flipper.classList.add('flipped');
  });

  mainImage.addEventListener('mouseout', () => {
    flipper.classList.remove('flipped');
  });
let abI =1;
let prI=1;
rightAboutBTN.addEventListener('click',()=>{
  if (abI>=3){
    abI=0;
  }
  abI++;
  cardDiv.setAttribute("id", "about"+abI);
  console.log(cardDiv.id)
  if (cardDiv.id==='about1'){
    head.innerHTML="Jonathan Baker";
    desc.innerHTML='I am 17 years old and I am currently going into my senior year at Castle High School. I love programming and my favorite languages include<br>  - Python<br>  - JavaScript<br>  - C++';
    smIMG.src='src/IMG_5627.JPEG'
  }else if (cardDiv.id==='about2'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='about3'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }
  return aboutClass
})
leftAboutBTN.addEventListener('click',()=>{
  if (abI<=1){
    abI=4;
  }
  abI--;
  cardDiv.setAttribute("id", "about"+abI);
  console.log(cardDiv.id)
  if (cardDiv.id==='about1'){
    head.innerHTML="Jonathan Baker";
    desc.innerHTML='I am 17 years old and I am currently going into my senior year at Castle High School. I love programming and my favorite languages include<br>  - Python<br>  - JavaScript<br>  - C++';
    smIMG.src='src/IMG_5627.JPEG'
  }else if (cardDiv.id==='about2'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='about3'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }
  return aboutClass
})
rightProjectsBTN.addEventListener('click',()=>{
  if (prI>=3){
    prI=0;
  }
  prI++;
  cardDiv.setAttribute("id", "projects"+prI);
  console.log(cardDiv.id)
  if (cardDiv.id==='projects1'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='projects2'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='projects3'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }
  return projectsClass
})
leftProjectsBTN.addEventListener('click',()=>{
  if (prI<=1){
    prI=4;
  }
  prI--;
  cardDiv.setAttribute("id", "projects"+prI);
  console.log(cardDiv.id)
  if (cardDiv.id==='projects1'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='projects2'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='projects3'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }
  return projectsClass
})

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
  cardDiv.setAttribute("id", aboutClass);
  changeCard();
  leftAboutBTN.style.display="block";
  rightAboutBTN.style.display="block";
  leftProjectsBTN.style.display="none";
  rightProjectsBTN.style.display="none";
  head.style.display='block';
  desc.style.display='block';
  smIMG.style.display='block';
  
  if (cardDiv.id==='about1'){
    head.innerHTML="Jonathan Baker";
    desc.innerHTML='I am 17 years old and I am currently going into my senior year at Castle High School. I love programming and my favorite languages include<br>  - Python<br>  - JavaScript<br>  - C++';
    smIMG.src='src/IMG_5627.JPEG'
  }else if (cardDiv.id==='about2'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='about3'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }
})
card3.addEventListener("click",()=>{
  whiteCard.style.display = "block";
  cardDiv.setAttribute("id", projectsClass);
  changeCard();
  leftProjectsBTN.style.display="block";
  rightProjectsBTN.style.display="block";
  leftAboutBTN.style.display="none";
  rightAboutBTN.style.display="none";
  head.style.display='block';
  desc.style.display='block';
  smIMG.style.display='block';
  if (cardDiv.id==='projects1'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='projects2'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }else if (cardDiv.id==='projects3'){
    head.innerHTML="";
    desc.innerHTML='';
    smIMG.src=''
  }
});
card4.addEventListener("click",()=>{
  whiteCard.style.display = "block";
  cardDiv.setAttribute("id", "contact");
  changeCard();
  leftAboutBTN.style.display="none";
  rightAboutBTN.style.display="none";
  leftProjectsBTN.style.display="none";
  rightProjectsBTN.style.display="none";
  head.style.display='none';
  desc.style.display='none';
  smIMG.style.display='none';
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