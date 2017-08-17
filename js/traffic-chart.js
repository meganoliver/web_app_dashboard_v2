
const trafficList = document.getElementById('traffic-list');
const buttons = trafficList.children;

//Day is default button//
buttons[0].className = 'active';


//Web Traffic//
  //Hourly//
  const getHour = document.getElementById('hour-traffic');

  const hourlyTraffic = new Chart(getHour, {
    type: 'line',
    data: {
      labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
      datasets: [{
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

    //Daily//
    const getDay = document.getElementById('day-traffic');

    const dayTraffic = new Chart(getDay, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [{
          data: [2500, 1500, 3000, 2000, 1500, 2000, 2500],
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

    //Weekly//
    const getWeek = document.getElementById('week-traffic');

    const weeklyTraffic = new Chart(getWeek, {
      type: 'line',
      data: {
        labels: ['7/9', '7/16', '7/23', '7/30', '8/6', '8/13'],
        datasets: [{
          data: [4000, 3500, 4500, 2000, 5000, 4000],
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

    //Monthly//
    const getMonth = document.getElementById('month-traffic');

    const monthlyTraffic = new Chart(getMonth, {
      type: 'line',
      data: {
        labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          data: [8000, 9500, 7500, 8000, 9000, 10000, 9500, 7000, 8500],
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

//Functions to hide and show graphs based on buttons

  //Create a const for each chart.
  const hour = document.getElementById('hour-traffic');
  const day = document.getElementById('day-traffic');
  const week = document.getElementById('week-traffic');
  const month = document.getElementById('month-traffic');

  //Setting defaults
  hour.className = 'visible';
  day.className = 'hidden';
  week.className = 'hidden';
  month.className = 'hidden';
  // Match buttons to graphs and show graphs if button is pushed, else hide them.

const graphs = [hour, day, week, month]; //Array of the graphs

//Loop through button clicks
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      buttons[0].className = '';

      if(e) {
        buttons[i].removeClassName = 'active';
        graphs[i].className = 'visible';
      }
    });

}

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
