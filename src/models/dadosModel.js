var database = require("../database/config");

function pegarDados(fkPersonagem) {
    var instrucaoSql = `SELECT COUNT(fkPersonagem) FROM usuario WHERE fkPersonagem = ${fkPersonagem};`
    return database.executar(instrucaoSql)
}

module.exports = {
    pegarDados
}