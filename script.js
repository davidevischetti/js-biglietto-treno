// Tickets machine
let ticketPrice;
let price;

// Ask the user his own age
const age = prompt('How old are you?');

console.log(age);

// Ask the user how many km his travel is
const km = prompt('How many km do you have to travel?');

console.log(km);

// Calculate ticket price




// Calculate ticket price for Under18 users
if (age < 18) {
    price = ((0.21 - (0.21 / 100 * 20)) * km);

    // Calculate ticket price for humans that can't easily understend too much long numbers
    ticketPrice = (Math.round(price * 100) / 100).toFixed(2);
    // Under18 ticket price
    document.getElementById('ticket-under-18').innerHTML = `Your ticket price is ${ticketPrice} Euro`
} 
// Calculate ticket price for Over65 users
else if (age >= 65) {
    price = ((0.21 - (0.21 / 100 * 40)) * km);

    // Calculate ticket price for humans that can't easily understend too much long numbers
    ticketPrice = (Math.round(price * 100) / 100).toFixed(2);

    // Over65 ticket price
    document.getElementById('ticket-over-65').innerHTML = `Your ticket price is ${ticketPrice} Euro`
}
// Calculate ticket price for standard users
else {
    price = 0.21 * km;

    // Calculate ticket price for humans that can't easily understend too much long numbers
    ticketPrice = (Math.round(price * 100) / 100).toFixed(2);

    // Standard ticket price
    document.getElementById('ticket-standard').innerHTML = `Your ticket price is ${ticketPrice} Euro`
}

// debug
console.log(ticketPrice);
