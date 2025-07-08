let amount= Number(prompt("Enter the amount: "));
let discount = 0;
if(amount <500) {
    console.log("No discount available.");
}
if (amount > 500 && amount <= 1000) {
    console.log("Your total amount is: " + amount);
    discount = Math.floor((amount*5)/100);
    amount = amount-discount;
    console.log("Your total amount after discount is: " + amount);
    console.log("Your discount is: " + discount);
} 
else if (amount > 1000 && amount <= 5000) {
    console.log("Your total amount is: " + amount);
    discount = Math.floor((amount*10)/100);
    amount = amount-discount;
    console.log("Your total amount after discount is: " + amount);
    console.log("Your discount is: " + discount);
}
else if (amount > 5000) {
    console.log("Your total amount is: " + amount);
    discount = Math.floor((amount*15)/100);
    amount = amount-discount;
    console.log("Your total amount after discount is: " + amount);
    console.log("Your discount is: " + discount);
}
