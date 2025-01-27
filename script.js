const activities = [
  "Try to lick your elbow (scientific research purposes)",
  "Reorganize your Spotify playlists by 'emotional vibes'",
  "Write a Google review for your childhood dentist",
  "Create TikTok dance for your pet's breakfast routine",
  "Text your mom 'I've made a huge mistake' then reply 'Wrong chat'",
  "Attempt to fold fitted sheet while humming Mission Impossible theme",
  "Practice your Oscar acceptance speech for 'Best Procrastinator'",
  "Calculate how many grapes could fit in your bathtub",
  "Write breakup letter to your alarm clock",
  "Attempt to draw Mona Lisa using ketchup packets",
  "Refresh email for 100th time today (maybe magic happened?)",
  "Create elaborate backstory for stranger walking past window",
  "Try to remember all lyrics of Baby Shark in reverse order",
  "Pretend you're in music video while brushing teeth",
  "Update LinkedIn headline to 'Professional Time Waster'",
  "See how many grapes you can balance on dog's head",
  "Compose haiku about stapler existential crisis",
  "Re-enact famous movie scenes with snack foods",
  "Try to name all 50 states alphabetically... backwards",
  "Make PowerPoint presentation about benefits of napping",
  "Attempt to break world record for longest yawn",
  "Practice fake surprised face for unexpected compliments",
  "Create conspiracy theory about missing socks",
  "Try to make coffee cup look like modern art installation",
  "Write Yelp review for oxygen (3 stars: Gets the job done)",
  "Do dramatic slow-motion reach for the coffee cup",
  "Practice signature for when you're famous",
  "Try to count all the pixels on your screen",
  "Debate philosophy with Siri/Alexa about snack choices",
  "Create interpretive dance for printer error messages",
  "Try to remember what you did before internet existed",
  "Build elaborate domino chain with office supplies",
  "Attempt to moonwalk in socks on hardwood floor",
  "Compose theme song for your future autobiography",
  "Redesign country flags as food emojis",
  "Have staring contest with houseplant (they always win)",
  "Practice writing with opposite hand - become ambidextrous legend",
  "Try to name all Pixar movies using only food puns",
  "Create TikTok explaining quantum physics using laundry metaphors",
  "Attempt to breakdance while sitting in office chair",
  "Write passive-aggressive note to fridge about expired milk",
  "Try to balance spoon on nose while reciting Shakespeare",
  "Make Venn diagram of 'Things I Should Do' vs 'Things I Want To Do'",
  "Practice fake phone conversation for avoiding real work",
  "Count how many ceiling tiles are in the room",
  "Create fake language and teach it to your pet",
  "Try to solve world hunger using only items in your pantry",
  "Stage dramatic death scene when someone enters room",
  "Invent new yoga pose called 'The Deadline Avoidance'",
  "Try to convince yourself you're in The Truman Show",
  "Create ASMR video of aggressively typing then deleting emails"
];

// DOM Elements
const elements = {
  activityButton: document.getElementById('activityButton'),
  activityDisplay: document.getElementById('activityDisplay'),
  timerDisplay: document.getElementById('timerDisplay'),
  historyList: document.getElementById('historyList'),
  themeToggle: document.getElementById('themeToggle'),
  taskInput: document.getElementById('task-input'),
  taskPriority: document.getElementById('task-priority'),
  taskList: document.getElementById('task-list')
};

// State
let activityHistory = [];

// Event Listeners
elements.activityButton.addEventListener('click', handleActivityClick);
elements.themeToggle.addEventListener('change', toggleTheme);
document.getElementById('add-task').addEventListener('click', addTask);

// Initialize theme
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
  elements.themeToggle.checked = true;
}

function handleActivityClick() {
  const activity = getRandomActivity();
  showActivity(activity);
  addToHistory(activity);
  startActivityTimer(activity);
}

function getRandomActivity() {
  return activities[Math.floor(Math.random() * activities.length)];
}

function showActivity(activity) {
  elements.activityDisplay.textContent = activity;
  elements.activityDisplay.style.opacity = 1;
}

function addToHistory(activity) {
  const historyItem = document.createElement('li');
  historyItem.className = 'list-group-item history-item d-flex justify-content-between align-items-center';
  historyItem.innerHTML = `
    ${activity}
    <small class="text-muted">${new Date().toLocaleTimeString()}</small>
  `;
  elements.historyList.prepend(historyItem);
}

function startActivityTimer(activity) {
  const timeMatch = activity.match(/\d+/);
  if (!timeMatch) {
    elements.timerDisplay.textContent = '';
    return;
  }

  let seconds = parseInt(timeMatch[0]);
  const timerInterval = setInterval(() => {
    elements.timerDisplay.textContent = `Time left: ${seconds} seconds`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      elements.timerDisplay.textContent = "Time's up! Great job!";
    }
    seconds--;
  }, 1000);
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
  document.documentElement.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

function addTask() {
  const taskText = elements.taskInput.value.trim();
  if (!taskText) return;

  const taskItem = document.createElement('li');
  taskItem.className = `list-group-item d-flex justify-content-between align-items-center 
    ${elements.taskPriority.checked ? 'list-group-item-danger' : ''}`;
  
  taskItem.innerHTML = `
    ${taskText}
    ${elements.taskPriority.checked ? 
      '<span class="badge bg-danger rounded-pill">High Priority</span>' : ''}
  `;

  elements.taskList.appendChild(taskItem);
  elements.taskInput.value = '';
  elements.taskPriority.checked = false;
}