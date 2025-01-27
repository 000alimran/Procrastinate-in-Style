// Array of random activities
const activities = [
    "Watch a 10-second cat video",
    "Spin in your chair three times",
    "Write a haiku about your desk",
    "Do 5 jumping jacks",
    "Stretch your arms and take a deep breath",
    "Dance to your favorite song for 30 seconds",
    "Write down three things you're grateful for",
    "Make a paper airplane and throw it",
    "Look out the window and name three things you see",
    "Tell yourself a joke",
    "Draw a doodle of your favorite animal",
    "Stand up and touch your toes",
    "Say 'hello' to a plant in your room",
    "Pretend you're a secret agent for 1 minute",
    "Sing the chorus of your favorite song",
    "Balance a pen on your nose",
    "Write a thank-you note to your future self",
    "Try to touch the ceiling",
    "Do a dramatic reading of a random sentence from a book",
    "Take a selfie with a funny face"
  ];
  
  // Get DOM elements
  const activityButton = document.getElementById('activityButton');
  const activityDisplay = document.getElementById('activityDisplay');
  const timerDisplay = document.getElementById('timerDisplay');
  const historyList = document.getElementById('historyList');
  const themeToggle = document.getElementById('themeToggle');
  
  // Activity history array
  let activityHistory = [];
  
  // Function to get a random activity
  function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
  }
  
  // Function to start a countdown timer
  function startTimer(seconds, activity) {
    let timer = seconds;
    timerDisplay.textContent = `Time left: ${timer} seconds`;
    timerDisplay.classList.add('fade-in');
    const interval = setInterval(() => {
      timer--;
      timerDisplay.textContent = `Time left: ${timer} seconds`;
      if (timer <= 0) {
        clearInterval(interval);
        timerDisplay.textContent = "Time's up! Great job!";
      }
    }, 1000);
  }
  
  // Function to update activity history
  function updateHistory(activity) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = activity;
    historyList.appendChild(listItem);
  }
  
  // Event listener for the activity button
  activityButton.addEventListener('click', () => {
    const activity = getRandomActivity();
    activityDisplay.textContent = activity;
    activityDisplay.classList.add('fade-in');
    activityHistory.push(activity);
    updateHistory(activity);
  
    // Start a timer if the activity includes a time
    if (activity.includes("seconds")) {
      const time = parseInt(activity.match(/\d+/)[0]); // Extract time from activity
      startTimer(time, activity);
    } else {
      timerDisplay.textContent = ""; // Clear timer display
    }
  });
  
  // Event listener for the theme toggle button
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
  
  // Initialize dark mode if previously set
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
  }
  function startBreakTimer() {
    let timer = 5 * 60; // 5 minutes in seconds
    timerDisplay.textContent = `Break: ${Math.floor(timer / 60)}:${timer % 60}`;
    const interval = setInterval(() => {
      timer--;
      timerDisplay.textContent = `Break: ${Math.floor(timer / 60)}:${timer % 60}`;
      if (timer <= 0) {
        clearInterval(interval);
        alert("Break's over! Time to focus again!");
      }
    }, 1000);
  }
  