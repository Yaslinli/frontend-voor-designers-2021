# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Gibli list 
Ik heb met het gebruik van de studio Gibli Api een lijst van 10 films gemaakt waar de gebruiker doorheen kan scrollen. 

https://yaslinli.github.io/frontend-voor-designers-2021/opdracht3/eindopdracht.gibli/

## interface
04.Keep users in control:
Humans are most comfortable when they feel in control of themselves and their environment. Thoughtless software takes away that comfort by forcing people into unplanned interactions, confusing pathways, and surprising outcomes. Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn. Don't worry about stating the obvious…the obvious almost never is.

De interface voor de gibli lijst is vrij eenvoudig. je kan alleen naar boven of naar onder scrollen. 
de grbuiker kan dit op verschillende manieren doen zoals: up en down key, up en down buttons en scrollen. 
De gebruiker heeft hiermee geheel de interface in control.

08.Provide a natural next step:
Very few interactions are meant to be the last, so thoughtfully design a next step for each interaction a person has with your interface. Anticipate what the next interaction should be and design to support it. Just as we like in human conversation, provide an opening for further interaction. Don't leave a person hanging because they've done what you want them to do…give them a natural next step that helps them further achieve their goals.

De arrows aan de rechterkant geeft de gebruiker aan dar hij naar onder of naar boven moet klikken. de nextstep is daardoor ook duidelijk.

09.Appearance follows behavior:
Humans are most comfortable with things that behave the way we expect. Other people, animals, objects, software. When someone or something behaves consistently with our expectations we feel like we have a good relationship with it. To that end designed elements should look like how they behave. Form follows function. 

De interface is consistent in gebruik doordat het een one pager is waar je aleen kan scrollen.
door de scroll snap functie is er elke keer maar 1 card te zien waardoor. het gemakkelijk te zien is dat wat de film is.

11.Strong visual hierarchies work best
A strong visual hierarchy is achieved when there is a clear viewing order to the visual elements on a screen. That is, when users view the same items in the same order every time.

De hierarchie is in  de list werkerkt door de titel een grote font te geven. Ook is de volgorde van de card informatie bij elke card hetzlefde gestyled. Omdat je maar 1 card tegelijk kan zien is zorgt dit ervoor dat de gebruiker op 1 card kan foccussen.


UI events: 
Ik heb in de gibli list een scoll event en een keyboard event gebruikt.
Door naar de verschillende cards te scrollen zullen die met een fade op het scherm komen. 
deze is ook te gebruiken met de up en down keys en de up en down buttons op het scherm.




## code
Eerst had is een div gemaakt waar de list in kan.

const app = document.getElementById('root')
// container met alle cards
const container = document.createElement('div')
container.setAttribute('class', 'container')

// container in de root dic plaatsen in html
app.appendChild(container)

// array met foto's van de foto covers
const movieImgUrlArr = [
  './images/castleinthesky.jpeg',
  './images/graveoffireflies.jpeg',
  './images/totoro.jpeg',
  './images/kiki.jpeg',
  './images/oy.jpeg',
  './images/porcorosso.jpg',
  './images/pp.jpeg',
  './images/woth.jpg',
  './images/princess.jpeg',
  './images/mnaty.jpeg'
]

const movieImages = movieImgUrlArr.map((url, i) => {
  movieImgUrlArr[i] = new Image();
  movieImgUrlArr[i].src = url;
})


var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
    
 // api info oproepen 
  var data = JSON.parse(this.response)
  console.log('data', data)

//   maakt de maximaal aantal 10 films
  if (request.status >= 200 && request.status < 400) {
    for (let i = 0; i < 10; i++) {

    // element aanmaken waar alle info instaat
      const card = document.createElement('div')
      card.setAttribute('class', 'card kopjes')
// h1 aanmaken met de titel erin
      const h1 = document.createElement('h1')
      h1.textContent = data[i].title
// release date in p
      const p3 = document.createElement('p')
      data[i].release_date = data[i].release_date.substring(0, 300)
      p3.textContent =  data[i].release_date;

// orginele titel in p
      const p1 = document.createElement('p')
      data[i].original_title = data[i].original_title.substring(0, 300)
      p1.textContent = "Original title: "  + data[i].original_title;
// description in p
      const p2 = document.createElement('p')
      p2.setAttribute('class', 'info')
      data[i].description = data[i].description.substring(0, 300)
      p2.textContent = "Description: " + "\n" + data[i].description;

// description in p
const p4 = document.createElement('p')
data[i].rt_score = data[i].rt_score.substring(0, 300)
p4.textContent = "Rotten Tomato Score: " + "\n" + data[i].rt_score;
    //  foto van de films met de urls uit de array
      const img = document.createElement('img')
      img.setAttribute('class', 'cover kopjes')
      img.src = movieImgUrlArr[i].src;
// wrapper voor alle cards
      const cardWrapper = document.createElement('div')
      cardWrapper.setAttribute('class', 'cardWrapper')

    //  formatting de html
      card.appendChild(img)
      card.appendChild(h1)
      card.appendChild(p3)
      card.appendChild(p1)
      card.appendChild(p2)
      card.appendChild(p4)
      cardWrapper.appendChild(card)
      container.appendChild(cardWrapper)
    }
Omdat ik hiervoor met de carousel had gewerkt maar ik ook wou leren hoe je de intersectionobserver kon gebruiken heb ik voor dit project de intersectionobserver geprobeerd te gebruiken. deze zorgt ervoor dat wanneer een element met de class .kopjes in  de window komt er een class van .fadeIn wordt toegevoegd en wanneer het uit het scherm is wordt het weer weggehaald. 
    // scroll event/ zorgen dat de kopjes en foto in faden met intersectionobserver.
    
    document.querySelectorAll('.kopjes').forEach((i) => {
        if (i) {
            const observer = new IntersectionObserver((entries) => {
                observerCallback(entries, observer, i)
            },
            {threshold: 0});    
            observer.observe(i);
        }
    })
    
    const observerCallback = (entries, observer, header) => {
        entries.forEach((entry, i) => {
             if (entry.isIntersecting) {
                entry.target.classList.add("fadeIn");
             }
             else {
                entry.target.classList.remove("fadeIn")
             }
        });
    };
  }
  
}
request.send()

als laatst heb ik de clickbare buttons aan de zijkant geplaatst. hier zorgen zij ervoor dat ze elke klick 1vh omhoog of omlaag gaan.

//  up en down buttons 
var arrowUp = document.querySelector('.up');
var arrowDown = document.querySelector('.down');

function goUp(event){
    window.scrollBy(0, -window.innerHeight / 2);
}

arrowUp.addEventListener('click',(event) => goUp(event));

function goDown(event){
    window.scrollBy(0, window.innerHeight / 2);
}

arrowDown.addEventListener('click',(event) => goDown(event));
