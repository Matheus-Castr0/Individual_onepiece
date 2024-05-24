var database = require("../database/config");

function pegarDadosEscolhidos() {

    var instrucaoSql = `
        SELECT personagem.nome, COUNT(usuario.fkPersonagem) as escolhido FROM personagem LEFT JOIN usuario
        ON idPersonagem = fkPersonagem GROUP BY nome;
    `
    return database.executar(instrucaoSql)

}

function pegarDadosEpisodios() {

    var instrucaoSql = `select epAtual from usuario;`
    return database.executar(instrucaoSql)

}

module.exports = {
    pegarDadosEscolhidos,
    pegarDadosEpisodios
}