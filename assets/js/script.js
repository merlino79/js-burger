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
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var coupon = document.getElementById('coupon');
console.log(coupon); //sono andato a vedere nella console dove trovo la scritta che inserisco nel discauntcoupon
console.log(ingredients); //vedo dalla console html collection ho visto la conferma nella consol.log (checked se true o folse)







//settings//
var defaultPrice = 5; //parto con il definire il prezzo di partenza del mio panino //inizio 

// var coupon per sconto ed inserico i nomi dello sconto
var coupons = ['sconto2021', 'sconto-bool'];

writePrice(defaultPrice, priceEl); // la conferma della stampa

var discount = 0.2; //indico il 20% di sconto






//eventi



//secondo


button.addEventListener('click', function() {


    //salvo il valore del nome user dentro la variabile
    var nomeInserito = nameUser.value.trim(); //.trim serverve per pulire gli spazi prima e dopo
    //console.log(nomeInserito.length);

    //controllo del nome
    //console.log(nameUser.value.length); //contollo del nome inserito nella consol.log

    if (nomeInserito.length === 0) {
        alert("inserisci il none del panino perfavore : ")
    } else {
        var priceIngredient = 0;

        for (var i = 0; i < ingredients.length; i++) {
            var ingredient = ingredients[i]; //console.log(ingredient); //(per la verifica da consol.log se e clicclato è true)
            if (ingredient.checked === true) {
                //console.log(ingredient.value);

                priceIngredient += parseInt(ingredient.value);
            }

        }

        //ciclo e somma gli elementi check
        //verificare la presenza del coupon e nel caso applico lo sconto
        var totalPrice = defaultPrice + priceIngredient;
        if (coupons.includes(coupon.value) === true) {
            console.log('sconto');
            totalPrice -= totalPrice * discount
        } else {
            console.log('non hai diritto allo sconto')
        }
        writePrice(totalPrice, priceEl);

    }


});





//function//

//riceve il valore da scrivere e l'elemento dove deve essere scritto

function writePrice(value, target) {
    target.innerHTML = value.toFixed(2); //per i due decimali ..//primo



}







//primo passaggio la stampa del prezzo base

// secondo : bottone

// ciclo  gli ingedienti con il for controllo la consol.log per verificare e creo la elseif(alrta condione)


//ma prima con .classNAme guardo nell'html  ingredient check-box (sono tutti gli elementi(come se fosse un array))


//somma dei numeri del check