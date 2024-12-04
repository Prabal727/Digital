// Function to update the time
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('am-pm').textContent = amPm;
  }
  
  function setAlarmMessage() {
    const wakeUp = document.getElementById('wake-up').value;
    const lunchTime = document.getElementById('lunch-time').value;
    const napTime = document.getElementById('nap-time').value;
    const nightTime = document.getElementById('night-time').value;
  
    const now = new Date();
    const currentHour = now.getHours();
  
    let message = 'Enjoy your time!';
    if (currentHour >= parseInt(wakeUp) && currentHour < parseInt(wakeUp) + 1) {
      message = 'Good morning!! Wake up!';
    } else if (currentHour >= parseInt(lunchTime) && currentHour < parseInt(lunchTime) + 1) {
      message = 'It’s lunchtime!';
    } else if (currentHour >= parseInt(napTime) && currentHour < parseInt(napTime) + 1) {
      message = 'Time for a nap!';
    } else if (currentHour >= parseInt(nightTime) && currentHour < parseInt(nightTime) + 1) {
      message = 'Good night!';
    }
  
    document.getElementById('message').textContent = message;
    document.getElementById('alarm-message').textContent = `Alarm set for Wake-up: ${wakeUp} AM, Lunch: ${lunchTime} PM, Nap: ${napTime} PM, Night: ${nightTime} PM`;
  }
  
  // Update the clock every second
  setInterval(updateTime, 1000);
  
  // Set the alarm message when button is clicked
  document.getElementById('set-alarm').addEventListener('click', setAlarmMessage);
  