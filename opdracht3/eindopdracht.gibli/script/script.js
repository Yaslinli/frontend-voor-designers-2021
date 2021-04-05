
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