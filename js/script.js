

function notificationBubble() {
  createCircle = d3.select('.bell').append('circle')
    .attr('r', '5')
    .attr('cx', '22')
    .attr('cy', '-2')
    .attr('fill', 'red')
}
