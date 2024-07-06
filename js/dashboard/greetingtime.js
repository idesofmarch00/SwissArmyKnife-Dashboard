function GreetingTime() {
  var today = new Date();

  const currentTimeEl = document.getElementById("currentTimeEl");

  function getCurrentTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString("en-US", {
      timeStyle: "medium",
    });
    currentTimeEl.textContent = currentTime;
  }

  setInterval(getCurrentTime, 10);

  const greet1 = "Good Morning,Sahil";
  const greet2 = "Good Afternoon,Sahil";
  const greet3 = "Good Evening,Sahil";
  const greet4 = "Good Night,Sahil";

  var greeting = document.getElementById("greetingHeading");

  if (today.getHours() > 5 && today.getHours() < 12) {
    greeting.innerHTML = greet1;
  }
  if (today.getHours() >= 12 && today.getHours() < 16) {
    greeting.innerHTML = greet2;
  }
  if (today.getHours() >= 16 && today.getHours() < 22) {
    greeting.innerHTML = greet3;
  }
  if (today.getHours() >= 22 || today.getHours() <= 5) {
    greeting.innerHTML = greet4;
  }
}
setInterval(GreetingTime, 10);
