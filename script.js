// Tickets machine
let price;
let ticketPrice;

// Ask the user his own age
const age = prompt('How old are you?');
// debug
console.log(age);

// Ask the user how many km his travel is
const km = prompt('How many km do you have to travel?');
// debug
console.log(km);

// Calculate price

// Calculate price for Under18 users
if (age < 18) {
    price = ((0.21 - (0.21 / 100 * 20)) * km);
} 
// Calculate price for Over65 users
else if (age >= 65) {
    price = ((0.21 - (0.21 / 100 * 40)) * km);
}
// Calculate price for standard users
else {
    price = 0.21 * km;
}

// Calculate ticket price for humans that can't easily understend too much long numbers
ticketPrice = (Math.round(price * 100) / 100).toFixed(2);

document.getElementById('ticket').innerHTML = `Your ticket price is ${ticketPrice} Euro`

// debug
console.log(ticketPrice);
