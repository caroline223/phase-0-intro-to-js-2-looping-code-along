// Code your solutions in this file
 
/* for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

 const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);
*/

const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
var greeting = [];


function writeCards(names, eventName = 'surprise'){
    for (var i = 0; i < names.length; i++){
        greeting.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    };
    return greeting 
}


function countDown() {
    var countdown = 10
        while (countdown >= 0) {
        console.log(countdown);
        countdown--;
        } 
}