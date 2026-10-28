const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});



const pytania = [
    {
        pytanie: "Która rasa słynie z długiej, białej sierści?",
        odpowiedzi: [
            "Maltańczyk",
            "Beagle",
            "Pudel miniaturowy"
        ],
        poprawna: 0
    },
    {
        pytanie: "Która rasa ma kręconą sierść i jest uznawana za bardzo inteligentną?",
        odpowiedzi: [
            "Beagle",
            "Pudel miniaturowy",
            "Maltańczyk"
        ],
        poprawna: 1
    },
    {
        pytanie: "Która rasa należy do psów gończych?",
        odpowiedzi: [
            "Maltańczyk",
            "Pudel miniaturowy",
            "Beagle"
        ],
        poprawna: 2
    },
    {
        pytanie: "Która rasa jest zazwyczaj najmniejsza z wymienionych?",
        odpowiedzi: [
            "Maltańczyk",
            "Pudel miniaturowy",
            "Beagle"
        ],
        poprawna: 0
    },
    {
        pytanie: "Która rasa jest znana z doskonałego węchu?",
        odpowiedzi: [
            "Beagle",
            "Pudel miniaturowy",
            "Maltańczyk"
        ],
        poprawna: 0
    }
    
];

let aktualnePytanie = 0;
let punkty =0;

const pytanieElement = document.getElementById("pytanie");
const odpowiedziElement = document.getElementById("odpowiedzi");
const wynikElement = document.getElementById("wynik");

function pokazPytanie(){
    pytanieElement.textContent = pytania[aktualnePytanie].pytanie;

    odpowiedziElement.innerHTML = "";

    pytania[aktualnePytanie].odpowiedzi.forEach(
        (odpowiedz, index) => {
            const button = document.createElement("button");
            button.textContent = odpowiedz;
            button.addEventListener(
                "click",
                () => sprawdzOdpowiedz(index)
            );
            odpowiedziElement.appendChild(button);
        }
    );
}

function sprawdzOdpowiedz(index){
    if(index === pytania[aktualnePytanie].poprawna){
        punkty++;
    }
    aktualnePytanie++;

    if(aktualnePytanie < pytania.length){
        pokazPytanie();
    } else {
        let ocena ="";
        if(punkty === 5){
            ocena = "Mistrz wiedzy o psach!"
        } else if(punkty >=3){
            ocena="Bardzo dobrze!";
        } else{
            ocena="Warto jeszcze poczytac o rasach psów";
        }
        pytanieElement.textContent = "Quiz zakończony!";
        odpowiedziElement.innerHTML="";
        wynikElement.innerHTML =
        `Twój wynik: ${punkty}/5 punktów.<br>${ocena}`;
    }
}

pokazPytanie();

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});