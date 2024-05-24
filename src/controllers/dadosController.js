var dadosModel = require("../models/dadosModel")

function qtdEscolhido(req, res) {
    dadosModel.pegarDadosEscolhidos().then(resultado => {
        res.json(resultado)
    }).catch(
        function (erro) {

            res.status(500).json(erro);

        }
    );
}

function qtdEpisodios(req, res) {
    dadosModel.pegarDadosEpisodios().then(resultado => {
        res.json(resultado)
    }).catch(
        function (erro) {

            res.status(500).json(erro);

        }
    );
}

module.exports = {
    qtdEscolhido,
    qtdEpisodios
}