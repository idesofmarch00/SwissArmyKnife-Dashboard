/**
 * Function to display the current time and a greeting message based on the time of day.
 */
function GreetingTime() {
  // Get the current date and time
  const today = new Date();

  // Get the DOM element to display the current time
  const currentTimeEl = document.getElementById("currentTimeEl");

  /**
   * Function to get the current time and update the DOM element.
   */
  function getCurrentTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString("en-US", {
      timeStyle: "medium",
    });
    currentTimeEl.textContent = currentTime;
  }

  // Update the current time every 10 milliseconds
  setInterval(getCurrentTime, 10);

  // Define greeting messages
  const greet1 = "Good Morning,Sahil";
  const greet2 = "Good Afternoon,Sahil";
  const greet3 = "Good Evening,Sahil";
  const greet4 = "Good Night,Sahil";

  // Get the DOM element to display the greeting message
  const greeting = document.getElementById("greetingHeading");

  // Determine the appropriate greeting message based on the current hour
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

// Update the greeting message every 10 milliseconds
setInterval(GreetingTime, 10);
