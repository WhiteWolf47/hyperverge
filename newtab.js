document.addEventListener('DOMContentLoaded', () => {
    // Google Slide Integration
    const slideFrame = document.getElementById('slide-frame');
    slideFrame.src = 'https://docs.google.com/presentation/d/e/your-slide-id/embed';
  
    // Pomodoro Timer
    let timer;
    let timeLeft = 25 * 60;
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start-timer');
    const resetButton = document.getElementById('reset-timer');
  
    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      if (timeLeft === 0) {
        clearInterval(timer);
        alert('Pomodoro session completed!');
      } else {
        timeLeft--;
      }
    }
  
    startButton.addEventListener('click', () => {
      if (!timer) {
        timer = setInterval(updateTimer, 1000);
      }
    });
  
    resetButton.addEventListener('click', () => {
      clearInterval(timer);
      timer = null;
      timeLeft = 25 * 60;
      updateTimer();
    });
  
    // Google Spreadsheet
    const sheetFrame = document.getElementById('sheet-frame');
    sheetFrame.src = 'https://docs.google.com/spreadsheets/d/e/your-sheet-id/pubhtml?widget=true&amp;headers=false';
  
    // Google Form
    const formFrame = document.getElementById('form-frame');
    formFrame.src = 'https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true';
  
    // Daily Growth Checklist
    const checklist = document.getElementById('checklist');
    const newItemInput = document.getElementById('new-item');
    const addItemButton = document.getElementById('add-item');
  
    function addChecklistItem(text) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(text));
      checklist.appendChild(li);
    }
  
    addItemButton.addEventListener('click', () => {
      const text = newItemInput.value.trim();
      if (text) {
        addChecklistItem(text);
        newItemInput.value = '';
      }
    });
  
    // Load saved checklist items
    chrome.storage.sync.get(['checklist'], (result) => {
      if (result.checklist) {
        result.checklist.forEach(addChecklistItem);
      }
    });
  
    // Save checklist items when added
    addItemButton.addEventListener('click', () => {
      chrome.storage.sync.get(['checklist'], (result) => {
        const items = result.checklist || [];
        items.push(newItemInput.value.trim());
        chrome.storage.sync.set({ checklist: items });
      });
    });
  
    // Announcements
    const announcementText = document.getElementById('announcement-text');
    const announcements = [
      "Team meeting at 2 PM today!",
      "Don't forget to submit your weekly reports.",
      "New project kickoff next Monday!"
    ];
    let currentAnnouncement = 0;
  
    function rotateAnnouncements() {
      announcementText.textContent = announcements[currentAnnouncement];
      currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
    }
  
    rotateAnnouncements();
    setInterval(rotateAnnouncements, 10000); // Rotate every 10 seconds
  });