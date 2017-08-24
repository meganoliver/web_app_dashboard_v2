const notifyBubble = document.getElementById('notify-bell');
const overlay = document.getElementById('alert-overlay');
const alertBox = document.getElementById('alert-box');
const closeAlert = document.getElementById('close');
const hide = document.getElementById('alert');
const alertCircle = document.getElementById('svg-alert');
const popUpClose = document.getElementsByClassName('alert-close');
const alertMessage = document.getElementsByClassName('pop-up-alert');


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
  alertCircle.style.visibility = 'hidden';
});

//Create alert box on notification bubble click

alertBox.className = 'hidden';
overlay.className = 'hidden';

notifyBubble.addEventListener('click', (e) =>{
    alertBox.className = 'visible';
    overlay.className = 'visible';
});

//Close alert messages when x is clicked
for(let i = 0; i < popUpClose.length; i++) {
  popUpClose[i].addEventListener('click', function(e) {
    alertBox.removeChild(popUpClose[i]);
    alertBox.removeChild(alertMessage[i]);
    
     if(popUpClose.length == 0 && e) {
      alertBox.style.visibility = 'hidden';
      overlay.style.visibility = 'hidden';
    }
  });
}
