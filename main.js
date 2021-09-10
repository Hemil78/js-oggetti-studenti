//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//1. creo un oggetto con i dati dello studente
var studente = {
    "nome" : "Hemil",
    "cognome" : "Zanatta",
    "eta" : 43
};

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in studente) {
    console.log(`${key} ==> ${studente[key]}`);
}

//Creare un array di oggetti di studenti.
var studenti = [
    {
        "nome" : "Mario",
        "cognome" : "Bianchi",
        "eta" : 30
    },

    {
        "nome" : "Antonio",
        "cognome" : "Rossi",
        "eta" : 40
    },
    {
        "nome" : "Luca",
        "cognome" : "Verdi",
        "eta" : 50
    }
];

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(var i = 0; i < studenti.length; i++) {
    console.log(`${studenti[i]["nome"]} ${studenti[i]["cognome"]}`);
}

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {
    "nome" : prompt("Inserisci il tuo nome"),
    "cognome" : prompt("Inserisci il tuo cognome"),
};

//validare l'eta del nuovo studente
var etaNuovoStudente = parseInt(prompt("Inserisci la tua età"));
while(isNaN(etaNuovoStudente)) {
    etaNuovoStudente = parseInt(prompt("Attenzione!! Inserisci la tua età"));
}

nuovoStudente.eta = etaNuovoStudente; 

studenti.push(nuovoStudente);

console.log(studenti);

