var dadosModel = require("../models/dadosModel")

function qtdEscolhido(req, res) {
    dadosModel.pegarDados().then(resultado => {
        res.json(resultado)
    }).catch(
        function (erro) {

            res.status(500).json(erro);

        }
    );
}

module.exports = {
    qtdEscolhido
}