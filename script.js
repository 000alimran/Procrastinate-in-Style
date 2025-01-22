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
  const historyList = document.getElementById('historyList');
  const themeToggle = document.getElementById('themeToggle');
  
  // Activity history array
  let activityHistory = [];
  
  // Function to get a random activity
  function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
  }
  
  // Function to update activity history
  function updateHistory(activity) {
    const listItem = document.createElement('li');
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
  });
  
  // Event listener for the theme toggle button
  themeToggle.addEventListener('click', () => {
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
  }