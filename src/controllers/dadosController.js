var dadosModel = require("../models/dadosModel")

function qtdEscolhido(req, res) {
    dadosModel.pegarDados().then(resultado => {
        console.log(resultado)
    }).catch(
        function (erro) {

            res.status(500).json(erro);

        }
    );
}

module.exports = {
    qtdEscolhido
}