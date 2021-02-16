// index van heartCount is 0
let heartCount = 0
// favoritesCounter is <p class=heartCount> <p> in de innerhtml
let favoritesCounter = document.querySelector('.heartCount')
// de p is gelijk aan de heartCount current dus 0.
favoritesCounter.innerHTML = heartCount
// functie hearting toggled de classname heartRed en bestaande class heartGrey.
function hearting(event) {
  event.target.classList.toggle("heartRed");
  // als er een class van heartRed anwezig is wordt heartcount +1 zo niet -1
  // ? kan gelezen worden als if, else. als het heartRed containt heartcount++ else(:) heartcount--
  event.target.classList.contains('heartRed') ? heartCount++ : heartCount--
  // weergeef de current hoeveelheid heartRed in de html
  favoritesCounter.innerHTML = heartCount
}


// selecteer alle buttons met heart class en vor elke 
// button een event listener van funtctie hearting toevoegen.
document.querySelectorAll('.heart').forEach(btn=>{
  return btn.addEventListener("click",hearting);
})
