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
  const btnAllCombinations = this.document.getElementById("btnAllCombinations")

  btnAdd.addEventListener("click", addWord);
  btnGenerate.addEventListener("click", domainGenerator);
  btnAllCombinations.addEventListener("click", showAllPosibleCombinations)
  

  const listForDomains = {
    pronouns: ["the"],
    adjectives: ["big"],
    nouns: ["person"],
    domains: [".com", ".es", ".net", ".co", ".gg"]
  };



  function addWord() {
    const word = wordInput.value.trim()
    const listType = listSelect.value


    if (!word) return;

    listForDomains[listType].push(word)
    wordInput.value = ""
    newWordList(listForDomains[listType])


  }

  function newWordList(array) {
 
    if (listSelect.value == 'pronouns') {
      document.getElementById("listPronouns").innerHTML =
        array.map(word => `<li class="fs-4 fw-bold list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center">${word}<button type="button" class="btn-close btn-sm" aria-label="Close"></button></li>\n`).join("");
    }

    if (listSelect.value == 'adjectives') {
      document.getElementById("listAdjectives").innerHTML =
        array.map(word => `<li class="fs-4 fw-bold list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center">${word}<button type="button" class="btn-close btn-sm" aria-label="Close"></button></li>\n`).join("");
    }
    if (listSelect.value == 'nouns') {
      document.getElementById("listNouns").innerHTML =
        array.map(word => `<li class="fs-4 fw-bold list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center">${word}<button type="button" class="btn-close btn-sm" aria-label="Close"></button></li>\n`).join("");
    }
  }


    function positionOfArray(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    function domainGenerator() {
      let listOfDomains = `${positionOfArray(listForDomains.pronouns)}${positionOfArray(listForDomains.adjectives)}${positionOfArray(listForDomains.nouns)}${positionOfArray(listForDomains.domains)}\n`

      return document.getElementById('listOfDomains').innerHTML = listOfDomains
    }

    function showAllPosibleCombinations() {
      let combinationsList = '';
      let combinationsLength = [];
      listForDomains.pronouns.forEach((pronoun)=> {
        listForDomains.adjectives.forEach((adjective)=>{
          listForDomains.nouns.forEach((noun)=>{
            listForDomains.domains.forEach((domain)=>{
              combinationsList += `<li class="list-group-item fs-4 fw-bold">${pronoun}${adjective}${noun}${domain}</li>`
              combinationsLength.push(pronoun+adjective+noun+domain)
            })
          })
        })
      })

      document.getElementById("allCombinationsList").innerHTML = combinationsList
      document.getElementById('listResult').innerHTML = `<span class= "badge bg-secondary">${combinationsLength.length}</span> Combinations Generated`
    }

    // Two more functions needed:
    // 1. Erase the element and close button 
    // 2. Fix how All Combinations List looks like 


  };
