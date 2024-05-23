var database = require("../database/config");

function pegarDados() {

    var instrucaoSql = `
        SELECT personagem.nome, COUNT(usuario.fkPersonagem) as escolhido FROM personagem LEFT JOIN usuario
        ON idPersonagem = fkPersonagem GROUP BY nome;
    `
    return database.executar(instrucaoSql)

}

module.exports = {
    pegarDados
}