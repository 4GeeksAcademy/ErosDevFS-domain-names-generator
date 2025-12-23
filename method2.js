const pronouns = ["i", "you", "he", "she", "it", "we", "they","me", "you", "him", "her", "it", "us", "them","mine", "yours", "his", "hers", "its", "ours", "theirs","my", "your", "his", "her", "its", "our", "their","myself", "yourself", "himself", "herself", "itself","ourselves", "yourselves", "themselves","who", "whom", "whose", "which", "that","who", "whom", "whose", "which", "what","someone", "somebody", "something","anyone", "anybody", "anything","everyone", "everybody", "everything","noone", "nobody", "nothing","each", "either", "neither","few", "afew", "many", "several", "all", "some", "none","eachother", "one another"];

const adjectives = ["big", "small", "large", "tiny", "huge","long", "short","tall", "low","fast", "slow","hot", "cold", "warm", "cool","old", "young", "new", "ancient","good", "bad", "great", "excellent", "terrible","easy", "hard", "simple", "difficult","clean", "dirty","strong", "weak","rich", "poor","happy", "sad", "angry", "calm","funny", "serious","kind", "mean","brave", "cowardly","smart", "intelligent", "stupid","beautiful", "ugly", "handsome","pretty", "attractive","loud", "quiet", "silent","noisy", "peaceful","red", "blue", "green", "yellow", "black", "white","gray", "brown", "pink", "purple", "orange","many", "much", "few", "little","some", "several", "enough","all", "every", "each","heavy", "light","soft", "hard","smooth", "rough","wet", "dry","broken", "fixed",
"early", "late","daily", "weekly", "monthly","modern", "ancient","amazing", "awesome", "boring", "interesting","fantastic", "wonderful", "awful","friendly", "honest", "lazy", "active","polite", "rude","patient", "impatient","alive", "dead","open", "closed","full", "empty","safe", "dangerous","ready", "tired", "sleepy"];

const nouns = ["person", "people", "man", "woman", "child", "children","friend", "family", "parent", "mother", "father","brother", "sister", "teacher", "student", "doctor","worker", "employee", "boss", "leader","dog", "cat", "bird", "fish", "horse","cow", "sheep", "pig", "chicken","lion", "tiger", "bear", "elephant","monkey", "rabbit", "snake","city", "town", "village", "country","home", "house", "building","school", "university", "office", "hospital","store", "shop", "market", "restaurant","park", "street", "road", "bridge","table", "chair", "desk", "bed",
"door", "window", "wall", "floor","phone", "computer", "laptop","keyboard", "mouse", "screen","book", "notebook", "paper", "pen","car", "bus", "train", "bicycle","food", "meal", "breakfast", "lunch", "dinner","water", "coffee", "tea", "milk", "juice","bread", "rice", "meat", "fish", "chicken","fruit", "apple", "banana", "orange","tree", "forest", "flower", "grass","river", "lake", "sea", "ocean","mountain", "hill", "valley","sun", "moon", "star", "sky","time", "day", "night", "morning","afternoon", "evening", "week","month", "year", "moment",
"love", "hate", "happiness", "sadness","anger", "fear", "hope", "dream","idea", "thought", "knowledge","truth", "lie", "freedom", "justice","power", "money", "success", "failure","technology", "software", "hardware","internet", "website", "app","data", "information", "system","network", "server", "database","job", "work", "career", "company","business", "project", "task","exam", "test", "lesson", "class"];

const domains = [".com",".es",".net",".co",".gg"]

/// Generador de Dominio
// 1. Una funcion que me genere indices aleatorios para llegar a todos los elementos de la lista.
// 2. Una funcion que me concatene las 3 listas en un string, generando un dominio.
// 3. No repetir los dominions.
// 4. Crear un index.html y enlazar el app.js.


function positionOfArray(arr) {
    let randomIndex = Math.floor(Math.random()* arr.length);
    return arr[randomIndex];
}

function domainGenerator(){
    let listOfDomains = "";
    for(let i = 0; i < 8; i++){

      listOfDomains += `${i+1}. ${positionOfArray(pronouns)}${positionOfArray(adjectives)}${positionOfArray(nouns)}${positionOfArray(domains)}\n`

    }
    return document.getElementById('listOfDomains') = listOfDomains;
}

