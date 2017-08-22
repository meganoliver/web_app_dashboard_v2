//Create a circle svg
function notificationBubble() {
  createCircle = d3.select('.bell').append('circle')
    .attr('id', 'svg-alert')
    .attr('r', '8')
    .attr('cx', '25')
    .attr('cy', '0')
    .attr('stroke', 'white')
    .attr('fill', '#ff8d1e');
};

notificationBubble()


//Close alert box and circle on click
const closeAlert = document.getElementById('close');
const hide = document.getElementById('alert');
const alertCircle = document.getElementById('svg-alert')

closeAlert.addEventListener('click', () => {
  hide.style.visibility = 'hidden';
  alertCircle.style.display = 'none';
});
