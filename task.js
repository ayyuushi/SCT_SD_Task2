const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "🚫 Please enter a number between 1 and 100.";
  } else if (guess < numberToGuess) {
    message.textContent = "📉 Too low! Try again.";
  } else if (guess > numberToGuess) {
    message.textContent = "📈 Too high! Try again.";
  } else {
    message.innerHTML = `✅ Correct! You guessed it in <b>${attempts}</b> attempts. 🎉`;
  }
}
