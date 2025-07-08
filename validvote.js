let ans = Number(prompt("What is your age? "));

if (isNaN(ans)) {
    alert("Please enter a valid number.");
} else if (ans <= 18) {
    alert("You are a minor.");
} else {
    alert("You are an adult.");
}
