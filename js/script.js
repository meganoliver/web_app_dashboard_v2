//Create a circle svg//
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


//Close alert box and circle on click//
const closeAlert = document.getElementById('close');
const hide = document.getElementById('alert');
const alertCircle = document.getElementById('svg-alert')

closeAlert.addEventListener('click', () => {
  hide.style.display = 'none';
  alertCircle.style.display = 'none';
});

//Web Traffic//
const mainTraffic = document.getElementById('traffic-graph');

let trafficGraph = new Chart(mainTraffic, {
  type: 'line',
  data: {
    labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    datasets: [{
      label: 'TRAFFIC',
      data: [350, 600, 500, 800, 900, 1150, 950, 1200, 1350, 900, 1500, 1250, 1400],
      backgroundColor: 'rgba(30, 144, 255, 0.25)',
      borderColor: 'rgba(30, 32, 255, 1)',
      borderWidth: 1.5,
      fill: true,
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(30, 32, 255, 1)',
      pointRadius: 5,
      lineTension: 0,
      pointStyle: 'circle'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    labels: {
      display: false,
      position: top
    },
    legend: {
      display: false
    },
    scales: {
      xAxis: [{
        gridLines: [{
        drawTicks: false,
        drawOnChartArea: true
        }]
      }],
      yAxis: [{
        gridLines: [{
          drawTicks: false,
          drawOnChartArea: true
        }],
      }],
    }
  }
});

//Daily Traffic//

const dailyTraffic = document.getElementById('daily-traffic');

let dailyTrafficGraph = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: ['50', '300', '250', '350', '300', '200', '100'],
      backgroundColor: 'rgb(30, 32, 255)',
      barPercentage: 0.3
    }]
  }
  ,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      fullWidth: true
    },
    tooltips: {
      enabled: true,
      backgroundColor: 'rgb(255, 141, 30)'
    },
    scales: {
      yAxes: [{
      ticks: {
        min: 0,
        max: 400,
        stepSize: 50
      }
    }]
    }
  }
});

//Mobile Users//

const mobile = document.getElementById('mobile-users');

let mobileChart = new Chart(mobile, {
  type: 'doughnut',
  data: {
    labels: ['phones', 'tablets', 'desktops'],
    datasets: [{
      data: ['48', '22', '30'],
      backgroundColor: ['rgba(30, 32, 255, .5)', 'rgba(30, 144, 256, .5)', 'rgba(141, 30, 255, .5)'],
      hoverBackgroundColor: ['rgba(30, 32, 255, 1)', 'rgba(30, 144, 256, 1)', 'rgba(141, 30, 255, 1)']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontSize: 17
      }
    },
    layout: {
      padding: 20
    },
    animation: {
      animateScale: true
    }
  }
});
