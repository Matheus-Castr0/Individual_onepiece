var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {

                    if (resultadoAutenticar.length == 1) {
                        
                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            epAtual: resultadoAutenticar[0].epAtual,
                            personagem: resultadoAutenticar[0].fkPersonagem
                        });
                        
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var epAtual = req.body.epAtualServer;
    var epsDia = req.body.epsDiaServer;
    var iconeUsuario = req.body.iconeUsuarioServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (epAtual == undefined) {
        res.status(400).send("Seu Episodio atual está undefined!");
    } else if (epsDia == undefined) {
        res.status(400).send("Sua Quantidade de episodios por dia está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, epAtual, epsDia, iconeUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {

                    if(erro.code === 'ER_DUP_ENTRY') {
                        res.status(500).json('Esse E-mail ja possui cadastro!');
                    }

                }
            );
    }
}

function atualizarEp(req, res) {
    var idUsuario = req.body.idUsuarioServer
    var epAtual = req.body.epAtualServer

    usuarioModel.atualizarEp(idUsuario, epAtual)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    autenticar,
    cadastrar,
    atualizarEp
}