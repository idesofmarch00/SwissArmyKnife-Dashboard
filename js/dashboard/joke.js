/**
 * Function to fetch and display a joke from the icanhazdadjoke API.
 */
function generateJoke() {
  fetch("https://icanhazdadjoke.com/slack")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.attachments[0].text;
      const jokeP = document.getElementById("jokeText");

      jokeP.textContent = joke;
    })
    .catch(function (err) {
      console.log(err);
    });
}

generateJoke();
