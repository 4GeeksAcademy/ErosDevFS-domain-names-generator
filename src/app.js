import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  const wordInput = document.getElementById("wordInput");
  const listSelect = document.getElementById("listSelect");
  const btnAdd = document.getElementById("btnAdd");
  const btnGenerate = document.getElementById("btnGenerate");
  const btnAllCombinations = document.getElementById("btnAllCombinations");

  btnAdd.addEventListener("click", addWord);
  btnGenerate.addEventListener("click", domainGenerator);
  btnAllCombinations.addEventListener("click", showAllPosibleCombinations);
  wordInput.addEventListener("input", () => { wordInput.value = wordInput.value.toLowerCase(); });


  const listForDomains = {
    pronouns: [],
    adjectives: [],
    nouns: [],
    domains: [".com", ".es", ".net", ".co", ".gg"]
  };



  function addWord() {
    const word = wordInput.value.trim();
    const listType = listSelect.value;


    if (!word) return;

    listForDomains[listType].push(word);
    wordInput.value = "";
    newWordList(listType, listForDomains[listType]);


  }

function renderList(ul, array) {
  ul.innerHTML = array .map( (word, index) => `<li class="fs-4 fw-bold list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center"> ${word} <button class="btn-close btn-sm" data-index="${index}"></button> </li>`).join(""); 
} 

function newWordList(type, array) { 
  const listPronouns = document.getElementById("listPronouns"); 
  const listAdjectives = document.getElementById("listAdjectives"); 
  const listNouns = document.getElementById("listNouns");

   if (type === "pronouns") renderList(listPronouns, array); 
   if (type === "adjectives") renderList(listAdjectives, array); 
   if (type === "nouns") renderList(listNouns, array); 
} 

const lists = [ 
  {ul: document.getElementById("listPronouns"), data: listForDomains.pronouns, type: "pronouns"}, 
  {ul: document.getElementById("listAdjectives"), data: listForDomains.adjectives, type: "adjectives"}, 
  {ul: document.getElementById("listNouns"), data: listForDomains.nouns, type: "nouns"} 
];
lists.forEach(({ ul, data, type }) => { 
  ul.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-close")) return; 
    const index = Number(e.target.dataset.index); 
    data.splice(index, 1); newWordList(type, data);
  });
  newWordList(type, data);
});



  function positionOfArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function domainGenerator() {
    if (listForDomains.pronouns.length === 0 || listForDomains.adjectives.length === 0 || listForDomains.nouns.length === 0) return document.getElementById('randomDomains').innerHTML = '<div class="alert alert-warning"> You must add at least a word in: <strong>pronouns, adjectives and nouns</strong></div>';

    let randomDomain = `${positionOfArray(listForDomains.pronouns)}${positionOfArray(listForDomains.adjectives)}${positionOfArray(listForDomains.nouns)}${positionOfArray(listForDomains.domains)}\n`;

    return document.getElementById('randomDomains').innerHTML = randomDomain;
  }

  function showAllPosibleCombinations() {
    let combinationsList = '';
    let combinationsLength = [];
    listForDomains.pronouns.forEach((pronoun) => {
      listForDomains.adjectives.forEach((adjective) => {
        listForDomains.nouns.forEach((noun) => {
          listForDomains.domains.forEach((domain) => {
            combinationsList += `<li class="list-group-item fs-4 fw-bold">${pronoun}${adjective}${noun}${domain}</li>`
            combinationsLength.push(pronoun + adjective + noun + domain)
          });
        });
      });
    });

    document.getElementById("allCombinationsList").innerHTML = combinationsList;
    document.getElementById('listResult').innerHTML = `<span class= "badge bg-secondary">${combinationsLength.length}</span> Combinations Generated`;
  }

};
