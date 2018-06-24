// tablica z klasami kolorów
const cardColor = ["green","green", "aqua", "aqua", "yellow", "yellow", "red", "red", "whitesmoke", "whitesmoke", 
"violet", "violet", "blue", "blue", "brown", "brown", "burlywood", "burlywood", "chartreuse", "chartreuse", "cornflowerblue", "cornflowerblue",  
"crimson", "crimson", "darkorange", "darkorange", "darkred", "darkred", "fuchsia", "fuchsia", "gray", "gray", "gold", "gold", "hotpink", "hotpink" ]

// do zmiennej przechwytujemy divy
let memoryCards = document.querySelectorAll("div");
console.log(memoryCards);
console.log(memoryCards instanceof Array);
// zmieniamy na tablice
memoryCards = [...memoryCards];

console.log(memoryCards instanceof Array);
//funkca
const clickCard = function() {
    console.log("klik")
};
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

}, 4000)

initial();












