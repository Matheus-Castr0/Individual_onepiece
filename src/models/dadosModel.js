var database = require("../database/config");

function pegarDados() {
    for (var i = 1; i <= 10; i++) {
        var instrucaoSql = `SELECT COUNT(fkPersonagem) FROM usuario WHERE fkPersonagem = ${i};`
    }
    return database.executar(instrucaoSql)
}

module.exports = {
    pegarDados
}