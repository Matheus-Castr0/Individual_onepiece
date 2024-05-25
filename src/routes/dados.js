var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/qtdEscolhidos", function (req, res) {
    dadosController.qtdEscolhido(req, res)
})

router.get("/qtdEpisodios", function (req, res) {
    dadosController.qtdEpisodios(req, res)
})

router.get("/Sagas&Episodios/:idSaga", function (req, res) {
    dadosController.SagaEpisodio(req, res)
})

module.exports = router;