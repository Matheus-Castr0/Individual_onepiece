window.onload = plotarKPIs();
window.onload = buscarQtdEscolhidos();

function buscarQtdEscolhidos() {
    fetch("http://localhost:3333/banco/qtdEscolhidos").then(res => {
        res.json().then(response => {
            plotarGraficoBarra(response)
        })
    })
}

function plotarKPIs() {
    var epAtual = sessionStorage.getItem('EP_ATUAL')
    var epsRestantes = 1108-epAtual
    document.getElementById('epsRestantes').innerHTML = `${epsRestantes}/1108`

    var tempoGastoMin = epAtual*20
    var tempoGastoHora = tempoGastoMin/60
    document.getElementById('tempoGasto').innerHTML = `${tempoGastoMin.toFixed(0)} Minutos <br> OU <br>${tempoGastoHora.toFixed(0)} Horas`

    var tempoRestanteMin = epsRestantes*20;
    var tempoRestanteHora = tempoRestanteMin/60;
    document.getElementById('tempoRestante').innerHTML = `${tempoRestanteMin.toFixed(0)} Minutos <br> OU <br>${tempoRestanteHora.toFixed(0)} Horas`

}

function plotarGraficoBarra(dadosPersonagens) {
    var personagens = []
    var vezesEscolhidas = []

    for (var i = 0; i <= 9 ; i++) {
        personagens.push(dadosPersonagens[i].nome)
        vezesEscolhidas.push(dadosPersonagens[i].escolhido)
    }

    var graficoBarra = document.getElementById('graficoBar');
    
    new Chart(graficoBarra, {
        type: 'bar',
        data: {
            labels: personagens,
            datasets: [{
                label: 'Personagem Escolhido como foto de Usuario',
                data: vezesEscolhidas,
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

}