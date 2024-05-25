window.onload = buscarDadosEps(1)

function buscarDadosEps(saga) {
    fetch(`http://localhost:3333/banco/Sagas&Episodios/${saga}`, {
    }).then(res => {
        res.json().then(response => {
            mostrarEps(response)
        })
    })
}

function mostrarEps(episodios) {
    var tipoClass;
    Eps.innerHTML = ''
    for (var i = 0; i < episodios.length; i++) {
        episodios[i].tipo == 'Filler' ? tipoClass = 'filler' : tipoClass = 'canonico'
        if(episodios[i].epFinal == null) {
            Eps.innerHTML += `<p>Arco ${episodios[i].nome}: episódios ${episodios[i].epInicial} - <span class=${tipoClass}>(${episodios[i].tipo})</span></p>`
        } else {
            Eps.innerHTML += `<p>Arco ${episodios[i].nome}: episódios ${episodios[i].epInicial} ao ${episodios[i].epFinal} <span class=${tipoClass}>(${episodios[i].tipo})</span></p>`
        }
    }

}