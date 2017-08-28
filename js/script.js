const notifyBubble = document.getElementById('notify-bell');
const closeAlert = document.getElementById('close');
const mainBody = document.getElementById('body');
const hide = document.getElementById('alert');
const overlay = document.getElementById('pop-up-overlay');
const popUpBox = document.getElementById('pop-up-div');
const popUpClose = document.getElementsByClassName('alert-close');
const popUpMessage = document.getElementsByClassName('pop-up-alert');
const searchUsers = document.getElementById('user-search');
const userNames = document.getElementsByClassName('userName');
const dataList = document.getElementById('users');
const message = document.getElementById('message-user');
const messageBtn = document.getElementById('message-button');
const messageDiv = document.getElementById('message-div');
const newDiv = document.createElement('div');
const formSettings = document.getElementById('form-settings');
const settingsBtns = document.getElementById('buttons');
const saveBtn = document.getElementById('save-button');
const resetBtn = document.getElementById('reset-button');
const emailSwitch = document.getElementById('email');
const profileSwitch = document.getElementById('public');
const timeZone = document.getElementById('time-zone');

//Create a circle svg
function g () {
  createG = d3.select('.bell').append('g')
    .attr('id', 'notify')
    .attr('width', '16')
};

g()

function notificationBubble() {
  createCircle = d3.select('#notify').append('circle')
    .attr('id', 'svg-alert')
    .attr('r', '8')
    .attr('cx', '25')
    .attr('cy', '0')
    .attr('stroke', 'white')
    .attr('fill', '#ff8d1e');
};

notificationBubble()

function number() {
  createText = d3.select('#notify').append('text')
    .attr('id', 'alert-number')
    .attr('x', '25')
    .attr('y', '4')
    .attr('text-anchor', 'middle')
    .attr('fill', 'black')
    .attr('font-size', '.7rem')
    .attr('font-weight', 'bold')
    .text(2)
};

number()

//Close alert box on click

closeAlert.addEventListener('click', () => {
  body.removeChild(hide);
});

//Create alert box on notification bubble click

popUpBox.className = 'hidden';
overlay.className = 'hidden';

notifyBubble.addEventListener('click', (e) =>{
    popUpBox.className = 'visible';
    overlay.className = 'visible';
});

//Close alert messages when x is clicked. Close box when all messages are gone.

function hideBubble() {
  let bubble = notifyBubble.lastElementChild;
  notifyBubble.removeChild(bubble);
}

function closeBox() {
  if(popUpBox.children.length < 1) {
    popUpBox.className = 'hidden';
    overlay.className = 'hidden';
    hideBubble();
  }
}

popUpBox.addEventListener('click', (e) =>{
  let notification = e.target.parentNode;
  let notificationParent = notification.parentNode;
  if(e.target.className = 'popUpClose' && popUpBox.children.length > 0) {
    notificationParent.removeChild(notification);
    closeBox();
  }
});


//Autocomplete search field

searchUsers.addEventListener('input', function(e) {
  for(let i = 0; i < searchUsers.length; i++) {
    console.log('typing');
    let searchContent = searchUsers.value.toLowerCase();
    console.log(searchContent);
  }
});

//Create Error message if no content and sent message if content.

function alert() {
  newDiv.style.color = 'red';
  newDiv.className = 'submitMsg';
  messageDiv.appendChild(newDiv);
  const errorMsg = document.createTextNode("Please enter a user and a message before submitting.");
  newDiv.appendChild(errorMsg);
}

function success() {
  newDiv.style.color = 'green';
  newDiv.className = 'submitMsg';
  messageDiv.appendChild(newDiv);
  let success = document.createTextNode("Your message has been sent.");
  newDiv.appendChild(success);
}

function clearMsg() {
  if(messageDiv.contains(newDiv)) {
    newDiv.textContent = "";
    messageDiv.removeChild(newDiv);
  }
}

messageBtn.addEventListener('click', (e) => {
    clearMsg();
    if(searchUsers.value.length === 0 || message.value.length === 0) {
      alert();
    } else if(searchUsers.value.length > 0 && message.value.length > 0) {
      success();
    }
});

//Set up local storage for settings.

function emailNotification() {
  if (emailSwitch.checked == true){
    localStorage.setItem('emailChecked', true);
  } else {
    localStorage.removeItem('emailChecked');
  }
}

function publicProfile() {
  if (profileSwitch.checked == true){
    localStorage.setItem('profileChecked', true);
  } else {
    localStorage.removeItem('profileChecked');
  }
}

function selectTime() {
  let selectZone = timeZone.options.selectedIndex;
  localStorage.setItem('zone', selectZone);
}

settingsBtns.addEventListener('click', (e) => {
  if (e.target === saveBtn) {
    emailNotification();
    publicProfile();
    selectTime();
  }

  if (e.target === resetBtn) {
    localStorage.removeItem('emailChecked');
    localStorage.removeItem('profileChecked');
    localStorage.removeItem('zone');
  }
});

window.addEventListener('load', function() {
  emailSwitch.checked = localStorage.emailChecked;
  profileSwitch.checked = localStorage.profileChecked;
  timeZone.options.selectedIndex = parseInt(localStorage.zone);
});
