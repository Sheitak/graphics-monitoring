
//Set de couleurs pour Chart.js
window.chartColors = {
    red: 'rgb(255,99,132)',
    green: 'rgb(75,192,192)',
    blue: 'rgb(54,162,235)',
    yellow: 'rgb(255,205,86)',
    orange: 'rgb(255,159,64)',
    purple: 'rgb(153,102,255)',
    pink: 'rgb(231,103,207)',
    grey: 'rgb(201,203,207)',
    apple: 'rgb(51,220,107)',
};

// Graphique d'affichage des différentes courbes.
let datasets = [];

for (let j = 0; j < labels.length; j++) {
    datasets.push({
        label: labels[j],
        backgroundColor: window.chartColors[Object.keys(window.chartColors)[j]],
        borderColor: window.chartColors[Object.keys(window.chartColors)[j]],
        data: totalValues[j],
        fill: false,
    })
}

const config = {
    type: 'line',
    data: {
        labels: ['lun.', 'mar.', 'merc.', 'jeu.', 'vend.', 'sam.', 'dim.'],
        datasets: datasets,
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Météo avec Chart.js'
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: true,
                    beginAtZero: false,
                }
            }]
        }
    }
};

// Récupération du graphique canvas en html vers l'index.
window.onload = function() {
    const ctx = document.querySelector('#chart-js').getContext('2d');
    window.myLine = new Chart(ctx, config);
};
