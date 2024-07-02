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
let body = document.querySelector('body');
let contact = document.querySelector('.contact')
let rps = document.querySelector('.rpsgame')
let ufc = document.querySelector('.ufc')
let wfc = document.querySelector('.wfc')


// Keep the event listener attached permanently
mainImage.addEventListener('click', () => {
  body.style.backgroundColor='#b5b4b4'
  whiteCard.style.backgroundColor='#9caf99';
  whiteCard.style.display='block';
  cardDiv.setAttribute("id", "about1");
  head.style.display="block";
    desc.style.display="block";
    smIMG.style.display="block"
    head.innerHTML="JONATHAN BAKER";
    desc.innerHTML='I am 17 years old and I am currently going into my senior year at Castle High School. I love golf, basketball, and football. I also love programming and my favorite languages include<br>  - Python<br>  - JavaScript<br>  - C++';
    smIMG.src='src/IMG_2449.jpg'
    leftAboutBTN.style.display="block";
  rightAboutBTN.style.display="block";

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
    head.innerHTML="JONATHAN BAKER";
    desc.innerHTML='I am 17 years old and I am currently going into my senior year at Castle High School. I love golf, basketball, and football. I also love programming and my favorite languages include<br>  - Python<br>  - JavaScript<br>  - C++';
    smIMG.src='src/IMG_2449.jpg'
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='about2'){
    head.innerHTML="INSPIRATION";
    desc.innerHTML='I have grown to love computers and how they work. It all started when I was 6 years old and me and my brother got an Xbox 360. We were so excited and played it all the time. Through the years I knew I wanted to do something with math and computers. That is when I found out Castle had a CS 1 program and I fell in love with it immediately and knew that was my future.';
    smIMG.src='src/IMG_8210.JPG'
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='about3'){
    head.innerHTML="FAMILY";
    desc.innerHTML='My family have inspired me and pushed me to be the best I can be throughout my life. Whether it was supporting my dreams to pushing me in baskebtall they have always been there and will continue to be. My family has been the biggest support system in my life and I truly would not be here without them.';
    smIMG.src='src/IMG_8212.JPG'
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='none'
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
    head.innerHTML="JONATHAN BAKER";
    desc.innerHTML='I am 17 years old and I am currently going into my senior year at Castle High School. I love golf, basketball, and football. I also love programming and my favorite languages include<br>  - Python<br>  - JavaScript<br>  - C++';
    smIMG.src='src/IMG_2449.jpg'
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='about2'){
    head.innerHTML="INSPIRATION";
    desc.innerHTML='I have grown to love computers and how they work. It all started when I was 6 years old and me and my brother got an Xbox 360. We were so excited and played it all the time. Through the years I knew I wanted to do something with math and computers. That is when I found out Castle had a CS 1 program and I fell in love with it immediately and knew that was my future.';
    smIMG.src='src/IMG_8210.JPG'
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='about3'){
    head.innerHTML="FAMILY";
    desc.innerHTML='My family have inspired me and pushed me to be the best I can be throughout my life. Whether it was supporting my dreams to pushing me in baskebtall they have always been there and will continue to be. My family has been the biggest support system in my life and I truly would not be here without them.';
    smIMG.src='src/IMG_8212.JPG'
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='none'
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
    head.innerHTML='none';
    desc.innerHTML='none';
    smIMG.src='';
    rps.style.display='block'
    ufc.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='projects2'){
    head.innerHTML='none';
    desc.innerHTML='none';
    smIMG.src='';
    rps.style.display='none'
    ufc.style.display='block'
    wfc.style.display='none'
  }else if (cardDiv.id==='projects3'){
    head.innerHTML='none';
    desc.innerHTML='none';
    smIMG.src='';
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='block'
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
    head.innerHTML='none';
    desc.innerHTML='none';
    smIMG.src='';
    rps.style.display='block'
    ufc.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='projects2'){
    head.innerHTML='none';
    desc.innerHTML='none';
    smIMG.src='';
    rps.style.display='none'
    ufc.style.display='block'
    wfc.style.display='none'
  }else if (cardDiv.id==='projects3'){
    head.innerHTML='none';
    desc.innerHTML='none';
    smIMG.src='';
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='block'
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
  card2.classList.add('active')
  cards.push(card1, card2, card3, card4);

  card1.addEventListener("click",()=>{
    whiteCard.style.display = "none";
    body.style.backgroundColor='#9caf99'
    contact.style.display='none';
    rps.style.display='none'
    ufc.style.display='none'
    wfc.style.display='none'
    cardDiv.setAttribute("id", "");
    document.querySelectorAll('.card').forEach(card => card.remove());
        container.classList.remove('hidden-content'); // Show the main content again
        // Remove the event listener added in the tour function
        mainImage.removeEventListener('click', (event) => {
          event.stopPropagation();
        });
});
card2.addEventListener("click",()=>{
  card2.classList.add('active')
  card3.classList.remove('active');
  card4.classList.remove('active');
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
  contact.style.display='none';
  rps.style.display='none'
  ufc.style.display='none'
  wfc.style.display='none'
  if (cardDiv.id==='about1'){
    head.innerHTML="JONATHAN BAKER";
    desc.innerHTML='I am 17 years old and I am currently going into my senior year at Castle High School. I love golf, basketball, and football. I also love programming and my favorite languages include<br>  - Python<br>  - JavaScript<br>  - C++';
    smIMG.src='src/IMG_2449.jpg'
  }else if (cardDiv.id==='about2'){
    head.innerHTML="INSPIRATION";
    desc.innerHTML='I have grown to love computers and how they work. It all started when I was 6 years old and me and my brother got an Xbox 360. We were so excited and played it all the time. Through the years I knew I wanted to do something with math and computers. That is when I found out Castle had a CS 1 program and I fell in love with it immediately and knew that was my future.';
    smIMG.src='src/IMG_8210.JPG'
  }else if (cardDiv.id==='about3'){
    head.innerHTML="FAMILY";
    desc.innerHTML='My family have inspired me and pushed me to be the best I can be throughout my life. Whether it was supporting my dreams to pushing me in baskebtall they have always been there and will continue to be. My family has been the biggest support system in my life and I truly would not be here without them.';
    smIMG.src='src/IMG_8212.JPG'
  }
})
card3.addEventListener("click",()=>{
  card3.classList.add('active')
  card2.classList.remove('active');
  card4.classList.remove('active');
  cardDiv.setAttribute('class','cardDiv projects')
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
  contact.style.display='none';
  head.style.display='none';
  desc.style.display='none';
  smIMG.style.display='none';
  if (cardDiv.id==='projects1'){
    rps.style.display='block'
    ufc.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='projects2'){
    ufc.style.display='block'
    rps.style.display='none'
    wfc.style.display='none'
  }else if (cardDiv.id==='projects3'){
    ufc.style.display='none'
    rps.style.display='none'
    wfc.style.display='block'
  }
});
card4.addEventListener("click",()=>{
  card4.classList.add('active')
  card3.classList.remove('active');
  card2.classList.remove('active');
  whiteCard.style.display = "block";
  cardDiv.setAttribute("id", "contact");
  rps.style.display='none'
  changeCard();
  leftAboutBTN.style.display="none";
  rightAboutBTN.style.display="none";
  leftProjectsBTN.style.display="none";
  rightProjectsBTN.style.display="none";
  head.style.display='none';
  desc.style.display='none';
  smIMG.style.display='none';
  contact.style.display='block';
  ufc.style.display='none'
  wfc.style.display='none'
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