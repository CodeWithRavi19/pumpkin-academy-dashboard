// Bar Chart
const ctx1 = document.getElementById('barChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Teachers',
                data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
                backgroundColor: '#7b4fc9'
            },
            {
                label: 'Students',
                data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
                backgroundColor: '#f6a83a'
            }
        ]
    }
});

// Pie Chart
const ctx2 = document.getElementById('pieChart').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            data: [40, 60],
            backgroundColor: ['#7b4fc9', '#f6a83a']
        }]
    }
});
