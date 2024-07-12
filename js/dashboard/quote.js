function generateQuote() {
  const fallbackQuotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don’t take.",
    "The only limit to our realization of tomorrow is our doubts of today.",
  ];

  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      const quote = data.content;
      const quoteP = document.getElementById("quoteText");

      quoteP.textContent = quote;
    })
    .catch(function (err) {
      console.log(err);
      const randomQuote =
        fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      const quoteP = document.getElementById("quoteText");

      quoteP.textContent = randomQuote;
    });
}

setInterval(generateQuote, 3600000);
