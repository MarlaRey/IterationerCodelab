/* opgave 1 */

// Opret en liste med tal fra 1 til 10 som en tekststreng
let liste = '';
for (let i = 1; i < 11; i++) {
    liste += `<li>${i}</li>`;
}

// Find det DOM-element, hvor du vil placere listen
const opgave1Element = document.getElementById('opgave1');

// Indsæt listen som indhold i det valgte element
opgave1Element.innerHTML = `<ul>${liste}</ul>`;

console.groupEnd();


/* opgave 2 */

console.group("opgave 2");
// din kode her
let liste2 = '';
for (let i = 10; i < 12; i++) {
    liste2 += `<li>${i}</li>`;

  }
// Find det DOM-element, hvor du vil placere listen
const opgave1Element2 = document.getElementById('opgave2');

// Indsæt listen som indhold i det valgte element
opgave1Element2.innerHTML = `<ul>${liste2}</ul>`;
console.groupEnd();


/* opgave 3 */
console.group("opgave 3");
// din kode her
let liste3 = '';
for (let i = 2; i < 41; i++) {
    liste3 += `<li>${i}</li>`;
  }

// Find det DOM-element, hvor du vil placere listen
const opgave1Element3 = document.getElementById('opgave3');

// Indsæt listen som indhold i det valgte element
opgave1Element3.innerHTML = `<ul>${liste3}</ul>`;
console.groupEnd();
console.groupEnd();









