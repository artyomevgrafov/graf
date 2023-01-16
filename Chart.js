
// chart configuration
const chartConfig = {
    type: 'line',
    data: {
        labels: [], // fill in with data from the server
        datasets: [{
            label: 'Dohod',
            data: [], // fill in with data from the server
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Prihod',
            data: [], // fill in with data from the server
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
      }
};

// Initial fetch call on page load
fetch('http://localhost:3000/data?date=' + new Date().toISOString().slice(0, 10))
    .then(response => response.json())
    .then(data => {
        chartConfig.data.labels = data.map(d => d.date);
        chartConfig.data.datasets[0].data = data.map(d => d.dohod);
        chartConfig.data.datasets[1].data = data.map(d => d.prihod);
        const ctx = document.getElementById('myChart');
        if (ctx) {
            new Chart(ctx.getContext('2d'), chartConfig);
        }
    });

// Fetch call on button click - day
document.getElementById('day-btn').addEventListener('click', () => {
  // Make a new fetch call
  fetch('http://localhost:3000/data?date=' + new Date().toISOString().slice(0, 10))
  .then(response => response.json())
.then(data => {
// Do something with the data
console.log(data);
})
.catch(error => {
console.error(error);
});
});

// Fetch call on button click - month
document.getElementById('month-btn').addEventListener('click', () => {
// Make a new fetch call
fetch('http://localhost:3000/data?month=' + new Date().toISOString().slice(0, 7))
.then(response => response.json())
.then(data => {
// Do something with the data
console.log(data);
})
.catch(error => {
console.error(error);
});
});

// Fetch call on button click - year
document.getElementById('year-btn').addEventListener('click', () => {
// Make a new fetch call
fetch('http://localhost:3000/data?year=' + new Date().getFullYear())
.then(response => response.json())
.then(data => {
// update chartConfig with new data
chartConfig.data.labels = data.map(d => d.date);
chartConfig.data.datasets[0].data = data.map(d => d.dohod);
chartConfig.data.datasets[1].data = data.map(d => d.prihod);
// update chart with new data
const ctx = document.getElementById('myChart');
if (ctx) {
new Chart(ctx.getContext('2d'), chartConfig);
}
})
.catch(error => {
console.error(error);
});
});

// Fetch call on swipe right
const swipeRight = document.getElementById('swipe-right');
if (swipeRight) {
swipeRight.addEventListener('click', () => {
// Decrement the date by one day
let date = new Date();
date.setDate(date.getDate() - 1);

        // Make a new fetch call
    fetch('http://localhost:3000/data?date=' + date.toISOString().slice(0, 10))
        .then(response => response.json())
        .then(data => {
            // update chartConfig with new data
            chartConfig.data.labels = data.map(d => d.date);
            chartConfig.data.datasets[0].data = data.map(d => d.dohod);
            chartConfig.data.datasets[1].data = data.map(d => d.prihod);
            // update chart with new data
            const ctx = document.getElementById('myChart');
            if (ctx) {
                new Chart(ctx.getContext('2d'), chartConfig);
            }
        })
        .catch(error => {
            console.error(error);
        });
});
}

// Fetch call on swipe left
const swipeLeft = document.getElementById('swipe-left');
if (swipeLeft) {
swipeLeft.addEventListener('click', () => {
// Increment the date by one day
let date = new Date();
date.setDate(date.getDate() + 1);
 // Make a new fetch call
    fetch('http://localhost:3000/data?date=' + date.toISOString().slice(0, 10))
        .then(response => response.json())
        .then(data => {
            // update chartConfig with new data
            chartConfig.data.labels = data.map(d => d.date);
            chartConfig.data.datasets[0].data = data.map(d => d.dohod);
            chartConfig.data.datasets[1].data = data.map(d => d.prihod);
            // update chart with new data
            const ctx = document.getElementById('myChart');
            if (ctx) {
                new Chart(ctx.getContext('2d'), chartConfig);
            }
        })
        .catch(error => {
            console.error(error);
        });
});
}