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

  btnAdd.addEventListener("click", addWord);
  btnGenerate.addEventListener("click", domainGenerator);

  let listForDomains = {
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

      return document.getElementById('listOfDomains').innerHTML = listOfDomains;
    }

  };
