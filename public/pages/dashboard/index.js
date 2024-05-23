var graficoBarra = document.getElementById('graficoBar');
var graficoDonut = document.getElementById('graficoDonut');

new Chart(graficoBarra, {
    type: 'bar',
    data: {
        labels: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe'],
        datasets: [{
            label: 'Personagem Escolhido como foto de Usuario',
            data: [12, 19, 3, 5, 2, 3, 4, 1, 3, 9],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(graficoDonut, {
    type: 'doughnut',
    data: {
        labels: ['Abaixo do Episodio 250', 'Entre o Episodio 250 e 500', 'Entre o Episodio 500 e 750', 'Acima do Episodio 1000'],
        datasets: [{
            data: [70, 50, 90, 30],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(15, 245, 36)'
            ],
            hoverOffset: 4
        }]
    }
})