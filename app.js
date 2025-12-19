let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let listDomains = '';

for(let i=0; i < pronouns.length; i++){
  for(let j=0; j < adjs.length; j++){
    for(let k=0; k < nouns.length; k++)
      listDomains += pronouns[i] + adjs[j] + nouns[k] + ".com" + "\n"
  }
}



console.log(listDomains);