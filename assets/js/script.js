//controllo del nome (cerco nell'html dove si riferisce il nome (per ls variabile))
//controllare gli elementi nell'html dalla console(value), ed in questo caso voglio che sia più lungo di zero

//somma degli elementi nel cheek
//verificare presenza codi sconto nel coupon e in questo caso  stampo e applico lo sconto
//stampare il prezzo 

///esercizio fatto riguardando  il video  e  studiando le varie situazioni //////

//inizio a guardare nel'html e cerco price per stampare la mia base del prezzo

//creo la referenza (primo)
//creo la funzione anomima (per stampare il prezzo, la funzione la posso riusare quando voglio)

//referenze//

var priceEl = document.getElementById('price'); //primo
var nameUser = document.getElementById('name');







//settings//
var defaultPrice = 5; //parto con il definire il prezzo di partenza del mio panino //primo
writePrice(defaultPrice, priceEl); // la conferma della stampa



//eventi



//secondo


button.addEventListener('click', function() {

    //controllo del nome
    console.log(nameUser.value); //contollo del nome inserito nella consol.log
    //sommare gli elementi check
    //verificare la presenza del coupon e nel caso applicare lo sconto

});





//function//

//riceve il valore da scrivere e l'elemento dove deve essere scritto

function writePrice(value, target) {
    target.innerHTML = value.toFixed(2); //per i due decimali ..//primo



}







//primo passaggio la stampa del prezzo base

// secondo : bottone