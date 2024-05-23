var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/qtdEcolhidos", function (req, res) {
    dadosController.qtdEscolhido(req, res)
})

module.exports = router;