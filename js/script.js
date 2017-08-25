const notifyBubble = document.getElementById('notify-bell');
const closeAlert = document.getElementById('close');
const hide = document.getElementById('alert');
const overlay = document.getElementById('pop-up-overlay');
const popUpBox = document.getElementById('pop-up-div');
const popUpClose = document.getElementsByClassName('alert-close');
const popUpMessage = document.getElementsByClassName('pop-up-alert');


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
  hide.style.visibility = 'hidden';
});

//Create alert box on notification bubble click

popUpBox.className = 'hidden';
overlay.className = 'hidden';

function hideBubble() {
  let bubble = notifyBubble.lastElementChild;
  notifyBubble.removeChild(bubble);
}

notifyBubble.addEventListener('click', (e) =>{
    popUpBox.className = 'visible';
    overlay.className = 'visible';
});

//Close alert messages when x is clicked

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
