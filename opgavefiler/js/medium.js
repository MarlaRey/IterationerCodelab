const numbers = [1, 2, 3, 4, 5];

/* opgave 1 */
console.group("opgave 1");

//1
let listeA = '';
console.log(numbers);
listeA = `<li>${numbers}</li>`;
const opgave1Element = document.getElementById('opgave1');

// Indsæt listen som indhold i det valgte element


//2
let listeB = '';

let sum = 0;
numbers.forEach(function (number) {
    sum += number;
    listeB = `<li>${sum}</li>`;
});

console.log(sum);

//3 ikke den mest hensigtsmæssige måde at finde den med en forEach, men here goes:
let listeC = '';
let max = numbers[0];

numbers.forEach(function(number) {
  if (number > max) {
    max = number;
    listeC = `<li>${max}</li>`;
  }
});

console.log(max);

opgave1Element.innerHTML = `<ol style="color:red"><b>${listeA}${listeB}${listeC}</b></ol>`;
console.groupEnd();


// Sørg for, at DOM'en er klar, før du forsøger at manipulere den
document.addEventListener("DOMContentLoaded", function () {
    const opgave2Element = document.getElementById('opgave2');
    let dyreShow = '';
    console.group("opgave 2");
  
    // Hent data
    const data = getData();
  
    // Iterer gennem data og opbyg en liste med både navn og billede
    data.forEach(function(animal) {
      console.log(animal.name);
      console.log(animal.shortDescription);
  
      // Brug billedstierne fra dataobjekterne til at vise billeder
      dyreShow += `
        <li>
          <h3>${animal.name}</h3>
          <img src="${animal.picture}" alt="${animal.name}">
          <p>${animal.shortDescription}</p>
        </li>
      `;
    });
  
    // Indsæt listen i opgave2Element
    opgave2Element.innerHTML = `<ol>${dyreShow}</ol>`;
  });
  
console.groupEnd();


/* opgave 3 */
console.group("opgave 3");
// 1


fetch('https://dummyjson.com/users')
  .then(response => response.json())
  .then(data => {
    // Hent bruger nummer 25 fra data og vis nøgler og værdier for brugeren
    const bruger25 = data.users[25];
      visBrugerData(bruger25);
    // Når data er hentet, kalder vi callback-funktionen (opgave 2:)
    buildViewData(data.users);
    console.log(data.users);
    
  });

// Funktion til at bygge visningsdata og indsætte dem i div'en med id "opgave3"
function buildViewData(data) {
    // Få fat i det element i HTML, hvor du vil vise dataen
    const opgave3Element = document.getElementById('opgave3');
  
    // Opret en HTML-liste (ul) for at vise dataen
    const ul = document.createElement('ul');
  
    // Gennemløb dataen og opret listeelementer (li) for hvert brugerobjekt
    data.forEach(user => {
      const li = document.createElement('li');
      // Tilføj brugerens fornavn, efternavn og alder til listeelementet
      li.textContent = `Fornavn: ${user.firstName}, Efternavn: ${user.lastName}, Alder: ${user.age}`;
      // Tilføj listeelementet til ul
      ul.appendChild(li);
    });
  
    // Tøm eventuelt tidligere indhold i opgave3-elementet
    opgave3Element.innerHTML = '';
  
    // Tilføj den oprettede liste (ul) til opgave3-elementet
    opgave3Element.appendChild(ul);
  }
   

console.groupEnd();

//OPGAVE 4:

// Funktion til at vise alle nøgler og værdier for en bruger i div'en med id "opgave4"
function visBrugerData(bruger) {
    // Få fat i det element i HTML, hvor du vil vise dataen
    const opgave4Element = document.getElementById('opgave4');
  
    // Opret en HTML-liste (ul) for at vise nøgler og værdier
    const ul = document.createElement('ul');
  
    // Gennemløb brugerobjektet med en for...in-løkke
    for (let nøgle in bruger) {
      const li = document.createElement('li');
      // Opret en tekststreng med nøglen og dens værdi
      li.textContent = `${nøgle}: ${bruger[nøgle]}`;
      // Tilføj listeelementet til ul
      ul.appendChild(li);
    }
  
    // Tøm eventuelt tidligere indhold i opgave4-elementet
    opgave4Element.innerHTML = '';
  
    // Tilføj den oprettede liste (ul) til opgave4-elementet
    opgave4Element.appendChild(ul);
  }
  
  

// support functions ---------------------------------------------------------------------------------------------

function getData() {





    const myData = [

        {
            name: 'Elefant',
            picture: '../../assets/img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },

        {
            name: 'Tiger',
            picture: '../../assets/img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },

        {
            name: 'Tarantel',
            picture: '../../assets/img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },

        {
            name: 'Koala',
            picture: '../../assets/img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },

        {
            name: 'Haj',
            picture: '../../assets/img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    return myData

}






