// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards(gifts, event) {

    const messages = [];

    for (let i = 0; i < gifts.length; i++) {

        const message = (`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`)

        messages.push(message)

        //`Thank you, ${gift}, for the wonderful surprise gift!`
    }
    return messages;
}
writeCards(gifts, "suprise");

function countDown(n) {
    while (n > 0) {
        console.log(n--)
    }
    console.log(n);
}
countDown(4)


