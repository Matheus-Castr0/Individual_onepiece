sessionStorage.length == 4 ? load() : (alert('Voce deve fazer login para visualizar a dashboard!'), window.open('/pages/login/index.html', '_self'))

function load() {
    window.onload = plotarKPIs()
    window.onload = buscarQtdEscolhidos()
    window.onload = buscarQtdEpisodios()
    window.onload = definirInfos()

    function buscarQtdEscolhidos() {
        fetch("http://localhost:3333/banco/qtdEscolhidos").then(res => {
            res.json().then(response => {
                plotarGraficoBarra(response)
            })
        })
    }

    function buscarQtdEpisodios() {
        fetch("http://localhost:3333/banco/qtdEpisodios").then(res => {
            res.json().then(response => {
                plotarGraficoDonut(response)
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

        document.getElementById('ipt_episodio').value = epAtual

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

    function plotarGraficoDonut(dadosEpisodios) {
        var episodios = [0, 0, 0, 0]

        for (var i = 0; i < dadosEpisodios.length ; i++) {
            
            if(dadosEpisodios[i].epAtual <= 250) {
                episodios[0]++
            } else if(dadosEpisodios[i].epAtual > 250 && dadosEpisodios[i].epAtual <= 500) {
                episodios[1]++
            } else if(dadosEpisodios[i].epAtual > 500 && dadosEpisodios[i].epAtual <= 750) {
                episodios[2]++
            } else {
                episodios[3]++
            }

        }

        var graficoDonut = document.getElementById('graficoDonut');

        new Chart(graficoDonut, {
            type: 'doughnut',
            data: {
                labels: ['Abaixo do Episodio 250', 'Entre o Episodio 250 e 500', 'Entre o Episodio 500 e 750', 'Acima do Episodio 750'],
                datasets: [{
                    data: episodios,
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
    }

    function definirInfos() {
        var nome = sessionStorage.getItem('NOME_USUARIO')
        var personagem = sessionStorage.getItem('PERSONAGEM')

        nomeUsuario.innerHTML = `Olá, ${nome}`
        iconeUsuario.innerHTML = `<img src="../../assets/images/icons_users/icon${personagem}.png">`
    }
}

function habilitarInput() {
    ipt_episodio.disabled = false
    btn_ep.style.display = 'none'
    div_confirmar.style.display = 'flex'
}

function cancelar() {
    div_confirmar.style.display = 'none'
    ipt_episodio.disabled = true
    btn_ep.style.display = 'flex'

    var epAtual = sessionStorage.getItem('EP_ATUAL')
    document.getElementById('ipt_episodio').value = epAtual
}

function confirmar() {
    var idUsuario = sessionStorage.getItem("ID_USUARIO")
    var epAtual = Number(ipt_episodio.value)

    sessionStorage.EP_ATUAL = epAtual

    fetch("http://localhost:3333/usuarios/atualizarEp", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            epAtualServer: epAtual
        })
    }).then(res => {
        if(res.ok) {
            load()
            window.location.reload()
        } else {
            alert('Erro ao atualizar Episodio')
        }
    })
}

function sair() {
    sessionStorage.clear()
    window.open('/pages/login/index.html','_self')
}