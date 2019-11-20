//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/*alert("hola");

var number = parseInt(prompt('entry a number'));

var number2= parseInt(prompt('entry a second number'));


if (number == number2) {
    console.log('i due numeri sono uguali');
} else {
    vas lista = [number, number2];
}


var lista = [number, number2];
console.log(lista);
lista.sort(function (a,b) {return b-a});
console.log(lista);
console.log('il numero maggiore è' + lista[0]);*/


/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

/*var lista = ['amatista', 'berto', 'carlo'];
console.log(lista);
var nomi = (prompt('Come ti chiami?'));

if (lista == nomi) {
    console.log('puoi entrare');
} else {
    console.log('non puoi entrare');

}
*/
/*if (invitati.indexOf(nome) !=  -1) {
    alert('Complimenti,  sei stato invitato alla festa');
} else {
    alert('Siamo spiacenti ma non sei stato invitato');
} 
*/






/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.*/
/*var numeri_dispari = [];
var num ;
for (var i = 0; i < 6; i++){

    num = (parseInt(prompt('Inserisci un numero')));
    console.log(num);

    if ( num %2 == 1) {
        console.log('Il numero è dispari ' + num);
        numeri_dispari.push(num);
    }


}

console.log(numeri_dispari);

*/


/*
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.*/

/*
if (numeroutente > 0) {
    for (var i = 1; i <= numeroutente; i++) {
        cubo = Math.pow(i, 3);
        console.log(cubo);
    }
} else {
    console.log('Il numero che hai inserito non è maggiore di zero');
}
*/

/*Stampa le potenze di 2 fino a 1000.*/

var num = 0;
for (var i = 0; i < 10; i++) {
    num = Math.pow(i, 2);
    console.log(num);

}
