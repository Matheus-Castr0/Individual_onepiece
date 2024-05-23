var dadosModel = require("../models/dadosModel")

function qtdEscolhido(req, res) {
    for (var i = 1; i <= 10; i++) {
        dadosModel.pegarDados(i).then(resultado => {
            res.json(resultado)
        })
    }
}

module.exports = {
    qtdEscolhido
}