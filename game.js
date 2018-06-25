// tablica z klasami kolorów
const cardColor = ["green","green", "aqua", "aqua", "yellow", "yellow", "red", "red", "whitesmoke", "whitesmoke", 
"violet", "violet", "blue", "blue", "brown", "brown", "burlywood", "burlywood", "chartreuse", "chartreuse", "cornflowerblue", "cornflowerblue",  
"crimson", "crimson", "darkorange", "darkorange", "darkred", "darkred", "fuchsia", "fuchsia", "gray", "gray", "gold", "gold", "hotpink", "hotpink" ]
console.log(cardColor);
// do zmiennej przechwytujemy divy
let memoryCards = document.querySelectorAll("div");
// zmieniamy na tablice
memoryCards = [...memoryCards];




//tworzymy obiekt daty, odliczamy czas gry  
const startTime = new Date().getTime();
// kliknieta karta
let activeCard = "";
// tablica aktywnych kart które klikneliśmy 
const activeCards = [];
const gamePairs = memoryCards.length/2; //result 18
let gameResult =  0;

// mini gra - dwa kliknięcia
const clickCard = function() {
   activeCard = this;
   if (activeCard == activeCards[0]) return;
   //czy to 1 kliknieęcie
   activeCard.classList.remove("hidden");
    if(activeCards.length === 0) {
        activeCards[0] = activeCard;
        console.log("1");
        return;
    
    }
    // czy to 2 kliknięcie
    else {
        console.log("2");
        memoryCards.forEach(card => card.removeEventListener("click", clickCard))
        activeCards[1] = activeCard;
        console.log(activeCards);
        setTimeout(function (){
            if(activeCards[0].className === activeCards[1].className) {
                console.log("mini wygrana")
                activeCards.forEach(card => card.classList.add("off"))
                gameResult++;
                memoryCards = memoryCards.filter(card => !card.classList.contains("off"))
                if(gameResult == gamePairs) {
                    const endTime = new Date().getTime();
                    const gameTime = (endTime - startTime) / 1000
                    alert(`WYGRAŁEŚ! KONIEC GRY! :) Twój wynik to: ${gameTime} sekund`)
                    location.reload();
                }
            }
            else {
                console.log("przegrana")
                activeCards.forEach(card => card.classList.add("hidden"))
            }   
            activeCard = "";
            activeCards.length = 0;
            memoryCards.forEach(card => card.addEventListener("click", clickCard))
        },500)
         
    }
}



// funkcja inicjalizująca
const initial = function() {
    //blok kodu który ma sie wykonać dla każdego diva
    memoryCards.forEach(card => {
        // losujemy liczbe i ja zaokrąglamy do dołu, będzie to liczba stanowiąca pozycję z tablicy kolorów
        const position = Math.floor(Math.random() * cardColor.length);
        // dodajemy pojedyńczemu div'owi klase z tablicy kolorów
        card.classList.add(cardColor[position]);
        // usuwamy z tablicy wylosowana liczbe/pozdycję tak aby znikła z tablicy kolorów
        cardColor.splice(position, 1);
    })

};
// funkcja która ma sie uruchomić po 4 sekundach po tym czasię nadajemy wszystkim divom klase hidden 
setTimeout(function(){
    //ponownie metoda forEach która ma sie wykonać dla każdego diva
    memoryCards.forEach(card => {
        card.classList.add("hidden")
        //nasłuchujemy zdarzenie klik i uruchamiamy funkcje o nazwie clicCard
        card.addEventListener("click", clickCard)
    })

}, 3000)

initial();












